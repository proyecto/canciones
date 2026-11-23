#!/usr/bin/env python3
import os
import json
import re
import glob

def sync_all():
    repo_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    os.chdir(repo_root)

    manifest = []
    for filepath in sorted(glob.glob("canciones/*.md")):
        fname = os.path.basename(filepath)
        song_id = os.path.splitext(fname)[0]
        with open(filepath, "r", encoding="utf-8") as f:
            content = f.read()

        title = song_id
        artist = "Desconocido"
        key = "C"
        capo = 0
        tempo = 100
        tags = []

        m = re.match(r"^---\s*\n(.*?)\n---", content, re.DOTALL)
        if m:
            fm = m.group(1)
            for line in fm.split("\n"):
                line = line.strip()
                if line.startswith("title:"):
                    title = line.split(":", 1)[1].strip().strip('"').strip("'")
                elif line.startswith("artist:"):
                    artist = line.split(":", 1)[1].strip().strip('"').strip("'")
                elif line.startswith("key:"):
                    key = line.split(":", 1)[1].strip().strip('"').strip("'")
                elif line.startswith("capo:"):
                    try:
                        capo = int(line.split(":", 1)[1].strip())
                    except:
                        capo = 0
                elif line.startswith("tempo:"):
                    try:
                        tempo = int(line.split(":", 1)[1].strip())
                    except:
                        tempo = 100
                elif line.startswith("tags:"):
                    try:
                        tags = json.loads(line.split(":", 1)[1].strip())
                    except:
                        tags = []

        manifest.append({
            "id": song_id,
            "title": title,
            "artist": artist,
            "key": key,
            "capo": capo,
            "tempo": tempo,
            "tags": tags,
            "file": f"canciones/{fname}",
            "content": content
        })

    # 1. Update canciones/manifest.json
    with open("canciones/manifest.json", "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)
        f.write("\n")

    # 2. Update js/songs-data.js
    with open("js/songs-data.js", "w", encoding="utf-8") as f:
        f.write("export const DEFAULT_SONGS = ")
        json.dump(manifest, f, indent=2, ensure_ascii=False)
        f.write(";\n")

    # 3. Update js/app.js inline fallback
    with open("js/app.js", "r", encoding="utf-8") as f:
        app_js = f.read()

    replacement = "const DEFAULT_SONGS = " + json.dumps(manifest, indent=2, ensure_ascii=False) + ";"
    app_js_updated = re.sub(
        r'const DEFAULT_SONGS = \[.*?\];',
        lambda _: replacement,
        app_js,
        flags=re.DOTALL
    )

    # 4. Sync parser logic from js/parser.js to js/app.js
    with open("js/parser.js", "r", encoding="utf-8") as f:
        parser_js = f.read()

    parser_code = re.sub(r'import\s+.*?;\s*', '', parser_js)
    parser_code = re.sub(r'\bexport\s+(function|const|let|var)\b', r'\1', parser_code).strip()
    indented_parser = "\n".join("  " + line if line.strip() else "" for line in parser_code.split("\n"))

    parser_section = (
        "  // ==========================================\n"
        "  // 3. PARSER DE MARKDOWN Y ACORDES\n"
        "  // ==========================================\n"
        + indented_parser + "\n\n"
    )

    app_js_updated = re.sub(
        r'  // ==========================================\n  // 3\. PARSER DE MARKDOWN Y ACORDES\n  // ==========================================.*?(?=  // ==========================================\n  // 4\. CLIENTE API GITHUB)',
        lambda _: parser_section,
        app_js_updated,
        flags=re.DOTALL
    )

    with open("js/app.js", "w", encoding="utf-8") as f:
        f.write(app_js_updated)

    print(f"Successfully synchronized {len(manifest)} songs and parser into manifest.json, songs-data.js, and app.js.")

if __name__ == "__main__":
    sync_all()
