# 🎸 Cancionero de Guitarra en Markdown

Un cancionero web moderno, ultrarrápido y pensado específicamente para guitarristas y músicos. Diseñado para alojarse **gratis en GitHub Pages**, sin bases de datos ni servidores complejos, con canciones almacenadas en archivos **Markdown (`.md`)**.

---

## ✨ Características para guitarristas

- **Acordes visuales sobre la letra:** Los acordes se posicionan automáticamente justo encima de la sílaba o palabra donde deben sonar, con colores destacados de alto contraste.
- **Transpositor de tonos en tiempo real:** Sube o baja semitonos con los botones `+` y `-`.
- **Notación dual con 1 clic:** Alterna al instante entre notación anglosajona (`C, D, E...`) y notación latina (`Do, Re, Mi...`).
- **Auto-scroll manos libres:** Reproduce el desplazamiento automático de la pantalla a velocidad graduable para tocar sin parar la canción.
- **Formulario integrado con vista previa en vivo:**
  - Crea o edita canciones en tiempo real con ayuda de chips de acordes rápidos (`[C]`, `[Am]`, `[## Coro]`, etc.).
  - **Descargar .md:** Descarga el archivo listo para tu repositorio.
  - **Copiar Markdown:** Copia al portapapeles con frontmatter completo.
  - **Guardar local:** Pruébalo al instante en tu navegador.
  - **Publicar en GitHub:** Sube la canción directamente a tu repositorio de GitHub usando un token personal sin usar la consola.
- **Modo oscuro / modo escenario:** Diseñado para tocar con poca luz o en atriles.
- **Ajuste de tamaño de letra (`A-` / `A+`):** Para leer cómodamente a distancia.
- **Buscador instantáneo:** Filtra por título, artista, tono o etiquetas.

---

## 🎼 Formato de las canciones en Markdown

Cada canción es un archivo `.md` dentro de la carpeta `canciones/` con metadatos (*frontmatter*) arriba y la letra con acordes entre corchetes `[Acorde]` abajo:

```markdown
---
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
```

---

## 🚀 Cómo ponerlo en marcha en local

No necesitas compilar nada ni instalar dependencias pesadas:

```bash
# Puedes arrancarlo con Python (incluido en tu sistema):
python3 -m http.server 8000
```

Luego abre en tu navegador: `http://localhost:8000`

---

## 🌐 Cómo publicarlo en GitHub Pages (Paso a paso)

1. **Crea un repositorio en GitHub:**
   - Ve a [github.com/new](https://github.com/new) y crea un repositorio (por ejemplo llamado `canciones`).
2. **Sube tus archivos:**
   ```bash
   git add .
   git commit -m "Primer commit: Cancionero web"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/canciones.git
   git push -u origin main
   ```
3. **Activa GitHub Pages:**
   - En tu repositorio de GitHub ve a **Settings** > **Pages**.
   - En **Source**, selecciona **GitHub Actions** (el flujo de despliegue ya está configurado en `.github/workflows/deploy.yml`) o selecciona **Deploy from a branch** -> Rama `main` / `root`.
   - ¡Listo! En 1 minuto tendrás tu cancionero funcionando en `https://TU_USUARIO.github.io/canciones`.

---

## 🔑 Cómo activar el botón "Publicar en GitHub" desde la web

Para poder guardar canciones desde el formulario de la propia web directamente en tu repositorio:

1. Ve a **GitHub** > **Settings** > **Developer Settings** > **Personal access tokens** > **Fine-grained personal access tokens**.
2. Pulsa en **Generate new token**:
   - Repository access: Selecciona únicamente tu repositorio (`canciones`).
   - Permissions: Marca **Contents** con permiso `Read and write`.
3. Copia el token que empieza por `ghp_...`.
4. Abre tu cancionero en la web, pulsa en el icono de ajustes ⚙️ e introduce:
   - **Repositorio:** `TU_USUARIO/canciones`
   - **Rama:** `main`
   - **Token:** Pega tu token.
5. Guarda los ajustes. El token se almacena de forma segura **únicamente en el navegador de tu dispositivo** (`localStorage`). A partir de ese momento, cada vez que crees una canción y pulses **🚀 Publicar en GitHub**, se guardará sola en tu repositorio y GitHub Pages se actualizará automáticamente.
