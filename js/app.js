/**
 * Cancionero Main Application Controller
 */

import { parseSongMarkdown, serializeSongMarkdown, renderSongHtml, escapeHtml } from './parser.js';
import { transposeChord } from './transposer.js';
import { getGithubConfig, saveGithubConfig, publishToGithub, slugify } from './github.js';

// Application State
const state = {
  songs: [],            // List of songs from manifest + local
  currentSongId: null,  // Active song id
  currentMeta: null,    // Active song metadata
  currentBody: '',      // Active song markdown body
  transposeDelta: 0,    // Current semitone shift
  notation: localStorage.getItem('cancionero_notation') || 'anglo', // 'anglo' | 'latin'
  fontSizePercent: 100, // Zoom percentage
  theme: localStorage.getItem('cancionero_theme') || 'dark',

  // Autoscroll
  autoScrollActive: false,
  autoScrollPaused: false,
  autoScrollSpeed: 3,   // 1 to 10
  scrollAnimationId: null,

  // Editing state
  editingSongId: null
};

// DOM Elements
const elements = {
  html: document.documentElement,
  brandLink: document.getElementById('brand-link'),
  sidebar: document.getElementById('sidebar'),
  btnToggleSidebar: document.getElementById('btn-toggle-sidebar'),
  songList: document.getElementById('song-list'),
  songCount: document.getElementById('song-count'),
  searchInput: document.getElementById('search-input'),

  // Views
  emptyView: document.getElementById('empty-view'),
  songView: document.getElementById('song-view'),

  // Song View Elements
  viewTitle: document.getElementById('view-title'),
  viewArtist: document.getElementById('view-artist'),
  viewBadges: document.getElementById('view-badges'),
  songBodyContainer: document.getElementById('song-body-container'),
  btnEditCurrent: document.getElementById('btn-edit-current'),

  // Toolbar
  btnTransposeDown: document.getElementById('btn-transpose-down'),
  btnTransposeUp: document.getElementById('btn-transpose-up'),
  btnTransposeReset: document.getElementById('btn-transpose-reset'),
  displayTranspose: document.getElementById('display-transpose'),
  btnToggleNotation: document.getElementById('btn-toggle-notation'),
  btnFontSmaller: document.getElementById('btn-font-smaller'),
  btnFontLarger: document.getElementById('btn-font-larger'),
  displayFontSize: document.getElementById('display-font-size'),
  btnStartScroll: document.getElementById('btn-start-scroll'),

  // Floating Auto-Scroll Controls
  autoScrollControls: document.getElementById('autoscroll-controls'),
  btnScrollPause: document.getElementById('btn-scroll-pause'),
  scrollSpeedSlider: document.getElementById('scroll-speed'),
  btnScrollStop: document.getElementById('btn-scroll-stop'),

  // Theme & Settings
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

  // Editor Modal
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

  // Toast
  toast: document.getElementById('toast'),
  toastMessage: document.getElementById('toast-message')
};

/**
 * Shows user feedback via toast
 */
function showToast(message, duration = 3000) {
  elements.toastMessage.textContent = message;
  elements.toast.classList.remove('hidden');
  clearTimeout(elements.toast._timer);
  elements.toast._timer = setTimeout(() => {
    elements.toast.classList.add('hidden');
  }, duration);
}

/**
 * Initializes Theme
 */
function initTheme() {
  elements.html.setAttribute('data-theme', state.theme);
  elements.btnThemeToggle.textContent = state.theme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('cancionero_theme', state.theme);
  initTheme();
}

/**
 * Fetches songs list from manifest + merges with localStorage
 */
async function loadSongs() {
  let manifest = [];
  try {
    const res = await fetch('canciones/manifest.json');
    if (res.ok) {
      manifest = await res.json();
    }
  } catch (err) {
    console.warn('No se pudo cargar manifest.json, cargando datos locales.', err);
  }

  // Read local custom songs
  const localSongsRaw = localStorage.getItem('cancionero_local_songs');
  const localSongs = localSongsRaw ? JSON.parse(localSongsRaw) : [];

  // Merge (local songs override by ID if matching)
  const map = new Map();
  manifest.forEach(s => map.set(s.id, s));
  localSongs.forEach(s => map.set(s.id, s));

  state.songs = Array.from(map.values());
  state.songs.sort((a, b) => a.title.localeCompare(b.title, 'es', { sensitivity: 'base' }));

  renderSongList();

  // If URL has a hash matching a song, open it
  const hash = window.location.hash.replace(/^#/, '');
  if (hash) {
    const found = state.songs.find(s => s.id === hash);
    if (found) {
      selectSong(found.id);
      return;
    }
  }

  // If first load and there are songs, auto-select first one on larger screens
  if (window.innerWidth > 768 && state.songs.length > 0 && !state.currentSongId) {
    selectSong(state.songs[0].id);
  }
}

/**
 * Renders the songs list in the sidebar
 */
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
      // On mobile, close sidebar after picking a song
      if (window.innerWidth <= 800) {
        elements.sidebar.classList.remove('open');
      }
    });

    elements.songList.appendChild(li);
  });
}

/**
 * Selects and renders a song
 */
async function selectSong(id) {
  const song = state.songs.find(s => s.id === id);
  if (!song) return;

  state.currentSongId = id;
  state.transposeDelta = 0;
  window.location.hash = id;

  // Highlight in sidebar
  document.querySelectorAll('.song-item').forEach(el => {
    el.classList.toggle('active', el.dataset.id === id);
  });

  // Stop any active autoscroll
  stopAutoScroll();

  let markdownContent = '';
  // Check if song has inline content (from local storage)
  if (song.content) {
    markdownContent = song.content;
  } else if (song.file) {
    try {
      const res = await fetch(song.file);
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      markdownContent = await res.text();
    } catch (e) {
      showToast(`Error al cargar el archivo de la canción: ${song.file}`);
      return;
    }
  }

  const { meta, body } = parseSongMarkdown(markdownContent);
  state.currentMeta = { ...song, ...meta };
  state.currentBody = body;

  renderActiveSong();

  elements.emptyView.classList.add('hidden');
  elements.songView.classList.remove('hidden');

  // Scroll back to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Renders the active song view and applies transposition & notation
 */
function renderActiveSong() {
  if (!state.currentMeta) return;

  const meta = state.currentMeta;
  elements.viewTitle.textContent = meta.title;
  elements.viewArtist.textContent = meta.artist;

  // Update Badges
  const currentKey = transposeChord(meta.key || 'C', state.transposeDelta, state.notation);
  const origKey = transposeChord(meta.key || 'C', 0, state.notation);

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

  // Update Transpose Display
  if (state.transposeDelta === 0) {
    elements.displayTranspose.textContent = 'Orig';
  } else {
    const sign = state.transposeDelta > 0 ? '+' : '';
    elements.displayTranspose.textContent = `${sign}${state.transposeDelta}`;
  }

  // Update Notation Button
  elements.btnToggleNotation.textContent = state.notation === 'anglo' ? 'C D E' : 'Do Re Mi';

  // Render song chords & lyrics HTML
  const renderedHtml = renderSongHtml(state.currentBody, {
    transposeDelta: state.transposeDelta,
    notation: state.notation
  });

  elements.songBodyContainer.innerHTML = renderedHtml;
}

/**
 * Auto-Scroll Logic
 */
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
  if (elapsed > 20) { // ~50fps
    // Speed factor: 1 = ~0.5px, 10 = ~4px
    const pixels = (state.autoScrollSpeed * 0.45);
    window.scrollBy({ top: pixels, behavior: 'instant' });
    lastScrollTimestamp = timestamp;

    // Check if bottom reached
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
  elements.autoscrollControls.classList.remove('hidden');
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
  elements.autoscrollControls.classList.add('hidden');
}

/**
 * Editor / Form Logic
 */
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
  const { body, meta } = getEditorFormData();
  const previewHtml = renderSongHtml(body, {
    transposeDelta: 0,
    notation: state.notation
  });
  elements.editorPreview.innerHTML = previewHtml || '<span style="color:var(--text-dim);font-style:italic;">Escribe la letra para ver la vista previa...</span>';
}

/**
 * Saves a song to browser localStorage
 */
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

  const localSongsRaw = localStorage.getItem('cancionero_local_songs');
  let localSongs = localSongsRaw ? JSON.parse(localSongsRaw) : [];

  const existingIdx = localSongs.findIndex(s => s.id === slug);
  if (existingIdx >= 0) {
    localSongs[existingIdx] = songEntry;
  } else {
    localSongs.push(songEntry);
  }

  localStorage.setItem('cancionero_local_songs', JSON.stringify(localSongs));

  showToast(`Canción "${meta.title}" guardada localmente.`);
  closeEditor();
  loadSongs();
  selectSong(slug);
}

/**
 * Downloads a .md file
 */
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

/**
 * Setup Event Listeners
 */
function initEvents() {
  // Theme toggle
  elements.btnThemeToggle.addEventListener('click', toggleTheme);

  // Mobile sidebar toggle
  elements.btnToggleSidebar.addEventListener('click', () => {
    elements.sidebar.classList.toggle('open');
  });

  // Search filter
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

  // Transpose controls
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

  // Notation toggle
  elements.btnToggleNotation.addEventListener('click', () => {
    state.notation = state.notation === 'anglo' ? 'latin' : 'anglo';
    localStorage.setItem('cancionero_notation', state.notation);
    renderActiveSong();
    renderSongList();
  });

  // Font size controls
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

  // Auto-scroll triggers
  elements.btnStartScroll.addEventListener('click', () => {
    startAutoScroll();
  });
  elements.btnScrollPause.addEventListener('click', pauseAutoScroll);
  elements.btnScrollStop.addEventListener('click', stopAutoScroll);
  elements.scrollSpeedSlider.addEventListener('input', (e) => {
    state.autoScrollSpeed = parseInt(e.target.value, 10);
  });

  // Editor Modal Open/Close
  elements.btnNewSong.addEventListener('click', () => openEditor(null));
  elements.btnEditCurrent.addEventListener('click', () => {
    if (state.currentMeta) {
      openEditor(state.currentMeta);
    }
  });
  elements.btnCloseEditor.addEventListener('click', closeEditor);

  // Editor Real-time Preview updates
  ['input', 'change'].forEach(evt => {
    elements.formTitle.addEventListener(evt, updateEditorPreview);
    elements.formArtist.addEventListener(evt, updateEditorPreview);
    elements.formKey.addEventListener(evt, updateEditorPreview);
    elements.formCapo.addEventListener(evt, updateEditorPreview);
    elements.formBody.addEventListener(evt, updateEditorPreview);
  });

  // Quick Chord Chips insertion
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

  // Copy Markdown
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
      showToast('No se pudo copiar automáticamente. Por favor cópialo manualmente.');
    }
  });

  // Download .md
  elements.btnDownloadMd.addEventListener('click', () => {
    const { meta, markdown } = getEditorFormData();
    if (!meta.title) {
      showToast('Por favor añade al menos el título de la canción.');
      return;
    }
    downloadSongMarkdown(meta, markdown);
  });

  // Save Locally
  elements.btnSaveLocal.addEventListener('click', () => {
    const { meta, body, markdown } = getEditorFormData();
    if (!meta.title) {
      showToast('Por favor introduce un título.');
      return;
    }
    saveSongLocally(meta, body, markdown);
  });

  // Publish directly to GitHub
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
      // Reload songs
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

  // Settings Modal Open/Close
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

  // Clear cache / reset to defaults
  elements.btnClearCache.addEventListener('click', () => {
    if (confirm('¿Restablecer y borrar canciones locales personalizadas?')) {
      localStorage.removeItem('cancionero_local_songs');
      elements.modalSettings.classList.add('hidden');
      loadSongs();
      showToast('Canciones locales eliminadas.');
    }
  });
}

// Initial Boot
initTheme();
initEvents();
loadSongs();
