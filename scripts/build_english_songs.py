#!/usr/bin/env python3
import os
import re
import json
import zipfile
import xml.etree.ElementTree as ET

DOCX_PATH = '/tmp/cancionero_english.docx'

PROTECTED_SONGS = {
    'stand-by-me',
    'hallelujah',
    'let-it-be',
    'yellow-submarine',
    'hey-jude',
    'yellow'
}

SONG_DEFINITIONS = [
    (0, 'Stand By Me', 'Ben E. King', 'stand-by-me', ['classic', 'soul', 'inglés']),
    (7, 'Love Me Tender', 'Elvis Presley', 'love-me-tender', ['rock and roll', 'classic', 'balada', 'inglés']),
    (20, 'Over the Rainbow / What a Wonderful World', 'Israel Kamakawiwoʻole', 'over-the-rainbow', ['hawaiian', 'balada', 'classic', 'inglés']),
    (120, 'I\'m Yours', 'Jason Mraz', 'im-yours', ['pop', 'acoustic', '2000s', 'inglés']),
    (144, 'Hallelujah', 'Leonard Cohen', 'hallelujah', ['folk', 'balada', 'classic', 'himno', 'inglés']),
    (177, 'Hotel California', 'The Eagles', 'hotel-california', ['rock', 'classic', '70s', 'himno', 'inglés']),
    (190, 'Losing My Religion', 'R.E.M.', 'losing-my-religion', ['alt rock', '90s', 'classic', 'inglés']),
    (222, 'Every Breath You Take', 'The Police', 'every-breath-you-take', ['rock', 'new wave', '80s', 'classic', 'inglés']),
    (242, 'Hit the Road Jack', 'Ray Charles', 'hit-the-road-jack', ['r&b', 'soul', 'classic', '60s', 'inglés']),
    (253, 'Wonderful World', 'Sam Cooke', 'wonderful-world', ['soul', 'classic', '60s', 'inglés']),
    (277, 'Let It Be', 'The Beatles', 'let-it-be', ['rock', 'classic', '60s', 'balada', 'inglés']),
    (302, 'La Bamba / Twist and Shout', 'The Beatles', 'la-bamba-twist-and-shout', ['rock and roll', 'classic', '60s', 'inglés']),
    (331, 'Sweet Dreams (Are Made of This)', 'Eurythmics', 'sweet-dreams', ['synth-pop', '80s', 'classic', 'inglés']),
    (347, 'Someone Like You', 'Adele', 'someone-like-you', ['pop', 'balada', '2010s', 'inglés']),
    (366, 'Valerie', 'Amy Winehouse', 'valerie', ['soul', 'pop', '2000s', 'inglés']),
    (391, 'Beautiful', 'Christina Aguilera', 'beautiful', ['pop', 'balada', '2000s', 'inglés']),
    (410, 'Blowin\' in the Wind', 'Bob Dylan', 'blowing-in-the-wind', ['folk', 'classic', '60s', 'protest', 'inglés']),
    (437, 'I Will Survive', 'Gloria Gaynor', 'i-will-survive', ['disco', '70s', 'classic', 'himno', 'inglés']),
    (463, 'I Still Haven\'t Found What I\'m Looking For', 'U2', 'i-still-havent-found-what-im-looking-for', ['rock', '80s', 'classic', 'himno', 'inglés']),
    (507, 'Scarborough Fair / Canticle', 'Simon & Garfunkel', 'scarborough-fair', ['folk', 'classic', '60s', 'balada', 'inglés']),
    (519, 'The Boxer', 'Simon & Garfunkel', 'the-boxer', ['folk', 'classic', '60s', 'himno', 'inglés']),
    (541, 'Bridge Over Troubled Water', 'Simon & Garfunkel', 'bridge-over-troubled-water', ['folk', 'balada', '70s', 'classic', 'inglés']),
    (564, 'I Am a Rock', 'Simon & Garfunkel', 'i-am-a-rock', ['folk rock', '60s', 'classic', 'inglés']),
    (588, 'Ayo Technology', 'Milow', 'ayo-technology', ['acoustic', 'pop', '2000s', 'inglés']),
    (630, 'The House of the Rising Sun', 'The Animals', 'the-house-of-the-rising-sun', ['folk rock', 'classic', '60s', 'himno', 'inglés']),
    (663, 'Row, Row, Row Your Boat', 'Popular', 'row-your-boat', ['popular', 'infantil', 'tradicional', 'inglés']),
    (669, 'California Dreamin\'', 'The Mamas & The Papas', 'california-dreamin', ['folk rock', '60s', 'classic', 'himno', 'inglés']),
    (692, 'Those Were the Days', 'Mary Hopkin', 'those-were-the-days', ['folk', 'pop', '60s', 'classic', 'inglés']),
    (710, 'Raindrops Keep Fallin\' on My Head', 'B.J. Thomas', 'raindrops-keep-fallin-on-my-head', ['pop', 'soundtrack', '60s', 'classic', 'inglés']),
    (740, 'All My Loving', 'The Beatles', 'all-my-loving', ['rock', 'pop', '60s', 'classic', 'inglés']),
    (783, 'Imagine', 'John Lennon', 'imagine', ['rock', 'balada', '70s', 'classic', 'himno', 'inglés']),
    (803, 'Yellow Submarine', 'The Beatles', 'yellow-submarine', ['rock', '60s', 'classic', 'fácil', 'inglés']),
    (828, 'Girl', 'The Beatles', 'girl', ['rock', 'folk', '60s', 'classic', 'inglés']),
    (862, 'And I Love Her', 'The Beatles', 'and-i-love-her', ['rock', 'balada', '60s', 'classic', 'inglés']),
    (876, 'The Fool on the Hill', 'The Beatles', 'the-fool-on-the-hill', ['rock', 'psychedelic', '60s', 'classic', 'inglés']),
    (903, 'Michelle', 'The Beatles', 'michelle', ['rock', 'balada', '60s', 'classic', 'inglés']),
    (925, 'Yesterday', 'The Beatles', 'yesterday', ['rock', 'balada', '60s', 'classic', 'himno', 'inglés']),
    (944, 'Hey Jude', 'The Beatles', 'hey-jude', ['rock', '60s', 'classic', 'balada', 'himno', 'inglés']),
    (987, 'Strawberry Fields Forever', 'The Beatles', 'strawberry-fields-forever', ['rock', 'psychedelic', '60s', 'classic', 'inglés']),
    (1024, 'Moonlight Shadow', 'Mike Oldfield', 'moonlight-shadow', ['folk rock', 'pop', '80s', 'classic', 'inglés']),
    (1073, 'Sailing', 'Rod Stewart', 'sailing', ['rock', 'balada', '70s', 'classic', 'inglés']),
    (1087, 'Tears in Heaven', 'Eric Clapton', 'tears-in-heaven', ['acoustic', 'balada', '90s', 'classic', 'inglés']),
    (1115, 'Torn', 'Natalie Imbruglia', 'torn', ['pop rock', '90s', 'classic', 'inglés']),
    (1137, 'Thinking Out Loud', 'Ed Sheeran', 'thinking-out-loud', ['pop', 'balada', '2010s', 'inglés']),
    (1179, 'Perfect', 'Ed Sheeran', 'perfect', ['pop', 'balada', '2010s', 'inglés'])
]

NOTE_MAP = {
    'DO': 'C', 'RE': 'D', 'MI': 'E', 'FA': 'F', 'SOL': 'G', 'LA': 'A', 'SI': 'B',
    'Do': 'C', 'Re': 'D', 'Mi': 'E', 'Fa': 'F', 'Sol': 'G', 'La': 'A', 'Si': 'B',
    'do': 'C', 're': 'D', 'mi': 'E', 'fa': 'F', 'sol': 'G', 'la': 'A', 'si': 'B'
}

def translate_chord(root, acc, mod):
    acc = acc or ''
    mod = mod or ''
    if mod in ['7M', 'M7']:
        mod = 'maj7'
    elif mod.lower() == 'm7m':
        mod = 'm(maj7)'
    root_cap = root.capitalize()
    if root_cap.upper() == 'SOL':
        root_cap = 'Sol'
    if root_cap in NOTE_MAP:
        return f'{NOTE_MAP[root_cap]}{acc}{mod}'
    return f'{root.upper()}{acc}{mod}'

CHORD_PATTERN = re.compile(
    r'(?<![a-zA-Z0-9])'
    r'(DO|RE|MI|FA|SOL|LA|SI|Do|Re|Mi|Fa|Sol|La|Si|do|re|mi|fa|sol|la|si|[a-gA-G])'
    r'(#|b)?'
    r'(maj7|7M|M7|m7M|m\(maj7\)|m7|m9|m6|min|m|sus4|sus2|dim|aug|add9|6|7|9|11|13)?'
    r'(?![a-zA-Z0-9])'
)

def convert_chord_line(line):
    line = re.sub(r'([A-G])(SOL|DO|RE|MI|FA|LA|SI)', r'\1 \2', line)
    def repl(m):
        root = m.group(1)
        acc = m.group(2)
        mod = m.group(3)
        ch = translate_chord(root, acc, mod)
        return f'[{ch}]'
    return CHORD_PATTERN.sub(repl, line)

def extract_songs():
    with zipfile.ZipFile(DOCX_PATH, 'r') as z:
        doc_xml = z.read('word/document.xml')

    root = ET.fromstring(doc_xml)
    namespaces = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    paragraphs = root.findall('.//w:p', namespaces)

    repo_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    os.chdir(repo_root)

    created_count = 0
    skipped_count = 0

    for i, spec in enumerate(SONG_DEFINITIONS):
        start_p, title, artist, slug, tags = spec
        if slug in PROTECTED_SONGS:
            print(f'Skipping protected song: {slug}')
            skipped_count += 1
            continue

        if i < len(SONG_DEFINITIONS) - 1:
            next_start = SONG_DEFINITIONS[i+1][0]
            # Over the rainbow ends at 69 (duplicate at 70)
            end_p = 69 if start_p == 20 else next_start
        else:
            end_p = len(paragraphs)

        body_lines = []
        detected_key = 'C'
        detected_capo = 0
        first_chord_found = False

        for p_idx in range(start_p, end_p):
            p = paragraphs[p_idx]
            # Skip title paragraph itself
            if p_idx == start_p:
                continue

            current_line = []
            lines = [current_line]

            for r in p.findall('.//w:r', namespaces):
                c = r.find('.//w:color', namespaces)
                c_val = c.attrib.get('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}val') if c is not None else 'no_color'

                for child in r:
                    tag = child.tag.split('}')[-1]
                    if tag in ['br', 'cr']:
                        current_line = []
                        lines.append(current_line)
                    elif tag == 'tab':
                        current_line.append(('space', '    '))
                    elif tag == 't':
                        t = child.text or ''
                        t_parts = t.split('\n')
                        for i_part, part in enumerate(t_parts):
                            if i_part > 0:
                                current_line = []
                                lines.append(current_line)
                            if part:
                                current_line.append((c_val, part))

            for line_runs in lines:
                if not line_runs:
                    if body_lines and body_lines[-1] != '':
                        body_lines.append('')
                    continue

                has_red = any(c == 'FF0000' and re.search(r'[a-zA-Z]', txt) for c, txt in line_runs)
                has_blk = any(c != 'FF0000' and c != '00B0F0' and c != 'space' and re.search(r'[a-zA-Z0-9]', txt) for c, txt in line_runs)
                has_blue = any(c == '00B0F0' and txt.strip() for c, txt in line_runs)

                if has_red and has_blk:
                    red_txt = ''.join([txt for c, txt in line_runs if c == 'FF0000']).strip()
                    blk_txt = ''.join([txt for c, txt in line_runs if c != 'FF0000' and c != '00B0F0']).strip()

                    m_capo = re.search(r'#(\d+)', red_txt)
                    if m_capo:
                        detected_capo = int(m_capo.group(1))
                        red_txt = re.sub(r'#\d+', '', red_txt).strip()

                    ch_line = convert_chord_line(red_txt)
                    if not first_chord_found:
                        m_ch = re.search(r'\[([A-G][#b]?m?[0-9]*)\]', ch_line)
                        if m_ch:
                            detected_key = m_ch.group(1)
                            first_chord_found = True

                    body_lines.append(ch_line)
                    body_lines.append(blk_txt)
                    body_lines.append('')
                elif has_red:
                    red_txt = ''.join([txt for c, txt in line_runs]).strip()
                    m_capo = re.search(r'#(\d+)', red_txt)
                    if m_capo:
                        detected_capo = int(m_capo.group(1))
                        red_txt = re.sub(r'#\d+', '', red_txt).strip()

                    ch_line = convert_chord_line(red_txt)
                    if not first_chord_found:
                        m_ch = re.search(r'\[([A-G][#b]?m?[0-9]*)\]', ch_line)
                        if m_ch:
                            detected_key = m_ch.group(1)
                            first_chord_found = True
                    body_lines.append(ch_line)
                elif has_blue:
                    blue_txt = ''.join([txt for c, txt in line_runs]).strip()
                    body_lines.append(f'> {blue_txt}')
                else:
                    blk_txt = ''.join([txt for c, txt in line_runs]).strip()
                    if blk_txt:
                        if blk_txt.startswith('- '):
                            blk_txt = blk_txt[2:].strip()
                        elif blk_txt.startswith('-') and len(blk_txt) > 1 and blk_txt[1].isalpha():
                            blk_txt = blk_txt[1:].strip()
                        body_lines.append(blk_txt)
                    elif body_lines and body_lines[-1] != '':
                        body_lines.append('')

        cleaned = []
        for l in body_lines:
            if l == '' and (not cleaned or cleaned[-1] == ''):
                continue
            cleaned.append(l)

        final_lines = []
        if cleaned and cleaned[0].startswith('['):
            final_lines.append('## Intro')
            final_lines.append(cleaned[0])
            final_lines.append('')
            final_lines.append('## Verso 1')
            final_lines.extend(cleaned[1:])
        else:
            final_lines.append('## Verso 1')
            final_lines.extend(cleaned)

        body_text = '\n'.join(final_lines).strip()
        body_text = re.sub(r'\n{3,}', '\n\n', body_text)

        tags_json = json.dumps(tags, ensure_ascii=False)
        md = f'''---
title: "{title}"
artist: "{artist}"
key: "{detected_key}"
capo: {detected_capo}
tempo: 100
tags: {tags_json}
---

{body_text}
'''
        out_path = f'canciones/{slug}.md'
        with open(out_path, 'w', encoding='utf-8') as f:
            f.write(md)

        created_count += 1
        print(f'Created: {out_path} (key={detected_key}, capo={detected_capo})')

    print(f'Extraction complete: Created {created_count} songs, skipped {skipped_count} protected songs.')

if __name__ == '__main__':
    extract_songs()
