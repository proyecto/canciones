/**
 * GitHub REST API Client
 * Commits markdown songs and updates manifest.json directly from the browser
 */

const STORAGE_KEY = 'cancionero_github_config';

/**
 * Retrieves GitHub configuration from localStorage
 */
export function getGithubConfig() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { token: '', repo: '', branch: 'main' };
    return JSON.parse(raw);
  } catch (e) {
    return { token: '', repo: '', branch: 'main' };
  }
}

/**
 * Saves GitHub configuration to localStorage
 */
export function saveGithubConfig(config) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    token: (config.token || '').trim(),
    repo: (config.repo || '').trim(), // Format: "usuario/repositorio"
    branch: (config.branch || 'main').trim()
  }));
}

/**
 * Encodes a UTF-8 string to base64 safely in browser
 */
function utf8ToBase64(str) {
  const bytes = new TextEncoder().encode(str);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

/**
 * Decodes base64 to UTF-8 string safely in browser
 */
function base64ToUtf8(base64) {
  const binary = atob(base64.replace(/\s/g, ''));
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new TextDecoder().decode(bytes);
}

/**
 * Generates URL-friendly slug from title
 */
export function slugify(text) {
  return (text || 'cancion')
    .toString()
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove accents
    .replace(/[^a-z0-9 -]/g, '')     // remove invalid chars
    .replace(/\s+/g, '-')           // collapse whitespace and replace by -
    .replace(/-+/g, '-');           // collapse dashes
}

/**
 * Publishes a song file and updates manifest.json on GitHub
 */
export async function publishToGithub(songMeta, markdownContent) {
  const config = getGithubConfig();

  if (!config.token || !config.repo) {
    throw new Error('Debes configurar tu Repositorio y Token de GitHub en Ajustes.');
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

  // Helper to fetch file details (SHA)
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

  // 1. Commit/update the song markdown file
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

  // 2. Read and update manifest.json
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
    file: songFilePath
  };

  const existingIndex = manifestList.findIndex(item => item.id === slug);
  if (existingIndex >= 0) {
    manifestList[existingIndex] = songEntry;
  } else {
    manifestList.push(songEntry);
  }

  // Sort manifest alphabetically by title
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

  const putManifestRes = await fetch(putManifestUrl, {
    method: 'PUT',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify(putManifestBody)
  });

  if (!putManifestRes.ok) {
    console.warn('Canción guardada, pero fallo al actualizar manifest.json');
  }

  return {
    success: true,
    slug,
    message: `¡Canción "${songMeta.title}" publicada con éxito en GitHub! En 1-2 minutos GitHub Pages se actualizará automáticamente.`
  };
}
