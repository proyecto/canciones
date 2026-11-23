import json
import os
import re
from song_specs import SONG_DEFINITIONS
from test_converter import convert_chord_line, translate_chord, PROTECTED_SONGS

with open('pdf_layout.json', 'r', encoding='utf-8') as f:
    pages_data = {p['pageNumber']: p for p in json.load(f)}

def build_markdown_for_song(spec):
    pages, title, artist, slug, min_x, max_x, min_y, max_y, capo, tags = spec
    if isinstance(pages, int):
        pages = [pages]
        
    all_runs = []
    for p_num in pages:
        p_data = pages_data[p_num]
        runs = p_data['runs']
        for r in runs:
            # Ignore headers and page numbers
            txt = r['text'].strip()
            if not txt: continue
            if 'ESPAÑOL' in txt: continue
            if txt.isdigit(): continue
            
            if len(pages) == 1:
                if min_x <= r['x'] <= max_x and min_y <= r['y'] <= max_y:
                    all_runs.append((p_num, r))
            else:
                if min_x <= r['x'] <= max_x:
                    all_runs.append((p_num, r))
                    
    # Sort runs by page ascending, then Y descending
    all_runs.sort(key=lambda item: (item[0], -item[1]['y']))
    
    body_lines = []
    detected_key = 'C'
    first_chord_found = False
    
    for _, r in all_runs:
        text = r['text'].strip()
        if not text: continue
        
        # Filter out standalone page numbers or short numbers
        if text.isdigit():
            continue
            
        # Filter out title line
        if r['fontSize'] >= 16.0 or (r['underline'] and len(text) > 3 and not any(text.startswith(ch) for ch in ['SOL', 'DO', 'LA', 'MI', 'FA', 'RE', 'SI'])):
            if title.lower() in text.lower() or text.lower() in title.lower():
                continue
                
        # Filter out artist attribution parentheticals
        if re.match(r'^\([A-ZÁÉÍÓÚa-záéíóú0-9\s,\.\'\’\-_&/]+\)$', text):
            continue
            
        color = r['color']
        
        if color == 'red':
            # Clean up underscore line breaks
            text = text.replace('\n_\n', '_').replace('\n', ' ')
            chord_line = convert_chord_line(text)
            
            # Find first chord for key
            if not first_chord_found:
                m_chord = re.search(r'\[([A-G][#b]?m?[0-9]*)\]', chord_line)
                if m_chord:
                    detected_key = m_chord.group(1)
                    first_chord_found = True
            
            # Section header
            if len(body_lines) == 0:
                body_lines.append("## Intro")
                body_lines.append(chord_line)
                body_lines.append("")
            else:
                body_lines.append(chord_line)
        elif color == 'blue':
            # Blue instruction or note
            # If tab line:
            if re.search(r'\d{2,}', text):
                body_lines.append(f"```text\n{text}\n```")
            else:
                body_lines.append(f"> {text}")
        else:
            # Black lyrics
            lines = text.split('\n')
            for l in lines:
                l_str = l.strip()
                if l_str and not l_str.isdigit():
                    body_lines.append(l_str)
            body_lines.append("")
            
    body_text = "\n".join(body_lines).strip()
    
    if not body_text.startswith("##"):
        body_text = "## Verso 1\n" + body_text

    # Clean multiple empty lines
    body_text = re.sub(r'\n{3,}', '\n\n', body_text)
    
    tags_json = json.dumps(tags, ensure_ascii=False)
    
    md = f"""---
title: "{title}"
artist: "{artist}"
key: "{detected_key}"
capo: {capo}
tempo: 100
tags: {tags_json}
---

{body_text}
"""
    return md

created_count = 0
skipped_protected = 0

for spec in SONG_DEFINITIONS:
    slug = spec[3]
    if slug in PROTECTED_SONGS:
        skipped_protected += 1
        continue
        
    md_content = build_markdown_for_song(spec)
    file_path = f"canciones/{slug}.md"
    
    with open(file_path, "w", encoding="utf-8") as f_out:
        f_out.write(md_content)
    created_count += 1

print(f"Generated {created_count} songs. Skipped {skipped_protected} protected songs.")
