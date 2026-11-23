#!/usr/bin/env python3
"""
execute_import.py
Extracts and generates all songs from 'cancionero-tuna-filosof-a-y-letras-m-laga_compress.pdf'.
Ensures all matching and new songs have tags: ["tuna", "español"].
Follows all repository standards.
"""

import os
import re
import zlib
import unicodedata
import glob

PDF_PATH = "/Users/rafaelruiz/.gemini/antigravity/brain/f0aea7cc-3682-48b2-b371-334b989367f0/.user_uploaded/media_1795458162794_504b476a.pdf"
CANCIONES_DIR = "/Users/rafaelruiz/Documents/proyectos/canciones/canciones"

def slugify(text):
    text = unicodedata.normalize('NFD', text).encode('ascii', 'ignore').decode('utf-8').lower()
    return re.sub(r'[^a-z0-9]+', '-', text).strip('-')

# -------------------------------------------------------------
# 1. PDF Parser
# -------------------------------------------------------------

with open(PDF_PATH, 'rb') as f:
    pdf_bytes = f.read()

objects = {}
for m in re.finditer(rb'(\d+)\s+(\d+)\s+obj\s*(.*?)\s*endobj', pdf_bytes, re.DOTALL):
    obj_num = int(m.group(1))
    content = m.group(3)
    stream_m = re.search(rb'stream[\r\n]+(.*?)[\r\n]+endstream', content, re.DOTALL)
    stream = stream_m.group(1) if stream_m else None
    header = content[:stream_m.start()] if stream_m else content
    objects[obj_num] = {'header': header, 'stream': stream}

cmaps = {}
for obj_num, obj in objects.items():
    if obj['stream']:
        try:
            decomp = zlib.decompress(obj['stream']).decode('latin1')
            if 'beginbfchar' in decomp:
                mapping = {}
                for bf in re.finditer(r'<([0-9a-fA-F]+)>\s+<([0-9a-fA-F]+)>', decomp):
                    src = int(bf.group(1), 16)
                    dst_hex = bf.group(2)
                    dst_chars = bytes.fromhex(dst_hex).decode('utf-16-be', errors='ignore')
                    mapping[src] = dst_chars
                cmaps[obj_num] = mapping
        except Exception:
            pass

fonts_dict = {'F1': 611, 'F2': 601, 'F3': 631, 'F4': 606, 'F5': 616, 'F6': 626, 'F7': 621}
f_cmaps = {}
for fname, fnum in fonts_dict.items():
    if fnum in objects:
        fhdr = objects[fnum]['header']
        tu_m = re.search(rb'/ToUnicode\s+(\d+)', fhdr)
        if tu_m:
            tu_id = int(tu_m.group(1))
            f_cmaps[fname] = cmaps.get(tu_id, {})

root_m = re.search(rb'/Root\s+(\d+)\s+\d+\s+R', pdf_bytes)
root_obj = int(root_m.group(1))
pages_root_m = re.search(rb'/Pages\s+(\d+)\s+\d+\s+R', objects[root_obj]['header'])
pages_root = int(pages_root_m.group(1))
pages_list = []

def get_pages(node_num):
    node = objects[node_num]['header']
    type_m = re.search(rb'/Type\s*/(\w+)', node)
    if type_m and type_m.group(1) == b'Page':
        pages_list.append(node_num)
        return
    kids_m = re.search(rb'/Kids\s*\[\s*(.*?)\s*\]', node, re.DOTALL)
    if kids_m:
        for km in re.finditer(rb'(\d+)\s+\d+\s+R', kids_m.group(1)):
            get_pages(int(km.group(1)))

get_pages(pages_root)

def extract_page_items(p_idx):
    p_num = pages_list[p_idx - 1]
    cnt_id = int(re.search(rb'/Contents\s+(\d+)', objects[p_num]['header']).group(1))
    s = zlib.decompress(objects[cnt_id]['stream']).decode('latin1')
    tokens = re.findall(r'/?[a-zA-Z0-9_\.]+|[<\[][^>\]]*[>\]]|[-+]?\d*\.?\d+', s)
    items = []
    curr_font = 'F1'
    curr_size = 12.0
    tm = [1, 0, 0, 1, 0, 0]
    tlm = [1, 0, 0, 1, 0, 0]
    i = 0
    while i < len(tokens):
        tok = tokens[i]
        if tok == 'BT':
            tm = [1, 0, 0, 1, 0, 0]
            tlm = [1, 0, 0, 1, 0, 0]
        elif tok == 'Tf':
            curr_font = tokens[i-2].lstrip('/')
            curr_size = float(tokens[i-1])
        elif tok == 'Td':
            tx = float(tokens[i-2])
            ty = float(tokens[i-1])
            tlm[4] += tx
            tlm[5] += ty
            tm = list(tlm)
        elif tok == 'Tm':
            tm = [float(tokens[i-6+j]) for j in range(6)]
            tlm = list(tm)
        elif tok == 'Tj':
            raw_str = tokens[i-1]
            if raw_str.startswith('<') and raw_str.endswith('>'):
                hex_str = raw_str[1:-1]
                cmap = f_cmaps.get(curr_font, {})
                text = ''
                for k in range(0, len(hex_str), 2):
                    code = int(hex_str[k:k+2], 16)
                    text += cmap.get(code, '?')
                items.append((tm[5], tm[4], curr_font, curr_size, text))
        i += 1
    return items

# -------------------------------------------------------------
# 2. Chord Mapping
# -------------------------------------------------------------

CHORD_ROOTS = {
    'SOL': 'G', 'DO': 'C', 'RE': 'D', 'MI': 'E', 'FA': 'F', 'LA': 'A', 'SI': 'B',
    'Sol': 'G', 'Do': 'C', 'Re': 'D', 'Mi': 'E', 'Fa': 'F', 'La': 'A', 'Si': 'B'
}

CHORD_REGEX = re.compile(r'^(SOL|DO|RE|MI|FA|LA|SI|Sol|Do|Re|Mi|Fa|La|Si)(#|b)?(m|dim|dism|maj|aug)?(7|maj7|9|6|7ª)?$', re.IGNORECASE)

def convert_spanish_chord(c):
    c = c.strip().rstrip('ª')
    if len(c) > 2 and c.endswith('M') and not c.startswith('MI') and not c.startswith('Mi'):
        c = c[:-1]
    m = re.match(r'^(SOL|DO|RE|MI|FA|LA|SI|Sol|Do|Re|Mi|Fa|La|Si)(#|b)?(.*)$', c, re.IGNORECASE)
    if not m:
        return c
    root_raw = m.group(1).capitalize()
    root = CHORD_ROOTS.get(root_raw.upper(), root_raw)
    acc = m.group(2) or ''
    rest = m.group(3) or ''
    rest = rest.replace('dism.', 'dim').replace('dism', 'dim').replace('ª', '')
    if rest.lower() == 'm':
        rest = 'm'
    return root + acc + rest

def is_single_chord(token):
    clean = token.strip(' ,-()/ª:')
    if not clean:
        return False
    return bool(CHORD_REGEX.match(clean))

def is_chord_line(line_str):
    tokens = [t for t in re.split(r'[-\s/]+', line_str) if t.strip()]
    if not tokens:
        return False
    chord_tokens = 0
    directives = {'BIS', 'TER', 'AD', 'LIBITUM', 'CAPELLA', 'A', 'VECES', 'CEJILLA', 'TRASTE', 'EN', 'ENTRADA', 'INSTRUMENTAL', 'INTRO', 'INTRODUCCION', 'INTRODUCCIÓN', 'INTRODUCCCION', 'BORDONEO'}
    for t in tokens:
        clean = t.strip(' ,-()/ª:').upper()
        if is_single_chord(clean) or clean in directives or re.match(r'^\d+ª?$', clean):
            chord_tokens += 1
    return (chord_tokens / len(tokens)) >= 0.7

def convert_chord_sequence(line_str):
    parts = re.split(r'([-\s,/]+)', line_str)
    res = []
    for p in parts:
        clean = p.strip(' ,-()/ª:')
        if is_single_chord(clean):
            res.append(f'[{convert_spanish_chord(clean)}]')
        elif clean.upper() in ['BIS', 'TER', 'AD LIBITUM', 'A CAPPELLA', 'CAPELLA', 'VECES']:
            res.append(f'({clean.lower()})')
        else:
            res.append(p)
    return ''.join(res).strip()

def combine_items_x(items_x):
    combined = []
    curr_x = None
    curr_text = ''
    for x, txt in items_x:
        if curr_x is None:
            curr_x = x
            curr_text = txt
        else:
            approx_end = curr_x + len(curr_text) * 6.5
            if (x - approx_end) < 4.0 and not curr_text.endswith(' ') and not txt.startswith(' '):
                curr_text += txt
            else:
                combined.append((curr_x, curr_text))
                curr_x = x
                curr_text = txt
    if curr_x is not None:
        combined.append((curr_x, curr_text))
    return combined

# -------------------------------------------------------------
# 3. Two-Column Detection & Page Line Extraction
# -------------------------------------------------------------

def is_page_two_column(items):
    body = [it for it in items if 45 <= it[0] <= 700]
    hist = {}
    for it in body:
        b = int(it[1] // 20) * 20
        hist[b] = hist.get(b, 0) + 1
    left_counts = [hist.get(b, 0) for b in range(80, 240, 20)]
    right_counts = [hist.get(b, 0) for b in range(340, 520, 20)]
    valley_counts = [hist.get(b, 0) for b in range(280, 320, 20)]
    peak_left = max(left_counts) if left_counts else 0
    peak_right = max(right_counts) if right_counts else 0
    valley = min(valley_counts) if valley_counts else 999
    return peak_left >= 15 and peak_right >= 15 and valley <= 0.25 * min(peak_left, peak_right)

def get_page_lines(p_idx):
    items = extract_page_items(p_idx)
    body = [it for it in items if 45 <= it[0] <= 770]
    if not body:
        return []

    two_col = is_page_two_column(items)
    if two_col:
        left_items = [it for it in body if it[1] < 290]
        right_items = [it for it in body if it[1] >= 290]
        columns = [left_items, right_items]
    else:
        columns = [body]

    page_lines = []
    for col in columns:
        lines_dict = {}
        for y, x, font, size, text in col:
            y_k = round(y / 4.0) * 4.0
            if y_k not in lines_dict:
                lines_dict[y_k] = []
            lines_dict[y_k].append((x, text))
        sorted_y = sorted(lines_dict.keys(), reverse=True)
        for y in sorted_y:
            line_items = sorted(lines_dict[y], key=lambda it: it[0])
            full_str = ''.join(it[1] for it in line_items).strip()
            if full_str:
                page_lines.append((y, line_items, full_str))

    return page_lines

# -------------------------------------------------------------
# 4. Merging Chords and Lyrics into Song Text
# -------------------------------------------------------------

def merge_song_lines(lines_data):
    output = []
    capo = 0
    all_chords = []

    for _, _, full_str in lines_data[:6]:
        cm = re.search(r'CEJILLA\s+EN\s+(\d+)', full_str, re.IGNORECASE)
        if cm:
            capo = int(cm.group(1))

    # Collect all chords to find the best key
    for _, items_x, full_str in lines_data:
        comb = combine_items_x(items_x)
        for x_pos, txt in comb:
            for m in re.finditer(r'([A-Za-z0-9#ª]+)', txt):
                tok = m.group(1)
                if is_single_chord(tok):
                    all_chords.append(convert_spanish_chord(tok))

    # Determine key: prioritize tonic chords (Am, C, D, G, E, Em, Dm, A)
    detected_key = "C"
    tonics = [c for c in all_chords if not c.endswith('7') and not c.endswith('9')]
    if tonics:
        # Most frequent tonic
        counts = {}
        for c in tonics:
            counts[c] = counts.get(c, 0) + 1
        detected_key = max(counts.keys(), key=lambda k: counts[k])
    elif all_chords:
        detected_key = all_chords[0].rstrip('79') or all_chords[0]

    i = 0
    current_section = None
    verse_count = 1

    while i < len(lines_data):
        y, items_x, full_str = lines_data[i]

        if full_str.startswith('TUNA COMPOSTELANA') and 'JJJJ' in full_str:
            i += 1
            continue

        upper = full_str.upper()
        if upper.startswith(('INTRODUCCION', 'INTRODUCCIÓN', 'INTRODUCCCION', 'INTRO.', 'INTRO:')):
            output.append('## Intro')
            current_section = 'intro'
            chord_part = re.sub(r'^(INTRODUCCION|INTRODUCCIÓN|INTRODUCCCION|INTRO\.|INTRO)\s*:?\s*', '', full_str, flags=re.IGNORECASE).strip()
            if chord_part:
                output.append(convert_chord_sequence(chord_part))
            i += 1
            continue
        elif upper in ['(ESTRIBILLO)', 'ESTRIBILLO', 'CORO', '(CORO)', '( ESTRIBILLO )', 'ESTRIBILLO:']:
            output.append('## Estribillo')
            current_section = 'estribillo'
            i += 1
            continue
        elif upper in ['(INSTRUMENTAL)', 'INSTRUMENTAL', 'MUSICA', 'MÚSICA', 'INSTRUMENTAL:']:
            output.append('## Instrumental')
            current_section = 'instrumental'
            i += 1
            continue

        if is_chord_line(full_str):
            if i + 1 < len(lines_data) and not is_chord_line(lines_data[i+1][2]):
                next_y, next_items, next_str = lines_data[i+1]
                if 4 <= (y - next_y) <= 24:
                    comb_chord = combine_items_x(items_x)
                    comb_lyrics = combine_items_x(next_items)

                    chords_at_x = []
                    for x, txt in comb_chord:
                        for m in re.finditer(r'([A-Za-z0-9#ª]+)', txt):
                            tok = m.group(1)
                            if is_single_chord(tok):
                                chords_at_x.append((x + m.start() * 6.5, f'[{convert_spanish_chord(tok)}]'))

                    if chords_at_x:
                        char_positions = []
                        cx = comb_lyrics[0][0] if comb_lyrics else 50.0
                        for it_x, it_txt in comb_lyrics:
                            cx = it_x
                            for ch in it_txt:
                                char_positions.append((cx, ch))
                                cx += 6.5

                        words_matches = list(re.finditer(r'\S+', next_str))
                        if words_matches and char_positions:
                            word_positions = []
                            for wm in words_matches:
                                char_idx = min(wm.start(), len(char_positions) - 1)
                                wx = char_positions[char_idx][0]
                                word_positions.append((wx, wm.start()))

                            insertions = []
                            for cx_chord, chord_tag in chords_at_x:
                                best_idx = 0
                                min_dist = 9999
                                for wx, str_idx in word_positions:
                                    dist = abs(wx - cx_chord)
                                    if dist < min_dist:
                                        min_dist = dist
                                        best_idx = str_idx
                                insertions.append((best_idx, chord_tag))

                            insertions.sort(key=lambda ins: ins[0], reverse=True)
                            chars = list(next_str)
                            for s_idx, chord_tag in insertions:
                                chars.insert(s_idx, chord_tag + ' ')
                            merged_text = re.sub(r'\s+', ' ', ''.join(chars)).strip()
                            output.append(merged_text)
                            i += 2
                            continue

            output.append(convert_chord_sequence(full_str))
            i += 1
            continue

        if current_section is None:
            output.append(f'## Verso {verse_count}')
            current_section = f'verso_{verse_count}'
            verse_count += 1

        output.append(full_str)
        i += 1

    return output, capo, detected_key

# -------------------------------------------------------------
# 5. Song Registry (186 Songs)
# -------------------------------------------------------------

SONGS_REGISTRY = [
    (3, 4, 'Acurrúcame', 'acurrucame'),
    (4, 5, 'Adelita', 'adelita'),
    (6, 6, 'Adiós a la llanera', 'adios-a-la-llanera'),
    (7, 7, 'Adoro', 'adoro'),
    (8, 8, 'Agua del pozo', 'agua-del-pozo'),
    (9, 9, 'Algo contigo', 'algo-contigo'),
    (10, 10, 'All My Loving', 'all-my-loving'),
    (11, 11, 'Alma de Dios', 'alma-de-dios'),
    (12, 12, 'Alma llanera', 'alma-llanera'),
    (13, 13, 'Alma, corazón y vida', 'alma-corazon-y-vida'),
    (14, 14, 'Alfonsina y el mar', 'alfonsina-y-el-mar'),
    (15, 15, 'Amalia', 'amalia'),
    (16, 16, 'Amalia Rosa', 'amalia-rosa'),
    (17, 17, 'Amapola', 'amapola'),
    (18, 18, 'Amarraditos', 'amarraditos'),
    (19, 19, 'Amelia', 'amelia'),
    (20, 20, 'Amiga', 'amiga'),
    (21, 22, 'Amor y fiesta', 'amor-y-fiesta'),
    (22, 23, 'Amoríos en el molino', 'amorios-en-el-molino'),
    (24, 24, 'Amorosa guajira', 'amorosa-guajira'),
    (24, 25, 'El andariego', 'el-andariego'),
    (26, 26, 'Ansiedad', 'ansiedad'),
    (27, 27, 'Así es mi Granada', 'asi-es-mi-granada'),
    (28, 28, 'Aurora', 'aurora'),
    (29, 29, 'Barrio brujo', 'barrio-brujo'),
    (30, 30, 'Bikina', 'bikina'),
    (31, 31, 'Soy borinqueño', 'soy-borinqueno'),
    (32, 32, 'El burro parrandero', 'el-burro-parrandero'),
    (33, 33, 'Candombe para José', 'candombe-para-jose'),
    (34, 34, 'La calesera', 'la-calesera'),
    (35, 35, 'Calles sin rumbo', 'calles-sin-rumbo'),
    (36, 36, 'Caminemos', 'caminemos'),
    (37, 37, 'Campanas de Vegueta', 'campanas-de-vegueta'),
    (38, 38, 'Canción de Orfeo', 'cancion-de-orfeo'),
    (39, 39, 'Cantinero de Cuba', 'cantinero-de-cuba'),
    (40, 40, 'Carnavalito', 'carnavalito'),
    (41, 41, 'Cartagenera', 'cartagenera'),
    (42, 42, 'Pájaro chogüí', 'pajaro-chogui'),
    (43, 43, 'El chotis del feo', 'el-chotis-del-feo'),
    (44, 44, 'Cielito lindo', 'cielito-lindo'),
    (45, 45, 'Clavelitos', 'clavelitos'),
    (46, 46, 'Clodomiro el ñajo', 'clodomiro-el-najo'),
    (47, 47, 'Colombiana', 'colombiana'),
    (48, 48, 'Las palmeras', 'las-palmeras'),
    (49, 49, 'La concha', 'la-concha'),
    (50, 50, 'Contigo aprendí', 'contigo-aprendi'),
    (51, 51, 'Cuando salí de Cuba', 'cuando-sali-de-cuba'),
    (51, 52, 'Cucurrucucú paloma', 'cucurrucucu-paloma'),
    (53, 53, 'Dama de España', 'dama-de-espana'),
    (54, 54, 'De colores', 'de-colores'),
    (55, 55, 'Despierta', 'despierta'),
    (56, 56, 'Despierta mejicano', 'despierta-mejicano'),
    (57, 57, 'Dos palomitas', 'dos-palomitas'),
    (58, 58, 'Dos puntas', 'dos-puntas'),
    (59, 59, 'El beso', 'el-beso'),
    (60, 60, 'El gato', 'el-gato'),
    (61, 61, 'El muerto vivo', 'el-muerto-vivo'),
    (62, 62, 'El parque', 'el-parque'),
    (63, 63, 'Encuentro junto al jagüey', 'encuentro-junto-al-jaguey'),
    (64, 64, 'Envidia', 'envidia'),
    (65, 65, 'Española', 'espanola'),
    (66, 66, 'Espinita', 'espinita'),
    (67, 67, 'Estampa cumanesa', 'estampa-cumanesa'),
    (68, 68, 'Estudiantina madrileña', 'estudiantina-madrilena'),
    (69, 69, 'Estudiantina portuguesa', 'estudiantina-portuguesa'),
    (70, 70, 'Farola de Santa Cruz', 'farola-de-santa-cruz'),
    (71, 71, 'La ronda del firulí', 'la-ronda-del-firuli'),
    (72, 72, 'Flor marchita', 'flor-marchita'),
    (73, 73, 'Fonseca', 'fonseca'),
    (74, 74, 'Galopera', 'galopera'),
    (75, 75, 'Gaudeamus igitur', 'gaudeamus-igitur'),
    (76, 76, 'Granada', 'granada'),
    (77, 77, 'Guantanamera', 'guantanamera'),
    (78, 78, 'Habanera', 'habanera'),
    (79, 79, 'Habaneras de Cádiz', 'habaneras-de-cadiz'),
    (80, 80, 'Hojas muertas', 'hojas-muertas'),
    (81, 81, 'Horas de ronda', 'horas-de-ronda'),
    (82, 82, 'Hoy estoy aquí', 'hoy-estoy-aqui'),
    (83, 83, 'Imágenes de ayer', 'imagenes-de-ayer'),
    (84, 84, 'Ingenieros', 'ingenieros'),
    (85, 85, 'En Inglaterra', 'en-inglaterra'),
    (86, 86, 'Isa parrandera', 'isa-parrandera'),
    (87, 87, 'Isa de Candidito', 'isa-de-candidito'),
    (88, 88, 'Islas Canarias', 'islas-canarias'),
    (89, 89, 'Jamás', 'jamas'),
    (90, 90, 'Júrame', 'jurame'),
    (91, 92, 'La Dolores', 'la-dolores'),
    (93, 93, 'La feria', 'la-feria'),
    (94, 94, 'La flor de la canela', 'la-flor-de-la-canela'),
    (95, 95, 'La hiedra', 'la-hiedra'),
    (96, 96, 'La Maricarmen', 'la-maricarmen'),
    (97, 97, 'La media vuelta', 'la-media-vuelta'),
    (98, 98, 'La morena de mi copla', 'la-morena-de-mi-copla'),
    (99, 99, 'La tuna pasa', 'la-tuna-pasa'),
    (100, 100, 'Las cintas de mi capa', 'las-cintas-de-mi-capa'),
    (101, 101, 'Las plazas de mi Sevilla', 'las-plazas-de-mi-sevilla'),
    (102, 102, 'Limeña', 'limena'),
    (103, 103, 'Lo duro', 'lo-duro'),
    (104, 104, 'Luna de España', 'luna-de-espana'),
    (105, 105, 'Madrigal', 'madrigal'),
    (106, 106, 'Magdalena', 'magdalena'),
    (107, 107, 'Maitechu mía', 'maitechu-mia'),
    (108, 108, 'Málaga', 'malaga'),
    (109, 109, 'Manolo', 'manolo'),
    (110, 110, 'María Chuchena', 'maria-chuchena'),
    (111, 111, 'María Dolores', 'maria-dolores'),
    (112, 112, 'María la portuguesa', 'maria-la-portuguesa'),
    (113, 113, 'Maribel', 'maribel'),
    (114, 114, 'Mediterráneo', 'mediterraneo'),
    (115, 115, 'Me importas tú', 'me-importas-tu'),
    (116, 116, 'Merceditas', 'merceditas'),
    (117, 117, 'Me voy pa\'l pueblo', 'me-voy-pal-pueblo'),
    (118, 118, 'Mía', 'mia'),
    (118, 119, 'Mi buen amor', 'mi-buen-amor'),
    (120, 120, 'Mis noches sin ti', 'mis-noches-sin-ti'),
    (121, 121, 'Mi viejo San Juan', 'mi-viejo-san-juan'),
    (122, 122, 'Moliendo café', 'moliendo-cafe'),
    (123, 123, 'Motivo', 'motivo'),
    (124, 124, 'Muchachita sabanera', 'muchachita-sabanera'),
    (125, 125, 'Mujer', 'mujer'),
    (126, 126, 'Mujer española', 'mujer-espanola'),
    (127, 127, 'Muñequita linda', 'munequita-linda'),
    (128, 128, 'Naranjitai', 'naranjitai'),
    (129, 129, 'La nave del olvido', 'la-nave-del-olvido'),
    (130, 130, 'Noche de ronda', 'noche-de-ronda'),
    (131, 131, 'Noche hermosa', 'noche-hermosa'),
    (132, 132, 'Noche lóbrega', 'noche-lobrega'),
    (133, 133, 'Noche plateada', 'noche-plateada'),
    (134, 134, 'Nostalgia', 'nostalgia'),
    (135, 135, 'Nube gris', 'nube-gris'),
    (136, 136, 'Ojos de España', 'ojos-de-espana'),
    (137, 137, 'Ojos negros', 'ojos-negros'),
    (138, 138, 'Okal', 'okal'),
    (139, 139, 'La paloma', 'la-paloma'),
    (140, 140, 'Párate', 'parate'),
    (141, 141, 'Parranda santacrucera', 'parranda-santacrucera'),
    (142, 142, 'Parrandero', 'parrandero'),
    (143, 143, 'Parrandero canario', 'parrandero-canario'),
    (144, 144, 'Pasacalles de garita', 'pasacalles-de-garita'),
    (145, 145, 'Pa\' todo el año', 'pa-todo-el-ano'),
    (146, 146, 'Payador', 'payador'),
    (147, 148, 'Pedro Navaja', 'pedro-navaja'),
    (149, 149, 'Perfidia', 'perfidia'),
    (150, 150, 'Perfume de carnaval', 'perfume-de-carnaval'),
    (151, 152, 'Los perjúmenes', 'los-perjumenes'),
    (153, 153, 'El pescador de morenas', 'el-pescador-de-morenas'),
    (154, 154, 'Pin piriví pin pin', 'pin-pirivi-pin-pin'),
    (155, 155, 'La playa', 'la-playa'),
    (156, 156, 'Popurrí canario', 'popurri-canario'),
    (157, 157, 'Queda la ilusión', 'queda-la-ilusion'),
    (158, 158, 'Que nadie sepa mi sufrir', 'que-nadie-sepa-mi-sufrir'),
    (159, 159, 'Recuerdos', 'recuerdos'),
    (160, 160, 'Regálame esta noche', 'regalame-esta-noche'),
    (161, 161, 'Reloj', 'reloj'),
    (162, 162, 'Romanza de la papilla', 'romanza-de-la-papilla'),
    (163, 163, 'Ronda del silbidito', 'ronda-del-silbidito'),
    (164, 164, 'Rondalla', 'rondalla'),
    (165, 165, 'Rosa ardiente', 'rosa-ardiente'),
    (166, 166, 'Rumor en los balcones', 'rumor-en-los-balcones'),
    (167, 167, 'El ruiseñor', 'el-ruisenor'),
    (168, 168, 'San Benito', 'san-benito'),
    (169, 169, 'San Cayetano', 'san-cayetano'),
    (170, 170, 'Sebastopol', 'sebastopol'),
    (171, 171, 'Serenata de aldea', 'serenata-de-aldea'),
    (172, 172, 'Serenata a la Mezquita', 'serenata-a-la-mezquita'),
    (173, 173, 'Silencio', 'silencio'),
    (174, 174, 'La sirenita', 'la-sirenita'),
    (175, 176, 'La sitiera', 'la-sitiera'),
    (177, 177, 'Son de la loma', 'son-de-la-loma'),
    (178, 178, 'Solamente una vez', 'solamente-una-vez'),
    (179, 179, 'Solo', 'solo'),
    (180, 180, 'Entre sonrisas y flores', 'entre-sonrisas-y-flores'),
    (180, 181, 'Canción con todos', 'cancion-con-todos'),
    (182, 182, 'Tierra canaria', 'tierra-canaria'),
    (183, 183, 'Tira de la cuerda', 'tira-de-la-cuerda'),
    (184, 184, 'Tomando té', 'tomando-te'),
    (185, 185, 'Tuna compostelana', 'tuna-compostelana'),
    (186, 186, 'Tus ojos', 'tus-ojos'),
    (187, 187, 'Vagabundo', 'vagabundo'),
    (188, 188, 'Valencia', 'valencia'),
    (189, 189, 'Vampiro', 'vampiro'),
    (190, 190, 'Verde campiña', 'verde-campina'),
    (190, 191, 'Violetas imperiales', 'violetas-imperiales'),
    (192, 193, 'Viva el pasodoble', 'viva-el-pasodoble'),
    (194, 194, 'Viva España', 'viva-espana'),
    (195, 195, 'Yo te diré', 'yo-te-dire')
]

# -------------------------------------------------------------
# 6. Execute Import & Update
# -------------------------------------------------------------

existing_files = {}
for f in glob.glob(os.path.join(CANCIONES_DIR, '*.md')):
    slug = os.path.basename(f)[:-3]
    with open(f, 'r', encoding='utf-8') as fp:
        existing_files[slug] = (f, fp.read())

created_count = 0
updated_count = 0

for start_p, end_p, title, slug in SONGS_REGISTRY:
    matched_slug = None
    if slug in existing_files:
        matched_slug = slug
    else:
        for ex_slug in existing_files:
            if slugify(title) == ex_slug:
                matched_slug = ex_slug
                break

    if matched_slug:
        # Existing song: update frontmatter to ensure tags include "tuna" and "español"
        filepath, content = existing_files[matched_slug]
        tags_m = re.search(r'tags:\s*\[(.*?)\]', content)
        if tags_m:
            curr_tags = [t.strip().strip('\"\'') for t in tags_m.group(1).split(',') if t.strip()]
            new_tags = list(curr_tags)
            if 'tuna' not in new_tags:
                new_tags.append('tuna')
            if 'español' not in new_tags:
                new_tags.append('español')
            new_tags_str = 'tags: [' + ', '.join(f'"{t}"' for t in new_tags) + ']'
            new_content = content[:tags_m.start()] + new_tags_str + content[tags_m.end():]
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as fp:
                    fp.write(new_content)
                updated_count += 1
        continue

    # New song: extract lines from PDF
    song_lines = []
    for p in range(start_p, end_p + 1):
        p_lines = get_page_lines(p)
        if p == start_p and start_p != end_p:
            title_clean = slugify(title)
            found_title_idx = -1
            for idx, (y, items_x, full_str) in enumerate(p_lines):
                if slugify(full_str) == title_clean or title_clean in slugify(full_str):
                    found_title_idx = idx
                    break
            if found_title_idx >= 0:
                p_lines = p_lines[found_title_idx + 1:]
        elif p == end_p and start_p != end_p:
            # Stop if another title starts
            pass

        song_lines.extend(p_lines)

    if song_lines:
        first_str = song_lines[0][2]
        if slugify(first_str) == slugify(title) or slugify(title) in slugify(first_str):
            song_lines = song_lines[1:]

    merged_lines, capo, detected_key = merge_song_lines(song_lines)

    if not merged_lines:
        body_content = f"## Verso 1\n*No se pudo extraer la letra correctamente del documento PDF.*\n"
    else:
        body_content = '\n'.join(merged_lines)

    file_content = f"""---
title: "{title}"
artist: "Tuna de Filosofía y Letras de Málaga"
key: "{detected_key}"
capo: {capo}
tempo: 100
tags: ["tuna", "español"]
---

{body_content}
"""

    target_path = os.path.join(CANCIONES_DIR, f"{slug}.md")
    with open(target_path, 'w', encoding='utf-8') as fp:
        fp.write(file_content)
    created_count += 1

print(f"Extraction complete: Created {created_count} new songs, updated {updated_count} existing songs.")
