/**
 * Cancionero - Aplicación de Guitarra con Acordes y Markdown
 * Self-contained: funciona en local (doble clic file://) y en GitHub Pages sin dependencias.
 */

(function () {
  'use strict';

  // ==========================================
  // 1. CANCIONES PREDETERMINADAS EMBEBIDAS
  // ==========================================
  const DEFAULT_SONGS = [
    {
      id: "la-flaca",
      title: "La Flaca",
      artist: "Jarabe de Palo",
      key: "Am",
      capo: 0,
      tempo: 104,
      tags: ["rock", "pop", "español"],
      file: "canciones/la-flaca.md",
      content: `---
title: "La Flaca"
artist: "Jarabe de Palo"
key: "Am"
capo: 0
tempo: 104
tags: ["rock", "pop", "español"]
---

## Intro
[Am] [Am] [Am] [Am]

## Verso 1
[Am] En la vida conocí [E7] mujer igual a la Flaca
[Dm] Coral negro de la Habana, [E7] tremendísima mulata
[Am] Cien libras de piel y hueso, [E7] cuarenta kilos de salsa
[Dm] Y en la cara dos soles [E7] que sin palabras hablaban
[Dm] Que sin palabras hablaban

## Coro
[Am] Por un beso de la Flaca daría lo que [E7] fuera
[E7] Por un beso de ella, aunque sólo uno [Am] fuera
[Am] Por un beso de la Flaca daría lo que [E7] fuera
[E7] Por un beso de ella, aunque sólo uno [Am] fuera
Aunque sólo uno [E7] fuera... [Am]

## Verso 2
[Am] Mojé mis sábanas blancas, [E7] como dice la canción
[Dm] Recordando las caricias [E7] que me brindó el primer día
[Am] Y enloquezco de ganas [E7] de dormir a su ladito
[Dm] Porque Dios que me libre [E7] de tener esa mujer
[Dm] De tener esa mujer

## Coro
[Am] Por un beso de la Flaca daría lo que [E7] fuera
[E7] Por un beso de ella, aunque sólo uno [Am] fuera
[Am] Por un beso de la Flaca daría lo que [E7] fuera
[E7] Por un beso de ella, aunque sólo uno [Am] fuera
Aunque sólo uno [E7] fuera... [Am]`
    },
    {
      id: "soldadito-marinero",
      title: "Soldadito Marinero",
      artist: "Fito & Fitipaldis",
      key: "G",
      capo: 0,
      tempo: 120,
      tags: ["rock", "español", "acústico"],
      file: "canciones/soldadito-marinero.md",
      content: `---
title: "Soldadito Marinero"
artist: "Fito & Fitipaldis"
key: "G"
capo: 0
tempo: 120
tags: ["rock", "español", "acústico"]
---

## Intro
[G] [D] [Em] [C] [G] [D] [C] [D]

## Verso 1
[G] Él era un chico rubio, casi [D] albino
[Em] Ella una mujer de ojos [C] oscuros
[G] El destino los cruzó en un [D] camino
[C] Y el amor hizo el resto, [D] te lo aseguro

[G] Él navegaba por todos los [D] mares
[Em] Ella lo esperaba en el [C] puerto
[G] Olvidándose de todos sus [D] pesares
[C] Cuando él regresaba con [D] el viento

## Coro
[G] Soldadito mari[D]nero conociste a una si[Em]rena
De esas que dicen te [C] quiero si ven la cartera [G] llena
Escogiste a la más [D] guapa y a la menos [Em] buena
Sin saber cómo te [C] ha clavado su espada en el [G] corazón [D]
En el corazón... [C] [D]

## Solo
[G] [D] [Em] [C] [G] [D] [C] [D]`
    },
    {
      id: "stand-by-me",
      title: "Stand By Me",
      artist: "Ben E. King",
      key: "A",
      capo: 2,
      tempo: 118,
      tags: ["classic", "soul", "english"],
      file: "canciones/stand-by-me.md",
      content: `---
title: "Stand By Me"
artist: "Ben E. King"
key: "A"
capo: 2
tempo: 118
tags: ["classic", "soul", "english"]
---

## Intro
[G] [Em] [C] [D] [G]

## Verse 1
When the [G] night has come
[Em] And the land is dark
And the [C] moon is the [D] only light we'll [G] see
No, I [G] won't be afraid
Oh, I [Em] won't be afraid
Just as [C] long as you [D] stand, stand by [G] me

## Chorus
So darling, darling, [G] stand by me
Oh, [Em] stand by me
Oh, [C] stand, [D] stand by me
[G] Stand by me

## Verse 2
If the [G] sky that we look upon
[Em] Should tumble and fall
Or the [C] mountain should [D] crumble to the [G] sea
I won't [G] cry, I won't cry
No, I [Em] won't shed a tear
Just as [C] long as you [D] stand, stand by [G] me

## Chorus
And darling, darling, [G] stand by me
Oh, [Em] stand by me
Oh, [C] stand now, [D] stand by me
[G] Stand by me`
    }
  ];

  // ==========================================
  // 2. MOTOR DE TRANSPOSICIÓN MUSICAL
  // ==========================================
  const ANGLO_SHARPS = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const ANGLO_FLATS  = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
  const LATIN_SHARPS = ['Do', 'Do#', 'Re', 'Re#', 'Mi', 'Fa', 'Fa#', 'Sol', 'Sol#', 'La', 'La#', 'Si'];
  const LATIN_FLATS  = ['Do', 'Reb', 'Re', 'Mib', 'Mi', 'Fa', 'Solb', 'Sol', 'Lab', 'La', 'Sib', 'Si'];

  const NOTE_MAP = {
    'C': 0, 'B#': 0, 'C#': 1, 'DB': 1, 'D': 2, 'D#': 3, 'EB': 3,
    'E': 4, 'FB': 4, 'F': 5, 'E#': 5, 'F#': 6, 'GB': 6,
    'G': 7, 'G#': 8, 'AB': 8, 'A': 9, 'A#': 10, 'BB': 10, 'B': 11, 'CB': 11,
    'DO': 0, 'SI#': 0, 'DO#': 1, 'REB': 1, 'RE': 2, 'RE#': 3, 'MIB': 3,
    'MI': 4, 'FAB': 4, 'FA': 5, 'MI#': 5, 'FA#': 6, 'SOLB': 6,
    'SOL': 7, 'SOL#': 8, 'LAB': 8, 'LA': 9, 'LA#': 10, 'SIB': 10, 'SI': 11, 'DOB': 11
  };

  const ROOT_NOTE_REGEX = /^(Sol#|Solb|Do#|Dob|Re#|Reb|Fa#|Fab|La#|Lab|Si#|Sib|Sol|Do|Re|Mi|Fa|La|Si|[CDEFGAB][#b]?)(.*)$/i;

  function parseNote(noteStr) {
    if (!noteStr) return null;
    const match = noteStr.trim().match(ROOT_NOTE_REGEX);
    if (!match) return null;

    const rawRoot = match[1];
    const suffix = match[2] || '';
    const upper = rawRoot.toUpperCase();
    const semitone = NOTE_MAP[upper];
    if (semitone === undefined) return null;

    const isLatin = /^(Sol|Do|Re|Mi|Fa|La|Si)/i.test(rawRoot);
    return { semitone, suffix, isLatin };
  }

  function transposeChord(chordStr, delta = 0, targetNotation = 'anglo', preferFlats = false) {
    if (!chordStr || typeof chordStr !== 'string') return chordStr || '';
    chordStr = chordStr.trim();

    if (chordStr.includes('/')) {
      const parts = chordStr.split('/');
      if (parts.length === 2) {
        return `${transposeChord(parts[0], delta, targetNotation, preferFlats)}/${transposeChord(parts[1], delta, targetNotation, preferFlats)}`;
      }
    }

    const parsed = parseNote(chordStr);
    if (!parsed) return chordStr;

    let newSemitone = (parsed.semitone + delta) % 12;
    if (newSemitone < 0) newSemitone += 12;

    let notation = targetNotation;
    if (notation === 'keep') {
      notation = parsed.isLatin ? 'latin' : 'anglo';
    }

    let noteName = '';
    if (notation === 'latin') {
      noteName = preferFlats ? LATIN_FLATS[newSemitone] : LATIN_SHARPS[newSemitone];
    } else {
      noteName = preferFlats ? ANGLO_FLATS[newSemitone] : ANGLO_SHARPS[newSemitone];
    }

    return `${noteName}${parsed.suffix}`;
  }

  // ==========================================
  // 3. PARSER DE MARKDOWN Y ACORDES
  // ==========================================
  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function parseSongMarkdown(markdown) {
    if (!markdown) return { meta: {}, body: '' };

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

    if (!match) return { meta, body: trimmed };

    const rawYaml = match[1];
    const body = match[2].trim();

    const lines = rawYaml.split(/\r?\n/);
    for (const line of lines) {
      const colonIdx = line.indexOf(':');
      if (colonIdx === -1) continue;

      const key = line.slice(0, colonIdx).trim().toLowerCase();
      let val = line.slice(colonIdx + 1).trim();

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

  function serializeSongMarkdown(meta, body) {
    const tagsStr = Array.isArray(meta.tags) && meta.tags.length > 0
      ? `[${meta.tags.map(t => `"${t.trim()}"`).join(', ')}]`
      : '[]';

    return [
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
  }

  function renderSongHtml(bodyText, options = {}) {
    const { transposeDelta = 0, notation = 'anglo', preferFlats = false } = options;
    if (!bodyText) return '';

    const lines = bodyText.split(/\r?\n/);
    const outputLines = [];

    for (let rawLine of lines) {
      const trimmed = rawLine.trim();

      if (trimmed === '') {
        outputLines.push('<div class="song-empty-line"></div>');
        continue;
      }

      if (trimmed.startsWith('#')) {
        const headingText = trimmed.replace(/^#+\s*/, '');
        outputLines.push(`<h3 class="song-section-heading">${escapeHtml(headingText)}</h3>`);
        continue;
      }

      const sectionMatch = trimmed.match(/^\[(Intro|Verso|Coro|Estribillo|Puente|Solo|Outro|Final|Pre-coro|Bridge|Chorus|Verse)[^\]]*\]$/i);
      if (sectionMatch) {
        outputLines.push(`<h3 class="song-section-heading">${escapeHtml(trimmed.slice(1, -1))}</h3>`);
        continue;
      }

      if (trimmed.startsWith('//') || trimmed.startsWith('>')) {
        const commentText = trimmed.replace(/^(\/\/|>)\s*/, '');
        outputLines.push(`<div class="song-comment">${escapeHtml(commentText)}</div>`);
        continue;
      }

      const lineHtml = parseLineWithChords(rawLine, transposeDelta, notation, preferFlats);
      outputLines.push(`<div class="song-line">${lineHtml}</div>`);
    }

    return outputLines.join('\n');
  }

  function parseLineWithChords(line, transposeDelta, notation, preferFlats) {
    const chordRegex = /\[([^\]]+)\]/g;
    let match;
    let lastIndex = 0;
    const segments = [];

    while ((match = chordRegex.exec(line)) !== null) {
      const matchStart = match.index;
      const rawChord = match[1];

      if (matchStart > lastIndex) {
        const lyricBefore = line.substring(lastIndex, matchStart);
        if (segments.length === 0 || segments[segments.length - 1].lyric !== null) {
          segments.push({ chord: null, lyric: lyricBefore });
        } else {
          segments[segments.length - 1].lyric = lyricBefore;
        }
      }

      const transposed = transposeChord(rawChord, transposeDelta, notation, preferFlats);
      segments.push({ chord: transposed, lyric: null });
      lastIndex = chordRegex.lastIndex;
    }

    if (lastIndex < line.length) {
      const trailingLyric = line.substring(lastIndex);
      if (segments.length > 0 && segments[segments.length - 1].lyric === null) {
        segments[segments.length - 1].lyric = trailingLyric;
      } else {
        segments.push({ chord: null, lyric: trailingLyric });
      }
    }

    if (segments.length === 0) {
      return `<span class="chord-unit"><span class="chord empty">&nbsp;</span><span class="lyric">${escapeHtml(line)}</span></span>`;
    }

    return segments.map(seg => {
      const chordHtml = seg.chord
        ? `<span class="chord">${escapeHtml(seg.chord)}</span>`
        : `<span class="chord empty">&nbsp;</span>`;

      let lyricText = seg.lyric !== null ? seg.lyric : '';
      if (!lyricText && seg.chord) {
        lyricText = '\u00A0'.repeat(Math.max(seg.chord.length + 1, 3));
      }

      const safeLyric = escapeHtml(lyricText).replace(/ /g, '&nbsp;');
      return `<span class="chord-unit">${chordHtml}<span class="lyric">${safeLyric}</span></span>`;
    }).join('');
  }

  // ==========================================
  // 4. CLIENTE API GITHUB
  // ==========================================
  const STORAGE_KEY = 'cancionero_github_config';

  function getGithubConfig() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { token: '', repo: '', branch: 'main' };
      return JSON.parse(raw);
    } catch (e) {
      return { token: '', repo: '', branch: 'main' };
    }
  }

  function saveGithubConfig(config) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      token: (config.token || '').trim(),
      repo: (config.repo || '').trim(),
      branch: (config.branch || 'main').trim()
    }));
  }

  function utf8ToBase64(str) {
    const bytes = new TextEncoder().encode(str);
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  function base64ToUtf8(base64) {
    const binary = atob(base64.replace(/\s/g, ''));
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return new TextDecoder().decode(bytes);
  }

  function slugify(text) {
    return (text || 'cancion')
      .toString()
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  async function publishToGithub(songMeta, markdownContent) {
    const config = getGithubConfig();

    if (!config.token || !config.repo) {
      throw new Error('Debes configurar tu Repositorio y Token de GitHub en Ajustes (icono ⚙️).');
    }

    const [owner, repo] = config.repo.split('/');
    if (!owner || !repo) {
      throw new Error('El repositorio debe tener el formato: usuario/nombre-del-repo (ej. miusuario/canciones)');
    }

    const branch = config.branch || 'main';
    const slug = slugify(songMeta.title);
    const songFilePath = `canciones/${slug}.md`;
    const manifestPath = `canciones/manifest.json`;

    const headers = {
      'Accept': 'application/vnd.github+json',
      'Authorization': `Bearer ${config.token}`,
      'X-GitHub-Api-Version': '2022-11-28'
    };

    async function getFileDetails(path) {
      const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;
      const res = await fetch(url, { headers });
      if (res.status === 404) return null;
      if (!res.ok) {
        if (res.status === 401) throw new Error('Token de GitHub no autorizado o expirado.');
        throw new Error(`Error ${res.status} al consultar ${path}`);
      }
      return await res.json();
    }

    // 1. Guardar archivo .md de la canción
    const existingSong = await getFileDetails(songFilePath);
    const songBase64 = utf8ToBase64(markdownContent);

    const putSongUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${songFilePath}`;
    const putSongBody = {
      message: `${existingSong ? 'Actualizar' : 'Añadir'} canción: ${songMeta.title}`,
      content: songBase64,
      branch
    };
    if (existingSong && existingSong.sha) {
      putSongBody.sha = existingSong.sha;
    }

    const putSongRes = await fetch(putSongUrl, {
      method: 'PUT',
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify(putSongBody)
    });

    if (!putSongRes.ok) {
      const errData = await putSongRes.json().catch(() => ({}));
      throw new Error(`No se pudo guardar la canción: ${errData.message || putSongRes.statusText}`);
    }

    // 2. Actualizar canciones/manifest.json con contenido embebido para que cargue instantáneamente
    const existingManifest = await getFileDetails(manifestPath);
    let manifestList = [];

    if (existingManifest && existingManifest.content) {
      try {
        const decodedJson = base64ToUtf8(existingManifest.content);
        manifestList = JSON.parse(decodedJson);
      } catch (e) {
        manifestList = [];
      }
    }

    const songEntry = {
      id: slug,
      title: songMeta.title,
      artist: songMeta.artist || 'Desconocido',
      key: songMeta.key || 'C',
      capo: parseInt(songMeta.capo, 10) || 0,
      tempo: songMeta.tempo ? parseInt(songMeta.tempo, 10) : null,
      tags: Array.isArray(songMeta.tags) ? songMeta.tags : [],
      file: songFilePath,
      content: markdownContent
    };

    const existingIndex = manifestList.findIndex(item => item.id === slug);
    if (existingIndex >= 0) {
      manifestList[existingIndex] = songEntry;
    } else {
      manifestList.push(songEntry);
    }

    manifestList.sort((a, b) => a.title.localeCompare(b.title, 'es', { sensitivity: 'base' }));

    const manifestBase64 = utf8ToBase64(JSON.stringify(manifestList, null, 2) + '\n');
    const putManifestUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${manifestPath}`;
    const putManifestBody = {
      message: `Actualizar índice con: ${songMeta.title}`,
      content: manifestBase64,
      branch
    };
    if (existingManifest && existingManifest.sha) {
      putManifestBody.sha = existingManifest.sha;
    }

    await fetch(putManifestUrl, {
      method: 'PUT',
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify(putManifestBody)
    });

    return {
      success: true,
      slug,
      message: `¡Canción "${songMeta.title}" publicada con éxito en GitHub! GitHub Pages se actualizará automáticamente.`
    };
  }

  // ==========================================
  // 5. ESTADO DE LA APLICACIÓN Y CONTROLADOR
  // ==========================================
  const state = {
    songs: [],
    currentSongId: null,
    currentMeta: null,
    currentBody: '',
    transposeDelta: 0,
    notation: localStorage.getItem('cancionero_notation') || 'anglo',
    fontSizePercent: 100,
    theme: localStorage.getItem('cancionero_theme') || 'dark',

    autoScrollActive: false,
    autoScrollPaused: false,
    autoScrollSpeed: 3,
    scrollAnimationId: null,

    editingSongId: null
  };

  const elements = {
    html: document.documentElement,
    brandLink: document.getElementById('brand-link'),
    sidebar: document.getElementById('sidebar'),
    btnToggleSidebar: document.getElementById('btn-toggle-sidebar'),
    songList: document.getElementById('song-list'),
    songCount: document.getElementById('song-count'),
    searchInput: document.getElementById('search-input'),

    emptyView: document.getElementById('empty-view'),
    songView: document.getElementById('song-view'),

    viewTitle: document.getElementById('view-title'),
    viewArtist: document.getElementById('view-artist'),
    viewBadges: document.getElementById('view-badges'),
    songBodyContainer: document.getElementById('song-body-container'),
    btnEditCurrent: document.getElementById('btn-edit-current'),

    btnTransposeDown: document.getElementById('btn-transpose-down'),
    btnTransposeUp: document.getElementById('btn-transpose-up'),
    btnTransposeReset: document.getElementById('btn-transpose-reset'),
    displayTranspose: document.getElementById('display-transpose'),
    btnToggleNotation: document.getElementById('btn-toggle-notation'),
    btnFontSmaller: document.getElementById('btn-font-smaller'),
    btnFontLarger: document.getElementById('btn-font-larger'),
    displayFontSize: document.getElementById('display-font-size'),
    btnStartScroll: document.getElementById('btn-start-scroll'),

    autoScrollControls: document.getElementById('autoscroll-controls'),
    btnScrollPause: document.getElementById('btn-scroll-pause'),
    scrollSpeedSlider: document.getElementById('scroll-speed'),
    btnScrollStop: document.getElementById('btn-scroll-stop'),

    btnThemeToggle: document.getElementById('btn-theme-toggle'),
    btnSettings: document.getElementById('btn-settings'),
    modalSettings: document.getElementById('modal-settings'),
    btnCloseSettings: document.getElementById('btn-close-settings'),
    btnSaveSettings: document.getElementById('btn-save-settings'),
    settingRepo: document.getElementById('setting-repo'),
    settingBranch: document.getElementById('setting-branch'),
    settingToken: document.getElementById('setting-token'),
    settingDefaultNotation: document.getElementById('setting-default-notation'),
    btnClearCache: document.getElementById('btn-clear-cache'),

    btnNewSong: document.getElementById('btn-new-song'),
    modalEditor: document.getElementById('modal-editor'),
    btnCloseEditor: document.getElementById('btn-close-editor'),
    editorModalTitle: document.getElementById('editor-modal-title'),
    formTitle: document.getElementById('form-title'),
    formArtist: document.getElementById('form-artist'),
    formKey: document.getElementById('form-key'),
    formCapo: document.getElementById('form-capo'),
    formTempo: document.getElementById('form-tempo'),
    formTags: document.getElementById('form-tags'),
    formBody: document.getElementById('form-body'),
    editorPreview: document.getElementById('editor-preview'),
    chordHelperChips: document.getElementById('chord-helper-chips'),
    btnCopyMd: document.getElementById('btn-copy-md'),
    btnDownloadMd: document.getElementById('btn-download-md'),
    btnSaveLocal: document.getElementById('btn-save-local'),
    btnPublishGithub: document.getElementById('btn-publish-github'),

    toast: document.getElementById('toast'),
    toastMessage: document.getElementById('toast-message')
  };

  function showToast(message, duration = 3000) {
    if (!elements.toast || !elements.toastMessage) return;
    elements.toastMessage.textContent = message;
    elements.toast.classList.remove('hidden');
    clearTimeout(elements.toast._timer);
    elements.toast._timer = setTimeout(() => {
      elements.toast.classList.add('hidden');
    }, duration);
  }

  function initTheme() {
    elements.html.setAttribute('data-theme', state.theme);
    if (elements.btnThemeToggle) {
      elements.btnThemeToggle.textContent = state.theme === 'dark' ? '☀️' : '🌙';
    }
  }

  function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('cancionero_theme', state.theme);
    initTheme();
  }

  /**
   * Carga las canciones:
   * 1. Comienza con las canciones predeterminadas (DEFAULT_SONGS) para que SIEMPRE haya canciones
   * 2. Incorpora canciones de localStorage (creadas por el usuario en el navegador)
   * 3. Intenta sincronizar con manifest.json si la red lo permite
   */
  async function loadSongs() {
    const map = new Map();

    // 1. Cargar las canciones base (garantiza que siempre hay canciones aún sin red o en file://)
    DEFAULT_SONGS.forEach(song => {
      map.set(song.id, { ...song });
    });

    // 2. Incorporar canciones guardadas en localStorage
    try {
      const localSongsRaw = localStorage.getItem('cancionero_local_songs');
      if (localSongsRaw) {
        const localSongs = JSON.parse(localSongsRaw);
        localSongs.forEach(song => map.set(song.id, { ...song, isLocal: true }));
      }
    } catch (e) {
      console.warn('Error leyendo canciones locales:', e);
    }

    // 3. Si hay servidor/red, intentar enriquecer con manifest.json
    try {
      const res = await fetch('canciones/manifest.json');
      if (res.ok) {
        const manifest = await res.json();
        manifest.forEach(song => {
          // Si manifest tiene contenido, o si no teníamos esta canción en el mapa
          const existing = map.get(song.id);
          if (existing) {
            map.set(song.id, { ...existing, ...song });
          } else {
            map.set(song.id, { ...song });
          }
        });
      }
    } catch (err) {
      // Normal en protocolo file:// o sin conexión
      console.log('Modo local/offline activo (sin manifest remoto).');
    }

    state.songs = Array.from(map.values());
    state.songs.sort((a, b) => a.title.localeCompare(b.title, 'es', { sensitivity: 'base' }));

    renderSongList();

    // Seleccionar por hash URL o primera canción
    const hash = window.location.hash.replace(/^#/, '');
    if (hash && map.has(hash)) {
      selectSong(hash);
    } else if (state.songs.length > 0 && !state.currentSongId) {
      selectSong(state.songs[0].id);
    }
  }

  function renderSongList(filteredSongs = null) {
    const list = filteredSongs || state.songs;
    elements.songCount.textContent = list.length;
    elements.songList.innerHTML = '';

    if (list.length === 0) {
      elements.songList.innerHTML = `
        <li style="padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
          No se encontraron canciones.
        </li>
      `;
      return;
    }

    list.forEach(song => {
      const li = document.createElement('li');
      li.className = `song-item ${song.id === state.currentSongId ? 'active' : ''}`;
      li.dataset.id = song.id;

      const keyDisplay = transposeChord(song.key || 'C', 0, state.notation);

      li.innerHTML = `
        <div class="song-item-title">${escapeHtml(song.title)}</div>
        <div class="song-item-artist">${escapeHtml(song.artist || 'Desconocido')}</div>
        <div class="song-item-meta">
          <span class="badge badge-key">${escapeHtml(keyDisplay)}</span>
          ${song.capo ? `<span class="badge">Capo ${song.capo}</span>` : ''}
          ${song.isLocal ? '<span class="badge" style="background:#e0e7ff;color:#3730a3;">Local</span>' : ''}
        </div>
      `;

      li.addEventListener('click', () => {
        selectSong(song.id);
        if (window.innerWidth <= 800) {
          elements.sidebar.classList.remove('open');
        }
      });

      elements.songList.appendChild(li);
    });
  }

  /**
   * Muestra la canción seleccionada
   */
  async function selectSong(id) {
    const song = state.songs.find(s => s.id === id);
    if (!song) return;

    state.currentSongId = id;
    state.transposeDelta = 0;

    // Actualizar hash de URL sin saltar el scroll
    try {
      history.replaceState(null, '', `#${id}`);
    } catch (e) {
      window.location.hash = id;
    }

    // Marcar activo en el sidebar
    document.querySelectorAll('.song-item').forEach(el => {
      el.classList.toggle('active', el.dataset.id === id);
    });

    stopAutoScroll();

    let markdownContent = song.content || '';

    // Si no tenemos el contenido en memoria, intentamos descargarlo por fetch
    if (!markdownContent && song.file) {
      try {
        const res = await fetch(song.file);
        if (res.ok) {
          markdownContent = await res.text();
          song.content = markdownContent;
        }
      } catch (e) {
        console.warn('No se pudo cargar el archivo externo:', song.file);
      }
    }

    // Si aún no tenemos contenido, creamos una plantilla con la metadata
    if (!markdownContent) {
      markdownContent = `---
title: "${song.title}"
artist: "${song.artist || 'Desconocido'}"
key: "${song.key || 'C'}"
capo: ${song.capo || 0}
---

## Letra no disponible
[${song.key || 'C'}] Puedes pulsar en ✏️ Editar para añadir la letra y los acordes de esta canción.`;
    }

    const { meta, body } = parseSongMarkdown(markdownContent);
    state.currentMeta = { ...song, ...meta };
    state.currentBody = body;

    renderActiveSong();

    // Mostrar el visor y ocultar el estado vacío
    elements.emptyView.classList.add('hidden');
    elements.songView.classList.remove('hidden');

    // Scroll arriba
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderActiveSong() {
    if (!state.currentMeta) return;

    const meta = state.currentMeta;
    elements.viewTitle.textContent = meta.title;
    elements.viewArtist.textContent = meta.artist;

    const currentKey = transposeChord(meta.key || 'C', state.transposeDelta, state.notation);

    let badgesHtml = `
      <span class="badge badge-key" title="Tono actual">Tono: <strong>${escapeHtml(currentKey)}</strong></span>
    `;

    if (meta.capo > 0) {
      badgesHtml += `<span class="badge" title="Cejilla">🎸 Capo ${meta.capo}º traste</span>`;
    }
    if (meta.tempo) {
      badgesHtml += `<span class="badge" title="Tempo">⏱ ${meta.tempo} BPM</span>`;
    }
    if (Array.isArray(meta.tags)) {
      meta.tags.forEach(t => {
        badgesHtml += `<span class="badge">#${escapeHtml(t)}</span>`;
      });
    }

    elements.viewBadges.innerHTML = badgesHtml;

    if (state.transposeDelta === 0) {
      elements.displayTranspose.textContent = 'Orig';
    } else {
      const sign = state.transposeDelta > 0 ? '+' : '';
      elements.displayTranspose.textContent = `${sign}${state.transposeDelta}`;
    }

    elements.btnToggleNotation.textContent = state.notation === 'anglo' ? 'C D E' : 'Do Re Mi';

    const renderedHtml = renderSongHtml(state.currentBody, {
      transposeDelta: state.transposeDelta,
      notation: state.notation
    });

    elements.songBodyContainer.innerHTML = renderedHtml;
  }

  // ==========================================
  // 6. AUTO-SCROLL
  // ==========================================
  let lastScrollTimestamp = null;
  function autoScrollStep(timestamp) {
    if (!state.autoScrollActive || state.autoScrollPaused) {
      lastScrollTimestamp = null;
      return;
    }

    if (!lastScrollTimestamp) {
      lastScrollTimestamp = timestamp;
    }

    const elapsed = timestamp - lastScrollTimestamp;
    if (elapsed > 20) {
      const pixels = (state.autoScrollSpeed * 0.45);
      window.scrollBy({ top: pixels, behavior: 'instant' });
      lastScrollTimestamp = timestamp;

      if ((window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 10)) {
        stopAutoScroll();
        showToast('Fin de la canción alcanzado');
        return;
      }
    }

    state.scrollAnimationId = requestAnimationFrame(autoScrollStep);
  }

  function startAutoScroll() {
    state.autoScrollActive = true;
    state.autoScrollPaused = false;
    elements.btnScrollPause.textContent = '⏸';
    elements.autoScrollControls.classList.remove('hidden');
    state.scrollAnimationId = requestAnimationFrame(autoScrollStep);
  }

  function pauseAutoScroll() {
    if (!state.autoScrollActive) return;
    state.autoScrollPaused = !state.autoScrollPaused;
    elements.btnScrollPause.textContent = state.autoScrollPaused ? '▶' : '⏸';
    if (!state.autoScrollPaused) {
      lastScrollTimestamp = null;
      state.scrollAnimationId = requestAnimationFrame(autoScrollStep);
    }
  }

  function stopAutoScroll() {
    state.autoScrollActive = false;
    state.autoScrollPaused = false;
    if (state.scrollAnimationId) {
      cancelAnimationFrame(state.scrollAnimationId);
      state.scrollAnimationId = null;
    }
    elements.autoScrollControls.classList.add('hidden');
  }

  // ==========================================
  // 7. FORMULARIO Y EDITOR
  // ==========================================
  function openEditor(songToEdit = null) {
    if (songToEdit) {
      state.editingSongId = songToEdit.id;
      elements.editorModalTitle.textContent = `Editar: ${songToEdit.title}`;
      elements.formTitle.value = songToEdit.title || '';
      elements.formArtist.value = songToEdit.artist || '';
      elements.formKey.value = songToEdit.key || 'C';
      elements.formCapo.value = songToEdit.capo || 0;
      elements.formTempo.value = songToEdit.tempo || '';
      elements.formTags.value = Array.isArray(songToEdit.tags) ? songToEdit.tags.join(', ') : '';
      elements.formBody.value = state.currentBody || '';
    } else {
      state.editingSongId = null;
      elements.editorModalTitle.textContent = 'Añadir Nueva Canción';
      elements.formTitle.value = '';
      elements.formArtist.value = '';
      elements.formKey.value = 'G';
      elements.formCapo.value = '0';
      elements.formTempo.value = '';
      elements.formTags.value = '';
      elements.formBody.value = '## Intro\n[G] [D] [Em] [C]\n\n## Verso 1\n[G] Escribe aquí la letra con [D] acordes sobre la palabra\n[Em] y se alineará [C] automáticamente.';
    }

    updateEditorPreview();
    elements.modalEditor.classList.remove('hidden');
  }

  function closeEditor() {
    elements.modalEditor.classList.add('hidden');
  }

  function getEditorFormData() {
    const title = elements.formTitle.value.trim();
    const artist = elements.formArtist.value.trim() || 'Desconocido';
    const key = elements.formKey.value;
    const capo = parseInt(elements.formCapo.value, 10) || 0;
    const tempo = parseInt(elements.formTempo.value, 10) || null;
    const tags = elements.formTags.value.split(',').map(t => t.trim()).filter(Boolean);
    const body = elements.formBody.value;

    const meta = { title, artist, key, capo, tempo, tags };
    const markdown = serializeSongMarkdown(meta, body);
    return { meta, body, markdown };
  }

  function updateEditorPreview() {
    const { body } = getEditorFormData();
    const previewHtml = renderSongHtml(body, {
      transposeDelta: 0,
      notation: state.notation
    });
    elements.editorPreview.innerHTML = previewHtml || '<span style="color:var(--text-dim);font-style:italic;">Escribe la letra para ver la vista previa...</span>';
  }

  function saveSongLocally(meta, body, markdown) {
    const slug = state.editingSongId || slugify(meta.title);
    const songEntry = {
      id: slug,
      title: meta.title,
      artist: meta.artist,
      key: meta.key,
      capo: meta.capo,
      tempo: meta.tempo,
      tags: meta.tags,
      content: markdown,
      isLocal: true
    };

    let localSongs = [];
    try {
      const raw = localStorage.getItem('cancionero_local_songs');
      if (raw) localSongs = JSON.parse(raw);
    } catch (e) {
      localSongs = [];
    }

    const existingIdx = localSongs.findIndex(s => s.id === slug);
    if (existingIdx >= 0) {
      localSongs[existingIdx] = songEntry;
    } else {
      localSongs.push(songEntry);
    }

    localStorage.setItem('cancionero_local_songs', JSON.stringify(localSongs));

    showToast(`Canción "${meta.title}" guardada con éxito.`);
    closeEditor();
    loadSongs();
    selectSong(slug);
  }

  function downloadSongMarkdown(meta, markdown) {
    const filename = `${slugify(meta.title)}.md`;
    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(`Archivo ${filename} descargado.`);
  }

  // ==========================================
  // 8. EVENTOS DE INTERFAZ
  // ==========================================
  function initEvents() {
    elements.btnThemeToggle.addEventListener('click', toggleTheme);

    elements.btnToggleSidebar.addEventListener('click', () => {
      elements.sidebar.classList.toggle('open');
    });

    elements.searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        renderSongList();
        return;
      }
      const filtered = state.songs.filter(s => {
        const titleMatch = (s.title || '').toLowerCase().includes(q);
        const artistMatch = (s.artist || '').toLowerCase().includes(q);
        const keyMatch = (s.key || '').toLowerCase().includes(q);
        const tagMatch = Array.isArray(s.tags) && s.tags.some(t => t.toLowerCase().includes(q));
        return titleMatch || artistMatch || keyMatch || tagMatch;
      });
      renderSongList(filtered);
    });

    elements.btnTransposeUp.addEventListener('click', () => {
      state.transposeDelta = (state.transposeDelta + 1) % 12;
      renderActiveSong();
    });
    elements.btnTransposeDown.addEventListener('click', () => {
      state.transposeDelta = (state.transposeDelta - 1) % 12;
      renderActiveSong();
    });
    elements.btnTransposeReset.addEventListener('click', () => {
      state.transposeDelta = 0;
      renderActiveSong();
    });

    elements.btnToggleNotation.addEventListener('click', () => {
      state.notation = state.notation === 'anglo' ? 'latin' : 'anglo';
      localStorage.setItem('cancionero_notation', state.notation);
      renderActiveSong();
      renderSongList();
    });

    elements.btnFontLarger.addEventListener('click', () => {
      if (state.fontSizePercent < 180) {
        state.fontSizePercent += 10;
        elements.displayFontSize.textContent = `${state.fontSizePercent}%`;
        elements.songBodyContainer.style.fontSize = `${state.fontSizePercent}%`;
      }
    });
    elements.btnFontSmaller.addEventListener('click', () => {
      if (state.fontSizePercent > 70) {
        state.fontSizePercent -= 10;
        elements.displayFontSize.textContent = `${state.fontSizePercent}%`;
        elements.songBodyContainer.style.fontSize = `${state.fontSizePercent}%`;
      }
    });

    elements.btnStartScroll.addEventListener('click', startAutoScroll);
    elements.btnScrollPause.addEventListener('click', pauseAutoScroll);
    elements.btnScrollStop.addEventListener('click', stopAutoScroll);
    elements.scrollSpeedSlider.addEventListener('input', (e) => {
      state.autoScrollSpeed = parseInt(e.target.value, 10);
    });

    elements.btnNewSong.addEventListener('click', () => openEditor(null));
    elements.btnEditCurrent.addEventListener('click', () => {
      if (state.currentMeta) openEditor(state.currentMeta);
    });
    elements.btnCloseEditor.addEventListener('click', closeEditor);

    ['input', 'change'].forEach(evt => {
      elements.formTitle.addEventListener(evt, updateEditorPreview);
      elements.formArtist.addEventListener(evt, updateEditorPreview);
      elements.formKey.addEventListener(evt, updateEditorPreview);
      elements.formCapo.addEventListener(evt, updateEditorPreview);
      elements.formBody.addEventListener(evt, updateEditorPreview);
    });

    elements.chordHelperChips.addEventListener('click', (e) => {
      const chip = e.target.closest('.chord-chip');
      if (!chip) return;
      const toInsert = chip.dataset.insert;
      const textarea = elements.formBody;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const text = textarea.value;

      textarea.value = text.substring(0, start) + toInsert + text.substring(end);
      textarea.selectionStart = textarea.selectionEnd = start + toInsert.length;
      textarea.focus();
      updateEditorPreview();
    });

    elements.btnCopyMd.addEventListener('click', async () => {
      const { meta, markdown } = getEditorFormData();
      if (!meta.title) {
        showToast('Por favor añade al menos el título de la canción.');
        return;
      }
      try {
        await navigator.clipboard.writeText(markdown);
        showToast('¡Markdown copiado al portapapeles!');
      } catch (e) {
        showToast('Copia manual: selecciona el texto del editor.');
      }
    });

    elements.btnDownloadMd.addEventListener('click', () => {
      const { meta, markdown } = getEditorFormData();
      if (!meta.title) {
        showToast('Por favor añade al menos el título de la canción.');
        return;
      }
      downloadSongMarkdown(meta, markdown);
    });

    elements.btnSaveLocal.addEventListener('click', () => {
      const { meta, body, markdown } = getEditorFormData();
      if (!meta.title) {
        showToast('Por favor introduce un título.');
        return;
      }
      saveSongLocally(meta, body, markdown);
    });

    elements.btnPublishGithub.addEventListener('click', async () => {
      const { meta, markdown } = getEditorFormData();
      if (!meta.title) {
        showToast('Por favor introduce un título para la canción.');
        return;
      }

      const originalText = elements.btnPublishGithub.innerHTML;
      elements.btnPublishGithub.disabled = true;
      elements.btnPublishGithub.innerHTML = '⏳ Publicando...';

      try {
        const result = await publishToGithub(meta, markdown);
        showToast(result.message, 5000);
        closeEditor();
        setTimeout(() => {
          loadSongs();
          selectSong(result.slug);
        }, 1000);
      } catch (err) {
        showToast(`Error: ${err.message}`, 6000);
      } finally {
        elements.btnPublishGithub.disabled = false;
        elements.btnPublishGithub.innerHTML = originalText;
      }
    });

    elements.btnSettings.addEventListener('click', () => {
      const cfg = getGithubConfig();
      elements.settingRepo.value = cfg.repo || '';
      elements.settingBranch.value = cfg.branch || 'main';
      elements.settingToken.value = cfg.token || '';
      elements.settingDefaultNotation.value = state.notation;
      elements.modalSettings.classList.remove('hidden');
    });

    elements.btnCloseSettings.addEventListener('click', () => {
      elements.modalSettings.classList.add('hidden');
    });

    elements.btnSaveSettings.addEventListener('click', () => {
      saveGithubConfig({
        repo: elements.settingRepo.value,
        branch: elements.settingBranch.value,
        token: elements.settingToken.value
      });
      state.notation = elements.settingDefaultNotation.value;
      localStorage.setItem('cancionero_notation', state.notation);
      elements.modalSettings.classList.add('hidden');
      showToast('Ajustes guardados correctamente.');
      renderActiveSong();
      renderSongList();
    });

    elements.btnClearCache.addEventListener('click', () => {
      if (confirm('¿Restablecer y borrar canciones locales guardadas en este navegador?')) {
        localStorage.removeItem('cancionero_local_songs');
        elements.modalSettings.classList.add('hidden');
        loadSongs();
        showToast('Canciones locales eliminadas.');
      }
    });
  }

  // Arranque inicial
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initEvents();
    loadSongs();
  });

  // Si el DOM ya cargó
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    initTheme();
    initEvents();
    loadSongs();
  }
})();
