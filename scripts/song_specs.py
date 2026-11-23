# Mapping of all songs in the 102-page PDF
# Each entry: (page, title, artist, slug, min_x, max_x, min_y, max_y, capo, tags)

SONG_DEFINITIONS = [
    # Page 1
    (1, "Sin documentos", "Los Rodríguez", "sin-documentos", 0, 600, 480, 900, 0, ["rock", "español", "90s"]),
    (1, "Mucho mejor", "Los Rodríguez", "mucho-mejor", 0, 600, 0, 480, 0, ["rock", "español", "90s"]),
    
    # Page 2
    (2, "Corazón partío", "Alejandro Sanz", "corazon-partio", 0, 600, 0, 900, 0, ["pop", "español", "balada", "90s"]),
    
    # Page 3
    (3, "Un velero llamado libertad", "José Luis Perales", "un-velero-llamado-libertad", 0, 600, 360, 900, 0, ["clásico", "balada", "español", "70s"]),
    (3, "Solo le pido a Dios", "León Gieco", "solo-le-pido-a-dios", 0, 600, 0, 360, 0, ["folk", "canción protesta", "clásico"]),
    
    # Page 4
    (4, "Por ella", "José Manuel Soto", "por-ella", 0, 600, 0, 900, 0, ["balada", "español", "80s"]),
    
    # Page 5
    (5, "El talismán", "Rosana", "el-talisman", 0, 600, 0, 900, 0, ["pop", "español", "90s"]),
    
    # Page 6
    (6, "Un beso y una flor", "Nino Bravo", "un-beso-y-una-flor", 0, 600, 0, 900, 0, ["clásico", "balada", "español", "70s"]),
    
    # Page 7
    (7, "Contamíname", "Pedro Guerra", "contaminame", 0, 600, 0, 900, 0, ["canción de autor", "español", "90s"]),
    
    # Page 8
    (8, "Cadillac solitario", "Loquillo", "cadillac-solitario", 0, 290, 0, 900, 0, ["rock", "español", "80s"]),
    (8, "Resistiré", "Dúo Dinámico", "resistire", 290, 600, 0, 900, 0, ["pop", "clásico", "español", "80s"]),
    
    # Page 9
    (9, "En algún lugar", "Duncan Dhu", "en-algun-lugar", 0, 290, 0, 900, 0, ["pop rock", "español", "80s"]),
    (9, "Jardín de rosas", "Duncan Dhu", "jardin-de-rosas", 290, 600, 0, 900, 0, ["pop rock", "español", "80s"]),
    
    # Page 10
    (10, "Mediterráneo", "Joan Manuel Serrat", "mediterraneo", 0, 600, 0, 900, 0, ["canción de autor", "clásico", "español"]),
    
    # Page 11
    (11, "María la portuguesa", "Carlos Cano", "maria-la-portuguesa", 0, 600, 0, 900, 0, ["copla", "fado", "español"]),
    
    # Page 12
    (12, "Mil calles llevan hacia ti", "La Guardia", "mil-calles-llevan-hacia-ti", 0, 600, 0, 900, 0, ["pop rock", "español", "80s"]),
    
    # Page 13
    (13, "El cuarto de Tula", "Buena Vista Social Club", "el-cuarto-de-tula", 0, 600, 0, 900, 0, ["son cubano", "salsa", "latino"]),
    
    # Page 14
    (14, "Lágrimas negras", "Trío Matamoros", "lagrimas-negras", 0, 600, 340, 900, 0, ["bolero", "son cubano", "clásico"]),
    (14, "Fonseca", "Tuna Universitaria", "fonseca", 0, 600, 0, 340, 0, ["tuna", "popular", "español"]),
    
    # Page 15
    (15, "Oración del remanso", "Jorge Fandermole", "oracion-del-remanso", 0, 600, 0, 900, 0, ["folklore", "argentino", "acústico"]),
    
    # Page 16
    (16, "Río manso", "Cholo Aguirre", "rio-manso", 0, 600, 0, 900, 0, ["folklore", "chamamé", "argentino"]),
    
    # Page 17
    (17, "Sombras", "Rosario Sansores", "sombras", 0, 600, 0, 900, 0, ["pasillo", "bolero", "clásico"]),
    
    # Page 18
    (18, "El vagabundo", "Los Panchos", "el-vagabundo", 0, 600, 0, 900, 0, ["bolero", "clásico", "mexicano"]),
    
    # Page 19
    (19, "Piel canela", "Bobby Capó", "piel-canela", 0, 600, 0, 900, 0, ["bolero", "clásico", "latino"]),
    
    # Page 20
    (20, "Son borinqueño", "Tuna de Cayey", "son-borinqueno", 0, 600, 0, 900, 0, ["puerto rico", "tuna", "popular"]),
    
    # Page 21
    (21, "La flor de la canela", "Chabuca Granda", "la-flor-de-la-canela", 0, 290, 0, 900, 0, ["vals peruano", "clásico", "latino"]),
    (21, "Caballo viejo", "Simón Díaz", "caballo-viejo", 290, 600, 0, 900, 0, ["joropo", "folklore", "venezolano"]),
    
    # Page 22
    (22, "La colegiala", "Rodolfo Aicardi", "la-colegiala", 0, 600, 530, 900, 0, ["cumbia", "latino", "bailable"]),
    (22, "Moliendo café", "Hugo Blanco", "moliendo-cafe", 0, 600, 300, 530, 0, ["ritmo orquídea", "venezolano", "clásico"]),
    (22, "Alma, corazón y vida", "Adrián Flores", "alma-corazon-y-vida", 0, 600, 0, 300, 0, ["vals peruano", "bolero", "clásico"]),
    
    # Page 23
    (23, "La gota fría", "Carlos Vives", "la-gota-fria", 0, 600, 350, 900, 0, ["vallenato", "colombiano", "pop"]),
    (23, "Bésame mucho", "Consuelo Velázquez", "besame-mucho", 0, 600, 0, 350, 0, ["bolero", "clásico", "romántico"]),
    
    # Page 24
    (24, "La fruta fresca", "Carlos Vives", "la-fruta-fresca", 0, 600, 0, 900, 0, ["vallenato", "pop", "colombiano"]),
    
    # Page 25
    (25, "El mariachi", "Antonio Banderas", "el-mariachi", 0, 290, 320, 900, 0, ["ranchera", "mexicano", "soundtrack"]),
    (25, "Baila, baila negra", "Manuelito", "baila-baila-negra", 0, 290, 0, 320, 0, ["folklore", "latino", "bailable"]),
    (25, "Pero a tu lado", "Los Secretos", "pero-a-tu-lado", 290, 600, 0, 900, 0, ["pop rock", "español", "balada"]),
    
    # Page 26
    (26, "Que nadie sepa mi sufrir", "Ángel Cabral", "que-nadie-sepa-mi-sufrir", 0, 290, 260, 900, 0, ["vals", "vals criollo", "clásico"]),
    (26, "En el campo", "Grupo Celeste", "en-el-campo", 0, 290, 0, 260, 0, ["cumbia", "peruano", "popular"]),
    (26, "La muralla", "Quilapayún", "la-muralla", 290, 600, 0, 900, 0, ["canción protesta", "nueva canción", "chileno"]),
    
    # Page 27
    (27, "Alma llanera", "Pedro Elías Gutiérrez", "alma-llanera", 0, 290, 0, 900, 0, ["joropo", "folklore", "venezolano"]),
    (27, "Las dos puntas", "Osvaldo Rocha", "las-dos-puntas", 290, 600, 0, 900, 0, ["cueca", "folklore", "cuyo"]),
    
    # Page 28
    (28, "Así es mi Granada", "Popular", "asi-es-mi-granada", 0, 600, 0, 900, 0, ["copla", "andaluz", "popular"]),
    
    # Page 29
    (29, "Luna tucumana", "Atahualpa Yupanqui", "luna-tucumana", 0, 290, 0, 900, 0, ["zamba", "folklore", "argentino"]),
    (29, "Preguntitas sobre Dios", "Atahualpa Yupanqui", "preguntitas-sobre-dios", 290, 600, 0, 900, 0, ["milonga", "folklore", "canción protesta"]),
    
    # Page 30
    (30, "Junto al jagüey", "Juan Vicente Torrealba", "junto-al-jaguey", 0, 600, 0, 900, 0, ["pasaje", "venezolano", "folklore"]),
    
    # Page 31
    (31, "Frenesí", "Alberto Domínguez", "frenesi", 0, 600, 0, 900, 0, ["bolero", "chachachá", "clásico"]),
    
    # Page 32
    (32, "Málaga, bonita Málaga", "Popular", "malaga-bonita-malaga", 0, 600, 0, 900, 0, ["copla", "rumba", "andaluz"]),
    
    # Page 33
    (33, "Mi viejo San Juan", "Noel Estrada", "mi-viejo-san-juan", 0, 600, 0, 900, 0, ["bolero", "puerto rico", "clásico"]),
    
    # Page 34
    (34, "Silencio", "Rafael Hernández", "silencio-bolero", 0, 600, 420, 900, 0, ["bolero", "clásico", "latino"]),
    (34, "Dormido entre rosas", "Carlos Cano", "dormido-entre-rosas", 0, 600, 0, 420, 2, ["copla", "pasodoble", "andaluz"]),
    
    # Page 35
    (35, "Cielito lindo", "Quirino Mendoza", "cielito-lindo", 0, 600, 580, 900, 0, ["mariachi", "ranchera", "mexicano"]),
    (35, "Habaneras de Cádiz", "Carlos Cano", "habaneras-de-cadiz", 0, 600, 380, 580, 0, ["habanera", "copla", "andaluz"]),
    (35, "Malagueña salerosa", "Elpidio Ramírez", "malaguena-salerosa", 0, 600, 0, 380, 0, ["huapango", "mexicano", "clásico"]),
    
    # Page 36
    (36, "A mi manera", "Siempre Así", "a-mi-manera-siempre-asi", 0, 600, 320, 900, 2, ["rumba", "español", "cover"]),
    (36, "Te estoy queriendo tanto", "Siempre Así", "te-estoy-queriendo-tanto", 0, 600, 0, 320, 0, ["rumba", "español", "sevillana"]),
    
    # Page 37
    (37, "Comme d’habitude / My Way", "Claude François / Sinatra", "comme-d-habitude", 0, 600, 0, 900, 0, ["clásico", "balada", "internacional"]),
    
    # Page 38
    (38, "Para volver a volver", "Siempre Así", "para-volver-a-volver", 0, 600, 520, 900, 2, ["rumba", "español", "popular"]),
    (38, "Se me va", "Manuel Alejandro", "se-me-va", 0, 600, 240, 520, 0, ["balada", "rumba", "español"]),
    (38, "Tú me camelas", "Niña Pastori", "tu-me-camelas", 0, 600, 0, 240, 0, ["flamenco", "rumba", "español"]),
    
    # Page 39
    (39, "Una rosa es una rosa", "Mecano", "una-rosa-es-una-rosa", 0, 600, 410, 900, 0, ["pop", "rumba", "español", "90s"]),
    (39, "Me cuesta tanto olvidarte", "Mecano", "me-cuesta-tanto-olvidarte", 0, 600, 0, 410, 0, ["pop", "balada", "español", "80s"]),
    
    # Page 40
    (40, "Verde que te quiero verde", "Manzanita", "verde-que-te-quiero-verde", 0, 290, 0, 900, 0, ["rumba", "flamenco", "español"]),
    (40, "No me lo creo", "Manzanita", "no-me-lo-creo", 290, 600, 0, 900, 0, ["rumba", "flamenco", "español"]),
    
    # Page 41
    (41, "Popurrí Raya Real", "Raya Real", "popurri-raya-real", 0, 600, 0, 900, 0, ["rumba", "popurrí", "fiesta"]),
    
    # Page 42
    (42, "El muerto vivo", "Peret", "el-muerto-vivo", 0, 290, 0, 900, 0, ["rumba catalana", "español", "clásico"]),
    (42, "Déjate querer", "José Manuel Soto", "dejate-querer", 290, 600, 480, 900, 0, ["rumba", "flamenco", "español"]),
    (42, "Te estoy amando locamente", "Las Grecas", "te-estoy-amando-locamente", 290, 600, 230, 480, 0, ["flamenco rock", "rumba", "70s"]),
    (42, "La bombona de butano", "Popular", "la-bombona-de-butano", 290, 600, 0, 230, 0, ["rumba", "popular", "humor"]),
    
    # Page 43
    (43, "Ni más ni menos", "Los Chunguitos", "ni-mas-ni-menos", 0, 290, 450, 900, 0, ["rumba", "vallecas", "70s"]),
    (43, "El Porompompero", "Manolo Escobar", "el-porompompero", 0, 290, 0, 450, 0, ["copla", "rumba", "español"]),
    (43, "Dame veneno", "Los Chunguitos", "dame-veneno", 290, 600, 400, 900, 0, ["rumba", "flamenco", "70s"]),
    (43, "Amante-enamorado", "Popurrí", "amante-enamorado", 290, 600, 0, 400, 0, ["rumba", "popurrí", "flamenco"]),
    
    # Page 44
    (44, "Popurrí de rumbas", "Popular", "popurri-de-rumbas", 0, 600, 0, 900, 0, ["rumba", "popurrí", "fiesta"]),
    
    # Page 46
    (46, "Donde habita el olvido", "Joaquín Sabina", "donde-habita-el-olvido", 0, 600, 0, 900, 0, ["canción de autor", "acústico", "español"]),
    
    # Page 47
    (47, "Así estoy yo sin ti", "Joaquín Sabina", "asi-estoy-yo-sin-ti", 0, 600, 0, 900, 0, ["canción de autor", "rock", "español"]),
    
    # Page 48
    (48, "Y nos dieron las diez", "Joaquín Sabina", "y-nos-dieron-las-diez", 0, 600, 0, 900, 0, ["ranchera", "canción de autor", "clásico"]),
    
    # Page 49
    (49, "Ruido", "Joaquín Sabina", "ruido", 0, 600, 0, 900, 0, ["canción de autor", "balada", "español"]),
    
    # Page 50
    (50, "A quién le importa", "Alaska y Dinarama", "a-quien-le-importa", 0, 600, 0, 430, 0, ["pop", "synthpop", "80s", "español"]),
    
    # Page 51
    (51, "La casa por el tejado", "Fito & Fitipaldis", "la-casa-por-el-tejado", 0, 600, 0, 900, 0, ["rock", "español", "2000s"]),
    
    # Page 53
    (53, "El lado oscuro", "Jarabe de Palo", "el-lado-oscuro", 0, 290, 460, 900, 0, ["rock latino", "pop rock", "90s"]),
    
    # Page 54
    (54, "Depende", "Jarabe de Palo", "depende", 0, 290, 0, 900, 0, ["pop rock", "rock latino", "90s"]),
    (54, "Eso que tú me das", "Jarabe de Palo", "eso-que-tu-me-das", 290, 600, 0, 900, 0, ["pop rock", "español", "acústico"]),
    
    # Page 55
    (55, "De ellos aprendí", "David Rees", "de-ellos-aprendi", 0, 600, 0, 900, 0, ["pop", "acústico", "español"]),
    
    # Page 56
    (56, "Calma", "Pedro Capó", "calma", 0, 290, 0, 900, 0, ["reggae pop", "latino", "verano"]),
    (56, "Vida de rico", "Camilo", "vida-de-rico", 290, 600, 0, 900, 0, ["cumbia pop", "latino", "alegre"]),
    
    # Page 57
    (57, "La mitad", "Christian Nodal", "la-mitad", 0, 600, 0, 900, 0, ["regional mexicano", "balada", "latino"]),
    
    # Page 58
    (58, "El día que yo me muera", "Rozalén", "el-dia-que-yo-me-muera", 0, 600, 0, 900, 2, ["canción de autor", "folklore", "español"]),
    
    # Page 59
    (59, "Despacito", "Luis Fonsi", "despacito", 0, 600, 0, 900, 0, ["reggaeton", "pop latino", "éxito"]),
    
    # Page 60
    (60, "La bachata", "Manuel Turizo", "la-bachata", 0, 290, 0, 900, 0, ["bachata", "pop latino", "2020s"]),
    (60, "Mariposas", "Aitana & Sangiovanni", "mariposas", 290, 600, 0, 900, 0, ["pop", "dance", "español"]),
    
    # Page 61
    (61, "Mon amour", "Zzoilo & Aitana", "mon-amour", 0, 600, 0, 900, 0, ["pop", "indie pop", "español"]),
    
    # Page 62
    (62, "Loviu", "Sandra Valero", "loviu", 0, 290, 0, 900, 0, ["pop", "eurovisión junior", "alegre"]),
    (62, "Todos los besos", "Los Rebujitos", "todos-los-besos", 290, 600, 0, 900, 0, ["pop flamenco", "balada", "español"]),
    
    # Page 63
    (63, "A contracorriente", "David Bisbal & Álvaro Soler", "a-contracorriente", 0, 600, 0, 900, 1, ["pop latino", "alegre", "español"]),
    
    # Page 64
    (64, "Levantaremos al sol", "Álvaro de Luna", "levantaremos-al-sol", 0, 290, 0, 900, 4, ["pop rock", "español", "2020s"]),
    (64, "Sofía", "Álvaro Soler", "sofia", 290, 600, 0, 900, 2, ["pop latino", "alegre", "verano"]),
    
    # Page 65-66
    ([65, 66], "Volar", "El Kanka", "volar", 0, 600, 0, 900, 0, ["canción de autor", "rumba", "vals"]),
    
    # Page 67
    (67, "Querría", "El Kanka", "querria", 0, 600, 0, 900, 0, ["canción de autor", "rumba", "poético"]),
    
    # Page 68-69
    ([68, 69], "Color esperanza", "Diego Torres", "color-esperanza", 0, 600, 0, 900, 0, ["pop latino", "himno", "esperanza"]),
    
    # Page 70
    (70, "Yolanda", "Pablo Milanés", "yolanda", 0, 290, 380, 900, 0, ["nueva trova", "balada", "cubano"]),
    (70, "No quiero estar sin ti", "Rosana", "no-quiero-estar-sin-ti", 290, 600, 0, 900, 0, ["pop", "balada", "español"]),
    
    # Page 71
    (71, "Dame una sonrisa", "Sandra Cires", "dame-una-sonrisa", 0, 290, 0, 900, 0, ["pop", "latino", "positivo"]),
    (71, "Yo contigo, tú conmigo", "Morat & Álvaro Soler", "yo-contigo-tu-conmigo", 290, 600, 0, 900, 0, ["pop", "latino", "soundtrack"]),
    
    # Page 72
    (72, "Un año de amor", "Luz Casal", "un-ano-de-amor", 0, 290, 440, 900, 0, ["balada", "almodóvar", "español"]),
    (72, "Piensa en mí", "Luz Casal", "piensa-en-mi", 0, 290, 0, 440, 0, ["bolero", "almodóvar", "español"]),
    (72, "Colgando en tus manos", "Carlos Baute & Marta Sánchez", "colgando-en-tus-manos", 290, 600, 0, 900, 0, ["pop latino", "dueto", "éxito"]),
    
    # Page 73
    (73, "Me equivocaría otra vez", "Fito & Fitipaldis", "me-equivocaria-otra-vez", 0, 290, 0, 900, 0, ["rock", "español", "2000s"]),
    (73, "Escuela de calor", "Radio Futura", "escuela-de-calor", 290, 600, 0, 900, 0, ["pop rock", "movida madrileña", "80s"]),
    
    # Page 74
    (74, "Toda una vida", "Antonio Machín", "toda-una-vida", 0, 290, 500, 900, 0, ["bolero", "clásico", "romántico"]),
    (74, "Paseando por la mezquita", "Medina Azahara", "paseando-por-la-mezquita", 0, 290, 240, 500, 0, ["rock andaluz", "español", "70s"]),
    (74, "Tu frialdad", "Triana", "tu-frialdad", 0, 290, 0, 240, 0, ["rock andaluz", "flamenco rock", "clásico"]),
    (74, "Abre la puerta", "Triana", "abre-la-puerta", 290, 600, 0, 900, 0, ["rock andaluz", "psicodelia", "clásico"]),
    
    # Page 75
    (75, "16 añitos", "Dani Martín", "16-anitos", 0, 290, 0, 900, 0, ["pop rock", "español", "2010s"]),
    (75, "Un sorbito de champán", "Los Brincos", "un-sorbito-de-champan", 290, 600, 420, 900, 0, ["pop", "60s", "español"]),
    (75, "Soy rebelde", "Jeanette", "soy-rebelde", 290, 600, 0, 420, 0, ["balada", "pop", "70s", "clásico"]),
    
    # Page 76
    (76, "Solo si es contigo", "Bombai & Bebe", "solo-si-es-contigo", 0, 290, 0, 900, 0, ["pop", "ukelele", "español"]),
    (76, "Nada valgo sin tu amor", "Juanes", "nada-valgo-sin-tu-amor", 290, 600, 0, 900, 0, ["pop rock", "latino", "2000s"]),
    
    # Page 77
    (77, "Nos sobran los motivos", "Joaquín Sabina", "nos-sobran-los-motivos", 0, 290, 0, 900, 0, ["canción de autor", "acústico", "español"]),
    (77, "Calle melancolía", "Joaquín Sabina", "calle-melancolia", 290, 600, 0, 900, 0, ["canción de autor", "clásico", "español"]),
    
    # Page 78
    (78, "La bien pagá", "Miguel de Molina", "la-bien-paga", 0, 290, 0, 900, 0, ["copla", "clásico", "español"]),
    (78, "Rocío", "Rocío Jurado", "rocio", 290, 600, 0, 900, 0, ["copla", "andaluz", "clásico"]),
    
    # Page 79
    (79, "Fandangos de Huelva", "Popular", "fandangos-de-huelva", 0, 600, 0, 900, 0, ["flamenco", "fandangos", "andaluz"]),
    
    # Page 80
    (80, "Malagueña del chato", "El Chato de la Isla", "malaguena-del-chato", 0, 290, 440, 900, 0, ["flamenco", "malagueña", "copla"]),
    (80, "Malagueñas populares", "Popular", "malaguenas-populares", 0, 290, 0, 440, 0, ["flamenco", "popular", "andaluz"]),
    (80, "Algo se muere en el alma", "Cantores de Híspalis", "algo-se-muere-en-el-alma", 290, 600, 470, 900, 0, ["sevillana", "clásico", "popular"]),
    (80, "La puerta de Toledo", "Chiquetete", "la-puerta-de-toledo", 290, 600, 0, 470, 0, ["flamenco", "canción", "español"]),
    
    # Page 82
    (82, "Quiéreme", "El Barrio", "quiereme", 290, 600, 0, 900, 0, ["flamenco pop", "español", "2000s"]),
    
    # Page 83
    (83, "Cuento para mi niño", "Lole y Manuel", "cuento-para-mi-nino", 0, 290, 400, 900, 0, ["flamenco", "nuevo flamenco", "poético"]),
    (83, "Lejos de ti", "Cantoral", "lejos-de-ti", 0, 290, 240, 400, 0, ["folklore", "latino", "acústico"]),
    (83, "Tu recuerdo", "Cantoral", "tu-recuerdo-cantoral", 0, 290, 120, 240, 0, ["folklore", "latino", "acústico"]),
    (83, "Noche de invierno", "Popular", "noche-de-invierno", 0, 290, 0, 120, 0, ["folklore", "latino", "popular"]),
    (83, "Tu recuerdo (Ricky Martin)", "Ricky Martin", "tu-recuerdo-ricky-martin", 290, 600, 0, 900, 0, ["pop latino", "balada", "acústico"]),
    
    # Page 84
    (84, "Un par de palabras", "Hombres G", "un-par-de-palabras", 0, 290, 0, 900, 0, ["pop rock", "80s", "español"]),
    (84, "Te quiero", "Hombres G", "te-quiero-hombres-g", 290, 600, 0, 900, 0, ["pop rock", "80s", "balada"]),
    
    # Page 85
    (85, "Solo pienso en ti", "Víctor Manuel", "solo-pienso-en-ti", 0, 290, 0, 900, 0, ["canción de autor", "balada", "clásico"]),
    (85, "España camisa blanca", "Ana Belén", "espana-camisa-blanca", 290, 600, 0, 900, 0, ["canción de autor", "himno", "español"]),
    
    # Page 86
    (86, "El hombre del piano", "Ana Belén", "el-hombre-del-piano", 0, 290, 0, 900, 0, ["balada", "clásico", "español"]),
    (86, "Esos ojos negros", "Duncan Dhu", "esos-ojos-negros", 290, 600, 0, 900, 0, ["pop rock", "acústico", "80s"]),
    
    # Page 87
    (87, "El límite", "La Frontera", "el-limite", 0, 290, 0, 900, 0, ["rock", "español", "80s"]),
    (87, "Lobo-hombre en París", "La Unión", "lobo-hombre-en-paris", 290, 600, 0, 900, 0, ["synthpop", "new wave", "80s", "español"]),
    
    # Page 88
    (88, "Ñapa es", "Ska-P", "napa-es", 290, 600, 0, 900, 0, ["ska punk", "español", "90s"]),
    
    # Page 89
    (89, "Bajo la luz de la luna", "Los Rebeldes", "bajo-la-luz-de-la-luna", 0, 290, 380, 900, 0, ["rockabilly", "balada", "español"]),
    (89, "Corazón salvaje", "Marcela Morelo", "corazon-salvaje", 290, 600, 0, 900, 0, ["pop latino", "charango", "90s"]),
    
    # Page 90
    (90, "Derroche", "Ana Belén", "derroche", 0, 290, 0, 900, 0, ["merengue lento", "balada", "latino"]),
    (90, "Mi tierra", "Gloria Estefan", "mi-tierra", 290, 600, 0, 900, 0, ["son cubano", "pop latino", "90s"]),
    
    # Page 91
    (91, "Los amantes", "Mecano", "los-amantes", 0, 290, 0, 900, 0, ["pop", "80s", "español"]),
    (91, "Mujer contra mujer", "Mecano", "mujer-contra-mujer", 290, 600, 0, 900, 0, ["pop", "balada", "80s"]),
    
    # Page 92
    (92, "El cine", "Mecano", "el-cine", 0, 290, 0, 900, 0, ["pop", "80s", "español"]),
    (92, "La fuerza del destino", "Mecano", "la-fuerza-del-destino", 290, 600, 0, 900, 0, ["pop", "balada", "80s"]),
    
    # Page 93
    (93, "Un año más", "Mecano", "un-ano-mas", 0, 290, 0, 900, 0, ["pop", "nochevieja", "clásico"]),
    (93, "Naturaleza muerta", "Mecano", "naturaleza-muerta", 290, 600, 0, 900, 0, ["pop", "balada", "90s"]),
    
    # Page 94
    (94, "Cruz de navajas", "Mecano", "cruz-de-navajas", 0, 290, 0, 900, 0, ["pop", "80s", "español"]),
    (94, "Hijo de la luna", "Mecano", "hijo-de-la-luna", 290, 600, 0, 900, 0, ["pop", "balada", "clásico"]),
    
    # Page 95
    (95, "Sabor de amor", "Danza Invisible", "sabor-de-amor", 0, 290, 0, 900, 0, ["pop rock", "80s", "español"]),
    (95, "Es por ti", "Cómplices", "es-por-ti", 290, 600, 0, 900, 0, ["pop", "balada", "90s", "español"]),
    
    # Page 96
    (96, "Dime", "Lole y Manuel", "dime-lole-y-manuel", 290, 600, 0, 900, 2, ["flamenco", "nuevo flamenco", "poético"]),
    
    # Page 97
    (97, "Bongo Bong / Je ne t'aime plus", "Manu Chao", "bongo-bong", 0, 600, 0, 900, 0, ["reggae", "mestizaje", "internacional"]),
    
    # Page 98
    (98, "Me gustas tú", "Manu Chao", "me-gustas-tu", 0, 290, 0, 900, 0, ["reggae pop", "mestizaje", "latino"]),
    (98, "Clandestino", "Manu Chao", "clandestino", 290, 600, 0, 900, 0, ["reggae", "canción protesta", "clásico"]),
    
    # Page 99
    (99, "Desaparecido", "Manu Chao", "desaparecido", 0, 290, 0, 900, 0, ["rumba", "reggae", "latino"]),
    (99, "Mentira", "Manu Chao", "mentira", 290, 600, 0, 900, 2, ["mestizaje", "bolero", "latino"]),
    
    # Page 100
    (100, "Cantares", "Joan Manuel Serrat", "cantares", 0, 290, 0, 900, 0, ["canción de autor", "machado", "clásico"]),
    (100, "La saeta", "Joan Manuel Serrat", "la-saeta", 290, 600, 0, 900, 0, ["saeta", "canción de autor", "clásico"]),
    
    # Page 101
    (101, "Hoy", "Gloria Estefan", "hoy-gloria-estefan", 0, 600, 0, 900, 0, ["pop latino", "andino", "balada"])
]

print(f"Total defined song specs: {len(SONG_DEFINITIONS)}")
