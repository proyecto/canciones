/**
 * Transposer and Musical Notation Engine
 * Supports Anglo (C, D, E...) and Latin (Do, Re, Mi...) notations,
 * sharps (#), flats (b), slash chords (G/B, Do/Mi), and extensions (m, 7, maj7, etc.)
 */

export const ANGLO_SHARPS = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
export const ANGLO_FLATS  = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

export const LATIN_SHARPS = ['Do', 'Do#', 'Re', 'Re#', 'Mi', 'Fa', 'Fa#', 'Sol', 'Sol#', 'La', 'La#', 'Si'];
export const LATIN_FLATS  = ['Do', 'Reb', 'Re', 'Mib', 'Mi', 'Fa', 'Solb', 'Sol', 'Lab', 'La', 'Sib', 'Si'];

// Map every representation to semitone index 0-11
const NOTE_MAP = {
  // Anglo
  'C': 0, 'B#': 0, 'C#': 1, 'DB': 1, 'D': 2, 'D#': 3, 'EB': 3,
  'E': 4, 'FB': 4, 'F': 5, 'E#': 5, 'F#': 6, 'GB': 6,
  'G': 7, 'G#': 8, 'AB': 8, 'A': 9, 'A#': 10, 'BB': 10, 'B': 11, 'CB': 11,
  // Latin
  'DO': 0, 'SI#': 0, 'DO#': 1, 'REB': 1, 'RE': 2, 'RE#': 3, 'MIB': 3,
  'MI': 4, 'FAB': 4, 'FA': 5, 'MI#': 5, 'FA#': 6, 'SOLB': 6,
  'SOL': 7, 'SOL#': 8, 'LAB': 8, 'LA': 9, 'LA#': 10, 'SIB': 10, 'SI': 11, 'DOB': 11
};

// Regex to capture root note and modifier
// Matches Do, Re, Mi, Fa, Sol, La, Si or C, D, E, F, G, A, B with optional # or b
const ROOT_NOTE_REGEX = /^(Sol#|Solb|Do#|Dob|Re#|Reb|Fa#|Fab|La#|Lab|Si#|Sib|Sol|Do|Re|Mi|Fa|La|Si|[CDEFGAB][#b]?)(.*)$/i;

/**
 * Parses a single note/root into { semitone: 0-11, modifier: '...', isLatin: boolean }
 */
export function parseNote(noteStr) {
  const match = noteStr.trim().match(ROOT_NOTE_REGEX);
  if (!match) return null;

  const rawRoot = match[1];
  const suffix = match[2] || '';
  const upper = rawRoot.toUpperCase();

  const semitone = NOTE_MAP[upper];
  if (semitone === undefined) return null;

  const isLatin = /^(Sol|Do|Re|Mi|Fa|La|Si)/i.test(rawRoot);
  return { semitone, suffix, isLatin, originalRoot: rawRoot };
}

/**
 * Transposes a single note string by `semitones` delta and returns formatted note
 * @param {string} chordStr - e.g. "Am", "G/B", "Do#m7", "F#7sus4"
 * @param {number} delta - semitones to transpose (+/-)
 * @param {'anglo'|'latin'|'keep'} targetNotation - notation preference
 * @param {boolean} preferFlats - whether to prefer flat representation
 */
export function transposeChord(chordStr, delta = 0, targetNotation = 'anglo', preferFlats = false) {
  if (!chordStr || typeof chordStr !== 'string') return chordStr;
  chordStr = chordStr.trim();

  // Handle slash chords: e.g. "G/B", "Am7/G", "Do/Mi"
  if (chordStr.includes('/')) {
    const parts = chordStr.split('/');
    if (parts.length === 2) {
      const transposedMain = transposeChord(parts[0], delta, targetNotation, preferFlats);
      const transposedBass = transposeChord(parts[1], delta, targetNotation, preferFlats);
      return `${transposedMain}/${transposedBass}`;
    }
  }

  const parsed = parseNote(chordStr);
  if (!parsed) return chordStr; // Return as-is if unparseable

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

/**
 * Helper to get scale of all 12 notes in given notation
 */
export function getScale(notation = 'anglo') {
  return notation === 'latin' ? LATIN_SHARPS : ANGLO_SHARPS;
}
