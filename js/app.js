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
    "id": "19-dias-y-500-noches",
    "file": "canciones/19-dias-y-500-noches.md",
    "content": "---\ntitle: \"19 Días y 500 Noches\"\nartist: \"Joaquín Sabina\"\nkey: \"G\"\ncapo: 0\ntempo: 120\ntags: [\"cantautor\", \"rumba\", \"español\", \"clásico\"]\n---\n\n## Intro\n[G] [D] [G] [D]\n\n## Verso 1\n[G] Lo nuestro duró\nLo que duran dos peces de [D] hielo\nEn un güisqui on the rocks\nEn vez de respirar nos pusimos al [G] cuello\nLa soga del amor\n\n[G] Así que se fue\nCon su carita de no haber roto un [D] plato\nY su maleta de piel\nY yo me quedé más solo que la [G] una\nBuscando un papel\n\n## Coro\nY re[C]gresé a la maldición del cajón desas[G]tre\nY a la ruina de la desven[D]tura\nPero este adiós no maquilla un hasta [G] luego\nEste adiós no tiene un por qué [C]\nTanto la quería que para olvi[G]darla\nTardé diecinueve [D] días\nY quinientas [G] noches\n\n## Verso 2\n[G] Dijo hola y adiós\nY el portazo sonó como un [D] trueno\nEn mitad del salón\nNo hubo despedida, ni llanto, ni [G] besos\nNi perdón de Dios\n\n## Coro\nTanto la que[C]ría que para olvi[G]darla\nTardé diecinueve [D] días\nY quinientas [G] noches\nDiecinueve [D] días\nY quinientas [G] noches\n",
    "title": "19 Días y 500 Noches",
    "artist": "Joaquín Sabina",
    "key": "G",
    "capo": 0,
    "tempo": 120,
    "tags": [
      "cantautor",
      "rumba",
      "español",
      "clásico"
    ]
  },
  {
    "id": "anos-80",
    "file": "canciones/anos-80.md",
    "content": "---\ntitle: \"Años 80\"\nartist: \"Los Piratas\"\nkey: \"G\"\ncapo: 0\ntempo: 126\ntags: [\"rock\", \"indie\", \"español\", \"2000s\", \"himno\"]\n---\n\n## Intro\n[G] [D] [Em] [C]\n[G] [D] [Em] [C]\n\n## Verso 1\n[G] No te echo de menos en los [D] años ochenta\n[Em] Ni te busco en las esquinas de los [C] bares\n[G] Sé que estás bien, que te van [D] bien las cosas\n[Em] Que encontraste a alguien que te da lo que [C] soñabas\n\n[G] Yo me quedé con mis discos de [D] vinilo\n[Em] Y con las canciones que te ha[C]cían llorar\n[G] Pero no te preocupes por [D] mí\n[Em] Aquí todo sigue [C] igual\n\n## Coro\n[G] Y no te preocupes por [D] mí\nQue ya he aprendido a con[Em]tar\nLos minutos que faltan para [C] verte marchar\n[G] No te preocupes por [D] mí\nQue no me va a pasar [Em] nada\nSolo quiero una noche más [C] en tu cama... [G] [D] [Em] [C]\n\n## Verso 2\n[G] Pasan los días, los meses, los [D] años\n[Em] Y los recuerdos se vuelven de [C] plástico\n[G] Pero hay momentos en que suenas tan [D] claro\n[Em] Como si estuvieras aquí al [C] lado\n\n## Coro\n[G] Y no te preocupes por [D] mí\nQue ya he aprendido a con[Em]tar\nLos minutos que faltan para [C] verte marchar\n[G] No te preocupes por [D] mí\nQue no me va a pasar [Em] nada\nSolo quiero una noche más [C] en tu cama... [G]\n",
    "title": "Años 80",
    "artist": "Los Piratas",
    "key": "G",
    "capo": 0,
    "tempo": 126,
    "tags": [
      "rock",
      "indie",
      "español",
      "2000s",
      "himno"
    ]
  },
  {
    "id": "bamboleo",
    "file": "canciones/bamboleo.md",
    "content": "---\ntitle: \"Bamboleo\"\nartist: \"Gipsy Kings\"\nkey: \"Em\"\ncapo: 0\ntempo: 125\ntags: [\"rumba\", \"flamenco\", \"fiesta\", \"clásico\"]\n---\n\n## Intro\n[Em] [B7] [Em] [B7]\n[Em] [B7] [Em] [B7]\n\n## Verso 1\n[Em] Este amor llega así, esta ma[B7]nera\nNo tiene la culpa, caba[Em]llo de sabana vieja\nPorque tiene por la mañana, no me digas que [B7] no\nTú me quieres, tú me amas, corazón de mi [Em] amor\n\n## Coro\n[Em] Bamboleo, bambo[Am]lea\nPorque mi vida yo la pre[D]fiero vivir a[G]sí [B7]\n[Em] Bamboleo, bambo[Am]lea\nPorque mi vida yo la pre[D]fiero vivir a[G]sí [B7]\n\n## Verso 2\n[Em] No te mires en el espejo, que te vas a con[B7]fundir\nEl amor que yo te tengo nadie te lo va a [Em] dar\nBaila que baila la rumba, rumba de cora[B7]zón\nMueve la cintura, morena, al compás de mi [Em] son\n\n## Coro\n[Em] Bamboleo, bambo[Am]lea\nPorque mi vida yo la pre[D]fiero vivir a[G]sí [B7]\n[Em] Bamboleo, bambo[Am]lea\nPorque mi vida yo la pre[D]fiero vivir a[G]sí [B7] [Em]\n",
    "title": "Bamboleo",
    "artist": "Gipsy Kings",
    "key": "Em",
    "capo": 0,
    "tempo": 125,
    "tags": [
      "rumba",
      "flamenco",
      "fiesta",
      "clásico"
    ]
  },
  {
    "id": "caminando-por-la-vida",
    "file": "canciones/caminando-por-la-vida.md",
    "content": "---\ntitle: \"Caminando por la vida\"\nartist: \"Melendi\"\nkey: \"Am\"\ncapo: 2\ntempo: 110\ntags: [\"rumba\", \"pop\", \"español\", \"2000s\", \"fiesta\"]\n---\n\n// Tono original con Cejilla en el 2º traste (Am - G - F - E)\n\n## Intro\n[Am] [G] [F] [E]\n[Am] [G] [F] [E]\n\n## Verso 1\n[Am] Voy caminando por la vida, sin pausa pero sin [G] prisa\nProcurando no pisar a nadie y con una gran son[F]risa\nQue me acompaña a todas partes, que me viste de fies[E]tero\nPorque en los bolsillos no tengo dinero pero soy un caba[Am]llero\n\n[Am] Y me paro en cada esquina a tomarme un cafelito [G]\nA charlar con los amigos y a contar algún chistecito [F]\nQue la vida son dos días y uno ya se nos ha pasa'o [E]\nY el que no aproveche el tiempo se va a quedar amarga'o\n\n## Coro\n[Am] Y yo voy caminando por la vida, alegre y diver[G]tido\nCon un pantalón vaquero y un zapato desco[F]sido\nBuscando una muchacha que me quiera de ver[E]dad\nY que no le importe un pimiento mi precaria econo[Am]mía [G] [F] [E]\n\n## Verso 2\n[Am] No tengo coche de lujo ni casa en la playa [G]\nNi ropa de marca que me tape las canas [F]\nPero tengo una guitarra que me alegra el corazón [E]\nY un puñado de canciones que me llenan de ilu[Am]sión\n\n## Coro\n[Am] Y yo voy caminando por la vida, alegre y diver[G]tido\nCon un pantalón vaquero y un zapato desco[F]sido\nBuscando una muchacha que me quiera de ver[E]dad\nY que no le importe un pimiento mi precaria econo[Am]mía\n",
    "title": "Caminando por la vida",
    "artist": "Melendi",
    "key": "Am",
    "capo": 2,
    "tempo": 110,
    "tags": [
      "rumba",
      "pop",
      "español",
      "2000s",
      "fiesta"
    ]
  },
  {
    "id": "carolina",
    "file": "canciones/carolina.md",
    "content": "---\ntitle: \"Carolina\"\nartist: \"M-Clan\"\nkey: \"G\"\ncapo: 0\ntempo: 128\ntags: [\"rock\", \"español\", \"2000s\", \"clásico\", \"fiesta\"]\n---\n\n## Intro\n[G] [C] [G] [D]\n[G] [C] [G] [D]\n\n## Verso 1\n[G] La reina de las medicinas\nQue no [C] curan el dolor\n[G] Niña que juega a ser mujer\nY se [D] viste de alcohol\n\n[G] Te sientas en la barra\nY me [C] miras de reojo\n[G] Con esa cara de inocente\nY ese [D] brillo en los ojos\n\n## Coro\n[G] Carolina, [C] trátame bien\nNo te [G] rías de mí, no me arranques la [D] piel\n[G] Carolina, [C] trátame bien\nQue no [G] tengo el valor de volverte a [D] perder\nCarolina... [G] [C] [G] [D]\n\n## Verso 2\n[G] Dices que tienes dieciséis\nY que ya [C] sabes lo que hay\n[G] Que la noche no te asusta\nY que no [D] quieres parar\n\n[G] Me pides otra copa\nY me en[C]ciendes un cigarro\n[G] Y yo me voy hundiendo poco a poco\n[D] En este barro\n\n## Coro\n[G] Carolina, [C] trátame bien\nNo te [G] rías de mí, no me arranques la [D] piel\n[G] Carolina, [C] trátame bien\nQue no [G] tengo el valor de volverte a [D] perder\nCarolina... [G]\n",
    "title": "Carolina",
    "artist": "M-Clan",
    "key": "G",
    "capo": 0,
    "tempo": 128,
    "tags": [
      "rock",
      "español",
      "2000s",
      "clásico",
      "fiesta"
    ]
  },
  {
    "id": "chiquilla",
    "file": "canciones/chiquilla.md",
    "content": "---\ntitle: \"Chiquilla\"\nartist: \"Seguridad Social\"\nkey: \"Am\"\ncapo: 0\ntempo: 145\ntags: [\"rock\", \"rumba\", \"español\", \"90s\", \"fiesta\"]\n---\n\n## Intro\n[Am] [Dm] [E7] [Am]\n[Am] [Dm] [E7] [Am]\n\n## Verso 1\n[Am] Por la noche cuando me acuesto\nPienso en ti y en tu recuerdo\n[Dm] Y en mis sueños te apareces\n[E7] Como un ángel del cielo\n\n[Am] Miro al techo de mi cuarto\nY no dejo de pensar\n[Dm] Que tus besos son el fuego\n[E7] Que me quema sin piedad\n\n## Coro\n[Am] ¡Ay, chiquilla!\nQue me has hecho [Dm] perder el sentido\n[E7] Que me tienes como loco per[Am]dido\n[Am] ¡Ay, chiquilla!\nCon tus ojos de [Dm] terciopelo\n[E7] Me has robado la calma y el [Am] sueño\n[Am] ¡Ay, chiquilla! [Dm] [E7] [Am]\n\n## Verso 2\n[Am] Cuando sales por la tarde\nCaminando por el barrio\n[Dm] Todo el mundo se da vuelta\n[E7] Para verte pasar\n\n[Am] Y yo sigo tus pisadas\nComo un perro abandonado\n[Dm] Esperando que me mires\n[E7] Y me vuelvas a besar\n\n## Coro\n[Am] ¡Ay, chiquilla!\nQue me has hecho [Dm] perder el sentido\n[E7] Que me tienes como loco per[Am]dido\n[Am] ¡Ay, chiquilla!\nCon tus ojos de [Dm] terciopelo\n[E7] Me has robado la calma y el [Am] sueño\n[Am] ¡Ay, chiquilla!\n",
    "title": "Chiquilla",
    "artist": "Seguridad Social",
    "key": "Am",
    "capo": 0,
    "tempo": 145,
    "tags": [
      "rock",
      "rumba",
      "español",
      "90s",
      "fiesta"
    ]
  },
  {
    "id": "como-camaron",
    "file": "canciones/como-camaron.md",
    "content": "---\ntitle: \"Como Camarón\"\nartist: \"Estopa\"\nkey: \"Am\"\ncapo: 0\ntempo: 135\ntags: [\"rumba\", \"rock\", \"español\", \"clásico\"]\n---\n\n## Intro\n[Am] [Dm] [G] [C] [E7]\n[Am] [Dm] [G] [C] [E7]\n\n## Verso 1\n[Am] Cada vez que te miro se me para el cora[Dm]zón\nMe pongo rojo como un to[G]mate\nSe me corta la voz y me entra la tiri[C]tona [E7]\n[Am] Y es que tú tienes algo que me quita el sen[Dm]tío\nAlgo que me vuelve loco, que me [G] deja perdío\nY no sé cómo de[C]cirte que me muero por [E7] ti\n\n## Coro\n[Am] Y yo no sé qué me pasa que cuando me [Dm] miras\nMe pongo a tem[G]blar\nY se me llena la boca de saliva y de [C] ganas de cantar [E7]\n[Am] Y me pongo como Cama[Dm]rón\nCantándole a la luna en el bal[G]cón\nDiciendo cosas bonitas que me [C] salen del cora[E7]zón\nComo Cama[Am]rón... [Dm] [G] [C] [E7]\n\n## Verso 2\n[Am] Salgo a la calle de noche a buscar tu ca[Dm]lor\nPensando en tus ojos verdes, tu ca[G]bello castaño\nY ese andar tuyo tan chi[C]lo [E7]\n[Am] No me hacen falta papeles ni testigos de[Dm]lante\nPa' jurarte que te quiero desde el [G] primer instante\nHasta el último día que me [C] quede de aliento [E7]\n\n## Coro\n[Am] Y yo no sé qué me pasa que cuando me [Dm] miras\nMe pongo a tem[G]blar\nY se me llena la boca de saliva y de [C] ganas de cantar [E7]\n[Am] Y me pongo como Cama[Dm]rón\nCantándole a la luna en el bal[G]cón\nDiciendo cosas bonitas que me [C] salen del cora[E7]zón\nComo Cama[Am]rón\n",
    "title": "Como Camarón",
    "artist": "Estopa",
    "key": "Am",
    "capo": 0,
    "tempo": 135,
    "tags": [
      "rumba",
      "rock",
      "español",
      "clásico"
    ]
  },
  {
    "id": "copacabana",
    "file": "canciones/copacabana.md",
    "content": "---\ntitle: \"Copacabana\"\nartist: \"Izal\"\nkey: \"Am\"\ncapo: 0\ntempo: 128\ntags: [\"indie\", \"rock\", \"español\", \"2010s\"]\n---\n\n## Intro\n[Am] [F] [C] [G]\n[Am] [F] [C] [G]\n\n## Verso 1\n[Am] Bailemos el vals de los he[F]ridos\nEn la pista central de Copa[C]cabana\nQue no quede ni un hueso en su [G] sitio\nCuando empiece a sonar la cam[Am]pana\n\n[Am] Que las luces de neón nos con[F]funden\nY el sudor se nos mezcle en la [C] piel\nYa vendrá la mañana con [G] dudas\nEsta noche sabemos qué ha[Am]cer\n\n## Coro\n[Am] Y gritar que esta [F] vez\nNo nos van a que[C]brar\nQue podemos rom[G]per\nEl cristal de la sole[Am]dad\n\n[Am] Y bailar hasta el [F] fin\nCon los pies en el [C] mar\nEn el club más her[G]moso\nQue se pueda so[Am]ñar\n\n## Verso 2\n[Am] Las sirenas aúllan a lo [F] lejos\nPero aquí no nos pueden to[C]car\nSomos náufragos llenos de [G] fiesta\nQue aprendieron de pronto a vo[Am]lar\n\n## Coro\n[Am] Y gritar que esta [F] vez\nNo nos van a que[C]brar\nQue podemos rom[G]per\nEl cristal de la sole[Am]dad\n\n[Am] Y bailar hasta el [F] fin\nCon los pies en el [C] mar\nEn el club más her[G]moso\nQue se pueda so[Am]ñar... [F] [C] [G] [Am]\n",
    "title": "Copacabana",
    "artist": "Izal",
    "key": "Am",
    "capo": 0,
    "tempo": 128,
    "tags": [
      "indie",
      "rock",
      "español",
      "2010s"
    ]
  },
  {
    "id": "copenhague",
    "file": "canciones/copenhague.md",
    "content": "---\ntitle: \"Copenhague\"\nartist: \"Vetusta Morla\"\nkey: \"D\"\ncapo: 0\ntempo: 96\ntags: [\"indie\", \"pop\", \"español\", \"acústico\"]\n---\n\n## Intro\n[D] [G] [Bm] [A]\n[D] [G] [Bm] [A]\n\n## Verso 1\n[D] Llueve en Copen[G]hague\nY el frío se cuela por las rendijas [Bm]\nDe una puerta que dejé en[A]treabierta\nPor si acaso vol[D]vías\n\n[D] Las bicicletas ruedan en si[G]lencio\nBajo un cielo gris de plu[Bm]mo\nY yo que no encuentro el ca[A]mino\nNi el aire en el que me es[D]fumo\n\n## Coro\n[G] Y dejarse llevar suena de[D]masiado bien\n[Bm] Jugar al azar con las car[A]tas que nos den\n[G] Es el momento de asaltar las esta[D]ciones\n[Bm] Y quemar los mapas de las can[A]ciones\n\n## Verso 2\n[D] Me siento en la barra de un [G] bar\nDonde nadie pronuncia mi [Bm] nombre\nMiro hacia afuera pasar\nA fantasmas vestidos de [A] hombre\n\n[D] Pero hay una chispa en tus [G] ojos\nQue viaja conmigo en el [Bm] tren\nY aunque la nieve caiga por [A] kilos\nSé que todo saldrá [D] bien\n\n## Coro\n[G] Y dejarse llevar suena de[D]masiado bien\n[Bm] Jugar al azar con las car[A]tas que nos den\n[G] Es el momento de asaltar las esta[D]ciones\n[Bm] Y quemar los mapas de las can[A]ciones... [D]\n",
    "title": "Copenhague",
    "artist": "Vetusta Morla",
    "key": "D",
    "capo": 0,
    "tempo": 96,
    "tags": [
      "indie",
      "pop",
      "español",
      "acústico"
    ]
  },
  {
    "id": "creep",
    "file": "canciones/creep.md",
    "content": "---\ntitle: \"Creep\"\nartist: \"Radiohead\"\nkey: \"G\"\ncapo: 0\ntempo: 92\ntags: [\"rock\", \"90s\", \"alternative\", \"himno\", \"fácil\"]\n---\n\n// La magia de esta canción está en el paso de C mayor a Cm menor: G - B - C - Cm\n\n## Intro\n[G] [B] [C] [Cm]\n[G] [B] [C] [Cm]\n\n## Verso 1\nWhen you were here be[G]fore\nCouldn't look you in the [B] eye\nYou're just like an [C] angel\nYour skin makes me [Cm] cry\n\n[G] You float like a feather\nIn a beautiful [B] world\nI wish I was [C] special\nYou're so fucking [Cm] special\n\n## Coro\nBut I'm a [G] creep\nI'm a [B] weirdo\nWhat the hell am I doing [C] here?\nI don't be[Cm]long here\n\n## Verso 2\n[G] I don't care if it hurts\nI wanna have con[B]trol\nI want a perfect [C] body\nI want a perfect [Cm] soul\n\n[G] I want you to notice\nWhen I'm not a[B]round\nYou're so fucking [C] special\nI wish I was [Cm] special\n\n## Coro\nBut I'm a [G] creep\nI'm a [B] weirdo\nWhat the hell am I doing [C] here?\nI don't be[Cm]long here\n\n## Puente\n[G] She's running out the [B] door...\n[C] She's running, she [Cm] runs, runs, runs...\n[G] Runs... [B]\n[C] Runs... [Cm]\n\n## Outro\nWhatever makes you [G] happy\nWhatever you [B] want\nYou're so fucking [C] special\nI wish I was [Cm] special\nBut I'm a [G] creep...\n",
    "title": "Creep",
    "artist": "Radiohead",
    "key": "G",
    "capo": 0,
    "tempo": 92,
    "tags": [
      "rock",
      "90s",
      "alternative",
      "himno",
      "fácil"
    ]
  },
  {
    "id": "de-musica-ligera",
    "file": "canciones/de-musica-ligera.md",
    "content": "---\ntitle: \"De Música Ligera\"\nartist: \"Soda Stereo\"\nkey: \"Bm\"\ncapo: 0\ntempo: 126\ntags: [\"rock\", \"latino\", \"argentino\", \"himno\", \"clásico\", \"fácil\"]\n---\n\n// Los 4 acordes más famosos del rock en español: Bm - G - D - A\n\n## Intro\n[Bm] [G] [D] [A]\n[Bm] [G] [D] [A]\n\n## Verso 1\n[Bm] Ella durmió [G] al calor de las [D] masas [A]\n[Bm] Y yo desperté [G] queriendo so[D]ñarla [A]\n[Bm] Algún tiempo a[G]trás pensé en escri[D]birle [A]\n[Bm] Que nunca sorteé [G] las trampas del a[D]mor [A]\n\n## Coro\n[Bm] De aquel a[G]mor\nDe [D] música li[A]gera\n[Bm] Nada nos li[G]bra\n[D] Nada más que[A]da\n\n## Verso 2\n[Bm] No le enviaré [G] cenizas de [D] rosas [A]\n[Bm] Ni pienso evitar [G] un roce se[D]creto [A]\n[Bm] De aquel a[G]mor\nDe [D] música li[A]gera\n[Bm] Nada nos li[G]bra\n[D] Nada más que[A]da\n\n## Solo\n[Bm] [G] [D] [A]\n[Bm] [G] [D] [A]\n\n## Coro\n[Bm] De aquel a[G]mor\nDe [D] música li[A]gera\n[Bm] Nada nos li[G]bra\n[D] Nada más que[A]da\n[Bm] Nada más que[G]da... [D] [A]\n[Bm] Nada más que[G]da... [D] [A] [Bm]\n",
    "title": "De Música Ligera",
    "artist": "Soda Stereo",
    "key": "Bm",
    "capo": 0,
    "tempo": 126,
    "tags": [
      "rock",
      "latino",
      "argentino",
      "himno",
      "clásico",
      "fácil"
    ]
  },
  {
    "id": "dejame",
    "file": "canciones/dejame.md",
    "content": "---\ntitle: \"Déjame\"\nartist: \"Los Secretos\"\nkey: \"G\"\ncapo: 0\ntempo: 130\ntags: [\"pop\", \"rock\", \"80s\", \"español\", \"clásico\"]\n---\n\n## Intro\n[G] [D] [C] [D]\n[G] [D] [C] [D]\n\n## Verso 1\n[G] Déjame, no juegues [D] más conmigo\nEsta [C] vez en serio te lo [D] digo\n[G] Tuviste una oportu[D]nidad y la de[C]jaste esca[D]par\n\n[G] Ya no hay nada que tú [D] puedas hacer\nPara [C] conseguir que vuelva [D] otra vez\n[G] Me hiciste mucho daño y [D] no quiero vol[C]ver a pa[D]sar\n\n## Coro\nPor lo que [C] ya pasé, por lo que [D] ya sufrí\nNo quiero [G] volver a verte [Em] sonreír\nPensando [C] que puedes jugar con[D]migo\nComo si [G] fuera un niño que no sabe a [Em] dónde va\n[C] Déjame, ya no hay [D] nada que ha[G]blar [D]\n\n## Verso 2\n[G] Vete ya, no te quedes [D] parada\nMiran[C]do como si no pasara [D] nada\n[G] Se acabaron las menti[D]ras, se aca[C]bó la fun[D]ción\n\n## Coro\nPor lo que [C] ya pasé, por lo que [D] ya sufrí\nNo quiero [G] volver a verte [Em] sonreír\nPensando [C] que puedes jugar con[D]migo\nComo si [G] fuera un niño que no sabe a [Em] dónde va\n[C] Déjame, ya no hay [D] nada que ha[G]blar\n",
    "title": "Déjame",
    "artist": "Los Secretos",
    "key": "G",
    "capo": 0,
    "tempo": 130,
    "tags": [
      "pop",
      "rock",
      "80s",
      "español",
      "clásico"
    ]
  },
  {
    "id": "sufre-mamon",
    "file": "canciones/sufre-mamon.md",
    "content": "---\ntitle: \"Devuélveme a mi chica (Sufre Mamón)\"\nartist: \"Hombres G\"\nkey: \"G\"\ncapo: 0\ntempo: 140\ntags: [\"pop\", \"rock\", \"80s\", \"español\", \"fiesta\"]\n---\n\n## Intro\n[G] [Em] [C] [D]\n[G] [Em] [C] [D]\n\n## Verso 1\n[G] Estoy llorando en mi habi[Em]tación\n[C] Todo se nubla a mi alre[D]dedor\n[G] Ella se fue con un chulo en un Ford [Em] Fiesta blanco\n[C] Y un jersey amarillo [D]\n\n## Verso 2\n[G] Por el parque les veo pa[Em]sear\n[C] Cogidos de la mano me hacen ra[D]biar\n[G] Voy a vengarme de ese maricón [Em]\n[C] Ha de pagar caro lo que me [D] hizo\n\n## Coro\n[G] Sufre mamón, [Em] devuélveme a mi chica\n[C] O te retorcerás entre polvos pi[D]ca-pica\n[G] Sufre mamón, [Em] devuélveme a mi chica\n[C] O te retorcerás entre polvos pi[D]ca-pica\n\n## Puente\n[C] Te quemaré [D] tu jersey\n[G] Y se lo daré de comer [Em] a los cerdos\n[C] Y te perseguiré hasta el fin [D] del mundo\n\n## Coro\n[G] Sufre mamón, [Em] devuélveme a mi chica\n[C] O te retorcerás entre polvos pi[D]ca-pica\n[G] Sufre mamón, [Em] devuélveme a mi chica\n[C] O te retorcerás entre polvos pi[D]ca-pica\n[G]\n",
    "title": "Devuélveme a mi chica (Sufre Mamón)",
    "artist": "Hombres G",
    "key": "G",
    "capo": 0,
    "tempo": 140,
    "tags": [
      "pop",
      "rock",
      "80s",
      "español",
      "fiesta"
    ]
  },
  {
    "id": "dont-look-back-in-anger",
    "file": "canciones/dont-look-back-in-anger.md",
    "content": "---\ntitle: \"Don't Look Back In Anger\"\nartist: \"Oasis\"\nkey: \"C\"\ncapo: 0\ntempo: 84\ntags: [\"rock\", \"90s\", \"britpop\", \"himno\"]\n---\n\n## Intro\n[C] [F] [C] [F]\n\n## Verso 1\n[C] Slip inside the [G] eye of your [Am] mind\nDon't you [E7] know you might [F] find\n[G] A better place to [C] play [Am] [G]\n[C] You said that [G] you'd never [Am] been\nAll the [E7] things that you've [F] seen\n[G] Will slowly fade a[C]way [Am] [G]\n\n## Pre-Coro\n[F] So I start a revo[Fm]lution from my [C] bed\n'Cause you [F] said the brains I [Fm] had went to my [C] head\n[F] Step outside, the [Fm] summertime's in [C] bloom\n[G] Stand up beside the fireplace\n[E7/G#] Take that look from off your face\n'Cause [Am] you ain't ever [G] gonna burn my [F] heart out [G]\n\n## Coro\n[C] And [G] so Sally can [Am] wait\nShe [E7] knows it's too [F] late\nAs we're [G] walking on [C] by [Am] [G]\nHer [C] soul [G] slides a[Am]way\n[E7] But don't look [F] back in anger\n[G] I heard you [C] say [G] [Am] [E7] [F] [G] [C]\n\n## Coro Final\n[C] And [G] so Sally can [Am] wait\nShe [E7] knows it's too [F] late\nAs we're [G] walking on [C] by [Am] [G]\nHer [C] soul [G] slides a[Am]way\n[E7] But don't look [F] back in anger\nDon't look [Fm] back in anger\nI heard you [C] say... [G] [Am] [E7] [F] [G] [C]\n",
    "title": "Don't Look Back In Anger",
    "artist": "Oasis",
    "key": "C",
    "capo": 0,
    "tempo": 84,
    "tags": [
      "rock",
      "90s",
      "britpop",
      "himno"
    ]
  },
  {
    "id": "el-sitio-de-mi-recreo",
    "file": "canciones/el-sitio-de-mi-recreo.md",
    "content": "---\ntitle: \"El Sitio de Mi Recreo\"\nartist: \"Antonio Vega\"\nkey: \"C\"\ncapo: 0\ntempo: 85\ntags: [\"pop\", \"español\", \"balada\", \"poesía\", \"acústico\"]\n---\n\n## Intro\n[C] [Em] [Am] [F] [G]\n[C] [Em] [Am] [F] [G]\n\n## Verso 1\n[C] Donde nacen los ca[Em]prichos de la brisa\n[Am] Donde el sol nunca se [F] cansa de alum[G]brar\n[C] Hay un lugar escon[Em]dido en mi memoria\n[Am] Donde guardo las ca[F]ricias que me [G] das\n\n[F] Silencio, brisa y cor[G]dura\nEspacio de [Em] luz y de cal[Am]ma\n[F] Donde se curan las [G] dudas\nQue a veces me [C] rompen el al[G]ma\n\n## Coro\n[C] En el sitio de mi re[Em]creo\nVuelan las [Am] horas que per[F]dí [G]\n[C] Y en las sombras de mi de[Em]seo\nVuelvo a sen[Am]tirme junto a [F] ti [G]\nJunto a [C] ti... [Em] [Am] [F] [G]\n\n## Verso 2\n[C] Viento suave que des[Em]pierta mis sentidos\n[Am] Manantial de agua que [F] calma mi sed [G]\n[C] Entre ramas de lau[Em]reles florecidos\n[Am] He dejado mi can[F]sancio y mi ve[G]jez\n\n## Coro\n[C] En el sitio de mi re[Em]creo\nVuelan las [Am] horas que per[F]dí [G]\n[C] Y en las sombras de mi de[Em]seo\nVuelvo a sen[Am]tirme junto a [F] ti [G]\nEn el sitio de mi re[C]creo\n",
    "title": "El Sitio de Mi Recreo",
    "artist": "Antonio Vega",
    "key": "C",
    "capo": 0,
    "tempo": 85,
    "tags": [
      "pop",
      "español",
      "balada",
      "poesía",
      "acústico"
    ]
  },
  {
    "id": "emborracharme",
    "file": "canciones/emborracharme.md",
    "content": "---\ntitle: \"Emborracharme\"\nartist: \"Lori Meyers\"\nkey: \"G\"\ncapo: 0\ntempo: 130\ntags: [\"indie\", \"pop\", \"español\", \"2010s\", \"fiesta\"]\n---\n\n## Intro\n[G] [Em] [C] [D]\n[G] [Em] [C] [D]\n\n## Verso 1\n[G] Quiero emborracharme y no pen[Em]sar en ti\n[C] Olvidarme de las cosas que me [D] hacían sufrir\n[G] Salir a la pista y volver a bai[Em]lar\n[C] Sin mirar atrás, sin mirar a[D]trás\n\n[G] Me dijeron que te vieron con al[Em]guien mejor\n[C] Paseando de la mano por el [D] malecón\n[G] Y a mí qué más me da, si yo ya es[Em]toy aquí\n[C] Con una copa en la mano y mi [D] gente junto a mí\n\n## Coro\n[G] Y quiero emborracharme y no pen[Em]sar en ti\n[C] Cantar a voz en grito hasta el [D] amanecer\n[G] Quiero emborracharme y no pen[Em]sar en ti\n[C] Y que me dé igual lo que vaya a [D] suceder\n\n## Verso 2\n[G] Se acabaron las llamadas a las [Em] tres de la mañana\n[C] Y buscar tus ojos en la madru[D]gada\n[G] Esta noche el mundo me perte[Em]nece a mí\n[C] Y no hay nada en la tierra que me [D] haga infeliz\n\n## Coro\n[G] Y quiero emborracharme y no pen[Em]sar en ti\n[C] Cantar a voz en grito hasta el [D] amanecer\n[G] Quiero emborracharme y no pen[Em]sar en ti\n[C] Y que me dé igual lo que vaya a [D] suceder... [G]\n",
    "title": "Emborracharme",
    "artist": "Lori Meyers",
    "key": "G",
    "capo": 0,
    "tempo": 130,
    "tags": [
      "indie",
      "pop",
      "español",
      "2010s",
      "fiesta"
    ]
  },
  {
    "id": "en-algun-lugar",
    "file": "canciones/en-algun-lugar.md",
    "content": "---\ntitle: \"En Algún Lugar\"\nartist: \"Duncan Dhu\"\nkey: \"G\"\ncapo: 0\ntempo: 130\ntags: [\"pop\", \"rock\", \"80s\", \"español\", \"acústico\"]\n---\n\n## Intro\n[G] [D] [C] [D]\n[G] [D] [C] [D]\n\n## Verso 1\n[G] En algún lugar de un [D] gran país\nOlvi[C]daron construir un hogar [D] donde no queme el sol\n[G] Y al nacer no hay que [D] sonreír\nNi se [C] llora al caer, las manos no [D] tienen dolor\n\n## Pre-Coro\n[Em] En algún lugar, un [C] rayo de sol\nBusca un [G] hueco en el rincón más os[D]curo\n[Em] Y una flor de papel que [C] no sabe oler\nSe mar[D]chita al pie del muro\n\n## Coro\n[G] Silencio, no [D] queda otro camino\nQue se[C]guir adelante y cantar con el [D] viento\n[G] Silencio, que el [D] tiempo no perdona\nA los [C] que se detienen a llorar por sus [D] muertos\nEn algún lu[G]gar... [D] [C] [D]\n\n## Verso 2\n[G] Hay un tren que no tie[D]ne fin\nQue reco[C]rre la estepa sin mirar [D] hacia atrás\n[G] Y en sus vagones van via[D]jeros de hojalata\nQue no [C] tienen memoria ni saben a [D] dónde van\n\n## Coro\n[G] Silencio, no [D] queda otro camino\nQue se[C]guir adelante y cantar con el [D] viento\n[G] Silencio, que el [D] tiempo no perdona\nA los [C] que se detienen a llorar por sus [D] muertos\nEn algún lu[G]gar\n",
    "title": "En Algún Lugar",
    "artist": "Duncan Dhu",
    "key": "G",
    "capo": 0,
    "tempo": 130,
    "tags": [
      "pop",
      "rock",
      "80s",
      "español",
      "acústico"
    ]
  },
  {
    "id": "flaca-calamaro",
    "file": "canciones/flaca-calamaro.md",
    "content": "---\ntitle: \"Flaca\"\nartist: \"Andrés Calamaro\"\nkey: \"G\"\ncapo: 0\ntempo: 124\ntags: [\"rock\", \"argentino\", \"español\", \"clásico\"]\n---\n\n## Intro\n[G] [B7] [Em] [C] [G] [D] [G] [D]\n\n## Verso 1\n[G] Flaca, no me [B7] claves tus puñales\nPor la [Em] espalda, tan pro[C]fundo\nNo me [G] duelen, no me [D] hacen más que [G] daño [D]\n\n[G] Siento en el [B7] fondo un dolor en algún [Em] lugar\nYa no me [C] duelen las caricias\nPorque [G] están hechas de [D] hielo y no de a[G]mor [D]\n\n## Coro\n[G] Y aunque casi te con[B7]ozco\nNo me pongo de ro[Em]dillas\nNi me arren[C]deré ja[G]más\nPorque un [D] día te quise de [G] verdad [D]\n\n## Verso 2\n[G] Flaca, dos en[B7]fermos no se pueden\nAyu[Em]dar, si es que al[C]guno\nSe pre[G]gunta por qué [D] todo salió [G] mal [D]\n\n[G] Te bajé las es[B7]trellas\nY te di mi cora[Em]zón\nY ahora [C] todo lo que queda\nEs re[G]cuerdos y una can[D]ción... [G]\n",
    "title": "Flaca",
    "artist": "Andrés Calamaro",
    "key": "G",
    "capo": 0,
    "tempo": 124,
    "tags": [
      "rock",
      "argentino",
      "español",
      "clásico"
    ]
  },
  {
    "id": "guantanamera",
    "file": "canciones/guantanamera.md",
    "content": "---\ntitle: \"Guantanamera\"\nartist: \"Tradicional\"\nkey: \"G\"\ncapo: 0\ntempo: 110\ntags: [\"latino\", \"folk\", \"fácil\", \"clásico\"]\n---\n\n// Una de las canciones más fáciles para empezar: sólo usa G - C - D\n\n## Coro\n[G] Guantanamera, [C] guajira [D] guantanamera\n[G] Guantanamera, [C] guajira [D] guantanamera\n[G] Guantanamera, [C] guajira [D] guantanamera\n[G] Guantanamera, [C] guajira [D] guantanamera\n\n## Verso 1\n[G] Yo soy un [C] hombre sin[D]cero\n[G] De donde [C] crece la [D] palma\n[G] Yo soy un [C] hombre sin[D]cero\n[G] De donde [C] crece la [D] palma\n[G] Y antes de [C] morirme [D] quiero\n[G] Cantar mis [C] versos del [D] alma\n\n## Coro\n[G] Guantanamera, [C] guajira [D] guantanamera\n[G] Guantanamera, [C] guajira [D] guantanamera\n\n## Verso 2\n[G] Mi verso es [C] de un verde [D] claro\n[G] Y de un car[C]mín encen[D]dido\n[G] Mi verso es [C] de un verde [D] claro\n[G] Y de un car[C]mín encen[D]dido\n[G] Mi verso es [C] un ciervo [D] herido\n[G] Que busca en [C] el monte a[D]mparo\n\n## Coro\n[G] Guantanamera, [C] guajira [D] guantanamera\n[G] Guantanamera, [C] guajira [D] guantanamera\n",
    "title": "Guantanamera",
    "artist": "Tradicional",
    "key": "G",
    "capo": 0,
    "tempo": 110,
    "tags": [
      "latino",
      "folk",
      "fácil",
      "clásico"
    ]
  },
  {
    "id": "hallelujah",
    "file": "canciones/hallelujah.md",
    "content": "---\ntitle: \"Hallelujah\"\nartist: \"Leonard Cohen\"\nkey: \"C\"\ncapo: 0\ntempo: 60\ntags: [\"folk\", \"balada\", \"classic\", \"arpegios\", \"himno\"]\n---\n\n// Tocar con compás de 6/8 o arpegio suave\n\n## Intro\n[C] [Am] [C] [Am]\n\n## Verso 1\nI've [C] heard there was a [Am] secret chord\nThat [C] David played, and it [Am] pleased the Lord\nBut [F] you don't really [G] care for music, [C] do you? [G]\nIt [C] goes like this: the [F] fourth, the [G] fifth\nThe [Am] minor fall, the [F] major lift\nThe [G] baffled king com[E7]posing Halle[Am]lujah\n\n## Coro\nHalle[F]lujah, Halle[Am]lujah\nHalle[F]lujah, Halle[C]lu---[G]jah [C] [Am] [C] [Am]\n\n## Verso 2\nYour [C] faith was strong but you [Am] needed proof\nYou [C] saw her bathing [Am] on the roof\nHer [F] beauty and the [G] moonlight over[C]threw you [G]\nShe [C] tied you to a [F] kitchen [G] chair\nShe [Am] broke your throne, and she [F] cut your hair\nAnd [G] from your lips she [E7] drew the Halle[Am]lujah\n\n## Coro\nHalle[F]lujah, Halle[Am]lujah\nHalle[F]lujah, Halle[C]lu---[G]jah [C] [Am] [C] [Am]\n\n## Verso 3\nMaybe [C] there's a God a[Am]bove\nAnd [C] all I ever [Am] learned of love\nWas [F] how to shoot at [G] someone who out[C]drew you [G]\nAnd it's [C] not a cry you can [F] hear at [G] night\nIt's [Am] not somebody who's [F] seen the light\nIt's a [G] cold and it's a [E7] broken Halle[Am]lujah\n\n## Coro Final\nHalle[F]lujah, Halle[Am]lujah\nHalle[F]lujah, Halle[C]lu---[G]jah [C]\n",
    "title": "Hallelujah",
    "artist": "Leonard Cohen",
    "key": "C",
    "capo": 0,
    "tempo": 60,
    "tags": [
      "folk",
      "balada",
      "classic",
      "arpegios",
      "himno"
    ]
  },
  {
    "id": "hey-jude",
    "file": "canciones/hey-jude.md",
    "content": "---\ntitle: \"Hey Jude\"\nartist: \"The Beatles\"\nkey: \"G\"\ncapo: 0\ntempo: 75\ntags: [\"rock\", \"60s\", \"classic\", \"balada\", \"fácil\"]\n---\n\n## Verso 1\n[G] Hey Jude, don't make it [D] bad\nTake a [D7] sad song and make it [G] better\nRe[C]member to let her into your [G] heart\nThen you can [D] start to make it [G] better\n\n## Verso 2\n[G] Hey Jude, don't be a[D]fraid\nYou were [D7] made to go out and [G] get her\nThe [C] minute you let her under your [G] skin\nThen you be[D]gin to make it [G] better\n\n## Puente 1\n[G7] And anytime you feel the [C] pain, hey Jude, re[Am]frain\nDon't carry the [D/F#] world upon your [G] shoulders\n[G7] For well you know that it's a [C] fool who plays it [Am] cool\nBy making his [D/F#] world a little [G] colder\nDa da da [G7] da... da da [D7] da da...\n\n## Verso 3\n[G] Hey Jude, don't make it [D] bad\nTake a [D7] sad song and make it [G] better\nRe[C]member to let her into your [G] heart\nThen you can [D] start to make it [G] better\n\n## Outro (El gran coro final)\n[G] Na na na [F] na na na na\n[C] Na na na na, hey [G] Jude\n[G] Na na na [F] na na na na\n[C] Na na na na, hey [G] Jude\n[G] Na na na [F] na na na na\n[C] Na na na na, hey [G] Jude\n",
    "title": "Hey Jude",
    "artist": "The Beatles",
    "key": "G",
    "capo": 0,
    "tempo": 75,
    "tags": [
      "rock",
      "60s",
      "classic",
      "balada",
      "fácil"
    ]
  },
  {
    "id": "knockin-on-heavens-door",
    "file": "canciones/knockin-on-heavens-door.md",
    "content": "---\ntitle: \"Knockin' on Heaven's Door\"\nartist: \"Bob Dylan\"\nkey: \"G\"\ncapo: 0\ntempo: 70\ntags: [\"rock\", \"folk\", \"70s\", \"classic\", \"fácil\", \"himno\"]\n---\n\n// La progresión de 4 acordes más famosa del mundo: G - D - Am / G - D - C\n\n## Intro\n[G] [D] [Am]\n[G] [D] [C]\n\n## Verso 1\n[G] Mama, take this [D] badge off of [Am] me\n[G] I can't [D] use it any[C]more\n[G] It's gettin' [D] dark, too dark to [Am] see\n[G] I feel I'm [D] knockin' on heaven's [C] door\n\n## Coro\n[G] Knock, knock, [D] knockin' on heaven's [Am] door\n[G] Knock, knock, [D] knockin' on heaven's [C] door\n[G] Knock, knock, [D] knockin' on heaven's [Am] door\n[G] Knock, knock, [D] knockin' on heaven's [C] door\n\n## Verso 2\n[G] Mama, put my [D] guns in the [Am] ground\n[G] I can't [D] shoot them any[C]more\n[G] That long black [D] cloud is comin' [Am] down\n[G] I feel I'm [D] knockin' on heaven's [C] door\n\n## Coro\n[G] Knock, knock, [D] knockin' on heaven's [Am] door\n[G] Knock, knock, [D] knockin' on heaven's [C] door\n[G] Knock, knock, [D] knockin' on heaven's [Am] door\n[G] Knock, knock, [D] knockin' on heaven's [C] door... [G]\n",
    "title": "Knockin' on Heaven's Door",
    "artist": "Bob Dylan",
    "key": "G",
    "capo": 0,
    "tempo": 70,
    "tags": [
      "rock",
      "folk",
      "70s",
      "classic",
      "fácil",
      "himno"
    ]
  },
  {
    "id": "la-bamba",
    "file": "canciones/la-bamba.md",
    "content": "---\ntitle: \"La Bamba\"\nartist: \"Ritchie Valens\"\nkey: \"C\"\ncapo: 0\ntempo: 150\ntags: [\"rock\", \"latino\", \"clásico\", \"fácil\"]\n---\n\n// La progresión clásica de 3 acordes por excelencia: C - F - G\n\n## Intro\n[C] [F] [G]\n[C] [F] [G]\n[C] [F] [G]\n\n## Verso 1\n[C] Para bailar la [F] bamba [G]\nPara bailar la [C] bamba se nece[F]sita una poca de [G] gracia\nUna poca de [C] gracia pa' mí, pa' [F] ti, y arriba y ar[G]riba\nY arriba y ar[C]riba, por ti se[F]ré, por ti se[G]ré, por ti se[C]ré [F] [G]\n\n## Coro\n[C] Yo no soy mari[F]nero [G]\nYo no soy mari[C]nero, soy capi[F]tán\nSoy capi[G]tán, soy capi[C]tán [F]\nBamba, [G] bamba\n[C] Bamba, [F] bamba\n[G] Bamba, [C] bamba [F] [G]\n\n## Verso 2\n[C] Para bailar la [F] bamba [G]\nPara bailar la [C] bamba se nece[F]sita una poca de [G] gracia\nUna poca de [C] gracia pa' mí, pa' [F] ti, y arriba y ar[G]riba\n\n## Coro\n[C] Yo no soy mari[F]nero [G]\nYo no soy mari[C]nero, soy capi[F]tán\nSoy capi[G]tán, soy capi[C]tán [F]\nBamba, [G] bamba\n[C] Bamba, [F] bamba\n[G] Bamba, [C] bamba [F] [G] [C]\n",
    "title": "La Bamba",
    "artist": "Ritchie Valens",
    "key": "C",
    "capo": 0,
    "tempo": 150,
    "tags": [
      "rock",
      "latino",
      "clásico",
      "fácil"
    ]
  },
  {
    "id": "la-chica-de-ayer",
    "file": "canciones/la-chica-de-ayer.md",
    "content": "---\ntitle: \"La Chica de Ayer\"\nartist: \"Nacha Pop\"\nkey: \"A\"\ncapo: 0\ntempo: 128\ntags: [\"pop\", \"rock\", \"80s\", \"español\", \"movida\"]\n---\n\n## Intro\n[A] [F#m] [D] [E]\n[A] [F#m] [D] [E]\n\n## Verso 1\n[A] Un día cualquiera, no sabes qué [F#m] hora es\n[D] Te sientas y notas que el tiempo se [E] va\n[A] Miras los libros, no hay nada que [F#m] leer\n[D] Y buscas a alguien con quien conver[E]sar\n\n## Pre-Coro\n[D] Y luego el sol al despun[E]tar te alumbrará\n[D] Y entre la niebla su silueta apa[E]recerá\n\n## Coro\n[A] La chica de a[F#m]yer\nLa que una [D] noche te hizo enloque[E]cer\n[A] La chica de a[F#m]yer\nLa que te [D] besa y te hace desfa[E]llecer\n\n## Verso 2\n[A] Pasan las horas, miras el reloj [F#m]\n[D] La tarde se muere sin compa[E]sión\n[A] Te sientes solo en la habita[F#m]ción\n[D] Y en tu cabeza suena una can[E]ción\n\n## Pre-Coro\n[D] Y luego el sol al despun[E]tar te alumbrará\n[D] Y entre la niebla su silueta apa[E]recerá\n\n## Coro\n[A] La chica de a[F#m]yer\nLa que una [D] noche te hizo enloque[E]cer\n[A] La chica de a[F#m]yer\nLa que te [D] besa y te hace desfa[E]llecer... [A]\n",
    "title": "La Chica de Ayer",
    "artist": "Nacha Pop",
    "key": "A",
    "capo": 0,
    "tempo": 128,
    "tags": [
      "pop",
      "rock",
      "80s",
      "español",
      "movida"
    ]
  },
  {
    "id": "la-flaca",
    "file": "canciones/la-flaca.md",
    "content": "---\ntitle: \"La Flaca\"\nartist: \"Jarabe de Palo\"\nkey: \"Am\"\ncapo: 0\ntempo: 104\ntags: [\"rock\", \"pop\", \"español\"]\n---\n\n## Intro\n[Am] [Am] [Am] [Am]\n\n## Verso 1\n[Am] En la vida conocí [E7] mujer igual a la Flaca\n[Dm] Coral negro de la Habana, [E7] tremendísima mulata\n[Am] Cien libras de piel y hueso, [E7] cuarenta kilos de salsa\n[Dm] Y en la cara dos soles [E7] que sin palabras hablaban\n[Dm] Que sin palabras hablaban\n\n## Coro\n[Am] Por un beso de la Flaca daría lo que [E7] fuera\n[E7] Por un beso de ella, aunque sólo uno [Am] fuera\n[Am] Por un beso de la Flaca daría lo que [E7] fuera\n[E7] Por un beso de ella, aunque sólo uno [Am] fuera\nAunque sólo uno [E7] fuera... [Am]\n\n## Verso 2\n[Am] Mojé mis sábanas blancas, [E7] como dice la canción\n[Dm] Recordando las caricias [E7] que me brindó el primer día\n[Am] Y enloquezco de ganas [E7] de dormir a su ladito\n[Dm] Porque Dios que me libre [E7] de tener esa mujer\n[Dm] De tener esa mujer\n\n## Coro\n[Am] Por un beso de la Flaca daría lo que [E7] fuera\n[E7] Por un beso de ella, aunque sólo uno [Am] fuera\n[Am] Por un beso de la Flaca daría lo que [E7] fuera\n[E7] Por un beso de ella, aunque sólo uno [Am] fuera\nAunque sólo uno [E7] fuera... [Am]\n",
    "title": "La Flaca",
    "artist": "Jarabe de Palo",
    "key": "Am",
    "capo": 0,
    "tempo": 104,
    "tags": [
      "rock",
      "pop",
      "español"
    ]
  },
  {
    "id": "la-mujer-de-verde",
    "file": "canciones/la-mujer-de-verde.md",
    "content": "---\ntitle: \"La Mujer de Verde\"\nartist: \"Izal\"\nkey: \"Am\"\ncapo: 0\ntempo: 120\ntags: [\"indie\", \"pop\", \"español\", \"2010s\"]\n---\n\n## Intro\n[Am] [F] [C] [G]\n[Am] [F] [C] [G]\n\n## Verso 1\n[Am] Y tú la mujer de [F] verde\nQue viste mis [C] ojos tan tristes y [G] lentos\n[Am] Con el superpoder de [F] parar\nCualquier catas[C]trófico evento [G]\n\n[Am] Y ahora que todo se [F] apaga\nY la gente se [C] marcha a sus casas dor[G]midas\n[Am] Me miras con ojos de [F] maga\nY curas de un [C] soplo todas mis he[G]ridas\n\n## Coro\n[Am] Y tú la mujer de [F] verde\nCon el poder de [C] hacer desnudarse a los [G] sauces\n[Am] Y yo que me dejo lle[F]var\nPor el río que [C] baja hacia tus dulces [G] cauces\n\n[Am] Que me salve tu [F] boca\nQue me salve tu [C] risa\nQue me salve este [G] rato que pasa sin [Am] prisa [F] [C] [G]\n\n## Verso 2\n[Am] Dijiste que el mundo era [F] grande\nY que no había [C] tiempo que perder en llan[G]tos\n[Am] Que la vida se pasa vo[F]lando\nY que son me[C]jores los cantos que los espan[G]tos\n\n## Coro\n[Am] Y tú la mujer de [F] verde\nCon el poder de [C] hacer desnudarse a los [G] sauces\n[Am] Y yo que me dejo lle[F]var\nPor el río que [C] baja hacia tus dulces [G] cauces\n[Am] Que me salve tu [F] boca\nQue me salve tu [C] risa\nQue me salve este [G] rato que pasa sin [Am] prisa\n",
    "title": "La Mujer de Verde",
    "artist": "Izal",
    "key": "Am",
    "capo": 0,
    "tempo": 120,
    "tags": [
      "indie",
      "pop",
      "español",
      "2010s"
    ]
  },
  {
    "id": "la-raja-de-tu-falda",
    "file": "canciones/la-raja-de-tu-falda.md",
    "content": "---\ntitle: \"La Raja de Tu Falda\"\nartist: \"Estopa\"\nkey: \"Am\"\ncapo: 0\ntempo: 130\ntags: [\"rumba\", \"rock\", \"español\", \"clásico\"]\n---\n\n## Intro\n[Am] [Dm] [G] [C] [E7]\n[Am] [Dm] [G] [C] [E7]\n\n## Verso 1\n[Am] Era una tarde tonta y caliente\nDe esas que quema la carre[E7]tera\nEl sol brillaba de frente\nY yo que no llevaba ni una mone[Am]da\n\n[Am] Pasó una pava por la acera\nCon una minifalda estre[E7]cha\nQue quitaba el hipo a cualquiera\nY me quedé mirando la bre[Am]cha\n\n## Coro\n[Am] Por la raja de tu [Dm] falda\nYo tuve un piña[G]zo con un Seat [C] Panda\n[Am] Por la raja de tu [Dm] falda\nYo tuve un piña[E7]zo con un Seat [Am] Panda\n\n[Am] Por la raja de tu [Dm] falda\nSe me cayó la [G] baba hasta la gar[C]ganta\n[Am] Por la raja de tu [Dm] falda\nYo tuve un piña[E7]zo con un Seat [Am] Panda\n\n## Verso 2\n[Am] Di un volantazo hacia la derecha\nMe subí al bordillo de la ace[E7]ra\nRompí una farola vieja\nY se me abrió la guantera en[Am]tera\n\n[Am] Salió el seguro y la documentación\nY un casete de Camela en una es[E7]quina\nY yo allí tira'o en el arcén\nDiciendo: ¡vaya tía más di[Am]vina!\n\n## Coro\n[Am] Por la raja de tu [Dm] falda\nYo tuve un piña[G]zo con un Seat [C] Panda\n[Am] Por la raja de tu [Dm] falda\nYo tuve un piña[E7]zo con un Seat [Am] Panda\n",
    "title": "La Raja de Tu Falda",
    "artist": "Estopa",
    "key": "Am",
    "capo": 0,
    "tempo": 130,
    "tags": [
      "rumba",
      "rock",
      "español",
      "clásico"
    ]
  },
  {
    "id": "la-vereda-de-la-puerta-de-atras",
    "file": "canciones/la-vereda-de-la-puerta-de-atras.md",
    "content": "---\ntitle: \"La Vereda de la Puerta de Atrás\"\nartist: \"Extremoduro\"\nkey: \"G\"\ncapo: 0\ntempo: 116\ntags: [\"rock\", \"español\", \"clásico\", \"himno\"]\n---\n\n## Intro\n[G] [D] [Em] [C]\n[G] [D] [Em] [C]\n\n## Verso 1\n[G] Ya no queda casi nada\n[D] De la noche de ayer\n[Em] Solo un montón de cenizas\n[C] Y ganas de correr\n\n[G] Que me voy a la vereda\n[D] De la puerta de atrás\n[Em] A ver si encuentro el camino\n[C] Que me lleve a la paz\n\n## Coro\n[G] Y si fuera mi [D] vida una esca[Em]lera\nMe la pa[C]saría ente[G]ra\nBuscando una [D] nube para descan[Em]sar [C]\n\n[G] Y si fuera mi [D] canto como el [Em] viento\nSe lo lle[C]varía el mo[G]mento\nY a nadie ten[D]dría que dar expli[Em]cación [C]\n\n## Verso 2\n[G] Que me entierren en el campo\n[D] Donde crezca la hierba\n[Em] Que no me pongan flores\n[C] Que la lluvia me riegue\n\n[G] Déjame que me pierda\n[D] Entre la multitud\n[Em] Que no necesito un faro\n[C] Si me falta la luz\n\n## Coro\n[G] Y si fuera mi [D] vida una esca[Em]lera\nMe la pa[C]saría ente[G]ra\nBuscando una [D] nube para descan[Em]sar [C]\n\n[G] Y si fuera mi [D] canto como el [Em] viento\nSe lo lle[C]varía el mo[G]mento\nY a nadie ten[D]dría que dar expli[Em]cación... [G]\n",
    "title": "La Vereda de la Puerta de Atrás",
    "artist": "Extremoduro",
    "key": "G",
    "capo": 0,
    "tempo": 116,
    "tags": [
      "rock",
      "español",
      "clásico",
      "himno"
    ]
  },
  {
    "id": "lady-madrid",
    "file": "canciones/lady-madrid.md",
    "content": "---\ntitle: \"Lady Madrid\"\nartist: \"Pereza\"\nkey: \"G\"\ncapo: 0\ntempo: 122\ntags: [\"rock\", \"pop\", \"español\", \"2000s\"]\n---\n\n## Intro\n[G] [Em] [C] [D]\n[G] [Em] [C] [D]\n\n## Verso 1\n[G] Probaba fortuna en la ca[Em]pital\nVenía del norte dispuesta a [C] triunfar\nCon un vestido de flores y un par [D] de tacones\nQue hacían temblar\n\n[G] Se metió en los garitos de Mala[Em]saña\nBebiendo cerveza, cantando con [C] ganas\nEra la chica más guapa que nunca [D] pisó\nLa Gran Vía al alba\n\n## Coro\n[C] Lady Madrid, [D] la reina de las ver[G]benas [Em]\n[C] Estrella de los te[D]jados, musa de las can[G]ciones [Em]\n[C] Lady Madrid, [D] la flor de la madru[G]gada [Em]\nQue se pasea por [C] Chueca\nBuscando a quién robarle [D] el alma... [G]\n\n## Verso 2\n[G] Dejó corazones rotos en cada [Em] esquina\nLa noche era suya, la calle su [C] ruina\nY aunque los años pasaron sin dar[D]se ni cuenta\nElla nunca se olvida\n\n## Coro\n[C] Lady Madrid, [D] la reina de las ver[G]benas [Em]\n[C] Estrella de los te[D]jados, musa de las can[G]ciones [Em]\n[C] Lady Madrid, [D] la flor de la madru[G]gada [Em]\nQue se pasea por [C] Chueca\nBuscando a quién robarle [D] el alma... [G]\n",
    "title": "Lady Madrid",
    "artist": "Pereza",
    "key": "G",
    "capo": 0,
    "tempo": 122,
    "tags": [
      "rock",
      "pop",
      "español",
      "2000s"
    ]
  },
  {
    "id": "lamento-boliviano",
    "file": "canciones/lamento-boliviano.md",
    "content": "---\ntitle: \"Lamento Boliviano\"\nartist: \"Los Enanitos Verdes\"\nkey: \"Em\"\ncapo: 0\ntempo: 124\ntags: [\"rock\", \"latino\", \"argentino\", \"himno\", \"fácil\"]\n---\n\n## Intro\n[Em] [Am] [Em] [B7]\n[Em] [Am] [Em] [B7]\n\n## Verso 1\n[Em] Me quieren agitar\n[Am] Me incitan a gritar\n[Em] Soy como una roca que el viento no puede que[B7]brar\n\n[Em] Y van a caer\n[Am] Mil lágrimas al mar\n[Em] Pero mi corazón no se va a cansar de pe[B7]lear\n\n## Coro\n[Em] Y yo estoy aquí\nBorracho y [Am] loco\nY mi corazón idio[Em]ta\nSiempre brillará [B7]\n\n[Em] Y yo te amaré\nTe amaré por [Am] siempre\nNena, no te peines en la [Em] cama\nQue los viajantes se van a atra[B7]sar\n\n## Solo\n[Em] [Am] [Em] [B7]\n[Em] [Am] [Em] [B7]\n\n## Verso 2\n[Em] Hoy es un buen día\n[Am] Para renacer\n[Em] Dejar los temores y echar a co[B7]rrer\n\n## Coro\n[Em] Y yo estoy aquí\nBorracho y [Am] loco\nY mi corazón idio[Em]ta\nSiempre brillará [B7]\n\n[Em] Y yo te amaré\nTe amaré por [Am] siempre\nNena, no te peines en la [Em] cama\nQue los viajantes se van a atra[B7]sar... [Em]\n",
    "title": "Lamento Boliviano",
    "artist": "Los Enanitos Verdes",
    "key": "Em",
    "capo": 0,
    "tempo": 124,
    "tags": [
      "rock",
      "latino",
      "argentino",
      "himno",
      "fácil"
    ]
  },
  {
    "id": "let-it-be",
    "file": "canciones/let-it-be.md",
    "content": "---\ntitle: \"Let It Be\"\nartist: \"The Beatles\"\nkey: \"C\"\ncapo: 0\ntempo: 72\ntags: [\"rock\", \"classic\", \"60s\", \"balada\", \"fácil\", \"himno\"]\n---\n\n## Intro\n[C] [G] [Am] [F]\n[C] [G] [F] [C]\n\n## Verso 1\nWhen I [C] find myself in [G] times of trouble, [Am] Mother Mary [F] comes to me\n[C] Speaking words of [G] wisdom, let it [F] be [C]\nAnd [C] in my hour of [G] darkness she is [Am] standing right in [F] front of me\n[C] Speaking words of [G] wisdom, let it [F] be [C]\n\n## Coro\nLet it [Am] be, let it [G] be, let it [F] be, let it [C] be\n[C] Whisper words of [G] wisdom, let it [F] be [C]\n\n## Verso 2\nAnd [C] when the broken [G] hearted people [Am] living in the [F] world agree\n[C] There will be an [G] answer, let it [F] be [C]\nFor [C] though they may be [G] parted, there is [Am] still a chance that [F] they will see\n[C] There will be an [G] answer, let it [F] be [C]\n\n## Coro\nLet it [Am] be, let it [G] be, let it [F] be, let it [C] be\n[C] There will be an [G] answer, let it [F] be [C]\nLet it [Am] be, let it [G] be, let it [F] be, let it [C] be\n[C] Whisper words of [G] wisdom, let it [F] be [C]\n\n## Solo\n[F] [C] [G] [C]\n[F] [C] [G] [C]\n\n## Coro Final\nLet it [Am] be, let it [G] be, let it [F] be, let it [C] be\n[C] Whisper words of [G] wisdom, let it [F] be... [C]\n",
    "title": "Let It Be",
    "artist": "The Beatles",
    "key": "C",
    "capo": 0,
    "tempo": 72,
    "tags": [
      "rock",
      "classic",
      "60s",
      "balada",
      "fácil",
      "himno"
    ]
  },
  {
    "id": "love-me-do",
    "file": "canciones/love-me-do.md",
    "content": "---\ntitle: \"Love Me Do\"\nartist: \"The Beatles\"\nkey: \"G\"\ncapo: 0\ntempo: 148\ntags: [\"rock\", \"60s\", \"classic\", \"fácil\"]\n---\n\n## Intro\n[G] [C] [G] [C]\n[G] [C] [G] [C]\n\n## Verso 1\n[G] Love, love me [C] do\nYou [G] know I love [C] you\nI'll [G] always be [C] true\nSo please... [C] [C]\nLove me [G] do [C] [G]\nWhoa, love me [G] do [C] [G]\n\n## Verso 2\n[G] Love, love me [C] do\nYou [G] know I love [C] you\nI'll [G] always be [C] true\nSo please... [C] [C]\nLove me [G] do [C] [G]\nWhoa, love me [G] do [C] [G]\n\n## Puente\n[D] Someone to love\n[C] Somebody [G] new\n[D] Someone to love\n[C] Someone like [G] you [D]\n\n## Verso 3\n[G] Love, love me [C] do\nYou [G] know I love [C] you\nI'll [G] always be [C] true\nSo please... [C] [C]\nLove me [G] do [C] [G]\nWhoa, love me [G] do [C] [G]\nYeah, love me [G] do [C] [G]\n",
    "title": "Love Me Do",
    "artist": "The Beatles",
    "key": "G",
    "capo": 0,
    "tempo": 148,
    "tags": [
      "rock",
      "60s",
      "classic",
      "fácil"
    ]
  },
  {
    "id": "maria",
    "file": "canciones/maria.md",
    "content": "---\ntitle: \"María\"\nartist: \"Ricky Martin\"\nkey: \"Am\"\ncapo: 0\ntempo: 128\ntags: [\"pop\", \"latino\", \"90s\", \"fiesta\"]\n---\n\n## Intro\n[Am] [Dm] [E7] [Am]\n[Am] [Dm] [E7] [Am]\n\n## Verso 1\n[Am] Ella es una mujer especial\nComo caída de otro plane[Dm]ta\nElla es un laberinto sin fin\nDonde te pierdes si no te a[E7]prietas\n\n[Am] Tiene en los labios veneno y miel\nY en la mirada fuego y can[Dm]dela\nSi te descuidas te roba la piel\nY te condena a vivir sin [E7] ella\n\n## Coro\n[Am] ¡Un, dos, tres! Un pasito pa'lante, Ma[Dm]ría\n[G] ¡Un, dos, tres! Un pasito pa'trás [C] [E7]\n[Am] Aunque me muera ahora mismo, Ma[Dm]ría\n[E7] María, ¿qué tienes tú que me vuelves lo[Am]co?\n\n[Am] ¡Un, dos, tres! Un pasito pa'lante, Ma[Dm]ría\n[G] ¡Un, dos, tres! Un pasito pa'trás [C] [E7]\n[Am] Todo el mundo cantando a Ma[Dm]ría\n[E7] ¡María, mi amor, mi dulce ve[Am]neno!\n\n## Verso 2\n[Am] Ella te baila como una diosa\nY tú no puedes mirar pa' [Dm] otro la'o\nTiene el perfume de alguna rosa\nY el corazón medio conge[E7]la'o\n\n## Coro\n[Am] ¡Un, dos, tres! Un pasito pa'lante, Ma[Dm]ría\n[G] ¡Un, dos, tres! Un pasito pa'trás [C] [E7]\n[Am] Aunque me muera ahora mismo, Ma[Dm]ría\n[E7] María, ¿qué tienes tú que me vuelves lo[Am]co?\n",
    "title": "María",
    "artist": "Ricky Martin",
    "key": "Am",
    "capo": 0,
    "tempo": 128,
    "tags": [
      "pop",
      "latino",
      "90s",
      "fiesta"
    ]
  },
  {
    "id": "marta-sebas-guille-y-los-demas",
    "file": "canciones/marta-sebas-guille-y-los-demas.md",
    "content": "---\ntitle: \"Marta, Sebas, Guille y los demás\"\nartist: \"Amaral\"\nkey: \"G\"\ncapo: 0\ntempo: 120\ntags: [\"pop\", \"rock\", \"español\", \"2000s\", \"amigos\", \"himno\"]\n---\n\n## Intro\n[G] [D] [Em] [C]\n[G] [D] [Em] [C]\n\n## Verso 1\n[G] Hoy hace frío en Ma[D]drid\nY me he puesto a pen[Em]sar en ti\nEn las [C] tardes de verano que pasa[G]mos\nRiendo en aquel por[D]tal\nSin saber qué iba a pa[Em]sar\nCon la [C] vida que teníamos de[D]lante\n\n[G] Marta se fue a vivir a [D] Berlín\nSebas sigue en el mismo [Em] bar\nY Guille [C] jura que este año va a cam[G]biar\nY yo sigo aquí con mi gui[D]tarra\nCantándole al [Em] mar\nQue nunca [C] baña esta ciu[D]dad\n\n## Coro\n[G] Son mis amigos\nPor en[D]cima de todas las cosas\n[Em] Son esa gente\nQue no [C] te pide nada a cambio\n[G] Son mis amigos\nY me [D] salvan la vida mil veces\n[Em] Cuando me caigo\nY ya no [C] puedo levan[D]tarme\nSon mis ami[G]gos... [D] [Em] [C]\n\n## Verso 2\n[G] Hemos bailado hasta el [D] amanecer\nHemos llorado por [Em] amor\nY hemos [C] jurado no volver a caer [G]\nPero siempre que nos vol[D]vemos a ver\nEs como si el [Em] tiempo\nNo hu[C]biera pasado a[D]yer\n\n## Coro\n[G] Son mis amigos\nPor en[D]cima de todas las cosas\n[Em] Son esa gente\nQue no [C] te pide nada a cambio\n[G] Son mis amigos\nY me [D] salvan la vida mil veces\n[Em] Cuando me caigo\nY ya no [C] puedo levan[D]tarme\nSon mis ami[G]gos\n",
    "title": "Marta, Sebas, Guille y los demás",
    "artist": "Amaral",
    "key": "G",
    "capo": 0,
    "tempo": 120,
    "tags": [
      "pop",
      "rock",
      "español",
      "2000s",
      "amigos",
      "himno"
    ]
  },
  {
    "id": "mil-horas",
    "file": "canciones/mil-horas.md",
    "content": "---\ntitle: \"Mil Horas\"\nartist: \"Los Abuelos de la Nada\"\nkey: \"Am\"\ncapo: 0\ntempo: 128\ntags: [\"rock\", \"pop\", \"argentino\", \"80s\", \"himno\"]\n---\n\n## Intro\n[Am] [Dm] [G] [C]\n[Am] [Dm] [G] [C]\n\n## Verso 1\n[Am] Hace frío y estoy lejos de [Dm] casa\n[G] Hace tiempo que estoy sentado sobre esta [C] piedra\n[Am] Yo me pregunto para qué sirven las [Dm] guerras\n[G] Tengo un cohete en el pantalón [C]\n\n[Am] Vos estás tan fría como la [Dm] nieve\n[G] A mi lado y no te puedo to[C]car\n[Am] Y en el circo vos sos una es[Dm]trella\n[G] Una estrella que no sabe bri[C]llar\n\n## Coro\n[Am] Te esperé bajo la lluvia dos [Dm] horas\n[G] Mil horas, como un [C] perro\n[Am] Y cuando llegaste me mi[Dm]raste\nY me dijiste: [G] \"Loco, estás moja'o, ya no te [C] quiero\"\n\n[Am] Te esperé bajo la lluvia dos [Dm] horas\n[G] Mil horas, como un [C] perro\n[Am] Y cuando llegaste me mi[Dm]raste\nY me dijiste: [G] \"Loco, estás moja'o, ya no te [C] quiero\"\n\n## Verso 2\n[Am] En el circo vos sos una es[Dm]trella\n[G] Una estrella que brilla en la oscuri[C]dad\n[Am] Pero cuando se apagan las [Dm] luces\n[G] Sos tan solo una sombra que se [C] va\n\n## Coro\n[Am] Te esperé bajo la lluvia dos [Dm] horas\n[G] Mil horas, como un [C] perro\n[Am] Y cuando llegaste me mi[Dm]raste\nY me dijiste: [G] \"Loco, estás moja'o, ya no te [C] quiero\"\n",
    "title": "Mil Horas",
    "artist": "Los Abuelos de la Nada",
    "key": "Am",
    "capo": 0,
    "tempo": 128,
    "tags": [
      "rock",
      "pop",
      "argentino",
      "80s",
      "himno"
    ]
  },
  {
    "id": "no-dudaria",
    "file": "canciones/no-dudaria.md",
    "content": "---\ntitle: \"No Dudaría\"\nartist: \"Antonio Flores\"\nkey: \"C\"\ncapo: 0\ntempo: 108\ntags: [\"pop\", \"español\", \"acústico\", \"clásico\", \"fácil\"]\n---\n\n## Intro\n[C] [Am] [F] [G]\n[C] [Am] [F] [G]\n\n## Verso 1\n[C] Si pudiera olvidar [Am] todo aquello que fui\n[F] Si pudiera borrar [G] todo lo que yo vi\n[C] No dudaría, [Am] no dudaría en [F] volver a reír [G]\n\n[C] Si el llanto por fin [Am] se pudiera secar\n[F] Si pudiera empezar [G] otra vez a cantar\n[C] No dudaría, [Am] no dudaría en [F] volver a empezar [G]\n\n## Coro\n[C] Prometo ver la alegría, [Am] escarmentar de la experiencia\n[F] Pero nunca más usar la vio[G]lencia\n[C] Prometo ver la alegría, [Am] escarmentar de la experiencia\n[F] Pero nunca más usar la vio[G]lencia\n\n## Puente\n[C] ¡La la la la [Am] la la!\n[F] ¡La la la la [G] la la!\n[C] ¡La la la la [Am] la la!\n[F] ¡La la la la [G] la la!\n\n## Verso 2\n[C] Si pudiera cambiar [Am] todo el odio de ayer\n[F] Por un poco de paz [G] y ganas de querer\n[C] No dudaría, [Am] no dudaría en [F] volver a nacer [G]\n\n## Coro\n[C] Prometo ver la alegría, [Am] escarmentar de la experiencia\n[F] Pero nunca más usar la vio[G]lencia\n[C] Prometo ver la alegría, [Am] escarmentar de la experiencia\n[F] Pero nunca más usar la vio[G]lencia\n[C]\n",
    "title": "No Dudaría",
    "artist": "Antonio Flores",
    "key": "C",
    "capo": 0,
    "tempo": 108,
    "tags": [
      "pop",
      "español",
      "acústico",
      "clásico",
      "fácil"
    ]
  },
  {
    "id": "no-estamos-locos",
    "file": "canciones/no-estamos-locos.md",
    "content": "---\ntitle: \"No Estamos Locos\"\nartist: \"Ketama\"\nkey: \"Em\"\ncapo: 0\ntempo: 118\ntags: [\"flamenco\", \"pop\", \"español\", \"90s\"]\n---\n\n## Intro\n[Em] [D] [C] [B7]\n[Em] [D] [C] [B7]\n\n## Coro\n[Em] No estamos locos\nQue sa[D]bemos lo que queremos\n[C] Vive la vida igual con ilu[B7]sión, con alegría\n[Em] No estamos locos\nQue sa[D]bemos lo que queremos\n[C] Vive la vida igual con ilu[B7]sión, con alegría\n\n## Verso 1\n[Em] Si me das tu cariño, si me das tu ca[D]lor\nYo te doy mis canciones, te regalo una [C] flor\nQue la noche es oscura pero llega el ma[B7]ñana\nY la luz de tus ojos entra por mi ven[Em]tana\n\n## Coro\n[Em] No estamos locos\nQue sa[D]bemos lo que queremos\n[C] Vive la vida igual con ilu[B7]sión, con alegría\n[Em] No estamos locos\nQue sa[D]bemos lo que queremos\n[C] Vive la vida igual con ilu[B7]sión, con alegría\n\n## Verso 2\n[Em] Todo el mundo te dice lo que tienes que ha[D]cer\nPero escucha a tu alma y déjate que[C]rer\nQue el camino es bonito si lo andas can[B7]tando\nY los malos momentos se van olvi[Em]dando\n\n## Coro\n[Em] No estamos locos\nQue sa[D]bemos lo que queremos\n[C] Vive la vida igual con ilu[B7]sión, con alegría... [Em]\n",
    "title": "No Estamos Locos",
    "artist": "Ketama",
    "key": "Em",
    "capo": 0,
    "tempo": 118,
    "tags": [
      "flamenco",
      "pop",
      "español",
      "90s"
    ]
  },
  {
    "id": "no-puedo-vivir-sin-ti",
    "file": "canciones/no-puedo-vivir-sin-ti.md",
    "content": "---\ntitle: \"No Puedo Vivir Sin Ti\"\nartist: \"Los Ronaldos\"\nkey: \"D\"\ncapo: 0\ntempo: 128\ntags: [\"pop\", \"rock\", \"80s\", \"español\", \"fiesta\"]\n---\n\n## Intro\n[D] [G] [D] [G]\n[D] [G] [D] [G]\n\n## Verso 1\n[D] Llevas años enredada en mis [G] manos\n[D] En mi pelo, con tu [G] cabeza\n[D] Y no puedo pensar, [G] no puedo pensar\nEn nada más que en [A] ti [G]\n\n[D] Me dijiste que jamás me olvi[G]darías\n[D] Que en tus noches siempre me que[G]rrías\n[D] Y ahora dices que no, [G] que ya no sientes\nLo mismo que ayer [A] [G]\n\n## Coro\n[D] No puedo vivir sin [G] ti\nNo hay ma[D]nera\nNo puedo vivir sin [G] ti\nNo hay ma[A]nera [G]\n\n## Verso 2\n[D] Me paseas por toda la [G] ciudad\n[D] Y me dices que ya nada [G] cambiará\n[D] Pero miro tus ojos [G] y veo\nQue te estás marchan[A]do ya [G]\n\n## Coro\n[D] No puedo vivir sin [G] ti\nNo hay ma[D]nera\nNo puedo vivir sin [G] ti\nNo hay ma[A]nera [G]\n\n## Solo\n[D] [G] [D] [G] [A] [G]\n\n## Coro Final\n[D] No puedo vivir sin [G] ti\nNo hay ma[D]nera\nNo puedo vivir sin [G] ti\nNo hay ma[A]nera... [D]\n",
    "title": "No Puedo Vivir Sin Ti",
    "artist": "Los Ronaldos",
    "key": "D",
    "capo": 0,
    "tempo": 128,
    "tags": [
      "pop",
      "rock",
      "80s",
      "español",
      "fiesta"
    ]
  },
  {
    "id": "noches-de-bohemia",
    "file": "canciones/noches-de-bohemia.md",
    "content": "---\ntitle: \"Noches de Bohemia\"\nartist: \"Navajita Plateá\"\nkey: \"Am\"\ncapo: 0\ntempo: 96\ntags: [\"flamenco\", \"rumba\", \"balada\", \"español\", \"clásico\"]\n---\n\n## Intro\n[Am] [Dm] [G] [C] [F] [B7] [E]\n[Am] [Dm] [G] [C] [F] [B7] [E]\n\n## Verso 1\n[Am] Noches de bohemia y de ilu[Dm]sión\nQue pegan en mi alma como un [G] tiro\nRecordando el aroma de tu [C] piel\nY el calor de tu res[E]piro\n\n[Am] Me paso las madrugadas en el bal[Dm]cón\nEsperando que me traiga el [G] viento\nUn susurro que me hable de tu a[C]mor\nY me alivie este tor[E]mento\n\n## Coro\n[Am] Noches de bohemia que me van a ma[Dm]tar\nSi tú no vuelves conmigo no me [G] puedo levantar\nQue me falta tu alegría, que me [C] falta tu mirar [E]\n[Am] Noches de bohemia llenas de sole[Dm]dad\nCon la guitarra en la mano y la [G] luna en la ciudad\nBuscando por los rincones donde [C] te puedas ha[E]llar... [Am]\n\n## Verso 2\n[Am] He dejado la puerta sin ce[Dm]rrar\nPor si te da por aparecer de re[G]pente\nNo me importa lo que diga la [C] gente\nSolo quiero verte en[E]trar\n\n## Coro\n[Am] Noches de bohemia que me van a ma[Dm]tar\nSi tú no vuelves conmigo no me [G] puedo levantar\nQue me falta tu alegría, que me [C] falta tu mirar [E]\n[Am] Noches de bohemia llenas de sole[Dm]dad\nCon la guitarra en la mano y la [G] luna en la ciudad\nBuscando por los rincones donde [C] te puedas ha[E]llar\n",
    "title": "Noches de Bohemia",
    "artist": "Navajita Plateá",
    "key": "Am",
    "capo": 0,
    "tempo": 96,
    "tags": [
      "flamenco",
      "rumba",
      "balada",
      "español",
      "clásico"
    ]
  },
  {
    "id": "por-la-boca-vive-el-pez",
    "file": "canciones/por-la-boca-vive-el-pez.md",
    "content": "---\ntitle: \"Por la Boca Vive el Pez\"\nartist: \"Fito & Fitipaldis\"\nkey: \"G\"\ncapo: 0\ntempo: 132\ntags: [\"rock\", \"español\", \"2000s\", \"clásico\"]\n---\n\n## Intro\n[G] [D] [C] [D]\n[G] [D] [C] [D]\n\n## Verso 1\n[G] Salir a la calle a buscar un mo[D]tivo\nPara no que[C]darme en casa con la sole[D]dad\n[G] Encontrar en un vaso de vino el des[D]tino\nY saber que ma[C]ñana todo volverá a empe[D]zar\n\n[Em] Nunca he sido de los que echan el [Bm] freno\n[C] Siempre fui de los que pisan a [D] fondo\n[Em] Si me caigo del cielo al in[Bm]fierno\n[C] No me busques que estoy en lo más [D] hondo\n\n## Coro\n[G] Porque por la boca vive el [D] pez\nY por las ma[C]nos se escapa la vida a ve[D]ces\n[G] Si me das a elegir otra [D] vez\nMe que[C]daría con todo lo que me [D] ofreces\n[G] Por la boca vive el [D] pez\n[C] Y por los ojos se asoma la [D] calma\n[G] Por la boca vive el [D] pez... [C] [D]\n\n## Verso 2\n[G] No me digas que ya no te a[D]cuerdas\nDe las noches que pa[C]samos sin dor[D]mir\n[G] De los besos robados a [D] tientas\nY las ganas que te[C]níamos de vi[D]vir\n\n## Coro\n[G] Porque por la boca vive el [D] pez\nY por las ma[C]nos se escapa la vida a ve[D]ces\n[G] Si me das a elegir otra [D] vez\nMe que[C]daría con todo lo que me [D] ofreces... [G]\n",
    "title": "Por la Boca Vive el Pez",
    "artist": "Fito & Fitipaldis",
    "key": "G",
    "capo": 0,
    "tempo": 132,
    "tags": [
      "rock",
      "español",
      "2000s",
      "clásico"
    ]
  },
  {
    "id": "princesas",
    "file": "canciones/princesas.md",
    "content": "---\ntitle: \"Princesas\"\nartist: \"Pereza\"\nkey: \"G\"\ncapo: 0\ntempo: 130\ntags: [\"rock\", \"pop\", \"español\", \"2000s\"]\n---\n\n## Intro\n[G] [D] [Em] [C]\n[G] [D] [Em] [C]\n\n## Verso 1\n[G] Eran las dos de la ma[D]ñana\nEn un garito de Ma[Em]drid\nTú te acercaste con tu [C] copa\nY me empezaste a sonre[G]ír\n\n[G] Me hablaste de tus ilus[D]iones\nDe tus ganas de cam[Em]biar\nY entre trago y cigarr[C]illo\nNos pusimos a can[D]tar\n\n## Coro\n[G] Y si no nos queda [D] tiempo\nPara volver a empa[Em]tar\nPrincesas de barrio que [C] bajan al centro\nA buscarse la [G] vida, a bailar con el [D] viento\nPrincesas sin reino que [Em] saben perder\nY volver a empa[C]tar... [G] [D] [Em] [C]\n\n## Verso 2\n[G] Salimos a la calle [D] fría\nSin saber muy bien a [Em] dónde\nBuscando un taxi que nos [C] lleve\nA cualquier sitio que se es[G]conda\n\n[G] Me dijiste al oído: [D] quédate un ratito más\n[Em] Que la noche se acaba [C] y la magia se nos [D] va\n\n## Coro\n[G] Y si no nos queda [D] tiempo\nPara volver a empa[Em]tar\nPrincesas de barrio que [C] bajan al centro\nA buscarse la [G] vida, a bailar con el [D] viento\nPrincesas sin reino que [Em] saben perder\nY volver a empa[C]tar... [G]\n",
    "title": "Princesas",
    "artist": "Pereza",
    "key": "G",
    "capo": 0,
    "tempo": 130,
    "tags": [
      "rock",
      "pop",
      "español",
      "2000s"
    ]
  },
  {
    "id": "rayando-el-sol",
    "file": "canciones/rayando-el-sol.md",
    "content": "---\ntitle: \"Rayando el Sol\"\nartist: \"Maná\"\nkey: \"G\"\ncapo: 0\ntempo: 88\ntags: [\"rock\", \"pop\", \"latino\", \"balada\", \"clásico\", \"fácil\"]\n---\n\n## Intro\n[G] [D] [Em] [C]\n[G] [D] [Em] [C]\n\n## Verso 1\n[G] Rayando el sol [D]\n[Em] Rayando por ti [C]\n[G] Esta noche loca [D] me desespero\n[Em] Porque no estás aquí [C]\n\n[G] Te busco en la luna [D]\n[Em] Te busco en el mar [C]\n[G] Y no encuentro rastro [D] de tus pasos\n[Em] Me voy a ahogar [C]\n\n## Coro\n[G] Rayando el sol, [D] ¡oh eh!\nDesespera[Em]ción\nEs más fácil lle[C]gar al sol que a tu cora[G]zón\nMe muero por [D] ti, ¡oh eh!\nVivir sin [Em] ti\nY no aguanto un se[C]gundo más sin tu ca[G]lor [D] [Em] [C]\n\n## Verso 2\n[G] A paso lento [D]\n[Em] Se va el dolor [C]\n[G] Pero me queda una herida abierta [D]\n[Em] En el corazón [C]\n\n## Coro\n[G] Rayando el sol, [D] ¡oh eh!\nDesespera[Em]ción\nEs más fácil lle[C]gar al sol que a tu cora[G]zón\nMe muero por [D] ti, ¡oh eh!\nVivir sin [Em] ti\nY no aguanto un se[C]gundo más sin tu ca[G]lor... [D] [Em] [C] [G]\n",
    "title": "Rayando el Sol",
    "artist": "Maná",
    "key": "G",
    "capo": 0,
    "tempo": 88,
    "tags": [
      "rock",
      "pop",
      "latino",
      "balada",
      "clásico",
      "fácil"
    ]
  },
  {
    "id": "sin-documentos",
    "file": "canciones/sin-documentos.md",
    "content": "---\ntitle: \"Sin Documentos\"\nartist: \"Los Rodríguez\"\nkey: \"Am\"\ncapo: 0\ntempo: 125\ntags: [\"rock\", \"español\", \"argentino\", \"clásico\", \"rumba\"]\n---\n\n## Intro\n[Am] [Dm] [E7] [Am]\n[Am] [Dm] [E7] [Am]\n\n## Verso 1\n[Am] Déjame atravesar el viento [Dm] sin documentos\n[G] Que para viajar muy lejos no hace [C] falta una maleta [E7]\n[Am] Agarra mi mano fuerte, salta a[Dm]dentro del pozo\n[G] Que al fondo de la noche hay un camino [C] luminoso [E7]\n\n## Coro\n[Am] Porque no quiero pasar un solo día sin [Dm] verte\n[G] Porque no quiero vivir una hora sin [C] quererte [E7]\n[Am] Dame un poco de tu amor que me estoy muriendo de [Dm] frío\n[E7] Dame un poco de calor para este corazón [Am] mío\n\n## Verso 2\n[Am] No me digas que no tienes tiempo para [Dm] quererme\n[G] Que el tiempo es un tren que pasa y no [C] vuelve a detenerse [E7]\n[Am] Súbete a mi tren de besos, vamos a [Dm] darnos la vuelta\n[G] Que la vida es una fiesta si la puerta [C] está abierta [E7]\n\n## Coro\n[Am] Porque no quiero pasar un solo día sin [Dm] verte\n[G] Porque no quiero vivir una hora sin [C] quererte [E7]\n[Am] Dame un poco de tu amor que me estoy muriendo de [Dm] frío\n[E7] Dame un poco de calor para este corazón [Am] mío\n",
    "title": "Sin Documentos",
    "artist": "Los Rodríguez",
    "key": "Am",
    "capo": 0,
    "tempo": 125,
    "tags": [
      "rock",
      "español",
      "argentino",
      "clásico",
      "rumba"
    ]
  },
  {
    "id": "soldadito-marinero",
    "file": "canciones/soldadito-marinero.md",
    "content": "---\ntitle: \"Soldadito Marinero\"\nartist: \"Fito & Fitipaldis\"\nkey: \"G\"\ncapo: 0\ntempo: 120\ntags: [\"rock\", \"español\", \"acústico\"]\n---\n\n## Intro\n[G] [D] [Em] [C] [G] [D] [C] [D]\n\n## Verso 1\n[G] Él era un chico rubio, casi [D] albino\n[Em] Ella una mujer de ojos [C] oscuros\n[G] El destino los cruzó en un [D] camino\n[C] Y el amor hizo el resto, [D] te lo aseguro\n\n[G] Él navegaba por todos los [D] mares\n[Em] Ella lo esperaba en el [C] puerto\n[G] Olvidándose de todos sus [D] pesares\n[C] Cuando él regresaba con [D] el viento\n\n## Coro\n[G] Soldadito mari[D]nero conociste a una si[Em]rena\nDe esas que dicen te [C] quiero si ven la cartera [G] llena\nEscogiste a la más [D] guapa y a la menos [Em] buena\nSin saber cómo te [C] ha clavado su espada en el [G] corazón [D]\nEn el corazón... [C] [D]\n\n## Solo\n[G] [D] [Em] [C] [G] [D] [C] [D]\n",
    "title": "Soldadito Marinero",
    "artist": "Fito & Fitipaldis",
    "key": "G",
    "capo": 0,
    "tempo": 120,
    "tags": [
      "rock",
      "español",
      "acústico"
    ]
  },
  {
    "id": "stand-by-me",
    "file": "canciones/stand-by-me.md",
    "content": "---\ntitle: \"Stand By Me\"\nartist: \"Ben E. King\"\nkey: \"A\"\ncapo: 2\ntempo: 118\ntags: [\"classic\", \"soul\", \"english\"]\n---\n\n## Intro\n[G] [Em] [C] [D] [G]\n\n## Verse 1\nWhen the [G] night has come\n[Em] And the land is dark\nAnd the [C] moon is the [D] only light we'll [G] see\nNo, I [G] won't be afraid\nOh, I [Em] won't be afraid\nJust as [C] long as you [D] stand, stand by [G] me\n\n## Chorus\nSo darling, darling, [G] stand by me\nOh, [Em] stand by me\nOh, [C] stand, [D] stand by me\n[G] Stand by me\n\n## Verse 2\nIf the [G] sky that we look upon\n[Em] Should tumble and fall\nOr the [C] mountain should [D] crumble to the [G] sea\nI won't [G] cry, I won't cry\nNo, I [Em] won't shed a tear\nJust as [C] long as you [D] stand, stand by [G] me\n\n## Chorus\nAnd darling, darling, [G] stand by me\nOh, [Em] stand by me\nOh, [C] stand now, [D] stand by me\n[G] Stand by me\n",
    "title": "Stand By Me",
    "artist": "Ben E. King",
    "key": "A",
    "capo": 2,
    "tempo": 118,
    "tags": [
      "classic",
      "soul",
      "english"
    ]
  },
  {
    "id": "sweet-home-alabama",
    "file": "canciones/sweet-home-alabama.md",
    "content": "---\ntitle: \"Sweet Home Alabama\"\nartist: \"Lynyrd Skynyrd\"\nkey: \"D\"\ncapo: 0\ntempo: 98\ntags: [\"rock\", \"southern\", \"70s\", \"classic\", \"fácil\"]\n---\n\n// El legendario riff de 3 acordes: Re - Do - Sol (D - C - G)\n\n## Intro\n[D] [C] [G]\n[D] [C] [G]\n[D] [C] [G]\n[D] [C] [G]\n\n## Verso 1\n[D] Big wheels [C] keep on [G] turning\n[D] Carry me [C] home to see my [G] kin\n[D] Singing [C] songs about the [G] Southland\n[D] I miss [C] Alabamy once [G] again and I think it's a sin, yes\n\n## Coro\n[D] Sweet [C] home [G] Alabama\n[D] Where the [C] skies are so [G] blue\n[D] Sweet [C] home [G] Alabama\n[D] Lord, I'm [C] coming home to [G] you\n\n## Verso 2\n[D] In Birmin[C]gham they love the [G] Governor (boo-boo-boo)\n[D] Now we all [C] did what we could [G] do\n[D] Now Water[C]gate does not [G] bother me\n[D] Does your [C] conscience bother [G] you? Tell the truth!\n\n## Coro\n[D] Sweet [C] home [G] Alabama\n[D] Where the [C] skies are so [G] blue\n[D] Sweet [C] home [G] Alabama\n[D] Lord, I'm [C] coming home to [G] you\nHere I come, Alabama! [D] [C] [G]\n",
    "title": "Sweet Home Alabama",
    "artist": "Lynyrd Skynyrd",
    "key": "D",
    "capo": 0,
    "tempo": 98,
    "tags": [
      "rock",
      "southern",
      "70s",
      "classic",
      "fácil"
    ]
  },
  {
    "id": "tu-calorro",
    "file": "canciones/tu-calorro.md",
    "content": "---\ntitle: \"Tu Calorro\"\nartist: \"Estopa\"\nkey: \"Am\"\ncapo: 2\ntempo: 125\ntags: [\"rumba\", \"rock\", \"español\", \"clásico\"]\n---\n\n// Tocar con ritmo de rumba catalana\n\n## Intro\n[Am] [Dm] [G] [C] [E]\n[Am] [Dm] [G] [C] [E]\n\n## Verso 1\n[Am] Cada mañana veo tu [E] imagen al despertar\n[Am] Y me pongo a pensar si algún [E] día te podré besar\n[Am] Y es que me pongo tan [Dm] calorro cuando te veo pa[G]sar\nQue se me suben las [C] babas y no puedo respi[E]rar\n\n[Am] Y si supieras lo que [E] siento por dentro\n[Am] Cuando te veo moverte [E] lenta como el viento\n[Am] Te daría mi vida y [Dm] todo lo que tengo\n[G] Y nos iríamos juntos a [C] dar un buen paseo [E]\n\n## Coro\n[Am] Porque tú eres mi calorro, [Dm] mi calorro de verdad\n[G] La que me alegra los días [C] y me quita la sole[E]dad\n[Am] Porque tú eres mi calorro, [Dm] mi calorro sin igual\n[G] Con esa mirada tuya [C] que me tiene encandila[E]o\n\n## Puente\n[Am] [Dm] [G] [C] [E]\n[Am] [Dm] [G] [C] [E]\n\n## Verso 2\n[Am] Ya no duermo por las [E] noches pensando en tu piel\n[Am] Y en lo dulce que sería [E] probar de tu miel\n[Am] Me vuelves tan majara, [Dm] me vuelves tan loco\n[G] Que cuando no te miro [C] siento que me desmo[E]rono\n",
    "title": "Tu Calorro",
    "artist": "Estopa",
    "key": "Am",
    "capo": 2,
    "tempo": 125,
    "tags": [
      "rumba",
      "rock",
      "español",
      "clásico"
    ]
  },
  {
    "id": "turnedo",
    "file": "canciones/turnedo.md",
    "content": "---\ntitle: \"Turnedo\"\nartist: \"Iván Ferreiro\"\nkey: \"C\"\ncapo: 0\ntempo: 120\ntags: [\"indie\", \"pop\", \"español\", \"himno\"]\n---\n\n## Intro\n[C] [G] [Am] [F]\n[C] [G] [Am] [F]\n\n## Verso 1\n[C] Desde aquí, desde mi casa\n[G] Veo la playa vacía\n[Am] Ya se van los sentimientos\n[F] Que ocuparon todo el día\n\n[C] He dejado que el silencio\n[G] Se acomode en mi salón\n[Am] Y he apagado las alarmas\n[F] Que asustaban mi razón\n\n## Coro\n[C] Hoy te vas a quedar a dor[G]mir\nAunque no tengamos [Am] camas\nDormiremos en el [F] suelo\nO colgaremos de las [C] ramas\n\n[C] Y si al despertar se nos [G] va\nLa cordura por la es[Am]quina\nBrindaremos con cer[F]veza\nY reiremos en la co[C]cina [G] [Am] [F]\n\n## Verso 2\n[C] Me da igual lo que nos digan\n[G] Los que miran sin entender\n[Am] Que la vida no es un plan\n[F] Es un salto sin red\n\n## Coro\n[C] Hoy te vas a quedar a dor[G]mir\nAunque no tengamos [Am] camas\nDormiremos en el [F] suelo\nO colgaremos de las [C] ramas\n\n[C] Y si al despertar se nos [G] va\nLa cordura por la es[Am]quina\nBrindaremos con cer[F]veza\nY reiremos en la co[C]cina... [G] [Am] [F] [C]\n",
    "title": "Turnedo",
    "artist": "Iván Ferreiro",
    "key": "C",
    "capo": 0,
    "tempo": 120,
    "tags": [
      "indie",
      "pop",
      "español",
      "himno"
    ]
  },
  {
    "id": "twist-and-shout",
    "file": "canciones/twist-and-shout.md",
    "content": "---\ntitle: \"Twist and Shout\"\nartist: \"The Beatles\"\nkey: \"D\"\ncapo: 0\ntempo: 124\ntags: [\"rock\", \"60s\", \"classic\", \"fácil\", \"fiesta\"]\n---\n\n// Tres acordes eternos de rock and roll: D - G - A\n\n## Intro\n[D] [G] [A]\n[D] [G] [A]\n\n## Verso 1\nWell, [D] shake it up, [G] baby, now ([A] shake it up, baby)\n[D] Twist and [G] shout ([A] twist and shout)\nC'mon, [D] c'mon, c'mon, c'mon, [G] baby, now ([A] c'mon, baby)\nCome on and [D] work it on [G] out ([A] work it on out)\n\n## Verso 2\nWell, [D] work it on [G] out, honey ([A] work it on out)\nYou know you [D] look so [G] good ([A] look so good)\nYou know you [D] got me [G] goin' now ([A] got me goin')\nJust like I [D] knew you [G] would ([A] like I knew you would)\n\n## Coro\nWell, [D] shake it up, [G] baby, now ([A] shake it up, baby)\n[D] Twist and [G] shout ([A] twist and shout)\nC'mon, [D] c'mon, c'mon, c'mon, [G] baby, now ([A] c'mon, baby)\nCome on and [D] work it on [G] out ([A] work it on out)\n\n## Puente (Ahhh... Ahhh...)\n[A] Ah... ah... [A7] ah... ah... [A] WAAAAAH!\n\n## Coro Final\nWell, [D] shake it up, [G] baby, now ([A] shake it up, baby)\n[D] Twist and [G] shout ([A] twist and shout)\nC'mon, [D] c'mon, c'mon, c'mon, [G] baby, now ([A] c'mon, baby)\nCome on and [D] work it on [G] out ([A] work it on out)\n[D] Shake it, shake it, [G] shake it, baby, [A] now\n[D] Shake it, shake it, [G] shake it, baby, [A] now\n[D] Shake it, shake it, [G] shake it, baby, [A] now... [D]\n",
    "title": "Twist and Shout",
    "artist": "The Beatles",
    "key": "D",
    "capo": 0,
    "tempo": 124,
    "tags": [
      "rock",
      "60s",
      "classic",
      "fácil",
      "fiesta"
    ]
  },
  {
    "id": "volando-voy",
    "file": "canciones/volando-voy.md",
    "content": "---\ntitle: \"Volando Voy\"\nartist: \"Camarón de la Isla\"\nkey: \"A\"\ncapo: 0\ntempo: 120\ntags: [\"flamenco\", \"rumba\", \"español\", \"clásico\", \"fácil\"]\n---\n\n// Himno de la rumba: sólo alterna entre La y Mi (A y E)\n\n## Intro\n[A] [E] [A] [E]\n[A] [E] [A] [E]\n\n## Coro\n[A] Volando voy, [E] volando vengo\n[A] Volando voy, [E] volando vengo\n[A] Por el camino [E] yo me entretengo\n[A] Por el camino [E] yo me entretengo\n\n## Verso 1\n[A] Enamora'o de la vida, aunque a veces me [E] duela\n[A] Enamora'o de la vida, aunque a veces me [E] duela\n[A] Si me quitan la luna, yo me busco una es[E]trella\n[A] Si me quitan la luna, yo me busco una es[E]trella\n\n## Coro\n[A] Volando voy, [E] volando vengo\n[A] Volando voy, [E] volando vengo\n[A] Por el camino [E] yo me entretengo\n[A] Por el camino [E] yo me entretengo\n\n## Verso 2\n[A] Señores, vengan a ver cómo baila esta [E] niña\n[A] Señores, vengan a ver cómo baila esta [E] niña\n[A] Que parece un velero navegando en la [E] orilla\n[A] Que parece un velero navegando en la [E] orilla\n\n## Coro\n[A] Volando voy, [E] volando vengo\n[A] Volando voy, [E] volando vengo\n[A] Por el camino [E] yo me entretengo\n[A] Por el camino [E] yo me entretengo... [A]\n",
    "title": "Volando Voy",
    "artist": "Camarón de la Isla",
    "key": "A",
    "capo": 0,
    "tempo": 120,
    "tags": [
      "flamenco",
      "rumba",
      "español",
      "clásico",
      "fácil"
    ]
  },
  {
    "id": "wish-you-were-here",
    "file": "canciones/wish-you-were-here.md",
    "content": "---\ntitle: \"Wish You Were Here\"\nartist: \"Pink Floyd\"\nkey: \"G\"\ncapo: 0\ntempo: 62\ntags: [\"rock\", \"70s\", \"classic\", \"balada\", \"acústico\"]\n---\n\n## Intro\n[Em7] [G] [Em7] [G]\n[Em7] [A7sus4] [Em7] [A7sus4] [G]\n\n## Verso 1\n[C] So, so you think you can [D] tell\nHeaven from [Am] hell, blue skies from [G] pain?\nCan you tell a green [D] field from a cold steel [C] rail?\nA smile from a [Am] veil? Do you think you can [G] tell?\n\n## Verso 2\nDid they get you to [C] trade your heroes for [D] ghosts?\nHot ashes for [Am] trees? Hot air for a [G] cool breeze?\nCold comfort for [D] change? Did you ex[C]change\nA walk-on part in the [Am] war for a lead role in a [G] cage?\n\n## Solo\n[Em7] [G] [Em7] [G]\n[Em7] [A7sus4] [Em7] [A7sus4] [G]\n\n## Coro\n[C] How I wish, how I wish you were [D] here\nWe're just [Am] two lost souls swimming in a fish bowl [G]\nYear after year [D]\nRunning over the same old [C] ground, what have we found?\nThe same old [Am] fears, wish you were [G] here\n\n## Outro\n[Em7] [G] [Em7] [G]\n[Em7] [A7sus4] [Em7] [A7sus4] [G]\n",
    "title": "Wish You Were Here",
    "artist": "Pink Floyd",
    "key": "G",
    "capo": 0,
    "tempo": 62,
    "tags": [
      "rock",
      "70s",
      "classic",
      "balada",
      "acústico"
    ]
  },
  {
    "id": "wonderwall",
    "file": "canciones/wonderwall.md",
    "content": "---\ntitle: \"Wonderwall\"\nartist: \"Oasis\"\nkey: \"Em\"\ncapo: 2\ntempo: 87\ntags: [\"rock\", \"90s\", \"britpop\", \"fácil\"]\n---\n\n// Cejilla en el 2º traste. Mantén el 3er y 4º dedo fijos en las cuerdas 1 y 2 traste 3\n\n## Intro\n[Em7] [G] [Dsus4] [A7sus4]\n[Em7] [G] [Dsus4] [A7sus4]\n\n## Verso 1\n[Em7] Today is gonna be the day that they're [G] gonna throw it back to you\n[Dsus4] By now you should've somehow realized [A7sus4] what you gotta do\n[Em7] I don't believe that anybody [G] feels the way I do\nAbout you [Dsus4] now [A7sus4]\n\n## Verso 2\n[Em7] Backbeat, the word is on the street that the [G] fire in your heart is out\n[Dsus4] I'm sure you've heard it all before, but you [A7sus4] never really had a doubt\n[Em7] I don't believe that anybody [G] feels the way I do\nAbout you [Dsus4] now [A7sus4]\n\n## Pre-Coro\nAnd [C] all the roads we [D] have to walk are [Em7] winding\nAnd [C] all the lights that [D] lead us there are [Em7] blinding\n[C] There are many things that [D] I would like to [G] say to [D/F#] you\nBut I [Em7] don't know [A7sus4] how\n\n## Coro\nBecause [C] maybe [Em7] [G]\nYou're gonna be the one that [Em7] saves me [C] [Em7]\nAnd [G] after all [Em7]\nYou're my [C] wonder[Em7]wall [G] [Em7]\n",
    "title": "Wonderwall",
    "artist": "Oasis",
    "key": "Em",
    "capo": 2,
    "tempo": 87,
    "tags": [
      "rock",
      "90s",
      "britpop",
      "fácil"
    ]
  },
  {
    "id": "yellow",
    "file": "canciones/yellow.md",
    "content": "---\ntitle: \"Yellow\"\nartist: \"Coldplay\"\nkey: \"G\"\ncapo: 2\ntempo: 88\ntags: [\"pop\", \"rock\", \"2000s\", \"balada\"]\n---\n\n// Tocar con Cejilla en el traste 2 para el tono original\n\n## Intro\n[G] [D] [C] [G]\n\n## Verso 1\n[G] Look at the stars\nLook how they shine for [D] you\nAnd everything you [C] do\nYeah, they were all yellow [G]\n\n[G] I came along\nI wrote a song for [D] you\nAnd all the things you [C] do\nAnd it was called Yellow [G]\n\n[G] So then I took my [D] turn\nOh, what a thing to've [C] done\nAnd it was all yellow [G]\n\n## Coro\n[C] Your skin, oh yeah, [Em] your skin and [D] bones\n[C] Turn into [Em] something [D] beautiful\n[C] You know, [Em] you know I [D] love you so [C]\nYou know I love you so\n\n## Verso 2\n[G] I swam across\nI jumped across for [D] you\nOh, what a thing to [C] do\n'Cause you were all yellow [G]\n\n[G] I drew a line\nI drew a line for [D] you\nOh, what a thing to [C] do\nAnd it was all yellow [G]\n\n## Coro\n[C] Your skin, oh yeah, [Em] your skin and [D] bones\n[C] Turn into [Em] something [D] beautiful\n[C] And you know, [Em] for you I'd [D] bleed myself dry [C]\nFor you I'd bleed myself dry\n\n## Outro\n[G] Look at the stars\nLook how they shine for [D] you\nAnd all the things that you [C] do... [G]\n",
    "title": "Yellow",
    "artist": "Coldplay",
    "key": "G",
    "capo": 2,
    "tempo": 88,
    "tags": [
      "pop",
      "rock",
      "2000s",
      "balada"
    ]
  },
  {
    "id": "yellow-submarine",
    "file": "canciones/yellow-submarine.md",
    "content": "---\ntitle: \"Yellow Submarine\"\nartist: \"The Beatles\"\nkey: \"G\"\ncapo: 0\ntempo: 110\ntags: [\"rock\", \"60s\", \"classic\", \"fácil\"]\n---\n\n## Verso 1\n[D] In the [C] town where [G] I was [Em] born\n[Am] Lived a [C] man who [D] sailed to sea\n[G] And he [D] told us [C] of his [G] life\n[Am] In the [C] land of [D] submarines\n\n## Verso 2\n[G] So we [D] sailed up [C] to the [G] sun\n[Am] Till we [C] found a sea of [D] green\n[G] And we [D] lived be[C]neath the [G] waves\n[Am] In our [C] yellow [D] submarine\n\n## Coro\n[G] We all live in a [D] yellow submarine\nYellow submarine, [G] yellow submarine\n[G] We all live in a [D] yellow submarine\nYellow submarine, [G] yellow submarine\n\n## Verso 3\n[G] And our [D] friends are [C] all on [G] board\n[Am] Many [C] more of them live [D] next door\n[G] And the [D] band be[C]gins to [G] play:\n[Am] [C] [D] (Música)\n\n## Coro\n[G] We all live in a [D] yellow submarine\nYellow submarine, [G] yellow submarine\n[G] We all live in a [D] yellow submarine\nYellow submarine, [G] yellow submarine\n",
    "title": "Yellow Submarine",
    "artist": "The Beatles",
    "key": "G",
    "capo": 0,
    "tempo": 110,
    "tags": [
      "rock",
      "60s",
      "classic",
      "fácil"
    ]
  },
  {
    "id": "zombie",
    "file": "canciones/zombie.md",
    "content": "---\ntitle: \"Zombie\"\nartist: \"The Cranberries\"\nkey: \"Em\"\ncapo: 0\ntempo: 84\ntags: [\"rock\", \"90s\", \"grunge\", \"fácil\", \"himno\"]\n---\n\n// Progresión de 4 acordes durante toda la canción: Em - C - G - D\n\n## Intro\n[Em] [C] [G] [D]\n[Em] [C] [G] [D]\n\n## Verso 1\n[Em] Another head hangs [C] lowly\n[G] Child is slowly [D] taken\n[Em] And the violence caused such [C] silence\n[G] Who are we mis[D]taken?\n\n## Pre-Coro\nBut you [Em] see, it's not me, it's not [C] my family\nIn your [G] head, in your head, they are [D] fighting\nWith their [Em] tanks and their bombs, and their [C] bombs and their guns\nIn your [G] head, in your head, they are [D] crying\n\n## Coro\nIn your [Em] head, in your [C] head\nZombie, [G] zombie, zombie-ie-[D]ie\nWhat's in your [Em] head, in your [C] head\nZombie, [G] zombie, zombie-ie-[D]ie, oh\n\n## Verso 2\n[Em] Another mother's [C] breakin'\n[G] Heart is taking [D] over\n[Em] When the violence causes [C] silence\n[G] We must be mis[D]taken\n\n## Pre-Coro\nIt's the [Em] same old theme since [C] nineteen-sixteen\nIn your [G] head, in your head, they're still [D] fighting\nWith their [Em] tanks and their bombs, and their [C] bombs and their guns\nIn your [G] head, in your head, they're still [D] dying\n\n## Coro\nIn your [Em] head, in your [C] head\nZombie, [G] zombie, zombie-ie-[D]ie\nWhat's in your [Em] head, in your [C] head\nZombie, [G] zombie, zombie-ie-[D]ie, oh... [Em]\n",
    "title": "Zombie",
    "artist": "The Cranberries",
    "key": "Em",
    "capo": 0,
    "tempo": 84,
    "tags": [
      "rock",
      "90s",
      "grunge",
      "fácil",
      "himno"
    ]
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
    sidebarOverlay: document.getElementById('sidebar-overlay'),
    btnCloseSidebar: document.getElementById('btn-close-sidebar'),
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

  function isMobile() {
    return window.innerWidth <= 800;
  }

  function openSidebar() {
    if (isMobile()) {
      elements.sidebar.classList.add('open');
      if (elements.sidebarOverlay) {
        elements.sidebarOverlay.classList.add('active');
      }
      document.body.style.overflow = 'hidden';
    } else {
      elements.sidebar.classList.remove('collapsed');
      localStorage.setItem('cancionero_sidebar_collapsed', '0');
    }
  }

  function closeSidebar() {
    if (isMobile()) {
      elements.sidebar.classList.remove('open');
      if (elements.sidebarOverlay) {
        elements.sidebarOverlay.classList.remove('active');
      }
      document.body.style.overflow = '';
    } else {
      elements.sidebar.classList.add('collapsed');
      localStorage.setItem('cancionero_sidebar_collapsed', '1');
    }
  }

  function toggleSidebar() {
    if (isMobile()) {
      if (elements.sidebar.classList.contains('open')) {
        closeSidebar();
      } else {
        openSidebar();
      }
    } else {
      if (elements.sidebar.classList.contains('collapsed')) {
        openSidebar();
      } else {
        closeSidebar();
      }
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
        closeSidebar();
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

    elements.btnToggleSidebar.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleSidebar();
    });

    if (elements.btnCloseSidebar) {
      elements.btnCloseSidebar.addEventListener('click', (e) => {
        e.stopPropagation();
        closeSidebar();
      });
    }

    if (elements.sidebarOverlay) {
      elements.sidebarOverlay.addEventListener('click', () => {
        closeSidebar();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeSidebar();
        closeEditor();
        elements.modalSettings.classList.add('hidden');
      }
    });

    // Restaurar estado de barra colapsada en escritorio si el usuario la cerró
    if (!isMobile()) {
      const wasCollapsed = localStorage.getItem('cancionero_sidebar_collapsed') === '1';
      if (wasCollapsed) {
        elements.sidebar.classList.add('collapsed');
      }
    }

    // Gestionar cambios de tamaño de pantalla (móvil <-> escritorio)
    window.addEventListener('resize', () => {
      if (!isMobile()) {
        if (elements.sidebarOverlay) elements.sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
        const wasCollapsed = localStorage.getItem('cancionero_sidebar_collapsed') === '1';
        elements.sidebar.classList.toggle('collapsed', wasCollapsed);
        elements.sidebar.classList.remove('open');
      } else {
        elements.sidebar.classList.remove('collapsed');
      }
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

  // Arranque inicial garantizado exactamente una vez
  let appStarted = false;
  function startApp() {
    if (appStarted) return;
    appStarted = true;
    initTheme();
    initEvents();
    loadSongs();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startApp);
  } else {
    startApp();
  }
})();
