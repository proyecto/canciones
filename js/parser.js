/**
 * Markdown Song and Chord Parser
 * Parses Frontmatter YAML and chord-over-lyric structures
 */

import { transposeChord } from './transposer.js';

/**
 * Escapes HTML characters to prevent XSS and formatting breaks
 */
export function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Parses frontmatter YAML and returns { meta, body }
 */
export function parseSongMarkdown(markdown) {
  if (!markdown) {
    return { meta: {}, body: '' };
  }

  const trimmed = markdown.trim();
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;
  const match = trimmed.match(frontmatterRegex);

  const meta = {
    title: 'Sin título',
    artist: 'Desconocido',
    key: 'C',
    capo: 0,
    tempo: null,
    tags: []
  };

  if (!match) {
    return { meta, body: trimmed };
  }

  const rawYaml = match[1];
  const body = match[2].trim();

  // Parse simple YAML lines
  const lines = rawYaml.split(/\r?\n/);
  for (const line of lines) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;

    const key = line.slice(0, colonIdx).trim().toLowerCase();
    let val = line.slice(colonIdx + 1).trim();

    // Strip surrounding quotes
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }

    if (key === 'title') meta.title = val;
    else if (key === 'artist') meta.artist = val;
    else if (key === 'key') meta.key = val;
    else if (key === 'capo') meta.capo = parseInt(val, 10) || 0;
    else if (key === 'tempo' || key === 'bpm') meta.tempo = parseInt(val, 10) || null;
    else if (key === 'tags') {
      try {
        if (val.startsWith('[') && val.endsWith(']')) {
          meta.tags = JSON.parse(val.replace(/'/g, '"'));
        } else {
          meta.tags = val.split(',').map(t => t.trim()).filter(Boolean);
        }
      } catch (e) {
        meta.tags = val.split(',').map(t => t.trim()).filter(Boolean);
      }
    }
  }

  return { meta, body };
}

/**
 * Serializes meta and body into a valid Markdown song file
 */
export function serializeSongMarkdown(meta, body) {
  const tagsStr = Array.isArray(meta.tags) && meta.tags.length > 0
    ? `[${meta.tags.map(t => `"${t.trim()}"`).join(', ')}]`
    : '[]';

  const frontmatter = [
    '---',
    `title: "${(meta.title || '').replace(/"/g, '\\"')}"`,
    `artist: "${(meta.artist || '').replace(/"/g, '\\"')}"`,
    `key: "${meta.key || 'C'}"`,
    `capo: ${parseInt(meta.capo, 10) || 0}`,
    meta.tempo ? `tempo: ${meta.tempo}` : null,
    `tags: ${tagsStr}`,
    '---',
    '',
    (body || '').trim()
  ].filter(line => line !== null).join('\n');

  return frontmatter;
}

/**
 * Parses lines with [Chord] markers into HTML with chords positioned above syllables
 */
export function renderSongHtml(bodyText, options = {}) {
  const {
    transposeDelta = 0,
    notation = 'anglo',
    preferFlats = false
  } = options;

  if (!bodyText) return '';

  const lines = bodyText.split(/\r?\n/);
  const outputLines = [];

  for (let rawLine of lines) {
    const trimmed = rawLine.trim();

    // Empty line -> vertical space
    if (trimmed === '') {
      outputLines.push('<div class="song-empty-line"></div>');
      continue;
    }

    // Section headings (e.g. ## Intro, ## Coro, [Estribillo])
    if (trimmed.startsWith('#')) {
      const headingText = trimmed.replace(/^#+\s*/, '');
      outputLines.push(`<h3 class="song-section-heading">${escapeHtml(headingText)}</h3>`);
      continue;
    }

    // Section in brackets like [Intro] or [Coro] with no other text
    const sectionMatch = trimmed.match(/^\[(Intro|Verso|Coro|Estribillo|Puente|Solo|Outro|Final|Pre-coro|Bridge|Chorus|Verse)[^\]]*\]$/i);
    if (sectionMatch) {
      outputLines.push(`<h3 class="song-section-heading">${escapeHtml(trimmed.slice(1, -1))}</h3>`);
      continue;
    }

    // Comments like // Capo 2 or > Nota
    if (trimmed.startsWith('//') || trimmed.startsWith('>')) {
      const commentText = trimmed.replace(/^(\/\/|>)\s*/, '');
      outputLines.push(`<div class="song-comment">${escapeHtml(commentText)}</div>`);
      continue;
    }

    // Line with chords and/or lyrics
    const { html: lineHtml, isChordsOnly } = parseLineWithChords(rawLine, transposeDelta, notation, preferFlats);
    const lineClass = isChordsOnly ? 'song-line chords-only' : 'song-line';
    outputLines.push(`<div class="${lineClass}">${lineHtml}</div>`);
  }

  return outputLines.join('\n');
}

/**
 * Parses a single line: extracts chords between [ ... ] and lyrics
 */
function parseLineWithChords(line, transposeDelta, notation, preferFlats) {
  // Regex to match [Chord]
  const chordRegex = /\[([^\]]+)\]/g;
  let match;
  let lastIndex = 0;
  const segments = [];

  while ((match = chordRegex.exec(line)) !== null) {
    const matchStart = match.index;
    const rawChord = match[1];

    // If there is lyrics before this chord
    if (matchStart > lastIndex) {
      const lyricBefore = line.substring(lastIndex, matchStart);
      // If we don't have an active chord segment to attach this lyric to, create a blank chord segment
      if (segments.length === 0 || segments[segments.length - 1].lyric !== null) {
        segments.push({ chord: null, lyric: lyricBefore });
      } else {
        segments[segments.length - 1].lyric = lyricBefore;
      }
    }

    // Transpose the chord
    const transposed = transposeChord(rawChord, transposeDelta, notation, preferFlats);
    segments.push({ chord: transposed, lyric: null });

    lastIndex = chordRegex.lastIndex;
  }

  // Any remaining lyric at end of line
  if (lastIndex < line.length) {
    const trailingLyric = line.substring(lastIndex);
    if (segments.length > 0 && segments[segments.length - 1].lyric === null) {
      segments[segments.length - 1].lyric = trailingLyric;
    } else {
      segments.push({ chord: null, lyric: trailingLyric });
    }
  }

  // If no chords were found at all in the line:
  if (segments.length === 0) {
    return {
      html: `<span class="chord-unit"><span class="chord empty">&nbsp;</span><span class="lyric">${escapeHtml(line)}</span></span>`,
      isChordsOnly: false
    };
  }

  // Check if line contains only chords and whitespace/separators (no actual lyrics words)
  const isChordsOnly = segments.length > 0 && segments.every(seg => 
    !seg.lyric || seg.lyric.trim() === '' || /^[\s/|\\-_()0-9xX]+$/.test(seg.lyric)
  );

  // Render segments into HTML
  const lineHtml = segments.map(seg => {
    const isChordOnly = seg.chord && (!seg.lyric || seg.lyric.trim() === '');
    const chordHtml = seg.chord
      ? `<span class="chord">${escapeHtml(seg.chord)}</span>`
      : `<span class="chord empty">&nbsp;</span>`;

    // If chord has no text underneath (like intro chords or consecutive notes), provide generous spacing
    let lyricText = seg.lyric !== null ? seg.lyric : '';
    if (isChordOnly) {
      // Add minimum width non-breaking space for solo chords
      lyricText = '\u00A0'.repeat(Math.max(seg.chord.length + 3, 5));
    }

    // Preserve whitespace in lyrics
    const safeLyric = escapeHtml(lyricText).replace(/ /g, '&nbsp;');
    const unitClass = isChordOnly ? 'chord-unit chord-only' : 'chord-unit';
    return `<span class="${unitClass}">${chordHtml}<span class="lyric">${safeLyric}</span></span>`;
  }).join('');

  return { html: lineHtml, isChordsOnly };
}
