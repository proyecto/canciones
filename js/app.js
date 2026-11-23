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
    "id": "16-anitos",
    "title": "16 añitos",
    "artist": "Dani Martín",
    "key": "C",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop rock",
      "español",
      "2010s"
    ],
    "file": "canciones/16-anitos.md",
    "content": "---\ntitle: \"16 añitos\"\nartist: \"Dani Martín\"\nkey: \"C\"\ncapo: 0\ntempo: 100\ntags: [\"pop rock\", \"español\", \"2010s\"]\n---\n\n## Intro\n[C] [G]/[Am] [Em] (2) [F] [G]-7 (BIS[)//][D] A/ [Bm] [G] (2) [G] A -7\n\n16 añitos fiera, me creía el rey del mundo\nCon mi lema por bandera\nLo que digan yo no escucho\nNo había nadie que pudiera lograr\nQue cambiara un poco el rumbo\nCon mi idea la primera\nY que no agobiaran mucho\n\n[C] [G] [F] [G] (2) [Am]// [D] A [G] A (2) [Bm]\nY así fue, me revelé contra todo\nHasta el sol viviendo entonces\nUna distorsión\nY me enfadé con el mundo\nMalditos complejos\nQue siempre sacan lo peor, pensé\n“en la fuerza estará lo mejor”\nMe disfracé de uno que no era yo\nBuscando esa firmeza\nLlegué a un lugar negro\nPensé que eso era el valor\n\nY sufrí de tal manera\nPor dejar de ser quien era\nPor pensar que ser cobarde\nEra ser lo que creyera\nLos valientes son los\nQue son de verdad\nY los fuertes ni sus guerras\nLos valientes los que saben llorar\nCon la cara descubierta\n\n[C] [G] [F] [G] (2) [Am]// [D] A [G] A (2) [Bm]\nY así fue, me revelé contra todo\nHasta el sol viviendo entonces\nUna distorsión\nY me enfadé con el mundo\nMalditos complejos\nQue siempre sacan lo peor, pensé\n“en la fuerza estará lo mejor”\nMe disfracé de uno que no era yo\nBuscando esa firmeza\nLlegué a un lugar negro\nPensé que eso era el valor\n\nEl valor, y es mirarme ahora\nA la cara ¡y ser quien soy!\n\n[G] [F]\nY soñar, y vivir, y olvidar el rencor,\nY cantar, y reír y sentir sólo amor\n"
  },
  {
    "id": "19-dias-y-500-noches",
    "title": "19 Días y 500 Noches",
    "artist": "Joaquín Sabina",
    "key": "E",
    "capo": 0,
    "tempo": 110,
    "tags": [
      "rumba",
      "autor",
      "español",
      "90s"
    ],
    "file": "canciones/19-dias-y-500-noches.md",
    "content": "---\ntitle: \"19 Días y 500 Noches\"\nartist: \"Joaquín Sabina\"\nkey: \"E\"\ncapo: 0\ntempo: 110\ntags: [\"rumba\", \"autor\", \"español\", \"90s\"]\n---\n\n## Intro\n[E] [F#m] [B7] [E]\n\n## Verso 1\n[E] Lo nuestro duró, lo que duran dos peces de hielo\nEn un [F#m] whisky on the rocks,\n[B7] En vez de fingir, o estrellarme una copa de celos,\nLe [E] dio por reír.\n[E] De pronto me vi, como un perro de nadie\nLadrando a las [E7] puertas del [A] cielo, [Am]\nMe de[E]jó un neceser con agravios,\nLa miel en los [B7] labios y escarcha en el [E] pelo.\n\n## Verso 2\n[E] Tenían razón, mis amantes en eso de que antes,\nEl [F#m] malo era yo,\n[B7] Con una excepción: esta vez, yo quería quererla querer\nY [E] ella no.\n[E] Así que se fue, me dejó el corazón en los huesos\nY [E7] yo de ro[A]dillas, [Am]\nDesde el [E] taxi, y haciendo un exceso,\nMe tiró dos [B7] besos, uno por me[E]jilla.\n\n## Coro\n[A] Y regresé a la maldición del cajón sin su [E] ropa,\nA la perdi[B7]ción de los bares de [E] copas,\nA las ceni[A]cientas de saldo y es[E]quina,\nY por esas [B7] ventas del fino [E] Laina,\nPagando las [A] cuentas de gente sin [E] alma\nQue pierde la [F#m] calma con la coca[B7]ína,\nVolviéndome [A] loco, derrochando la bolsa y la [E] vida,\nLa fui poco a [B7] poco, dando por per[E]dida.\n\n## Verso 3\n[E] Y eso que yo, para no agobiar con flores a María,\nPara no ase[F#m]diarla con mi antología de sábanas frías y alcobas vacías,\n[B7] Para no comprarla con bisutería, ni ser el fantoche que va en romería,\nCon la cofra[E]día del Santo Reproche,\nTanto la que[A]ría, que tardé en aprender a olvi[E]darla,\nDiecinueve [B7] días... Y quinientas [E] noches.\n\n## Verso 4\n[E] Dijo: hola y adiós, y el portazo sonó como un signo de interroga[F#m]ción,\nSospecho que a[B7]sí, se vengaba a través del olvido, Cupido de [E] mí.\nNo, no pido perdón, ¿para qué? si me va a perdonar, porque ya no le im[F#m]porta,\nSiempre tuvo la [B7] frente muy alta, la lengua muy larga, y la falda muy [E] corta.\n\n## Verso 5\n[E] Me abandonó como se abandonan los zapatos [F#m] viejos,\nDestrozó el cris[B7]tal de mis gafas de lejos,\nSacó del es[E]pejo su vivo retrato,\nY fui tan to[E7]rero por los calle[A]jones [Am]\nDel juego y el [E] vino, que ayer el portero\nMe echó del ca[B7]sino de Torrelodones. [E]\nQué pena tan [A] grande, negaría el Santo Sacra[E]mento\nEn el mismo mo[B7]mento que ella me lo [E] mande.\n\n## Coro Final\n[A] Y regresé a la maldición del cajón sin su [E] ropa,\nA la perdi[B7]ción de los bares de [E] copas,\nA las ceni[A]cientas de saldo y es[E]quina,\nY por esas [B7] ventas del fino [E] Laina...\nTanto la que[A]ría, que tardé en aprender a olvi[E]darla,\nDiecinueve [B7] días... Y quinientas [E] noches.\n"
  },
  {
    "id": "a-contracorriente",
    "title": "A contracorriente",
    "artist": "David Bisbal & Álvaro Soler",
    "key": "Em",
    "capo": 1,
    "tempo": 100,
    "tags": [
      "pop latino",
      "alegre",
      "español"
    ],
    "file": "canciones/a-contracorriente.md",
    "content": "---\ntitle: \"A contracorriente\"\nartist: \"David Bisbal & Álvaro Soler\"\nkey: \"Em\"\ncapo: 1\ntempo: 100\ntags: [\"pop latino\", \"alegre\", \"español\"]\n---\n\n## Intro\n[#1] [Em] [D] [C] (2)\n\nUh, uh-uh… Persiguiendo el sol\n\n[Em] [D] [C] [D] /[Em] [D] [C] [B7]\nVoy contracorriente, al andar, pero no me pueden, cansar\nLevantando el polvo, para atrás, sé que la batalla_acaba de empezar\n-Suenan los tambores del alma, llorando las luces de la_alarma\nLlevo mi bandera, a jugar… la batalla acaba de empezar\n\n[Em] [D] [C] (4)\nSoy caminante en camisa tejana, sigo por el rumbo, voy persiguiendo al sol\nSubo el río, a contracorriente, nadie me detiene, voy persiguiendo al sol\n\n[Em] [D] [C] [D] /[Em] [D] [C] [B7] [Em.] -[D] [C]\nA contracorriente, y aunque caiga la tormenta, yo nunca pierdo la fuerza\nEste es mi lugar, persiguiendo al sol\n-A contracorriente, y aunque caiga la tormenta, yo nunca pierdo la fuerza\nEste es mi lugar, persiguiendo, persiguiendo al sol, oh\n\nPor todos los que sueñan, con triunfar echando el miedo, pa fuera\nPor todos los que buscan, su lugar, sé que la batalla no acaba ya\nDicen que no puedo, que más da, yo sigo a mi aire a mí me da igual\nSoñando fuerte y además, mi batalla es la única que hay…\n\nSoy caminante en camisa tejana, sigo por el rumbo, voy persiguiendo al sol\nSubo el río, a contracorriente, nadie me detiene, voy persiguiendo al sol\nA contracorriente, y aunque caiga la tormenta, yo nunca pierdo la fuerza\nEste es mi lugar, persiguiendo al sol\n-A contracorriente, y aunque caiga la tormenta, yo nunca pierdo la fuerza\nEste es mi lugar, persiguiendo, persiguiendo al sol\n\nPero cuando me lloren las manos (Cuando me lloren las manos)\nEllas me dirán por donde ir (Me dirán, me dirán, yeah)\nDejaré mi huella en cada paso, oh, ellas me enseñarán a vivir\n\n[C] [D] [Em] (3) [C] [B7]\nA contracorriente la-la-ra-la-ra-la-la-ra…\n\nEste es mi lugar, persiguiendo al sol\nA contracorriente la-la-ra-la-ra-la-la-ra…\n\nEste es mi lugar, persiguiendo, persiguiendo al sol, la-la-ra-la-ra-la-la-ra…\nEste es mi lugar, persiguiendo, persiguiendo al sol\n"
  },
  {
    "id": "a-mi-manera-siempre-asi",
    "title": "A mi manera",
    "artist": "Siempre Así",
    "key": "G",
    "capo": 2,
    "tempo": 100,
    "tags": [
      "rumba",
      "español",
      "cover"
    ],
    "file": "canciones/a-mi-manera-siempre-asi.md",
    "content": "---\ntitle: \"A mi manera\"\nartist: \"Siempre Así\"\nkey: \"G\"\ncapo: 2\ntempo: 100\ntags: [\"rumba\", \"español\", \"cover\"]\n---\n\n## Intro\n[#2] [G] [Bm] [Dm] [E7]/ [Am] [Am7] [C] [G] // [G] [G7] [C] [Cm]/ [G] [D] [C] [G]\n\nEl fin, muy cerca está. Lo afrontaré serenamente.\nYa ves... yo he sido así... Te lo diré, sinceramente.\nViví la intensidad y no encontré jamás fronteras\nSi bien, todo ello fue, a mi manera.\n\n[G] [Bm] [Em] [E7]/ [Am] [Am7] [C] [G] // [G] [G7] [C] [Cm]/ [G] [D] [C] [G]\n-Jamás viví un amor que para mi fuera importante.\nTomé solo la flor y lo mejor de cada instante.\nViajé y disfruté, no sé si más que otro cualquiera.\nY así, logré seguir, a mi manera.\n\n[G] [G7] [C] [Am]/ [C] [D] [B7] [Em]/ [C] [D] [C] [G]\nTal vez lloré, tal vez reí, tal vez gané o tal vez perdí,\nY ahora sé que fui feliz, que si lloré, también amé\nY todo fue, puedo decir, a mi manera.\n\n[G] [Bm] [Em] [E7]/ [Am] [Am7] [C] [G] // [G] [G7] [C] [Cm]/ [G] [D] [C] [G]\nQuizá yo desprecié aquello que no comprendía.\nQuizá también dudé cuando mejor me divertía.\nY hoy sé que firme fui y que afronté ser como era.\nY así yo me sentí a mi manera.\n\n[G] [G7] [C] [Am]/ [C] [D] [B7] [Em]/ [C] [D] [C] [G]\nPorque sabrás, que un hombre al fin, conocerás, por su vivir\nno hay porque hablar ni que decir, ni hay que llorar, que hay que fingir\npuedo llegar hasta el final, a mi manera.\n\nTe estoy queriendo tanto\n"
  },
  {
    "id": "a-quien-le-importa",
    "title": "A quién le importa",
    "artist": "Alaska y Dinarama",
    "key": "Dm",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop",
      "synthpop",
      "80s",
      "español"
    ],
    "file": "canciones/a-quien-le-importa.md",
    "content": "---\ntitle: \"A quién le importa\"\nartist: \"Alaska y Dinarama\"\nkey: \"Dm\"\ncapo: 0\ntempo: 100\ntags: [\"pop\", \"synthpop\", \"80s\", \"español\"]\n---\n\n## Intro\n[Dm]\n\nSusurra a mis espaldas y a mí me importa un bledo\n\nQue más me da, si soy distinta a ellos, no soy de nadie, no tengo dueño\n\n[G] [C] [B7] [E7]\nYo sé que me critican, me consta que me odian\n\n[Am]\nLa envidia les corroe, mi vida les agobia\n\n[Dm]\n¿Por qué será? Yo no tengo la culpa, mi circunstancia les insulta.\n\n[G] [C] [B7] [E7]\n[Dm] [G] [C] [F] [Dm] [G.] [E7]\nMi destino es el que yo decido, el que yo elijo para mi\n\n¿A quién le importa lo que yo haga?\n\n[Am] [Dm]\n[G] [C]\n¿A quién le importa lo que yo diga?\n\nYo soy así, y así seguiré, nunca cambiaré\n\n[F] [B7] [E7]\nQuizá la culpa es mía, por no seguir la norma\nYa es demasiado tarde, para cambiar ahora\nMe mantendré, firme en mis convicciones, reforzaré mis posiciones\n\n[Am]/ [D]/ [G] [C]-[B7]-[E7]\nMi destino es el que yo decido, el que yo elijo para mí\n\n[Dm] [G] [C] [F] [Dm] [G.] [E7]\n"
  },
  {
    "id": "abre-la-puerta",
    "title": "Abre la puerta",
    "artist": "Triana",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rock andaluz",
      "psicodelia",
      "clásico"
    ],
    "file": "canciones/abre-la-puerta.md",
    "content": "---\ntitle: \"Abre la puerta\"\nartist: \"Triana\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"rock andaluz\", \"psicodelia\", \"clásico\"]\n---\n\n## Intro\n[Am] [G] [Am] (2)\n\nYo quise subir al cielo para ver\nY bajar hasta el infierno para comprender\nQué motivo es, que nos impide ver\nDentro de ti, dentro de ti, dentro de mí\n\n[Am] [G] [F] [G] [Am]\nAbre la puerta niña,\nQue el día va a comenzar\nSe marchan todos los sueños,\nQué pena da despertar.\nPor la mañana amanece,\nLa vida y una ilusión.\nDeseos que se retuercen\nMuy dentro del corazón.\n\nSoñaba que te quería,\nSoñaba que era verdad,\nQue los luceros tenían,\nMisterio para soñar,\nHay una fuente, niña,\nQue la llaman del amor\nDonde bailan los luceros\nY la luna con el sol\n\nAbre la puerta niña,\nY dale paso a la luz,\nMira que destello tiene,\nEsa nube con el sol,\nPor la mañana amanece,\nLa vida y una ilusión,\nDeseos que se retuercen,\nMuy dentro del corazón.\n\n-Hay una fuente, niña,\nQue la llaman del amor\nDonde bailan los luceros\nY la luna con el sol.\n"
  },
  {
    "id": "algo-se-muere-en-el-alma",
    "title": "Algo se muere en el alma",
    "artist": "Cantores de Híspalis",
    "key": "E",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "sevillana",
      "clásico",
      "popular"
    ],
    "file": "canciones/algo-se-muere-en-el-alma.md",
    "content": "---\ntitle: \"Algo se muere en el alma\"\nartist: \"Cantores de Híspalis\"\nkey: \"E\"\ncapo: 0\ntempo: 100\ntags: [\"sevillana\", \"clásico\", \"popular\"]\n---\n\n## Verso 1\nAlgo se muere en el alma, cuando un amigo se va\nY va dejando una huella que no se puede borrar\n\nNo te vayas todavía, no te vayas por favor\nNo te vayas todavía que hasta la guitarra mía\nLlora cuando dice adiós.\n\nUn pañuelo de silencio a la hora de partir\nPorque hay palabras que hieren y no se deben decir\nUn barco se hace pequeño cuando se aleja en el mar\nY cuando se va perdiendo que grande es la soledad\nEse vacío que deja, el amigo que se va.\nEs como un pozo sin fondo que no se vuelve a llenar.\n"
  },
  {
    "id": "all-my-loving",
    "title": "All My Loving",
    "artist": "The Beatles",
    "key": "Dm",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rock",
      "pop",
      "60s",
      "classic",
      "inglés"
    ],
    "file": "canciones/all-my-loving.md",
    "content": "---\ntitle: \"All My Loving\"\nartist: \"The Beatles\"\nkey: \"Dm\"\ncapo: 0\ntempo: 100\ntags: [\"rock\", \"pop\", \"60s\", \"classic\", \"inglés\"]\n---\n\n## Intro\n[Am(maj7)] 1000\n\n## Verso 1\n[Dm] [G] [C] [Am]/ [F] [Dm] [A#]-[G7]\nClose your eyes and I'll kiss you\nTomorrow I'll miss you\nRemember I'll always be true\n\n[Dm] [G] [C] [Am]/ [F] [G] [C]\nAnd then while I'm away\nI'll write home everyday\nAnd I'll send all my loving to you\n\n[Dm] [G] [C] [Am]/ [F] [Dm] [A#]-[G7]\nI'll pretend that I'm kissing\nThe lips I am missing\nAnd hope that my dreams will come true\n\n[Dm] [G] [C] [Am]/ [F] [G] [C]\nAnd then while I'm away\nI'll write home everyday\nAnd I'll send all my loving to you\n\n[Am] [Am(maj7)] [C] (2)\nAll my loving, I will send to you\nAll my loving, darling, I'll be true\n\n[Dm] [G] [C] [Am]/ [F] [Dm] [A#]-[G7]\nClose your eyes and I'll kiss you\nTomorrow I'll miss you\nRemember I'll always be true\n\n[Dm] [G] [C] [Am]/ [F] [G] [C]\nAnd then while I'm away\nI'll write home everyday\nAnd I'll send all my loving to you\n\n[Am] [Am(maj7)] [C] (2)/ [Am] [C] (2)\nAll my loving, I will send to you\nAll my loving, darling, I'll be true\nAll my loving, all my loving\nAll my loving, I will send to you.\n\n[Am] [D]/ [G] [Em]/ [C] ([Am] [F] [D7]/ [D] [G]) (2) [Em] [G](2)\n"
  },
  {
    "id": "alma-corazon-y-vida",
    "title": "Alma, corazón y vida",
    "artist": "Adrián Flores",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "vals peruano",
      "bolero",
      "clásico"
    ],
    "file": "canciones/alma-corazon-y-vida.md",
    "content": "---\ntitle: \"Alma, corazón y vida\"\nartist: \"Adrián Flores\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"vals peruano\", \"bolero\", \"clásico\"]\n---\n\n## Intro\n[Am] [G] [F] [E7]\n\nOye esta canción que lleva, alma, corazón y vida\nEstas tres cositas nada más te doy\nPorque no tengo fortuna, estas tres cosas te ofrezco\nAlma, corazón y vida y nada más\n\n[Dm] [Am] [E7] [Am] (2)\nAlma para conquistarte, corazón para quererte\nY vida para vivir junto a ti\n"
  },
  {
    "id": "alma-llanera",
    "title": "Alma llanera",
    "artist": "Pedro Elías Gutiérrez",
    "key": "E",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "joropo",
      "folklore",
      "venezolano"
    ],
    "file": "canciones/alma-llanera.md",
    "content": "---\ntitle: \"Alma llanera\"\nartist: \"Pedro Elías Gutiérrez\"\nkey: \"E\"\ncapo: 0\ntempo: 100\ntags: [\"joropo\", \"folklore\", \"venezolano\"]\n---\n\n## Intro\n[E] [Am] (2) [E] [A]/ [A]-[D]-[E] (BIS[)-][A] (a capela)[**] [D]_[E7] A [G]/ A [G] (2[)/] [G] [D] [Em] [D] [A7] [D] (bis)\n\nYo…Yo nací en esta ribera\nDel Arauca vibrador\n\n[D]-[G]-[A7]-[D]/ [A7] [D] (2) [A7] [D] [A7] [D]-[G]-[A7] [D]\nAmo, lloro, canto, sueño,\nCon claveles de pasión (2)\nPara ornar las rubias crines\nAl potro de mi amador*\nYo nací en una ribera\nDel Arauca vibrador\nSoy hermana de la espuma,\nDe las garzas, de las rosas\nY del sol.\n\n[D]_[E7] A [G]/ A [G] (2[)/] [G] [D] [Em] [D] [A7] [D]\nMe arrulló la viva diana*\nDe la brisa en el palmar\nY por eso tengo el alma,\nComo el alma primorosa\nY por eso tengo el alma,\nComo el alma primorosa del cristal\n\n[D]-[G]-[A7]-[D]/ [A7] [D] (2) [A7] [D] [A7] [D]-[G]-[A7]/[D]-[G]-[A7] [D]\nAmo, lloro, canto, sueño,\nCon claveles de pasión (2)\nPara ornar las rubias crines\nAl potro de mi amador*\nYo nací en una ribera\nDel Arauca vibrador\nSoy hermano de la espuma,\nDe las garzas, de las rosas\nY del sol, y del sol.\n\n```text\nhttps://corociudaddelospoetas.wordpress.com/2015/05/11/alma-llanera-una-zarzuela-y-un-joropo/\n```\n*libreto original:\n"
  },
  {
    "id": "amante-enamorado",
    "title": "Amante-enamorado",
    "artist": "Popurrí",
    "key": "F",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rumba",
      "popurrí",
      "flamenco"
    ],
    "file": "canciones/amante-enamorado.md",
    "content": "---\ntitle: \"Amante-enamorado\"\nartist: \"Popurrí\"\nkey: \"F\"\ncapo: 0\ntempo: 100\ntags: [\"rumba\", \"popurrí\", \"flamenco\"]\n---\n\n## Intro\n[F]\n\nAy que el traje de\n\nlos domingos,\n\n[E]\nTe lo pones to los días.\n\n[C] [Em] [F] [G]\nYo no quiero ser tu amante\nY yo no puedo serlo más\nYo no quiero ser tu amante\nY yo quiero ser algo más\n\n[G]_[Em] [C] [D] (2) -[G]\nEnamorao de ella,\nLoco perdío por ella\nY veo que su estrella\nDe mis manos se me va (bis)\n\nVuela, pensamiento mío,\nCorre, pensamiento corre,\nDile que mi luz se apaga,\nSiento que la necesito,\nQue venga, que me hace falta.\n"
  },
  {
    "id": "and-i-love-her",
    "title": "And I Love Her",
    "artist": "The Beatles",
    "key": "Dm",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rock",
      "balada",
      "60s",
      "classic",
      "inglés"
    ],
    "file": "canciones/and-i-love-her.md",
    "content": "---\ntitle: \"And I Love Her\"\nartist: \"The Beatles\"\nkey: \"Dm\"\ncapo: 0\ntempo: 100\ntags: [\"rock\", \"balada\", \"60s\", \"classic\", \"inglés\"]\n---\n\n## Intro\n[Dm] [Am] (3) [F] [G] [C] (2)\n\n## Verso 1\nI give her all my love, that’s all I do\nAnd if you saw my love, you’d love her too, I love her\nshe gives me everything, and tenderly,\nThe kiss my lover brings, she brings to me, and I love her\n\n[Am] [G] [Am] [Em] [Am] [Em] [G]\nA love like ours could never die\nAs long as I have you near me\n\nBright are the stars that shine, dark is the sky,    -la\nI know this love of mine will never die, and I love her\n"
  },
  {
    "id": "anos-80",
    "title": "Años 80",
    "artist": "Los Piratas",
    "key": "D",
    "capo": 0,
    "tempo": 124,
    "tags": [
      "indie",
      "rock",
      "español",
      "2000s"
    ],
    "file": "canciones/anos-80.md",
    "content": "---\ntitle: \"Años 80\"\nartist: \"Los Piratas\"\nkey: \"D\"\ncapo: 0\ntempo: 124\ntags: [\"indie\", \"rock\", \"español\", \"2000s\"]\n---\n\n## Intro\n[G] [F#m] [Em] (x2)\n[D] [Dmaj7] [Em] (x2)\n\n## Verso 1\n[D] Cuando me [Dmaj7] hiciste llamar no sospe[C]chaba,\n[D] Plasti[Dmaj7]lina con color, ropa inte[C]rior, recuerdos de allá [A] fuera,\n[D] Cómics de [Dmaj7] ciencia-ficción, vida inte[C]rior.\n\n## Pre-Coro\n[Bm] Y yo no quiero [Em] volver, [F#m]\n[Bm] No me repitas ja[Em]más que no sabes qué [Bm] hora es,\n¿Las siete y veinti[F#m]siete o no?\n[G] Ya terminé.\n\n## Coro\n[D] No te echaré de [Dmaj7] menos en sep[Em]tiembre, [A]\n[D] Verano muerto ve[Dmaj7]ré a las chicas pa[Em]sar, [A]\n[G] Será como a[F#m]quella canción de los [Em] años 80,\n[G] Seré como el [F#m] tipo que algún día [Em] fui. [A]\n\n## Verso 2\n[D] Bloody [Dmaj7] Marys en el bar, [C]\nUn déjà [A] vu, Matrix está cam[D]biando\nPor la confe[Dmaj7]sión brutal de tu re[C]lato.\n\n## Pre-Coro\n[Bm] Y yo no quiero [Em] volver, [F#m]\n[Bm] No me repitas ja[Em]más que no sabes qué [Bm] hora es,\n¿Las siete y veinti[F#m]siete o no?\n[G] Ya terminé.\n\n## Coro\n[D] No te echaré de [Dmaj7] menos en sep[Em]tiembre, [A]\n[D] Verano muerto ve[Dmaj7]ré a las chicas pa[Em]sar, [A]\n[G] Será como a[F#m]quella canción de los [Em] años 80,\n[G] Seré como el [F#m] tipo que algún día [Em] fui.\n\n## Outro\n[G] Será como a[F#m]quella canción de los [Em] años 80,\n[G] Seré como el [F#m] tipo que algún día [Em] fui... [D]\n"
  },
  {
    "id": "asi-es-mi-granada",
    "title": "Así es mi Granada",
    "artist": "Popular",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "copla",
      "andaluz",
      "popular"
    ],
    "file": "canciones/asi-es-mi-granada.md",
    "content": "---\ntitle: \"Así es mi Granada\"\nartist: \"Popular\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"copla\", \"andaluz\", \"popular\"]\n---\n\n## Intro\n[Am] [E] [Am]\n\n[INTRO:] [Am] [G] [F] [E] ([x] 4) [Am] [E] [Am] [E]\nde la vega de Motril.\n\nAl pie de Sierra Nevada,\n\n[INTRO] ([x] 4) [Am] [E] [Am] [E]\n[Am] [E] [Am] [G7]\nCármenes de verde y agua\n\nal pie del viejo Albaicín\n\n[C] [G7] [C]\n[Am] [E] [Am] [G7]\nse halla asentada Granada,\n\ny el Sacromonte cañí\n\nla de belleza sin fin.\n\n[F] [E]\ncon sus cantares y zambras\n\n[C] [G7] [C]\n[Am] [E] [Am]\nLa Virgen de las Angustias,\n\n[F] [E]\nson la ilusión y el vivir.\n\nla que habita en La Carreta,\n\n[A7] [Dm]\n[Am] [E] [Am]\nLa Alhambra mora y sultana,\n\n[Am]\nconsuela a los granadinos\n\n[A7] [Dm]\nla que admira el mundo entero.\n\n[E] [Am]\naliviándoles las penas.\n\nAy mi Granada gitana,\n\n[Am]\n[INTRO] ([x] 2) [Am] [E] [Am]\n[E] [Am]\nGranada, Granada mía,\n\neres tú lo que más quiero.\n\nla de hermosura repleta,\n\n[G] [G7] [C]\n[INTRO] ([x] 2) [Am] [E] [Am]\nGranada, Granada mía,\n\n[F] [E]\n[G] [G7] [C]\nluna y sol de Andalucía.\n\nla de hermosura repleta,\n\n[Am] [E] [Am]\n[F] [E]\nGranada, Granada mía,\n\nluna y sol de Andalucía.\n\n[A7] [Dm]\nque al llegar el mes de abril\n\n[Am] [E] [Am]\nGranada, Granada mía,\n\n[A7] [Dm]\nflorecen en tus vergeles\n\n[Am]\nque al llegar el mes de abril\n\n[E]\norgullosos los claveles\n\n[Am]\nflorecen en tus vergeles\n\n[E]\norgullosos los claveles\n\n[Am] [E] [Am]\nde la vega de Motril.\n"
  },
  {
    "id": "asi-estoy-yo-sin-ti",
    "title": "Así estoy yo sin ti",
    "artist": "Joaquín Sabina",
    "key": "G",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "canción de autor",
      "rock",
      "español"
    ],
    "file": "canciones/asi-estoy-yo-sin-ti.md",
    "content": "---\ntitle: \"Así estoy yo sin ti\"\nartist: \"Joaquín Sabina\"\nkey: \"G\"\ncapo: 0\ntempo: 100\ntags: [\"canción de autor\", \"rock\", \"español\"]\n---\n\n## Intro\n[G] [D] [Em]/[C] [D] [G]/[C] [D] [Em]/[C] [Am] [A7] [D]\n\nExtraño, como un pato en el Manzanares, torpe como un suicida sin vocación\nAbsurdo como un belga por soleares, vacío, como una isla sin Robinson\n\n[G] [D] [Em]/ [C] [D] [G]/ [B7] [Em]/ [C] [Am] [A7] [D]\nOscuro como un túnel sin tren expreso, negro como los ángeles de Machín\nFebril como la carta de amor de un preso, así estoy yo, así estoy yo sin ti\n\n[C] [D] [G]/ [B7] [Em] [D] [C]/ [Am] [C] [D] [_(]2)\nPerdido como un quinto en día de permiso\nComo un santo sin paraíso, como el ojo de un maniquí.\n-Huraño, como un dandi con lamparones,\nComo un barco sin polizones, así estoy yo sin ti\n\n[Am7] [C] [G] [D] [C]/ [G] [C](2) [G] [Am] [C]\nMás triste que un torero, al otro lado del telón de acero\nAsí estoy yo, así estoy yo, así estoy yo sin ti\n\n[G] [D] [Em] [C] [D] [G]/[C] [D] [Em]/[C] [Am]-[A7]-[D]\nVencido como un viejo que pierde al tute, lascivo como el beso del coronel,\nFurtivo como el Lute cuando era el Lute, inquieto, como un párroco en un burdel.\n\n[G] [D] [Em] [C] [D] [G]/ [B7] [Em] [C] [Am] [A7] [D]\nErrante como un taxi por el desierto, quemado como el cielo de Chernóbil,\nSolo, como un poeta en el aeropuerto, así estoy yo, así estoy yo sin ti.\n\n[C] [D] [G]/ [B7] [Em] [D] [C]/ [Am] [C] [D] [_(]2)\n-Inútil como un sello por triplicado\nComo el semen de los ahorcados, como el libro del porvenir.\n-Violento como un niño sin cumpleaños,\nComo el perfume del desengaño, así estoy yo sin ti\n\n[Am7] [C] [G] [D] [C]/ [G] [C](2) [G] [Am] [C]\nMás triste que un torero, al otro lado del telón de acero\nAsí estoy yo, así estoy yo, así estoy yo sin ti\n\n[C] [D] [G]/ [B7] [Em] [D] [C]/ [Am] [C] [D] (2)\n-Amargo, como el vino del exiliado,\nComo el domingo del jubilado, como una boda por lo civil.\n-Macabro, como el vientre de los misiles,\nComo un pájaro en un desfile, así estoy yo sin ti.\n\n[Am7] [C] [G] [D] [C]/ [G] [C](2) [G] [Am] [C] -[G]\nMás triste que un torero, al otro lado del telón de acero\nAsí estoy yo, así estoy yo, así estoy yo sin ti\n"
  },
  {
    "id": "ayo-technology",
    "title": "Ayo Technology",
    "artist": "Milow",
    "key": "Am",
    "capo": 2,
    "tempo": 100,
    "tags": [
      "acoustic",
      "pop",
      "2000s",
      "inglés"
    ],
    "file": "canciones/ayo-technology.md",
    "content": "---\ntitle: \"Ayo Technology\"\nartist: \"Milow\"\nkey: \"Am\"\ncapo: 2\ntempo: 100\ntags: [\"acoustic\", \"pop\", \"2000s\", \"inglés\"]\n---\n\n## Intro\n[Am] [G] [F] (4) [G] [F]\n\n## Verso 1\nBaby this a new age,\nYou like my new craze\nLet's get together\nMaybe we can start a new phase.\nThe smokes got the club all hazy,\nSpotlights don't do you justice baby\nWhy don't you come over here,\nYou got me saying:\nAyo, I'm tired of using technology,\nWhy don't you sit down, on top of me\nAyo, I'm tired of using technology\nI need you right in front of me\n\n[Am] [G] [F] (2) [G] [F]\nShe work it girl, she work the pole\nShe break it down, she take it low\nShe’s fine as hell,\nShe’s_about the dough\nShe doing her thing out on the floor\nHer money money, she makin' makin’\nLook at the way she shakin'\nMake you wanna touch it,\nMake you wanna taste her\nHave you lustin' for her…\nGo crazy, face it\n\n[Am] [G] [F] (4) [G] [F]\nBaby this a new age,\nYou like my new craze\nLet's get together\nMaybe we can start a new phase\nThe smokes got the club all hazy,\nSpotlights don't do you justice baby\nWhy don't you come over here,\nYou got me saying:\nAyo, I'm tired of using technology,\nWhy don't you sit down on top of me\nAyo, I'm tired of using technology\nI need you right in front of me.\n"
  },
  {
    "id": "baila-baila-negra",
    "title": "Baila, baila negra",
    "artist": "Manuelito",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "folklore",
      "latino",
      "bailable"
    ],
    "file": "canciones/baila-baila-negra.md",
    "content": "---\ntitle: \"Baila, baila negra\"\nartist: \"Manuelito\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"folklore\", \"latino\", \"bailable\"]\n---\n\n## Verso 1\nManuelito)\n\n[Am] [E7] [Am]\n(\n\nBaila, baila negra, ay mueve la cintura\nQue a mí me da locura de verte así bailar (2)\nCon tu movimiento me voy a morir\nCon tu movimiento me vas a matar (2) (BIS)\n\nCon tu movimiento me voy a morir\nCon tu movimiento me vas a matar Con tu movimiento me voy a morir\nCon tu movimiento me vas a matar Con tu movimiento me voy a morir\nCon tu movimiento me vas a matar\n\nBaila, ya, tierra ya.\n\n[Am] [D] [G]\nEn otro mundo… pero a tu lado\n"
  },
  {
    "id": "bajo-la-luz-de-la-luna",
    "title": "Bajo la luz de la luna",
    "artist": "Los Rebeldes",
    "key": "A",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rockabilly",
      "balada",
      "español"
    ],
    "file": "canciones/bajo-la-luz-de-la-luna.md",
    "content": "---\ntitle: \"Bajo la luz de la luna\"\nartist: \"Los Rebeldes\"\nkey: \"A\"\ncapo: 0\ntempo: 100\ntags: [\"rockabilly\", \"balada\", \"español\"]\n---\n\n## Intro\n[A] [C#m] [Bm] [E7](2)\n\nBajo la luz de la luna me diste tu amor,\nNi tan solo una palabra, una mirada bastó.\n\n[A] [C#7] [D] -[m]/ [A] [E7] [A] ([C#m] [Bm] [E7])\nY yo, sé que nunca olvidaré,\nQue bajo la luz de la luna yo te amé\n\n[A] [C#m] [Bm] [E7](2)\nBajo la luz de la luna busqué el amor,\nTu cuerpo entre mis brazos\nSe abrió como una flor.\n\n[A] [C#7] [D] -[m]/ [A] [E7] [A] ([C#m] [Bm] [E7])\nY yo, sé que nunca olvidaré…\n\nQue bajo la luz de la luna yo te amé\n\n[E5]\nYo no pensaba, no pude imaginar,\nQue todo lo que empieza, tiene un final\n\n[D] [Dm] [A] [F#m] [Bm] [E] [E5]\nBajo la luz de la luna me dijiste adiós,\nCon lagrimas en la cara me rompiste el corazón y yo...\n\n[Em]_[B7]_[Em]\nAy corazón, corazón, corazón,\n\nTrata de vender toda esa locura\n\nAy corazón, corazón, corazón,\n\nTú sabes muy bien que no tengo dudas\n"
  },
  {
    "id": "bamboleo",
    "title": "Bamboleo",
    "artist": "Gipsy Kings",
    "key": "Em",
    "capo": 0,
    "tempo": 120,
    "tags": [
      "flamenco",
      "rumba",
      "clásico",
      "80s"
    ],
    "file": "canciones/bamboleo.md",
    "content": "---\ntitle: \"Bamboleo\"\nartist: \"Gipsy Kings\"\nkey: \"Em\"\ncapo: 0\ntempo: 120\ntags: [\"flamenco\", \"rumba\", \"clásico\", \"80s\"]\n---\n\n## Intro\n[Em] [B7] [Em] [B7]\n[Em] [B7] [Em] [B7]\n\n## Verso 1\n[Em] Este amor llega así, de esta manera,\nNo tiene la [B7] culpa.\nCaballo de sabana vieja\nPorque muy depre[Em]ciado,\nPor eso no te perdón de llo[B7]rar.\n\n## Coro\n[Em] Bamboleo, [Am] bambolea,\nPorque mi [B7] vida,\nYo la prefiero vi[Em]vir así.\n[Em] Bamboleo, [Am] bambolea,\nPorque mi [B7] vida,\nYo la prefiero vi[Em]vir así.\n\n## Puente\nNo tiene per[Am]dón de Dios,\n[D7] Tú eres mi vida, la for[G]tuna del destino,\n[C] Pero el destino tendría pa[Am]rados\nLo mismo que a[B7]yer, lo mismo soy [Em] yo.\n\n## Coro\n[Em] Bamboleo, [Am] bambolea,\nPorque mi [B7] vida,\nYo la prefiero vi[Em]vir así.\n[Em] Bamboleo, [Am] bambolea,\nPorque mi [B7] vida,\nYo la prefiero vi[Em]vir así. [Em]\n"
  },
  {
    "id": "beautiful",
    "title": "Beautiful",
    "artist": "Christina Aguilera",
    "key": "D",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop",
      "balada",
      "2000s",
      "inglés"
    ],
    "file": "canciones/beautiful.md",
    "content": "---\ntitle: \"Beautiful\"\nartist: \"Christina Aguilera\"\nkey: \"D\"\ncapo: 0\ntempo: 100\ntags: [\"pop\", \"balada\", \"2000s\", \"inglés\"]\n---\n\n## Verso 1\nIntro: [D] [C] [G] [A#] (2)\n\n[D] [C] [Bm] [A#] (2)\nEveryday is so wonderful\nThen suddenly, it's hard to breathe\nNow and then I get insecure\nFrom all the pain I'm so ashamed\n[G] [C] [D] [C] [G] (2)\nI am beautiful\nNo matter what they say\nWords can't bring me down\nI am beautiful, in every single way\nYes, words can't bring me down. Oh no\nSo don't you bring me down today\n[D] [C] [Bm] [A#] (2)\nTo all your friends you're delirious\nSo consumed\nIn all your doom, ooh\nTrying hard to fill the emptiness\nThe pieces gone\nLeft the puzzle undone\nAin't that the way it is\n\n[G] [C] [D] [C] [G] (2)\nYou are beautiful\nNo matter what they say\nWords can't bring you down. Oh no\nYou are beautiful, in every single way\nYes words can't bring you down. Oh no\nSo don't you bring me down today\n\n[D] [C] [Bm] [A#] (2)\nNo matter what we do (no matter what we do)\nNo matter what we say (no matter what we say)\nWe'll sing the song inside the tune (yeah, oh yeah)\nFull of beautiful mistakes\nAnd everywhere we go (and everywhere we go)\nThe sun will always shine\n(the sun will always, always, shine)\nAnd tomorrow we might awake\nOn the other side\n[G] [C] [D] [C] [G] (2)\n'Cause, we are beautiful\nNo matter what they say\nYes words won't bring us down. Oh no\nWe are beautiful, in every single way\nYes words can't bring us down. Oh no\nSo don't you bring me down today. Oh, oh oh\nDon't you bring me down today, yeah\nDon't you bring me down, ooh, today\n"
  },
  {
    "id": "besame-mucho",
    "title": "Bésame mucho",
    "artist": "Consuelo Velázquez",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "bolero",
      "clásico",
      "romántico"
    ],
    "file": "canciones/besame-mucho.md",
    "content": "---\ntitle: \"Bésame mucho\"\nartist: \"Consuelo Velázquez\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"bolero\", \"clásico\", \"romántico\"]\n---\n\n## Intro\n[Am] [Dm] [Am] [E7] [Am]\n\n(2) [A7]\nBésame, bésame mucho, como si fuera esta noche la última vez\nBésame, bésame mucho, que tengo miedo a perderte, perderte después (bis)\n\n[Dm] [Am] [E7] [Am]\nQuiero tenerte muy cerca, mirarme en tus ojos y estar junto a ti\nPiensa que tal vez mañana, estaré muy lejos, muy lejos de aquí\n\n[Am] [Dm] [Am] [E7] [Am]\nBésame, bésame mucho, como si fuera esta noche la última vez\nBésame, bésame mucho, que tengo miedo a perderte, perderte después (bis)\nQue tengo miedo a perderte, perderte después\nQue tengo miedo a perderte… a perderte después\n"
  },
  {
    "id": "blowing-in-the-wind",
    "title": "Blowin' in the Wind",
    "artist": "Bob Dylan",
    "key": "D",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "folk",
      "classic",
      "60s",
      "protest",
      "inglés"
    ],
    "file": "canciones/blowing-in-the-wind.md",
    "content": "---\ntitle: \"Blowin' in the Wind\"\nartist: \"Bob Dylan\"\nkey: \"D\"\ncapo: 0\ntempo: 100\ntags: [\"folk\", \"classic\", \"60s\", \"protest\", \"inglés\"]\n---\n\n## Intro\n[D]-[G] [D] / [D] [G] [A] (3)\n\n## Verso 1\nHow many roads must a man walk down\nBefore you call him a man?\nHow many seas must a white dove sail\nBefore she sleeps in the sand?\nYes, and how many times\nMust the cannonballs fly\nBefore they're forever banned?\n\n[G] [A] [D] [Bm]/ [G] [A] [D]\nThe answer, my friend,\nIs blowin' in the wind\nThe answer is blowin' in the wind\n\n[D]-[G] [D] / [D] [G] [A] (3)\nYes, and how many years\nMust a mountain exist\nBefore it is washed to the sea?\nAnd how many years\nCan some people exist\nBefore they're allowed to be free?\nYes, and how many times\nCan a man turn his head\nAnd pretend that he just doesn't see?\n\n[G] [A] [D] [Bm]/ [G] [A] [D]\nThe answer, my friend,\nIs blowin' in the wind\nThe answer is blowin' in the wind\n\n[D]-[G] [D] / [D] [G] [A] (3)\nYes, and how many times\nMust a man look up\nBefore he can see the sky?\nAnd how many ears must one man have\nBefore he can hear people cry?\nYes, and how many deaths\nWill it take 'til he knows\nThat too many people have died?\n\n> *DOmaj7 032000/ FAmaj7 003210/MIsus4 0(2)2200\n"
  },
  {
    "id": "bongo-bong",
    "title": "Bongo Bong / Je ne t'aime plus",
    "artist": "Manu Chao",
    "key": "Dm",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "reggae",
      "mestizaje",
      "internacional"
    ],
    "file": "canciones/bongo-bong.md",
    "content": "---\ntitle: \"Bongo Bong / Je ne t'aime plus\"\nartist: \"Manu Chao\"\nkey: \"Dm\"\ncapo: 0\ntempo: 100\ntags: [\"reggae\", \"mestizaje\", \"internacional\"]\n---\n\n## Verso 1\nBongo Bong/ Je ne t’aime plus\n\nBangin' on my bongo\nAll that swing belongs to me\nI'm\n\n[Amx2] [Dm] [G]\nso happy there's nobody\nIn my place instead of me\nI'm a king without a crown\nHanging loose in a big town\nI'm the king of bongo baby\nI'm the king of bongo, bong\n\nMama was queen of the mambo\nPapa was king of the Congo\nDeep down in a jungle\nI started bangin' my first bongo\n-Every monkey'd like to be\nIn my place instead of me\nCause I'm the king of bongo, baby\nI'm the king of bongo bong\n\nI'm the king of the bongo,\nKing of the bongo bong\nHear me when I come, baby\nKing of the bongo bong\nHear me when I come\nMama was queen of the mambo\nPapa was king of the Congo\nDeep down in a jungle\nI started bangin' my first bongo\nEvery monkey'd like to be\nIn my place instead of me\nCause I'm the king of bongo, baby\nI'm the king of bongo bong\n\nI went to the big town\nWhere there is a lot of sound\nFrom the jungle to the city\nLooking for a bigger crown\n-So I play my boogie\nFor the people of big city\nBut they don't go crazy\nWhen I'm bangin' on my boogie\n\nI'm the, king of the bongo,\nKing of the bongo bong\nHear me when I come, baby\nKing of the bongo, king of the bongo bong\n\nNobody'd like to be in my place\nInstead of me\nCause nobody go crazy\nWhen I'm bangin' on my boogie\nI'm a king without a crown\nHanging loose in a big town\nBut I'm the king of bongo baby\nI'm the king of bongo bong\n\nHear me when I come, baby\nHear me when I come\n\nJe ne t'aime plus, mon amour Je ne t'aime plus, tous les jours (5)\n\n> *\nParfois j'aimerais mourir\nTellement j'ai voulu croire\n\n-Parfois j'aimerais mourir\nPour ne plus rien avoir\n-Parfois j'aimerais mourir\nPour plus jamais te voir\n\nI'm the king of the bongo,\nKing of the bongo bong\nHear me when I come, baby\nKing of the bongo, king of the bongo bong\nHear me when I come\n\nJe ne t'aime plus, mon amour\nJe ne t'aime plus tous les jours (4) 2*\n\nParfois j'aimerais mourir\nTellement y'a plus d'espoir\n\nThey say that I'm a clown\nMaking too much dirty sound\nThey say there is no place\nFor little monkey in this town\nNobody'd like to be in my place instead of me\nCause nobody go crazy when I'm bangin' on\n\nParfois j'aimerais mourir\nPour plus jamais te revoir\nParfois j'aimerais mourir\nPour ne plus rien savoir\nJe ne t'aime plus, mon amour\n\nI'm the, king of the bongo,\nKing of the bongo bong\nHear me when I come, baby\n\nJe ne t'aime plus, mon amour\nJe ne t'aime plus tous les jours (4)\n\n> (*3)\n"
  },
  {
    "id": "bridge-over-troubled-water",
    "title": "Bridge Over Troubled Water",
    "artist": "Simon & Garfunkel",
    "key": "F",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "folk",
      "balada",
      "70s",
      "classic",
      "inglés"
    ],
    "file": "canciones/bridge-over-troubled-water.md",
    "content": "---\ntitle: \"Bridge Over Troubled Water\"\nartist: \"Simon & Garfunkel\"\nkey: \"F\"\ncapo: 0\ntempo: 100\ntags: [\"folk\", \"balada\", \"70s\", \"classic\", \"inglés\"]\n---\n\n## Intro\n[F] [C] (5)  [G7] [C] -7  [F]- [D7]-[G]\n\n## Verso 1\nWhen you’re weary, feeling small, when tears are in your eyes, I will dry them all\nI’m on your side, ooh when times get rough and friends just can’t be found\n\n[C]-7-[F] [C] [A7] [F] [E7] ([Am] /[C]) (BIS)\nLike a bridge over troubled water, I will lay me down(2)\n\n[F] [C] (5) [G7] [C] -7 [F] [D7]-[G]\nWhen you’re down and out, when you’re on the street,\nWhen evening falls so hard, I will comfort you,\nI’ll take your part, ooh when darkness comes, and pain is all around\n\n[C]-7 [F] [C] [A7] [F] [E7] ([Am] /[C]) (BIS)\nLike a bridge over troubled water, I will lay me down(2)\n\n[F] [C] (5)  [G7] [C] -7  [F]- [D7]-[G]\nSail on silver girl, sail on by, your time has come to shine, all your dreams are on the way.\nSee how they shine, ooh if you need a friend, I’m sailing right behind\n\n[C]-7 [F] [C] [A7] [F] [E7] ([Am] /[C]) (BIS)\nLike a bridge over troubled water, I will ease your mind\n"
  },
  {
    "id": "caballo-viejo",
    "title": "Caballo viejo",
    "artist": "Simón Díaz",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "joropo",
      "folklore",
      "venezolano"
    ],
    "file": "canciones/caballo-viejo.md",
    "content": "---\ntitle: \"Caballo viejo\"\nartist: \"Simón Díaz\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"joropo\", \"folklore\", \"venezolano\"]\n---\n\n## Verso 1\nJazmines en el pelo y rosas en la cara…\n\n[Am] [E] [Am]\nCuando el amor llega así de esta manera\n\n[E]\nUno no se da ni cuenta.\nEl carutal reverdece,\n\n[Dm] [E]\nEl guamachito florece\n\ny las sogas se revientan (bis)\n\n[Am]\n[Dm] [Am] [E] [Am] (2)\nCaballo, le dan sabana\nPorque está viejo y cansao\nPero no se dan de cuenta\nQue a un corazón amarrao\nCuando le sueltan las riendas\nEs caballo desbocao.\n-Y si una potra alazana\nCaballo viejo se encuentra\nEl pecho se le desgrana,\nNo le hace caso a falseta\nY no le obedece a freno,\nNi lo paran falsas riendas.\n\n[Am] [E] (2) [E] [Dm]-[E] [Am] _\nCuando el amor llega así de esta manera\nUno no tiene la culpa\nQuererse no tiene horario,\nNi fecha en el calendario\nCuando las ganas se juntan (bis)\n\nCaballo le dan sabana y tiene el tiempo contao.\nY se va por la mañana con su pasito apurao.\nA verse con su potranca\nQue lo tiene embarbascao.\n-El potro da tiempo al tiempo\nPorque le sobra la edad,\nCaballo viejo no puede\nPerder la flor que le dan\nPorque después de esta vida\nNo hay otra oportunidad\n\n[Dm] [Am] [E] [Am] (2)\n"
  },
  {
    "id": "cadillac-solitario",
    "title": "Cadillac solitario",
    "artist": "Loquillo",
    "key": "D",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rock",
      "español",
      "80s"
    ],
    "file": "canciones/cadillac-solitario.md",
    "content": "---\ntitle: \"Cadillac solitario\"\nartist: \"Loquillo\"\nkey: \"D\"\ncapo: 0\ntempo: 100\ntags: [\"rock\", \"español\", \"80s\"]\n---\n\n## Intro\n[D] [A] [Bm] [G] (2 )\n\n> *arpegio\n-\n*Siempre quise ir a L.A.\nDejar un día esta ciudad\nCruzar el mar en tu compañía\n-Pero ya hace tiempo que me has dejado\nY probablemente me habrás olvidado\nNo sé que aventuras correré sin ti.\n\n[Bm] [G] (2) [D]/ [A] [Bm] [G]\n-Y ahora estoy aquí sentado\nEn un viejo Cadillac segunda mano\nJunto\n_al Merbeyé, a mis pies mi ciudad\n-Y hace un momento que me ha dejado\nAquí en la ladera del Tibidabo la última rubia\nQue vino a probar el asiento de atrás\n\n[D] [A] [Bm] [G]\nQuizás el Martini me ha hecho recordar\nNena ¿por qué no volviste a llamar?\nCreí que podía olvidarte sin más,\nY aún a ratos ya ves\n\n[Bm] [G] (2) [D] [A] [Bm] [G]\nY al irse la rubia me he sentido extraño\nMe he quedado solo fumando un cigarro\nQuizás he pensado, nostalgia de ti\nY desde esta curva donde estoy parado\nMe he sorprendido mirando a tu barrio\nMe han atrapado luces de ciudad\n\n[D] [A] [Bm] [G]\nEl amanecer me sorprenderá\nDormido, borracho, en el Cadillac\nJunto a las palmeras, cruce solitario\nY dice la gente que ahora eres formal\nY yo aquí borracho en el Cadillac\nBajo las palmeras, cruce y solitario\nY no estás tú, nena\n\n(2)\nNo estás tú, no estás tú (no estás tú)\n"
  },
  {
    "id": "california-dreamin",
    "title": "California Dreamin",
    "artist": "The Mamas & The Papas",
    "key": "Am",
    "capo": 4,
    "tempo": 100,
    "tags": [
      "folk rock",
      "60s",
      "classic",
      "himno",
      "inglés"
    ],
    "file": "canciones/california-dreamin.md",
    "content": "---\ntitle: \"California Dreamin'\"\nartist: \"The Mamas & The Papas\"\nkey: \"Am\"\ncapo: 4\ntempo: 100\ntags: [\"folk rock\", \"60s\", \"classic\", \"himno\", \"inglés\"]\n---\n\n## Intro\n[Am] [E7]\n\n## Verso 1\n_[Am] [G] [F] [G] [E] -7/ [F] [C]-[F] [E7]\nAll the leaves are brown             (all the leaves are brown)\nAnd the sky is gray             (and the sky is gray)\nI've been for a walk             (I've been for a walk)\nOn a winter's day                 (on a winter's day)\n\n_[Am] [G] [F] [G] [E7] (2)\nI'd be safe and warm             (I'd be safe and warm)\nIf I was in LA                 (If I was in LA)\nCalifornia dreamin'             (California dreamin')\nOn such a winter's day\n\n_[Am] [G] [F] [G] [E] -7/ [F] [C]-[F] [E7]\nStopped into a church, I passed along the way\nWell, I got down on my knees         (got down on my knees)\nAnd I pretend to pray             (I pretend to pray)\n\n_[Am] [G] [F] [G] [E7] (2)\nYou know the preacher like the cold     (preacher like the cold)\nHe knows I'm gonna stay         (knows I'm gonna stay)\nCalifornia dreamin'             (California dreamin')\nOn such a winter's day\n\n_[Am] [G] [F] [G] [E] -7/ [F] [C]-[F] [E7]\nAll the leaves are brown (all the leaves are brown)\nAnd the sky is gray (and the sky is gray)\nI've been for a walk (I've been for a walk)\nOn a winter's day (on a winter's day)\n\n_[Am] [G] [F] [G] [E7] (4).  -[Am]\nIf I didn't tell her (if I didn't tell her)\nI could leave today (I could leave today)\nCalifornia dreamin' (California dreamin')\nOn such a winter's day (California dreamin')\nOn such a winter's day (California dreamin')\nOn such a winter's day\n"
  },
  {
    "id": "calle-melancolia",
    "title": "Calle melancolía",
    "artist": "Joaquín Sabina",
    "key": "A",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "canción de autor",
      "clásico",
      "español"
    ],
    "file": "canciones/calle-melancolia.md",
    "content": "---\ntitle: \"Calle melancolía\"\nartist: \"Joaquín Sabina\"\nkey: \"A\"\ncapo: 0\ntempo: 100\ntags: [\"canción de autor\", \"clásico\", \"español\"]\n---\n\n## Intro\n[A] [Bm]/ [G]-[A]-[D]/ [A] [Bm] [G]-[E]-[A] [C] [G]/ [Bm]-[A]-[D]/ [A] [Bm]/ [G]-[A]-[D]\n\nComo quien viaja a lomos\nDe una yegua sombría,\nPor la ciudad camino, no preguntéis adónde.\n-Busco acaso un encuentro\nQue me ilumine el día,\nY no hallo más que puertas\nQue niegan lo q esconden\n-Las chimeneas vierten su vómito de humo\nA un cielo cada vez más lejano y más alto.\nPor las paredes ocres se desparrama el zumo\nDe una fruta de sangre crecida en el asfalto.\n-Ya el campo estará verde\nDebe ser primavera\nCruza por mi mirada un tren interminable,\nEl barrio donde habito\nNo es ninguna pradera,\nDesolado paisaje de antenas y de cables.\nVivo en el número siete, calle Melancolía.\nQuiero mudarme hace años\nAl barrio de la alegría\nPero siempre q lo intento\nHa salido ya el tranvía\nY en la escalera me siento\nA silbar mi melodía.\n-Como quien viaja a bordo\nDe un barco enloquecido,\nQue viene de la noche y va a ninguna parte,\nAsí mis pies descienden la cuesta del olvido,\nFatigados de tanto andar sin encontrarte.\n-Luego, de vuelta a casa,\nEnciendo un cigarrillo,\nOrdeno mis papeles, resuelvo un crucigrama;\nMe enfado con las sombras\nQue pueblan los pasillos\nY me abrazo a la ausencia\nQue dejas en mi cama.\n-Trepo por tu recuerdo como una enredadera\nQue no encuentra ventanas donde agarrarse, soy\nesa absurda epidemia\nQue sufren las aceras,\nSi quieres encontrarme, ya sabes dónde estoy.\n"
  },
  {
    "id": "calma",
    "title": "Calma",
    "artist": "Pedro Capó",
    "key": "G",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "reggae pop",
      "latino",
      "verano"
    ],
    "file": "canciones/calma.md",
    "content": "---\ntitle: \"Calma\"\nartist: \"Pedro Capó\"\nkey: \"G\"\ncapo: 0\ntempo: 100\ntags: [\"reggae pop\", \"latino\", \"verano\"]\n---\n\n## Intro\n[G] [D] A [Bm] (4)\n\nCuatro abrazos y un café\nApenas me desperté\n-Y al mirarte recordé\nque ya todo lo encontré.\n-Tu mano, en mi mano\nde todo escapamos\nJuntos, ver el sol caer.\n\nVamos pa la playa pa curarte el alma\nCierra la pantalla, abre la Medalla\n-Todo el mar Caribe viendo tu cintura\nTú le coqueteas,\nTú eres buscabullas y me gusta,\n-Lento y contento cara al viento\n-Lento y contento cara al viento\n\nPa sentir la arena en los pies\nPa que se nos pinte la piel\nPa jugar como niños\nDarnos cariño como la primera vez\nQue te miré yo supe que estaría a tus pies\nDesde que se tocaron\nTu mano y mi mano\nDe todo escapamos\nJuntos ver el sol caer\n__\n\nVamos pa la playa pa curarte el alma\nCierra la pantalla, abre la Medalla\nTodo el mar Caribe viendo tu cintura\nTú le coqueteas,\nTú eres buscabullas (2) y me gusta,\nLento y contento cara al viento\nLento y contento cara al viento\n\n-Calma, mi vida con calma\nque nada hace falta\nsi estamos juntitos\n\n-Calma, vida con calma\nque nada hace falta\nsi estamos juntitos\n\nandando\n\n-Calma, mi vida con calma\nque nada hace falta\nsi estamos juntitos\n\nbailando\n\ncantando\n\n-Calma, vida con calma\nque nada hace falta\nsi estamos juntitos\n\nYo no tengo pa' darte ni un peso…\n"
  },
  {
    "id": "caminando-por-la-vida",
    "title": "Caminando por la vida",
    "artist": "Melendi",
    "key": "Dm",
    "capo": 0,
    "tempo": 108,
    "tags": [
      "rumba",
      "pop",
      "español",
      "2000s"
    ],
    "file": "canciones/caminando-por-la-vida.md",
    "content": "---\ntitle: \"Caminando por la vida\"\nartist: \"Melendi\"\nkey: \"Dm\"\ncapo: 0\ntempo: 108\ntags: [\"rumba\", \"pop\", \"español\", \"2000s\"]\n---\n\n## Intro\n[Dm] [C] [F] [Bb]\n\n## Verso 1\n[Dm] Huele a aire de prima[C]vera,\n[F] Tengo alergia en el cora[C]zón,\n[Bb] Voy cantando por la carre[F]tera,\n[C] De copiloto llevo el [Bb] sol.\n\n[Dm] Y a mí no me hace falta es[C]trella\n[F] Que me lleve hasta tu por[C]tal,\n[Bb] Como ayer estaba bo[F]rracho\n[C] Fui tirando migas de [Bb] pan.\n\n## Coro\n[F] Voy ca[C]minando por la [Dm] vida,\nSin pausa pero sin [Bb] prisa,\nProcu[F]rando no hacer ruido,\nVes[C]tío con una sonrisa.\nSin com[Dm]plejos ni temores,\nCanto [Bb] rumbas de colores,\nY el llo[F]rar no me hace [C] daño\nSiempre y cuando tú no [Dm] llores... [Bb]\nSiempre y cuando tú no [Dm] llores... [Bb]\n\n## Verso 2\n[Dm] Y el milindri a mí me [C] llaman\n[F] En el mundillo ca[C]lé,\n[Bb] Porque al coger mi gui[F]tarra\n[C] Se me van solos los [Bb] pies.\n\n[Dm] Y este año le pido al [C] cielo\n[F] La salud del ante[C]rior,\n[Bb] No necesito di[F]nero,\n[C] Voy sobrao en el a[Bb]mor.\n\n## Coro\n[F] Voy ca[C]minando por la [Dm] vida,\nSin pausa pero sin [Bb] prisa,\nProcu[F]rando no hacer ruido,\nVes[C]tío con una sonrisa.\nSin com[Dm]plejos ni temores,\nCanto [Bb] rumbas de colores,\nY el llo[F]rar no me hace [C] daño\nSiempre y cuando tú no [Dm] llores... [Bb]\nSiempre y cuando tú no [Dm] llores... [Bb]\n\n## Puente\n[Dm] Y no quiero amores no correspondidos, no quiero [F] guerras,\nNo quiero amigos que no me [C] quieran sin mis ga[Bb]lones.\n[Dm] No me tires flores ni falsas miradas de inexpre[F]sión\nQue no dicen nada del cora[C]zón que me las pro[Bb]pone.\n\n## Coro Final\n[F] Voy ca[C]minando por la [Dm] vida,\nSin pausa pero sin [Bb] prisa... [F]\n"
  },
  {
    "id": "cantares",
    "title": "Cantares",
    "artist": "Joan Manuel Serrat",
    "key": "G",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "canción de autor",
      "machado",
      "clásico"
    ],
    "file": "canciones/cantares.md",
    "content": "---\ntitle: \"Cantares\"\nartist: \"Joan Manuel Serrat\"\nkey: \"G\"\ncapo: 0\ntempo: 100\ntags: [\"canción de autor\", \"machado\", \"clásico\"]\n---\n\n## Intro\n[G] [Em] [C]-[D]-[G] (3) [C]-[D]\n\nTodo pasa y todo queda\nPero lo nuestro es pasar\n-Pasar haciendo caminos\nCaminos sobre la mar\n-Nunca perseguí la gloria\nNi dejar en la memoria\nDe los hombres, mi canción\n\n[G] [Em] [C]-[D]-[G]/[C]-[D]-[G]\nYo amo los mundos sutiles\nIngrávidos y gentiles\nComo pompas de jabón\n\n[G] [Em] [C]-[D]-[G] (2[)_] [Em] -[C]-[D]\nMe gusta verlos pintarse,\nDe sol y grana, volar\n-Bajo el cielo azul, temblar\nSúbitamente y quebrarse\nNunca perseguí la gloria\n\n[G] [Em] [C] [D]\nCaminante, son tus huellas\nEl camino y nada más.\nCaminante, no hay camino\nSe hace camino al andar\nAl andar se hace camino, y al volver\nLa vista atrás se ve la senda\nQue nunca se ha de volver a pisar\nCaminante, no hay camino\nSino estelas en la mar\n\n[G] [Em] [C]-[D]-[G](2) [C]-[D]-[G]\nHace algún tiempo, en ese lugar\nDonde hoy los bosques\nSe visten de espinos,\n-Se oyó la voz de un poeta gritar:\n¡Caminante, no hay camino,\nSe hace camino al andar!\n"
  },
  {
    "id": "carolina",
    "title": "Carolina",
    "artist": "M-Clan",
    "key": "G",
    "capo": 0,
    "tempo": 126,
    "tags": [
      "rock",
      "español",
      "2000s"
    ],
    "file": "canciones/carolina.md",
    "content": "---\ntitle: \"Carolina\"\nartist: \"M-Clan\"\nkey: \"G\"\ncapo: 0\ntempo: 126\ntags: [\"rock\", \"español\", \"2000s\"]\n---\n\n## Intro\n[Em] [C] [G] [D] (x3)\n[Bb] [F] [G]\n\n## Verso 1\n[C] La dulce niña Caro[G]lina,\n[D] No tiene edad para hacer el a[Am]mor.\n[C] Su madre la estará bus[G]cando,\n[D] O eso es lo que creo yo.\n[C] No puedo echarla de mi [G] casa,\n[D] Me dice que no tiene dónde dor[Am]mir.\n[C] Después se mete en mi [G] cama,\n[D] Eso es mucho para mí.\n\n## Pre-Coro\n(Ah) [Am] Esa va a [D] ser mi ruina,\n(Ah) [Am] Pequeña Caro[D]lina,\n[C] Vete, [G] por fa[D]vor.\n\n## Coro\n[Em] Carolina, [C] trátame [G] bien, no te [D] rías de mí,\n[Em] No me ar[C]ranques la [G] piel. [D]\n[Em] Carolina, [C] trátame [G] bien,\nO al fi[Bb]nal te ten[F]dré que co[G]mer, ¡eh!\n\n## Verso 2\n[C] No queda en la ciudad es[G]quina\n[D] Tras la que yo me pueda escon[Am]der.\n[C] Siempre aparece Caro[G]lina\n[D] Con algún tipo de interés.\n[C] La reina de las medi[G]cinas\n[D] Que no se venden en farmacia legal, [Am]\n[C] Vinagre para las he[G]ridas,\n[D] Dulce azúcar al final.\n\n## Pre-Coro\n(Ah) [Am] El Diablo es[D]tá en mi vida,\n(Ah) [Am] Pequeña Caro[D]lina,\n[C] Vete, [G] por fa[D]vor.\n\n## Coro\n[Em] Carolina, [C] trátame [G] bien, no te [D] rías de mí,\n[Em] No me ar[C]ranques la [G] piel. [D]\n[Em] Carolina, [C] trátame [G] bien,\nO al fi[Bb]nal te ten[F]dré que co[G]mer, ajam.\n\n## Solo de Guitarra\n¡Santi Campillo a la guitarra!\n[Em] [C] [G] [D] (x2)\n[Bb] [F] [G]\n\n## Puente\n(Ah) [Am] Eh, el Diablo es[D]tá en mi vida,\n(Ah) [Am] Pequeña Caro[D]lina,\n[C] Vete, [G] por fa[D]vor.\n\n## Coro Final\n[Em] Carolina, [C] trátame [G] bien, no te [D] rías de mí,\n[Em] No me ar[C]ranques la [G] piel. [D]\n[Em] Carolina, [C] trátame [G] bien,\nO al fi[Bb]nal te ten[F]dré que co[G]mer.\n[Em] Carolina, [C] trátame [G] bien, no te [D] rías de mí,\n[Em] No me ar[C]ranques la [G] piel. [D]\n[Em] Carolina, [C] trátame [G] bien,\nO al fi[Bb]nal te ten[F]dré que co[G]mer, eh, eh, eh.\nDulce niña Caro[G]lina, eh.\n"
  },
  {
    "id": "chiquilla",
    "title": "Chiquilla",
    "artist": "Seguridad Social",
    "key": "F",
    "capo": 0,
    "tempo": 140,
    "tags": [
      "rock",
      "rumba",
      "español",
      "90s"
    ],
    "file": "canciones/chiquilla.md",
    "content": "---\ntitle: \"Chiquilla\"\nartist: \"Seguridad Social\"\nkey: \"F\"\ncapo: 0\ntempo: 140\ntags: [\"rock\", \"rumba\", \"español\", \"90s\"]\n---\n\n## Intro\n[F] [F#] [G#] [F#] [F]\n\n## Verso 1\n[F] Por la mañana yo me levanto,\n[F#] Y voy corriendo desde mi cama,\n[G#] Para poder ver a esa chi[F#]quilla por mi ven[F]tana.\n\n[F] Es que yo llevo todo el día sufriendo,\n[F#] Y es que la quiero con todo el alma,\n[G#] Y la persigo en mi pensa[F#]miento de madru[F]gada.\n\n[F] Tengo una cosa que me arde dentro,\n[F#] Que no me deja pensar en nada,\n[G#] Ay, que no sea de esa chi[F#]quilla y de su mi[F]rada.\n\n## Coro\n[Bb] Y yo la [F] miro,\nY [F#] ella no me dice [F] nada,\nPero sus [F#] dos ojos negros se me [F] clavan como espadas,\nPero sus [F#] dos ojos negros se me [F] clavan como espadas.\n¡Ay, chi[F]quilla!\n\n## Verso 2\n[F#] Ese silencio que me desvive,\n[G#] Me dice cosas que son tan claras,\nQue [F#] yo no puedo, no puedo, no puedo de[F]jar de mirarla.\n\n[F] Y yo le tengo que decir pronto,\n[F#] Que estoy loquito de amor por ella,\n[G#] Y que sus ojos llevan el [F#] fuego de alguna es[F]trella.\n\n## Coro\n[Bb] Y yo la [F] miro,\nY [F#] ella no me dice [F] nada,\nPero sus [F#] dos ojos negros se me [F] clavan como espadas,\nPero sus [F#] dos ojos negros se me [F] clavan como espadas.\n¡Ay, chi[F]quilla!\n\n[Bb] Y yo la [F] quiero, como el Sol a la mañana,\n[F#] Como los rayos de luz a mi ven[F]tana...\n[F#] Yo la quiero como los rayos de luz a mi ven[F]tana.\n"
  },
  {
    "id": "cielito-lindo",
    "title": "Cielito lindo",
    "artist": "Quirino Mendoza",
    "key": "D",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "mariachi",
      "ranchera",
      "mexicano"
    ],
    "file": "canciones/cielito-lindo.md",
    "content": "---\ntitle: \"Cielito lindo\"\nartist: \"Quirino Mendoza\"\nkey: \"D\"\ncapo: 0\ntempo: 100\ntags: [\"mariachi\", \"ranchera\", \"mexicano\"]\n---\n\n## Intro\n[D] [E] [A]\n\nAy, ay, ay, ay canta y no llores\nPorque cantando se alegran, Cielito lindo los corazones (2)\n\nCon ese lunar que tienes, Cielito lindo, junto a la boca\nNo se lo des a nadie cielito lindo que a mí me toca\nDe la Sierra Morena, Cielito lindo, vienen bajando\nUn par de ojitos negros cielito lindo de contrabando\nDe tu casa la mía, Cielito lindo, no hay más que un paso\nAhora que estamos solos, Cielito lindo, dame un abrazo\n"
  },
  {
    "id": "clandestino",
    "title": "Clandestino",
    "artist": "Manu Chao",
    "key": "F#m",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "reggae",
      "canción protesta",
      "clásico"
    ],
    "file": "canciones/clandestino.md",
    "content": "---\ntitle: \"Clandestino\"\nartist: \"Manu Chao\"\nkey: \"F#m\"\ncapo: 0\ntempo: 100\ntags: [\"reggae\", \"canción protesta\", \"clásico\"]\n---\n\n## Intro\n[F#m] [Bm] [C#] 7\n\nSolo, voy con mi pena, sola, va mi condena\nCorrer es mi destino, para burlar la ley\nPerdido en el corazón, de la grande Babilón\nMe dicen: El Clandestino por no llevar papel\n\n[Am] [Dm] [E7] [Am] (2)\nPa' una ciudad del norte, yo me fui a trabajar\nMi vida la dejé entre Ceuta y Gibraltar\nSoy una raya en el mar, fantasma en la ciudad\nMi vida va prohibida, dice la autoridad\n\n[Am] [Dm] [E7] [Am] (2)\nSolo, voy con mi pena, sola, va mi condena\nCorrer es mi destino, por no llevar papel\nPerdido en el corazón de la grande Babilón\nMe dicen el Clandestino, yo soy el quiebra ley\n\nMano Negra, clandestina\nPeruano, clandestino\nAfricano, clandestino\nMarihuana, ilegal\n\n[E7] [Am] (4)\n[Am] [Dm] [E7] [Am] (2)\nSolo, voy con mi pena, sola, va mi condena\nCorrer es mi destino, para burlar la ley\nPerdido en el corazón, de la grande Babilón\nMe dicen: El Clandestino por no llevar papel\n\n[E7] [Am] (4)\nArgelino, clandestino\nNigeriano, clandestino\nBoliviano, clandestino\nMano Negra, ilegal\n\n__________________________________\n\n¿Qué voy a hacer? Je ne sais pas… (4)\n\n(4 de la mañana)\nA la bim, a la bam, a la bim bom bam (2)\nObladí, obladá, obladidada\nA la bim, a la bam, a la bim bom bam\n(Radio Reloj) (Cinco de la mañana)\n(No todo lo que es oro, brilla)\n(Remedio chino e infalible)\n"
  },
  {
    "id": "colgando-en-tus-manos",
    "title": "Colgando en tus manos",
    "artist": "Carlos Baute & Marta Sánchez",
    "key": "G",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop latino",
      "dueto",
      "éxito"
    ],
    "file": "canciones/colgando-en-tus-manos.md",
    "content": "---\ntitle: \"Colgando en tus manos\"\nartist: \"Carlos Baute & Marta Sánchez\"\nkey: \"G\"\ncapo: 0\ntempo: 100\ntags: [\"pop latino\", \"dueto\", \"éxito\"]\n---\n\n## Verso 1\nQuizá no fue coincidencia encontrarme contigo\n\n[G] [D] [Em]/ [C]-[D]-[G](3) [G] [D] [Em]/ [C]-[D]-[Em]\nTal vez esto lo hizo el destino\n\n_Quiero dormirme de nuevo en tu pecho\n\nY después me despierten tus besos\n\nTu sexto sentido sueña conmigo\n\nSé que pronto estaremos unidos\n\nEsa_sonrisa traviesa que vive conmigo\n\nSé que pronto estaré en tu camino\n\n[Em]_[D] /[C] [G]-[D]-[Em]/ [Em] [D]-[C] [G]-[D]\nSabes que estoy colgando en tus manos\n\nUh…Así que no me dejes caer\nSabes que estoyyyy… colgando en tus manos\n\n[G] [D] [Am]/ [C]-[D]-[G] (4)\nTe envío poemas de mi puño y letra\n\nTe envío canciones de 4.40\n\nTe envío las fotos cenando en Marbella\n\nY cuando estuvimos por Venezuela\n\nY así me recuerdes y tengas presente\n\nQue mi corazón está colgando en tus manos\nCuidado, cuidado,\nQue mi corazón está colgando en tus manos\n\n[G] [D] [Em]/ [C]-[D]-[G]/ [G] [D] [Em]/ [C]-[D]-[Em]\nNo perderé la esperanza, de hablar contigo\n\nNo me importa qué dice el destino\n\n_Quiero tener tu fragancia conmigo\n\nY beberme de ti lo prohibido\n\n[Em]_[D] -[C]/ [G]-[D]-[Em]/ [Em] [D]-[C] [G]-[D]\nSabes que estoy colgando en tus manos\n\nUh…Así que no me dejes caer\nSabes que estooooy… colgando en tus manos\n\n[G] [D] [Am]/ [C]-[D]-[G] (3)\nTe envío poemas de mi puño y letra\n\nTe envío canciones de 4.40\n\nTe envío las fotos cenando en Marbella\n\nY cuando estuvimos por Venezuela\n\nY así, así me recuerdes y tengas presente\n\nQue mi corazón está colgando en tus manos\n\n[G] [D]/ [Am]-[C] [D]-[G] (3) [D]\nCuidado, mucho cuidado…\n\nMarta, yo te digo, me tienes en tus manos\n\nCuidado, mucho cuidado…\n\nNo importa qué diga el destino, quédate conmigo,\n\nCuidado, mucho cuidado…\n"
  },
  {
    "id": "color-esperanza",
    "title": "Color esperanza",
    "artist": "Diego Torres",
    "key": "E",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop latino",
      "himno",
      "esperanza"
    ],
    "file": "canciones/color-esperanza.md",
    "content": "---\ntitle: \"Color esperanza\"\nartist: \"Diego Torres\"\nkey: \"E\"\ncapo: 0\ntempo: 100\ntags: [\"pop latino\", \"himno\", \"esperanza\"]\n---\n\n## Intro\n[E] [GM#7] [C#m]\n\nSaber que se puede, querer que se pueda\n\n[A] [B7]\nQuitarse los miedos, sacarlos afuera\n\n[E] [GM#7] [C#m7] [A] [B7]\nPintarse la cara, color esperanza, tentar al futuro, con el corazón\n\n[E] [GM#7] [C#m7] [Bm] [E7] [Amaj7]\nSé qué hay en tus ojos con solo mirar, que estás cansado de andar y de andar\n\n[E]\n[Fm#] [B7]\nY caminar, girando siempre en un lugar.\n\n[E] [GM#7] [C#m7] [Bm] [E7] [Amaj7]\n-Sé que las ventanas se pueden abrir, cambiar el aire depende de ti\n\n[E]\n[Fm#] [B7]\nTe ayudará, vale la pena una vez más\n\n[E] [GM#7] [C#m7]\nSaber que se puede, querer que se pueda\n\n[A] [B7]\nQuitarse los miedos, sacarlos afuera\n\n[E] [GM#7] [C#m7] [A] [B7]\nPintarse la cara, color esperanza, tentar al futuro, con el corazón\n\n[E] [GM#7] [C#m7] [Bm] [E7] [Amaj7]\nEs mejor perderse que nunca embarcar, mejor tentarse a dejar de intentar\n\nAunque ya ves, que no es tan fácil empezar\n\n[Fm#] [B7]\n[E]\n[E] [GM#7] [C#m7] [Bm] [E7] [Amaj7]\n-Sé que lo imposible se puede lograr, que la tristeza algún día se irá\n\n[E]\n[Fm#] [B7]\nY así será, la vida cambia y cambiará\n\n[A] [E]\n[Fm#] [B7]\nSentirás, que el alma vuela, por cantar una vez más\n\n[E] [GM#7] [C#m7]\nSaber que se puede, querer que se pueda\n\n[A] [B7]\nQuitarse los miedos, sacarlos afuera\n\n[E] [GM#7] [C#m7] [A] [B7]\nPintarse la cara, color esperanza, tentar al futuro, con el corazón\n\n[Fm#] [B7]-[D7]\n[A] [E]\nVale más, poder brillar, que solo buscar ver el sol\n\n[G] [B7] [Em]_[C] [D] [G] [B7] [Em] [C] [A7] [D] [D7]\nPintarse la cara, color esperanza, tentar al futuro, con el corazón\n\n[G] [B7] [Em]\nSaber que se puede, querer que se pueda\n\n[C] [D]\nQuitarse los miedos, sacarlos afuera\n\n[G] [B7] [Em] [C] [D] [D7]\nPintarse la cara, color esperanza, tentar al futuro, con el corazón\n\n[G]-[B7]-[Em] [C]-[A7]-[D]\n[C] [E7] [Am]\nSaber que se pueeeeeedeeee, querer que se pueeeeeda\n\n[G] [B7] [Em] [C] [D] [D7]\nPintarse la cara, color esperanza, tentar al futuro, con el corazón\n"
  },
  {
    "id": "comme-d-habitude",
    "title": "Comme d’habitude / My Way",
    "artist": "Claude François / Sinatra",
    "key": "G",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "clásico",
      "balada",
      "internacional"
    ],
    "file": "canciones/comme-d-habitude.md",
    "content": "---\ntitle: \"Comme d’habitude / My Way\"\nartist: \"Claude François / Sinatra\"\nkey: \"G\"\ncapo: 0\ntempo: 100\ntags: [\"clásico\", \"balada\", \"internacional\"]\n---\n\n## Verso 1\n(François/ Sinatra/ Siempre así)\n\n[G] [Bm] [Em] [E7]/ [Am] [Am7] [C] [G] // [G] [G7] [C] [Cm]/ [G] [D] [C] [G]\nJe me lève et je te bouscule, tu te réveilles pas, comme d'habitude\nSur toi, je remonte le drap, j'ai peur que tu aies froid, comme d'habitude\nMa main caresse tes cheveux, presque malgré moi, comme d'habitude\nMais toi, tu me tournes le dos, comme d'habitude\n\n[G] [Bm] [Em] [E7]/ [Am] [Am7] [C] [G] // [G] [G7] [C] [Cm]/ [G] [D] [C] [G]\nAnd now the end is near, and so I face the final curtain\nMy friend, I'll say it clear, I'll state my case, of which I'm certain\nI've lived a life that's full I've travelled each and every highway\nAnd more, much more than this, I did it my way\n\n[G] [G7] [C] [Am]/ [C] [D] [B7] [Em]/ [C] [D] [C] [G]\nYes, there were times, I'm sure you knew\nWhen I bit off, more_than_I could chew\nBut through it all, when there was doubt\nI ate it up and spit it out\nI faced it all and_I stood tall, and did it my way\n\n[G] [G7] [C] [Am]/ [C] [D] [B7] [Em]/ [C] [D] [C] [G]\nTal vez lloré, tal vez reí,\ntal vez gané o tal vez perdí,\nY ahora sé que fui feliz,\nQue si lloré, también amé\ny todo fue, puedo decir, a mi manera.\n\n[G] [Bm] [Em] [E7]/ [Am] [Am7] [C] [G] // [G] [G7] [C] [Cm]/ [G] [D] [C] [G]\nQuizá yo desprecié aquello que no comprendía.\nQuizá también dudé cuando mejor me divertía.\nY hoy sé que firme fui\nY que afronté ser como era...\nY así yo me sentí a mi manera.\n\n[G] [G7] [C] [Am]/ [C] [D] [B7] [Em]/ [C] [D] [C] [G]\nPorque sabrán, que un hombre así\nconocerán, por su vivir\nno hay porque hablar ni que decir,\nni hay que llorar, que hay que fingir\npuedo llegar hasta el final, a mi manera.\n"
  },
  {
    "id": "como-camaron",
    "title": "Como Camarón",
    "artist": "Estopa",
    "key": "Am",
    "capo": 0,
    "tempo": 136,
    "tags": [
      "rumba",
      "rock",
      "español",
      "90s"
    ],
    "file": "canciones/como-camaron.md",
    "content": "---\ntitle: \"Como Camarón\"\nartist: \"Estopa\"\nkey: \"Am\"\ncapo: 0\ntempo: 136\ntags: [\"rumba\", \"rock\", \"español\", \"90s\"]\n---\n\n## Intro\n[Am] [G] [Em] [F] [E]\n[Am] [G] [Em] [F] [E]\n\n## Verso 1\n[Am] Superior a mí...\nEs la fuerza que me lleva en el pulso que mantengo\n[G] Con la oscuridad que tiñen de oscuro tus ojos negros.\n[Em] Y que me cuentas del tiempo que pasa en tu pestañeo\n[F] Y que me trae por esta calle de amargura y de lamento. [E]\n\n## Coro\n[F] Que yo sé que la sonrisa que se dibuja en mi [G] cara\nTiene que ver con la brisa que [Em]abanica tu mi[Am]rada.\n[F] Tan despacio y tan deprisa, tan normal y tan extraña, [G]\n[Em] Yo me parto la [F]camisa como [G]Camarón.\n[Am] Tú me rompes las entrañas, me trepas como una [Em] araña,\nBebes del [F] sudor que empaña el cristal de mi habita[G]ción.\n[Am] Y después por la mañana despierto y no tengo [Em] alas,\nLlevo diez [F] horas durmiendo y mi almohada está empa[G]pada.\n[F] Todavía ha sido un sueño muy real y muy profundo,\n[Em] Tus ojos no tienen dueño porque no son de este mundo...\n\n## Verso 2\n[Am] Que no te quiero mirar, pero es que cierro los ojos\nY hasta te veo por dentro, te veo en un lado y en [G] otro,\nEn cada foto, en cada espejo y en las paradas del [Em] metro,\nY en los ojos de la gente, hasta en las sopas más calientes, [F]\nLoco yo me estoy vol[E]viendo.\n\n## Coro\n[F] Que yo sé que la sonrisa que se dibuja en mi [G] cara\nTiene que ver con la brisa que [Em]abanica tu mi[Am]rada.\n[F] Tan despacio y tan deprisa, tan normal y tan extraña, [G]\n[Em] Yo me parto la [F]camisa como [G]Camarón.\n[Am] Tú me rompes las entrañas, me trepas como una [Em] araña,\nBebes del [F] sudor que empaña el cristal de mi habita[G]ción.\n[Am] Y después por la mañana despierto y no tengo [Em] alas,\nLlevo diez [F] horas durmiendo y mi almohada está empa[G]pada.\n[F] Todavía ha sido un sueño muy real y muy profundo,\n[Em] Tus ojos no tienen dueño porque no son de este mundo...\n\n## Puente\n[Am] Y a veces me confundo y pico a tu vecina,\n[G] Esa del segundo que vende cosas finas,\n[Em] Y a veces te espero en el bar de la esquina\nCon la mirada fija en tu portería. [F]\nY a veces me como de un bocao' el [G] mundo,\nY a veces te siento y a veces te [Em] tumbo,\nA veces te leo un beso en los [F] labios,\nY como yo no me [G]atrevo, me corto y me [E]abro.\n\n## Coro Final\n[F] Que yo sé que la sonrisa que se dibuja en mi [G] cara\nTiene que ver con la brisa que [Em]abanica tu mi[Am]rada.\n[F] Tan despacio y tan deprisa, tan normal y tan extraña, [G]\n[Em] Yo me parto la [F]camisa como [G]Camarón.\n[Am] Tú me rompes las entrañas, me trepas como una [Em] araña,\nBebes del [F] sudor que empaña el cristal de mi habita[G]ción.\n[Am] Y después por la mañana despierto y no tengo [Em] alas,\nLlevo diez [F] horas durmiendo y mi almohada está empa[G]pada.\n[F] Todavía ha sido un sueño muy real y muy profundo,\n[Em] Tus ojos no tienen dueño porque no son de este mundo... [Am]\n"
  },
  {
    "id": "contaminame",
    "title": "Contamíname",
    "artist": "Pedro Guerra",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "canción de autor",
      "español",
      "90s"
    ],
    "file": "canciones/contaminame.md",
    "content": "---\ntitle: \"Contamíname\"\nartist: \"Pedro Guerra\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"canción de autor\", \"español\", \"90s\"]\n---\n\n## Intro\n[Am] [G]/ [C] [F] [Dm]\n\n[Am] [G] [Am] (2)\nCuéntame el cuento del árbol dátil de los desiertos, de las mezquitas de tus abuelos\nDame los ritmos de las darbukas, de los secretos que hay en los libros que yo no leo\n\n[C] [G] [F]-[G]-[C] (4)\nContamíname, pero no con el humo que asfixia el aire,\nVen, pero sí con tus ojos y con tus bailes.\nVen, pero no con la rabia y los malos sueños.\nVen, pero sí con los labios que anuncian besos.\n\n[C] [G] [Dm] [G]/ [F]-[G] (2) [C]\nContamíname, mézclate conmigo, que bajo mi rama tendrás abrigo (2)\n\n[Am] [G] [Am] (2)\nCuéntame el cuento de las cadenas que te trajeron, de los tratados y los viajeros\nDame los ritmos de los tambores y los voceros, del barrio antiguo y del barrio nuevo\n\n[C] [G] [F]-[G]-[C] (4)\nContamíname, pero no con el humo que asfixia el aire,\nVen, pero sí con tus ojos y con tus bailes.\nVen, pero no con la rabia y los malos sueños.\nVen, pero sí con los labios que anuncian besos.\n\nContamíname, mézclate conmigo, que bajo mi rama tendrás abrigo (2)\n\n[C] [G] [Dm] [G]/ [F]-[G] (2) [C]\n[Am] [G] [Am] (2)\nCuéntame el cuento de los que nunca se descubrieron,\nDel río verde y de los boleros.\nDame los ritmos de los buzukis, los ojos negros,\nLa danza inquieta del hechicero\n\nContamíname, pero no con el humo que asfixia el aire,\nVen, pero sí con tus ojos y con tus bailes.\nVen, pero no con la rabia y los malos sueños.\nVen, pero sí con los labios que anuncian besos.\n\n[C] [G] [F]-[G]-[C] (4)\n[C] [G] [Dm] [G]/ [F]-[G] (2) [C]\nContamíname, mézclate conmigo, que bajo mi rama tendrás abrigo (4)\n"
  },
  {
    "id": "copacabana",
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
    ],
    "file": "canciones/copacabana.md",
    "content": "---\ntitle: \"Copacabana\"\nartist: \"Izal\"\nkey: \"Am\"\ncapo: 0\ntempo: 128\ntags: [\"indie\", \"rock\", \"español\", \"2010s\"]\n---\n\n## Intro\n[Am] [Em] [Am]\n\n## Verso 1\n[Am] Antes de nada dejaremos claras las páginas que nos im[Em]portan, [Am]\nLas de libros abiertos de vidas cercanas, paredes que por siempre callan.\n[Am] Y al resto del mundo deseo sin[G]cero de éxitos en la batalla,\nQue [Am] pensemos despacio, que[C]ramos deprisa y cami[G]nemos con la frente [Am] alta.\n\n## Verso 2\n[Am] Incluso en este justo momento en que nada ocurre,\n[C] Calma blanca, ropa de cama de hotel, olores de vida plena.\n[Dm] Sexo ligero, [F] agua fresca, zumo de fruta y ca[Am]fé.\n[Am] Incluso ahora que ya no hay miedo, que nada tiembla,\n[C] Sal de baño, brillo dorado en la piel y un beso sincero en la boca,\n[Dm] Pies descalzos, [F] arena virgen, Copaca[Am]bana y claqué.\n\n## Verso 3\n[Am] Cine desierto, sol en la cara, latina ardiente, ron de caña,\n[C] Domingo desde las tres, terraza de vino y rosas.\n[Dm] Soñar despierto, [F] dormir contigo, viajar des[Am]pacio y volver.\n\n## Coro\nEs un [F] parpadeo, un [G] rápido destello,\nUn [Am] rayo de sol que deja ciego.\nCambia en un [F] instante la [G] forma en que los cuerpos\nToman [Am] aire. Y para el tiempo.\n\n## Puente\n[Am] Así que atentos todos al cielo, calma, quietos,\n[C] Cojan aire, quizá nos toque correr.\nQue al [Dm] menos quede el re[F]cuerdo de aquel momento que fue per[Am]fecto,\nCopacabana y claqué.\n\n## Coro\nEs un [F] parpadeo, un [G] rápido destello,\nUn [Am] rayo de sol que deja ciego.\nCambia en un [F] instante la [G] forma en que los cuerpos\nToman [Am] aire. Y para el tiempo.\n"
  },
  {
    "id": "copenhague",
    "title": "Copenhague",
    "artist": "Vetusta Morla",
    "key": "Bm",
    "capo": 0,
    "tempo": 96,
    "tags": [
      "indie",
      "pop",
      "español",
      "acústico"
    ],
    "file": "canciones/copenhague.md",
    "content": "---\ntitle: \"Copenhague\"\nartist: \"Vetusta Morla\"\nkey: \"Bm\"\ncapo: 0\ntempo: 96\ntags: [\"indie\", \"pop\", \"español\", \"acústico\"]\n---\n\n## Intro\n\n[Bm] [G] [D]\n[Bm] [G] [D]\n\n## Verso 1\n\n[Bm] Él corría, nunca le [G]enseñaron a andar,\nSe fue, tras luces [D]pálidas.\n[Bm] Ella huía de [G]espejismos y horas de más,\nAero[D]puertos, unos vienen, otros se van,\n[Bm] Igual que Alicia [G]sin ciudad,\nEl valor para [D]marcharse, el miedo a [A]llegar.\n\n## Pre-Coro\n\n[Bm] Llueve en el [G]canal,\nLa corriente enseña el [D]camino hacia el [A]mar,\n[Bm] Todos duermen [G]ya.\n\n## Coro\n\nDejarse [D]llevar, suena [A]demasiado [G]bien,\nJugar al [D]azar,\nNunca saber [A]dónde puedes [G]terminar\nO [D]empezar.\n\n## Verso 2\n\n[Bm] Un instante mientras los [G]turistas se van,\nUn tren de madru[D]gada, consiguió tra[Bm]zar [G]\nLa frontera entre [D]siempre o jamás.\n\n## Pre-Coro\n\n[Bm] Llueve en el [G]canal,\nLa corriente [D]enseña, camino hacia el [A]mar,\n[Bm] Todos duermen [G]ya.\n\n## Coro\n\nDejarse [D]llevar suena [A]demasiado [G]bien,\nJugar al [D]azar,\nNunca saber [A]dónde puedes [G]terminar\nO [D]empezar...\nO [G]empezar, [A]ah-ah-ah.\n\n## Verso 3\n\n[Bm] Ella duerme, tras el [G]vendaval,\nNo se quitó la [D]ropa,\nSueña con desper[Bm]tar [G]\nEn otro tiempo y en [D]otra ciudad.\n\n## Coro Final\n\nDejarse [D]llevar suena [A]demasiado [G]bien,\nJugar al [D]azar,\nNunca saber [A]dónde puedes tu [G]acabar...\nO [D]empezar (terminar),\nO [G]empezar (terminar),\nO [A]empezar (terminar),\nO [D]empezar.\n"
  },
  {
    "id": "corazon-partio",
    "title": "Corazón partío",
    "artist": "Alejandro Sanz",
    "key": "C",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop",
      "español",
      "balada",
      "90s"
    ],
    "file": "canciones/corazon-partio.md",
    "content": "---\ntitle: \"Corazón partío\"\nartist: \"Alejandro Sanz\"\nkey: \"C\"\ncapo: 0\ntempo: 100\ntags: [\"pop\", \"español\", \"balada\", \"90s\"]\n---\n\n## Intro\n[C] [Em] [Am]\n\nTiritas pa este corazón partío (2)\nYa lo ves, que no hay dos sin tres\nQue la vida va y viene y que no se detiene, y qué sé yo\nPero miénteme, aunque sea dime que algo queda entre nosotros dos\nQue en tu habitación nunca sale el sol ni existe el tiempo ni el dolor\n\n[F] [G] [Em] [A7]\nLlévame si quieres a perder a ningún destino, sin ningún por qué\n\n[C] [Em] [Am]_ [Em]\nYa lo sé, que corazón que no ve\nEs corazón que no siente o corazón que te miente, amor\nPero, sabes que en lo más profundo\nDe mi alma sigue aquel dolor\nPor creer en ti ¿Qué fue de la ilusión y de lo bello que es vivir?\n\nPara qué me curaste cuando estaba\n\n[F] [G] [Em] [A7]\nSi hoy me dejas de nuevo el corazón\n\nherío\n\n¿Y quién me va a entregar sus emociones?\n¿Quién me va a pedir\nQue nunca le abandone?\n¿Quién me tapará esta noche si hace frío?\n¿Quién me va a curar el corazón partió?\n¿Quién llenará de primaveras este enero\nY bajará la luna para que juguemos?\nDime, si tú te vas, dime cariño mío\n¿Quién me va a curar el corazón partió?\n\npartío\n\nTiritas pa este corazón partío (2)\n\nDar solamente aquello que te sobra\nNunca fue compartir, sino dar limosna, amor\nSi no lo sabes tú, te lo digo yo\nDespués de la tormenta siempre llega la calma\nPero, sé que después de ti\nDespués de ti no hay nada\n"
  },
  {
    "id": "corazon-salvaje",
    "title": "Corazón salvaje",
    "artist": "Marcela Morelo",
    "key": "Em",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop latino",
      "charango",
      "90s"
    ],
    "file": "canciones/corazon-salvaje.md",
    "content": "---\ntitle: \"Corazón salvaje\"\nartist: \"Marcela Morelo\"\nkey: \"Em\"\ncapo: 0\ntempo: 100\ntags: [\"pop latino\", \"charango\", \"90s\"]\n---\n\n## Intro\n[Em]_[B7]_[Em]\n\nAy corazón, corazón, corazón,\nQue si no me avisas, te estaré esperando,\nAy corazón, corazón, corazón,\nPues si tú no vienes yo de aquí me marcho\n\n[Em] [E7] [Am] [Em] [B7] [Em](2)\nAy corazón(3)\nYa vivimos juntos una fantasía,\n/: Ven hacia mí, corazón ven,\nSacúdeme la vida:/ (2)\n\n[A] [C#m] [Bm] [E7](2)\nAy corazón bonito, ay corazón salvaje,\nDeja de pensar, que se hace muy tarde ya\nAy corazón bonito, ay corazón salvaje,\nDeja de pensar, vamos juntos a gozar.\n\n[Em] [Am] [D] [B7] (2)\n[A] [C#7] [D] -[m]/ [A] [E7] [A]([C#m] [Bm] [E7])\nY yo, sé que nunca olvidaré\n\n/:Que bajo la luz de la luna yo te amé:/\n\n> Da\nYo no pensaba, no pude imaginar…\n\nDéjame\n\n[Em] [E7] [Am] [Em] [B7] [Em](2)\n[G] [Em] [C] [D] (2) [Am] [D] [G] [Em]/[Am] [F] [D]\nDéjame, no juegues más conmigo\n\n[G] [Em] [C] [D] (2) [Am] [D] [G]/[Am] [D] [G]\nDéjame, no vuelvas a mi lado\nUna vez, estuve equivocado\n\n[Em] [B7]\nPero, ahora, todo eso pasó\nNo queda nada de ese amor\n\nYo me muero por tus besos,\n\nPorque a tu lado yo, no volveré, no volveré\n\nTú te mueres por bailar\n\n[G] [Em] [C] [D] (2) [Am] [D] [G] [Em]/[Am] [F] [D]\nAy corazón, corazón, corazón (3)\nYo me muero por tus besos,\nTú te mueres por bailar\nAy corazón, corazón, corazón (3)\nYa deja de pensar y ven aquí a gozar\n"
  },
  {
    "id": "creep",
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
    ],
    "file": "canciones/creep.md",
    "content": "---\ntitle: \"Creep\"\nartist: \"Radiohead\"\nkey: \"G\"\ncapo: 0\ntempo: 92\ntags: [\"rock\", \"90s\", \"alternative\", \"himno\", \"fácil\"]\n---\n\n// La magia de esta canción está en el paso de C mayor a Cm menor: G - B - C - Cm\n\n## Intro\n[G] [B] [C] [Cm]\n[G] [B] [C] [Cm]\n\n## Verso 1\nWhen you were here be[G]fore\nCouldn't look you in the [B] eye\nYou're just like an [C] angel\nYour skin makes me [Cm] cry\n\n[G] You float like a feather\nIn a beautiful [B] world\nI wish I was [C] special\nYou're so fucking [Cm] special\n\n## Coro\nBut I'm a [G] creep\nI'm a [B] weirdo\nWhat the hell am I doing [C] here?\nI don't be[Cm]long here\n\n## Verso 2\n[G] I don't care if it hurts\nI wanna have con[B]trol\nI want a perfect [C] body\nI want a perfect [Cm] soul\n\n[G] I want you to notice\nWhen I'm not a[B]round\nYou're so fucking [C] special\nI wish I was [Cm] special\n\n## Coro\nBut I'm a [G] creep\nI'm a [B] weirdo\nWhat the hell am I doing [C] here?\nI don't be[Cm]long here\n\n## Puente\n[G] She's running out the [B] door...\n[C] She's running, she [Cm] runs, runs, runs...\n[G] Runs... [B]\n[C] Runs... [Cm]\n\n## Outro\nWhatever makes you [G] happy\nWhatever you [B] want\nYou're so fucking [C] special\nI wish I was [Cm] special\nBut I'm a [G] creep...\n"
  },
  {
    "id": "cruz-de-navajas",
    "title": "Cruz de navajas",
    "artist": "Mecano",
    "key": "Dm",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop",
      "80s",
      "español"
    ],
    "file": "canciones/cruz-de-navajas.md",
    "content": "---\ntitle: \"Cruz de navajas\"\nartist: \"Mecano\"\nkey: \"Dm\"\ncapo: 0\ntempo: 100\ntags: [\"pop\", \"80s\", \"español\"]\n---\n\n## Intro\n[Dm] [G7] [C] ([Am]/[Em]/[Am]) (3) [Dm] [G]\n\nA las cinco se cierra la barra del 33,\nPero Mario no sale hasta las seis,\nY si encima le toca hacer caja, despídete,\nCasi siempre se le hace de día,\n\n[Am] [Em] [Dm]-[G7]-[C] (2) [Dm] [G]\nMientras María ya se ha puesto en pie,\nHa hecho la casa, ha hecho hasta el café\nY le espera medio desnuda.\n\n[Dm] [G7] [C] ([Am]/[Em]/[Am]) (3) [Dm] [G]\nMario llega cansado y saluda,\nSin mucho afán,\nQuiere cama, pero otra variedad,\nY María se moja las ganas en el café,\nMagdalenas del sexo convexo.\n\n[Am] [Em] [Dm]-[G7]-[C] (2) [Dm] [G]\nLuego el trabajo en un gran almacén,\nCuando regresa no hay más que un somier,\nTaciturno que usar por turnos\n\n[C] [G7] [Am] [G7](3) -[C]\nCruz de navajas por una mujer,\nGritos mortales despuntan al alba,\nSangres que tiñen de malva el amanecer.\n\n[Dm] [G7] [C] ([Am]/[Em]/[Am]) (3) [Dm] [G]\nPero hoy como ha habido redada en el 33,\nMario vuelve a las cinco menos diez.\nPor su calle vacía a lo lejos sólo se ve\nA unos novios comiéndose a besos.\n\n[Am] [Em] [Dm]-[G7]-[C] (2) [Dm] [G]\nEl pobre Mario se quiere morir,\nCuando se acerca para descubrir\nQue es María con compañía\n\n[Dm] [G7]// [Am] [Em.] [F]-[G]-[C](2) [Dm] [G7]\nSobre Mario, de bruces, tres cruces,\nUna en la frente, la que más dolió\nOtra en el pecho, la que lo mató,\nY otra miente en el noticiero:\n\n[C]-[G7]-[Am]-[G7](3) -[C]\nDos drogadictos en plena ansiedad\nRoban y matan a Mario Postigo,\nMientras su esposa es testigo\nDesde el portal, en vez de..\n\nY si el niño llora, menguará la luna\nPara hacerle una cuna (2)\n"
  },
  {
    "id": "cuento-para-mi-nino",
    "title": "Cuento para mi niño",
    "artist": "Lole y Manuel",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "flamenco",
      "nuevo flamenco",
      "poético"
    ],
    "file": "canciones/cuento-para-mi-nino.md",
    "content": "---\ntitle: \"Cuento para mi niño\"\nartist: \"Lole y Manuel\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"flamenco\", \"nuevo flamenco\", \"poético\"]\n---\n\n## Intro\n[Am] [Dm]\n\nÉrase una vez, una mariposa blanca\n\n[Am] [E7] [Am]\nque era la reina de todas las mariposas del alba\n\n[Dm] [Am]\nSe posaba en los jardines, sobre las flores más bellas\n\ny le susurraba historias al clavel y la violeta\n\n[E7] [Am]\n[Am] [G] [F]\nFeliz la mariposilla, presumidilla y coqueta\n\nparecía una flor de almendro, mecida por brisa fresca.\n\n[E7] [Am]\n[A7] [Dm] [Am]\nMas llegó un coleccionista, mañana de primavera\n\n[E] [E7] [Am]\ny sobre un jazmín en flor, aprisionó a nuestra reina,\n\n[Dm] [E7] [F] [E]\nla clavó con alfileres, entre cartulinas negras\n\n[E7] [Am]\ny la llevó a su museo de breves bellezas muertas.\n\nLas mariposas del alba lloraban por la floresta.\n\n[E7] [Am]\n[Am] [G] [F]\nSobre un clavel se posó una mariposa blanca\n\n[E]\n"
  },
  {
    "id": "dame-una-sonrisa",
    "title": "Dame una sonrisa",
    "artist": "Sandra Cires",
    "key": "C",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop",
      "latino",
      "positivo"
    ],
    "file": "canciones/dame-una-sonrisa.md",
    "content": "---\ntitle: \"Dame una sonrisa\"\nartist: \"Sandra Cires\"\nkey: \"C\"\ncapo: 0\ntempo: 100\ntags: [\"pop\", \"latino\", \"positivo\"]\n---\n\n## Intro\n[C] [Dm] [F] [C]\n\nTengo una alegría\nQue me llena de energía cuando despierto\nMe tiene volando, sin el aeropuerto\nTienes una vibra positiva\nY mil razones pa estar contento\nNacimos pa ser felices, no pa ser perfectos.\n\nDame, dame una sonrisa\nQue lo bello de la vida es gratis\nSin tener visa (oye)\nDame, dame otra sonrisa\nQue la vida es corta\nBáilala, que pasa de prisa\nNadie me divierte como tú\nNadie mira como lo haces tú y por eso\nQuiero perderme contigo, te digo\nNadie besa como besas tú\nNadie ríe como lo haces tú y por eso\nQuiero quedarme contigo, te digo\nDame, dame una sonrisa\nQue la vida es corta baílala que pasa deprisa\n\nTengo el poder pa quedarme donde lo merezco\nY de no quedarme donde no florezco\nMe quedé contigo porque el universo\nPor tus ojitos me mira\nYo no necesito una mansión\nYo soy feliz donde lo sea mi corazón\nAquí nadie necesita aprobación\nNo importa cuanto tenga, ni de dónde son\nEl alma no tiene color (no no no)\nBaila que la vida es un momento\nSi tienes mala vibra pues lo siento\nSi ya no tengo un buen día me lo invento\nYo misma me lo invento (oye)\n\nNadie me divierte como tú…\nDame, dame una sonrisa…\nNadie me divierte como tú…\n\n[C] [G…]\nYo pegaré un grito al cielo…\n"
  },
  {
    "id": "dame-veneno",
    "title": "Dame veneno",
    "artist": "Los Chunguitos",
    "key": "E",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rumba",
      "flamenco",
      "70s"
    ],
    "file": "canciones/dame-veneno.md",
    "content": "---\ntitle: \"Dame veneno\"\nartist: \"Los Chunguitos\"\nkey: \"E\"\ncapo: 0\ntempo: 100\ntags: [\"rumba\", \"flamenco\", \"70s\"]\n---\n\n## Verso 1\n(Los Chunguitos 1976\n\n[E] [F]\n)\n\nDame veneno que quiero morir,\n\n[G]\nDame veneno\nQue antes prefiero la muerte,\n\nQue vivir contigo, dame veneno,\n\n[F]\n[E]\nAy para morir (2)\n\nAy que adelantas con tener,\n\n[E] [F]\nLos ojos como las moras\n\n[G]\nSi cuando sales a la calle,\n\n[F]\n[E]\nAy de cualquiera te enamoras\n\n[E] [F]\n-Ay mira si eres presumía,\n\nAy mira si eres presumía\n\n[G]\n"
  },
  {
    "id": "de-ellos-aprendi",
    "title": "De ellos aprendí",
    "artist": "David Rees",
    "key": "G",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop",
      "acústico",
      "español"
    ],
    "file": "canciones/de-ellos-aprendi.md",
    "content": "---\ntitle: \"De ellos aprendí\"\nartist: \"David Rees\"\nkey: \"G\"\ncapo: 0\ntempo: 100\ntags: [\"pop\", \"acústico\", \"español\"]\n---\n\n## Intro\n[G] [C] [Em] [D]/ [C] [G] [D] [Em] [C] [D] [G]\n\n[G] [C] [Em] [D]/ [C] [G] [D] [Em] [C] [D]\nHoy voy a hablarte de mis héroes\nQue me vieron crecer\nDesde el león que se hizo rey\nHasta la princesa que rompió la ley\nSi me preguntas a mí, de ellos aprendí\nQue hay personas\nPor las que vale la pena derretirse\nTodo es posible, incluso lo imposible\nLas virtudes a veces están bajo la superficie\nLa belleza está en el interior\nRecuérdame, aunque te diga adiós\nDebo dejar de ser algo que no soy\n\nSupercalifragilisticoespialidoso\nCreo\n_que_\nsí que estás completamente loco\nPero te cuento un secreto, entre nosotros\n(Las mejores personas lo están)\nSi al hablar no has de agradar, mmh\nTe será mejor callar\nHasta el infinito y más allá\n\n> A.C\n.\n\n[G] [C] [Em]/[C] [D] [G]\nLa vida no es perfecta para ser maravillosa\nSoy una hermosa mariposa\nTu identidad es tu posesión más valiosa\nProtégela\n\n[G] [C] [Em] [D]/ [C] [G] [D] [Em] [C] [D] [G]\na toda costaaaa, ah\nRecuerda siempre quién eres y ya está\n\nLlorar me tranquiliza los problemas de la vida\nElimina de tu vida, si elimina tu sonrisa\nHay una lágrima por cada risa\nEres más valiente de lo que crees, mmh\n¿Por qué tenemos que crecer?\nLa segunda estrella a la derecha,\nTodo recto hasta el amanecer\n\n[C] [G] [D] [Em] [C]/ [G] [D] [G]\nBoo! Sigue nadando, sigue nadando\nQuiero ser como tú\nHakuna matata, vive y deja vivibidi-babidi-bu\n-Hay un amigo en mí, tan blandito\nQue me quiero morir, de ellos aprendí.\n\n[G] [C] [Em] [D] [G]/ [C] [Em] [C] [D] [G]\nAférrate a aquello que te hace diferente\nSi esperas el momento oportuno, era ese\n\"Ohana\" significa familia,\nFamilia estar juntos siempre\nQue tu alma libre esté\nY que nunca es tarde para ser joven\n\n[C] [G] [D] [Em]/ [C] [D]\nTira de la palanca\nDeshonra sobre tu vaca\nQue hay que explorar lo inexplorado\nQue nadie se mueva\nTengo un dragón y no tengo miedo a utilizarlo\nDe verdad, de la buena\n\nBoo! Sigue nadando, sigue nadando\nQuiero ser como tú\nHakuna matata, vive y deja vivibidi-babidi-bu\n-Hay un amigo en mí, tan blandito\nQue me quiero morir, de ellos aprendí.\n\n[C] [G] [D] [Em] [C]/ [G] [D] [G]\n-Escucha a tu corazón y lo entenderás (uh-uhm)\n\nHakuna matata, vive y deja vivibidi-babidi-bu\n-Hay un amigo en mí, tan blandito\nQue me quiero morir, de ellos aprendí.\n\n[G] [C] [Em] [D]/ [C] [G] [D] [Em] /[C] [D] [G]\n[G] [C] [Em] [D]/ [C] [G] [D] [Em]/ [C] [D] [G] -[D]-[G]\nCada\ndía\nde lluvia tiene su arcoíris\n_\n_\nEl camino correcto no es el más fácil\nEspejito, espejito, eternamente agradecido\n-No te centres en lo que dejas atrás\nBusca lo más vital\n\nAhora que ya sabes quiénes son, me creerás\nSi te digo que los animales saben hablar\nQue algún día sabré volar\nQue la magia es de verdad\n-De ellos aprendí\nQue_por_\nmucho\n_que vuele lejos de aquí\nSeguirán siempre junto a mí, uhm-uh\n\n[C] [G] [D] [Em] [C]/ [G] [D] [G]\nBoo! Sigue nadando, sigue nadando\nQuiero ser como tú\n"
  },
  {
    "id": "de-musica-ligera",
    "title": "De Música Ligera",
    "artist": "Soda Stereo",
    "key": "Bm",
    "capo": 0,
    "tempo": 124,
    "tags": [
      "rock",
      "latino",
      "argentina",
      "himno",
      "90s"
    ],
    "file": "canciones/de-musica-ligera.md",
    "content": "---\ntitle: \"De Música Ligera\"\nartist: \"Soda Stereo\"\nkey: \"Bm\"\ncapo: 0\ntempo: 124\ntags: [\"rock\", \"latino\", \"argentina\", \"himno\", \"90s\"]\n---\n\n## Intro\n[Bm] [G] [D] [A] (x4)\n\n## Verso 1\n[Bm] Ella dur[G]mió [D] al calor de las [A] masas\n[Bm] Y yo desper[G]té [D] queriendo so[A]ñarla.\n[Bm] Algún tiempo a[G]trás [D] pensé en escri[A]birle,\n[Bm] Y nunca sor[G]teé [D] las trampas del a[A]mor.\n\n## Coro\n[Bm] De aquel a[G]mor [D] [A]\nDe música li[Bm]gera, [G] [D] [A]\n[Bm] Nada nos [G] libra, [D] [A]\nNada más [Bm] queda. [G] [D] [A]\n\n## Verso 2\n[Bm] No le envia[G]ré [D] cenizas de [A] rosas,\n[Bm] Ni pienso evi[G]tar [D] un roce se[A]creto.\n\n## Coro\n[Bm] De aquel a[G]mor [D] [A]\nDe música li[Bm]gera, [G] [D] [A]\n[Bm] Nada nos [G] libra, [D] [A]\nNada más [Bm] queda. [G] [D] [A]\n\n## Solo\n[Bm] [G] [D] [A] (x4)\n\n## Coro Final\n[Bm] De aquel a[G]mor [D] [A]\nDe música li[Bm]gera, [G] [D] [A]\n[Bm] Nada nos [G] libra, [D] [A]\nNada más [Bm] queda, [G] [D] [A]\nNada más [Bm] queda... [G] [D] [A] [Bm]\n"
  },
  {
    "id": "dejame",
    "title": "Déjame",
    "artist": "Los Secretos",
    "key": "G",
    "capo": 0,
    "tempo": 128,
    "tags": [
      "pop",
      "rock",
      "español",
      "80s"
    ],
    "file": "canciones/dejame.md",
    "content": "---\ntitle: \"Déjame\"\nartist: \"Los Secretos\"\nkey: \"G\"\ncapo: 0\ntempo: 128\ntags: [\"pop\", \"rock\", \"español\", \"80s\"]\n---\n\n## Intro\n[G] [Em] [C] [D] (x2)\n\n## Verso 1\n[G] Déjame, no [Em] juegues más con[C]migo, [D]\n[G] Esta vez en [Em] serio te lo [C] digo. [D]\n[Am] Tuviste una oportuni[D]dad\n[G] Y la dejaste esca[Em]par.\n[Am] [F] [D]\n\n## Verso 2\n[G] Déjame, no [Em] vuelvas a mi [C] lado, [D]\n[G] Una vez es[Em]tuve equivo[C]cado, [D]\n[Am] Pero ahora todo eso pa[D]só,\n[G] No queda nada de ese a[Em]mor.\n[Am] [D] [G] [G7]\n\n## Coro\n[C] No hay nada que ahora ya [D] puedas hacer\n[C] Porque a tu lado yo no volve[D]ré.\nNo volve[G]ré. [Em] [C] [F] [D]\n\n## Verso 3\n[G] Déjame, ya [Em] no tiene sen[C]tido, [D]\n[G] Es mejor que [Em] sigas tu ca[C]mino, [D]\n[Am] Que yo el mío segui[D]ré,\n[G] Por eso ahora déja[Em]me.\n[Am] [D] [G]\n\n## Solo\n[C] [D] [C] [D]\n[G] [Em] [C] [F] [D]\n\n## Coro Final\n[C] No hay nada que ahora ya [D] puedas hacer\n[C] Porque a tu lado yo no volve[D]ré.\nNo volve[G]ré. [Em] [C] [D]\nDéja[G]me.\n"
  },
  {
    "id": "dejate-querer",
    "title": "Déjate querer",
    "artist": "José Manuel Soto",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rumba",
      "flamenco",
      "español"
    ],
    "file": "canciones/dejate-querer.md",
    "content": "---\ntitle: \"Déjate querer\"\nartist: \"José Manuel Soto\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"rumba\", \"flamenco\", \"español\"]\n---\n\n## Verso 1\nNo estaba muerto,\nEstaba de parranda\n\n[Am] [E] [Am]\nSi llego tarde a casa de andar luchando\nPor esos mundos de Dios;\nLlego necesitado\nDe tus caricias y tus palabras de amor\n\n[Am]-7 [Dm] [Am] [E] (2) [Am]\nNo me niegues un beso\nSolo por eso mala mujer\nDéjate querer, mujer, déjate querer,\nDéjate querer, mujer cruel\n\n(2)\nTodo te lo he entregado\nTe he regalado, todita mi juventud;\nY tú me das a cambio\nCon tu desprecio penas amargas de cruz.\n"
  },
  {
    "id": "depende",
    "title": "Depende",
    "artist": "Jarabe de Palo",
    "key": "C",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop rock",
      "rock latino",
      "90s"
    ],
    "file": "canciones/depende.md",
    "content": "---\ntitle: \"Depende\"\nartist: \"Jarabe de Palo\"\nkey: \"C\"\ncapo: 0\ntempo: 100\ntags: [\"pop rock\", \"rock latino\", \"90s\"]\n---\n\n## Verso 1\nJarabe De Palo)\n\n(\n\n[C] [Am] [C]\nQue el blanco sea blanco\nY que el negro sea negro,\nQue uno y uno sean dos\nPorque exactos son los números, depende.\n-Que aquí estamos de prestao,\nQue hoy el cielo está nublao,\nQue uno nace y luego muere,\nY este cuento se ha acabao..... depende.\n\n[F] [C] [Am] [E] /[F] [C] [G] [C]-[Am]-[G]-[F]-[C]\n-Depende, de qué depende,\nDe según como se mire todo depende.\n-Depende, de que depende,\nQue según como se mire todo depende\n\nQue bonito es el amor,\nMás que nunca en primavera,\nQue mañana sale el sol\nPorque estamos en agosto, depende.\n-Que con el paso del tiempo\nEl vino se hace bueno,\nQue todo lo que sube baja\nDe abajo a arriba y de arriba abajo, depende.\n\n[F] [C] [Am] [E] /[F] [C] [G] [C] [Am] [G] [F] [C]\n-Depende, de qué depende,\nDe según como se mire todo depende.\n-Depende, de que depende,\nQue según como se mire todo depende\n\nQue no has conocido a nadie\nQue te bese como yo,\nQue no hay otro hombre en tu vida\nQue de ti se beneficie..... depende.\n-Que sí quiere decir sí\nCada vez que abres la boca,\nQue te hace muy feliz\nQue hoy sea el día de tu boda, depende.\n\n[F] [C] [Am] [E] /[F] [C] [G] [C] [Am] [G] [F] [C]\n-Depende, de qué depende,\nDe según como se mire todo depende.\n-Depende, de que depende,\nQue según como se mire todo depende\n"
  },
  {
    "id": "derroche",
    "title": "Derroche",
    "artist": "Ana Belén",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "merengue lento",
      "balada",
      "latino"
    ],
    "file": "canciones/derroche.md",
    "content": "---\ntitle: \"Derroche\"\nartist: \"Ana Belén\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"merengue lento\", \"balada\", \"latino\"]\n---\n\n## Intro\n[Am] [F] [Am]\n\nEl reloj de cuerda suspendido\nEl teléfono desconectado\nEn una mesa dos copas de vino\nY a la noche se le fue la mano.\n-Una luz rosada imaginamos\nComenzamos por probar el vino\nCon mirarnos todo lo dijimos\nY a la noche se le fue la mano.\n\n[C] [G] [F] [E7]/ [Am] [E7](2)\nSi supiera contar todo lo que sentí\nNo quedó un lugar que no anduviera en ti\n-Besos ternura, que derroche de amor,\nCuanta locura (2)\n\n[C] [G] [F] [E7]/ [Am] [E7] [Am]\nQue no acabe esta noche ni esta luna de abril\nPara entrar en el cielo no es preciso morir\n-Besos ternura, que derroche de amor,\nCuanta locura (2)\n\nParecíamos dos irracionales\nQue se iban a morir mañana.\nDerrochamos, no importaba nada,\nLas reservas de los manantiales\nParecíamos dos irracionales\nQue se iban a morir mañana.\n\n[C] [G] [F] [E7]/ [Am] [E7](2)\nSi supiera contar todo lo que sentí\nNo quedó un lugar que no anduviera en ti\n-Besos ternura, que derroche de amor,\nCuanta locura (2)\n\nQue no acabe esta noche ni esta luna de abril\nPara entrar en el cielo no es preciso morir\n\n[C] [G] [F] [E7]/ [Am] [E7] [Am]\nBesos, ternura,\nY la noche es testigo de esta inmensa locura\nBesos, ternura,\nNuestra ruta de amor se convierte en ternura\n\n-Besos ternura, que derroche de amor,\nCuanta locura (2) Besos\n"
  },
  {
    "id": "desaparecido",
    "title": "Desaparecido",
    "artist": "Manu Chao",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rumba",
      "reggae",
      "latino"
    ],
    "file": "canciones/desaparecido.md",
    "content": "---\ntitle: \"Desaparecido\"\nartist: \"Manu Chao\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"rumba\", \"reggae\", \"latino\"]\n---\n\n## Intro\n[Am] [E]\n\nMe llaman el desaparecido\nQue cuando llega ya se ha ido\nVolando vengo, volando voy\nDeprisa deprisa a rumbo perdido\n\n-Cuando me buscan nunca estoy\nCuando me encuentran yo no soy\nEl que está enfrente porque ya\nMe fui corriendo más allá\n-Me dicen el desaparecido\nFantasma que nunca está\nMe dicen el desagradecido\nPero esa no es la verdad\n\n[Am] [Dm] [Am] [E] [Am]\nYo llevo en el cuerpo un dolor\nQue no me deja respirar\nLlevo en el cuerpo una condena\nQue siempre me echa a caminar\nMe dicen el desaparecido\nQue cuando llega ya se ha ido\nVolando vengo, volando voy\nDeprisa deprisa a rumbo perdido\n\nMe dicen el desaparecido\nFantasma que nunca está\nMe dicen el desagradecido\nPero esa no es la verdad\nYo llevo en el cuerpo un motor\nQue nunca deja de rolar\nLlevo en el alma un camino\nDestinado a nunca llegar\n\nCuando me buscan nunca estoy\nCuando me encuentran yo no soy\nEl que está enfrente porque ya\nMe fui corriendo más allá\nMe dicen el desaparecido\nQue cuando llega ya se ha ido\nVolando vengo, volando voy\nDeprisa deprisa a rumbo perdido\nPerdido en el siglo (2) siglo XX\nCuando llegaré (4) (3º rumbo al XXI)\nMe llaman el desaparecido,\nCuando llegaré (perdido en el siglo)\n¿Cuándo llegaré? (2)\nMe llaman el desaparecido,\n¿Cuándo llegaré? (3)\nMe dicen el desaparecido\nFantasma que nunca está (¿Cuándo llegaré?)\nMe dicen el desagradecido (¿Cuándo llegaré?)\nEsa no es la verdad (¿Cuándo llegaré?)\nYo llevo en el cuerpo un motor (¿Cd llegaré?)\nQue nunca deja de rolar (¿Cuándo llegaré?)\nLlevo en el alma un camino (¿Cdo llegaré?)\nDestinado a nunca llegar (¿Cuándo llegaré?)-\n-Me llaman el desaparecido (¿Cuándo llegaré?)\nCuando llega ya se ha ido (¿Cuándo llegaré?)\nVolando vengo, volando voy (¿Cd llegaré?)\nDeprisa, deprisa a rumbo perdido (¿Cd llegaré?)\n¿Cuándo llegaré?...\n\n> 2ª y 3ª (mentira)\n"
  },
  {
    "id": "despacito",
    "title": "Despacito",
    "artist": "Luis Fonsi",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "reggaeton",
      "pop latino",
      "éxito"
    ],
    "file": "canciones/despacito.md",
    "content": "---\ntitle: \"Despacito\"\nartist: \"Luis Fonsi\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"reggaeton\", \"pop latino\", \"éxito\"]\n---\n\n## Intro\n[Am] [F] [C] [G]\n\nSí, sabes que ya llevo un rato mirándote\nTengo que bailar contigo hoy.\n-Vi, que tu mirada ya estaba llamándome\nMuéstrame el camino que yo voy\n-Tú, tú eres el imán y yo soy el metal\nMe voy acercando y voy armando el plan\nSolo con pensarlo se acelera el pulso, ya\n-Ya me estás gustando más de lo normal\nTodos mis sentidos van pidiendo más\nEsto hay que tomarlo sin ningún apuro\n\nPasito a pasito, suave suavecito\nNos vamos pegando poquito a poquito\nCuando tú me besas con esa destreza\nVeo que eres malicia con delicadeza\n-Pasito a pasito, suave suavecito\nNos vamos pegando, poquito a poquito\nY es que esa belleza es_un rompecabezas,\nPero pa' montarlo aquí tengo la pieza\n\n[Em] [C] [G] [D]/ [Dm] [A#] [F] [C]\nDespacito…\nQuiero respirar tu cuello despacito\nDeja que te diga cosas al oído\nPara que te acuerdes\nSi no estás conmigo\n-Despacito…\nQuiero desnudarte a besos despacito\nFirmar las paredes de tu laberinto\nY hacer de tu cuerpo todo un manuscrito\nQuiero ver bailar tu pelo\nQuiero ser tu ritmo\nQue le enseñes a mi boca\nTus lugares favoritos\n\nDespacito…\nQuiero respirar tu cuello despacito\nDeja que te diga cosas al oído\nPara que te acuerdes si no estás conmigo\n-Despacito…\nQuiero desnudarte a besos despacito\nFirmar las paredes de tu laberinto\nY hacer de tu cuerpo todo un manuscrito\nQuiero ver bailar tu pelo,\nQuiero ser tu ritmo\nQue le enseñes a mi boca\nTus lugares favoritos\n\n-Déjame sobrepasar tus zonas de peligro\nHasta provocar tus gritos\nY que olvides tu apellido\n\n-Déjame sobrepasar\nTus zonas de peligro\nHasta provocar tus gritos\nY que olvides tu apellido\n\nSi te pido un beso ven dámelo\nYo sé que estás pensándolo,\nLlevo tiempo intentándolo,\nMami\n_esto_es dando y dándolo\nSabes_que tu corazón conmigo\nte hace bam bam\nSabes_que esa beba ta buscando\nDe mi bam bam\n-Ven-prueba de-mi-boca para ver cómo te sabe\nQuiero-quiero-quiero ver,\nCuánto amor\na ti te cabe\n_\nYo no tengo prisa, yo me quiero dar el-viaje\nEmpezamos lento, después salvaje\nDespacito,\nVamos a hacerlo en una playa en Puerto Rico\nHasta que las olas griten \"Ay, bendito\"\nPara que mi sello se quede contigo\n-Pasito a pasito, suave suavecito\nNos vamos pegando, poquito a poquito\n\nQue le enseñes a mi boca\nTus lugares favoritos\n\n-Pasito a pasito, suave suavecito\nNos vamos pegando, poquito a poquito\nHasta provocar tus gritos\nY que olvides tu apellido… Despacito\n"
  },
  {
    "id": "dime-lole-y-manuel",
    "title": "Dime",
    "artist": "Lole y Manuel",
    "key": "Am",
    "capo": 2,
    "tempo": 100,
    "tags": [
      "flamenco",
      "nuevo flamenco",
      "poético"
    ],
    "file": "canciones/dime-lole-y-manuel.md",
    "content": "---\ntitle: \"Dime\"\nartist: \"Lole y Manuel\"\nkey: \"Am\"\ncapo: 2\ntempo: 100\ntags: [\"flamenco\", \"nuevo flamenco\", \"poético\"]\n---\n\n## Verso 1\n(\n\nLole y Manuel)\n\n[#2] [Am] [Dm] [E] [Am] [Am]\nDi…dime… si has mentido alguna vez\n\n[A7]\ny dime si cuando lo hiciste\n\n[Dm] [E]\nsentiste vergüenza de ser embustero.\n\n[Dm] [E] [F#]\nDime, dime, dime…\nSi has odiado alguna vez\n\n[Am]\na quien hiciste creer una cariño de verdad,\n\n[Dm]-[E]-[Am]\nDime ....\n\n[A7]\nSi sientes tu corazón, como en sí mismo\n\n[Dm] [E]\nel dolor de tus hermanos.\n\nDime, dime, dime, si has cortado alguna flor\n\n[Dm] [E]\n[Am]\nsin que temblaran tus manos.\n\n[Dm] [E] [Am] [A7]\nDime…. si de verdad crees en Dios\n\n[Dm] [E]\ncomo crees en el fuego cuando te quema.\n\n[E]\nDime, dime, dime...Si es el cielo tu ilusión\n\n[Am] [Dm]- [E] [Am]\no es la verdad en la Tierra, dime ...\n\nA cada cosa, sí o no, y entonces sabré yo\n\n[A7]\n[Dm] [E]\nSi eres mi sueño. Dime, dime, dime, dime\nA cada cosa, sí o no, y entonces sabré yo\n"
  },
  {
    "id": "donde-habita-el-olvido",
    "title": "Donde habita el olvido",
    "artist": "Joaquín Sabina",
    "key": "Am7",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "canción de autor",
      "acústico",
      "español"
    ],
    "file": "canciones/donde-habita-el-olvido.md",
    "content": "---\ntitle: \"Donde habita el olvido\"\nartist: \"Joaquín Sabina\"\nkey: \"Am7\"\ncapo: 0\ntempo: 100\ntags: [\"canción de autor\", \"acústico\", \"español\"]\n---\n\n## Intro\n[Am7] [G] (2) [Am] [G] [Am] [G] [Am]\n\nCuando se despertó, no recordaba nada de la noche anterior,\n\n[G] [Am] [G] [Am] [G]\n\"Demasiadas cervezas\", dijo, al ver mi cabeza, al lado de la suya, en la almohada...\n\n[G] [Dm7] [F] [E]\nY la besé otra vez, pero ya no era ayer, sino mañana,\n\n[Am] [Dm7] [F] [E]\nY un insolente sol, como un ladrón entró, por la ventana\n\n[Am] [G] [Am] [G] [Am]\nEl día que llegó, tenía ojeras malvas y barro en el tacón,\n\n[G] [Am] [G] [Am] [G]\nDesnudos, pero extraños, nos vio, roto el engaño de la noche, la cruda luz del alba.\n\n[G] [Dm7] [F] [E]\nEra la hora de huir y se fue, sin decir, “llámame un día\",\n\nDesde el balcón la vi, perderse en el trajín de la Gran Vía\n\n[Am] [Dm7] [F] [E]\nY la vida siguió, como siguen las cosas que no tienen mucho sentido,\n\n[Am] [Dm] [F] [G]\n[Am] [Dm] [G] [Am] [Am7]-[G] (2)\nUna vez me contó, un amigo común, que la vio, donde habita el olvido.\n\nLa pupila archivó un semáforo rojo, una mochila, un Peugeot,\n\n[Am] [G] [Am] [G] [Am]\n[G] [Am] [G] [Am]\nY aquellos ojos miopes, y la sangre al galope por mis venas y una nube de arena,\n\n[G] [Dm7] [F] [E]\nDentro del corazón, y esta racha de amor sin apetito.\n\n[Am] [Dm7] [F] [E]\nLos besos que perdí, por no saber decir: \"te necesito\".\n\n[Am] [Dm] [F] [G]\nY la vida siguió, como siguen las cosas que no tienen mucho sentido,\n\n[Am] [Dm] [G] [Am]\nUna vez me contó, un amigo común, que la vio, donde habita el olvido.\n\n[G] [Am7] [G] [Am]\nDonde habita el olvido, donde habita el olvido\n"
  },
  {
    "id": "dont-look-back-in-anger",
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
    ],
    "file": "canciones/dont-look-back-in-anger.md",
    "content": "---\ntitle: \"Don't Look Back In Anger\"\nartist: \"Oasis\"\nkey: \"C\"\ncapo: 0\ntempo: 84\ntags: [\"rock\", \"90s\", \"britpop\", \"himno\"]\n---\n\n## Intro\n[C] [F] [C] [F]\n\n## Verso 1\n[C] Slip inside the [G] eye of your [Am] mind\nDon't you [E7] know you might [F] find\n[G] A better place to [C] play [Am] [G]\n[C] You said that [G] you'd never [Am] been\nAll the [E7] things that you've [F] seen\n[G] Will slowly fade a[C]way [Am] [G]\n\n## Pre-Coro\n[F] So I start a revo[Fm]lution from my [C] bed\n'Cause you [F] said the brains I [Fm] had went to my [C] head\n[F] Step outside, the [Fm] summertime's in [C] bloom\n[G] Stand up beside the fireplace\n[E7/G#] Take that look from off your face\n'Cause [Am] you ain't ever [G] gonna burn my [F] heart out [G]\n\n## Coro\n[C] And [G] so Sally can [Am] wait\nShe [E7] knows it's too [F] late\nAs we're [G] walking on [C] by [Am] [G]\nHer [C] soul [G] slides a[Am]way\n[E7] But don't look [F] back in anger\n[G] I heard you [C] say [G] [Am] [E7] [F] [G] [C]\n\n## Verso 2\n[C] Take me to the [G] place where you [Am] go\nWhere [E7] nobody [F] knows\nIf it's [G] night or [C] day [Am] [G]\n[C] Please don't put your [G] life in the [Am] hands\nOf a [E7] rock and roll [F] band\nWho'll [G] throw it all a[C]way [Am] [G]\n\n## Pre-Coro\n[F] Gonna start a revo[Fm]lution from my [C] bed\n'Cause you [F] said the brains I [Fm] had went to my [C] head\n[F] Step outside, 'cause the [Fm] summertime's in [C] bloom\n[G] Stand up beside the fireplace\n[E7/G#] Take that look from off your face\n'Cause [Am] you ain't ever [G] gonna burn my [F] heart out [G]\n\n## Coro Final\n[C] And [G] so Sally can [Am] wait\nShe [E7] knows it's too [F] late\nAs we're [G] walking on [C] by [Am] [G]\nHer [C] soul [G] slides a[Am]way\n[E7] But don't look [F] back in anger\nDon't look [Fm] back in anger\nI heard you [C] say... [G] [Am] [E7] [F] [G] [C]\n"
  },
  {
    "id": "dormido-entre-rosas",
    "title": "Dormido entre rosas",
    "artist": "Carlos Cano",
    "key": "Am",
    "capo": 2,
    "tempo": 100,
    "tags": [
      "copla",
      "pasodoble",
      "andaluz"
    ],
    "file": "canciones/dormido-entre-rosas.md",
    "content": "---\ntitle: \"Dormido entre rosas\"\nartist: \"Carlos Cano\"\nkey: \"Am\"\ncapo: 2\ntempo: 100\ntags: [\"copla\", \"pasodoble\", \"andaluz\"]\n---\n\n## Intro\n[#2] [Am] [E] [Am] [G] [C]\n\n- Dormido entre rosas y encajes de hilo, soñando en los lirios que vienen del sur\n\n[E] [Am] [E] [Am]\nBuscando en la noche los claveles fríos, del amor prohibido, vive el andaluz\n\n- Sombrero en los ojos, pañuelo esmeralda, fuego en las pestañas menudo valor,\n\n[E] [Am] [G] [C]\n[E] [Am] [E] [Am]\nQuedó en el olvido tal vez las razones, aquel pasodoble que en Madrid cantó\n\n[G] [C] [E] [Am]\nCuentan que en las noches de luna de mayo, entre los malvados de la oscuridad\n\nSe pinta los ojos se muerde los labios y abanico en mano, se pone a cantar:\n\n[E] [Am] [F] [E] [E7] [Am]\n¡Ay rosas! Málaga bella, biznagas de mi pasión, donde yo aprendí a querer, donde conocí el amor.\n\n[Am] [E7] [Am] [Dm] [E7]\n[Am] [E7] [Am] [Dm] [Am]-[E] [Am]\n-¡Ay rosas! Málaga bella, biznagas del corazón ¿De qué me sirve volver?(2) Si el amor se marchitó\n\n[E] [Am] [G] [C]\n- Preguntan las rosas por qué fue al exilio, preguntan los lirios por qué no volvió\n\n[E] [Am] [E] [Am]\nTan solo la luna y el amargo vino, saben los motivos de su corazón\n\n[G] [C] [E] [Am]\n- Cuentan que por rojo, por republicano, que andaba enredado con un militar\n\nCuatro señoritos de pistola en mano, sin voz lo dejaron en la madrugá\n\n[E] [Am] [F] [E] [Am]\n"
  },
  {
    "id": "el-cine",
    "title": "El cine",
    "artist": "Mecano",
    "key": "Bm",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop",
      "80s",
      "español"
    ],
    "file": "canciones/el-cine.md",
    "content": "---\ntitle: \"El cine\"\nartist: \"Mecano\"\nkey: \"Bm\"\ncapo: 0\ntempo: 100\ntags: [\"pop\", \"80s\", \"español\"]\n---\n\n## Intro\n[Bm] [E] [A]\n\nUh, uh, uh (2)\n\n[Em] [D]/ [C] [D](2) [Em] -[C]-[D] (2)\n- La cola de esta noche no tiene final,\nDos horas confiando que no colgarán\nDichoso cartelito de completo está el local\n- Logré cruzar la puerta diez duritos van,\nNo me ponga delante, ni tampoco detrás,\nEterno en la pantalla está el “visite nuestro bar”\n\n[Em] [D]/ [C] [D](2) [Em] -[C]-[D] (2)\n- Las luces se apagaron, esto va a empezar,\nLa chica de la antorcha ya ocupó su lugar,\nPreludio de que algo emocionante va a pasar.\n- Sobre la foto fija de una gran ciudad\nLos nombres y apellidos de los que serán,\nActores, directores, productores y demás.\n\n[Em] [D] [C] [G] [Am] [C] (2)\n-El ruido de las fábricas al despertar,\nLos olores y colores de la gran ciudad,\nMe hicieron sentir que yo estaba allí,\nQue estaba allí. El cuerpo de esa chica\nQue empezó a temblar\nCuando el protagonista la intentó besar\nMe hicieron sentir que yo estaba allí,\nQue era feliz.\n\n[Em] [D]/ [C] [D](2) [Em] -[C]-[D] (4)\n-Las primeras escenas de aproximación\nConsiguen que te metas en la situación\nY poco a poco se va desarrollando la acción\n- Parece que se ha producido un apagón,\nSilbidos a cabina, tensa situación,\nLa chica ya estaba desnuda cuando se cortó.\n-Recuperado el ritmo ya llegó el final,\nBarullo de murmullos que preguntan\nQue ¿qué tal? y un desfile de zombis\nQue abandonan el local\n- Durante una hora y media pude ser feliz\nComiendo chocolate y palomitas de maíz,\nSintiendo que era yo el que besaba\nA aquella actriz\n\nEl ruido de las fábricas al despertar…\n\n[Am] [F] [G] [Em] [Am]\nOh, oh, oh... Quiero estar junto a ti\n"
  },
  {
    "id": "el-cuarto-de-tula",
    "title": "El cuarto de Tula",
    "artist": "Buena Vista Social Club",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "son cubano",
      "salsa",
      "latino"
    ],
    "file": "canciones/el-cuarto-de-tula.md",
    "content": "---\ntitle: \"El cuarto de Tula\"\nartist: \"Buena Vista Social Club\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"son cubano\", \"salsa\", \"latino\"]\n---\n\n## Intro\n[Am] [G] [F] [E7] (2)\n\nEn el barrio la Cachimba se ha formado la corredera (2)\nAllá fueron los bomberos con sus campanas y sus sirenas (2)\n\n[G7] [C] [G7] [C] [E7] [Am] [E7] [Am]\nAy mamá, ¿qué pasó? ¡Ay, mamá! ¿Qué pasó?\n\n[Am] [G] [F] [E7] (2)\nEn el barrio la Cachimba se ha formado la corredera (2)\nAllá fueron los bomberos con sus campanas y sus sirenas (2)\n\n[G7] [C] [G7] [C] [E7] [Am] [E7] [Am]\nAy mamá, ¿qué pasó? ¡Ay, mamá! ¿Qué pasó?\n\n[Am] [E7] [Am]\nEl cuarto de Tula, se cogió candela.\n\nSe quedó dormida y no apagó la vela (bis)\n\n[Am] [E7] [Am]\n-Pobrecita Tula, que ha cogido candela,\nPorque se quedó dormida, y nunca, apagó la vela, vela.\n-Ay mira, mira, llamen a _____, llamen a los bomberos,\nQue yo creo que Tula lo que quiere es que le apaguen el fuego\n-Tú, tú, tú eres candela, ay que me quemo,\nApágame la vela.\n-El cuarto de Tula se cogió candela,\nPero yo te lo digo, que la dejaron con la lengua fuera.\n-Tula está encendida, llama a los bomberos,\nTú eres candela, agita los cueros.\n-Que venga_____ con mucha candela,\nQue el cuarto de Tula se cogió candela.\n-Fuego, fuego, fuego, me quemo,\n____ está loco, hay que ingresarlo.\n"
  },
  {
    "id": "el-dia-que-yo-me-muera",
    "title": "El día que yo me muera",
    "artist": "Rozalén",
    "key": "Am",
    "capo": 2,
    "tempo": 100,
    "tags": [
      "canción de autor",
      "folklore",
      "español"
    ],
    "file": "canciones/el-dia-que-yo-me-muera.md",
    "content": "---\ntitle: \"El día que yo me muera\"\nartist: \"Rozalén\"\nkey: \"Am\"\ncapo: 2\ntempo: 100\ntags: [\"canción de autor\", \"folklore\", \"español\"]\n---\n\n## Intro\n[#2] [Intro] [Am] [Dm] [E] [Am] ([x3]) [Am] [E]\n\nEl día que yo me muera no me corten ni una flor.\n\n[Am]\nTraigan la plantita entera, pongan un jardín en mi honor\n\n[E7]\nNo se le teme a la muerte, que el morir es natural\n\n[Am]\nSe teme más a las cuentas que en el cielo\n\nties\n\nque dar\n\n[E7]\nEl día que yo me muera no lloren porque me fui\n\nAlcen la copa y brinden por todo lo que viví\n\n[Am]\nCuando ya no esté, recuérdame\n\n[E7]\nY vistan de alеgres colores, que mе amaron y yo amé\n\n[Am]\nQue la puerta de casa se quede abierta, y por no tener pena no pidan perdón.\n\n[G7] [C] [G7] [C]\n, se lleva en el corazón\n\n[Dm] [Am] [Dm] [E7]\nQue el luto, cuando es\n\nsentío\n\n[Dm] [Am] [E7] [Am]\nY cada vez que me nombres yo reviviré, desde donde esté, te protegeré\n\n[Am] [E] [Am]\nEl día que yo me muera no quiero tu adoración\nSi no me quisiste en vida, ahórrate la actuación\nEl día que yo me muera que me entierren en un\n\nprao\n\nQue mi cuerpo sea alimento\n\nQué hermoso será morirse, morirse siendo querido\nPorque quien amarga es la muerte, cuando la muerte es olvido\n\npa\n\nla hierba del\n\nganao\n\n[E7]\nCuando ya no esté, recuérdame\n\n[Am]\nY vistan de alеgres colores, que mе amaron y yo amé\n\n[G7] [C] [G7] [C]\nQue la puerta de casa se quede abierta, y por no tener pena no pidan perdón.\n\n[Dm] [Am] [Dm] [E7]\nQue el luto, cuando es\n\nsentío\n\n, se lleva en el corazón\n\n[Dm] [Am] [E7] [Am]\nY cada vez que me nombres yo reviviré, desde donde esté, te protegeré\n\n[Am] [E7] [Am]\n(Cuando ya no esté) Me dejan la puerta abierta\n(Cuando ya no esté) Y se visten de alegres colores\n(Cuando ya no esté) Y no sientan pena, penita, pena\n(Cuando ya no esté) Yo os llevo en el corazón\n"
  },
  {
    "id": "el-hombre-del-piano",
    "title": "El hombre del piano",
    "artist": "Ana Belén",
    "key": "E",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "balada",
      "clásico",
      "español"
    ],
    "file": "canciones/el-hombre-del-piano.md",
    "content": "---\ntitle: \"El hombre del piano\"\nartist: \"Ana Belén\"\nkey: \"E\"\ncapo: 0\ntempo: 100\ntags: [\"balada\", \"clásico\", \"español\"]\n---\n\n## Verso 1\n-12\n\n[E] [C#m] [A] [B7](2) [E]\nINTR. 14-15-17\n\n-15-14-15-14-10, 10\n\n-14-15-14-10\n\n-15-14-15-14-10, 10\n\n14-15-17\n\n[E] [C#m] [A] [B7] (2) [E]\nEsta es la historia de un sábado\nDe no importa qué mes,\nY de un hombre sentado al piano\nDe no importa qué viejo café.\n-Toma el vaso, le tiemblan las manos,\nApestando entre humo y sudor\nY se agarra a su tabla de náufrago\nVolviendo a su eterna canción\n\n[C#m] [B7] [E]\nLa, ra la...toca otra vez viejo perdedor,\nHaces que me sienta bien,\nEs tan triste la noche, que tu canción\nSabe a derrota y a miel\n\n[E] [C#m] [A] [B7] (2) [E]\n-Cada vez que el espejo de la pared\nLe devuelve más joven la piel\nSe le encienden los ojos y su niñez\nViene a tocar junto a él\n-Pero siempre hay borrachos con babas\nQue le recuerdan quién fue:\nEl más joven maestro al piano\nVencido por una mujer. Larala...\n\n[E] [C#m] [A] [B7] (2) [E]\nElla_siempre temió echar raíces\nQue pudieran sus alas cortar\nY en la jaula metida, la vida se le iba\nY quiso sus fuerzas probar.\n-No lamenta que dé malos pasos\nAunque nunca desea su mal\nPero a ratos con furia golpea el piano\nY hay algunos que le han visto llorar\n\nLara la...\n\n[C#m] [B7] [E]\nToca otra vez viejo perdedor...\n\n[E] [C#m] [A] [B7] (2) [E]\nIntr\n\nEl micrófono huele a cerveza\nY el calor se podría cortar\nSolitarios oscuros buscando pareja\nApurándose un sábado más.\n-Hay un hombre aferrado a un piano\nLa emoción empapada en alcohol\nY una voz que le dice: pareces cansado.\nY aún, no ha salido el sol\n\n.\n"
  },
  {
    "id": "el-lado-oscuro",
    "title": "El lado oscuro",
    "artist": "Jarabe de Palo",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rock latino",
      "pop rock",
      "90s"
    ],
    "file": "canciones/el-lado-oscuro.md",
    "content": "---\ntitle: \"El lado oscuro\"\nartist: \"Jarabe de Palo\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"rock latino\", \"pop rock\", \"90s\"]\n---\n\n## Intro\n[Am] [A7]\n\nPuede que hayas nacido\nEn la cara buena del mundo\nYo nací en la cara mala\nLlevo la marca del lado oscuro\n\n[Dm] [Am] [A7] [Dm] [E] [Am]\nY no me sonrojo si te digo que te quiero\nY que me dejes o te deje,\nEso ya no me da miedo habías sido,\nSin dudarlo la más bella\nDe entre todas las estrellas\nQue yo vi en el firmamento\n\nCómo ganarse el cielo\nCuando uno ama con toda el alma\nY es que el cariño que te tengo\nNo se paga con dinero\nComo decirte que por ti muero.\n"
  },
  {
    "id": "el-limite",
    "title": "El límite",
    "artist": "La Frontera",
    "key": "Em",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rock",
      "español",
      "80s"
    ],
    "file": "canciones/el-limite.md",
    "content": "---\ntitle: \"El límite\"\nartist: \"La Frontera\"\nkey: \"Em\"\ncapo: 0\ntempo: 100\ntags: [\"rock\", \"español\", \"80s\"]\n---\n\n## Verso 1\n(La Frontera ‘89)\n\n[Em] [Bm] [Am] [C]\n-Escucha bien, mi viejo amigo,\nNo sé si recordarás\nAquellos tiempos, ahora perdidos,\nPor las calles de esta ciudad\n-Leímos juntos libros prohibidos,\nCreímos que nada nos haría cambiar\nVivimos siempre esperando una señal\n\n[Em] [G](2) [Am] [D] [C]\nEn el límite del bien ( el límite del bien)\nEn el límite del mal (el límite del mal)\nTe esperaré en el límite del bien y del mal (2)\n\n[Em] [Bm] [Am] [C]\n-Es duro estar tan abatido\nCuando sientes el dolor,\nEs como clavar un cuchillo\nEn lo más hondo del corazón\n\n[Em] [Bm] [Am] [C]\n-Escucha bien mi viejo amigo,\nNunca olvidé nuestra amistad\nLa vida es sólo un juego\nAl que hay que apostar, si quieres ganar.\n\n[Em] [G](2) [Am] [D] [C]\nEn el límite del bien ( el límite del bien)\nEn el límite del mal (el límite del mal)\nTe esperaré en el límite del bien y del mal (2)\n\n[Em] [Bm] [Am] [C]\n-No es difícil encontrar\nEl paraíso en la oscuridad\nLa fortuna viene en un barco,\nSin rumbo y sin capitán\n-Escucha bien mi viejo amigo\nSi algún día nos volvemos a ver\nSólo espero que todo sea como ayer\n"
  },
  {
    "id": "el-mariachi",
    "title": "El mariachi",
    "artist": "Antonio Banderas",
    "key": "Dm",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "ranchera",
      "mexicano",
      "soundtrack"
    ],
    "file": "canciones/el-mariachi.md",
    "content": "---\ntitle: \"El mariachi\"\nartist: \"Antonio Banderas\"\nkey: \"Dm\"\ncapo: 0\ntempo: 100\ntags: [\"ranchera\", \"mexicano\", \"soundtrack\"]\n---\n\n## Intro\n[Dm] [A7] [Dm](2)\n\nSoy un hombre muy honrado,\nAl que me gusta lo mejor\nLas mujeres no me faltan,\nNi el dinero, ni el amor\nJineteando en mi caballo\nPor la sierra yo me voy\nLas estrellas y la luna,\nEllas me dicen donde voy\n\n[Gm] [Dm] [A7] [Dm] (2)\nAy, ay, ay, ay, ay, ay amor\nAy, mi morena de mi corazón (BIS)\n\nMe gusta tocar guitarra,\nMe gusta cantar el son\nMariachi me acompaña\nCuando canto mi canción\nMe gusta tomar mis copas,\nAguardiente es lo mejor\nTambién el tequila blanco,\nCon su sal le da sabor.\n\nBaila, baila negra\n"
  },
  {
    "id": "el-muerto-vivo",
    "title": "El muerto vivo",
    "artist": "Peret",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rumba catalana",
      "español",
      "clásico"
    ],
    "file": "canciones/el-muerto-vivo.md",
    "content": "---\ntitle: \"El muerto vivo\"\nartist: \"Peret\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"rumba catalana\", \"español\", \"clásico\"]\n---\n\n## Intro\n[Am] [E] [Am]\n\nNanonaino naino nonai (3) Chévere (3)\n\n[Am] [E] [Am] [A7] [E] [Am] [E] [Am]\nA mi papa el chocolate\nLe pagaron su salario\nY sin pensarlo dos veces\nSalió para malgastarlo\nUna semana de juerga\nY perdió el conocimiento\nComo no volvía a su casa\nTodos le daban por muerto\n\n[E] [Am] (2)\nY no estaba muerto no, no (3)\nEstaba tomando caña, lerelerele\nY no estaba muerto no, no (3)\nChévere, chévere, cheveré\n\nPero al cabo de unos días\nDe haber desaparecido\nEncontraron uno muerto,\nUn muerto muy parecido\nLe montaron un velorio,\nY le rezaron la novena\nLe perdonaron sus deudas\nY lo enterraron con pena\n\n[E] [Am] (2)\nY no estaba muerto no, no (3)\nEstaba tomando caña, lerelerele\nY no estaba muerto no, no (3)\nChévere, chévere, cheveré\n\nPero un día se apareció,\nLleno de vida y contento\nDiciéndole a todo el mundo\nEh! Se equivocaron de muerto\nEl lío que se formó,\nEso sí que es puro cuento\nSu mujer ya no lo quiere,\nNo quiere dormir con muertos\n\n[E] [Am] (2)\n"
  },
  {
    "id": "el-porompompero",
    "title": "El Porompompero",
    "artist": "Manolo Escobar",
    "key": "Am",
    "capo": 0,
    "tempo": 110,
    "tags": [
      "copla",
      "rumba",
      "flamenco",
      "español",
      "clásico"
    ],
    "file": "canciones/el-porompompero.md",
    "content": "---\ntitle: \"El Porompompero\"\nartist: \"Manolo Escobar\"\nkey: \"Am\"\ncapo: 0\ntempo: 110\ntags: [\"copla\", \"rumba\", \"flamenco\", \"español\", \"clásico\"]\n---\n\n## Intro\n[Am] [G] [F] [E] (x2)\n\n## Estribillo\n[Am] Ay porompompó,\nporopo porompom[G]pero peró,\nporopo porompom[F]pero peró,\nporopo porom[E]pompó.\n[Am] Ay porompompó,\nporopo porompom[G]pero peró,\nporopo porompom[F]pero peró,\nporopo porom[E]pompó. [Am]\n\n## Verso 1\n[Am] El trigo entre todas las flores\nha escogido a la ama[E]pola,\ny yo escojo a mi Dolores,\nDo[Am]lores, Lolita, Lola.\nY yo, y yo es[G]cojo a mi Dolores,\nque es la flor [F]más perfumada,\nDoló, Do[E]lores, Lolita, Lola.\n\n## Estribillo\n[Am] Ay porompompó,\nporopo porompom[G]pero peró,\nporopo porompom[F]pero peró,\nporopo porom[E]pompó. (x2)\n\n## Verso 2\n[Am] El cateto de tu hermano\nque no me venga con [E]leyes,\nque si es payo, yo soy gitano\ny tengo sangre de [Am]reyes.\nQue si es payo, yo soy gi[G]tano,\nque tengo sangre de [F]reyes\nen la palma de la [E]mano.\n\n## Estribillo\n[Am] Ay porompompó,\nporopo porompom[G]pero peró,\nporopo porompom[F]pero peró,\nporopo porom[E]pompó. (x2)\n\n## Verso 3\n[Am] A los clisos de mi cara\nles voy a poner un can[E]dao\npor no ver las cosas raras\nde este niñato cha[Am]lao.\nPor no ver las cosas [G]raras\nde este niñato cha[F]lao\nque te apunta y no dis[E]para.\n\n## Estribillo\n[Am] Ay porompompó,\nporopo porompom[G]pero peró,\nporopo porompom[F]pero peró,\nporopo porom[E]pompó. (x2)\n\n## Verso 4\n[Am] Verde era la yerbabuena,\nverdecita era la [E]parra,\ndebajo del puente\nretumbaba el [Am]agua.\nRetumbaba el [G]agua,\ndebajo del [F]puente\nretumbaba el [E]agua.\n\n## Estribillo Final\n[Am] Ay porompompó,\nporopo porompom[G]pero peró,\nporopo porompom[F]pero peró,\nporopo porom[E]pompó. (x2)\n"
  },
  {
    "id": "el-sitio-de-mi-recreo",
    "title": "El Sitio de Mi Recreo",
    "artist": "Antonio Vega",
    "key": "G",
    "capo": 0,
    "tempo": 78,
    "tags": [
      "acústico",
      "balada",
      "poesía",
      "español",
      "90s"
    ],
    "file": "canciones/el-sitio-de-mi-recreo.md",
    "content": "---\ntitle: \"El Sitio de Mi Recreo\"\nartist: \"Antonio Vega\"\nkey: \"G\"\ncapo: 0\ntempo: 78\ntags: [\"acústico\", \"balada\", \"poesía\", \"español\", \"90s\"]\n---\n\n## Intro\n[G] [Em] [C] [Am] [D]\n\n## Verso 1\n[G] Donde nos llevó la imaginación,\n[Em] Donde con los ojos cerrados,\n[C] Se di[Am]visan infi[D]nitos campos.\n[G] Donde se creó la primera luz,\n[Em] Germinó la semilla del cielo azul,\n[C] Volve[Am]ré a ese lugar donde na[D]cí.\n\n## Coro\n[C] De sol, es[G]piga y deseo,\n[Am] Son sus manos [D] en mi pelo,\n[C] De nieve, hura[G]cán y abismos,\n[Am] El sitio de [D] mi recreo.\n\n## Verso 2\n[G] Viento que en su murmullo parece hablar,\n[Em] Mueve el mundo con gracia los ves bailar,\n[C] Y con [Am] él el esce[D]nario de mi hogar.\n[G] Mar bandeja de plata, mar infernal,\n[Em] Es un temperamento muy natural,\n[C] Poco o [Am] nada cuesta ser uno [D] más.\n\n## Coro\n[C] De sol, es[G]piga y deseo,\n[Am] Son sus manos [D] en mi pelo,\n[C] De nieve, hura[G]cán y abismos,\n[Am] El sitio de [D] mi recreo.\n\n## Outro\n[C] Silencio, [G] brisa y cordura,\n[Am] Dan aliento a [D] mi locura,\n[C] Hay nieve, hay [G] fuego, hay deseo,\n[Am] Allí donde [D] me re[G]creo...\n"
  },
  {
    "id": "el-talisman",
    "title": "El talismán",
    "artist": "Rosana",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop",
      "español",
      "90s"
    ],
    "file": "canciones/el-talisman.md",
    "content": "---\ntitle: \"El talismán\"\nartist: \"Rosana\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"pop\", \"español\", \"90s\"]\n---\n\n## Intro\n[Am] [Dm] [G7] [C][-(]2) [Am] [Dm] [G7] [E7]\n\nEl talismán de tu piel me ha dicho que soy la reina de tus caprichos\nYo soy el as de los corazones que se pasean en tus tentaciones,\nEl talismán de tu piel me cuenta que en tu montura caerán las riendas\n\n[Am] [Dm] [Am] [E]-7 [Am] (2)\nCuando una noche de amor desesperados, caigamos juntos y enredados\nLa alfombra y el alrededor acabarán desordenados\nCuando una noche de amor que yo no dudo, la eternidad venga, seguro\nTú y yo, el desnudo y el corazón seremos uno\n\n[Am] [G] [F] [E7] (4) [Am]\nYo soy la tierra de tus raíces, el talismán de tu piel lo dice\nYo soy la tierra de tus raíces, lo dice el corazón y el fuego de tu piel\nY yo soy la tierra de tus raíces, el talismán de tu piel lo dice\nYo soy la tierra de tus raíces, a ver qué dices tú\n\n[Am] [Dm] [G] [C]- (2) [Am] [Dm] [G7] [E7]\nEl talismán de tu piel me chiva que ando descalza de esquina a esquina\nPor cada calle que hay en tus sueños, que soy el mar de todos tus puertos\nEl talismán de tu piel me cuenta que tu destino caerá a mi puerta.\n\nCuando una noche de amor desesperados, caigamos juntos y enredados\nLa alfombra y el alrededor acabarán desordenados\nCuando una noche de amor que yo no dudo, la eternidad venga, seguro\nTú y yo, el desnudo y el corazón seremos uno\n\n[Am] [Dm] [Am] [E]-7 [Am]\n[Am] [G] [F] [E7]\nYo soy la tierra de tus raíces, el talismán de tu piel lo dice\nYo soy la tierra de tus raíces, lo dice el corazón y el fuego de tu piel\nY yo soy la tierra de tus raíces, el talismán de tu piel lo dice\nYo soy la tierra de tus raíces, a ver qué dices tú\n\n[Am] [Dm] [Am] [E]-7 [Am]\nCuando una noche de amor desesperados, caigamos juntos y enredados\nTú y yo, el desnudo y el corazón seremos uno…\n"
  },
  {
    "id": "el-vagabundo",
    "title": "El vagabundo",
    "artist": "Los Panchos",
    "key": "Gm",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "bolero",
      "clásico",
      "mexicano"
    ],
    "file": "canciones/el-vagabundo.md",
    "content": "---\ntitle: \"El vagabundo\"\nartist: \"Los Panchos\"\nkey: \"Gm\"\ncapo: 0\ntempo: 100\ntags: [\"bolero\", \"clásico\", \"mexicano\"]\n---\n\n## Intro\n[Gm] [Dm] [A7] [Dm] (2) [Dm] [Gm] [Dm] [A7] [Dm]\n\nQué importa saber quién soy, ni de dónde vengo ni por dónde voy\n\n[D7] [Gm] [C7] [F]\nLo que yo quiero son tus lindos ojos, morena, tan llenos de amor\n\n[A#] [A7] [A#] [A7]\nEl sol brilla en lo infinito, y el mundo tan pequeñito\n\n[Gm] [Dm] [A#] [A] [Dm]\nQué importa saber quién soy, ni de dónde vengo ni por dónde voy\n\n[Gm] [Dm] [A7] [Dm] (2) [Dm] [Gm] [Dm] [A7] [Dm]\nQué importa saber quién soy, ni de dónde vengo ni por dónde voy\n\n[D7] [Gm] [C7] [F]\nLo que yo quiero son tus lindos ojos, morena, tan llenos de amor\n\n[A#] [A7] [A#] [A7]\nEl sol brilla en lo infinito, y el mundo tan pequeñito\n\n[Gm] [Dm] [A#] [A] [Dm]\nQué importa saber quién soy, ni de dónde vengo ni por dónde voy\n\n[Gm] [A7] [Dm] [A7]-[Dm]\nTú me desprecias por ser vagabundo, y mi destino es vivir así.\n\n[C] [A#] [A7]\nSi vagabundo es el propio mundo, que va girando en un cielo azul.\n\n[Gm] [Dm] [A7] [Dm]\nQué importa saber quién soy, ni de dónde vengo ni por dónde voy\n\nSolo quiero que me des tu amor, que me da la vida, que me da calor\n\n[Gm] [Dm] [A7] [Dm]\n[Gm] [Dm] [A7] [Dm] (2) [Gm] [A7] [Dm] [A7]-[Dm]\n[Instr:]\nTú me desprecias por ser vagabundo, y mi destino es vivir así.\n\nSi vagabundo es el propio mundo, que va girando en un cielo azul.\n\n[C] [A#] [A7]\n[Gm] [Dm] [A7] [Dm]\nQué importa saber quién soy, ni de dónde vengo ni por dónde voy\n\nSolo quiero que me des tu amor, que me da la vida, que me da calor\n\n[Gm] [Dm] [A7] [Dm]\n[Gm] [Dm] [A7] [Dm]\nQué importa saber quién soy, ni de dónde vengo ni por dónde voy\n"
  },
  {
    "id": "emborracharme",
    "title": "Emborracharme",
    "artist": "Lori Meyers",
    "key": "G",
    "capo": 0,
    "tempo": 130,
    "tags": [
      "indie",
      "pop",
      "español",
      "2010s"
    ],
    "file": "canciones/emborracharme.md",
    "content": "---\ntitle: \"Emborracharme\"\nartist: \"Lori Meyers\"\nkey: \"G\"\ncapo: 0\ntempo: 130\ntags: [\"indie\", \"pop\", \"español\", \"2010s\"]\n---\n\n## Intro\n[D] [G] [Am] (x2)\n\n## Verso 1\n[D] Empiezo a que[G]rerte, [Am]\nEmpiezo a pen[G]sar que no hay un [Am] día\nQue no quiera [D] verte,\nY demos[G]trar todo el a[Am]mor que te me[D]reces.\nY vesti[G]ré como tú [Am] digas, iré más de[D]cente\nPara poder [G] ir a esos [Am] sitios depri[D]mentes,\nHaré de es[G]coba y de fel[Am]pudo, haré de sir[D]viente\nY tritu[G]rar mi cora[Am]zón con ingre[C]dien[D]tes.\n\n## Coro\n[G] Y beber todo ese batido,\n[Em] Acompañarlo después con vino,\n[Am] Beber hasta emborracharme,\n[D] Hasta caer rendido y levantarme.\n\n## Verso 2\n[D] Me levanté [G] tarde [Am]\nY la re[G]saca que ahora [Am] tengo\nMe impide lla[D]marte,\nY con las [G] ganas que ahora [Am] tengo de fo[D]llarte.\nY me has man[G]dado algún men[Am]saje que vi [D] tarde,\nNo va el Whats[G]App, no carga el [Am] vídeo que man[C]das[D]te.\n\n## Coro\n[G] Y beber todo ese batido,\n[Em] Acompañarlo después con vino,\n[Am] Beber hasta emborracharme,\n[D] Hasta caer rendido y levantarme.\n\n## Puente\n[G] Sigo aún borracho per[Em]dido\nPero me atrevo a con[Am]tarte\nQue yo no puedo ser tu a[D]migo.\n[G] Sigo aún borracho per[Em]dido\nPero me atrevo a con[Am]tarte\nQue yo no quiero ser tu a[D]mante.\n\n## Coro Final\n[G] Y beber todo ese batido,\n[Em] Acompañarlo después con vino,\n[Am] Beber hasta emborracharme,\n[D] Hasta caer rendido y levantarme... [G]\n"
  },
  {
    "id": "en-algun-lugar",
    "title": "En Algún Lugar",
    "artist": "Duncan Dhu",
    "key": "Em",
    "capo": 0,
    "tempo": 138,
    "tags": [
      "pop",
      "rock",
      "español",
      "80s"
    ],
    "file": "canciones/en-algun-lugar.md",
    "content": "---\ntitle: \"En Algún Lugar\"\nartist: \"Duncan Dhu\"\nkey: \"Em\"\ncapo: 0\ntempo: 138\ntags: [\"pop\", \"rock\", \"español\", \"80s\"]\n---\n\n## Intro\n[Em] [G] [D] [Em] (x2)\n\n## Verso 1\n[Em] En al[G]gún lugar de un [D] gran país, [Em]\nOlvi[G]daron cons[D]truir [Em]\nUn ho[G]gar donde no [D] queme el sol [Em]\nY, al na[G]cer, no haya que mo[D]rir. [Em]\n\n## Puente 1\n[Bm] Y en las sombras\n[C] Mueren [G] genios [D] sin sa[Em]ber\n[Bm] De su magia,\n[C] Concedida sin pedirlo\n[G] Mucho tiempo antes de na[D]cer.\n\n## Coro\n[G] No hay ca[D]mino que [Am] llegue hasta aquí [C]\n[G] Y luego pre[D]tenda sa[Am]lir, [C]\n[G] Con el [D] fuego del a[Em]tardecer,\n[C] Arde la hierba.\n\n## Verso 2\n[Em] En al[G]gún lugar de un [D] gran país, [Em]\nOlvi[G]daron cons[D]truir [Em]\nUn ho[G]gar donde no [D] queme el sol [Em]\nY, al na[G]cer, no haya que mo[D]rir. [Em]\n\n## Puente 2\n[Bm] Un silbido cruza el pueblo\n[C] Y se [G] ve un ji[D]nete [Em]\n[Bm] Que se marcha con el viento\n[C] Mientras grita que no va a vol[D]ver.\n\n## Verso 3\n[G] Y la tierra a[D]quí es de [Am] otro color, [C]\n[G] El polvo no [D] te deja [Am] ver. [C]\n[G] Los hombres ya no [D] saben si [Em] lo son,\n[C] Pero lo quieren creer.\n[G] Las madres que [D] ya no saben [Am] llorar [C]\n[G] Ven a sus [D] hijos par[Am]tir. [C]\n[G] La tristeza a[D]quí no tiene lu[Em]gar\n[C] Cuando lo triste es vivir. [G]\n"
  },
  {
    "id": "en-el-campo",
    "title": "En el campo",
    "artist": "Grupo Celeste",
    "key": "G",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "cumbia",
      "peruano",
      "popular"
    ],
    "file": "canciones/en-el-campo.md",
    "content": "---\ntitle: \"En el campo\"\nartist: \"Grupo Celeste\"\nkey: \"G\"\ncapo: 0\ntempo: 100\ntags: [\"cumbia\", \"peruano\", \"popular\"]\n---\n\n## Verso 1\n: abre la mura…;\n\n[G] [D7] / [Em] [C] [B7] (3) [Em] [D7]\nAlcemos esta muralla,\n\nEn el campo, junto a mi dulce amada\nCon mis sueños y su tierna mirada Juntando todas las manos (2)\nLos negros, sus manos negras,\n(2)\nLos blancos, sus blancas manos.\nUna muralla que vaya\nEn la inmensa soledad, vivimos un puro amor\nDesde la playa hasta el monte (2)\nBajo los rayos del sol, cantamos esta canción (2)\nDesde el monte hasta la playa,\nAllá sobre el horizonte.\n\n[Dm] [C] [Dm]\n"
  },
  {
    "id": "es-por-ti",
    "title": "Es por ti",
    "artist": "Cómplices",
    "key": "Dm",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop",
      "balada",
      "90s",
      "español"
    ],
    "file": "canciones/es-por-ti.md",
    "content": "---\ntitle: \"Es por ti\"\nartist: \"Cómplices\"\nkey: \"Dm\"\ncapo: 0\ntempo: 100\ntags: [\"pop\", \"balada\", \"90s\", \"español\"]\n---\n\n## Intro\n[Dm] [Am] [G] [F]\n\nOh, oh, oh, oh, oh (4)\n\nEs por ti que veo ríos, donde solo hay asfalto\n-Es por ti que hay océanos\nDonde solo había charcos\n\n[C] [Dm]/ [Am] [F]/ [Am] [G]/ [F] [E], [Am]\nEs por ti que soy un duende\nCómplice del viento\nQue se escapa de madrugada\nPara colarse, por tu ventana\n\n[Dm] [Am] [G] [F] (2)\nEs por ti que no hay cadenas\nSi sigo el ritmo de tus caderas\n-Es por ti que rozo la locura\nCuando navego por tu cintura\n\n[C] [Dm]/ [Am] [F]/ [Am]-[G]-[F] (3) [E] [Dm]\nEs por ti que soy un duende\nCómplice del viento\n-Que se escapa de madrugada (3)\nPara colarse por tu ventana\n\nY decirte: tus labios son de seda\nTus dientes del color de la luna llena\n-Tu risa, la sangre que corre por mis venas\n-Tus besos, la tinta de mis versos\nQue siempre te cuentan\n\n[A7]// [Dm] [C] [F] [G] (3) [C]\n[Dm] [Am] [G] [F]\nOh, oh, oh, oh, oh ohh\n\n[Dm] [Am] [G] [F] (2)\nEs por ti que veo ríos\nDonde solo hay asfalto\nEs por ti que hay océanos\nDonde solo había charcos\n\n[C] [Dm]/ [Am] [F]/ [Am]- [G]- [F] (3) [E] [Dm]\nEs por ti que soy un duende\nCómplice del viento\nQue se escapa de madrugada (3)\nPara colarse por tu ventana\n\nY decirte: tus labios son de seda…\n\n[A7]// [Dm] [C] [F] [G] (3) [C]\n"
  },
  {
    "id": "escuela-de-calor",
    "title": "Escuela de calor",
    "artist": "Radio Futura",
    "key": "G7",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop rock",
      "movida madrileña",
      "80s"
    ],
    "file": "canciones/escuela-de-calor.md",
    "content": "---\ntitle: \"Escuela de calor\"\nartist: \"Radio Futura\"\nkey: \"G7\"\ncapo: 0\ntempo: 100\ntags: [\"pop rock\", \"movida madrileña\", \"80s\"]\n---\n\n## Verso 1\nArde la calle al sol de poniente,\nHay tribus ocultas cerca del río\nEsperando que caiga la noche.\nHace falta valor, hace falta valor,\nVen a la escuela de calor.\nSé lo que tengo que hacer para conseguir\nQue tú estés loco por mí.\nVen a mi lado y comprueba el tejido\nMas cuida esas manos, chico.\nEsa paloma sobrevuela el peligro,\nAprendió en una escuela de calor.\nVas por ahí sin prestar atención\nY cae sobre ti una maldición.\nEn las piscinas probadas las chicas\nDesnudan sus cuerpos al sol.\nNo des un mal paso, no des un mal paso,\nEsto es una escuela de calor.\nDeja que me acerque, deja que me acerque a ti,\nQuiero vivir del aire, quiero salir de aquí.\nArde la calle al sol de poniente,\nHay tribus ocultas cerca del río\nEsperando que caiga la noche.\nHace falta valor, hace falta valor,\nVen a la escuela de calor.\n\n[G7] [A9]\n"
  },
  {
    "id": "eso-que-tu-me-das",
    "title": "Eso que tú me das",
    "artist": "Jarabe de Palo",
    "key": "C",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop rock",
      "español",
      "acústico"
    ],
    "file": "canciones/eso-que-tu-me-das.md",
    "content": "---\ntitle: \"Eso que tú me das\"\nartist: \"Jarabe de Palo\"\nkey: \"C\"\ncapo: 0\ntempo: 100\ntags: [\"pop rock\", \"español\", \"acústico\"]\n---\n\n## Intro\n[Intro:] [C] [F7] [C] [G] [C] [G] [F] [C]/ [Dm] [F] [Dm] [G7]\n\nEso que tú me das\nEs mucho más de lo que pido\nTodo lo que me das\nEs lo que ahora necesito\n-Eso que tú me das\nNo creo lo tenga merecido\nTodo lo que me das\nTe estaré siempre agradecido\n\n[A7] [Dm] [B7] [Em] [C]\nAsí que gracias por estar\nPor tu amistad y tu compañía\nEres lo, lo mejor,\nQue me ha dado la vida\n\n[C] [G] [F] [C]/ [Dm] [F] [Dm] [G7]\nPor todo lo que recibí\nEstar aquí vale la pena\nGracias a ti seguí\nRemando contra la marea\n-Con todo lo que recibí\nAhora sé que no estoy solo\nAhora te tengo a ti\nAmigo mío, mi tesoro\n\n[A7] [Dm] [B7] [Em] [C]\nAsí que gracias por estar\nPor tu amistad y tu compañía\nEres lo, lo mejor,\nQue me ha dado la vida\n\n[D] A [G] [D]/[Em] [G] [Em] [A7]\n-Todo te lo voy a dar\nPor tu calidad, por tu alegría\nMe ayudaste a remontar\nA superarme día a día\n-Todo te lo voy a dar\nFuiste mi mejor medicina\nTodo te lo daré\nSea lo que sea, lo que pidas\n-Y eso que tú me das\nEs mucho más, es mucho más\nDe lo que nunca te he pedido\n-Todo lo que me das\nEs mucho más, es mucho más\nDe lo que nunca he merecido\n-Eso que tú me das\n"
  },
  {
    "id": "esos-ojos-negros",
    "title": "Esos ojos negros",
    "artist": "Duncan Dhu",
    "key": "C#m",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop rock",
      "acústico",
      "80s"
    ],
    "file": "canciones/esos-ojos-negros.md",
    "content": "---\ntitle: \"Esos ojos negros\"\nartist: \"Duncan Dhu\"\nkey: \"C#m\"\ncapo: 0\ntempo: 100\ntags: [\"pop rock\", \"acústico\", \"80s\"]\n---\n\n## Intro\n[C#m] [B7] [E]\n\nLara la …Toca otra vez viejo perdedor..\n\n[G]-7/ [C] [D](4) [C] [G]\nEsos ojos negros(2) no los quiero ver llorar\nTan sólo quiero escuchar, dime,\nLo que quiero oír, dime, que vas a reír,\nDime, dime ahora que duerme la ciudad\n\n.\n-Hace ya algún tiempo (2)\nQue tu voz parece ser\nUna pluma y un papel que cuentan\nQue vas a volar en sueños,\nQue serán tus ojos negros,\nLos que me iluminen en al andar.\n\n[G][_-]7 [G] [Bm]_ [D] [G]/\nLa lluvia cae sobre el suelo gris\nEl tiempo pasa y no puedo reír,\nLa noche es larga, mi voz amarga\nHoy he visto despertar el sol,\nY tus pupilas brillarán\n\n[C]-[D]-[G]-[C] (3) [D]-[C]-[G]\n-Pero espera descuida que ya verás,\nLos buenos tiempos volverán\nPero espera, descuida, que ya vendrán,\nLa lluvia los devolverá\n\nDa\n\n[G][_-]7 [G] [Bm]_ [D] [G]/\nLa lluvia cae sobre el suelo gris\nEl tiempo pasa y no puedo reír,\nLa noche es larga, mi voz amarga\nHoy he visto despertar el sol,\nY tus pupilas brillarán\n\n[C]-[D]-[G]-[C] (3) [D]-[C]-[G]\n-Pero espera descuida que ya verás,\nLos buenos tiempos volverán\nPero espera, descuida, que ya vendrán,\nLa lluvia los devolverá\n\n[D] [C] [G] [G]-7/ [C] [D](4) [C] [G]\nEsos ojos negros (2) no los quiero ver llorar\nTan sólo quiero escuchar, dime,\nLo que quiero oír, dime, que vas a reír,\nDime, dime ahora que duerme la ciudad\nDime ahora que duerme la ciudad\n"
  },
  {
    "id": "espana-camisa-blanca",
    "title": "España camisa blanca",
    "artist": "Ana Belén",
    "key": "G",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "canción de autor",
      "himno",
      "español"
    ],
    "file": "canciones/espana-camisa-blanca.md",
    "content": "---\ntitle: \"España camisa blanca\"\nartist: \"Ana Belén\"\nkey: \"G\"\ncapo: 0\ntempo: 100\ntags: [\"canción de autor\", \"himno\", \"español\"]\n---\n\n## Intro\n[G] [D] [C] [G]/ [E7] [Am]-[C]-[D] [A]\n\nEspaña camisa blanca de mi esperanza\nLa negra pena nos atenaza\nLa pena deja, plomo en las alas.\nQuisiera poner el hombro y pongo palabras\nQue casi siembre acaban en nada\nCuando se enfrentan, al ancho mar.\n\n[A] [E] [D] [F#m] [A]/ [F#] [Bm]-[D]-[E]_ -[D7]\nEspaña camisa blanca de mi esperanza\nA veces madre y siempre madrastra\nNavaja, barro, clavel, espada.\nLa muerte siempre nos acompaña\nEn nuestras cosas más cotidianas\nY al fin nos hace a todos igual.\n\n[G] [D] [C] [G]/ [E7] [Am]-[C]-[D] [G]\nEspaña camisa blanca de mi esperanza\nDe fuera o dentro, dulce o amarga,\nDe olor a incienso, de cal y caña.\n¿quién puso el desasosiego\nEn nuestras entrañas?\nNos hizo libres, pero sin alas,\nNos dejó el hambre y se llevó el pan?\n\nEn el comedor se sientan separados a comer,\nSi se miran bien, les corren\nMil hormigas por los pies,\n\n[G] [D] [C] [G]/[E7] [Am]-[C]-[D] [A]-[D] [A]\nEspaña camisa blanca de mi esperanza\nAquí me tienes, nadie me manda,\nQuererte tanto me cuesta nada.\nNos haces siempre a tu imagen y semejanza,\nLo bueno y malo que hay en tu estampa\nDe peregrina a ningún lugar.\n"
  },
  {
    "id": "every-breath-you-take",
    "title": "Every Breath You Take",
    "artist": "The Police",
    "key": "G",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rock",
      "new wave",
      "80s",
      "classic",
      "inglés"
    ],
    "file": "canciones/every-breath-you-take.md",
    "content": "---\ntitle: \"Every Breath You Take\"\nartist: \"The Police\"\nkey: \"G\"\ncapo: 0\ntempo: 100\ntags: [\"rock\", \"new wave\", \"80s\", \"classic\", \"inglés\"]\n---\n\n## Intro\n[G] [Em] [C] [D] [G]                                    [C] [Am] [F] [G] [C]\n\n## Verso 1\nEvery breath you take and every move you make\nEvery bond you break, every step you take, I'll be watching you\nEvery single day and every word you say\nEvery game you play, every night you stay, I'll be watching you\n\n[C] [G] [A] [D]                                    [F] [C] [D] [G]\nOh, can't you see you belong to me\nHow my poor heart aches with every step you take\n\n[G] [Em] [C] [D] [G]                                    [C] [Am] [F] [G] [C]\nEvery move you make, and every vow you break\nEvery smile you fake, every claim you stake, I'll be watching you\n\n[D#] [F]_ (2) [G]                                    [G#] [A#]__(2) [C]\nSince you've gone, I've been lost without a trace\nI dream at night, I can only, see your face\nI look around but it's you I can't replace\nI feel so cold and I long for your, embrace\nI keep crying, \"Baby, baby, please\"\n\n[C] [G] [A] [D]                                    [F] [C] [D] [G]\nOh, can't you see you belong to me\nHow my poor heart aches with every step you take\n\n[G] [Em] [C] [D] [G]                                    [C] [Am] [F] [G] [C]\nEvery move you make and every vow you break\nEvery smile you fake, every claim you stake, I'll be watching you\nEvery move you make, every step you take,\nI'll be watching you, I'll be watching you\n\n//: Every breath you take and every move you make\nEvery bond you break, every step you take (I'll be watching you)\nEvery single day, every word you say\nEvery game you play, every night you stay (I'll be watching you)\nEvery move you make, every vow you break\nEvery smile you fake, every claim you stake (I'll be watching you)\nEvery single day, every word you say\nEvery game you play, every night you stay (I'll be watching you) ://\n"
  },
  {
    "id": "fandangos-de-huelva",
    "title": "Fandangos de Huelva",
    "artist": "Popular",
    "key": "E",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "flamenco",
      "fandangos",
      "andaluz"
    ],
    "file": "canciones/fandangos-de-huelva.md",
    "content": "---\ntitle: \"Fandangos de Huelva\"\nartist: \"Popular\"\nkey: \"E\"\ncapo: 0\ntempo: 100\ntags: [\"flamenco\", \"fandangos\", \"andaluz\"]\n---\n\n## Verso 1\nMorena, morena tiene la cara\nLa mujer que yo más quiero\nEl pelo negro y\n\n[E] [Am] [G] [F] [E] // [G7] [C] [F] [C] [G7] [C] [F] [E]\nQuerer, querer a quién no te quiere\nA eso lo llamo querer,\nPues querer a quién te quiera,\nEs solo corresponder\nY eso lo hace cualquiera.\n\nrizao\n\nLa única pena que tengo\nEs que no la tengo a mi\n\nlao\n\n.\nTomate, que culpa tiene el tomate\nQue está tranquilo en su mata,\nQue venga un tío malaje\nY lo meta en una lata,\nQue culpa tiene el tomate.\nNegando, de qué presumes negando\nSi al verlo te vuelves loca\nLo que tú estás deseando\nEs darle un beso en la boca\nTú misma te estás matando\nSi me quieres, si me quieres dímelo\nY no me estés engañando\nMás vale dar una pena\nQue mucha y estar matando\nEres pa’ mí una condena.\nJuré, por mi madre yo juré\nQue a verte más no volvía\nEl juramento olvidé\nPorque en el alma sentía\nLo que explicarme no sé.\nEstaba, estaba la noche clara\nY me acordé yo de ti\nLas lágrimas me caían\nSabiendo que te perdí,\nAunque eso ya lo sabía.\n\n[E] [Am] [E] [E7] [Am] [E7] [Am]\nY desde entonces\nSe bailan los fandangos\nY desde entonces se bailan\nLos fandangos de Santiponce.\n\nLas olas, las olas del mar bravío\nSe estrellan contra las rocas\nIgual que los besos tuyos\nSe estrellan contra mi boca,\nAy me estás quitando el\n\nsentío\n\n.\nAmores, amores que se han querido\nY que se ven por la calle\nO se cambian de color\nO se hacen un desaire\nPor dentro sufren los dos.\nCanario, y en mi casa hay un canario\nQue canta cuando te nombro,\nMira si te nombraré\nQue hasta el canario está ronco,\nMira si yo te querré.\nMorenas, qué dulce son las morenas,\nDulces como el caramelo\nY yo que soy tan goloso\nPor una morena me muero,\nQué dulces son las morenas.\nFandango, un fandango sin guitarra,\nSin una copa de vino\nEs como un jardín sin flores,\nUn matrimonio sin hijos\nY una niña sin amores.\n\n.\n\nAmores, amores tienes con otro,\nConmigo solo bromitas,\nSi te quieres divertir\nCómprate un trompo con guita\nY no te acuerdes de mí.\n"
  },
  {
    "id": "flaca-calamaro",
    "title": "Flaca",
    "artist": "Andrés Calamaro",
    "key": "G",
    "capo": 0,
    "tempo": 120,
    "tags": [
      "rock",
      "pop",
      "argentina",
      "90s"
    ],
    "file": "canciones/flaca-calamaro.md",
    "content": "---\ntitle: \"Flaca\"\nartist: \"Andrés Calamaro\"\nkey: \"G\"\ncapo: 0\ntempo: 120\ntags: [\"rock\", \"pop\", \"argentina\", \"90s\"]\n---\n\n## Intro\n[G] [B7] [Em] [C] [G] [D] [G] [D]\n\n## Verso 1\n[G] Flaca, no me [B7] claves\nTus puñales [Em] por la espalda, [C]\nTan profundo [G] no me duelen, [D]\nNo me hacen [G] mal. [D]\n[G] Lejos, en el [B7] centro\nDe la tierra, [Em] las raíces [C]\nDel amor, [G] donde estaban [D]\nQueda[G]rán. [D]\n\n## Verso 2\n[G] Entre no-me-olvides me de[B7]jé nuestros abriles\nOlvi[Em]dados en el fondo del pla[C]card,\nEn el cuarto de invi[G]tados, [D]\nEran tiempos do[G]rados, un pasado me[D]jor.\n\n[G] Aunque casi me equivoco y te [B7] digo poco a poco:\nNo me [Em] mientas, no me digas la ver[C]dad,\nNo te quedes ca[G]llada, no levantes la [D] voz\nNi me pidas per[G]dón. [D]\n\n[G] Aunque casi te confieso que tam[B7]bién\nHe sido un perro compa[Em]ñero, un perro ide[C]al\nQue aprendió a la[G]drar y a volver al ho[D]gar\nPara poder co[G]mer. [D]\n\n## Coro\n[G] Flaca, no me [B7] claves\nTus puñales [Em] por la espalda, [C]\nTan profundo [G] no me duelen, [D]\nNo me hacen [G] mal. [D]\n[G] Lejos, en el [B7] centro\nDe la tierra, [Em] las raíces [C]\nDel amor, [G] donde estaban [D]\nQueda[G]rán. [D] [G]\n"
  },
  {
    "id": "fonseca",
    "title": "Fonseca",
    "artist": "Tuna Universitaria",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "tuna",
      "popular",
      "español"
    ],
    "file": "canciones/fonseca.md",
    "content": "---\ntitle: \"Fonseca\"\nartist: \"Tuna Universitaria\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"tuna\", \"popular\", \"español\"]\n---\n\n## Verso 1\nAdiós (adiós, adiós), aulas de mi querer, donde con ilusión mi carrera estudie\n//:Adiós, mi universidad, cuyo reloj no volveré a escuchar ://\n\n[Am] [E7] [Am] (2)\nLas calles están mojadas y parece que llovió,\nSon lagrimas de una niña por el amor que perdió.\n\n[Am] [E7] [Am] (3) [Dm] [Am] [E7] [Am]\nTriste y sola, sola se queda Fonseca, triste y llorosa queda la universidad.\nY los libros, y los libros empeñados en el monte, en el monte de piedad.\n\n[Am] [E7] [Am] (2)\nNo te acuerdas cuando te decía a la pálida luz de la luna\nYo no puedo querer más que a una y esa una mi vida eres tú.\n\n[Am] [E7] [Am] (3) [Dm] [Am] [E7] [Am]\nTriste y sola, sola se queda Fonseca, triste y llorosa queda la universidad.\nY los libros, y los libros empeñados en el monte, en el monte de piedad.\n"
  },
  {
    "id": "frenesi",
    "title": "Frenesí",
    "artist": "Alberto Domínguez",
    "key": "G",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "bolero",
      "chachachá",
      "clásico"
    ],
    "file": "canciones/frenesi.md",
    "content": "---\ntitle: \"Frenesí\"\nartist: \"Alberto Domínguez\"\nkey: \"G\"\ncapo: 0\ntempo: 100\ntags: [\"bolero\", \"chachachá\", \"clásico\"]\n---\n\n## Verso 1\n(A. Domínguez Borrás ‘39)\n\n[INTRO:]\n[G]-[Em]-[Am]-[Dmaj7] ([x2])\nRitmo Bolero\n[G] [Em—Lam]\nBésame tú a mí\n\n[Dmaj7] [G] [Em]-[Am]-[Dmaj7]\nBésame igual que mi boca te besó\n\n[G] [Em—Lam] [IMPORTANTE] [CAMBIO] [DE] [TONO]\nDame el frenesí\n\n[D] [G] [C#m—Fa#M]\nQue mi locura te dio\n\n[B] [G#m—Do#m]\nQuién si no fui yo\n\n[F#] [B] [G#m—Do#m—Fa#M]\nPudo enseñarte el camino del amor\n\nMuerta mi altivez\n\n[B] [G#m—Do#m]\nCuando mi orgullo rodó a tus pies\n\n[F#] [B] [D7M]\n(Ritmo chachachá) [Am] [D7M]\n(piano) Quiero que vivas solo para mí\n\n[Am] [D7M] [Am] [D7M]\nY que tú vayas por donde yo voy\n\n[Am] [D7M] [G] [Bm—La#m—Lam]\nPara que mi alma sea nomás de ti\n\n[D7M] [G]\nBésame con frenesí\n(piano) Dame la luz que tiene tu mirar,\nY la ansiedad que entre tus labios vi,\nEsa locura de vivir y amar, que es más que amor, frenesí\n\n[Bmaj7] [C] [Bmaj7]\nHay en el beso que te di, alma, piedad, corazón\n\n[C] [Bmaj7] [C] [Amaj7] [Dmaj7]\nDime qué sabes tú sentir, lo mismo que siento yo\n\n[Am] [D7M] (4) [G] [Bm]-[A#m]-[Am] [D7M] [G] (BIS) [Bmaj7] [C] [Bmaj7]\nHay en el beso que te di, alma, piedad, corazón\n\n[C] [Bmaj7] [C] [Amaj7] [Dmaj7]\nDime qué sabes tú sentir, lo mismo que siento yo\nQuiero que vivas solo para mí, y que tú vayas por donde yo voy Para que mi alma sea nomás de ti, Bésame con frenesí , Bésame con frenesí\n\n[C#m]\n[F#]\n[B]\nBésame con frenesí\n\n[G#m]\n"
  },
  {
    "id": "girl",
    "title": "Girl",
    "artist": "The Beatles",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rock",
      "folk",
      "60s",
      "classic",
      "inglés"
    ],
    "file": "canciones/girl.md",
    "content": "---\ntitle: \"Girl\"\nartist: \"The Beatles\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"rock\", \"folk\", \"60s\", \"classic\", \"inglés\"]\n---\n\n## Intro\n[Am] [E7] [Am] [Dm] ([C] [E7]/ [Am]) (2)\n\n## Verso 1\nIs there anybody going to listen to my story\nAll about the girl who came to stay\nShe’s the kind of girl you want so much it makes you sorry,\nStill you don’t regret a single day\n\n[C] [Em] [Dm] [G7]/ [C] [Em] [Dm7] [G7]\nAH GIRL, GIRL\n\nWhen I think of all the times I’ve tried so hard to leave her,\nShe will turn to me and start to cry\nAnd she promises the earth to me and I believe her\nAfter all this time I don’t know why\n\n[Dm] [A]/ [Dm7] [A](2) [Dm7]\nShe’s the kind of girl who puts you down\nWhen friends are there you feel a fool\nWhen you say she’s looking good\nShe acts as if it’s understood, she’s cool,\n\n[F] [C] [Em] [Dm7] [G7] [C] [Em] [Dm]\nOh, oh, oh, girl, girl\n\n[Am] [E7] [Am] [Dm] ([C] [E7]/ [Am]) (2)\nWas she told when she was young that pain would lead to pleasure,\nDid she understand it when they said\nThat a man must break his back to earn his day of leisure\nWill she still believe it when he’s dead\n\n[C] [Em] [Dm] [G7]/ [C] [Em] [Dm7] [G7]\nAH GIRL, GIRL\n"
  },
  {
    "id": "guantanamera",
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
    ],
    "file": "canciones/guantanamera.md",
    "content": "---\ntitle: \"Guantanamera\"\nartist: \"Tradicional\"\nkey: \"G\"\ncapo: 0\ntempo: 110\ntags: [\"latino\", \"folk\", \"fácil\", \"clásico\"]\n---\n\n// Una de las canciones más fáciles para empezar: sólo usa G - C - D\n\n## Coro\n[G] Guantanamera, [C] guajira [D] guantanamera\n[G] Guantanamera, [C] guajira [D] guantanamera\n[G] Guantanamera, [C] guajira [D] guantanamera\n[G] Guantanamera, [C] guajira [D] guantanamera\n\n## Verso 1\n[G] Yo soy un [C] hombre sin[D]cero\n[G] De donde [C] crece la [D] palma\n[G] Yo soy un [C] hombre sin[D]cero\n[G] De donde [C] crece la [D] palma\n[G] Y antes de [C] morirme [D] quiero\n[G] Cantar mis [C] versos del [D] alma\n\n## Coro\n[G] Guantanamera, [C] guajira [D] guantanamera\n[G] Guantanamera, [C] guajira [D] guantanamera\n\n## Verso 2\n[G] Mi verso es [C] de un verde [D] claro\n[G] Y de un car[C]mín encen[D]dido\n[G] Mi verso es [C] de un verde [D] claro\n[G] Y de un car[C]mín encen[D]dido\n[G] Mi verso es [C] un ciervo [D] herido\n[G] Que busca en [C] el monte a[D]mparo\n\n## Coro\n[G] Guantanamera, [C] guajira [D] guantanamera\n[G] Guantanamera, [C] guajira [D] guantanamera\n"
  },
  {
    "id": "habaneras-de-cadiz",
    "title": "Habaneras de Cádiz",
    "artist": "Carlos Cano",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "habanera",
      "copla",
      "andaluz"
    ],
    "file": "canciones/habaneras-de-cadiz.md",
    "content": "---\ntitle: \"Habaneras de Cádiz\"\nartist: \"Carlos Cano\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"habanera\", \"copla\", \"andaluz\"]\n---\n\n## Intro\n[Am] [E] [Am] [E]\n\nQue tengo un amor en la Habana y el otro en Andalucía, no te he visto yo a ti tierra mía,\n\n[Am] [G7] [C] [F] [E]\nMás cerca que la mañana, que apareció en mi ventana de la Habana colonial\n\n[F] [E] [F] [E] [F] [E] [A]\nTo Cádiz, la catedral, La Viña y el Mentidero, y verán que no exagero\n\n[E] [A] [E7]\nSi al cantar la habanera repito: La Habana es Cádiz con más negritos,\n"
  },
  {
    "id": "hallelujah",
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
    ],
    "file": "canciones/hallelujah.md",
    "content": "---\ntitle: \"Hallelujah\"\nartist: \"Leonard Cohen\"\nkey: \"C\"\ncapo: 0\ntempo: 60\ntags: [\"folk\", \"balada\", \"classic\", \"arpegios\", \"himno\"]\n---\n\n// Tocar con compás de 6/8 o arpegio suave\n\n## Intro\n[C] [Am] [C] [Am]\n\n## Verso 1\nI've [C] heard there was a [Am] secret chord\nThat [C] David played, and it [Am] pleased the Lord\nBut [F] you don't really [G] care for music, [C] do you? [G]\nIt [C] goes like this: the [F] fourth, the [G] fifth\nThe [Am] minor fall, the [F] major lift\nThe [G] baffled king com[E7]posing Halle[Am]lujah\n\n## Coro\nHalle[F]lujah, Halle[Am]lujah\nHalle[F]lujah, Halle[C]lu---[G]jah [C] [Am] [C] [Am]\n\n## Verso 2\nYour [C] faith was strong but you [Am] needed proof\nYou [C] saw her bathing [Am] on the roof\nHer [F] beauty and the [G] moonlight over[C]threw you [G]\nShe [C] tied you to a [F] kitchen [G] chair\nShe [Am] broke your throne, and she [F] cut your hair\nAnd [G] from your lips she [E7] drew the Halle[Am]lujah\n\n## Coro\nHalle[F]lujah, Halle[Am]lujah\nHalle[F]lujah, Halle[C]lu---[G]jah [C] [Am] [C] [Am]\n\n## Verso 3\nMaybe [C] there's a God a[Am]bove\nAnd [C] all I ever [Am] learned of love\nWas [F] how to shoot at [G] someone who out[C]drew you [G]\nAnd it's [C] not a cry you can [F] hear at [G] night\nIt's [Am] not somebody who's [F] seen the light\nIt's a [G] cold and it's a [E7] broken Halle[Am]lujah\n\n## Coro Final\nHalle[F]lujah, Halle[Am]lujah\nHalle[F]lujah, Halle[C]lu---[G]jah [C]\n"
  },
  {
    "id": "hey-jude",
    "title": "Hey Jude",
    "artist": "The Beatles",
    "key": "G",
    "capo": 0,
    "tempo": 74,
    "tags": [
      "rock",
      "60s",
      "classic",
      "balada",
      "fácil"
    ],
    "file": "canciones/hey-jude.md",
    "content": "---\ntitle: \"Hey Jude\"\nartist: \"The Beatles\"\nkey: \"G\"\ncapo: 0\ntempo: 74\ntags: [\"rock\", \"60s\", \"classic\", \"balada\", \"fácil\"]\n---\n\n// Tocado en clave de G (versión fácil para guitarra, o en F en tono original)\n## Verso 1\n[G] Hey Jude, don't make it [D] bad\nTake a [D7] sad song and make it [G] better\nRe[C]member to let her into your [G] heart\nThen you can [D] start to make it [G] better\n\n## Verso 2\n[G] Hey Jude, don't be a[D]fraid\nYou were [D7] made to go out and [G] get her\nThe [C] minute you let her under your [G] skin\nThen you be[D]gin to make it [G] better\n\n## Puente 1\n[G7] And anytime you feel the [C] pain, hey Jude, re[Am]frain\nDon't carry the [D/F#] world upon your [G] shoulders\n[G7] For well you know that it's a [C] fool who plays it [Am] cool\nBy making his [D/F#] world a little [G] colder\nDa da da [G7] da... da da [D7] da da...\n\n## Verso 3\n[G] Hey Jude, don't let me [D] down\nYou have [D7] found her, now go and [G] get her\nRe[C]member to let her into your [G] heart\nThen you can [D] start to make it [G] better\n\n## Puente 2\n[G7] So let it out and let it [C] in, hey Jude, be[Am]gin\nYou're waiting for [D/F#] someone to per[G]form with\n[G7] And don't you know that it's just [C] you, hey Jude, you'll [Am] do\nThe movement you [D/F#] need is on your [G] shoulder\nDa da da [G7] da... da da [D7] da da...\n\n## Verso 4\n[G] Hey Jude, don't make it [D] bad\nTake a [D7] sad song and make it [G] better\nRe[C]member to let her under your [G] skin\nThen you'll be[D]gin to make it [G] better, better, better, better, better, yeah!\n\n## Outro (El gran coro final)\n[G] Na na na [F] na na na na\n[C] Na na na na, hey [G] Jude\n[G] Na na na [F] na na na na\n[C] Na na na na, hey [G] Jude (repetir y desvanecer)\n"
  },
  {
    "id": "hijo-de-la-luna",
    "title": "Hijo de la luna",
    "artist": "Mecano",
    "key": "Em",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop",
      "balada",
      "clásico"
    ],
    "file": "canciones/hijo-de-la-luna.md",
    "content": "---\ntitle: \"Hijo de la luna\"\nartist: \"Mecano\"\nkey: \"Em\"\ncapo: 0\ntempo: 100\ntags: [\"pop\", \"balada\", \"clásico\"]\n---\n\n## Verso 1\nCruz de navajas por una mujer…\n\n[Em]-[Bm]-[C]-[D7] (2)\nTonto el que no entienda, cuenta una leyenda,\n\n[G] [D] [Em] [Bm] [C] [D7] [Em] [D] (2)\n-Que una hembra gitana,\nConjuró a la luna hasta el amanecer\nLlorando pedía al llegar el día desposar un calé\n\n[Em]-[Bm]-[C]-[D7](2)\n-Tendrás a tu hombre, piel morena,\nDesde el cielo habló la luna llena,\n\n[G] [D] [Em] [Bm] [C] [D7] [Em] [D] (2)\nPero a cambio quiero,\nEl hijo primero que le engendres a él\nQue quien sufre inmola,\nPara no estar sola, poco le iba a querer\n\n[F#]- [Bm]-[F#m]-[G]-[F#7]-[Bm]_[D] [F#7] [Bm](2)\nLuna, quieres ser madre,\n\n[\\]\n[F#7]-[Bm](2) [Em]\nY no encuentras querer que te haga mujer\nDime luna de plata, ¿qué pretendes hacer\ncon un niño de piel? Ah, ah, hijo de la luna\n\n[Em] [Bm] [C] [D7](2)\nDe padre canela nació un niño,\nBlanco como el lomo de un armiño,\n\n[G] [D] [Em] [Bm] [C] [D7] [Em] [D] (2)\nCon los ojos grises, en vez de aceituna,\nNiño albino de luna. Maldita su estampa,\nEste hijo es de un payo, y yo no me lo callo\n\n[Em] [Bm] [C] [D7](2)\n-Gitano al creerse deshonrado,\nSe fue a su mujer cuchillo en mano,\n\n¿De quién es el hijo? me has engañao fijo\nY de muerte la hirió, luego se hizo al monte,\nCon el niño en brazos y allí lo abandonó\n\n[G] [D] [Em] [Bm] [C] [D7] [Em] [D] (2)\n[Em] [Bm] [C] [D7](2)\n-Y en las noches que haya luna llena,\nSerá porque el niño esté de buenas.\n\n[G] [D] [Em] [Bm] [C] [D7] [Em] [D] (2)\n"
  },
  {
    "id": "hit-the-road-jack",
    "title": "Hit the Road Jack",
    "artist": "Ray Charles",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "r&b",
      "soul",
      "classic",
      "60s",
      "inglés"
    ],
    "file": "canciones/hit-the-road-jack.md",
    "content": "---\ntitle: \"Hit the Road Jack\"\nartist: \"Ray Charles\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"r&b\", \"soul\", \"classic\", \"60s\", \"inglés\"]\n---\n\n## Intro\n[Am] [G] [F] [E7]\n\n## Verso 1\nHit the road Jack and don't you come back\nNo more, no more, no more, no more\nHit the road Jack and don't you come back\nNo more (What'd you say?)\nHit the road Jack and don't you come back\nNo more, no more, no more, no more\nHit the road Jack and don't you come back, no more\n\nOh woman, oh woman, don't treat me so mean\nYou're the meanest old woman that I've ever have seen.\nI guess, if you say so, I'll have to pack my things and go (that's right)\n\nHit the road Jack and don't you come back\n\nNow baby listen baby, don't you treat me this way\n'Cause I'll be back on my feet someday\nDon't care if you do, 'cause it's understood\nYou ain't got no money, you just ain't no good\nWell, I guess if you say so\nI'll have to pack my things and go (that's right)\n"
  },
  {
    "id": "hotel-california",
    "title": "Hotel California",
    "artist": "The Eagles",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rock",
      "classic",
      "70s",
      "himno",
      "inglés"
    ],
    "file": "canciones/hotel-california.md",
    "content": "---\ntitle: \"Hotel California\"\nartist: \"The Eagles\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"rock\", \"classic\", \"70s\", \"himno\", \"inglés\"]\n---\n\n## Intro\n[Am] [E7] [G] [D]/ [F] [C] [Dm] [E7] (2)\n\n## Verso 1\nOn a dark desert highway, cool wind in my hair\nWarm smell of colitas, rising up through the air\nUp ahead in the distance, I saw a shimmering light\nMy head grew heavy and my sight grew dim. I had to stop for the night\nThere she stood in the doorway, I heard the mission bell\nAnd I was thinking to myself: \"This could be Heaven or this could be Hell\"\nThen she lit up a candle, and she showed me the way\nThere were voices down the corridor I thought I heard them say\n\n[F] [C] [E7] [Am] /[F] [C] [Dm] [E]\nWelcome to the Hotel California, such a lovely place, such a lovely face\nPlenty of room at the Hotel California. Any time of year, you can find it here\n\n[Am] [E7] [G] [D]/ [F] [C] [Dm] [E7] (2)\nHer mind is Tiffany-twisted, she got the Mercedes bends\nShe got a lot of pretty, pretty boys she calls friends\nHow they dance in the courtyard, sweet summer sweat\nSome dance to remember, some dance to forget\nSo I called up the Captain, \"Please bring me my wine.\"\nHe said, \"We haven't had that spirit here since 1969.\"\nAnd still those voices are calling from far away\nWake you up in the middle of the night\nJust to hear them say\n\n[F] [C] [E7] [Am] /[F] [C] [Dm] [E]\nWelcome to the Hotel California, such a lovely place, such a lovely face\nThey livin' it up at the Hotel California. What a nice surprise, bring your alibis\n\n[Am] [E7] [G] [D]/ [F] [C] [Dm] [E7] (2)\nMirrors on the ceiling, the pink champagne on ice\nAnd she said: \"We are all just prisoners here, of our own device\"\nAnd in the master's chambers, they gathered for the feast\nThey stab it with their steely knives, but they just can't kill the beast\nLast thing I remember, I was, running for the door\nI had to find the passage back, to the place I was before\n\"Relax,\" said the night man: we’re programmed to receive\nYou can check-out any time you like, but you can never leave!\"\n"
  },
  {
    "id": "hoy-gloria-estefan",
    "title": "Hoy",
    "artist": "Gloria Estefan",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop latino",
      "andino",
      "balada"
    ],
    "file": "canciones/hoy-gloria-estefan.md",
    "content": "---\ntitle: \"Hoy\"\nartist: \"Gloria Estefan\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"pop latino\", \"andino\", \"balada\"]\n---\n\n## Intro\n[Am] [C] [G] [Am] ([x3]) [Am] [E] [Am] ([×4])\n\nIntro:\n\n[Am] [G]\n[F] [G] [C] -[E7]\nTengo marcado en el pecho todos los días que el tiempo no me dejó estar aquí (estar aquí)\n\n[E] [Am]\n[Am] [G] [F]\nTengo una fe que madura, que va conmigo y me cura desde que te conocí\n\n[Am] [G] [F] [G] [C]-[E7]\nTengo una huella perdida entre tu sombra y la mía que no me deja mentir: (no me deja mentir)\n\n[Am] [G] [F] [E] [Am]\nSoy una moneda en la fuente, tú, mi deseo pendiente, mis ganas de revivir:\n\n[F] [G] [C]\nTengo una mañana constante y una acuarela esperando verte pintado de azul.\n\n[E] [Am]\n[F] [G]\n[C]\nTengo tu amor y tu suerte, y un caminito empinado.\n\n[E7] [Am]\nTengo el mar del otro lado, tú eres mi norte y mi sur.\n\nHoy voy a verte de nuevo, voy a envolverme en tu ropa.\n\n[F] [G] [C]\n[E7] [Am]\nSusúrrame en tu silencio, cuando me veas llegar\n\n[F] [G] [C]\nHoy voy a verte de nuevo, voy a alegrar tu tristeza.\n\n[Am] [E] [Am] ([×4])\n[E7] [Am]\nVamos a hacer una fiesta, pa que este amor crezca más\n\n[F] [G] [C] -[E7]\nTengo una frase colgada, entre mi boca y mi almohada que me desnuda ante ti.\n\n[Am] [G]\n[Am] [G] [F]\n[E7] [Am]\nTengo una playa y un pueblo que me acompañan de noche cuando no estás junto a mí.\n\nTengo una mañana constante y una acuarela esperando verte pintado de azul.\n\n[F] [G] [C]\n[E] [Am]\n[F] [G] [C]\nTengo tu amor y tu suerte, y un caminito empinado.\n\nTengo el mar del otro lado, tú eres mi norte y mi sur.\n\n[E7] [Am]\nHoy voy a verte de nuevo, voy a envolverme en tu ropa.\n\n[F] [G] [C]\nSusúrrame en tu silencio, cuando me veas llegar\n\n[E7] [Am]\n> (1ª vez A capela)\n[F] [G] [C]\nHoy voy a verte de nuevo, voy a alegrar tu tristeza.\n\nVamos a hacer una fiesta, pa que este amor crezca más. (BIS)\n\n[E7] [Am]\n"
  },
  {
    "id": "i-am-a-rock",
    "title": "I Am a Rock",
    "artist": "Simon & Garfunkel",
    "key": "C",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "folk rock",
      "60s",
      "classic",
      "inglés"
    ],
    "file": "canciones/i-am-a-rock.md",
    "content": "---\ntitle: \"I Am a Rock\"\nartist: \"Simon & Garfunkel\"\nkey: \"C\"\ncapo: 0\ntempo: 100\ntags: [\"folk rock\", \"60s\", \"classic\", \"inglés\"]\n---\n\n## Intro\n[C] [F] [C]/ [Dm]-[G7] [F]-[C]/ [Dm]/-[Em7](2)\n\n## Verso 1\nA winters day, in a deep and dark december:\nI am alone, gazing from my window\nTo the streets bellow on a freshly fallen silent shroud of snow\n\n[F] [C] [F] [G7] [C]\nI am rock, I am a island\n\nI’ve built walls, a fortress deep and mighty\nThat none may penetrate. I have no need of friendship, friendship causes pain.\nIt’s laughter and it’s loving i disdain\n\nDon’t talk of love, I’ve heard the word before;\nIt’s sleeping in my memory, I won’t disturb the slumber of feelings that have died.\nIf i never loved i never would have cried.\n\nI have my books and my poetry to protect me; I am shielded in my armour,\nHiding in my room, safe within my womb.I touch no one and no one touches me.\n\n[Dm7]-[G7]-[C](2)\nAnd a rock feels no pain, and a island never cries\n"
  },
  {
    "id": "i-still-havent-found-what-im-looking-for",
    "title": "I Still Haven't Found What I'm Looking For",
    "artist": "U2",
    "key": "D",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rock",
      "80s",
      "classic",
      "himno",
      "inglés"
    ],
    "file": "canciones/i-still-havent-found-what-im-looking-for.md",
    "content": "---\ntitle: \"I Still Haven't Found What I'm Looking For\"\nartist: \"U2\"\nkey: \"D\"\ncapo: 0\ntempo: 100\ntags: [\"rock\", \"80s\", \"classic\", \"himno\", \"inglés\"]\n---\n\n## Verso 1\nWhat I’m looking for (U2)\n\n[D] [G] [D]\nI have climbed the highest mountains\nI have run through the fields.\nOnly to be with you\nOnly to be with you\nI have run, I have crawled\nI have scaled these city walls\nThese city walls\nOnly to be with you\n\n[A] [G] [D]\nBUT I STILL HAVEN’T FOUND\nWHAT I’M LOOKING FOR (2)\n\n[D] [G] [D]\nI have kissed honey lips\nFelt the healing in her fingertips\nIt burned like fire, this burning desire\nI have spoken with the tongue of angels\nI have held the hand of the devil\nIt was warm in the night,\nI was cold as a stone.\n\n[A] [G] [D]\nBUT I STILL HAVEN’T FOUND\nWHAT I’M LOOKING FOR (2)\n\n[D] [G] [D]\nI believe in the kingdom come\nThen all the colours will,\nBleed into one (2)\nBut yes, I’m still running\nYou broke the bonds,\nYou loosened the chains\nYou carried the cross\nAnd my shame (2) You know I believe it\n\n[A] [G] [D]\nBUT I STILL HAVEN’T FOUND\nWHAT I’M LOOKING FOR (2)\n"
  },
  {
    "id": "i-will-survive",
    "title": "I Will Survive",
    "artist": "Gloria Gaynor",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "disco",
      "70s",
      "classic",
      "himno",
      "inglés"
    ],
    "file": "canciones/i-will-survive.md",
    "content": "---\ntitle: \"I Will Survive\"\nartist: \"Gloria Gaynor\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"disco\", \"70s\", \"classic\", \"himno\", \"inglés\"]\n---\n\n## Intro\n[Am] [Dm] [G] [Cmaj7]*[Fmaj7]*RemMIsus4*[E]\n\n## Verso 1\nAt first I was afraid, I was petrified\nKept thinking I could never live\nWithout you by my side\nBut then I spent so many nights\nThinking how you did me wrong\nAnd I grew strong and I learned how to get along\n\nAnd so you're back, from outer space\nI just walked in to find you here\nWith that sad look upon your face\nI should've changed that stupid lock\nI should’ve made you leave your key\nIf I'd have known for just one second\nYou'd be back to bother me\n\nGo on, now, go, walk out the door,\nJust turn around now,\nCause you're not welcome anymore\nWeren’t you the one\nWho tried to hurt me with goodbye\nDid you think I'd crumble?\nYou think I'd lay down and die?\nOh, no, not I, I will survive\nOh, as long as I know how to love,\nI know I'll stay alive. I've got all my life to live\nAnd I’ve got all my love to give\nAnd I’ll survive, I will survive, hey hey\n\nIt took all my strength I had not to fall apart\nJust trying hard to mend the pieces\nOf my broken heart\nAnd I spent, oh so many nights\nFeeling sorry for myself\nI used to cry but now I hold my head up high\nAnd you see me, somebody new\nI'm not that chained up little person\nStill in love with you\nAnd so you felt like droppin' in\nAnd just expect me to be free\nBut now I'm saving all my lovin'\nFor someone who's loving me\nGo on now, go, walk out the door…(bis)\n"
  },
  {
    "id": "im-yours",
    "title": "I'm Yours",
    "artist": "Jason Mraz",
    "key": "G",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop",
      "acoustic",
      "2000s",
      "inglés"
    ],
    "file": "canciones/im-yours.md",
    "content": "---\ntitle: \"I'm Yours\"\nartist: \"Jason Mraz\"\nkey: \"G\"\ncapo: 0\ntempo: 100\ntags: [\"pop\", \"acoustic\", \"2000s\", \"inglés\"]\n---\n\n## Intro\n[G] [D] [Em] [C]            [C] [G] [Am] [F]\n\n## Verso 1\nWell, you done done me and you bet I felt it\nI tried to be chill but you’re so hot that I melted\nI fell right through the cracks,\nAnd I’m trying to get back\nBefore the cool done run out, I’ll be giving it my bestest\nAnd nothing’s gonna stop me but divine intervention\nI reckon it's again my turn to win some or learn some\n\nBut, I won't hesitate no more, no more, it cannot wait I’m yours\n\nWell, open up your mind and see like me\nOpen up your plans and damn you're free\nLook into your heart and you'll find love, love, love, love\nListen to the music of the moment\nPeople dance and sing we’re just one big family,\nIt’s your God-forsaken right to be loved, loved, loved, loved\n\nSo, I won't hesitate no more, no more, it cannot wait I’m sure\nThere’s no need to complicate our time is short, this is our fate, I’m yours\n\nI've been, spending way too long, checking my tongue in the mirror\nAnd bending over backwards, just to try to see it clearer\nBut my breath fogged up the glass, and so I drew a new face and I laughed\nI guess what I be saying, is there ain't no better reason\nTo rid yourself of vanities and just go with the seasons\nIt's what we aim to do, our name is our virtue\n\nBut I won't hesitate no more, no more, it cannot wait, I’m yours\n\nI *won't hesitate no more,\nNo more, it cannot wait, I’m sure\nThere’s no need to complicate,\nOur time is short, this is our fate,\nI’m yours (bis)\n\n*Well, open up your mind and see like me\nOpen up your plans and damn you're free\nAnd look into your heart and you'll find that the sky is yours\nSo please don’t, please don’t, please don’t\nThere’s no need to complicate, ‘cause our time is short\nthis oh, this oh, this is our fate, I’m yours (2)\n"
  },
  {
    "id": "imagine",
    "title": "Imagine",
    "artist": "John Lennon",
    "key": "C",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rock",
      "balada",
      "70s",
      "classic",
      "himno",
      "inglés"
    ],
    "file": "canciones/imagine.md",
    "content": "---\ntitle: \"Imagine\"\nartist: \"John Lennon\"\nkey: \"C\"\ncapo: 0\ntempo: 100\ntags: [\"rock\", \"balada\", \"70s\", \"classic\", \"himno\", \"inglés\"]\n---\n\n## Intro\n[C] [F] (4) [Am]   [Dm] [G]\n\n## Verso 1\nImagine there’s no heaven, it’s easy if you try\nNo hell below us, above there’s only sky\nImagine all the people living for today ah!\nImagine there’s no countries, it isn’t hard to do\nNothing to kill or die for, and no religion too\nImagine all the people living life in peace…\n\n[F] [G] [C] [E7] (3) [F] [G] [C]\nYou may say I’m a dreamer\nBut I’m not the only one\nI hope someday you’ll join us\nAnd the world will be as one.\n\nImagine no possessions, I wonder if you can\nNo need for greed or hunger, a brotherhood of man\nImagine all the people sharing all the world.\n"
  },
  {
    "id": "jardin-de-rosas",
    "title": "Jardín de rosas",
    "artist": "Duncan Dhu",
    "key": "G",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop rock",
      "español",
      "80s"
    ],
    "file": "canciones/jardin-de-rosas.md",
    "content": "---\ntitle: \"Jardín de rosas\"\nartist: \"Duncan Dhu\"\nkey: \"G\"\ncapo: 0\ntempo: 100\ntags: [\"pop rock\", \"español\", \"80s\"]\n---\n\n## Intro\n[G] [Am] [D] [G] (2)\n\nDime tu nombre,\nY te haré reina en un jardín de rosas\nTus ojos miran hacia el lugar\nDonde se oculta el día\n\n[G] [Am] [D] (2)\n-Has podido ver donde morirán\nLos oscuros sueños\nQue cada día vienen y van,\nSoy el dueño del viento y el mar.\n-Al pasar el tiempo despertarás\nY descubrirás,\nCientos de rosas a tu alrededor,\nHoy la luna y mañana el sol\n\n[Am]_ [Dm] [Am] [D] -7 -[G]\nY tú, sin saber aún quién eres\nDesde el país donde mueren las flores\nDime que aún creerás en mí.\n\n[G] [Am] [D] [G] (2)\nDime tu nombre,\nY te haré reina en un jardín de rosas\nTus ojos miran hacia el lugar\nDonde se oculta el día\nI beg your pardon,\nI never promised you a rose garden\nAlong_with the sunshine\nThere's gotta be a little rain sometime\nDime tu nombre,\nY te haré reina en un jardín de rosas\nTus ojos miran hacia el lugar\nDonde se oculta el día\n"
  },
  {
    "id": "junto-al-jaguey",
    "title": "Junto al jagüey",
    "artist": "Juan Vicente Torrealba",
    "key": "Dm",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pasaje",
      "venezolano",
      "folklore"
    ],
    "file": "canciones/junto-al-jaguey.md",
    "content": "---\ntitle: \"Junto al jagüey\"\nartist: \"Juan Vicente Torrealba\"\nkey: \"Dm\"\ncapo: 0\ntempo: 100\ntags: [\"pasaje\", \"venezolano\", \"folklore\"]\n---\n\n## Verso 1\n> *\nVersión Achamán\n\n[Dm] [Am] [E7] [A#] [A7] / [Dm] [Am] [E7] [Am]\n> *En Venezuela: pozo o zanja llena de agua.\n> Instr\n[Am] [E7] [Am] (4)\nCantando con tu recuerdo, florece, mi corazón La brisa mañanera como yo te besa, Te besan las espigas como yo, mi amor\n\n> cantando-florece-mi corazón\nla brisa- de espigas\nte besa a\n> ti, mi amor\n[Am]\n[A7] [Dm] [G7] [C]\n/\n[Am] [E7] [Am]\nCuando no vienen tus besos hacia los míos\n\nLa palma entera se llena de soledad\n\nPor eso quisiera mi dulce amada Besarme contigo junto al palmar\n\n> besarte junto al jagüey - besarte junto al jagüey\nbesarte junto al jagüey -\n> besarte junto\n[Am] [E7] [Am] [A7]\n> al palmar\n/\n[Am] [A7] [Dm] [G7] [C]\nCuando no vienen tus besos hacia los míos\n\nEl agua toda se queda sin tu querer\n\n> Uh\n(solo)\nPor eso quisiera mi dulce amada, Besarme contigo junto al jagüey\n\n> besarte junto al jagüey - besarte junto al jagüey\nbesarte junto al jagüey – besarte___ junto al jagüey\n> (bis)\n1ª junto al jagüey\n[Dm] [Am] [E7] [Am]\nTiene la ternura para mi canción, por eso más, te quiero yo\n\n[G7]- [C] [G7] [C] (2)\nCantando con tu recuerdo, florece, mi corazón\nLa brisa mañanera como yo, te besa\nTe besan las espigas como yo, mi amor\n\n> Instr\n[C] [G7] [C] (2) [Am] [A7] [Dm] [G7] [C]\n[Am] [E7] [Am] [A7]\nCuando no vienen tus besos hacia los míos (solo)\n\n/\n> Uh\n(solo)\nLa palma entera se llena de soledad (solo)\n\nPor eso quisiera mi dulce amada Besarme contigo junto al palmar\n\n> besarte junto al jagüey - besarte junto al jagüey\nbesarte junto al jagüey -\n> besarte junto al palmar\n[Am] [A7] [Dm] [G7] [C]\n/\n[Am] [E7] [Am] [A7]\nCuando no vienen tus besos hacia los míos\n\n> Uh\n(solo)\nEl agua toda se queda sin tu querer\n\nPor eso quisiera mi dulce amada, Besarme contigo junto al jagüey\n\n> besarte junto al jagüey - besarte junto al jagüey\nbesarte junto al jagüey - besarte __ junto al jagüey\n[Dm] [Am] [E7] [Am] (2) [G7] [C] [G7] [Am]\nTiene la ternura para mi canción, por eso más, te quiero yo\n\n> junto al jagüey\n"
  },
  {
    "id": "knockin-on-heavens-door",
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
    ],
    "file": "canciones/knockin-on-heavens-door.md",
    "content": "---\ntitle: \"Knockin' on Heaven's Door\"\nartist: \"Bob Dylan\"\nkey: \"G\"\ncapo: 0\ntempo: 70\ntags: [\"rock\", \"folk\", \"70s\", \"classic\", \"fácil\", \"himno\"]\n---\n\n// La progresión de 4 acordes más famosa del mundo: G - D - Am / G - D - C\n\n## Intro\n[G] [D] [Am]\n[G] [D] [C]\n\n## Verso 1\n[G] Mama, take this [D] badge off of [Am] me\n[G] I can't [D] use it any[C]more\n[G] It's gettin' [D] dark, too dark to [Am] see\n[G] I feel I'm [D] knockin' on heaven's [C] door\n\n## Coro\n[G] Knock, knock, [D] knockin' on heaven's [Am] door\n[G] Knock, knock, [D] knockin' on heaven's [C] door\n[G] Knock, knock, [D] knockin' on heaven's [Am] door\n[G] Knock, knock, [D] knockin' on heaven's [C] door\n\n## Verso 2\n[G] Mama, put my [D] guns in the [Am] ground\n[G] I can't [D] shoot them any[C]more\n[G] That long black [D] cloud is comin' [Am] down\n[G] I feel I'm [D] knockin' on heaven's [C] door\n\n## Coro\n[G] Knock, knock, [D] knockin' on heaven's [Am] door\n[G] Knock, knock, [D] knockin' on heaven's [C] door\n[G] Knock, knock, [D] knockin' on heaven's [Am] door\n[G] Knock, knock, [D] knockin' on heaven's [C] door... [G]\n"
  },
  {
    "id": "la-bachata",
    "title": "La bachata",
    "artist": "Manuel Turizo",
    "key": "C",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "bachata",
      "pop latino",
      "2020s"
    ],
    "file": "canciones/la-bachata.md",
    "content": "---\ntitle: \"La bachata\"\nartist: \"Manuel Turizo\"\nkey: \"C\"\ncapo: 0\ntempo: 100\ntags: [\"bachata\", \"pop latino\", \"2020s\"]\n---\n\n## Intro\n[C] [D] [G] [Em] (2) [C] [D] [G]\n\nTe bloqueé de Insta\nPero por otra cuenta veo tus historias (oh…)\nTu número lo borré\nNo sé pa qué si me lo sé de memoria\nMe hiciste dañ, y así te extraño\nY aunque sé que un día te voy a olvidar\nAún no lo hago\nEs complicado\nTodo lo que hicimos, me gusta recordar\n\n[C] [D] [Em] [Bm] (2)\nAndo manejando\nPor las calles que me besaste\nOyendo las canciones\nQue un día me dedicaste\nTe diría que volvieras\nPero eso no se pide\nMejor le pido a Dios\nQue me cuide (porque…)\n\n[C] [D] [G] [Em] (2) [C] [D] [G]\nQue me cuide de otra que se parezca a ti\nNo quiero caer como hice por ti\nOjalá te enamores\nTe hagan lo mismo que me hiciste a mí\nTú me enseñaste a no amar a cualquiera\nY también como no quiero que me quieran\nNo, éramos tres en una relación de dos\nNo te perdono, pídele perdón a Dios\nDije que te olvidé y la verdad es que yo, yo\n\n[C] [D] [Em] [Bm] (2)\nAndo manejando\nPor las calles que me besaste\nOyendo las canciones\nQue un día me dedicaste\nTe diría que volvieras\nPero eso no se pide\nMejor le pido a Dios\nQue me cuide (porque…)\n\nHoy ya no vuelan mariposas\n"
  },
  {
    "id": "la-bamba-twist-and-shout",
    "title": "La Bamba / Twist and Shout",
    "artist": "The Beatles",
    "key": "C",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rock and roll",
      "classic",
      "60s",
      "inglés"
    ],
    "file": "canciones/la-bamba-twist-and-shout.md",
    "content": "---\ntitle: \"La Bamba / Twist and Shout\"\nartist: \"The Beatles\"\nkey: \"C\"\ncapo: 0\ntempo: 100\ntags: [\"rock and roll\", \"classic\", \"60s\", \"inglés\"]\n---\n\n## Intro\n[C] [F] [G]\n\n## Verso 1\nPara bailar la bamba (2) Se necesita una poca de gracia.\nUna poca de gracia pa mí y pa ti. Ay arriba y arriba.\nAy arriba y arriba, por ti seré, por ti seré, por ti seré\nYo no soy marinero. Yo no soy marinero\nSoy capitán Soy capitán. Soy capitán\nBamba bamba (3)\n\nPara subir al cielo (2) Se necesita una escalera grande.\nUna escalera grande y otra chiquita. Ay arriba y arriba.\nAy arriba y arriba, por ti seré, por ti seré, por ti seré\nBamba bamba (3)\n\nWell, shake it up, baby, now    (Shake it up, baby)\nTwist and shout             (Twist and shout)\nCome on (4), baby, now         (Come on, baby)\nCome on and work it on out    (Work it on out)\nWell, work it on out, honey        (Work it on out)\nYou know you look so good     (Look so good)\nYou know you got me goin' now.    (Got me goin')\nJust like I knew you would        (Like I knew you would)\n\nWell, shake it up, baby, now    (Shake it up, baby)\nTwist and shout             (Twist and shout)\nCome on (4), baby, now         (Come on, baby)\nCome on and work it on out    (Work it on out)\nYou know you twist, little girl.     (Twist, little girl)\nYou know you twist so fine        (Twist so fine)\nCome on and twist a little closer now    (Twist a little closer)\nAnd let me know that you're mine     (Let me know you're mine)\n\nBam-ba-bamba (3) oh!\n\nhttps://www.youtube.com/watch?v=9zRIHqlycss\nhttps://www.youtube.com/watch?v=Jp6j5HJ-Cok\n[A] [D] [E]\n"
  },
  {
    "id": "la-bamba",
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
    ],
    "file": "canciones/la-bamba.md",
    "content": "---\ntitle: \"La Bamba\"\nartist: \"Ritchie Valens\"\nkey: \"C\"\ncapo: 0\ntempo: 150\ntags: [\"rock\", \"latino\", \"clásico\", \"fácil\"]\n---\n\n// La progresión clásica de 3 acordes por excelencia: C - F - G\n\n## Intro\n[C] [F] [G]\n[C] [F] [G]\n[C] [F] [G]\n\n## Verso 1\n[C] Para bailar la [F] bamba [G]\nPara bailar la [C] bamba se nece[F]sita una poca de [G] gracia\nUna poca de [C] gracia pa' mí, pa' [F] ti, y arriba y ar[G]riba\nY arriba y ar[C]riba, por ti se[F]ré, por ti se[G]ré, por ti se[C]ré [F] [G]\n\n## Coro\n[C] Yo no soy mari[F]nero [G]\nYo no soy mari[C]nero, soy capi[F]tán\nSoy capi[G]tán, soy capi[C]tán [F]\nBamba, [G] bamba\n[C] Bamba, [F] bamba\n[G] Bamba, [C] bamba [F] [G]\n\n## Verso 2\n[C] Para bailar la [F] bamba [G]\nPara bailar la [C] bamba se nece[F]sita una poca de [G] gracia\nUna poca de [C] gracia pa' mí, pa' [F] ti, y arriba y ar[G]riba\n\n## Coro\n[C] Yo no soy mari[F]nero [G]\nYo no soy mari[C]nero, soy capi[F]tán\nSoy capi[G]tán, soy capi[C]tán [F]\nBamba, [G] bamba\n[C] Bamba, [F] bamba\n[G] Bamba, [C] bamba [F] [G] [C]\n"
  },
  {
    "id": "la-bien-paga",
    "title": "La bien pagá",
    "artist": "Miguel de Molina",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "copla",
      "clásico",
      "español"
    ],
    "file": "canciones/la-bien-paga.md",
    "content": "---\ntitle: \"La bien pagá\"\nartist: \"Miguel de Molina\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"copla\", \"clásico\", \"español\"]\n---\n\n## Intro\n[Am] [E7] [Am]/ [Am] [Dm] [E7] [Am]/ [E7] [Am]\n\nNa’ te debo, na’ te pido,\nMe voy de tu vera, olvídame ya\nQue he pagao con oro tus carnes morenas,\nNo maldigas paya, que estamos en paz\n- No te quiero, no me quieras,\nSi to’ me lo diste, yo na’ te pedí\nNo me eches en cara que to’ lo perdiste,\nTambién a tu vera yo to’ lo perdí\n\n[Am] [E7] [Am]/ [Dm] [Am] [E7] [Am]\nBien paga, si tú eres la bien pagá\nPorque tus besos compré,\nY a mí te supiste dar\nPor un puñado de parné,\nBien pagá, bien pagá,\nBien pagá fuiste mujer\n\nNo te engaño, quiero a otra,\nNo creas por eso que te traicioné.\nNo cayó en mis brazos,\nMe dio solo un beso,\nEl único beso que yo no pagué.\n-Na te pío, na me llevo,\nEntre estas paredes dejo sepultá\nPenas y alegrías que te he dao y me diste\nY esas joyas que ahora pa’ otro lucirás.\n\nBien paga, si tú eres la bien pagá\nPorque tus besos compré,\nY a mí te supiste dar\nPor un puñado de parné,\nBien pagá, bien pagá,\nBien pagá fuiste mujer.\n\n,\nPorque te quiero mi\n\nvía\n\n,\nComo nadie te ha\n\nquerío\n\n¡Ay Rocío, ay mi Rocío!\n"
  },
  {
    "id": "la-bombona-de-butano",
    "title": "La bombona de butano",
    "artist": "Popular",
    "key": "E",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rumba",
      "popular",
      "humor"
    ],
    "file": "canciones/la-bombona-de-butano.md",
    "content": "---\ntitle: \"La bombona de butano\"\nartist: \"Popular\"\nkey: \"E\"\ncapo: 0\ntempo: 100\ntags: [\"rumba\", \"popular\", \"humor\"]\n---\n\n## Verso 1\nSi me aconvenzo, si me aconvenzo\nDame tu ausenci que sabe a beso, naina...\n\n[E] [F] [E] (2) [Am] [G] [F] [E]\nAy métela (3) muy rápidamente\nLa bombona de butano,\nQue necesito agüita caliente.\n\n[E] [B7] [E]\n[E7] [A] [E] [B7] [E]\nAy dígame usted señora,\nDonde quiere que se la meta,\nDebajo de la escalera\nO bien detrás de la puerta.\n"
  },
  {
    "id": "la-casa-por-el-tejado",
    "title": "La casa por el tejado",
    "artist": "Fito & Fitipaldis",
    "key": "Em7",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rock",
      "español",
      "2000s"
    ],
    "file": "canciones/la-casa-por-el-tejado.md",
    "content": "---\ntitle: \"La casa por el tejado\"\nartist: \"Fito & Fitipaldis\"\nkey: \"Em7\"\ncapo: 0\ntempo: 100\ntags: [\"rock\", \"español\", \"2000s\"]\n---\n\n## Intro\n[Em7] [D] [Em7] [D] [Em7]\n\nAhora sí, parece que ya empiezo a entender las cosas importantes aquí\n\n[D]\n[Em7] [D]\nSon las que están detrás de la piel,\n\n[Em7] [D] [Am7] [Em7]\nY todo lo demás empieza donde acaban mis pies.\n\n[D] [Am7] [Em7] [D] [Am7] [Em7]\nDespués de mucho tiempo aprendí, que hay cosas que mejor no aprender.\n\n[Am] [G] [D] [C] [G] [D]\nEl colegio poco me enseñó, si es por esos libros, nunca aprendo:\n\n[Em] [D] [C] [Em] [D] [C]\n-A coger el cielo con las manos, a reír y a llorar lo que te canto,\n\n[Em] [D] [C] [Em] [D] [C]\nA coser mi alma rota, a perder el miedo, a quedar como un idiota\n\n[Em] [C] [G] [D]\n-Y a empezar la casa por el tejado\n\n[Em] [C] [G] [D]\nA poder dormir cuando tú no estás a mi lado,\n\n[Em] [C] [G] [D] [Em] [C] [G] [D]\nMenos mal que fui un poco granuja, todo lo que sé me lo enseñó una bruja\n\n[Em7] [D] [Am7] [Em7]\nRuinas ¿no ves que por dentro estoy en ruinas?\n\n[D] [Am7] [Em7] [D] [Am7] [Em7]\nMi cigarro va quemando el tiempo, tiempo que se convirtió en cenizas\n\n-Raro, ¡no digo diferente digo raro\n\n[D] [Am7] [Em7]\n[D] [Am7] [Em7] [D] [Am7] [Em7] -[D]\nYa, no sé si el mundo está al revés o soy yo el que está cabeza abajo.\n\n[Am] [G] [D] [C] [G] [D]\nEl colegio poco me enseñó, si es por el maestro, nunca aprendo:\n\n[Em] [D] [C] [Em] [D] [C]\n-A coger el cielo con las manos, a reír y a llorar lo que te canto,\n\n[Em] [D] [C] [Em] [D] [C]\nA coser mi alma rota, a perder el miedo, a quedar como un idiota\n\n[Em] [C] [G] [D]\n-Y a empezar la casa por el tejado\n\n[Em] [C] [G] [D]\nA poder dormir cuando tú no estás a mi lado,\n\n[Em] [C] [G] [D] [Em] [C] [G] [D]\nMenos mal que fui un poco granuja, todo lo que sé me lo enseñó una bruja\n"
  },
  {
    "id": "la-chica-de-ayer",
    "title": "La Chica de Ayer",
    "artist": "Nacha Pop",
    "key": "G",
    "capo": 0,
    "tempo": 125,
    "tags": [
      "movida",
      "pop",
      "español",
      "80s"
    ],
    "file": "canciones/la-chica-de-ayer.md",
    "content": "---\ntitle: \"La Chica de Ayer\"\nartist: \"Nacha Pop\"\nkey: \"G\"\ncapo: 0\ntempo: 125\ntags: [\"movida\", \"pop\", \"español\", \"80s\"]\n---\n\n## Intro\n[G] [D] [C] (x2)\n\n## Verso 1\n[Bm] Un día cualquiera no [Am] sabes qué hora [G] es,\n[Am] Te acuestas a mi [D] lado sin saber por [C] qué.\n[Bm] Las calles mojadas te [Am] han visto cre[G]cer,\n[Am] Y tú en tu corazón es[D]tás llorando otra [C] vez.\n\n## Coro\n[G] Me asomo a la ven[D]tana y eres la [C] chica de ayer,\n[G] Jugando con las [D] flores de mi jar[C]dín.\n[D] Demasiado [C] tarde para com[G]prender,\n[D] Chica, vete a tu [C] casa, hoy no podemos ju[G]gar.\n\n## Verso 2\n[Bm] La luz de la mañana [Am] entra en mi habita[G]ción,\n[Am] Tus cabellos do[D]rados parecen el [C] sol.\n[Bm] Y luego por la noche [Am] \"al Penta\" a escu[G]char\n[Am] Canciones que consiguen [D] que te pueda a[C]mar.\n\n## Coro\n[G] Me asomo a la ven[D]tana y eres la [C] chica de ayer,\n[D] Demasiado [C] tarde para com[G]prender.\n\n## Outro\n[D] Mi cabeza da [C] vueltas persiguién[G]dote,\n[D] Mi cabeza da [C] vueltas persiguién[G]dote,\n[D] Mi cabeza da [C] vueltas persiguién[G]dote... [G]\n"
  },
  {
    "id": "la-colegiala",
    "title": "La colegiala",
    "artist": "Rodolfo Aicardi",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "cumbia",
      "latino",
      "bailable"
    ],
    "file": "canciones/la-colegiala.md",
    "content": "---\ntitle: \"La colegiala\"\nartist: \"Rodolfo Aicardi\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"cumbia\", \"latino\", \"bailable\"]\n---\n\n## Intro\n[Am] [G]\n\nHoy te he visto, con tus libros caminando\nY tu carita de coqueta, colegiala de mi amor\nTu sonríes sin pensar que al mirarte\nSolo por ti estoy sufriendo, colegiala de mi amor\n\nColegiala, colegiala, colegiala, linda colegiala\nColegiala no seas tan coqueta,\nColegiala ven dime que sí (bis).\n\n[G] [Am]\nMoliendo café\n\n[Am] [Dm] [G7] [C]/ [F]-[E7]-[Am] (2)\nCuando la tarde languidece, renacen las sombras\nY en la quietud de los cafetales vuelve a sentir\nEs la triste canción de amor de la vieja molienda\nQue en el letargo de la noche parece decir. (BIS)\n"
  },
  {
    "id": "la-flaca",
    "title": "La Flaca",
    "artist": "Jarabe de Palo",
    "key": "Am",
    "capo": 0,
    "tempo": 104,
    "tags": [
      "rock",
      "latino",
      "español",
      "90s"
    ],
    "file": "canciones/la-flaca.md",
    "content": "---\ntitle: \"La Flaca\"\nartist: \"Jarabe de Palo\"\nkey: \"Am\"\ncapo: 0\ntempo: 104\ntags: [\"rock\", \"latino\", \"español\", \"90s\"]\n---\n\n## Intro\n[Am] [E] [D] [C] [E] [Am]\n\n## Verso 1\n[Am] En la vida cono[E]cí mujer igual a la [D] flaca,\nCoral [C] negro de La Ha[E]bana, tremendísima mu[Am]lata.\nCien libras de piel y [E] hueso, cuarenta kilos de [D] salsa,\nY en la [C] cara dos [F] soles [F#] que [G] sin palabras [Am] hablan... [E]\nQue sin palabras [Am] hablan. [E]\n\n## Verso 2\nLa flaca [Am] duerme de [E] día, dice que así el hambre en[D]gaña,\nCuando [C] cae la noche [E] baja a bailar a la [Am] tasca.\nY bailar y bailar y to[E]mar y tomar\nUna cer[C]veza tras [F] otra, [F#] pero [G] ella nunca en[Am]gorda... [D7]\nPero ella nunca en[F]gorda. [G] [Am]\n\n## Coro\nPor un [F] beso de la [G] flaca daría lo que [Am] fuera,\nPor un [D] beso de ella [F] aunque sólo uno fuera.\nPor un [G] beso de la flaca daría lo que [Am] fuera,\nPor un [D] beso de ella [F] aunque [F#] sólo [G] uno [Am] fuera... [E]\nAunque sólo uno [Am] fuera. [E]\n\n## Verso 3\nMo[Am]jé mis sábanas [E] blancas, como dice la can[D]ción,\nRecor[C]dando las ca[E]ricias que me brindó el primer [Am] día.\nY enloquezco de [E] ganas de dormir a su la[D]dito,\nPorque, [C] Dios, que esta [F] flaca [F#] a [G] mí me tiene lo[Am]quito... [D7]\nA mí me tiene lo[F]quito. [G] [Am]\n\n## Coro Final\nPor un [F] beso de la [G] flaca yo daría lo que [Am] fuera,\nPor un [D7] beso de ella [F] aunque sólo uno fuera.\nPor un [G] beso de la flaca yo daría lo que [Am] fuera,\nPor un [D7] beso de ella [F] aunque [F#] sólo [G] uno [Am] fuera... [Am]\n"
  },
  {
    "id": "la-flor-de-la-canela",
    "title": "La flor de la canela",
    "artist": "Chabuca Granda",
    "key": "D",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "vals peruano",
      "clásico",
      "latino"
    ],
    "file": "canciones/la-flor-de-la-canela.md",
    "content": "---\ntitle: \"La flor de la canela\"\nartist: \"Chabuca Granda\"\nkey: \"D\"\ncapo: 0\ntempo: 100\ntags: [\"vals peruano\", \"clásico\", \"latino\"]\n---\n\n## Intro\n[D] -7 [G] [G7] [C] [E7] [A] [C] [E7] [Am]\n\n[E7] [Am] [A7] [Dm] [G7] [C] [E7] [Am] (2)\nDéjame que te cuente limeña\n\n,\nAy, déjame que te diga la gloria\nDel ensueño que evoca la memoria\nDel viejo puente del río y la Alameda.\n-Déjame que te cuente limeña\n\n[*]\n,\nAhora que aún perdura el recuerdo,\nAhora que aun se mece en un sueño\nEl viejo puente, el río y la alameda.\n\n[*]\n[G7] [C](3) [A7] [Dm] [G7] [C](2)\nJazmines en el pelo y rosas en la cara,\nAirosa caminaba la Flor de la canela,\nDerramaba lisura y a su paso dejaba\nAromas de mixtura que en el pecho llevaba.\n- Del puente a la Alameda,\nMenudo pie la lleva\nPor la vereda que se estremece\nAl ritmo de su cadera\nRecogía la risa de la brisa del río,\nY al viento la lanzaba\nDel puente a la Alameda.\n\nDéjame que te cuente limeña\n\n[E7] [Am] (10) [G7]\n¡Ay! Deja que te diga morena,\nMi pensamiento\n-A ver si así despiertas del sueño,\nDel sueño que entretiene, morena\n\n[*]\n[*]\n,\nTu sentimiento.\nAspira de la lisura que da la flor de canela,\nAdórnala con jazmines,\nMatizando su hermosura,\nAlfombra de nuevo el puente\nY engalana la alameda\nQue_el río acompasará, su paso, por la vereda.\nY recuerda que...\n\n[G7] [C]\n"
  },
  {
    "id": "la-fruta-fresca",
    "title": "La fruta fresca",
    "artist": "Carlos Vives",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "vallenato",
      "pop",
      "colombiano"
    ],
    "file": "canciones/la-fruta-fresca.md",
    "content": "---\ntitle: \"La fruta fresca\"\nartist: \"Carlos Vives\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"vallenato\", \"pop\", \"colombiano\"]\n---\n\n## Intro\n[Am] [Dm] [E] [Am] (3)\n\nEse beso de tu boca que me sabe a fruta fresca\nQue se escapó de tus labios y se metió en mi cabeza\nEse beso con que sueño, cuando, las penas me acechan\nQue me lleva al mismo cielo y a la tierra me regresa\nY que reza, reza, que reza, y aunque ya no tenga cura\nEl recuerdo de sus besos, me lleve hasta la locura\n\nSí, sí, sí, que este amor es tan profundo\nQue tú eres mi consentida, y que lo sepa todo el mundo (BIS)\n\nQue tú eres mi consentida, la niñita de mis ojos\nLa que me endulza la vida, la que calma mis enojos\nLa que se pone más linda, cuando la llevo a una fiesta\nEsa que siempre en mi cama, con los ángeles se acuesta\n\nSí, sí, sí, que este amor es tan profundo…\n\nY que digan en la radio, que yo te quiero de veras\nQue lo digan en los diarios y después de la novela\nY en un letrero que diga que como tú no hay ninguna\nQue lo digan en la China, que digan en la luna\n\nSí, sí, sí, que este amor es tan profundo…\n\nGuararé (7) No me olvides que yo no te olvidaré\n\nSí, sí, sí, que este amor es tan profundo…\n"
  },
  {
    "id": "la-fuerza-del-destino",
    "title": "La fuerza del destino",
    "artist": "Mecano",
    "key": "F",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop",
      "balada",
      "80s"
    ],
    "file": "canciones/la-fuerza-del-destino.md",
    "content": "---\ntitle: \"La fuerza del destino\"\nartist: \"Mecano\"\nkey: \"F\"\ncapo: 0\ntempo: 100\ntags: [\"pop\", \"balada\", \"80s\"]\n---\n\n## Verso 1\nUh, uh, uh...\n\n[F] [G] [Em] [Am] (4)\n-Nos vimos tres o cuatro veces,\nPor toda la ciudad,\nUna noche en el Bar del oro,\nMe decidí a atacar,\nTú me dijiste 19, no quise desconfiar,\nPero es que ni mucho ni poco,\nNo vi de donde agarrar.\n\n[Bb][__][Gm]-[Dm] [Am] [Bb] -[C]\nY nos metimos en el coche\nMi amigo, tu amiga, tú y yo\nTe dije nena dame un beso\nY tú contestaste que no\nEmpezamos mal y yo que creía que\nEste era un buen plan\n\n[F] [G] [Em] [Am] (4)\n-Aquella noche fue un desastre,\nNo me comí un colín,\nEstas son sólo un par de estrechas,\nNos fuimos a dormir\nPero la fuerza del destino nos hizo repetir,\nDos cines y un par de conciertos,\nEmpezamos a salir.\n\n[A#][__][Gm]-[Dm] [Am] [Bb] -[C]\n-No se si esa cara tan rara\nUn ojo aquí y un diente allá,\nO el cuerpecillo de gitana,\nMujer a medio terminar\nTu corazón fue lo que me acabó de enamorar.\n\nY desde entonces hasta ahora,\nEl juego del amor,\nNos tuvo tres años jugando, luego nos separó.\nPero la fuerza del destino, nos hizo repetir,\nQue si el invierno viene frío,\nQuiero estar junto a ti\n\nY nos metimos en el coche …\n"
  },
  {
    "id": "la-gota-fria",
    "title": "La gota fría",
    "artist": "Carlos Vives",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "vallenato",
      "colombiano",
      "pop"
    ],
    "file": "canciones/la-gota-fria.md",
    "content": "---\ntitle: \"La gota fría\"\nartist: \"Carlos Vives\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"vallenato\", \"colombiano\", \"pop\"]\n---\n\n## Intro\n[Am] [E] [Am] (3[)/] [C] [G] [C] (2) [Am] [E] [Am] (2)\n\nAcordate Moralito de aquel día que estuviste en Urumita y no quisiste hacer parranda,\nTe fuiste de mañanita, sería de la misma rabia (2)\n-En mis notas soy extenso, a mí nadie me corrige (2)\nPara tocar con Lorenzo, mañana sábado día la Virgen (2)\n\n[Am] [E] [Am] (4)\nMe lleva él o me lo llevo yo, pa que se acabe la vaina (2)\nAy Morales a mí no me lleva porque no me da la gana\nMoralito a mí no me lleva, porque no me da la gana\n\nQué cultura, qué cultura va a tener un indio chumeca como Lorenzo Morales\nQue cultura va a tener (si nació en los Cardonales) (2)\n-Morales miente a mi mama solamente pa ofender (2)\nPara que también se ofenda, ahora le miento la de él (2)\n\nMe lleva él o me lo llevo yo, pa que se acabe la vaina\n\nMoralito, Moralito se creía, que él a mí, que él a mí me iba a ganar\nY cuando me oyó tocar, le cayó la gota fría (2)\nY al cabo en la compartida, el tiro le salió mal (2)\n\nBésame mucho\n"
  },
  {
    "id": "la-mitad",
    "title": "La mitad",
    "artist": "Christian Nodal",
    "key": "G",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "regional mexicano",
      "balada",
      "latino"
    ],
    "file": "canciones/la-mitad.md",
    "content": "---\ntitle: \"La mitad\"\nartist: \"Christian Nodal\"\nkey: \"G\"\ncapo: 0\ntempo: 100\ntags: [\"regional mexicano\", \"balada\", \"latino\"]\n---\n\n## Verso 1\nY el triple de los besos que te di.\n\n[Intro:] [G] [D7] [G]\n(\n\nChristian Nodal)\n\n[C] [D7]\nY aunque te den, 21 rosas al día\n\nSi por cosas del destino\n\n[B7] [Em] [E7]\n[G] [D]/[BmajoFA#] [Em]\nUn día, tú y yo nos despedimos\n\nY mil veces digan que mueren por ti\n\nAy_yo no sé qué comería,\n\n[Am]\n[Am]\nO de qué me reiría,\n\n[C]\nAy, si te dan todo eso\n\nMe quito el sombrero\n\n[D7]\n[Am] [C]\nPorque el mundo sin ti_\n\n[Am] [D7]\nPero nadie va a quererte la mitad\n\n[D7]\nNo me lo imagino.\n\n[G] [D7]\nDe lo que yo a ti te quiero.\n\n[G]\n-Si por cosas de la vida,\n\n[G] [B7] [Em] [E7] [Am] [C] [Am] [D7] [Am]\n[B7]\nLlega el hombre\n\nNo te preocupes por mí,\n\n[Em] [E7]\nQue por fin te merecías,\n\n[B7]\nYo me las arreglaría\n\nY si él es tu alma gemela\n\n[Am]\n[Em] [Em]/[D#]\nPa cambiarme de cabeza\n\n[C]\nYo me quito, aunque me duela\n\nPa otra que no sea la mía\n\n[Em]/[D] [Em]/[C#]\n[Am] [C] [D7]\nY hasta dos o tres consejos le daría.\n\nY no pensar en ti, ya no pensar en ti.\n\n[Am] [D7] [D7]/[F#]\n[C] [D7]\nY aunque te den, el doble de caricias\n\n[Am]\nY el triple de los besos que te di.\n\n[G] [D]/[BmajoFA#] [Em]\nNo te preocupes por mí,\n\n[C] [D7]\nY aunque te den, 21 rosas al día\n\n[B7]\nYo me las arreglaría\n\n[Em] [Em]/[D#]\nPa cambiarme de cabeza\n\n[G] [D]/[BmajoFA#] [Em]\n[Em]/[D] [Em]/[C#]\nPa otra que no sea la mía\n\nY mil veces digan que mueren por ti\n\nY no pensar en ti, ya no pensar en ti.\n\n[Am] [D7] [D7]/[F#]\nAy, si te dan todo eso\n\n[Am]\n[D7]\nMe quito el sombrero\n\n[Am] [D7]\nPero nadie va a quererte la mitad\n\n[C.] [D7]\nY aunque te den, el doble de caricias\n\n[G] [Bm] [F#m] [Am]\n[G] [D]/[BmajoFA#] [Em]\nDe lo que yo a ti te quieroooo\n\n[G] [Bm] [F#m] [Am]\nDe lo que yo a ti te quieroooo\n\n[D]-[Cm]-[G]\nDe lo que yo a ti\n\n<\n\nte quieroooo\n"
  },
  {
    "id": "la-mujer-de-verde",
    "title": "La Mujer de Verde",
    "artist": "Izal",
    "key": "G",
    "capo": 0,
    "tempo": 120,
    "tags": [
      "indie",
      "rock",
      "español",
      "2010s"
    ],
    "file": "canciones/la-mujer-de-verde.md",
    "content": "---\ntitle: \"La Mujer de Verde\"\nartist: \"Izal\"\nkey: \"G\"\ncapo: 0\ntempo: 120\ntags: [\"indie\", \"rock\", \"español\", \"2010s\"]\n---\n\n## Intro\n[G] [C] [G] [C]\n\n## Verso 1\n[G] La respuesta siempre será así, no hay alternativa,\n[C] Si la hubiera no me gustaría.\n[G] Mira la ciudad por la ventana de la cafetería\n[C] Y me dice que sonría.\n[Em] Sé que ella quisiera regalar sus superpo[D]deres,\nIgualarse a los de[C]más.\n\n## Coro\nLa mujer de [G] verde se ha vuelto a poner el traje para resca[C]tarme.\n¿Qué sucederá cuando las [Em] balas no reboten\nY los [D] malos sean más fuertes\nY vo[C]lar no sea tan fácil\nY conozcan nuestros planes?\n\n## Puente\n[G] Dame una señal, yo buscaré un disfraz de carna[C]val,\nEncontraremos algo en el des[Em]ván, [D]\nPrometo no estor[C]bar.\n\n## Coro\nLa mujer de [G] verde se ha vuelto a poner el traje para resca[C]tarme.\n¿Qué sucederá cuando las [Em] balas no reboten\nY los [D] malos sean más fuertes\nY vo[C]lar no sea tan fácil\nY conozcan nuestros planes?\n\n## Outro\n[G] Dame una señal, yo buscaré un disfraz de carna[C]val,\nEncontraremos algo en el des[Em]ván, [D]\nPrometo no estor[C]bar.\n[G] Dame una señal, yo buscaré un disfraz de carna[C]val,\nEncontraremos algo en el des[Em]ván, [D]\nPrometo no estor[C]bar... [G]\n"
  },
  {
    "id": "la-muralla",
    "title": "La muralla",
    "artist": "Quilapayún",
    "key": "Em",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "canción protesta",
      "nueva canción",
      "chileno"
    ],
    "file": "canciones/la-muralla.md",
    "content": "---\ntitle: \"La muralla\"\nartist: \"Quilapayún\"\nkey: \"Em\"\ncapo: 0\ntempo: 100\ntags: [\"canción protesta\", \"nueva canción\", \"chileno\"]\n---\n\n## Intro\n[Intro:] [Em] [Am] [B7] [Em] (2) [D7] [G] [D7] / [Em] [C] [B7] (3) [Em] [D7]\n\nPara hacer esta muralla:\nTráiganme todas las manos (2)\nLos negros sus manos negras,\nLos blancos sus blancas manos.\nUna muralla que vaya:\nDesde la playa hasta el monte (2)\nDesde el monte hasta la playa,\nAllá sobre el horizonte.\n\n[G] [C] [D7]\n-¡Tun, tun! -¿Quién es?\n\n-Una rosa y un clavel...\n\n-¡Abre la muralla!\n-¡Tun, tun! -¿Quién es?\n\n-El sable del coronel...\n\n-¡Cierra la muralla!\n-¡Tun, tun! -¿Quién es?\n\n-La paloma y el laurel...\n\n-¡Abre la muralla!\n-¡Tun, tun! -¿Quién es?\n\n-El gusano y el ciempiés..\n.\n\n-¡Cierra la muralla!\n-¡Tun, tun! -¿Quién es?\n-\n\nabre la mura…;\n\nAl corazón del amigo:\n\nAl veneno y al puñal\n\n: cierra la mura…;\n\nAl mirto y la yerbabuena\n\n:\n\nA\n\nbre la mura…;\n\n:\nCierra la mura…;\n\nAl diente de la serpiente\n\nAl corazón del amigo\n\nAl ruiseñor en la flor\n\nEn el campo\n"
  },
  {
    "id": "la-puerta-de-toledo",
    "title": "La puerta de Toledo",
    "artist": "Chiquetete",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "flamenco",
      "canción",
      "español"
    ],
    "file": "canciones/la-puerta-de-toledo.md",
    "content": "---\ntitle: \"La puerta de Toledo\"\nartist: \"Chiquetete\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"flamenco\", \"canción\", \"español\"]\n---\n\n## Intro\n[E] &nbsp;&nbsp;&nbsp; [Am] &nbsp;&nbsp;&nbsp; [Em] &nbsp;&nbsp;&nbsp; [Am] &nbsp;&nbsp;&nbsp; [Am7] &nbsp;&nbsp;&nbsp; [Dm] &nbsp;&nbsp;&nbsp; [Em7] &nbsp;&nbsp;&nbsp; [Dm] &nbsp;&nbsp;&nbsp; [Em7] &nbsp;&nbsp;&nbsp; [Am]\n\n## Verso 1\nA la puerta de Toledo, mare, le tengo celos.\nLe tengo celos.\nA la puerta de Toledo, mare, le tengo celos (2)\nLe tengo celos.\nPorque se cita con otro la mujer que yo más quiero (2)\n\n## Estribillo\n[Am] &nbsp;&nbsp;&nbsp; [Dm] &nbsp;&nbsp;&nbsp; [G7] &nbsp;&nbsp;&nbsp; [C] &nbsp;&nbsp;&nbsp; [E7] &nbsp;&nbsp;&nbsp; [Am]\n\nEn el mismo sitio, a la misma hora,\nA la misma hora estaba durmiendo\nCon otra persona\n\nMe decía que iba misa, mare, y me engañaba.\nY me engañaba.\nMe decía que iba misa, mare, y me engañaba (2)\nY me engañaba.\nSi no llevaba rosario ni libro ¿cómo rezaba? (2)\n\nEn el mismo sitio, a la misma hora,\nA la misma hora estaba rezando con otra persona\n\nLa noche de la tormenta, mare, ¡cómo llovía!,\n¡Cómo llovía!,\nLa noche de la tormenta, mare, ¡cómo llovía!, (2)\n¡Cómo llovía!\n¿Con que paraguas, mare, se taparía? (2)\n\nEn el mismo sitio, a la misma hora,\nA la misma hora se estaba secando\nCon otra persona\n\nEn este mundo se pagan, mare, todas las cosas.\nTodas las cosas.\nEn este mundo se pagan, mare, todas las cosas (2)\nTodas las cosas.\nTambién se secan las flores, mare, que son hermosas (2)\n\nEn el mismo sitio, a la misma hora, a la misma hora,\ndicen que había muerto, pobre, enferma y sola.\n"
  },
  {
    "id": "la-raja-de-tu-falda",
    "title": "La Raja de Tu Falda",
    "artist": "Estopa",
    "key": "Am",
    "capo": 0,
    "tempo": 130,
    "tags": [
      "rumba",
      "rock",
      "español",
      "90s"
    ],
    "file": "canciones/la-raja-de-tu-falda.md",
    "content": "---\ntitle: \"La Raja de Tu Falda\"\nartist: \"Estopa\"\nkey: \"Am\"\ncapo: 0\ntempo: 130\ntags: [\"rumba\", \"rock\", \"español\", \"90s\"]\n---\n\n## Intro\n[Am] [E7] [Am] [E7]\n\n## Verso 1\n[Am] Era una tarde tonta y caliente de esas que te queman el [E7] sol la frente,\nY era el verano del 97 y yo me moría por [Am] verte.\n[G] Mi única i[Am]dea era came[G]larte, era lle[Am]varte a cualquier parte,\n[G] Yo ese día to[Am]caba en el bar sin nombre y al[E7]lí esperaba encon[Am]trarte.\n\n[Am] Me puse un pantaloncito estrecho, la camiseta de los con[E7]ciertos,\nVamos Josele, tira pal coche porque esta noche nos la co[Am]memos.\n[G] Y al pasar por tu [Am] calle allí estabas tú esperando en la pa[G]rada del auto[Am]bús,\nComiéndote con gracia aquel chupa-chup, ¡qué [E7] vicio, qué vicio!\n[Am] No sé qué me dio por la espalda cuando vi la raja de [G] tu falda,\nQue un Seat [Am] Panda se me cruzó y se comió el parachoques de mi [E7] Ford Es[Am]cort.\n\n## Coro\n[Am] Por la raja de tu [G] falda yo tuve un pi[F]ñazo con un Seat [E7] Panda,\n[Dm] Por la raja de tu [Am] falda yo tuve un pi[E7]ñazo con un Seat [Am] Panda.\n\n## Verso 2\n[Am] 10:40 post meridiem, llegamos tarde para no va[E7]riar,\nY el del garito está mosqueao porque aún no hay nada mon[Am]tao.\n[G] Y la gente [Am] entra que te entra y [G] yo enchufa [Am] que te enchufa,\n[G] Mi hermano [Am] prueba que te prueba y esto se [E7] escucha o no se es[Am]cucha.\n[Am] El calor de la gente, alma del ambiente, los focos deslumbrantes son [G] muy po[Am]tentes,\nEl público delante muy expectante, caliente, ca[E7]liente...\n[Am] De repente se abrió la puerta cuando yo cogía la gui[G]tarra,\nY me tem[Am]blaron las piernas al ver de nuevo la raja de [E7] tu [Am] falda.\n\n## Coro\n[Am] Por la raja de tu [G] falda yo rompí tres [F] cuerdas de esta gui[E7]tarra,\n[Dm] Por la raja de tu [Am] falda yo rompí tres [E7] cuerdas de esta gui[Am]tarra.\n\n## Outro\n[Am] Y ahora ya ha pasado el tiempo, parece que fuera ayer desde que desapa[E7]reciste del concierto,\nYo no te he vuelto a ver, ya no recuerdo tu [Am] cara ni siquiera tu mirada,\nTan [F] sólo puedo a[Dm]cordarme de la [Am] raja de [E7] tu [Am] falda.\n[Am] Por la raja de tu [G] falda yo me he obse[F]sionao y voy de barra en [E7] barra... [Am]\n"
  },
  {
    "id": "la-saeta",
    "title": "La saeta",
    "artist": "Joan Manuel Serrat",
    "key": "G",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "saeta",
      "canción de autor",
      "clásico"
    ],
    "file": "canciones/la-saeta.md",
    "content": "---\ntitle: \"La saeta\"\nartist: \"Joan Manuel Serrat\"\nkey: \"G\"\ncapo: 0\ntempo: 100\ntags: [\"saeta\", \"canción de autor\", \"clásico\"]\n---\n\n## Intro\n[G]-[Em]-[C]-[D]\n\nGolpe a golpe (verso a verso)\n\n[G] [Em] [C]-[D]-[G](2) [C] [D] [G]\nMurió el poeta lejos del hogar\nLe cubre el polvo de un país vecino\nAl alejarse le vieron llorar\n(Caminante, no hay camino)\n(Se hace camino al andar)\n\n[G]-[Em]-[C]-[D]\nGolpe a golpe (verso a verso)\n\n[G] [Em] [C] [D] [G](2) [C] [D] [G]\nCuando el jilguero no puede cantar\nCuando el poeta es un peregrino\nCuando de nada nos sirve rezar\n(Caminante no hay camino)\n(Se hace camino al andar)\n\n[G]-[Em]-[C]-[D] (3[)-][G]\nGolpe a golpe, verso a verso (3)\n\nSerrat/ Machado 1969)\n\n(\n\nDijo una voz popular: ¿Quién me presta una\nescalera para subir al madero,\nPara quitarle los clavos a Jesús el Nazareno?\n\n[A7] [Dm] [Am]/[A#]/[C] [F] -[A7](2)\nOh, la saeta, el cantar al Cristo de los Gitanos\nsiempre con sangre en las manos,\nsiempre por desenclavar.\n-Cantar del pueblo andaluz\nque todas las primaveras\nanda pidiendo escaleras para subir a la cruz.\n\n[A7] [Dm] [Am]/[A#]/[Gm] [A7]\n-Cantar de la tierra mía que echa flores\nal Jesús de la agonía\nY es la fe de mis mayores\n\n[A7] [Dm] [Am]/[A#]/[C] [F] -[A7] (3) [Dm]\n-¿Oh, no eres tú mi cantar\nNo puedo cantar, ni quiero\na este Jesús del madero,\nsino al que anduvo en la mar!\n"
  },
  {
    "id": "la-vereda-de-la-puerta-de-atras",
    "title": "La Vereda de la Puerta de Atrás",
    "artist": "Extremoduro",
    "key": "Am",
    "capo": 1,
    "tempo": 110,
    "tags": [
      "rock",
      "español",
      "poesía",
      "2000s"
    ],
    "file": "canciones/la-vereda-de-la-puerta-de-atras.md",
    "content": "---\ntitle: \"La Vereda de la Puerta de Atrás\"\nartist: \"Extremoduro\"\nkey: \"Am\"\ncapo: 1\ntempo: 110\ntags: [\"rock\", \"español\", \"poesía\", \"2000s\"]\n---\n\n// Cejilla en traste 1 para tono original de disco\n## Intro\n[Am] [G] [F] [G] (x4)\n\n## Verso 1\n[Am] Si no fuera porque hice colo[G]cado [F]\nEl ca[G]mino de tu es[Am]pera\nMe ha[G]bría desco[F]nectado, [G]\n[Am] Condenado a mirarte desde [G] fuera [F]\nY de[G]jar que te to[Am]cara el [G] sol. [F] [G]\n\n[Am] Y si fuera mi vida una esca[G]lera [F]\nMe la he pa[G]sado en[Am]tera\nBus[G]cando el si[F]guiente esca[G]lón,\n[Am] Convencido que estás en el te[G]jado [F]\nEspe[G]rando a ver si [Am] llego [G] yo. [F] [G]\n\n## Coro\n[C] Y dejar de lado la ve[Am]reda de la puerta de a[Em]trás\nPor donde te vi pa[F]sar.\n[C] Como una regadera que la [Am] hierba hace que vuelva a bro[Em]tar\nY ahora todo es [F] campo ya.\n\n## Verso 2\n[Am] Sus soldados son flores de ma[G]dera [F]\nY mi ejér[G]cito no tiene ban[Am]dera,\nEs [G] sólo un cora[F]zón, [G]\n[Am] Condenado a vivir entre ma[G]lezas [F]\nSem[G]brando flores [Am] de algo[G]dón. [F] [G]\n\n[Am] Si me espera la muerte traicio[G]nera [F]\nY antes [G] de repartirme del [Am] todo\nMe [G] veo en un ca[F]jón, [G]\n[Am] Que me entierren con la picha por [G] fuera [F]\nPa' [G] que se la coma un ra[Am]tón. [G] [F] [G]\n\n## Coro\n[C] Y muere a todas horas gente [Am] dentro de mi televi[Em]sor,\nQuiero oír alguna can[F]ción\n[C] Que no hable de sandeces y que [Am] diga que no sobra el a[Em]mor\nY que empiece en sí, [F] no en no.\n\n[C] Y dejar de lado la ve[Am]reda de la puerta de a[Em]trás\nPor donde te vi mar[F]char.\n[C] Como una regadera que la [Am] hierba hace que vuelva a bro[Em]tar\nY ahora todo es [F] campo ya.\n"
  },
  {
    "id": "lady-madrid",
    "title": "Lady Madrid",
    "artist": "Pereza",
    "key": "C",
    "capo": 0,
    "tempo": 116,
    "tags": [
      "rock",
      "pop",
      "español",
      "2000s"
    ],
    "file": "canciones/lady-madrid.md",
    "content": "---\ntitle: \"Lady Madrid\"\nartist: \"Pereza\"\nkey: \"C\"\ncapo: 0\ntempo: 116\ntags: [\"rock\", \"pop\", \"español\", \"2000s\"]\n---\n\n## Intro\n[C] [F] [C] [G]\n[C] [G] [F] [C]\n\n## Verso 1\n[C] Más bonita que nin[G]guna, ponía a la [F] peña de [C] pie,\nCon más [G] noches que la [Am] luna, estaba [F] todo [G] bien.\n[C] Probaste fortuna en [G] 1996, [F] [C]\nDe Málaga [G] hasta La Co[Am]ruña, durmiendo en la es[F]tación de [G] tren.\n\n## Coro\n[C] La estrella de los te[G]jados, lo más [Am] rock&roll de por a[F]quí,\n[C] Los gatos andábamos col[G]gados, [F] Lady Ma[C]drid... [G7]\n\n## Verso 2\n[C] Más viciosa que nin[G]guna, pero tan di[F]fícil de co[C]ger,\nTuvo un [G] piso en las al[Am]turas, \"handle with [F] care\", [G]\n[C] Probaste fortuna con [G] héroes de barrio y con[F]migo tam[C]bién,\nAlgunos to[G]davía [Am] dudan si vas a vol[F]ver... [G]\n\n## Coro\n[C] La estrella de los te[G]jados, lo más [Am] rock&roll de por a[F]quí,\n[C] Los gatos andábamos col[G]gados, [F] Lady Ma[C]drid... [G7]\n\n## Puente\n[C] Pitillos ajus[G]tados, era The [Am] Burning, Ronaldos y Lou [F] Reed,\n[C] Y nunca hablaron los dia[G]rios de [F] Lady Ma[G]drid.\n\n## Coro Final\n[C] La estrella de los te[G]jados, lo más [Am] rock&roll de por a[F]quí,\n[C] Los gatos andábamos col[G]gados, [F] Lady Ma[C]drid...\n[C] Pitillos ajus[G]tados, era The [Am] Burning, Ronaldos y Lou [F] Reed,\n[C] Y nunca hablaron los dia[G]rios de [F] Lady Ma[C]drid. [F] [C]\n"
  },
  {
    "id": "lagrimas-negras",
    "title": "Lágrimas negras",
    "artist": "Trío Matamoros",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "bolero",
      "son cubano",
      "clásico"
    ],
    "file": "canciones/lagrimas-negras.md",
    "content": "---\ntitle: \"Lágrimas negras\"\nartist: \"Trío Matamoros\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"bolero\", \"son cubano\", \"clásico\"]\n---\n\n## Verso 1\n(Matamoros ‘29)\n\n[Intro:] [Am] [Dm] [Am] [E7] [Am] (2) [E7] [Am] [Am] [A7] [Dm]/ [G7] [C] [E7]/ [Am] [A7] [Dm] [Am] [Dm] [E7] [Am]\nAunque tú, me has dejado en el abandono,\nAunque ya has muerto todas mis ilusiones,\nEn vez de maldecirte con justo encono\nEn mis sueños te colmo, en mis sueños te colmo de bendiciones.\n\n[Am] [A7] [Dm]/ [G7] [C] /[B7] [E]/ [Am] [F]-[E] [Am]\nSufro la inmensa pena de tu extravío,\nSiento el dolor profundo de tu partida,\nY lloro sin que tu sepas que el llanto mío,\nTiene lágrimas negras, tiene lágrimas negras como mi vida. (BIS)\n\n[Am] [E7] [Dm] [Am] [E7] [Am]\nTú me quieres dejar, yo no quiero sufrir\nContigo me voy mi santa, aunque me cueste morir (3)\n\n[Am] [E7] [Dm] [Am] [E7] [Am]\nFonseca\n"
  },
  {
    "id": "lamento-boliviano",
    "title": "Lamento Boliviano",
    "artist": "Los Enanitos Verdes",
    "key": "Em",
    "capo": 0,
    "tempo": 120,
    "tags": [
      "rock",
      "latino",
      "acústico",
      "90s"
    ],
    "file": "canciones/lamento-boliviano.md",
    "content": "---\ntitle: \"Lamento Boliviano\"\nartist: \"Los Enanitos Verdes\"\nkey: \"Em\"\ncapo: 0\ntempo: 120\ntags: [\"rock\", \"latino\", \"acústico\", \"90s\"]\n---\n\n## Intro\n[Em] [Bm] [Am] [Em] [B7] (x2)\n\n## Verso 1\n[Em] Me quieren agitar, me incitan a gri[Bm]tar,\nSoy como una roca, palabras no me [Am] tocan,\nAdentro hay un volcán que pronto va a esta[Em]llar, [B7]\nYo quiero estar tran[Em]quilo.\n\n## Verso 2\n[Em] Es mi situación una desola[Bm]ción,\nSoy como un lamento, lamento boli[Am]viano\nQue un día empezó y no va a termi[Em]nar,\nYa nadie me hace [B7] daño.\n\n## Coro\n[Em] Y yo estoy aquí, borracho y [Bm] loco,\nY mi corazón idi[Am]ota siempre brillará,\n[Em] Siempre brilla[B7]rá.\n[Em] Y yo te amaré, te amaré por [Bm] siempre,\nNena, no te peines en la [Am] cama\nQue los viajantes se van a atra[Em]sar. [B7]\n\n## Solo\n[Em] [Bm] [Am] [Em] [B7]\n\n## Coro Final\n[Em] Y yo estoy aquí, borracho y [Bm] loco,\nY mi corazón idi[Am]ota siempre brillará,\n[Em] Siempre brilla[B7]rá.\n[Em] Y yo te amaré, te amaré por [Bm] siempre,\nNena, no te peines en la [Am] cama\nQue los viajantes se van a atra[Em]sar... [Em]\n"
  },
  {
    "id": "las-dos-puntas",
    "title": "Las dos puntas",
    "artist": "Osvaldo Rocha",
    "key": "G7",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "cueca",
      "folklore",
      "cuyo"
    ],
    "file": "canciones/las-dos-puntas.md",
    "content": "---\ntitle: \"Las dos puntas\"\nartist: \"Osvaldo Rocha\"\nkey: \"G7\"\ncapo: 0\ntempo: 100\ntags: [\"cueca\", \"folklore\", \"cuyo\"]\n---\n\n## Verso 1\n(\n\nRocha-Ocampo)\n\n> (piano la 2ª)\n[Intro:] [G7] [C] (7)\n[C] [G7] [C] (6) [A7] [Dm] [G7] [C]\nCuando pa Chile me voy,\nSoy hermana* de la espuma,\nDe las garzas, de las rosas\nSoy hermana* de la espuma,\nDe las garzas, de las rosas\nY del sol, y del sol.\n-Me arrulló la viva diana*\nDe la brisa en el palmar\nY por eso tengo el alma,\nComo el alma primorosa\nY por eso tengo el alma,\nComo el alma primorosa\nDel cristal, del cristal.\n\nCruzando la cordillera (bis)\nLate el corazón contento,\nPues me espera una chilena\n\n(bis)\nY cuando vuelvo de Chile,\nEntre cerros y quebradas (bis)\nLate el corazón contento,\nPues me espera una cuyana\n\n[D7] [G] (2)\nViva la chicha y el vino,\nViva la cueca y la zamba\n\n[*]\n> * /samba/\n[F] [C] [G7] [C] (2)\nDos puntas tiene el camino,\nY en las dos alguien me aguarda\nDos puntas tiene el camino,\nY en las dos alguien me aguarda\n\n[C] [G7] [C] (6) [A7] [Dm] [G7] [C]\nYo bailo la cueca en Chile,\nY en Cuyo bailo la\n\nzamba\n\n[*]\n(bis)\nEn Chile con la chilena,\nCon la otra en Calingasta\n\n(bis)\nVida triste, vida alegre,\nEsa es la vida de arriero (bis)\nPenitas en el camino,\nRisas al fin del sendero (bis)\n\n[D7] [G] (2)\nViva la chicha y el vino,\nViva la cueca y la zamba\n\n[*]\n> * /samba/\n[F] [C] [G7] [C] (2)\nDos puntas tiene el camino,\nY en las dos alguien me aguarda\nDos puntas tiene el camino,\nY en las dos alguien me aguarda.\n"
  },
  {
    "id": "lejos-de-ti",
    "title": "Lejos de ti",
    "artist": "Cantoral",
    "key": "G",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "folklore",
      "latino",
      "acústico"
    ],
    "file": "canciones/lejos-de-ti.md",
    "content": "---\ntitle: \"Lejos de ti\"\nartist: \"Cantoral\"\nkey: \"G\"\ncapo: 0\ntempo: 100\ntags: [\"folklore\", \"latino\", \"acústico\"]\n---\n\n## Verso 1\ny el clavel se molestó,\n\n[G]\nBlanca mariposa y rojo el clavel\n\n[F] [E]-[E7] [Am] (2)\nRojo como los labios de quien yo sé\n\n[Am] [C] [G] [Am] (2) / [G] [C] [G] [Am]( 2)\nSi la distancia es el olvido nunca te olvidaré (2)\nHoy estoy lejos, te recuerdo, y siempre te amaré (2)\nY con el tiempo borrar las huellas de tu amor no podré\nAyer te quise hoy te recuerdo, nunca te olvidaré (2)\n"
  },
  {
    "id": "let-it-be",
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
    ],
    "file": "canciones/let-it-be.md",
    "content": "---\ntitle: \"Let It Be\"\nartist: \"The Beatles\"\nkey: \"C\"\ncapo: 0\ntempo: 72\ntags: [\"rock\", \"classic\", \"60s\", \"balada\", \"fácil\", \"himno\"]\n---\n\n## Intro\n[C] [G] [Am] [F]\n[C] [G] [F] [C]\n\n## Verso 1\nWhen I [C] find myself in [G] times of trouble, [Am] Mother Mary [F] comes to me\n[C] Speaking words of [G] wisdom, let it [F] be [C]\nAnd [C] in my hour of [G] darkness she is [Am] standing right in [F] front of me\n[C] Speaking words of [G] wisdom, let it [F] be [C]\n\n## Coro\nLet it [Am] be, let it [G] be, let it [F] be, let it [C] be\n[C] Whisper words of [G] wisdom, let it [F] be [C]\n\n## Verso 2\nAnd [C] when the broken [G] hearted people [Am] living in the [F] world agree\n[C] There will be an [G] answer, let it [F] be [C]\nFor [C] though they may be [G] parted, there is [Am] still a chance that [F] they will see\n[C] There will be an [G] answer, let it [F] be [C]\n\n## Coro\nLet it [Am] be, let it [G] be, let it [F] be, let it [C] be\n[C] There will be an [G] answer, let it [F] be [C]\nLet it [Am] be, let it [G] be, let it [F] be, let it [C] be\n[C] Whisper words of [G] wisdom, let it [F] be [C]\n\n## Solo\n[F] [C] [G] [C]\n[F] [C] [G] [C]\n\n## Verso 3\nAnd [C] when the night is [G] cloudy, there is [Am] still a light that [F] shines on me\n[C] Shine on until to[G]morrow, let it [F] be [C]\nI [C] wake up to the [G] sound of music, [Am] Mother Mary [F] comes to me\n[C] Speaking words of [G] wisdom, let it [F] be [C]\n\n## Coro Final\nLet it [Am] be, let it [G] be, let it [F] be, yeah, let it [C] be\n[C] There will be an [G] answer, let it [F] be [C]\nLet it [Am] be, let it [G] be, let it [F] be, yeah, let it [C] be\n[C] Whisper words of [G] wisdom, let it [F] be... [C]\n"
  },
  {
    "id": "levantaremos-al-sol",
    "title": "Levantaremos al sol",
    "artist": "Álvaro de Luna",
    "key": "Am",
    "capo": 4,
    "tempo": 100,
    "tags": [
      "pop rock",
      "español",
      "2020s"
    ],
    "file": "canciones/levantaremos-al-sol.md",
    "content": "---\ntitle: \"Levantaremos al sol\"\nartist: \"Álvaro de Luna\"\nkey: \"Am\"\ncapo: 4\ntempo: 100\ntags: [\"pop rock\", \"español\", \"2020s\"]\n---\n\n## Intro\n[#4] [Am] [F] [C] [G]// [Dm] [A#] [F] [C]\n\nA veces voy, a veces vengo,\nEn el camino me entretengo\nContando las veces que te recuerdo\nLas noches a oscuras rompiendo el silencio\n-No sé si vas a tomarme en serio\nPero es que quiero perderme en tu pelo\nY sentir tu aliento si me desvelo\n\nSigue tu camino, vuela y no te detengas\nSal del precipicio, corre y no te des la vuelta\nQue la vida es corta, todo lo que viene va\nLevantaremos al sol, nos perderemos los dos\nNo habrá quien nos pare,\nni nos separe el corazón\nComo luces de neón, iluminando el colchón\nSolo voy a extrañarte cuando se muera mi voz\n\nHoy voy a sentirme bien,\nTengo tus fotos en la pared\nY no me importa si perdí algún tren\nYo solo quiero volver\n\nSigue tu camino, vuela y no te detengas\nSal del precipicio, corre y no te des la vuelta\nQue la vida es corta, todo lo que viene va\nLevantaremos al sol, nos perderemos los dos\nNo habrá quien nos pare,\nni nos separe el corazón\nComo luces de neón, iluminando el colchón\nSolo voy a extrañarte cuando se muera mi voz\noh…oh…\n\nSigue tu camino, vuela y no te detengas\nSal del precipicio, corre y no te des la vuelta\nQue la vida es corta, todo lo que viene va\n\nLevantaremos al sol, nos perderemos los dos\nNo habrá quien nos pare,\nni nos separe el corazón\nComo luces de neón, iluminando el colchón\nSolo voy a extrañarte cuando se muera mi voz\n"
  },
  {
    "id": "lobo-hombre-en-paris",
    "title": "Lobo-hombre en París",
    "artist": "La Unión",
    "key": "C",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "synthpop",
      "new wave",
      "80s",
      "español"
    ],
    "file": "canciones/lobo-hombre-en-paris.md",
    "content": "---\ntitle: \"Lobo-hombre en París\"\nartist: \"La Unión\"\nkey: \"C\"\ncapo: 0\ntempo: 100\ntags: [\"synthpop\", \"new wave\", \"80s\", \"español\"]\n---\n\n## Verso 1\nEn el límite del bien...\n\n[C] [Em] (4)\n(La Unión ‘84)\n\nCae la noche y amanece en París,\nEn el día en que todo ocurrió\nComo un sueño de locos sin fin,\nLa fortuna se ha reído de ti (BIS)\n\n[Dm] [Em] [Dm]/ [G#] -[G]-[C]\nSorprendido espiando, cual lobo está aullando\nY es mordido, por el mago del Siam.\n\n[C] [Em] (4)\nLa luna llena sobre París,\nHa transformado en hombre a Denis\nRueda por los bares del bulevar,\nSe ha alojado en un sucio hostal\n\n[Dm] [Em] [Dm] [G#] -[G]-[C]\nMientras está cenando, junto a él se ha sentado\nUna joven, con la que irá a contemplar\n\nLa luna llena sobre París\n¡Auu! Algunos francos cobra Denis\n¡Auu! Lobo-hombre en parís,\n¡Auu! Su nombre Denis\nLa luna llena sobre París\n¡Auu! ha transformado en hombre a Denis\n¡Auu! Lobo-hombre en París,\n¡Auu! Su nombre Denis\n\n[C] [Em] (4)\n"
  },
  {
    "id": "los-amantes",
    "title": "Los amantes",
    "artist": "Mecano",
    "key": "C",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop",
      "80s",
      "español"
    ],
    "file": "canciones/los-amantes.md",
    "content": "---\ntitle: \"Los amantes\"\nartist: \"Mecano\"\nkey: \"C\"\ncapo: 0\ntempo: 100\ntags: [\"pop\", \"80s\", \"español\"]\n---\n\n## Intro\n[C]-[C4]/5-[C] (2) [G] [Am] -[F]- [G] (3)\n\n- Yo soy uno de esos amantes, tan elegantes\nComo los de antes,\nQue siempre llevan guantes.\n- Entre semana voy deportivo,\nPero el domingo me pongo muy fino,\nCon mi chaqué de lino.\n- Y voy buscando por los balcones\nBellas Julietas para mis canciones\nY hacerles los honores.\n\n[F] [G]/ [F] [Am] / [F] [G]/[F]_[C]-[F]-[G]\nY siempre estoy rompiéndome la voz\nCantando coplas bajo tu ventana,\nAmor, sal ya, que este trovador\nSe está asando de calor.\n\n[C]-[C4]/5-[C] (2) [G] [Am] -[F]- [G] (3)\nSoy educado caballero, bello, cortés\nY amable compañero, un codiciado soltero.\n-Y como no tengo complejos,\nMe miro siempre en todos los espejos\nAntes de echar los tejos.\n- Si alguna vez cometo errores,\npa que no llores pido mil perdones,\nCon un millón de flores.\n\n[F] [G]/ [F] [Am] / [F] [G]/ [F] [C]-[F]-[G]\nY siempre estoy rompiéndome la voz\nCantando coplas bajo tu ventana,\nAmor, sal ya, que este trovador\nSe está asando de calor.\n\n[C] [C4]/5 [C]\n"
  },
  {
    "id": "losing-my-religion",
    "title": "Losing My Religion",
    "artist": "R.E.M.",
    "key": "F",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "alt rock",
      "90s",
      "classic",
      "inglés"
    ],
    "file": "canciones/losing-my-religion.md",
    "content": "---\ntitle: \"Losing My Religion\"\nartist: \"R.E.M.\"\nkey: \"F\"\ncapo: 0\ntempo: 100\ntags: [\"alt rock\", \"90s\", \"classic\", \"inglés\"]\n---\n\n## Verso 1\nIntro: [F] [Dm] [G] [Am] (2) [G]_\n\n[Am] [Em] [Am] (2) [Em]_[Dm] [G]\nOh, life is bigger, it's bigger than you, and you are not me\nThe lengths that I will go to, the distance in your eyes…\nOh no, I've said too much. I set it up.\n\n[Am] [Em] [Am] (2) [Em] [Dm] [G]\nThat's me in the corner, that's me in the spotlight, losing my religion,\nTrying to keep, up with you, and I don't know if I can do it\nOh no, I've said too much, I haven't said enough\n_[F] [G]-[Am]/ [F] [G]-[Am]_[G]\nI thought that I heard you laughing, I thought that I heard you sing.\nI think I thought I saw you try\n\n[Am] [Em] [Am] (2) [Em]_[Dm] [G]\nEvery whisper, of every waking hour I'm choosing my confessions\nTrying to keep, an eye on you, like a hurt lost and blinded fool, fool\nOh no, I've said too much. I set it up\n\n[Am] [Em] [Am] (2) [Em]_[Dm] [G]\nConsider this, consider this, the hint of the century, consider this\nThe slip, that brought me to my knees failed, what if all, these fantasies come,\nFlailing around, now I've said, too much\n\n_[F] [G]-[Am]/ [F] [G]-[Am]\nI thought that I heard you laughing, I thought that I heard you sing.\nI think I thought I saw you try…\n\n[C] [D] (2)\nBut that was just a dream, that was just a dream\n\n[Am] [Em] [Am] (2) [Em] [Dm] [G]\nThat's me in the corner, that's me in the spotlight\nLosing my religion, trying to keep, up with you\nAnd I don't know if I can do it\nOh no, I've said too much, I haven't said enough\n_[F] [G]-[Am]/ [F] [G]-[Am]\nI thought that I heard you laughing, I thought that I heard you sing\nI think I thought I saw you try\n\n[F] [G]/[Am]/[F]/ [G]-[Am]/_[G] -[Am]\nBut that was just a dream. Try, cry. Why, try?\nThat was just a dream, just a dream, just a dream, dream.\n"
  },
  {
    "id": "love-me-do",
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
    ],
    "file": "canciones/love-me-do.md",
    "content": "---\ntitle: \"Love Me Do\"\nartist: \"The Beatles\"\nkey: \"G\"\ncapo: 0\ntempo: 148\ntags: [\"rock\", \"60s\", \"classic\", \"fácil\"]\n---\n\n## Intro\n[G] [C] [G] [C]\n[G] [C] [G] [C]\n\n## Verso 1\n[G] Love, love me [C] do\nYou [G] know I love [C] you\nI'll [G] always be [C] true\nSo please... [C] [C]\nLove me [G] do [C] [G]\nWhoa, love me [G] do [C] [G]\n\n## Verso 2\n[G] Love, love me [C] do\nYou [G] know I love [C] you\nI'll [G] always be [C] true\nSo please... [C] [C]\nLove me [G] do [C] [G]\nWhoa, love me [G] do [C] [G]\n\n## Puente\n[D] Someone to love\n[C] Somebody [G] new\n[D] Someone to love\n[C] Someone like [G] you [D]\n\n## Verso 3\n[G] Love, love me [C] do\nYou [G] know I love [C] you\nI'll [G] always be [C] true\nSo please... [C] [C]\nLove me [G] do [C] [G]\nWhoa, love me [G] do [C] [G]\nYeah, love me [G] do [C] [G]\n"
  },
  {
    "id": "love-me-tender",
    "title": "Love Me Tender",
    "artist": "Elvis Presley",
    "key": "D",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rock and roll",
      "classic",
      "balada",
      "inglés"
    ],
    "file": "canciones/love-me-tender.md",
    "content": "---\ntitle: \"Love Me Tender\"\nartist: \"Elvis Presley\"\nkey: \"D\"\ncapo: 0\ntempo: 100\ntags: [\"rock and roll\", \"classic\", \"balada\", \"inglés\"]\n---\n\n## Intro\n[D] [E] [A] -7 [D](2)\n\n## Verso 1\nLove me tender, love me sweet, never let me go\nYou have made my life complete, and I love you so\n\n[D]-[F#]-[Bm]-[D7]-[G]-[Gm]-[D]/[D] [B7] [E]_ [A] -7 [D]\nLove me tender, love me true, all my dreams fulfil\nFor my darlin’, I love you and I always will\n"
  },
  {
    "id": "loviu",
    "title": "Loviu",
    "artist": "Sandra Valero",
    "key": "F",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop",
      "eurovisión junior",
      "alegre"
    ],
    "file": "canciones/loviu.md",
    "content": "---\ntitle: \"Loviu\"\nartist: \"Sandra Valero\"\nkey: \"F\"\ncapo: 0\ntempo: 100\ntags: [\"pop\", \"eurovisión junior\", \"alegre\"]\n---\n\n## Intro\n[F] [Am][__] [A#]_ [C]_ //[C] [Em] [F] [G]\n\nI love you, mon amour, je t'aime\nTi amo, eu amo-te\nTantas formas de decir te quiero\nY gritarlas por el mundo entero (bis)\n\nMe gustaría cada día vivir así\nTraer de cada rinconcito algún souvenir\nMe gustaría descubrir cada país\nSaber sus secretos\n-Me gustaría bucear en cada mar\nMe gustaría hablar la lengua de tu hogar\nY que me cuentes las leyendas que al final\nAcaban en cuentos\n-Aprenderé a soñar en todos los idiomas\nAprenderé a decir\n\nI love you, mon amour, je t'aime\nTi amo, eu amo-te\nTantas formas de decir te quiero\nY gritarlas por el mundo entero (bis)\n\nMe gustaría que mi viaje de película\nDesafiara las leyes de la física\nHoy en la torre Eiffel\nMañana en el Big Ben\nY cada noche en un castillo cenaré pastel\n-Y subir por los tejados\nTirar confeti por todos lados\nY si queréis venir, yo os espero aquí\nEstáis todos invitados\n\nI love you, mon amour, je t'aime\nTi amo, eu amo-te\nTantas formas de decir te quiero\nY gritarlas por el mundo entero (bis)\n\nOh oh…\n\nTantas formas de decir te quiero\nY gritarlas por el mundo entero\nAprenderé a soñar en todos los idiomas\nAprenderé a decir\n\nI love you, mon amour, je t'aime\nTi amo, eu amo-te\nTantas formas de decir te quiero\nY gritarlas por el mundo entero (bis)\n\noh oh\nTantas formas de decir te quiero\nY gritarlas por el mundo entero…I love you\n"
  },
  {
    "id": "luna-tucumana",
    "title": "Luna tucumana",
    "artist": "Atahualpa Yupanqui",
    "key": "Dm",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "zamba",
      "folklore",
      "argentino"
    ],
    "file": "canciones/luna-tucumana.md",
    "content": "---\ntitle: \"Luna tucumana\"\nartist: \"Atahualpa Yupanqui\"\nkey: \"Dm\"\ncapo: 0\ntempo: 100\ntags: [\"zamba\", \"folklore\", \"argentino\"]\n---\n\n## Intro\n[Dm]-[A7] [Dm] (2) [D7] / [Gm] [Dm] [A7] [Dm]\n\nYo no le canto a la luna\nPorque alumbra y nada más\n/:Le canto porque ella sabe,\nDe mi largo caminar:/\n\nAy, lunita tucumana,\nTamborcito calchaquí\n\n-\n/:Compañera de los gauchos,\nEn las sendas de Tafí\n\n[C7] [F] (2) [Gm] [Dm] [A7] [Dm]\n:/\n\nPerdido en las cerrazones,\nQuién sabe, vidita,\nPor dónde andaré\nMas cuando salga la luna,\nCantaré, cantaré\nA mi Tucumán querido,\nCantaré, cantaré\n\n(2) [Dm]- [A7] [Dm] (2) [D7] / [Gm] [Dm] [A7] [Dm]\nCon esperanza o con pena\nEn los campos de Acheral\n\n/:Yo he visto a la luna buena,\nBesando el cañaveral:/\n-En algo nos parecemos,\nLuna de la soledad\n/:Yo voy andando y cantando,\nQue es mi modo de alumbrar :/\n\n[C7] [F] (2) [Gm] [Dm] [A7] [Dm] (2)\nPerdido en las cerrazones,\nQuién sabe, vidita, por dónde andaré\nMas cuando salga la luna,\nCantaré, cantaré\nA mi Tucumán querido,\nCantaré, cantaré\n\n> https://es.wikipedia.org/wiki/Provincia_de_Tucumán\n> https://es.wikipedia.org/wiki/Calchaqu%C3%ADes\n> https://es.wikipedia.org/wiki/Taf%C3%AD_del_Valle\n> https://es.wikipedia.org/wiki/Acheral\nhttps://youtu.be/0k6kG1WFIA4 (entrevista imperdible)\nhttps://youtu.be/fMGwTBHx6h0\n"
  },
  {
    "id": "malaga-bonita-malaga",
    "title": "Málaga, bonita Málaga",
    "artist": "Popular",
    "key": "F",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "copla",
      "rumba",
      "andaluz"
    ],
    "file": "canciones/malaga-bonita-malaga.md",
    "content": "---\ntitle: \"Málaga, bonita Málaga\"\nartist: \"Popular\"\nkey: \"F\"\ncapo: 0\ntempo: 100\ntags: [\"copla\", \"rumba\", \"andaluz\"]\n---\n\n## Intro\n- [F] [G] [F] [E] (2) //[Am] [G] [F] [E] (2)\n\nIntro:\n\nMálaga, bonita Málaga,\nMálaga, que guapa es.\nEres tú, la más hermosa,\nEres tú, reina calé.\n\n[E] [F] [E] (2)\nMálaga, bonita Málaga, (Málaga, bonita)\nMálaga, que guapa es. (Málaga, bonita)\nEres tú la más hermosa, (Málaga, bonita)\nEres tú reina calé. (Málaga)\n\nCon el embrujo de tus ojos Y el orgullo de tu ser Te paseas por las calles, Por las calles del Perchel. (kechuruapapa)\n(kechuruapapa)\n(kechuruapapa)\n(kechuruapapa)\nViva Málaga que tiene (kechuruapapa)\nCaleta y el Limonar (kechuruapapa)\nY un parque lleno de flores (kechuruapapa)\nA la orillita del mar.\nAntiguamente eran dulces (kechuruapapa)\nTodas las aguas del mar (kechuruapapa)\nSe bañó una malagueña (kechuruapapa)\nY se volvieron salás.\nAy, rosas Málaga bella, (kechuruapapa)\nBiznagas, de mi pasión (kechuruapapa)\nCuando no\n_estoy a tu vera (kechuruapapa)\nSe me rompe el corazón (kechuruapapa)\n\n[Am] [G] [F] [E]\nMálaga, bonita Málaga, (Málaga, bonita)\nMálaga, que guapa es. (Málaga, bonita)\nEres tú la más hermosa, (Málaga, bonita)\nEres tú reina calé …\nEres tú reina calé…\nEres tú, reina calée ¡Y olé!\n"
  },
  {
    "id": "malaguena-del-chato",
    "title": "Malagueña del chato",
    "artist": "El Chato de la Isla",
    "key": "E",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "flamenco",
      "malagueña",
      "copla"
    ],
    "file": "canciones/malaguena-del-chato.md",
    "content": "---\ntitle: \"Malagueña del chato\"\nartist: \"El Chato de la Isla\"\nkey: \"E\"\ncapo: 0\ntempo: 100\ntags: [\"flamenco\", \"malagueña\", \"copla\"]\n---\n\n## Intro\n[E] [Am]\n\n[G] [F]-[E] (2)\nA la sombra de una copla yo te enamoré\nY mi amor te entregué\nMalagueña te quiero y siempre te querré\n\n[G7] [C] [A7] [Dm]/ [G] [C] [E] [Am] [G] [F] [E]\nTus ojos verdes me hablan\nY me dicen que me quieren\nY a mí se me rompe el alma\nPorque cuando yo te veo, enciendo en deseo\nY quiero morir, en tu boca de jazmín\n\n[G7] [C] [A7] [Dm]/ [G] [C] [E] [Am] [G] [F] [E]\nNuestro amor es imposible,\nSon las cosas del destino\nPero me basta y me sirve\nPoder mirarte a la cara, beber tu mirada\nY verte feliz, con tu sonrisa de abril\nQue nuestros cuerpos se unan, en el mar de los\namores.\nY un solo beso nos funda,\nY hasta se pare la hora, mi bella señora,\nLo sabes muy bien,\n"
  },
  {
    "id": "malaguena-salerosa",
    "title": "Malagueña salerosa",
    "artist": "Elpidio Ramírez",
    "key": "A",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "huapango",
      "mexicano",
      "clásico"
    ],
    "file": "canciones/malaguena-salerosa.md",
    "content": "---\ntitle: \"Malagueña salerosa\"\nartist: \"Elpidio Ramírez\"\nkey: \"A\"\ncapo: 0\ntempo: 100\ntags: [\"huapango\", \"mexicano\", \"clásico\"]\n---\n\n## Verso 1\nCádiz, La Habana con más salero.\n\n[A]\n[Am] [A7] [Dm] [G7] [C] [F] [E]\nQué bonitos ojos tienes, debajo de esas dos cejas,\nDebajo de esas dos cejas, qué bonitos ojos tienes.\n-Ellos me quieren mirar, pero si tú no los dejas, pero si tú no los dejas, ni siquiera parpadear.\n\n[E] [Am] [A7] [Dm] [G] [C] [F] [E] [Am]\nMalagueña salerosa, besar tus labios quisiera (2)\nY decirte niña hermosa que eres linda y hechicera.\n\nSi por pobre me desprecias, yo te concedo razón,\nYo te concedo razón si por pobre me desprecias\nYo no te ofrezco riquezas, te ofrezco mi corazón,\nTe ofrezco mi corazón a cambio de mi pobreza\n\nMalagueña salerosa, besar tus labios quisiera (2)\nY decirte niña hermosa que eres linda y hechicera.\n\n[E] [Am] -7 [Dm] [G] [C] [F] [E] [Am]\n[Am] [Am7] [Dm] [G7] [C] [F] [E] [Am]\nQue eres linda y hechicera (2) como el candor de una rosa, y decirte niña hermosa\n"
  },
  {
    "id": "malaguenas-populares",
    "title": "Malagueñas populares",
    "artist": "Popular",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "flamenco",
      "popular",
      "andaluz"
    ],
    "file": "canciones/malaguenas-populares.md",
    "content": "---\ntitle: \"Malagueñas populares\"\nartist: \"Popular\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"flamenco\", \"popular\", \"andaluz\"]\n---\n\n## Verso 1\n> -\nQue algún día, malagueña, serás mi mujer\n\n[Am]\n[E] [Am]\n[G] [F]-[E] (2)\nA la sombra de una copla yo te enamoré\nY mi amor te entregué\nMalagueña te quiero y siempre te querré\n\nCaleta y El Limonar, viva Málaga que tiene,\nCaleta y El Limonar, y un parque lleno de flores,\nA la orillita del mar, donde nacen los amores.\nAntiguamente eran dulces (2)\nTodas las aguas del mar.\nSe bañó una malagueña y se volvieron\n\nsalás\n\n,\nY se volvieron\n\n.\nCuando salí de Marbella (2)\nHasta el caballo lloraba.\nLos ojos de mi morena, al sol sus rayos quitaban,\nAl sol sus rayos quitaban.\nYo en mi vida negaré, (2)\nQue te quise con locura,\nMira qué cariño fue, que aún siento la calentura,\nQue tuve por tu querer.\n\nsalás\n"
  },
  {
    "id": "maria-la-portuguesa",
    "title": "María la portuguesa",
    "artist": "Carlos Cano",
    "key": "Em",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "copla",
      "fado",
      "español"
    ],
    "file": "canciones/maria-la-portuguesa.md",
    "content": "---\ntitle: \"María la portuguesa\"\nartist: \"Carlos Cano\"\nkey: \"Em\"\ncapo: 0\ntempo: 100\ntags: [\"copla\", \"fado\", \"español\"]\n---\n\n## Verso 1\n> Instrumental:\n[Em]\n[B7] (2) [Em] [E7] [Am] [Em] [B7] [Em] [Em] [B7] [Em] (2[)/][E7]\nEn las noches de luna y clavel, de Ayamonte hasta Villarreal,\nSin rumbo por el río, entre suspiros, una canción viene y va.\n\n[Am] [D7]-[G]/ [B7] [Em] -[B7] [Em] (2)\nQue la canta María, al querer de un andaluz\nMaría es la alegría y es la agonía que tiene el Sur.\n\n[Em] [B7] [Em] (2[)/] [E7]\nQue conoció a ese hombre, en una noche de vino verde y calor,\nY entre palma y fandango la fue enredando, le trastornó el corazón.\n\n[Am] [D7]-[G]/ [B7] [Em] -[E]\n-Y en las playas de Isla, se perdieron los dos,\nDonde rompen las olas besó su boca, y se entregó.\n\n[C#7]-[C7]-[B7] [E]\nAay... María la Portuguesa,\n\nDesde Ayamonte hasta Faro, se oye este fado por las tabernas\n\n[B7] [E] [B7] [E]\n[B7] [E]\nDonde bebe vinho amargo,\n\n[Am] [D7] [G] [B7] [E]\n¿por qué canta con tristeza? ¿Por qué esos ojos cerrados?\n\n[B7] [E.] [B7] [Em]\nPor un amor desgraciado, por eso canta, por eso pena.\n\n[Em] [D]\n[C] [B7]\nFado porque me faltan sus ojos, fado porque me falta su boca,\n\n[Am] [Em] [B7] [Em]\nFado porque se fue por el río, fado porque se fue con la sombra.\n\n> Instrumental:\n[Em]\n[D] [C] [B7]/ [Am] [Em] [B7] [Em] [Em] [B7] [Em] (2[)/][E7]\nDicen que fue el \"te quiero\" de un marinero razón de su padecer,\nY una noche en los barcos del contrabando al langostino se fue.\n\n[Am] [D7]-[G]/ [B7] [Em] -[E]\n-Y en las sombras del río un disparo sonó,\nY de aquel sufrimiento nació el lamento de esta canción.\n"
  },
  {
    "id": "maria",
    "title": "María",
    "artist": "Ricky Martin",
    "key": "Gm",
    "capo": 0,
    "tempo": 128,
    "tags": [
      "pop",
      "latino",
      "bailable",
      "90s"
    ],
    "file": "canciones/maria.md",
    "content": "---\ntitle: \"María\"\nartist: \"Ricky Martin\"\nkey: \"Gm\"\ncapo: 0\ntempo: 128\ntags: [\"pop\", \"latino\", \"bailable\", \"90s\"]\n---\n\n## Intro\n[D7] [D#] [D7] [D#] [D7]\n[Gm] [D7] [Gm] [D7]\n\n## Verso 1\n[Gm] Ella es una mujer especial, como caída de otro pla[D7]neta.\n[Gm] Ella es un laberinto carnal que te atrapa y no te en[D7]teras.\n[Gm] Así es María, blanca como el día, pero es veneno si te quieres enamo[D7]rar.\n[Gm] Así es María, tan caliente y fría, que si la bebes de seguro te va a ma[D7]tar.\n\n## Coro\n[Gm] Un, dos, tres, un pasito pa'lante, Ma[D7]ría.\n[Gm] Un, dos, tres, un pasito pa'[D7]trás.\n[Gm] Aunque me muera ahora, María (¡Un, dos, tres!) un pasito pa'lante, Ma[D7]ría.\n[Gm] Un, dos, tres, un pasito pa'[D7]trás.\n\n## Verso 2\n[Gm] Ella es como un pecado mortal que te condena poco a [D7] poco.\n[Gm] Ella es un espejismo sensual que te va volviendo [D7] loco.\n[Gm] Así es María, blanca como el día, pero es veneno si te quieres enamo[D7]rar.\n[Gm] Así es María, tan caliente y fría, que si la bebes de seguro te va a ma[D7]tar.\n\n## Coro\n[Gm] Un, dos, tres, un pasito pa'lante, Ma[D7]ría.\n[Gm] Un, dos, tres, un pasito pa'[D7]trás.\n[Gm] Aunque me muera ahora, María (¡Un, dos, tres!) un pasito pa'lante, Ma[D7]ría.\n[Gm] Un, dos, tres, un pasito pa'[D7]trás. [Gm]\n"
  },
  {
    "id": "mariposas",
    "title": "Mariposas",
    "artist": "Aitana & Sangiovanni",
    "key": "Dm",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop",
      "dance",
      "español"
    ],
    "file": "canciones/mariposas.md",
    "content": "---\ntitle: \"Mariposas\"\nartist: \"Aitana & Sangiovanni\"\nkey: \"Dm\"\ncapo: 0\ntempo: 100\ntags: [\"pop\", \"dance\", \"español\"]\n---\n\n## Intro\n[Dm] [A#] [F] A\n\nDJ, no ponga la canción\nQue cada vez que suena,\nSe me rompe el corazón\nQue cada vez que pienso en él,\nSiento que voy a enloquecer\nPorque no tengo a mi baby\nY todavía lo quiero aquí\nEse beso era para mí, pero ya no va a ser\nNo te quiero perder\n¿Por qué tan fácil te vas, y yo\nAquí pensando solo en ti?\nY no se lo he dicho a nadie\nPerdí la cabeza y estoy loco por ti\n\nHoy ya no vuelan mariposas,\nYa no quedan rosas\nDe esas que en verano me regalabas tú\nY esta noche na-na-na-nada será igual\nBailar sin ti, no sé bailar\nLa música no suena igua-ia-ial\n\nOh-oh-oh, oh-oh-oh, oh-oh-oh\nOtra noche vacía pensando en por qué se fue\nOtra noche en la que no olvidé\nSí, yo soy así, ay, no sé si lloré\nPero no lloré más, fue\nNo, por lo menos traté, eh\nNo, yo por ti no llamé\nPorque sin ti, nada me sabe bien\nNo voy a llorar más, juro que yo no lloraré\nAunque sé que no olvidaré\nPorque sin ti nada me sabe bien\n\nVuelan mariposas, ya no quedan rosas\nDe esas que en verano me regalabas tú\nY esta noche na-na-na-nada será igual\nBailar sin ti, no sé bailar\nLa música no suena igua-ia-ial\n\n[A#] [C] A/ [Dm] [C] [A#]\nVolano farfalle sulle lampadine,\nAttratte come fosse la luce del sole\nCome me che tra miliardi di persone\nVengo verso di te\n"
  },
  {
    "id": "marta-sebas-guille-y-los-demas",
    "title": "Marta, Sebas, Guille y los demás",
    "artist": "Amaral",
    "key": "D",
    "capo": 0,
    "tempo": 120,
    "tags": [
      "pop",
      "rock",
      "español",
      "2000s"
    ],
    "file": "canciones/marta-sebas-guille-y-los-demas.md",
    "content": "---\ntitle: \"Marta, Sebas, Guille y los demás\"\nartist: \"Amaral\"\nkey: \"D\"\ncapo: 0\ntempo: 120\ntags: [\"pop\", \"rock\", \"español\", \"2000s\"]\n---\n\n## Intro\n[G] [D] [A]\n\n## Verso 1\n[D] Marta me llamó a las [A] seis, hora española,\n[Bm] Sólo para hablar, sólo [G] se sentía sola.\n[D] Porque Sebas se mar[A]chó de vuelta a Buenos Aires,\n[Bm] El dinero se acabó, [G] ya no hay sitio para nadie.\n\n## Puente 1\n[Em] ¿Dónde empieza y dónde aca[Bm]bará\nEl des[D]tino que nos une y nos separa[A]rá?\n\n## Verso 2\n[D] Yo estoy sola en el ho[A]tel, estoy viendo amanecer,\n[Bm] Santiago de Chile se des[G]pierta entre montañas.\n[D] Aguirre toca la gui[A]tarra en la 304,\n[Bm] Un gato rebelde que anda [G] medio enamorao\nDe la seño[Em]rita rock and roll,\nAunque [D] no lo ha confe[Bm]sado,\n[A] Eso lo sé yo.\n\n## Coro\n[D] Son mis a[A]migos, [Bm] en la calle\n[G] Pasábamos las [D] horas. [A]\n[D] Son mis a[A]migos, [Bm] por encima de\n[G] Todas las [D] cosas. [A]\n\n## Verso 3\n[D] Carlos me contó que a su [A] hermana Isabel\nLa e[Bm]charon del trabajo sin sa[G]ber por qué.\n[D] No le dieron ni las [A] gracias porque estaba sin contrato,\nA[Bm]quella misma tarde fuimos [G] a celebrarlo:\n[Em] Ya no tendrás que soportar al im[D]bécil de tu [Bm] jefe\nNi un mi[A]nuto más.\n\n## Coro\n[D] Son mis a[A]migos, [Bm] en la calle\n[G] Pasábamos las [D] horas. [A]\n[D] Son mis a[A]migos, [Bm] por encima de\n[G] Todas las [D] cosas. [A]\n\n## Puente 2\n[G] Alicia fue a vivir a Barce[D]lona,\nY [Bm] hoy ha venido a mi me[A]moria.\n[G] Claudia tuvo un hijo y de Guille y [D] los demás\nYa [Bm] no sé [A] nada...\n\n## Coro Final\n[D] Son mis a[A]migos, [Bm] en la calle\n[G] Pasábamos las [D] horas. [A]\n[D] Son mis a[A]migos, [Bm] por encima de\n[G] Todas las [D] cosas. [A]\n[G] Son mis a[A]migos... [D] [Bm] [G] [D] [A] [D]\n"
  },
  {
    "id": "me-cuesta-tanto-olvidarte",
    "title": "Me cuesta tanto olvidarte",
    "artist": "Mecano",
    "key": "C",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop",
      "balada",
      "español",
      "80s"
    ],
    "file": "canciones/me-cuesta-tanto-olvidarte.md",
    "content": "---\ntitle: \"Me cuesta tanto olvidarte\"\nartist: \"Mecano\"\nkey: \"C\"\ncapo: 0\ntempo: 100\ntags: [\"pop\", \"balada\", \"español\", \"80s\"]\n---\n\n## Intro\n[C] [G] [F] [Em] [F] [G] [C] (2) [C7]\n\nEntre el cielo y el suelo hay algo con tendencia a quedarse calvo de tanto recordar.\nY ese algo, que soy yo mismo, es un cuadro de bifrontismo que solo da una faz.\n\n[F] [E7] [Am] [G] (3) [F] [Em]\nSignal\n\n, la cara oculta es la resulta\nDe mi idea genial de echarte, me cuesta tanto olvidarte. Me cuesta tanto\n\nLa cara vista es un anuncio de\n\n[C] [G] [F] [Em] [F] [G] [C] (2) [C7]\nOlvidarte, me cuesta tanto, olvidar quince mil encantos es mucha sensatez.\nY no sé si seré sensato, lo que sé es que me cuesta un rato hacer cosas sin querer.\n\n[F] [E7] [Am] [G] (3) [F] [Em] [Am]\nY aunque fui yo quien decidió que ya no más\nY no me canse de jurarte que no habrá segunda parte, me cuesta tanto olvidarte\nMe cuesta tanto olvidarte\n\nOlvidarte, me cuesta tanto, olvidar quince mil encantos es mucha sensatez.\nY no sé si seré sensato, lo que sé es que me cuesta un rato hacer cosas sin querer.\n\n[C] [G] [F] [Em] [F] [G] [C] (2) [C7]\nY aunque fui yo quien decidió que ya no más… olvidarte. Me cuesta tanto\n"
  },
  {
    "id": "me-equivocaria-otra-vez",
    "title": "Me equivocaría otra vez",
    "artist": "Fito & Fitipaldis",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rock",
      "español",
      "2000s"
    ],
    "file": "canciones/me-equivocaria-otra-vez.md",
    "content": "---\ntitle: \"Me equivocaría otra vez\"\nartist: \"Fito & Fitipaldis\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"rock\", \"español\", \"2000s\"]\n---\n\n## Intro\n[Am] [C]/ [Em] [G] [Am] (2)\n\nSe torció el camino,\nTú ya sabes que no puedo volver.\nSon cosas del destino,\nSiempre me quiere morder,\nEl horizonte se confunde con un negro telón\nY puede ser\n¿cómo decir que se acabó la función?\n\n[Dm] [G] [Am]/ [C] [G]/ [F] [C]\nHa sido divertido,\nMe equivocaría otra vez,\nQuisiera haber querido\nLo que no he sabido querer\n¿Quieres bailar conmigo?\nPuede que te pise los pies\n\n[G] [F]/ [C] [G]/ [F] [G] [Am]/ [D] [F] [G] [Am]\nY soñaré solo\nPorque me he quedao dormido,\nNo voy a despertarme porque salga el sol,\nYa sé llorar una vez por cada vez que río,\nNo sé restar (2) tu mitad a mi corazón.\n\n[Em] [Am] [C]/ [Em] [G] [Am] (2)\nPuede ser que la respuesta\nSea no preguntarse por qué,\nPerderse por los bares\nDonde se bebe sin sed.\nVirgen de la locura\nNunca más te voy a rezar\nQue me he\n\nde los pecados\nQue me quieres quitar\n\nenterao\n\n[Dm] [G] [Am]/ [C] [G]/ [F] [C]\nSerá más divertido\nCuando no me toque perder,\nsigo apostando al 5 y cada 2 por 3 sale 6.\nYo bailaría contigo\nPero es q estoy sordo de un pie\n\n[G] [F]/ [C] [G]/ [F] [G] [Am]/ [D] [F] [G] [Am]\nSoñaré solo porque…\nHa sido divertido..\nSoñaré solo porque me he quedado…\n"
  },
  {
    "id": "me-gustas-tu",
    "title": "Me gustas tú",
    "artist": "Manu Chao",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "reggae pop",
      "mestizaje",
      "latino"
    ],
    "file": "canciones/me-gustas-tu.md",
    "content": "---\ntitle: \"Me gustas tú\"\nartist: \"Manu Chao\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"reggae pop\", \"mestizaje\", \"latino\"]\n---\n\n## Intro\n[Am] [G] [Dm]\n\n(¿Qué horas son, mi corazón?)\n(Te lo dije muy clarito)\n(Permanece a la escucha (2))\n(12 de la noche en La Habana, Cuba)\n(11 de la noche en San Salvador, El Salv.)\n(11 de la noche en Managua, Nicaragua)\nMe gustan los aviones, me gustas tú\nMe gusta viajar, me gustas tú\nMe gusta la mañana, me gustas tú\nMe gusta el viento, me gustas tú\nMe gusta soñar, me gustas tú\nMe gusta la mar, me gustas tú\n\n¿Qué voy a hacer? Je ne sais pas\n¿Qué voy a hacer? Je ne sais plus\n¿Qué voy a hacer? Je suis perdu\n¿Qué horas son, mi corazón?\n\nMe gusta la moto, me gustas tú\nMe gusta correr, me gustas tú\nMe gusta la lluvia, me gustas tú\nMe gusta volver, me gustas tú\nMe gusta marihuana, me gustas tú\nMe gusta colombiana, me gustas tú\nMe gusta la montaña, me gustas tú\nMe gusta la noche (me gustas tú)\n\n¿Qué voy a hacer? Je ne sais pas…\n\n(Doce, un minuto)\nMe gusta la cena, me gustas tú\nMe gusta la vecina, me gustas tú\n\nMe gusta su cocina, me gustas tú\n\nMe gusta camelar, me gustas tú\nMe gusta la guitarra, me gustas tú\nMe gusta el reggae, me gustas tú\n\n¿Qué voy a hacer? Je ne sais pas…\n\nMe gusta la canela, me gustas tú\nMe gusta el fuego, me gustas tú\nMe gusta menear, me gustas tú\nMe gusta la Coruña, me gustas tú\nMe gusta Malasaña, me gustas tú\nMe gusta la castaña, me gustas tú\nMe gusta Guatemala (me gustas tú)\n"
  },
  {
    "id": "mediterraneo",
    "title": "Mediterráneo",
    "artist": "Joan Manuel Serrat",
    "key": "Am7",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "canción de autor",
      "clásico",
      "español"
    ],
    "file": "canciones/mediterraneo.md",
    "content": "---\ntitle: \"Mediterráneo\"\nartist: \"Joan Manuel Serrat\"\nkey: \"Am7\"\ncapo: 0\ntempo: 100\ntags: [\"canción de autor\", \"clásico\", \"español\"]\n---\n\n## Verso 1\n6x4\n\n[Am7] [E7sus4] [Am7] [F] [E7]\nQuizá porque mi niñez sigue jugando en tu playa\n\n[Am7] - [G] [C] [Am7]\nY escondido tras las cañas duerme mi primer amor,\n\n[G] [F] [G] [C]\nLlevo tu luz y tu olor por donde quiera que vaya.\n\n[E7] [Am7] [F] [E7]\nY amontonado en tu arena guardo amor, juegos y penas, yo\n\n[Am7] [E7sus4] [Am7] [F] [E7]\n-Que en la piel tengo el sabor amargo del llanto eterno,\n\n[Am7] [G] [C] [Am7]\nQue han vertido en ti cien pueblos, de Algeciras a Estambul,\n\nPara que pintes de azul sus largas noches de invierno,\n\n[G] [F] [G] [C]\n[E7] [Am7] [F] [Am7]\nA fuerza de desventuras, tu alma es profunda y oscura\n\n[Dm] [C] [E7] [Am]\nA tus atardeceres rojos, se acostumbraron mis ojos como el recodo al camino.\n\n[Dm] [C] [E7] [Am]\nSoy cantor, soy embustero, me gusta el juego y el vino, tengo alma de marinero.\n\n[Dm] [C] [E7] [Am]\n¡Nací en el mediterráneo! (2)\n\n¡Qué le voy a hacer si yo!\n\n[Am7]-[E7sus4]-[Am7] [F] [E7]\nY te acercas y te vas, después de besar mi aldea,\n\n[Am7] [G] [C] [Am7]\nJugando con la marea, te vas pensando en volver\n\nEres como una mujer, perfumadita de brea,\n\n[G] [F] [G] [C]\nQue se añora y que se tiene, que se conoce y se teme ¡ay!\n\n[E7] [Am7] [F] [E7]\n[Am7]-[E7sus4]-[Am7] [F] [E7]\n- Si un día para mi mal viene a buscarme la Parca,\n\nEmpujad al mar mi barca, con un levante otoñal\n\n[Am7] [G] [C] [Am7]\n[G] [F] [G] [C]\nY dejad que el temporal desguace sus alas blancas,\n\nY a mí enterradme sin duelo, entre la playa y el cielo\n\n[E7] [Am7] [F] [Am7]\n[Dm] [C] [E7] [Am]\nEn la ladera de un monte. más alto que el horizonte, quiero tener buena vista.\n\n[Dm] [C] [E7] [Am]\nMi cuerpo será camino, le daré verde a los pinos y amarillo a la genista,\n\n[Dm] [C] [E7] [Am]\n¡Cerca del mar porque yo!\n\nNací en el mediterráneo (3)\n"
  },
  {
    "id": "mentira",
    "title": "Mentira",
    "artist": "Manu Chao",
    "key": "Em",
    "capo": 2,
    "tempo": 100,
    "tags": [
      "mestizaje",
      "bolero",
      "latino"
    ],
    "file": "canciones/mentira.md",
    "content": "---\ntitle: \"Mentira\"\nartist: \"Manu Chao\"\nkey: \"Em\"\ncapo: 2\ntempo: 100\ntags: [\"mestizaje\", \"bolero\", \"latino\"]\n---\n\n## Verso 1\nMentira lo que dice, mentira lo que da\nMentira lo que hace, mentira lo que va\nLa mentira\nMentira, la mentira, mentira la verdad\nMentira lo que cuece bajo la oscuridad\nMentira, mentira, la mentira\nMentira el amor, mentira el sabor\nMentira la que manda, mentira comanda\nMentira, mentira, la mentira\nMentira la tristeza, cuando empieza\nMentira, no se va, mentira,\nMentira, la mentira\nMentira no se borra, mentira no se olvida\nMentira, la mentira\nMentira cuando llega, mentira nunca se va\nMentira la mentira, mentira la verdad\n\n[#2] [Em] [Bm] [Em]\nTodo es mentira en este mundo\nTodo es mentira, la verdad\n\n\"Todo es mentira\", yo me digo\nTodo es mentira, ¿por qué será?\n\n> *\n> *\n(3)\nLa mentira, mentira, la mentira\nNo sé si el corazón peca, llorona\nEn aras de un tierno amor\n\n[Em] [D] [C] [B7]\nTe quiero más que a mi vida, llorona\n¿Qué más quieres? ¿Quieres más? (2)\n"
  },
  {
    "id": "mi-tierra",
    "title": "Mi tierra",
    "artist": "Gloria Estefan",
    "key": "Dm",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "son cubano",
      "pop latino",
      "90s"
    ],
    "file": "canciones/mi-tierra.md",
    "content": "---\ntitle: \"Mi tierra\"\nartist: \"Gloria Estefan\"\nkey: \"Dm\"\ncapo: 0\ntempo: 100\ntags: [\"son cubano\", \"pop latino\", \"90s\"]\n---\n\n## Intro\n[Dm] [A] [Gm]/ [Dm] [A] [Dm]\n\nDe mi tierra bella, de mi tierra santa,\nOigo ese grito de los tambores\nY los timbales al cumbanchar,\nEse pregón que canta un hermano\nQue de su tierra vive lejano,\nY que el recuerdo le hace llorar.\n\n[Gm]/ [Dm] [A] [Dm]\nUna canción que vive entonando,\nDe su dolor, de su propio llanto\nY se le escucha penar:\n\n[Dm] [A] [Gm] [A] [Dm] (2)\nLa tierra te duele, la tierra te da\nEn medio del alma cuando tú no estás.\nLa tierra te empuja de raíz y cal,\nLa tierra suspira si no te ve más\n\n[Dm] [A] [Gm] [Dm] [A] [Dm]\nLa tierra donde naciste no la puedes olvidar\nPorque tiene tus raíces y lo que dejas atrás\n\n[Dm] [A] [Gm] [A] [Dm]\nLa tierra te duele, la tierra te da\nEn medio del alma cuando tú no estás.\n\n[Dm] [A] [Gm]/ [Dm] [A] [Dm]\nSiguen los pregones, la melancolía\nY cada noche junto a la luna\nSigue el guajiro entonando el son\n-Y cada calle que va a mi pueblo\nTiene un quejido, tiene un lamento,\nTiene nostalgia, como su voz.\n- Esa canción que sigue entonando\nPorque la sangre sigue llegando\nCon más fuerza al corazón.\n\n[Dm] [A] [Gm] [A] [Dm] (2)\nLa tierra te duele, la tierra te da\nEn medio del alma cuando tú no estás.\nLa tierra te empuja de raíz y cal,\nLa tierra suspira si no te ve más\n"
  },
  {
    "id": "mi-viejo-san-juan",
    "title": "Mi viejo San Juan",
    "artist": "Noel Estrada",
    "key": "E",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "bolero",
      "puerto rico",
      "clásico"
    ],
    "file": "canciones/mi-viejo-san-juan.md",
    "content": "---\ntitle: \"Mi viejo San Juan\"\nartist: \"Noel Estrada\"\nkey: \"E\"\ncapo: 0\ntempo: 100\ntags: [\"bolero\", \"puerto rico\", \"clásico\"]\n---\n\n## Intro\n[E]-[A]-[B7]-[E]-[C#m]-[F#m]-[B7]-[E] (bis) [E] [B7]\n\nEn mi viejo San Juan cuantos sueños forjé en mis años de infancia,\n\nMi primera ilusión y mis cuitas de amor son recuerdos del alma.\n\n[E]\n[E] [E7] [A] [Am]\nUna tarde partí hacia extraña nación pues lo quiso el destino,\n\n[E] [C#m] [F#m] [B7] [E]\nPero mi corazón se quedó junto al mar, en mi viejo San Juan.\n\n[B7] [E](2)\nAdiós, (adiós, adiós)\nBoriquen querido, (la tierra del amor)\nAdiós, (adiós, adiós)\nMi diosa del mar. (la reina del palmar)\n\n[E7] [A] [Am] [E] [C#m] -[F#m] -[B7]-[E]\nMe voy, (yo ya me voy)\nPero un día volveré, a buscar mi querer,\nA soñar otra vez en mi viejo San Juan.\n\n[E]-[A]-[B7]-[E]-[C#m]-[F#m]-[B7]-[E] (bis) [E] [B7]\nPero el tiempo pasó y el destino burló mi terrible nostalgia,\n\n[E]\nY no pude volver al San Juan que yo amé, pedacito de patria.\n\n[E] [E7] [A] [Am]\nMi cabello blanqueó, ya mi vida se va, ya la muerte me llama,\n\nY no quiero morir alejado de ti, Puerto Rico del alma.\n\n[E] [C#m] [F#m] [B7] [E]\n"
  },
  {
    "id": "michelle",
    "title": "Michelle",
    "artist": "The Beatles",
    "key": "E",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rock",
      "balada",
      "60s",
      "classic",
      "inglés"
    ],
    "file": "canciones/michelle.md",
    "content": "---\ntitle: \"Michelle\"\nartist: \"The Beatles\"\nkey: \"E\"\ncapo: 0\ntempo: 100\ntags: [\"rock\", \"balada\", \"60s\", \"classic\", \"inglés\"]\n---\n\n## Intro\n[E] [Am7] [D] / [Dbdim] [B7](2)\n\n## Verso 1\nMichelle, ma belle, these are words that go together well (ooh), my Michelle\nMichelle, ma belle, sont des mots qui vont très bien ensemble, très bien ensemble\n\n[Em]_ [G] [C] /[B7]-[Em]-[Am] /[Em]-[G]+-[Em7]-[Em6]-[Am] [B7]\nI love you, I love you, I love you (Ooh, ooh) that's all I want to say\n(Ooh) until I find a way\nI will say the only words I know that you'll understand\n\nMichelle, ma belle, sont des mots qui vont très bien ensemble, très bien ensemble\n\n[Em]_ [G] [C] /[B7]-[Em]-[Am] /[Em]-[G]+-[Em7]-[Em6]-[Am] [B7]\nI need to, I need to, I need to, I need to make you see (ooh)\nOh, what you mean to me (ooh, ooh)\nUntil I do, I'm hoping you will know what I mean, I love you (ooh, ooh)\n\nMichelle, ma belle, sont des mots qui vont très bien ensemble, très bien ensemble\n\nI want you, I want you, I want you (ooh, ooh) I think you know by now\nI'll get to you somehow\nUntil I do, I'm telling you, so you'll understand\n\nMichelle, ma belle, sont des mots qui vont très bien ensemble, très bien ensemble\n\nAnd I will say the only words I know that you'll understand, my Michelle (hmm)\n"
  },
  {
    "id": "mil-calles-llevan-hacia-ti",
    "title": "Mil calles llevan hacia ti",
    "artist": "La Guardia",
    "key": "C",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop rock",
      "español",
      "80s"
    ],
    "file": "canciones/mil-calles-llevan-hacia-ti.md",
    "content": "---\ntitle: \"Mil calles llevan hacia ti\"\nartist: \"La Guardia\"\nkey: \"C\"\ncapo: 0\ntempo: 100\ntags: [\"pop rock\", \"español\", \"80s\"]\n---\n\n## Intro\n[C] [F] [G] [C]/ [Am] [Dm] [G] [C] ([F]-[G]-[C]) (bis)\n\nMil calles llevan hacia ti y no sé cuál he de seguir\nNo tengo tiempo que perder y ya se va el último tren\n-Quizás mostrándote una flor o hacer que pierdas el timón\nPoner tu nombre en la pared o amarte cada atardecer\n\n> or. LA\n[G] [C] (2) [E7] [F] [G] [C]\nPuedo perderme en el alcohol y dibujar un corazón\nFingir que existe alguien más que ahora ocupa tu lugar\n\n[C] [F] [G] [C]/ [Am] [Dm] [G] [C] ([F]-[G]-[C]) (bis)\nSi quieres hoy, puedes venir, hay una fiesta para ti\nA tu ventana treparé, si no la cierras esta vez\n-Ese perfume de mujer, me llevará hasta dónde estés\nEn una obscura habitación o en la guarida del león\n\n[G] [C] (2) [E7] [F] [G] [C]\nPuedo perderme en el alcohol y dibujar un corazón\nFingir que existe alguien más que ahora ocupa tu lugar\n\n[C] [F] [G] [C]/ [Am] [Dm] [G] [C] ([F]-[G]-[C])\nMil calles llevan hacia ti, y sé, que tengo que elegir\nMil calles lleva hacia ti y qué camino he de seguir. (BIS)\n\n[G] [C] [D] [G]/ [Em] [Am] [D] [G] ([C]-[D]-[G]) (bis) [D] [G](2) [B7] [C] [D] [G]\n"
  },
  {
    "id": "mil-horas",
    "title": "Mil Horas",
    "artist": "Los Abuelos de la Nada",
    "key": "Gm",
    "capo": 0,
    "tempo": 118,
    "tags": [
      "rock",
      "pop",
      "argentina",
      "80s"
    ],
    "file": "canciones/mil-horas.md",
    "content": "---\ntitle: \"Mil Horas\"\nartist: \"Los Abuelos de la Nada\"\nkey: \"Gm\"\ncapo: 0\ntempo: 118\ntags: [\"rock\", \"pop\", \"argentina\", \"80s\"]\n---\n\n## Intro\n[Gm] [Dm] [Gm] [Dm]\n\n## Verso 1\n[Gm] Hace frío y estoy lejos de [Dm] casa, [Gm]\nHace tiempo que estoy sentado sobre esta [Dm] piedra, [Gm]\n[Eb] Yo me pregunto: ¿para qué sirven las [Dm] guerras? [C7]\n\n## Verso 2\n[Gm] Tengo un cohete en el panta[C7]lón,\n[Gm] Y vos estás tan [C7] fría\n[Gm] Como la nieve a mi alrededor,\n[Gm] Vos estás tan blanca que yo no sé qué ha[Eb]cer.\n\n## Coro\n[Gm] La otra noche te esperé bajo la lluvia\n[Cm] Dos horas, [Dm] mil horas, como un [Eb] perro.\n[Gm] Y cuando llegaste me miraste y me dijiste:\n[Cm] \"Loco, estás mo[Dm]jado, ya no te [Eb] quiero\".\n\n## Puente\n[Cm] En el circo [Dm] vos ya sos una es[Gm]trella,\n[Cm] Una estrella [Dm] roja que todos se la ima[Gm]ginan.\n[Cm] Si te pre[Dm]guntan, vos no me cono[C7]cías, no, no...\n\n## Verso 3\n[Gm] Tengo un cohete en el panta[C7]lón,\n[Gm] Y vos estás tan [C7] fría\n[Gm] Como la nieve a mi alrededor,\n[Gm] Vos estás tan blanca que yo no sé qué ha[Eb]cer.\n\n## Coro Final\n[Gm] La otra noche te esperé bajo la lluvia\n[Cm] Dos horas, [Dm] mil horas, como un [Eb] perro.\n[Gm] Y cuando llegaste me miraste y me dijiste:\n[Cm] \"Loco, estás mo[Dm]jado, ya no te [Eb] quiero\"... [Gm]\n"
  },
  {
    "id": "moliendo-cafe",
    "title": "Moliendo café",
    "artist": "Hugo Blanco",
    "key": "Dm",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "ritmo orquídea",
      "venezolano",
      "clásico"
    ],
    "file": "canciones/moliendo-cafe.md",
    "content": "---\ntitle: \"Moliendo café\"\nartist: \"Hugo Blanco\"\nkey: \"Dm\"\ncapo: 0\ntempo: 100\ntags: [\"ritmo orquídea\", \"venezolano\", \"clásico\"]\n---\n\n## Intro\n[Dm] [G7] [C] (2) [F] [E7]\n\nUna pena de amor y una tristeza,\nLleva el zambo Manuel, en su amargura\nPasa incansable la noche moliendo café.\n\nAlma, corazón y vida\n\n[Am] [Dm] [Am] [E7] [Am]\nRecuerdo aquella vez que yo te conocí\nRecuerdo aquella tarde\nPero no me acuerdo ni cómo te vi\n-Pero si te diré que yo me enamoré\nDe esos tus lindos ojos\nY tus labios rojos que no olvidaré (bis)\n"
  },
  {
    "id": "mon-amour",
    "title": "Mon amour",
    "artist": "Zzoilo & Aitana",
    "key": "C",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop",
      "indie pop",
      "español"
    ],
    "file": "canciones/mon-amour.md",
    "content": "---\ntitle: \"Mon amour\"\nartist: \"Zzoilo & Aitana\"\nkey: \"C\"\ncapo: 0\ntempo: 100\ntags: [\"pop\", \"indie pop\", \"español\"]\n---\n\n## Verso 1\n(Zzoilo/\n\nAitana\n\n)\nMon amour, je t’aime…\n\n[C] [E] [Am] [F] [Zzoilo]/\nte juro que volé\n\n[Aitana]\nEs que me encantas tanto\nSi me miras mientras canto\nSe me pone cara tont@\nNiña, tú me tienes loc@\nY es que me gustas, no sé cuánto\nMás que el olor a café cuando me levanto\nContigo no hace falta dinero en el banco\nContigo veo Paris desde todo lo alto\nDe la Torre Eiffel, que se está muy bien\nMon amour, je t'aime\nParece un cliché pero no lo es\nContigo aprendí lo que es vivir\nPero ya lo ves, ah, ah, ah\nSomos increíbles, somos increíbles… (Y&Á)\nSon las seis de la mañana y me da igual\nVoy a salir a la calle, voy a ponerme a gritar\nVoy a gritar que te quiero,\nQue te quiero de verdad\nCon esa sonrisa puesta\n\n[C] [E] [Am] [F]\nSon las seis de la mañana y me da igual\nVoy a salir a la calle, voy a ponerme a gritar\nVoy a gritar que te quiero,\nQue te quiero de verdad\nCon esa sonrisa puesta\nDe verdad que no me cuesta\nPensar en ti cuando me acuesto\nPero Aitana, no imagines el resto\nQue si no, no queda bonito esto.\n\nVoy a ir directo a ti\nVoy a mirarte a los ojos, no te voy a mentir\nY como dos niños chicos, te pediré salir\nEsperando un \"sí\", esperando un\n\nY es que me encantas tanto\nSi me miras mientras canto\nSe me pone cara tonto\nNiña, tú me tienes loco\n\nkiss\n\nY es que me gustas, no sé cuánto\n\"Gogoko zaitut\" como dirían los vascos\n\nSi quieres te lo digo hasta en portugués,\n“Eu gosto de você”\nSe me paraliza el cuerpo cuando vas a besarme\nMe-acuerdo de ti cuando voy a maquillarme\nCantando en los conciertos,\nTe imagino delante,\nSiendo el más elegante,\nSiendo el más importante\n\nVoy a ir directo a ti\nVoy a mirarte a los ojos, no te voy a mentir\nY como dos niños chicos, te pediré salir\nEsperando un \"sí\", esperando un kiss\n\nY es que me encantas tanto\nSi me miras mientras canto\nSe me pone cara tont@\nNiña, tú me tienes loc@\nY es que me gustas, no sé cuánto\nMás que el olor a café cuando me levanto\nContigo no hace falta dinero en el banco\nContigo veo París desde todo lo alto.\nCuando salgo de grabar,\nSolo quiero ir a buscarte\nMe da igual Madrid o París,\nSolo contigo escaparme\nMon amour, s'il vous plaît, vámonos de aquí\n\nGrabando con Aitana,\nYa pensando en buscarte\nY yo en cruzar el charco,\nPa poder ir a verte\nNo importa el idioma, solo quiero cantarte\nMon amour, amore mio, solo quiero comerte\n\n[F] [G] [C] [E7]\nCuando te veo, mamá, como un formula one\nPaso de cero a cien, contigo implosioné\nDe ti me envenené, yo ya no sé qué hacer\nMe abrazaste y volé,\n\nPues nos vamos…\n\nAdiós\n"
  },
  {
    "id": "moonlight-shadow",
    "title": "Moonlight Shadow",
    "artist": "Mike Oldfield",
    "key": "Dm",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "folk rock",
      "pop",
      "80s",
      "classic",
      "inglés"
    ],
    "file": "canciones/moonlight-shadow.md",
    "content": "---\ntitle: \"Moonlight Shadow\"\nartist: \"Mike Oldfield\"\nkey: \"Dm\"\ncapo: 0\ntempo: 100\ntags: [\"folk rock\", \"pop\", \"80s\", \"classic\", \"inglés\"]\n---\n\n## Intro\n[Dm] [A#]/ [C]_[F] [C] (2)\n\n## Verso 1\nThe last, time_ever she saw him\nCarried away by a moonlight shadow\nHe passed on worried and warning\nCarried away by a moonlight shadow.\n\n[F]_[C] [Dm]-[A#] [C](2)\nLost in a riddle that Saturday night, far away on the other side\nHe was caught in the middle of a desperate fight\nAnd she couldn’t find how to push through.\n\n[Dm] [A#]/ [C]_[F] [C] (2)\nThe trees that whisper in the evening,\nCarried away by a moonlight shadow\nSing_a_song, of sorrow and grieving\nCarried away by a moonlight shadow.\n\n[F]_[C] [Dm]-[A#] [C] (2)\nAll_she_saw_was_the silhouette of a gun far away on the other side\nHe was shot six times by a man on the run, and she couldn’t find how to push through.\n\n[C]_ [F] [A#] [C] (2)\nI STAY, I PRAY SEE YOU-OU IN HEAVEN FAR AWAY\nI STAY, I PRAY SEE YOU-OU IN HEAVEN ONE DAY\n\n[Dm] [A#]/ [C]_[F] [C] (2)\nFour, a.m. in the morning\nCarried away by a moonlight shadow\nI watch your vision forming\nCarried away by a moonlight shadow.\n\n[F]_[C] [Dm]-[A#] [C](2)\nThe stars move slowly in a silvery light\nFar away on the other side\nWill you come to talk to me this night\nBut she couldn’t find how to push through.\n\n[C]_ [F] [A#] [C] (2)\nI STAY, I PRAY SEE YOU-OU IN HEAVEN FAR AWAY\nI STAY, I PRAY SEE YOU-OU IN HEAVEN ONE DAY\n\n[F]_[C] [Dm]-[A#] [C] (4) [F]...\nCaught in the middle of a hundred and five\nThe night was heavy and the air was alive\nBut she couldn’t find how to push through\nFar away on the other side\nBut she couldn’t find how to push through\n"
  },
  {
    "id": "mucho-mejor",
    "title": "Mucho mejor",
    "artist": "Los Rodríguez",
    "key": "G",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rock",
      "español",
      "90s"
    ],
    "file": "canciones/mucho-mejor.md",
    "content": "---\ntitle: \"Mucho mejor\"\nartist: \"Los Rodríguez\"\nkey: \"G\"\ncapo: 0\ntempo: 100\ntags: [\"rock\", \"español\", \"90s\"]\n---\n\n## Intro\n[G] [C] [D] [G]\n\nUy uy uh (4) Ah ah ah (2) Uy, uy, uy, uy, uy, uh ah\n\n[G] [F]/ [C]_[D] [G] (3)\nHace calor, hace calor, yo estaba esperando que cantes mi canción\nY que abras esa botella y brindemos por ella, y hagamos el amor en el balcón\n-Mi corazón, mi corazón, es un músculo sano pero necesita acción\nDame paz y dame guerra y un dulce colocón, y yo te entregaré lo mejor.\n-Ah ah ah, ah ah ah, dulce como el vino, salada como el mar\nPrincesa y vagabunda, garganta profunda, sálvame de esta soledad (BIS)\n\n[G] [F] [C] [D] [G] (3)\nHace calor, hace calor, ella tiene la receta para estar mucho mejor\nSin truco, sin prisa, me entrega su sonrisa como una sacerdotisa del amor\n-Luna de miel, luna de papel, luna llena, piel canela, dame noches de placer\nA veces estoy mal, a veces estoy bien, te daré mi corazón para que juegues con él\n-Ah ah ah, ah ah ah, podrían acusarme, ella es menor de edad\nIremos a un hotel, iremos a cenar, pero nunca iremos juntos al altar\n\n[G] [C] [D] [G]\nUy uy uh (4) Ah ah ah (2) Uy (5) Uh ah (2)\n"
  },
  {
    "id": "mujer-contra-mujer",
    "title": "Mujer contra mujer",
    "artist": "Mecano",
    "key": "G",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop",
      "balada",
      "80s"
    ],
    "file": "canciones/mujer-contra-mujer.md",
    "content": "---\ntitle: \"Mujer contra mujer\"\nartist: \"Mecano\"\nkey: \"G\"\ncapo: 0\ntempo: 100\ntags: [\"pop\", \"balada\", \"80s\"]\n---\n\n## Verso 1\nYo soy uno de esos amantes\n\n[G] [Bm] [C] [D] (3) [G] [F#m7]/5- [B7]_\n- Nada tienen de especial\nDos mujeres que se dan la mano,\nEl matiz viene después,\nCuando lo hacen por debajo del mantel.\n\n[Em] [G] [C][_(]2)\nLuego a solas, sin nada que perder,\nTras las manos, va el resto de la piel.\n\n-\n\nUn amor por ocultar,\nAunque en cueros no hay donde esconderlo,\nLo disfrazan de amistad,\nCuando salen a pasear por la ciudad\n\n-\nUna opina que aquello no está bien,\nLa otra opina que qué se le va a hacer,\n\n[G] [F#m7]/5- [B7]\nY lo que opinen los demás está de más.\n\n[Em] [D] [C#m7]-5/ [C]/ [Cm] [G]\nQuién detiene palomas al vuelo,\nVolando a ras del suelo mujer contra mujer\n\n[G] [Bm] [C] [D] (3) [G] [F#m7]/5- [B7]_\n-No estoy yo por la labor\nDe tirarles la primera piedra,\nSi equivoco la ocasión,\nY las hallo labio a labio en el salón\n\n[Em] [G] [C][_(]2)\nNi siquiera me atrevería a toser,\nSi no gusto yo sé lo que hay que hacer,\n\nQue con mis piedras hacen ellas su pared\n\n[G] [F#m7]/5-[B7]\nQuién detiene palomas al vuelo…\n\n[Em] [G] [C][_(]2) [Em] [D] [C]\nUna opina que aquello no está bien,\nLa otra opina que qué se le va a hacer,\n\n[G] [F#m7]/5- [B7]\nY lo que opinen los demás está de más.\n\nQuién detiene palomas al vuelo…\nOh oh oh\nQuién detiene palomas al vuelo\n"
  },
  {
    "id": "nada-valgo-sin-tu-amor",
    "title": "Nada valgo sin tu amor",
    "artist": "Juanes",
    "key": "C",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop rock",
      "latino",
      "2000s"
    ],
    "file": "canciones/nada-valgo-sin-tu-amor.md",
    "content": "---\ntitle: \"Nada valgo sin tu amor\"\nartist: \"Juanes\"\nkey: \"C\"\ncapo: 0\ntempo: 100\ntags: [\"pop rock\", \"latino\", \"2000s\"]\n---\n\n## Intro\n[C] [G] [Am] [G] [F] [D7] [G] (2)\n\nCuando el tiempo pasa\nY nos hacemos viejos,\nNos empieza a parecer,\nQue pesan más lo daños,\nQue los mismos años, al final.\nPor eso yo quiero que mis años pasen,\nJunto a ti mi amor eterno,\nJunto a mi familia,\nJunto a mis amigos, y mi voz.\n\nme siento mucho mejor.\n\n[Am] [E] [Am7] [D] [F] [C] [G]\nPorque nada valgo,\nPorque nada tengo,\nsi no tengo lo mejor:\nTu amor y compañía, en mi corazón\n\n.\n\n[C] [G] [Am]/ [F] [D7] [G]\nY es que vale más, un año tardío,\nQue un siglo vacío amor,\nY es que vale más\n\n[G] [D] /[Em] [Bm7] /[G] [D] [C] [D]\n[C] [G] [Am] [G] [F] [D7] [G]\nPor eso yo quiero\nQue en mi mente siempre,\nTu cariño esté bien fuerte,\nAunque estemos lejos,\nO aunque estemos cerca, del final\n\n[Am] [E] [Am7] [D] [F] [C] [G]\nrecorrería el mundo entero contigo\nTu amor y compañía, en mi corazón\n\nContigo,\n\n[C] [G] [Am] [G] [F] [Dm] [G] (2)\nVen amor, me siento débil\nCuando estoy sin ti,\nY me hago fuerte cuando estás aquí,\nSin ti yo ya no sé qué es vivir,\nMi vida es un túnel sin tu luz.\n-quiero pasar más tiempo junto a ti,\nRecuperar las noches que perdí,\nVencer el miedo inmenso de morir,\nY ser eterno junto a ti.\n\nme siento mucho mejor. (BIS)\n\nSolo si es contigo (3)\n"
  },
  {
    "id": "napa-es",
    "title": "Ñapa es",
    "artist": "Ska-P",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "ska punk",
      "español",
      "90s"
    ],
    "file": "canciones/napa-es.md",
    "content": "---\ntitle: \"Ñapa es\"\nartist: \"Ska-P\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"ska punk\", \"español\", \"90s\"]\n---\n\n## Intro\n[Am] [F] [E]\n\n-Hablo de España y me lleno de emoción\nY es que te llevo muy dentro del corazón\nCastañuelas, toros y verbenas\nMi España, la tierra del honor.\n-Esta es la España del Felipe y del Aznar,\nLa España democrática del gal,\nLa España de la estafa inmobiliaria,\nLa delincuencia en la alta sociedad.\n-Politicuchos que se inflan a robar,\nLos asesinos hoy vuelven a torear\nEspaña, el país de la patraña\nDe trapicheos, pelotazos y demás.\n\n[Am] [E] (2) / [Am] [E] [F] [E](2)\nY aquí no pasa nada,\nNos tomamos la tostada\nNi siquiera te levantes del sofá\nVaya decepción en la manifestación,\nSolamente han ido los antidisturbios\n-Sí, Jesulín, España es así,\nLa tierra donde yo nací,\nSí, Jesulín, España es así,\nQue sepas que vamos a por ti\n\n[Am] [F] [E]\nY son curritos que no pueden ni currar\nNegociaciones dignas de un neandertal\nTrabajadores pagando los errores\nComo siempre, al que no tiene\nHay que explotar.\n- Somos Europa, no nos podemos quejar\nHemos entrado en el gran capital\nImperialismo que devora tu nevera\nY la vaselina en el culo bien untá\n"
  },
  {
    "id": "naturaleza-muerta",
    "title": "Naturaleza muerta",
    "artist": "Mecano",
    "key": "C",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop",
      "balada",
      "90s"
    ],
    "file": "canciones/naturaleza-muerta.md",
    "content": "---\ntitle: \"Naturaleza muerta\"\nartist: \"Mecano\"\nkey: \"C\"\ncapo: 0\ntempo: 100\ntags: [\"pop\", \"balada\", \"90s\"]\n---\n\n## Intro\n[C] [G] [Am] [G] [F] [Em] [Dm] [G]\n\nNo ha salido el sol y Ana y Miguel\nYa prenden llama\nElla sobre él, hombre y mujer\nDeshacen la cama\n\nY el mar que está loco por Ana\nPrefiere no mirar. Los celos no perdonan\nAl agua, ni a las algas, ni a la sal\n\n[G] [F](4) [G] [E]\n[C] [G] [Am] [G] [F] [Em] [Dm] [G]\nAl amanecer, ya está Miguel\nSobre su barca\nDame un beso amor, y espera quieta\nJunto a la playa\n\n-Y el mar murmura en su lenguaje:\nMaldito pescador! Despídete de ella,\nNo quiero compartir su corazón\n\n[G] [F](4) [G] [E]\n[Am] [G] [F] [E] [Am]/ [G] [F] [E]\nY llorar, y llorar, y llorar por él\nY esperar, y esperar, y esperar de pie\nEn la orilla a que vuelva Miguel\n\n[C] [G] [Am] [G] [F] [Em] [Dm] [G]\nDicen en la aldea\nQue esa roca blanca es Ana\nCubierta de sal y de coral\nEspera en la playa\n\n[G] [F](4) [G] [E]\nNo esperes más niña de piedra\nMiguel no va a volver\nEl mar le tiene preso\nPor no querer cederle a una mujer\n\nY llorar, y llorar, y llorar por él…\n\nIncluso hay gente que asegura\nQue cuando hay tempestad,\nLas olas las provoca\nMiguel luchando a muerte con el mar\n\nY llorar, y llorar, y llorar por él…(2)\nY llorar, y llorar y llorar por él (2)\nY llorar, y llorar, y llorar sobre el mar.\n"
  },
  {
    "id": "ni-mas-ni-menos",
    "title": "Ni más ni menos",
    "artist": "Los Chunguitos",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rumba",
      "vallecas",
      "70s"
    ],
    "file": "canciones/ni-mas-ni-menos.md",
    "content": "---\ntitle: \"Ni más ni menos\"\nartist: \"Los Chunguitos\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"rumba\", \"vallecas\", \"70s\"]\n---\n\n## Intro\n[Am] [G] [F] [E]\n\nVente Misiana Juana, vente misiana,\nMisiana Juana (bis), que yo te quiero\n\n-Porque tú te ves bonita, tú te pones orgullosa\nNi más ni menos (2)\nMás bonitas son las rosas,\nViene el tiempo y las marchita (2)\nLa hermosura es poca cosa,\nNi más ni menos (bis)\nPorque tú te ves bonita tú te pones orgullosa\n\nPorompompero\n\n[Am] [E] [Am] [Am] [G] [F] [E]\n-El cateto de tu hermano,\nQue no me venga con leyes\nQue payo, yo soy gitano\nY tengo sangre de reyes\n-Que pa, que payo yo soy gitano,\nQue ten, que tengo sangre de reyes\nEn la, en la palma de la mano\n"
  },
  {
    "id": "no-dudaria",
    "title": "No Dudaría",
    "artist": "Antonio Flores",
    "key": "C",
    "capo": 0,
    "tempo": 104,
    "tags": [
      "pop",
      "rock",
      "acústico",
      "español",
      "80s"
    ],
    "file": "canciones/no-dudaria.md",
    "content": "---\ntitle: \"No Dudaría\"\nartist: \"Antonio Flores\"\nkey: \"C\"\ncapo: 0\ntempo: 104\ntags: [\"pop\", \"rock\", \"acústico\", \"español\", \"80s\"]\n---\n\n## Intro\n[C] [G] [F] [G] [C] [F] (x2)\n\n## Verso 1\n[C] Si pudiera olvidar todo aquello que fui,\n[G] Si pudiera borrar todo aquello que vi,\n[F] No duda[G]ría, no dudaría en volver a re[C]ír.\n\n[C] Si pudiera explicar las vidas que quité,\n[G] Si pudiera quemar las almas que usé,\n[F] No duda[G]ría, no dudaría en volver a re[C]ír.\n\n## Coro\n[F] Prometo ver la ale[G]gría,\n[C] Escarmentar de la expe[Am]riencia,\n[Dm] Pero nunca, [G] nunca más usar la vio[C]lencia.\n[F] Prometo ver la ale[G]gría,\n[C] Escarmentar de la expe[Am]riencia,\n[Dm] Pero nunca, [G] nunca más usar la vio[C]lencia.\n\n## Puente\n[C] [F] [G] [C]\n\n## Verso 2\n[C] Si pudiera sembrar los campos que arrasé,\n[G] Si pudiera devolver la paz que quité,\n[F] No duda[G]ría, no dudaría en volver a re[C]ír.\n\n[C] Si pudiera olvidar aquel llanto que oí,\n[G] Si pudiera lograr apartarlo de mí,\n[F] No duda[G]ría, no dudaría en volver a re[C]ír.\n\n## Coro Final\n[F] Prometo ver la ale[G]gría,\n[C] Escarmentar de la expe[Am]riencia,\n[Dm] Pero nunca, [G] nunca más usar la vio[C]lencia.\n[F] Prometo ver la ale[G]gría,\n[C] Escarmentar de la expe[Am]riencia,\n[Dm] Pero nunca, [G] nunca más usar la vio[C]lencia. [C]\n"
  },
  {
    "id": "no-estamos-locos",
    "title": "No Estamos Locos (Kalikeño)",
    "artist": "Ketama",
    "key": "Em",
    "capo": 0,
    "tempo": 112,
    "tags": [
      "flamenco",
      "rumba",
      "español",
      "90s"
    ],
    "file": "canciones/no-estamos-locos.md",
    "content": "---\ntitle: \"No Estamos Locos (Kalikeño)\"\nartist: \"Ketama\"\nkey: \"Em\"\ncapo: 0\ntempo: 112\ntags: [\"flamenco\", \"rumba\", \"español\", \"90s\"]\n---\n\n## Intro\n[Em] [B7] [Em] [B7]\n\n## Verso 1\n[Em] Quiero tenerte siempre, siempre que [B7] quieras,\nPara poder be[Em]sarte bajo la luna [B7] llena.\nY hacer el amor con[Em]tigo tumbaíto sobre la a[B7]rena,\nY hacer el amor con[Em]tigo tumbaíto sobre la a[B7]rena.\nMe gusta tu cuerpo mo[Am]reno,\nTus ojos [B7] negros, tu piel ca[Em]nela.\n\n## Coro\n[Em] No estamos locos, que sabemos lo que que[B7]remos,\nVive la vida igual que si fuera un [Em] sueño,\nPero que nunca termina, que se pierde con el [B7] tiempo...\n[Em] No estamos locos, que sabemos lo que que[B7]remos,\nVive la vida igual que si fuera un [Em] sueño,\nPero que nunca termina, que se pierde con el [B7] tiempo...\n\n## Verso 2\n[Em] Quiero tenerte siempre, siempre que [B7] quieras,\nPara poder be[Em]sarte bajo la luna [B7] llena.\nY hacer el amor con[Em]tigo tumbaíto sobre la a[B7]rena,\nY hacer el amor con[Em]tigo tumbaíto sobre la a[B7]rena.\nMe gusta tu cuerpo mo[Am]reno,\nTus ojos [B7] negros, tu piel ca[Em]nela.\n\n## Coro Final\n[Em] No estamos locos, que sabemos lo que que[B7]remos,\nVive la vida igual que si fuera un [Em] sueño,\nPero que nunca termina, que se pierde con el [B7] tiempo... [Em]\n"
  },
  {
    "id": "no-me-lo-creo",
    "title": "No me lo creo",
    "artist": "Manzanita",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rumba",
      "flamenco",
      "español"
    ],
    "file": "canciones/no-me-lo-creo.md",
    "content": "---\ntitle: \"No me lo creo\"\nartist: \"Manzanita\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"rumba\", \"flamenco\", \"español\"]\n---\n\n## Intro\n[Am] [Dm] [G] [C]-[E7]-[Am] [F] [E7]\n\nJamás imaginé que sucediera algo así\nQuien me lo iba a decir\nCon lo lejos que estabas tú de mí\nTan solo en mis sueños fuiste mía, no.\n\n[Am] [Dm] [G] [C]-[E7]-[Am] [F] [E7]\nEstando junto a ti\nNo me parece realidad\nFuiste como una estrella\nQue yo nunca llegué a alcanzar.\nTe alejabas más y mas en la inmensidad\n\n[Am]-[A7]-[Dm] [G7] [C] [F]_ [E] [Am]\nEstoy tan enamorado\nQue aún no puedo creerlo\nQue estés a mi lado diciéndome te quiero\nBesando mi boca acariciando mi pelo.\nNo me lo creo\n\n[Am] [Dm] [G] [C]-[E7]-[Am] [F] [E7]\nMe siento tan feliz\nQue no sé cómo expresar\nLo que siento por ti,\nEres algo tan especial\nCreo estar en un sueño\nDel que no quiero despertar\n\n[Am] [Dm] [G] [C]-[E7]-[Am] [F] [E7]\nEstando junto a ti\nNo me parece realidad\nFuiste como una estrella\nQue yo nunca llegué a alcanzar.\nTe alejabas más y mas en la inmensidad\n\nEstoy tan enamorado\nQue aún no puedo creerlo\nQue estés a mi lado diciéndome te quiero\nBesando mi boca acariciando mi pelo.\nNo me lo creo\n\n[Am]-[A7]-[Dm] [G7] [C] [F]_ [E] [Am]\n"
  },
  {
    "id": "no-puedo-vivir-sin-ti",
    "title": "No Puedo Vivir Sin Ti",
    "artist": "Los Ronaldos",
    "key": "C",
    "capo": 0,
    "tempo": 120,
    "tags": [
      "pop",
      "rock",
      "español",
      "2000s"
    ],
    "file": "canciones/no-puedo-vivir-sin-ti.md",
    "content": "---\ntitle: \"No Puedo Vivir Sin Ti\"\nartist: \"Los Ronaldos\"\nkey: \"C\"\ncapo: 0\ntempo: 120\ntags: [\"pop\", \"rock\", \"español\", \"2000s\"]\n---\n\n## Intro\n[C] [E7] [F] [E7]\n[C] [E7] [F] [E7] [G]\n\n## Verso 1\n[C] Llevas años enredada en mis manos, en mi pelo, [E7] en mi cabeza,\n[F] Y no puedo más, [E7] no puedo [G] más.\n[C] Debería estar cansado de tus manos, de tu pelo, [E7] de tus rarezas,\n[F] Pero quiero más, [E7] yo quiero [G] más.\n\n## Coro\n[C] No puedo vivir sin ti, [E7] no hay manera,\n[F] No puedo estar sin ti, [E7] no hay ma[G]nera.\n\n## Verso 2\n[C] Me dijiste que te irías, pero llevas en mi casa [E7] toda la vida.\n[F] Sé que no te irás, [E7] tú no te i[G]rás.\n[C] Has colgado tu bandera, traspasado la frontera, [E7] eres la reina.\n[F] Siempre reinarás, [E7] siempre reina[G]rás.\n\n## Coro\n[C] No puedo vivir sin ti, [E7] no hay manera,\n[F] No puedo estar sin ti, [E7] no hay ma[G]nera.\n\n## Verso 3\n[C] Y ahora estoy aquí esperando a que vengan a bus[E7]carme.\n[F] Tú no te muevas, [E7] no me encontra[G]rán.\n[C] Yo me quedo para siempre con mi reino, su bandera, [E7] ya no hay fronteras.\n[F] Me dejaré llevar [E7] a ningún lu[G]gar.\n\n## Coro Final\n[C] No puedo vivir sin ti, [E7] no hay manera,\n[F] No puedo estar sin ti, [E7] no hay ma[G]nera... [C]\n"
  },
  {
    "id": "no-quiero-estar-sin-ti",
    "title": "No quiero estar sin ti",
    "artist": "Rosana",
    "key": "D",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop",
      "balada",
      "español"
    ],
    "file": "canciones/no-quiero-estar-sin-ti.md",
    "content": "---\ntitle: \"No quiero estar sin ti\"\nartist: \"Rosana\"\nkey: \"D\"\ncapo: 0\ntempo: 100\ntags: [\"pop\", \"balada\", \"español\"]\n---\n\n## Intro\n[D] [F#m] [G]/ [A] [D] (2)\n\nNo quiero estar sin ti,\nSi tú no estás aquí me sobra el aire\nNo quiero estar así,\nSi tú no estás la gente se hace nadie\n\nSi tú no estás aquí, no sé,\nQué diablos hago amándote.\nSi tú no estás aquí, sabrás\nQue Dios no va a entender por qué te vas.\n\n[D] [F#m] [G]/ [A] [D] (2)\n[D] [F#m] [G]/ [A] [D] (2)\nNo quiero estar sin ti,\nSi tú no estás aquí me falta el sueño\nNo quiero andar así\nLatiendo un corazón de amor sin dueño\n\n[D] [F#m] [G]/ [A] [D] (2)\nSi tú no estás aquí, no sé,\nQué diablos hago amándote.\nSi tú no estás aquí, sabrás\nQue Dios no va a entender por qué te vas.\n\nDerramaré mis sueños si algún día no te tengo\nLo más grande se hará lo más pequeño\n\n[D] [F#m] [G]/ [A] [D]\n[D] [G]/ [A] [F#m] [Bm]-[G] [A]\nPasearé en un cielo sin estrellas esta vez\nTratando de entender quien hizo\nUn infierno el paraíso.\nNo te vayas nunca porque\n\n[D] [F#m] [G]/ [A] [D]\nNo quiero estar sin ti.\nSi tú no estás aquí me quema el aire\n\nSi tú no estás aquí, no sé,\nQué diablos hago amándote.\nSi tú no estás aquí, sabrás\nQue Dios no va a entender por qué te vas.\nSi tú no estás aquí…\n\n[D] [F#m] [G]/ [A] [D] (3)\n"
  },
  {
    "id": "noche-de-invierno",
    "title": "Noche de invierno",
    "artist": "Popular",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "folklore",
      "latino",
      "popular"
    ],
    "file": "canciones/noche-de-invierno.md",
    "content": "---\ntitle: \"Noche de invierno\"\nartist: \"Popular\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"folklore\", \"latino\", \"popular\"]\n---\n\n## Intro\n[Am] [G]_ [Am]/ [G] [C] [G] [Am]\n\nQue frío que hace, que lluvia que hay,\nVen a calentarme tú (bis)\n-Serás mi cariño, serás mi amorcito,\nSerás el refugio de mi corazón.\n\nQuema y moja por igual,\n\nTu recuerdo me hace bien o me hace mal\n"
  },
  {
    "id": "noches-de-bohemia",
    "title": "Noches de Bohemia",
    "artist": "Navajita Plateá",
    "key": "D",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "flamenco",
      "rumba",
      "español",
      "90s"
    ],
    "file": "canciones/noches-de-bohemia.md",
    "content": "---\ntitle: \"Noches de Bohemia\"\nartist: \"Navajita Plateá\"\nkey: \"D\"\ncapo: 0\ntempo: 100\ntags: [\"flamenco\", \"rumba\", \"español\", \"90s\"]\n---\n\n## Intro\n[D] [F#m] [G] [A7] (x2)\n\n## Coro\n[D] Noches de bohemia [F#m] y de ilusión,\n[G] Yo no me doy a la ra[A7]zón,\n¿Tú cómo te olvidaste de [D] eso?\n[D] Busco y no encuentro una expli[F#m]cación,\n[G] Sólo la desilu[A7]sión\nDe que falsos fueron tus [D] besos. [F#m] [Bm]\n\n## Verso 1\n[Bm] Ya no sé cómo olvi[A]darte, eh, eh, eh...\n[Bm] Cómo arrancarte de mis a[A]dentros,\nDesde que te marchaste, mi vida es un tor[D]mento. [G]\n[Bm] Ya no quiero recor[A]darte, eh, eh, eh...\n[Bm] Tan siquiera ni un mo[A]mento,\nPero llevo tu imagen grabada en mi pensa[D]miento. [G] [F#7]\n\n## Coro\n[D] Noches de bohemia [F#m] y de ilusión,\n[G] Yo no me doy a la ra[A7]zón,\n¿Tú cómo te olvidaste de [D] eso?\n[D] Busco y no encuentro una expli[F#m]cación,\n[G] Sólo la desilu[A7]sión\nDe que falsos fueron tus [D] besos.\n\n## Verso 2\n[Bm] Yo quiero vivir dis[A]tante, eh, eh, eh...\n[Bm] De todo aquello que era [A] nuestro,\nPero el aire me trae aromas del re[D]cuerdo. [G]\n[Bm] No pidas que me [A] calle, eh, eh, eh...\n[Bm] Que tú no sabes lo que [A] siento,\nMe has hecho una herida en mis senti[D]mientos. [G] [F#7]\n\n## Coro Final\n[D] Noches de bohemia [F#m] y de ilusión,\n[G] Yo no me doy a la ra[A7]zón,\n¿Tú cómo te olvidaste de [D] eso?\nBusco y no encuentro una expli[F#m]cación,\n[G] Sólo la desilu[A7]sión\nDe que falsos fueron tus [D] besos... [D]\n"
  },
  {
    "id": "nos-sobran-los-motivos",
    "title": "Nos sobran los motivos",
    "artist": "Joaquín Sabina",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "canción de autor",
      "acústico",
      "español"
    ],
    "file": "canciones/nos-sobran-los-motivos.md",
    "content": "---\ntitle: \"Nos sobran los motivos\"\nartist: \"Joaquín Sabina\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"canción de autor\", \"acústico\", \"español\"]\n---\n\n## Intro\n[Am] [F] [E] (2) [C] [G]/ [F] / [E]\n\nEsta sala de espera sin esperanza,\nEstas pilas de un timbre q se secó,\nEste helado de fresa de la venganza,\nEsta empresa de mudanzas\nCon los muebles del amor\n-Esta campana mora en el campanario,\nEsta mitad partida por la mitad,\nEstos besos de judas, este calvario,\nEste look de presidiario,\nEsta cura de humildad.\nEste cambio de acera de tus caderas\nEstas ganas de nada menos de ti\nEste arrabal sin grillos en primavera,\nNi espaldas con cremalleras,\nNi anillos de presumir\n-Esta casita de muñecas de alterne\nEste racimo de pétalos de sal\nEste huracán sin ojos que lo gobiernen\nEste jueves, este viernes\nY el miércoles que vendrá\n\n[C] [G] [F] [E] (2) [Dm] [E]\nNo abuses de mi inspiración,\nNo acuses a mi corazón tan maltrecho\nY ajado que está cerrado por derribo.\n-Por las arrugas de mi voz se filtra la desolación\nDe saber que estos son\nLos últimos versos que te escribo,\nPara decir \"con Dios\" a los dos\nNos sobran los motivos.\n\n-Este nido de pájaro disecado\nEste perro andaluz sin domesticar\nEste trono de príncipe destronado\nEsta espina de pescado, esta ruina de Don Juan.\n-Esta lágrima de hombre de las cavernas\nEsta horma de zapato de barba azul,\nQue poco rato dura la vida eterna\nPor el túnel de tus piernas entre Córdoba y Maipú.\n-Esta guitarra cínica y dolorida,\nCon su terco\n\nKnock, knockin' on heaven's door\n\n,\nEstos labios que saben a despedida\nA vinagre en las heridas, a pañuelo de estación\n-Este ladrón aparcado en tu toga\nLa rueca de Penélope en Luna Park\nEstos celos que sueñan que te desnudan\nEsta caracola viuda sin la pianola del mar\n"
  },
  {
    "id": "oracion-del-remanso",
    "title": "Oración del remanso",
    "artist": "Jorge Fandermole",
    "key": "D7",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "folklore",
      "argentino",
      "acústico"
    ],
    "file": "canciones/oracion-del-remanso.md",
    "content": "---\ntitle: \"Oración del remanso\"\nartist: \"Jorge Fandermole\"\nkey: \"D7\"\ncapo: 0\ntempo: 100\ntags: [\"folklore\", \"argentino\", \"acústico\"]\n---\n\n## Intro\n[Intro:] _ [D7] [G] [Em] [C] [D7] [G] [C] [G] [G] [Em]\n\nSoy de la orilla brava, del agua turbia y la correntada\n\n[C] [D7]\nQue baja hermosa por su barrosa profundidad\n\n[Am7] [F] [G] [Em]\nSoy un paisano serio, soy gente del remanso Valerio\n\n[C] [D7] [G] [C]\nQue es donde el cielo remonta vuelo en el Paraná.\n\n-Tengo el color del río, y su misma voz en mi canto sigo\n\n[G] [Em]\n[C] [Am] [D7]\nDel agua mansa y su suave danza en el corazón\n\n[Am] [F] [G] [Em]\nPero a veces oscura, va turbulenta en la ciega hondura\n\nY se hace brillo en este cuchillo de pescador.\n\n[C] [D7] [G]\n[Em] [C]\n[D7] [G] [Em] [C]\n[D] [G]\nCristo de las redes,\n\nno nos abandones\n\n, y en los espineles,\n\ndéjanos tus dones\n\n[D7] [Am]\nNo pienses que nos perdiste, es que la pobreza nos pone tristes\n\n[C] [D7] [G] [G] 7\nLa sangre tensa y uno no piensa más que en morir.\n\n[C] [F] [G] [Em]\n/:Agua del río viejo, llévate pronto este canto lejos\n\n(2ª vez, pausa)\n\n[C] [D7] [G]\nQue está aclarando y vamos pescando para vivir.\n\n(2ª vez del estribillo :/)\n\nLlevo mi sombra alerta, sobre la escama del agua abierta\n\n[G] [Em]\n[C] [D7]\nY en el reposo vertiginoso del espinel.\n\nSueño que alzo la proa, y subo_a_la_luna en la canoa\n\n[Am7] [F] [G] [Em]\n[C] [D7] [G] [C]\nY allí descanso, hecha un remanso, mi propia piel.\n\n[G] [Em]\n-Calma de mis dolores, ay, Cristo de los pescadores\n\n[C] [D7]\nDile a mi amada, que está apenada esperándome,\n\n[Am7] [F] [G] [Em]\nQue ando pensando en ella, mientras voy vadeando las estrellas\n\n[C] [D7] [G]\nQue el río está bravo y estoy cansado para volver.\n"
  },
  {
    "id": "over-the-rainbow",
    "title": "Over the Rainbow / What a Wonderful World",
    "artist": "Israel Kamakawiwoʻole",
    "key": "C",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "hawaiian",
      "balada",
      "classic",
      "inglés"
    ],
    "file": "canciones/over-the-rainbow.md",
    "content": "---\ntitle: \"Over the Rainbow / What a Wonderful World\"\nartist: \"Israel Kamakawiwoʻole\"\nkey: \"C\"\ncapo: 0\ntempo: 100\ntags: [\"hawaiian\", \"balada\", \"classic\", \"inglés\"]\n---\n\n## Verso 1\nIntro: [C] [G] [Am] [F](2) [F] /  [C] [Em] [F] [C]/ [C] [E7] [Am] [F]\nOoh\n\n[C]             [Em]                       [F]        [C]\nSomewhere over the rainbow, way up high,\n[F]          [C]                                   [G]               [Am]     [F]\nAnd the dreams that you dream of, once in a lullaby…\n[C]             [Em]                        [F]          [C]\nOh,   somewhere  over the rainbow, bluebirds fly\n[F]          [C]                                        [G]                              [Am]     [F].\nAnd the dreams that you dreamed of, dreams really do come true…\n\n[C]                                             [G]                                                       [Am]     [F]\nSomeday I’ll wish upon a star, wake up where the clouds are far behind, me…\n[C]                                                           [G]                                                          [Am]         [F]\nWhere trouble melts like lemon drops, high above the chimney tops, that’s where, you’ll find me…\n\n[C]            [Em]                      [F]           [C]\nOh, somewhere over the rainbow, bluebirds fly\n[F]          [C]                                    [G]                       [Am]   [F]\nAnd the dream that you dare to, oh why, oh why can’t I…\n\n[C]         [Em]        [F]           [C]  [F]                    [C]            [E7]      [Am]\nWell I see, trees of green and, red roses too, I'll watch them bloom for, me and you\n[F]                   [G]                          [Am] -[F]\nAnd I, think to myself: What a wonderful world!\n\n[C]       [Em]             [F]              [C]                  [F]                [C] [E7]                   [Am]\nWell, I see skies of blue and I see, clouds of white, and the brightness of day highlight the dark\n[F]                             [G]                          [C]      [F]-[C]\nAnd I think to myself: What a wonderful world!\n[G]                                         [C]                         [G]                           [C]\nThe colors of the rainbow, so pretty in the sky are also on the faces, of people passing by\n[F]                     [C]                 [F]                [C]  [F]                   [C]       [Dm]          [G]\nI see friends shaking hands saying, \"How do you do?\"   They're really saying, \"I, I love you\"\n\n[C]             [Em]    [F]                     [C]      [F]                        [C]     [E7]          [Am]\nI hear babies cry and I watch them grow. They'll learn much more   than we'll know\n[F]                      [G]                          [Am]           [F]\nAnd I think to myself: What a wonderful wooorld, wooorld\n\n[C]                                             [G]                                                       [Am]     [F]\nSomeday I’ll wish upon a star, wake up where the clouds are far behind, me…\n[C]                                                           [G]                                                          [Am]        [F]\nWhere trouble melts like lemon drops, high above the chimney tops, that’s where, you’ll find me\n\n[C]             [Em]                       [F]        [C]\nSomewhere over the rainbow, way up high,\n[F]          [C]                                    [G]                       [Am]   [F]\nAnd the dream that you dare to, oh why, oh why can’t I…\n\n[C] [Em] [F] [C]/ [C] [E7] [Am] [F]\nOoh\n"
  },
  {
    "id": "para-volver-a-volver",
    "title": "Para volver a volver",
    "artist": "Siempre Así",
    "key": "C",
    "capo": 2,
    "tempo": 100,
    "tags": [
      "rumba",
      "español",
      "popular"
    ],
    "file": "canciones/para-volver-a-volver.md",
    "content": "---\ntitle: \"Para volver a volver\"\nartist: \"Siempre Así\"\nkey: \"C\"\ncapo: 2\ntempo: 100\ntags: [\"rumba\", \"español\", \"popular\"]\n---\n\n## Intro\n[#2] [C]_[A7]-[Dm]/ [G7] [C] (2)\n\nPara volver a volver, no te marches ahora, de una vez quédate,\nA ti te falta el coraje, ese que a mí me sobra, para nunca volver.\n-Para decir que te vas, y al doblar esa esquina, que solo sabes llorar,\nPara eso no digas nunca que no cabe la duda, de que un día te irás.\n\n[C]_[C] 7-[F] [Fm] [C][/_][A7]-[Dm] [G7]-[C] [A7]-[Dm]-[SO7]-[C]\nPara volver a volver, como has vuelto mil veces\nPara decir que te vas, y al final te arrepientes\nDeja tu orgullo correr, deja de hablar y te callas\nNo digas más que te marchas, no digas más que te marchas, para volver a volver (2)\n"
  },
  {
    "id": "paseando-por-la-mezquita",
    "title": "Paseando por la mezquita",
    "artist": "Medina Azahara",
    "key": "Em",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rock andaluz",
      "español",
      "70s"
    ],
    "file": "canciones/paseando-por-la-mezquita.md",
    "content": "---\ntitle: \"Paseando por la mezquita\"\nartist: \"Medina Azahara\"\nkey: \"Em\"\ncapo: 0\ntempo: 100\ntags: [\"rock andaluz\", \"español\", \"70s\"]\n---\n\n## Verso 1\n(Medina Azahara ‘79)\n\nPensaba una noche a solas\nEn quien llegaría al cielo\nPaseaba por la mezquita,\nEstuve un tiempo en silencio\n\n[Em] [D] [Em]\nCon el cuerpo destrozado\nLleno de ira y desprecio\nPor tantas humillaciones\nQue hace pasar por el tiempo\n\nNos unimos en silencio\nCon una esperanza nueva\nDe ver surgir en el cielo\nUnida nuestra bandera\n"
  },
  {
    "id": "perfect",
    "title": "Perfect",
    "artist": "Ed Sheeran",
    "key": "G",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop",
      "balada",
      "2010s",
      "inglés"
    ],
    "file": "canciones/perfect.md",
    "content": "---\ntitle: \"Perfect\"\nartist: \"Ed Sheeran\"\nkey: \"G\"\ncapo: 0\ntempo: 100\ntags: [\"pop\", \"balada\", \"2010s\", \"inglés\"]\n---\n\n## Intro\n[G] [Em] [C] [D] (4)\n\n## Verso 1\nI found a love, for me,\nDarling, just dive right in, and follow my lead.\nWell I found a girl, beautiful and sweet\nOh, I never knew you were the someone waiting for me\n\n'Cause we were just kids_when we fell in love\nNot knowing what it was, I will not give you up, this time\nBut darling, just kiss me slow, your heart is all I own,\nAnd in your eyes you're holding mine\n\n[Em] [C] [G] [D]/ [Em] [C] [G] [D] (2) [G]\nBaby, I'm dancing in the dark, with you between my arms\nBarefoot on the grass, listening to, our favourite song\nWhen you said you looked a mess, I whispered underneath my breath\nBut you heard it, darling you, look perfect, tonight.\n\n[G] [Em] [C] [D] (4)\nWell, I found a woman, stronger than anyone I know\nShe shares my dreams, I hope that someday I'll share her home\nI found a love, to carry more than just my secrets\nTo carry love, to carry children of our own\n\nWe are still kids but we're so in love, fighting against all odds\nI know we'll be alright this time,\nDarling, just hold my hand, be my girl, I'll be your man,\nI see my future in your eyes\n\n[Em] [C] [G] [D]/ [Em] [C] [G] [D] (2) [G]\nBaby, I'm dancing in the dark with you between my arms\nBarefoot on the grass, listening to our favourite song\nWhen I saw you in that dress, looking so beautiful\nI don't deserve this, darling you look perfect tonight.\n\nBaby, I'm dancing in the dark with you between my arms\nBarefoot on the grass, listening to our favourite song\nI have faith in what I see, now I know I have met an angel,\nIn person and she looks perfect.\n[G]/[B]    [C]           [Dsus4]      [D]          [G]\nI don't deserve this, you look perfect tonight\n"
  },
  {
    "id": "pero-a-tu-lado",
    "title": "Pero a tu lado",
    "artist": "Los Secretos",
    "key": "G",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop rock",
      "español",
      "balada"
    ],
    "file": "canciones/pero-a-tu-lado.md",
    "content": "---\ntitle: \"Pero a tu lado\"\nartist: \"Los Secretos\"\nkey: \"G\"\ncapo: 0\ntempo: 100\ntags: [\"pop rock\", \"español\", \"balada\"]\n---\n\n## Verso 1\n> (AC)\n(Instr)\n[G] [D] [Em]\nHe muerto y he resucitado.\n\n[C] [D] [G]\nCon mis cenizas, un árbol he plantado,\n\nSu fruto ha dado\n\n[Em]\n[C] [D] [G] [D]\nY desde hoy, algo ha empezado.\n\n[G] [D] [Em]\nHe roto todos mis poemas,\n\n[C] [D] [G]\nLos de tristezas y de penas,\n\n[Em]\nLo he pensado\n\n[C] [D] [G] [G7]\nY hoy sin dudar, vuelvo a tu lado.\n\n[C] [D] [G]\nAyúdame y te habré ayudado,\n\n[Em] [C]\nQue hoy he soñado en otra vida,\n\n[Am] [D] [G]\nEn otro mundo… pero a tu lado\n\nYa no persigo sueños rotos,\n\n[G] [D] [Em]\n[C] [D] [G]\nLos he cosido con el hilo de tus ojos,\n\n[Em]\nY te he cantado\n\n[C] [D] [G] [G7]\nAl son de acordes, aún no inventados.\n\n[C] [D] [G]\nAyúdame y te habré ayudado,\n\n[Em] [C]\nQue hoy he soñado en otra vida,\n"
  },
  {
    "id": "piel-canela",
    "title": "Piel canela",
    "artist": "Bobby Capó",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "bolero",
      "clásico",
      "latino"
    ],
    "file": "canciones/piel-canela.md",
    "content": "---\ntitle: \"Piel canela\"\nartist: \"Bobby Capó\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"bolero\", \"clásico\", \"latino\"]\n---\n\n## Intro\n[Am]-[D7](2) [G] [E7] /[Am]-[D7](2) [G] [Am]-[D7](2)\n\n[Instr.:]\n[G]-[Bm]-[Em]/\n[Am]-[D7](2\n) [G] (bis)\n[Am] [D7] [G] [Am] [D7] [G]\nquede el infinito sin estrellas o que pierda el ancho mar su inmensidad\n\nQue se\n\n[B7] [Em] [C] [A7] [D]\nPero el negro de tus ojos que no muera y el canela de tu piel se quede igual\nSi perdiera el arcoíris su belleza y las flores su perfume y su color\nNo sería tan inmensa mi tristeza, como aquella de quedarme sin tu amor\n\n[Am] [D7] [Am] [D7] [G]-[Bm]-[G]\nMe importas tú, y tú y tú, y solamente tú, y tú y tú\n\n[Am] [D7] [Am] [D7] [G]\nMe importas tú, y tú y tú, y nadie más que tú\n\nOjos negros, piel canela, que me llevan a desesperar\n\n[E] [E7] [Am] [Cm]\n[Am] [D7] [Am] [D7] [G]\nMe importas tú, y tú y tú, y solamente tú\n\n[Am]-[D7](2)\n[G]-[Bm]-[Em]/\n[Am]-[D7](2\n) [G] (bis)\n[Am] [D7] [G] [Am] [D7] [G]\nQue se\n\nquede el infinito sin estrellas o que pierda el ancho mar su inmensidad\n\n[B7] [Em] [Am] [A7] [D]\nPero el negro de tus ojos que no muera y el canela de tu piel se quede igual\nSi perdiera el arcoíris su belleza y las flores su perfume y su color\nNo sería tan inmensa mi tristeza, como aquella de quedarme sin tu amor\n\n[Am] [D7] [Am] [D7] [G]-[Bm]-[G]\nMe importas tú, y tú y tú, y solamente tú, y tú y tú\n\nMe importas tú, y tú y tú, y nadie más que tú\n\n[Am] [D7] [Am] [D7] [G]\nOjos negros, piel canela, que me llevan a desesperar\n\n[E] [E7] [Am] [Cm]\n[Am] [D7] [Am] [D7] [G] [Bm]-[A#m]-[Am]\nMe importas tú, y tú y tú, y solamente tú\n\n[D7] [G] [Bm]-[A#m]-[Am] [D7] [G]\nAbsolutamente tú, infinitamente tú…\n"
  },
  {
    "id": "piensa-en-mi",
    "title": "Piensa en mí",
    "artist": "Luz Casal",
    "key": "Em",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "bolero",
      "almodóvar",
      "español"
    ],
    "file": "canciones/piensa-en-mi.md",
    "content": "---\ntitle: \"Piensa en mí\"\nartist: \"Luz Casal\"\nkey: \"Em\"\ncapo: 0\ntempo: 100\ntags: [\"bolero\", \"almodóvar\", \"español\"]\n---\n\n## Intro\n[Em] [B7] [Em]/ [E] [E7] [Am]/ [B7] [Em][/_][B7]-[C#7]-[B7]\n\nSi tienes un hondo penar, piensa en mí.\nSi tienes ganas de llorar, piensa en mí.\nYa ves que venero tu imagen divina,\nTu párvula boca que siendo tan niña\nMe enseñó a pecar.\n\n[E] [B7] [E] [F#m] [B7] [E]\nPiensa en mi, cuando sufras\nCuando llores también piensa en mí.\nCuando quieras quitarme la vida\nNo la quiero, para nada,\nPara nada me sirve sin ti.\n\nLo-quiero-todo de ti\nTus labios, tu cariño, lo prohibido\n"
  },
  {
    "id": "popurri-de-rumbas",
    "title": "Popurrí de rumbas",
    "artist": "Popular",
    "key": "E",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rumba",
      "popurrí",
      "fiesta"
    ],
    "file": "canciones/popurri-de-rumbas.md",
    "content": "---\ntitle: \"Popurrí de rumbas\"\nartist: \"Popular\"\nkey: \"E\"\ncapo: 0\ntempo: 100\ntags: [\"rumba\", \"popurrí\", \"fiesta\"]\n---\n\n## Intro\n[E]\n\n[F] [G] [F] [E]\n- Dame veneno que quiero morir, dame veneno,\nQue antes prefiero la muerte que vivir contigo\nDame veneno, ¡ay para morir!\n- Libre, libre; quiero ser (3) libre (bis)\n- Me sabe a humo los cigarritos que yo me fumo (2)\n-Hiciste la maleta, sin decirme adiós, ay qué dolor,\nElla me abandonó, ay que dolor, y solo me dejó\nAy qué dolor (4)\n\n[Am]\n[G] [F] [E]\n-Yo soy la tierra de tus raíces,\nEl talismán de tu piel lo dice\nYo soy la tierra de tus raíces,\nLo dice el talismán y el fuego de tu piel\nYo soy la tierra de tus raíces,\nEl talismán de tu piel lo dice\nYo soy la tierra de tus raíces, a ver que dices tú\n\n[E] [F] [E] (2) [Am]- [G] [F] [E]\nSi me aconvenzo, si me aconvenzo\nDame tu ausenci que sabe a beso, naina...\n\n[Am] [G] [Am] (2) [Am] [G] [F] [E]\n-Prisionero, prisionero estoy por tu culpita,\nPrisionero, prisionero, ay qué tiene tu carita\nPrisionero, prisionero por quererte tanto\nComo yo te quiero.\n\n[Am]-[E7]-[Am]\nBamboleo, bambolea, pq mi vida yo la quiero…\n¿Qué es lo que tienen tus ojitos,\nQue me vuelven loco (2)?\nCuando los miro muy poquito,\nMuy poquito a poco (2)\nY no estaba muerto no, no (3)\nEstaba tomando caña, lerelerele\nY no estaba muerto no, no (3) Chévere (3)\nNo estaba muerto, estaba de parranda (bis)\n-Una lágrima cayó en la arena,\nEn la arena cayó una lágrima\nUna lágrima cayó en la arena,\nYo la quisiera, quisiera encontrar\n\n[Am] [G] [F] [E]\n-Carmen, Carmen voy a tener que emborracharme\nCarmen (3) Porque si no nunca voy a hablarte.\nCarmen, Carmen voy a tener que emborracharme,\nCarmen (3) para decirte que eres tú mi amor.\n-Pero mira como ronea delante el novio pa… (2)\n-Sol, soltera, te vas a quedar soltera… (2)\n-Obí obá cada día te quiero más obí, obá (2)\n\nVente Misiana Juana… que yo te quiero (2)\nPorque tú te ves bonita, tú te pones orgullosa…\n-Porompompó, poropo porompompero (2)\n-Esta noche no me acuesto\nQue vengo de borrachera, que con el tran (2)\n-Abuela, dile a mamá\nQue yo me voy con los muchachos\n-Yo quisiera decirle que la quiero\nY me da miedo lo que ella pensará\nPorque su amor para mí es como un sueño\nQuisiera verlo hecho realidad (2)\n__Quise cortar la flor más tierna del rosal\nPensando que de amor no me podría pinchar\nY mientras me pinchaba me enseñó una cosa,\nQue una rosa es una rosa es una rosa (2)\n-Y cuando abrí la mano y la dejé caer\nRompieron a sangrar las llagas en mi piel,\nY con sus pétalos me la curó mimosa,\nQue una rosa es una rosa es una rosa\n\n-\n\n[Am] [G]\n-Caramba, carambita, carambirulí\nCaramba, carambita, carambirulá\nCariño de verano no me gusta a mí\nCariño de verano no es ni fu ni fa (bis)\n-Kechikitán, kikititantanta ke tumban ba\nKe tumba ke tepe(3) tantantán,\nKe tumba(2) keté (2) (bis)\n-Esta sí, esta no, esta me gusta, me la como yo (2)\n\n> Pamparipan\n[G] [Am]\n-Colegiala, colegiala, colegiala linda colegiala\nColegiala no seas tan coqueta,\nColegiala, ven, dime que sí (2)\n\n-\n\nVenga ___\nsal a bailar que tú lo haces fenomenal\nTú cuerpo se mueve como una palmera,\nSuave, suave, su su suave.\n\n-\n\nA chi li pu, (2) a chi li (8) A chi li pu (2)\n"
  },
  {
    "id": "popurri-raya-real",
    "title": "Popurrí Raya Real",
    "artist": "Raya Real",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rumba",
      "popurrí",
      "fiesta"
    ],
    "file": "canciones/popurri-raya-real.md",
    "content": "---\ntitle: \"Popurrí Raya Real\"\nartist: \"Raya Real\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"rumba\", \"popurrí\", \"fiesta\"]\n---\n\n## Intro\n[Am] [E] [Am] (2)\n\nBamboleo\n\nporque mi vida yo la quiero vivir así\n\n[Am] [Dm] [G7] [C] [Dm] [E]-[E7] [F] [E]\nTiene mi Cuba un son y una cantina, hecha de caña y ron y agua marina,\nEl cantinero es un buen cubano, y una historia de amor lo volvió malo\n\n[Dm]-[G7] [C]-[Am]-[F] [E]-7 [Am] (2)\nCantinero de Cuba, Cuba, Cuba (2) solo bebe aguardiente para olvidar\n\n[Am] [G] [F] [E7] (2)\nobí (3) obá\n\nObí, obá, cada día te quiero más,\n\n[Am] [E] [Am] / [Am]-[D] [G] [F] [E7] (2)\nSe pasaba los días haciendo surcos junto a la mula\nElla estaba en el pueblo tras la ventana con su costura\n\nÉl regaba la tierra con su sudor, esperando la noche con ilusión\n\nUn día muy cansado, se va pal pueblo pa’ verla a ella\nMiró tras la ventana, pero no estaba tras de la reja\n\n¿Dónde estará mi novia? Se preguntó y el eco de la noche le respondió:\n\n[A] [E] [A] / [Am] [E7] [Am] (2)\nA tu novia la vieron la otra mañana,\nHablando de quereres tras la ventana.\nUn mozo con dinero la ha enamorado,\nLa separó de ti, se la ha llevado.\n\nMe va (5) me va la vida, me va la gente de aquí y de allá,\nMe van las cosas que son sencillas de comprender me va el amor de verdad\n-Me va (5) me va la noche y el frío sol del amanecer,\nMe va el paisaje, las golondrinas y el frío aquel me va el amor, de verdad.\n\n[A] [Bm] [E] [A] (4)\nPorque mi guitarra está completamente enamorada de ti\nSobre mi pecho la estoy sintiendo latir\n\n[Am]_[Dm] [E] [Am] (2)\n[A] [E] [A] (2)\nColor moreno, el color de las caras de los romeros\nColor moreno, el que tienen las flamencas por los senderos\nColor moreno, el color de la gitana que yo más quiero\nColor moreno,\n\nel color de la arena del camino rociero\n\n-Hago el camino, los pinares y prados verdes\nLa luz de una candela, la noche y el relente\nHago el camino, los pinares y prados verdes\nVoy contando los días, que faltan para verte\n\n[D]_[A] [E] [A] (2)\n[A] [D] [A] [E] [A]\nAy peregrina, ay peregrina, corazón mío, por decir tu nombre (2), yo digo Rocío\n\nBamboleo\n\n-\n\n[Am] [E] [Am] (2)\nporque mi vida yo la quiero vivir así\n"
  },
  {
    "id": "por-ella",
    "title": "Por ella",
    "artist": "José Manuel Soto",
    "key": "A",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "balada",
      "español",
      "80s"
    ],
    "file": "canciones/por-ella.md",
    "content": "---\ntitle: \"Por ella\"\nartist: \"José Manuel Soto\"\nkey: \"A\"\ncapo: 0\ntempo: 100\ntags: [\"balada\", \"español\", \"80s\"]\n---\n\n## Intro\n[A] [Bm] [E7] [C#m]/ [F#m] [Bm] [E7] [A]\n\nPor ella las puestas de sol y las madrugadas\nPor ella los sueños de amor y las noches amargas\nPor ella las palabras bellas, las dulces canciones\nEl llanto, la risa, el abrazo, las cavilaciones\n-Por ella cada despertar, cada sentimiento\nLas flores, la música, el mar, la lluvia y el viento\nLa luz, el color, el fuego, la tierra y el agua\nAzules y grises recuerdos, el cuerpo y el alma\n\n[A] [D] [E7] [C#m]/ [F#m] [Bm] [E7] [A]\nPor ella fue el amor el odio la paz y el tormento\nPor ella la ilusión y el gozo de vivir queriendo\nPor ella sigue viva la estrella que guía mis pasos\nPor ella no me desmorono ante los fracasos\n\n-\nPor ella miro siempre el sol desde mi ventana\nPor ella tengo aún ilusión en el fondo del alma\nPor ella me imagino el cielo como un beso eterno\nPor ella me pongo a cantar, aunque esté sufriendo\n\n[A] [Bm] [E7] [C#m]/ [F#m] [Bm] [E7] [A]\nPor ella la contradicción y los desvaríos\nPor ella cada sin sabor, cada sin sentido\nLas lágrimas, las puñaladas, también las caricias\nLos celos, la furia callada, mi mejor sonrisa\n\nPor ella mis aspiraciones y mis fantasías\nPor ella mis desolaciones y mis alegrías\nSuspiros, corazón, pasión, poema y plegaria\nY todo lo que no se puede decir con palabras\n\n-\n[A] [D] [E7] [C#m]/ [F#m] [Bm] [E7] [A]\nPor ella fue el amor el odio la paz y el tormento\nPor ella la ilusión y el gozo de vivir queriendo\nPor ella sigue viva la estrella que guía mis pasos\nPor ella no me desmorono ante los fracasos\n\nPor ella miro siempre el sol desde mi ventana\nPor ella tengo aún ilusión en el fondo del alma\nPor ella me imagino el cielo como un beso eterno\nPor ella me pongo a cantar, aunque esté sufriendo\n\n-\n[C] [Dm] ([F]) [G7] [Em]/ [Am] [A7rem] [G7] [C]\n"
  },
  {
    "id": "por-la-boca-vive-el-pez",
    "title": "Por la Boca Vive el Pez",
    "artist": "Fito & Fitipaldis",
    "key": "Am",
    "capo": 0,
    "tempo": 130,
    "tags": [
      "rock",
      "español",
      "2000s"
    ],
    "file": "canciones/por-la-boca-vive-el-pez.md",
    "content": "---\ntitle: \"Por la Boca Vive el Pez\"\nartist: \"Fito & Fitipaldis\"\nkey: \"Am\"\ncapo: 0\ntempo: 130\ntags: [\"rock\", \"español\", \"2000s\"]\n---\n\n## Intro\n[F] [G] [Am] (x2)\n\n## Verso 1\n[F] Algo, lo que me in[G]vade, todo viene de [Am] dentro,\n[F] Nunca lo que me [G] sacie, siempre quiero, lobo ham[Am]briento.\n[F] Todo me queda [G] grande para no estar con[Am]tigo,\n[F] ¿Sabes?, quisiera [G] darte siempre un poco más de lo que te [Am] pido.\n\n## Pre-Coro\n[G] Sabes que soñaré si no es[F]tás, que me despierto con[Am]tigo,\n[G] Sabes que quiero más, no sé vi[F]vir sólo con cinco sen[Am]tidos.\n[F] Este mar cada [G] vez guarda más barcos hun[Am]didos. [F] [G] [Am]\n\n## Coro\n[F] Tú eres aire, yo papel, donde [Am] vayas yo me iré,\n[F] Si me quedo a oscuras, luz de la lo[E]cura, ven y alúmbra[Am]me.\n[F] Alguien dijo alguna vez \"por la [Am] boca vive el pez\"\n[F] Y yo lo estoy diciendo, te lo estoy di[E]ciendo, otra [Am] vez...\n\n## Solo\n[F] [G] [Am] (x2)\n\n## Verso 2\n[F] Dime por qué pre[G]guntas cuánto te he echao de [Am] menos,\n[F] Si en cada canción que es[G]cribo, corazón, eres tú el a[Am]cento.\n[F] No quiero estrella er[G]rante, no quiero ver la au[Am]rora,\n[F] Quiero mirar tus [G] ojos del color de la coca-[Am]cola.\n\n## Pre-Coro\n[G] Sabes que soñaré si no es[F]tás, que me despierto con[Am]tigo,\n[G] Sabes que quiero más, no sé vi[F]vir sólo con cinco sen[Am]tidos.\n[F] Este mar cada [G] vez guarda más barcos hun[Am]didos.\n\n## Parte Final\n[Dm] No estás conmigo siempre que te canto, yo hago canciones para estar con[Am]tigo,\n[E] Porque escribo igual que sangro, porque sangro todo lo que es[Am]cribo.\n[Dm] Me he dado cuenta, cada vez que canto, que si no canto no sé lo que [Am] digo,\n[E] La pena está bailando con el llanto y cuando quiera bailará con[Am]migo.\n[Dm] La vida eterna sólo dura un rato, que es lo que tengo para estar con[Am]tigo,\n[E] Para decirte lo que nunca canto, para cantarte lo que nunca [Am] digo.\n"
  },
  {
    "id": "preguntitas-sobre-dios",
    "title": "Preguntitas sobre Dios",
    "artist": "Atahualpa Yupanqui",
    "key": "D",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "milonga",
      "folklore",
      "canción protesta"
    ],
    "file": "canciones/preguntitas-sobre-dios.md",
    "content": "---\ntitle: \"Preguntitas sobre Dios\"\nartist: \"Atahualpa Yupanqui\"\nkey: \"D\"\ncapo: 0\ntempo: 100\ntags: [\"milonga\", \"folklore\", \"canción protesta\"]\n---\n\n## Verso 1\n```text\nhttps://youtu.be/70WmQk96Btc\n```\n[D] [A7]\nUn día yo pregunté.\n\n[D]\n\"¿Abuelo, dónde está Dios?\" (2)\n\n[A7] [Dm]\nMi abuelo se puso triste y nada me respondió\n\n[A7]\n-Mi abuelo murió en los campos\n\n[Dm]\nSin rezo ni confesión\n\n/: Y lo enterraron los indios\n\n[Gm] [Dm]\nFlauta de caña y tambor :/\n\n[A#] A [Dm]\n[D] [A7] [D] (2[)/][A7] [Dm] (2) [Gm] [Dm] [A#] A [Dm]\nAl tiempo yo pregunté\n\"¿Padre, qué sabes de Dios?\" (2)\nMi padre se puso serio y nada me respondió.\n-Mi padre murió en la mina\nSin doctor ni protección.\nColor de sangre minera tiene el oro del patrón(2)\n\n[D] [A7] [D] (2[)/][A7] [Dm] (2) [Gm] [Dm] [A#] A [Dm]\nMi hermano vive en los montes\nY no conoce una flor (2)\nSudor, malaria y serpiente es la vida del leñador.\n-Y que\n\nnaide\n\nle pregunte si sabe dónde está Dios\nPor su casa no ha pasado tan importante señor (2)\n\n[D] [A7] [D] (2[)/][A7] [Dm] (2) [Gm] [Dm] [A#] A [Dm]\nYo canto por los caminos\nY cuando estoy en prisión (2)\nOigo las voces del pueblo\nQue canta mejor que yo\nHay un asunto en la tierra\nMás importante que Dios\nY es que\n\nnaide\n\nescupa sangre\nPa que otro viva mejor (2)\n\n[Dm] [A7] [Dm]// [Gm] [Dm] [A7] [Dm](2)\nQ Dios vela por los pobres tal vez sí, tal vez no\n-Pero es seguro que almuerza\nen la mesa del patrón (2)\n"
  },
  {
    "id": "princesas",
    "title": "Princesas",
    "artist": "Pereza",
    "key": "G",
    "capo": 0,
    "tempo": 120,
    "tags": [
      "rock",
      "pop",
      "español",
      "2000s"
    ],
    "file": "canciones/princesas.md",
    "content": "---\ntitle: \"Princesas\"\nartist: \"Pereza\"\nkey: \"G\"\ncapo: 0\ntempo: 120\ntags: [\"rock\", \"pop\", \"español\", \"2000s\"]\n---\n\n## Intro\n[G] [D] [Em] [C] (x2)\n\n## Verso 1\n[G] Sigo buscando una sonrisa de repente en un bar,\nUna calada de [D] algo que me pueda colocar,\nUna película que con[Em]siga hacerme llorar, ahá... [C]\n[G] Cambiar un \"no me creo nada\" por \"te quiero, chaval\",\nCualquier excusa, una cho[D]rrada, es buena para brindar,\nSoltar en una carca[Em]jada todo el aire y después respi[C]rar.\n\n## Pre-Coro\n[Em] Sentirme como una co[D]lilla entre unos labios al fu[C]mar,\n[Em] Colgado de tu pelo [D] rojo que me va a matar... [C] [D]\n\n## Coro\nDe prin[G]cesas que buscan tipos que coleccio[D]nar\nA los pies de su [Em] cama, eres algo que he olvi[C]dado ya.\nDe prin[G]cesas que buscan tipos que coleccio[D]nar\nEn el fondo del [Em] vaso, me parece que te [C] vi pasar.\n\n## Verso 2\n[G] Ando silbando, me paro con la gente a charlar,\nMe tomo algo, son[D]río y me lo vuelvo a tomar,\nEscucho música [Em] y me pongo a bailar. [C]\n[G] Sigo flipando cuando veo mi cara en el As,\nÚltimamente las [D] cosas cambian cada vez más,\nA veces pienso que algo [Em] malo viene detrás. [C]\n\n## Pre-Coro\n[Em] Sentirme como una co[D]lilla entre unos labios al fu[C]mar,\n[Em] Colgado de tu pelo [D] rojo que me va a matar... [C] [D]\n\n## Coro Final\nDe prin[G]cesas que buscan tipos que coleccio[D]nar\nA los pies de su [Em] cama, eres algo que he olvi[C]dado ya.\nDe prin[G]cesas que buscan tipos que coleccio[D]nar\nEn el fondo del [Em] vaso, me parece que te [C] vi pasar... [G]\n"
  },
  {
    "id": "que-nadie-sepa-mi-sufrir",
    "title": "Que nadie sepa mi sufrir",
    "artist": "Ángel Cabral",
    "key": "Dm",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "vals",
      "vals criollo",
      "clásico"
    ],
    "file": "canciones/que-nadie-sepa-mi-sufrir.md",
    "content": "---\ntitle: \"Que nadie sepa mi sufrir\"\nartist: \"Ángel Cabral\"\nkey: \"Dm\"\ncapo: 0\ntempo: 100\ntags: [\"vals\", \"vals criollo\", \"clásico\"]\n---\n\n## Verso 1\n(Cabral/Ozedi ‘36)\n\n[Intro] [:] [Dm]-[Am]-[E7]-[Am] (bis)[.] [Am] [Dm]/ [G7] [C]/ [E7] [Am]/ [Dm] [E7]\nNo te asombres si te digo lo que fuiste\nUna ingrata con mi pobre corazón\nPorque el fuego de tus lindos ojos negros\nAlumbraron el camino de otro amor\n\n[Am] [Dm]/ [G7] [C]/ [E7] [Am]/ [Dm] [E7] [Am]\nY pensar que te adoraba tiernamente\nQue a tu lado como nunca me sentí\nY por esas cosas raras de la vida\nSin el beso de tu boca yo me vi\n\n[G7] [C](2) [E7] [Am] [Dm] [F] [E] (2) [Am]\nAmor de mis amores,\nReina mía que me hiciste\nQue no puedo conformarme,\nSin poderte contemplar\nYa que pagaste mal\nA mi cariño tan sincero\n\nSolo conseguirás\nQue no te nombre nunca más\n//:Amor de mis amores,\nSi dejaste de quererme\nNo hay cuidado que la gente,\nDe esto no se enterará\nQue gano con decir,\nQue una mujer cambió mi suerte\nSe burlarán de mí,\nQue nadie sepa mi sufrir. ://\n"
  },
  {
    "id": "querria",
    "title": "Querría",
    "artist": "El Kanka",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "canción de autor",
      "rumba",
      "poético"
    ],
    "file": "canciones/querria.md",
    "content": "---\ntitle: \"Querría\"\nartist: \"El Kanka\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"canción de autor\", \"rumba\", \"poético\"]\n---\n\n## Intro\n[Am] [Dm] [E] [Am] (2)\n\nQuerría, sujetarte las mañanas hacer malabarismos, con tu voz y con mi voz\nQuerría abrirte, todas las ventanas pa que nos diese, la brisa del mar en el colchón\n\n[Dm] [Am] [E] [Am] (2)\nQuerría, festejar tus alegrías, sufrir tus melancolías y besarte en el, corazón\nQuerría guardar esta melodía y escribirte una canción con todo lo que, querría\n\n[E] [Am] (4[)/] [Dm] [Am] [E] [Am] (2)\nSi yo pudiera, si me dejaras\nSi me atreviera, si el cielo hablara\n-Te diría que pierdo las ganas de odiar\nSi acomodo mis pasos a tu caminar\nY que el mundo contigo se ve, menos enfermo\nQue ya es primavera en el Corte Inglés\nQue he pedido una caña y me han puesto tres\nQué va a ser que se ha puesto de moda\nEl amor, otra vez\n\nQuerría, traducirte la mirada, pararme en tu parada, y plantarme en tu jardín\nY protagonizar tus carcajadas y que mis madrugadas fuesen todas para ti\n\n[Am] [Dm] [E] [Am] (2)\n[Dm] [Am] [E] [Am] (2)\nQuerría salpimentarte los días, rebuscarte las manías, y darle armonía, a tu son\nQuerría, que toda la poesía se rindiera ante la rima de tu vida con la mía\n\n[E] [Am] (4[)/] [Dm] [Am] [E] [Am] (2)\nSi yo pudiera, si me dejaras, si me atreviera, si el cielo hablara\nTe diría que pierdo las ganas de odiar, si acomodo mis pasos a tu caminar\nY que el mundo contigo se ve, menos enfermo\nQue ya es primavera, en el Corte Inglés,\nQue he pedido una caña y me han puesto tres\n\n[E] [Am] (3)\nQué va a ser que se ha puesto de moda el amor, otra vez (3)\n"
  },
  {
    "id": "quiereme",
    "title": "Quiéreme",
    "artist": "El Barrio",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "flamenco pop",
      "español",
      "2000s"
    ],
    "file": "canciones/quiereme.md",
    "content": "---\ntitle: \"Quiéreme\"\nartist: \"El Barrio\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"flamenco pop\", \"español\", \"2000s\"]\n---\n\n## Intro\n[Am] [G]\n\nQuiéreme, pero, que mira,\nQue te digo que tú quiéreme (4)\nResulta muy tópico decirle al mundo\nQue el amor es un sentimiento\nQue tiene lado claro y lado oscuro\nY las alegrías o penas van por dentro\n\nPero, mi amor es como un hilo\nQue arregla y cose los descosíos (2)\n\nPero, que mira, que tú quiéreme\nPero, que mira, que te digo que tú quiéreme (3)\nResulta muy tópico decir al valiente\nAl que juega con los amores\nQue la soledad suena muy diferente\nA cuando uno la quiera, a cuando te la imponen\n\nPero, mi amor es como un hilo\nQue arregla y cose los descosíos (2)\n\nPero, que mira, que tú quiéreme\nPero, que mira, que te digo que tú quiéreme (2)\npero, que mi\n\n[F] [Em7] (2)\nY caminando, camina, camina,\nMe encontré contigo\nPara que veas tú lo tópico que,\nMuchos a veces, es el destino\n\n[Am] [F] [G] [Em7]\nMi amor, se muere por mis andares\nMe tengo contado los pasos\nQue me llevan a su calle (2)\n\n[G] [Am]\nTópico es el besar con los ojos abiertos\nTópico es acordarte solo cuando truena\nTópico es no sentir lo que llevas dentro mi niña\nTópico es creer que el amor es una cadena\nQue ya te he dicho que mi amor es como un hilo\nQue arregla y cose los descosíos\nQue ya te he dicho que, mi amor (2) es como un hilo\nQue arregla y cose los descosíos\nQue no te olvides, que tú quiéreme\nPero, que mira, que te digo, que tú quiéreme (3)\n"
  },
  {
    "id": "raindrops-keep-fallin-on-my-head",
    "title": "Raindrops Keep Fallin' on My Head",
    "artist": "B.J. Thomas",
    "key": "C",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop",
      "soundtrack",
      "60s",
      "classic",
      "inglés"
    ],
    "file": "canciones/raindrops-keep-fallin-on-my-head.md",
    "content": "---\ntitle: \"Raindrops Keep Fallin' on My Head\"\nartist: \"B.J. Thomas\"\nkey: \"C\"\ncapo: 0\ntempo: 100\ntags: [\"pop\", \"soundtrack\", \"60s\", \"classic\", \"inglés\"]\n---\n\n## Intro\n[C] [Cmaj7]/ [C7]/ [F]_ [Em7] [A7] [Em7] /[A7] [Dm7]  -[G7]\n\n## Verso 1\nRain drops keep fallin’ on my head,\nAnd just like the guy whose feet are too big for his bed,\nNothing seems to fit.\nThose raindrops are fallin’ on my head,\nThey keep fallin’\n\nSo I just did, some talking to the sun.\nAnd I said I didn’t like the way he got things done,\nSleeping on the job.\nThose raindrops are falling on my head.\nThey keep falling!\n\n-[C] [Cmaj7]/ [F] [G] [G7]-[Em7]_/ [A7] [Dm7]  -[G7]\nBut there’s one thing, i know,\nThe blues they send to meet me won’t defeat me.\nIt won’t be long\nTill happiness steps up to greet me\n\nRain drops keep fallin’ on my head,\nBut that doesn’t mean my eyes\nWill soon be turnin’ red\nCrying’ is not for me ‘cause\nI’m never gonna stop the rain by complainin’.\n\n-[C] [Cmaj7]/ [Dm7] [G7] [C]\nBecause I’m free, nothin’s worryin’ me\n"
  },
  {
    "id": "rayando-el-sol",
    "title": "Rayando el Sol",
    "artist": "Maná",
    "key": "G",
    "capo": 0,
    "tempo": 84,
    "tags": [
      "rock",
      "pop",
      "latino",
      "90s"
    ],
    "file": "canciones/rayando-el-sol.md",
    "content": "---\ntitle: \"Rayando el Sol\"\nartist: \"Maná\"\nkey: \"G\"\ncapo: 0\ntempo: 84\ntags: [\"rock\", \"pop\", \"latino\", \"90s\"]\n---\n\n## Intro\n[G] [D] [Em] [C]\n[G] [Bm] [C] [D] [Em]\n\n## Verso 1\n[G] Rayando el [C] sol,\n[D] Rayando por [C] ti,\n[G] Esta pena me duele,\n[C] Me quema [D] sin tu a[C]mor.\n[Bm] No me has llamado, estoy desespe[C]rado, [D]\n[Bm] Son muchas lunas las que te he llo[C]rado. [D]\n\n## Coro\n[G] Rayando el [D] sol, oe oh,\n[Em] Desespera[C]ción,\n[G] Es más fácil lle[Bm]gar al sol\n[C] Que a tu cora[D]zón.\n[G] Me muero por [D] ti, oe oh,\n[Em] Viviendo sin [C] ti,\n[G] Y no aguanto, me [Bm] duele tanto\n[C] Estar a[D]sí, rayando el [Em] sol.\n\n## Verso 2\n[G] A tu casa yo [C] fui\n[D] Y no te encon[C]tré,\n[G] En el parque, en la [C] plaza, en el cine\n[D] Yo te bus[C]qué.\n[Bm] Te tengo atrapada entre mi piel y mi [C] alma, [D]\n[Bm] Mas ya no puedo tanto y quiero estar junto a [C] ti. [D]\n\n## Coro Final\n[G] Rayando el [D] sol, oe oh,\n[Em] Desespera[C]ción,\n[G] Es más fácil lle[Bm]gar al sol\n[C] Que a tu cora[D]zón.\n[G] Me muero por [D] ti, oe oh,\n[Em] Viviendo sin [C] ti,\n[G] Y no aguanto, me [Bm] duele tanto\n[C] Estar a[D]sí, rayando el [Em] sol. [G]\n"
  },
  {
    "id": "resistire",
    "title": "Resistiré",
    "artist": "Dúo Dinámico",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop",
      "clásico",
      "español",
      "80s"
    ],
    "file": "canciones/resistire.md",
    "content": "---\ntitle: \"Resistiré\"\nartist: \"Dúo Dinámico\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"pop\", \"clásico\", \"español\", \"80s\"]\n---\n\n## Intro\n[Am] [Dm] [G] [C]/ [Am] [Dm] [E7] [Am]\n\nCuando pierda todas las partidas\nCuando duerma con la soledad\nCuando se me cierren las salidas\nY la noche no me deje en paz\n-Cuando sienta miedo del silencio\nCuando cueste mantenerse en pie\nCuando se rebelen los recuerdos\nY me pongan contra la pared\n\n[Am] [Dm]/ [G] [C] [E7]/ [Am] [E7] [Am](2) [E7]\nResistiré, erguido frente a todos\nMe volveré de hierro para endurecer la piel\nY aunque los vientos\nDe la vida soplen fuerte\nSoy como el junco que se dobla,\nPero siempre sigue en pie\n-Resistiré, para seguir viviendo\nSoportaré, los golpes y jamás me rendiré\nY aunque los sueños se me rompan en pedazos\nResistiré, resistiré\n\n[Am] [Dm] [G] [C]/ [Am] [Dm] [E7] [Am]\nCuando el mundo pierda toda magia\nCuando mi enemigo sea yo\nCuando me apuñale la nostalgia\nY no reconozca ni mi voz\n-Cuando me amenace la locura\nCuando en mi moneda salga cruz\nCuando el diablo pase la factura\nO si alguna vez me falta tú\n"
  },
  {
    "id": "rio-manso",
    "title": "Río manso",
    "artist": "Cholo Aguirre",
    "key": "Gm",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "folklore",
      "chamamé",
      "argentino"
    ],
    "file": "canciones/rio-manso.md",
    "content": "---\ntitle: \"Río manso\"\nartist: \"Cholo Aguirre\"\nkey: \"Gm\"\ncapo: 0\ntempo: 100\ntags: [\"folklore\", \"chamamé\", \"argentino\"]\n---\n\n## Intro\n[Gm] [Dm] [A7] [Dm] ([x] 2) [D]\n\nMirando correr el río, le dije casi en silencio,\n\n[A7] [D]\nVas a tener que andar mucho, para ganarle a mi sueño.\n\n[F#] [Bm] [A7] [D7]\nY sobre la arena fresca, la cabeza dibujé,\n\n[Gm] [Dm] [A7] [Dm]\nDe una pasión imposible, que me escribía de Santa Fe.\n\n[A7]\nMira qué cabeza loca, poner tus ojos en mí,\n\n[Dm]\nYo que siempre ando de paso, no podré hacerte feliz.\n\n[D7] [Gm]\nOlvídame te lo ruego, yo soy como el Paraná,\n\nQue sin detener su marcha, besa la playa y se va\n\n[Dm] [A7] [Dm]/[D7]\n[Gm] [Dm] [A7] [Dm]\nQue sin detener su marcha, besa la playa y se va.\n\n[Gm] [Dm] [A7] [Dm] ([x] 2)\n[D]\nFue una noche correntina, de aquellas que no se igualan,\n\n[A7] [D]\nEstaba la costanera, conversando con el agua.\n\n[F#] [Bm] [A7] [D7]\nEnero estaba fundiendo sobre el río su calor,\n\n[Gm] [Dm] [A7] [Dm]\nY junto al perfil querido, puso mi vena de verseador.\n\n[A7]\nMira qué cabeza loca, poner tus ojos en mí,\n\n[Dm]\nYo que siempre ando de paso, no podré hacerte feliz.\n\nOlvídame te lo ruego, yo soy como el Paraná,\n\n[D7] [Gm]\n[Dm] [A7] [Dm]/[D7]\nQue sin detener su marcha, besa la playa y se va\n\nQue sin detener su marcha, besa la playa y se va. (BIS)\n\n[Gm] [Dm] [A7] [Dm]\n"
  },
  {
    "id": "rocio",
    "title": "Rocío",
    "artist": "Rocío Jurado",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "copla",
      "andaluz",
      "clásico"
    ],
    "file": "canciones/rocio.md",
    "content": "---\ntitle: \"Rocío\"\nartist: \"Rocío Jurado\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"copla\", \"andaluz\", \"clásico\"]\n---\n\n## Intro\n[Am]-[E]-[Am](2)[A7]_ [Dm] [E] [Am] /[G] [C](2)[E] [Am] (2)\n\nDe Sevilla un patio,\n\nsalpicao\n\nde flores\nUna fuente en medio con un surtidor\nRosas y claveles de todos colores\nQue no los soñara mejor ni un pintor\n-Junto a la cancela de hierro\n\nforjao\n\nHay una mocita de tez\n\nbronceá\n\nY juntito a ella, moreno y\n\nplantao\n\n,\nUn mozo\n\nencendío\n\n, que hablándole está\n\n[Am] [E] [F] [E7]\nLa luna, rosa de plata, el patio bañao de luz,\nMuy cerquita de su novia\nDijo el mocito andaluz:\n\n[Am] [E7] [Am](2) -[A7] [Dm] [G7] [C] [E7] [Am]\nRocío, ¡ay mi Rocío!, manojito de claveles\nCapullitos\n\nflorecíos\n\n,\nDe pensar en tus quereres\nVoy a perder el\n\nsentío\n\n,\nPorque te quiero mi\n\n,\nComo nadie te ha\n\nquerío\n\nvía\n\n¡Ay Rocío, ay mi Rocío!\n\n[Am]-[E]-[Am](2)[A7]_ [Dm] [E] [Am] /[G] [C](2)[E] [Am] (2)\nAhora es otro el patio\n\nsalpicao\n\nde rosas\nPatio de las monjas de la caridad\nDonde hasta la fuente llora silenciosa\nLa canción amarga de su soledad\n-regando las flores hay una monjita\nQue como ellas tiene carita de flor\nY que se parece a aquella mocita\nQue tras la cancela le hablaban de amor\n\n[Am] [E] [F] [E7]\nLa luna, rosa de plata, el patio\n\nde luz\nMas ya no suena la copla\nDe aquel mocito andaluz\n\nbañao\n\n[Am] [E7] [Am] [E7]-[Am] -[A7] [Dm] [G7] [C] [E7] [Am]\nRocío, ¡ay mi Rocío!, manojito de claveles\nCapullitos\n\nflorecíos\n\n,\nDe pensar en tus quereres\nVoy a perder el\n\nsentío\n"
  },
  {
    "id": "row-your-boat",
    "title": "Row, Row, Row Your Boat",
    "artist": "Popular",
    "key": "A7",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "popular",
      "infantil",
      "tradicional",
      "inglés"
    ],
    "file": "canciones/row-your-boat.md",
    "content": "---\ntitle: \"Row, Row, Row Your Boat\"\nartist: \"Popular\"\nkey: \"A7\"\ncapo: 0\ntempo: 100\ntags: [\"popular\", \"infantil\", \"tradicional\", \"inglés\"]\n---\n\n## Verso 1\n-[A7]  [D]\nRow, row your boat\nGently down the stream\nMerrily, Merrily, Merrily, Merrily\nLife is but a dream\n"
  },
  {
    "id": "ruido",
    "title": "Ruido",
    "artist": "Joaquín Sabina",
    "key": "Dm",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "canción de autor",
      "balada",
      "español"
    ],
    "file": "canciones/ruido.md",
    "content": "---\ntitle: \"Ruido\"\nartist: \"Joaquín Sabina\"\nkey: \"Dm\"\ncapo: 0\ntempo: 100\ntags: [\"canción de autor\", \"balada\", \"español\"]\n---\n\n## Verso 1\n(J. Sabina\n\n)\n\n[Dm] [Am](2) [E7] [Am] (2) (bis) [F] [G] [Am]\nElla le pidió que la llevara al fin del mundo,\nÉl puso a su nombre todas las olas del mar,\nSe miraron un segundo, como dos desconocidos.\n-Todas las ciudades eran pocas a sus ojos,\nElla quiso barcos y él no supo qué pescar,\nY al final números rojos, en la cuenta del olvido,\nY hubo tanto ruido, que al final llegó el final.\n\n[Dm] [A7]/ [B] [G7]/ [F] // [E7] [Am] (2) [E7]\nMucho, mucho ruido, ruido de ventanas,\nNidos de manzanas que se acaban por pudrir\nMucho, mucho ruido. tanto, tanto ruido,\nTanto ruido y al final, por fin el fin.\nTanto ruido y al final........\n\n[Dm] [Am] (2) [E7] [Am] (2) (bis) [F] [G] [Am]\nHubo un accidente, se perdieron las postales\nQuiso carnavales y encontró fatalidad,\nPorque todos los finales son el mismo repetido\nY con tanto ruido no escucharon el final.\nDescubrieron que los besos, ¡no sabían a nada!\nHubo una epidemia de tristeza en la ciudad,\nSe borraron las pisadas, se apagaron los latidos,\nY con tanto ruido, no se oyó el ruido del mar.\n\n[Dm] [A7]/ [B] [G7]/ [F] // [E7] [Am] (2) [E7]\nMucho, mucho ruido, ruido de tijeras,\nRuido de escaleras, que se acaban por bajar, mucho, mucho ruido, tanto, tanto ruido…\nTanto ruido y al final *\n\nRuido de tenazas\n\nTanto *ruido y al final\n\nRuido de estaciones, Ruido de amenazas,\n\nTanto *ruido y al final, la soledad\n\nRuido de escorpiones. Tanto, tanto ruido\n\nRuido de abogados, ruido compartido, ruido envenenado,\n\ndemasiado ruido.\nRuido platos rotos, ruido años perdidos, ruido viejas fotos, ruido\n\nempedernido\n-Ruido de cristales, ruido de gemidos, ruidos animales, contagioso ruido.\n\nentrometido, Ruido escandaloso.\n\nRuido mentiroso, ruido\n\nSilencioso ruido.\n-Ruido acomplejado, ruido introvertido, ruido del pasado, descastado ruido\nRuido de conjuros, ruido malnacido.\n\nRuido tan oscuro, puro y duro ruido.\n\n-Ruido qué me has hecho, ruido yo no he sido, ruido insatisfecho.\n\nRuido a qué has venido\nRuido como sables. Ruido enloquecido. Ruido intolerable. Ruido incomprendido.\n\n-Ruido de frenazos. Ruido sin sentido. Ruido de arañazos… Ruido, ruido… ruido.\n\n(tanto, tanto, tanto, demasiado ruido\n\n)\n\nRuiiiiiiido\n\n(tanto, tanto, tanto, tanto, tanto ruido\n\n)\n"
  },
  {
    "id": "sabor-de-amor",
    "title": "Sabor de amor",
    "artist": "Danza Invisible",
    "key": "G",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop rock",
      "80s",
      "español"
    ],
    "file": "canciones/sabor-de-amor.md",
    "content": "---\ntitle: \"Sabor de amor\"\nartist: \"Danza Invisible\"\nkey: \"G\"\ncapo: 0\ntempo: 100\ntags: [\"pop rock\", \"80s\", \"español\"]\n---\n\n## Verso 1\n> OR: LA\n[G] [D]\nSabor de amor, todo me sabe a ti\n\n[C]\nComerte sería un placer,\n\nPorque nada me gusta más que tú\n\n[D] [G]\nBoca de piñón, bésame con frenesí\n\n[G] [D]\n[C] [D] [G]\nBesarte es como comer palomitas de maíz\n\n[G] [D]\nCorazón de melón, Venus salida del mar\n\nDel negro de un mejillón\n\n[C]\nSon tus ojos en su punto de sal\n\n[D] [G]\nSabor de amor, tu olor me da hambre,\n\n[Em] [C]\n[Am] [D]\nSi no estás mi amor, muero de sed\n\n[G] [C] [Em] [C]\nLabios de fresa sabor de amor\n\n[G] [C] [G] [D]\nPulpa de la fruta de la pasión (3)\n\n[C] [G]\nTodo me sabe a ti, comerte sería un placer\n\n[D] [C]\nEs el sabor de tu amor\n\n[D] [G]\nPorque nada me gusta más que tú\n\n[G] [Bm]\nBoca de piñón, bésame con frenesí\n\n[Em]\n[C] [D] [G]\nBesarte es como comer\n\nNaranjas en agosto y uvas en abril\n\n[Em] [C] [G]\nSabor de amor, espuma de mar\n\nPiel de melocotón, orgía de palabras\n\n[Am]\nSabor de amor (BIS)\nLabios de fresa sabor de amor\nPulpa de la fruta de la pasión (4)\nEs el sabor de tu amor\n\n[D]\n[Dm] [Am] [G] [F] [E] [Am]\nOh, oh, oh, oh, oh\n\n(4) que siempre te cuentan\n"
  },
  {
    "id": "sailing",
    "title": "Sailing",
    "artist": "Rod Stewart",
    "key": "C",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rock",
      "balada",
      "70s",
      "classic",
      "inglés"
    ],
    "file": "canciones/sailing.md",
    "content": "---\ntitle: \"Sailing\"\nartist: \"Rod Stewart\"\nkey: \"C\"\ncapo: 0\ntempo: 100\ntags: [\"rock\", \"balada\", \"70s\", \"classic\", \"inglés\"]\n---\n\n## Intro\n[C] [Am] [F] [C] [D] [Am] [Dm] [C] [G]\n\n## Verso 1\nI am sailing (2) home again, ‘cross the sea\nI am sailing stormy waters, to be near you, to be free\n\nI am flying, I am flying like a bird ‘cross the sky\nI am flying passing high clouds to be with you, to be free\n\nCan you help me? (2)\nThrough the dark night, faraway\nI am dying, for ever crying\nTo be with you, who can say?\n"
  },
  {
    "id": "scarborough-fair",
    "title": "Scarborough Fair / Canticle",
    "artist": "Simon & Garfunkel",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "folk",
      "classic",
      "60s",
      "balada",
      "inglés"
    ],
    "file": "canciones/scarborough-fair.md",
    "content": "---\ntitle: \"Scarborough Fair / Canticle\"\nartist: \"Simon & Garfunkel\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"folk\", \"classic\", \"60s\", \"balada\", \"inglés\"]\n---\n\n## Intro\n[Am] [G] [Am]/ [C] [Am] [C] [D] [Am]/_ [C] [Bm]-[Am]-[G]/[Am] [G] [Am]\n\n## Verso 1\nAre you going to Scarborough Fair?\nParsley, sage, rosemary, and thyme\nRemember me to one who lives there\nShe once was a true love of mine\n\n[Am] [G] [Am]/ [C] [Am] [C] [D] [Am]/_ [C] [Bm] [Am]-[G]/[Am] [G] [Am]\nTell_her to make me a cambric shirt\n(On the side of a hill in the deep forest green)\nParsley, sage, rosemary, and thyme\n(Tracing a sparrow on snow-crested ground)\nWithout no seams, nor needlework\n(Blankets and bedclothes the child of the mountain)\nThen, she'll be a true love of mine\n(Sleeps unaware of the clarion call)\n\n[Am] [G] [Am]/ [C] [Am] [C] [D] [Am]/_ [C] [Bm] [Am]-[G]/[Am] [G] [Am]\nTell her to find me an acre of land\n(On the side of a hill, a sprinkling of leaves)\nParsley, sage, rosemary, and thyme\n(Washes the ground with so many tears)\nBetween the salt water and the sea strand\n(A soldier cleans and polishes a gun)\nThen she'll be a true love of mine\n(mine)\n\n[Am] [G] [Am]/ [C] [Am] [C] [D] [Am]/_ [C] [Bm] [Am]-[G]/[Am] [G] [Am]\nTell her to reap it in a sickle of leather\n(War bellows, blazing in scarlet battalions)\nParsley, sage, rosemary, and thyme\n(Generals order their soldiers to kill)\nAnd to gather it all in a bunch of heather\n(And to fight for a cause they've long ago forgotten)\nThen she'll be a true love of mine\n\n[Am] [G] [Am]/ [C] [Am] [C] [D] [Am]/_ [C] [Bm] [Am]-[G]/[Am] [G] [Am]\nAre you going to Scarborough Fair?\nParsley, sage, rosemary, and thyme\nRemember me to one who lives there\nShe once was a true love of mine\n"
  },
  {
    "id": "se-me-va",
    "title": "Se me va",
    "artist": "Manuel Alejandro",
    "key": "D",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "balada",
      "rumba",
      "español"
    ],
    "file": "canciones/se-me-va.md",
    "content": "---\ntitle: \"Se me va\"\nartist: \"Manuel Alejandro\"\nkey: \"D\"\ncapo: 0\ntempo: 100\ntags: [\"balada\", \"rumba\", \"español\"]\n---\n\n## Intro\n[D] [B7]-[Em] [A7] [D] (2)\n\n-Se me va, este amor que he ido amasando, con mis manos, se me va;\nSe me va, lo que tanto tiempo, yo he querido tanto, se me va.\n-No hay razón, que yo pierda en un momento lo que tanto me costó,\nNo hay razón, que se vaya de mis manos, y en un soplo tanto amor.\n-Y se me va, como el agua que se escurre entre mis manos,\nY se me va, y como el aire que no puedes sujetarlo,\nComo el tiempo que implacable va pasando, como el humo, tu cariño, se me va.\n-Ay se me va, y no puedo ya luchar por retenerlo,\nEste amor, que en realidad se ha ido muriendo, y que por eso de mis manos se me va (bis)\n\nTú me camelas\n"
  },
  {
    "id": "silencio-bolero",
    "title": "Silencio",
    "artist": "Rafael Hernández",
    "key": "A7",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "bolero",
      "clásico",
      "latino"
    ],
    "file": "canciones/silencio-bolero.md",
    "content": "---\ntitle: \"Silencio\"\nartist: \"Rafael Hernández\"\nkey: \"A7\"\ncapo: 0\ntempo: 100\ntags: [\"bolero\", \"clásico\", \"latino\"]\n---\n\n## Intro\n[A7] [Dm] (2) [D7] [Gm] [Dm] [A7] [Dm] [Dm] [A7] [Dm] [A7] [Dm]\n\nDuermen en mi jardín, las blancas azucenas, los nardos y las rosas.\n\n[D7] [Gm] [Dm] [A7] [Dm]\nMi alma, tan triste y pesarosa que a las flores quiere ocultar su amargo dolor.\n\n[C] [A#] [F] [A7] [Gm] [Dm]\nYo no quiero que las flores sepan, los tormentos que me da la vida.\n\n[C] [A#] [F] [Dm] [Gm] [A7]\nSi supieran lo que estoy sufriendo, de pena morirían también.\n\n> (A.C. 1º)\n[D] [Em] [A7] [D]\nSilencio que están durmiendo, los nardos y las azucenas,\n\n[F#7] [G] [D] [B7] [Em] [A7] [D]\nNo quiero que sepan mis penas, porque si me ven llorando morirán (2)\n\n[F] [Gm] [C] [F]\nSilencio que están durmiendo, los nardos y las azucenas,\n\n[A7] [A#7] [F] [D7] [Gm] [C] [F] [A#m] [F] [Fdis]\nNo quiero que sepan mis penas, porque si me ven llorando morirán, morira a án\n\nDormido entre rosas\n"
  },
  {
    "id": "sin-documentos",
    "title": "Sin Documentos",
    "artist": "Los Rodríguez",
    "key": "Am",
    "capo": 0,
    "tempo": 130,
    "tags": [
      "rock",
      "rumba",
      "español",
      "90s"
    ],
    "file": "canciones/sin-documentos.md",
    "content": "---\ntitle: \"Sin Documentos\"\nartist: \"Los Rodríguez\"\nkey: \"Am\"\ncapo: 0\ntempo: 130\ntags: [\"rock\", \"rumba\", \"español\", \"90s\"]\n---\n\n// Tono original en Gm (cejilla en traste 3 para Gm, o tocar en Am para principiantes)\n## Intro\n[Am] [E7] [F] [E7]\n[Am] [E7] [F] [E7]\n\n## Verso 1\n[Am] Déjame atravesar el viento [E7] sin documentos,\n[F] Que lo haré por el tiempo que tu[E7]vimos...\n[Am] Porque no queda salida, porque pa[E7]reces dormida,\n[F] Porque buscando tu sonrisa estaría [E7] toda mi vida.\n\n## Pre-Coro\n[F] Quiero ser el único que te muerda en la [E7] boca,\n[F] Quiero saber que la vida contigo no va a termi[E7]nar.\n\n## Verso 2\n[Am] Déjame que te cierre esta noche los [E7] ojos,\n[F] Y mañana vendré con un cigarro a la [E7] cama,\n[Am] Porque no tengo más inten[E7]ciones\n[F] Que seguir bebiendo de esta copa que no está tan [E7] rota.\n\n## Pre-Coro\n[F] Quiero ser el único que te muerda en la [E7] boca,\n[F] Quiero saber que la vida contigo no va a termi[E7]nar.\n\n## Coro\n[Am] ¡Porque sí, porque sí, porque sí!\nPorque en esta [E7] vida\nNo quiero pasar más de un [F] día entero sin [E7] ti, oh no.\n[Am] ¡Porque sí, porque sí, porque sí!\nPorque mientras te espero [E7] por ti me muero\nY no [F] quiero seguir a[E7]sí.\n\n## Verso 3\n[Am] Déjame atravesar el viento [E7] sin documentos,\n[F] Que lo haré por el tiempo que tu[E7]vimos...\n[Am] Porque no queda salida, porque pa[E7]reces dormida,\n[F] Porque buscando tu sonrisa estaría [E7] toda mi vida.\n\n## Coro Final\n[Am] ¡Porque sí, porque sí, porque sí!\nPorque en esta [E7] vida\nNo quiero pasar más de un [F] día entero sin [E7] ti.\n[Am] ¡Porque sí, porque sí, porque sí!\nPorque mientras te espero [E7] por ti me muero\nY no [F] quiero seguir a[E7]sí. [Am]\n"
  },
  {
    "id": "sofia",
    "title": "Sofía",
    "artist": "Álvaro Soler",
    "key": "Am",
    "capo": 2,
    "tempo": 100,
    "tags": [
      "pop latino",
      "alegre",
      "verano"
    ],
    "file": "canciones/sofia.md",
    "content": "---\ntitle: \"Sofía\"\nartist: \"Álvaro Soler\"\nkey: \"Am\"\ncapo: 2\ntempo: 100\ntags: [\"pop latino\", \"alegre\", \"verano\"]\n---\n\n## Intro\n[#2]\n\n[Am] [C] [G] [F] [Am] [C] [G] [F] (2) [F] [Am] [G] (2) [E]\n> silbido\nSueño cuando era pequeño\nSin preocupación en el corazón\n-Sigo viendo aquel momento\nSe desvaneció, desapareció\nYa no te creo, ya no te deseo, eh oh\nSolo te dejo, solo te deseo, eh oh\n\n[F] [C] [G] [Dm] (4) [Am]\n-Mira, Sofia\nSin tu mirada, sigo, sin tu mirada, sigo\n-Dime Sofia, cómo te mira\nDime cómo te mira, dime\n-Sé que no, sé que no, sé que solo,\nSé que ya no soy oy oy oy. Mira, Sofia\nSin tu mirada, sigo, sin tu mirada, Sofia\n\n[Am] [C] [G] [F] (2)\n[Am] [C] [G] [F] [F] [Am] [G]/ [F] [Am] [G] [E]\nDices que éramos felices\nTodo ya pasó, todo ya pasó.\nSé que te corté las alas\nÉl te hizo volar, él te hizo soñar\nYa no te creo, ya no te deseo, eh oh\nSolo te dejo, solo te deseo, eh oh\n\n[F] [C] [G] [Dm] (4) [Am]\nMira, Sofia\nSin tu mirada, sigo, sin tu mirada, sigo\nDime Sofia, cómo te mira\nDime cómo te mira, dime\nSé que no, sé que no, sé que solo,\nSé que ya no soy oy oy oy. Mira, Sofia\nSin tu mirada, sigo, sin tu mirada, Sofia\n\n[Am] [C] [G] [F] (3) [Am]\nY, ¿por qué no me dices la verdad?\nSigo sin tu mirada, Sofia\nY, ¿por qué no me dices la verdad?\n\n[F] [C] [G] [Dm] (4) [Am]\nMira, Sofia\n\n> (1º a capela)\nSin tu mirada, sigo, sin tu mirada, sigo\nDime Sofia, cómo te mira\nDime cómo te mira, dime\n\n-Sé que no, sé que no, sé que solo,\nSé que ya no soy oy oy oy. Mira, Sofia\nSin tu mirada, sigo, sin tu mirada, Sofia\n"
  },
  {
    "id": "soldadito-marinero",
    "title": "Soldadito Marinero",
    "artist": "Fito & Fitipaldis",
    "key": "D",
    "capo": 0,
    "tempo": 104,
    "tags": [
      "rock",
      "pop",
      "español",
      "2000s"
    ],
    "file": "canciones/soldadito-marinero.md",
    "content": "---\ntitle: \"Soldadito Marinero\"\nartist: \"Fito & Fitipaldis\"\nkey: \"D\"\ncapo: 0\ntempo: 104\ntags: [\"rock\", \"pop\", \"español\", \"2000s\"]\n---\n\n## Intro\n[G] [D] [D] [A]\n[G] [D] [D] [A] [D]\n\n## Verso 1\n[A] Él camina despacito [G] que las prisas no son [D] buenas,\nEn su brazo dobladita [D] con cuidado la cha[A]queta.\nLuego pasa por las [G] calles donde los chavales [D] juegan,\nÉl también quiso ser [D] niño pero [A] le pilló la [D] guerra.\n\n## Coro\n[G] Soldadito marinero cono[D]ciste a una sirena\nDe [Bm] esas que dicen \"te quiero\" si ven la car[A]tera llena.\n[G] Escogiste a la más guapa y a la [D] menos buena,\nSin sa[D]ber cómo ha venido te ha co[A]gido la tor[D]menta.\n\n## Verso 2\n[A] Él quería cruzar los [G] mares y olvidar a su si[D]rena,\nLa verdad no fue difícil [D] cuando conoció a Ma[A]riela.\nQue tenía los ojos [G] verdes y un negocio entre las [D] piernas,\n¡Hay que ver qué punte[D]ría, no te [A] arrimas a una [D] buena!\n\n## Coro\n[G] Soldadito marinero cono[D]ciste a una sirena\nDe [Bm] esas que dicen \"te quiero\" si ven la car[A]tera llena.\n[G] Escogiste a la más guapa y a la [D] menos buena,\nSin sa[D]ber cómo ha venido te ha co[A]gido la tor[D]menta.\n\n## Puente\n[G] [D] [A] [Bm]\n[G] [D] [D] [A] [D]\n\n## Outro\n[G] Después de un invierno [D] malo,\n[A] Una mala prima[Bm]vera,\nDime por qué estás bus[G]cando\nUna lágrima en la [D] arena.\n[G] Después de un invierno [D] malo,\n[A] Una mala prima[Bm]vera,\nDime por qué estás bus[G]cando\nUna lágrima en la [D] arena...\n"
  },
  {
    "id": "solo-le-pido-a-dios",
    "title": "Solo le pido a Dios",
    "artist": "León Gieco",
    "key": "C",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "folk",
      "canción protesta",
      "clásico"
    ],
    "file": "canciones/solo-le-pido-a-dios.md",
    "content": "---\ntitle: \"Solo le pido a Dios\"\nartist: \"León Gieco\"\nkey: \"C\"\ncapo: 0\ntempo: 100\ntags: [\"folk\", \"canción protesta\", \"clásico\"]\n---\n\n## Intro\n[C] [G] [Am]/[F] [Em] [Dm]/[Am] [Em] [G]/[F] [Em] [Am]\n\nSolo le pido a Dios que el dolor no me sea indiferente\nQue la reseca muerte no me encuentre, vacío y solo sin haber hecho lo suficiente\n-Solo le pido a Dios que lo injusto no me sea indiferente\nQue no me abofeteen la otra mejilla después de que una garra me arañó esta suerte\n\nSolo le pido a Dios que la guerra no me sea indiferente\n/:Es un monstruo grande y pisa fuerte toda la pobre inocencia de la gente:/\n\n[C] [G] [Am]/[F] [Em] [Dm]/[Am] [Em] [G]/[F] [Em] [Am]\nSolo le pido a Dios que el engaño no me sea indiferente\nSi un traidor puede más que unos cuantos que esos cuantos no lo olviden fácilmente\nSolo le pido a Dios, que el futuro no me sea indiferente\nDesahuciado está el que tiene marchar a vivir una cultura diferente\n\nSolo le pido a Dios que la guerra no me sea indiferente\n/:Es un monstruo grande y pisa fuerte toda la pobre inocencia de la gente:/\n"
  },
  {
    "id": "solo-pienso-en-ti",
    "title": "Solo pienso en ti",
    "artist": "Víctor Manuel",
    "key": "D",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "canción de autor",
      "balada",
      "clásico"
    ],
    "file": "canciones/solo-pienso-en-ti.md",
    "content": "---\ntitle: \"Solo pienso en ti\"\nartist: \"Víctor Manuel\"\nkey: \"D\"\ncapo: 0\ntempo: 100\ntags: [\"canción de autor\", \"balada\", \"clásico\"]\n---\n\n## Intro\n[D] [A] [Gmaj7] [A] [Bm] [G]-[A]/ [D] [A] [G] [E7] [A] [F] [C] [A#] [Dm] [F]/ [D] [Gm]-[A#]-[C] [G]\n\nElla fue a nacer en una fría sala de hospital\nEspaña camisa blanca de mi esperanza\nCuando vio la luz su frente\nReseca historia que nos abrasa\nSe quebró como cristal.\nCon acercarse sólo a mirarla.\n\n[Em7] [A] [D] [Gmaj7] [Bm]\nPorque entre los dedos a su padre\nComo un pez se le escurrió...\n-Paloma buscando cielos más estrellados\nDonde entendernos sin destrozarnos\nDonde sentarnos y conversar\n\n[D] [A] [Gmaj7]/ [A] [D] -[G]-[A]\nHace un mes cumplió los veintiséis,\nSolo pienso en ti\n\nHey, solo pienso en ti.\n\n[D] [A] [D]\n[Em] [A] [D] ([Gmaj7]-[A]-[G]/[Bm]) (2)\nJuntos de la mano se les ve por el jardín.\nNo puede haber nadie\nEn este mundo tan feliz\n\n[Gmaj] 7 [A] [D]\nHey, solo pienso en ti\n\n[D] [A] [Gmaj7] [A] [Bm] [G]-[A]/ [D] [A] [G] [E7] [A]\nÉl nació de pie,\nLe fueron a parir entre algodón,\nSu padre pensó que aquello\nEra un castigo del señor\n\n[Em7] [A] [D] [Gmaj7] [Bm]\nLe buscó un lugar para olvidarlo\nY siendo niño lo internó.\nPronto cumplirá los treinta y seis,\nSolo pienso en ti\n\n[D] [A] [Gmaj7] [A] [Bm] [G]-[A]/ [D] [A] [G] [E7] [A]\n[Em7] [A] [D] [Gmaj7] [Bm]\nElla le regala una flor\nY él le dibuja en un papel\nAlgo parecido a un corazón,\nSolo pienso en ti.\n"
  },
  {
    "id": "solo-si-es-contigo",
    "title": "Solo si es contigo",
    "artist": "Bombai & Bebe",
    "key": "G",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop",
      "ukelele",
      "español"
    ],
    "file": "canciones/solo-si-es-contigo.md",
    "content": "---\ntitle: \"Solo si es contigo\"\nartist: \"Bombai & Bebe\"\nkey: \"G\"\ncapo: 0\ntempo: 100\ntags: [\"pop\", \"ukelele\", \"español\"]\n---\n\n## Intro\n[G] [D] /[Em] [Bm7] /[G] [D] [C] [D] (2)\n\nTú me haces diferente simplemente\ncon el solo hecho de existir.\n\nCambiaría lo que fuera, si hace falta\nsolamente por verte feliz\n\n-Tanto tiempo esperando una promesa,\nUna caricia, una señal.\nFormas parte de este sueño y yo contigo\nLlegaría hasta el final.\n\nTe juro que, nada puede ir mejor, solo si es contigo\nporque esta vida me lo enseñó, ya ves te necesito.\n\n_[C] [D] (2) [D7]\n-Contigo,\n\nrecorrería el mundo entero contigo\n\n[G] [D] [Em] [C] [D] (2)\nme pasaría todo el tiempo mirando el firmamento\nY con\n\nSolo si es contigo,\n\ntus dedos tapando el sol.\n\nme perdería en una isla contigo\n\ncaminaría de tu mano y ahora que te tengo al lado\n\nTener bien llenito el corazón\nDebería estar prohibida tu mirada y tu forma de caminar\nHas logrado que mi cuerpo y mi mente\nahora vayan al mismo compás.\nYa no existe en este mundo la manera\nPara separarme de ti, todo es bueno y es perfecto,\nClaro, si te quedas junto a mí\n\n_[C] [D] (2) [D7]\nTe juro que, nada puede ir mejor, solo si es contigo\nporque esta vida me lo enseñó, ya ves te necesito.\n\nPorque nada valgo,\nPorque nada tengo,\n\n[G] [D] [Em] [C] [D] (2) [G] [D] [Em] -[D]\nSi no tengo lo mejor:\n\n.\nme pasaría todo el tiempo mirando el firmamento\nY con\n\ntus dedos tapando el sol.\n\nSolo si es contigo,\n\nme perdería en una isla contigo\n\ncaminaría de tu mano y ahora que te tengo al lado\n\nSolo si es contigo (2)\n\nme siento mucho mejor.\n\n[Em] [D] [G] [Am7] [C] [Am7] [D]\nY ahora estoy debiéndote la vida,\nPasando desapercibida\nMi manera de sufrir, porque contigo soy feliz\n\n[G] [D] [Em] [C] [D](5) -[G]\nContigo,\n\nrecorrería el mundo entero contigo\n\nme pasaría todo el tiempo mirando el firmamento\nY con\n\ntus dedos tapando el sol.\n\nSolo si es contigo,\n\nme perdería en una isla contigo\n\ncaminaría de tu mano y ahora que te tengo al lado\n\nPorque nada valgo…\nPor eso yo quiero...\nPorque nada valgo…\nVen amor, me siento débil…\n"
  },
  {
    "id": "sombras",
    "title": "Sombras",
    "artist": "Rosario Sansores",
    "key": "Dm",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pasillo",
      "bolero",
      "clásico"
    ],
    "file": "canciones/sombras.md",
    "content": "---\ntitle: \"Sombras\"\nartist: \"Rosario Sansores\"\nkey: \"Dm\"\ncapo: 0\ntempo: 100\ntags: [\"pasillo\", \"bolero\", \"clásico\"]\n---\n\n## Intro\n[Dm] [A7]\n\nCuando tú te hayas ido, me envolverán las sombras.\n\n[Dm]\nCuando tú te hayas ido, con mi dolor a solas,\n\n[D7] [Gm] [Dm]\nEvocaré este idilio, con sus azules horas.\n\nCuando tú te hayas ido, me envolverán las sombras.\n\n[A7] [Dm]\n[A7]\n[Dm]\nY en la penumbra vaga, de la pequeña alcoba\n\ndonde una tibia tarde, te acariciaba toda\n\n[C7] [F]\nTe buscarán mis brazos, te besará mi boca\n\n[A7] [Dm]\n[D7] [Gm] [C7] [F]\ny aspiraré en el aire, aquel olor a rosa.\n\nCuando tú te hayas ido, me envolverán las sombras.\n\n[A7]\n[Dm]\n[Dm] [A7]\nCuando llegue el olvido, marchitarán las rosas.\n\n[Dm]\nCuando llegue el olvido, mi verso se hará prosa,\n\nNo cantaré a tus ojos, ni cantaré a tu boca.\n\n[D7] [Gm.] [Dm]\n[A7] [Dm]\nCuando tú te hayas ido,\n\nte habrás ido\n\nen las sombras.\n\n[Dm]\n[A7]\nY en la penumbra vaga, de la pequeña alcoba\n\n[C7] [F]\ndonde una tibia tarde, te acariciaba toda\n\nTe buscarán mis brazos, te besará mi boca\n\n[A7] [Dm]\ny aspiraré en el aire, aquel olor a rosa.\n\n[Gm] [C7] [F]\nCuando tú te hayas ido,\n\n[A7]\n[Dm] [A7]-[Dm]\nte perderé\n\nen las sombras.\n"
  },
  {
    "id": "someone-like-you",
    "title": "Someone Like You",
    "artist": "Adele",
    "key": "G",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop",
      "balada",
      "2010s",
      "inglés"
    ],
    "file": "canciones/someone-like-you.md",
    "content": "---\ntitle: \"Someone Like You\"\nartist: \"Adele\"\nkey: \"G\"\ncapo: 0\ntempo: 100\ntags: [\"pop\", \"balada\", \"2010s\", \"inglés\"]\n---\n\n## Intro\n[G] [Bm] [Em] [C]\n\n## Verso 1\nI heard, that you're, settled down that you, found a girl and you're, married now\nI heard that your dreams came true, guess she gave you things, I didn't give to you\nOld friend, why are you so shy? Ain't like you to hold back or hide from the light\n\n[D] [Em] [C] (2)\nI hate to turn up out of the blue, uninvited, but I couldn't stay away, I couldn't fight it\nI had hoped you'd see my face, and that you'd be reminded that for me, it isn't over\n[G] [D] [Em] [C] (5)\nNever mind, I'll find someone like you, I wish nothing but the best for you, too\n\"Don't forget me, \" I beg. I remember, you said\n\"Sometimes it lasts in love, but sometimes it hurts instead\"(2)\n\n[G] [Bm] [Em] [C]\nYou know how the, time flies only, yesterday was the time of our lives\nWe were born and raised in a summer haze, bound by the surprise, of our glory days\n[D] [Em] [C] (2)/ [G] [D] [Em] [C] (5)\nI hate to turn up out of the blue, uninvited…\n\n[D] [Em] [C]/ [Am] [G] [C]\nNothing compares, no worries or cares\nRegrets and mistakes, they're memories made\nWho would have known how bittersweet this would taste?\n[G] [D] [Em] [C] (5)\nNever mind, I'll find someone like you… (2)\n"
  },
  {
    "id": "son-borinqueno",
    "title": "Son borinqueño",
    "artist": "Tuna de Cayey",
    "key": "G",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "puerto rico",
      "tuna",
      "popular"
    ],
    "file": "canciones/son-borinqueno.md",
    "content": "---\ntitle: \"Son borinqueño\"\nartist: \"Tuna de Cayey\"\nkey: \"G\"\ncapo: 0\ntempo: 100\ntags: [\"puerto rico\", \"tuna\", \"popular\"]\n---\n\n## Intro\n[G] [D] [Em] [Bm]/ [C] [G] [D7] [G] (2) [G] [D] [Em] [Bm]\n\nCanta mi pueblo, canta mi gente, canta en enero, canta en diciembre.\n\n[C] [G] [D7] [G]\n[G] [G]-[F#]-[F]-[E] [Am]\nSuenan, tamboriles y bongós, suenan las maracas y el tambor.\n\n[D7] [G] [E7] [Am]\nYaaa, va a empezar la fiesta, suena un loco la trompeta\n\n[D7] [G] [E7] [Am]\nbomba\n\nMúsica autóctona de Puerto Rico\n\nY María la pandereta. Nos ponemo’ a bailar\n\n[D7] [G]\nCuando Nano toca conga.\n\n[G] [D] [Em] [Bm]/ [C] [G] [D7] [G] (2)\n[G] [G]-[F#]-[F]-[E7] [Am]\nOye, que la fiesta ya empezó, unos invitados y otros no.\n\n[D7] [G] [E7] [Am]\nOye ya la algarabía, y la gente no se cansa\n\n[D7] [G] [E7] [Am]\nUn tipo pidió una danza, una señora, un danzón\n\ny un\n\nguaguancó\n\n.\n\nHombre que viste a la última moda.\n\nmamito\n\nun\n\n[D7] [G]\nTipo de rumba afrocubana.\n\nCanta mi pueblo, canta mi gente, canta en enero, canta en diciembre…\n\n[C]-[F]-[G] (2) [C] [F] [G] [C] [F] [G]\nSi no hubiera nacido en la tierra en que nací,\n\nEstaría arrepentido de no haber nacido aquí. (bis) ¡Por eso!\n\n[E7]\n[Am] [D7] [G]\n[G] [D] [Em] [Bm]/ [C] [G] [D7] [G] (2)\n,\n\nson…borinqueño\n"
  },
  {
    "id": "soy-rebelde",
    "title": "Soy rebelde",
    "artist": "Jeanette",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "balada",
      "pop",
      "70s",
      "clásico"
    ],
    "file": "canciones/soy-rebelde.md",
    "content": "---\ntitle: \"Soy rebelde\"\nartist: \"Jeanette\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"balada\", \"pop\", \"70s\", \"clásico\"]\n---\n\n## Verso 1\nY entonces fue, cuando te besé,\nDe tu mirar, yo me enamoré\n\n[Am] [G] [F] [E] (2)\nCon un sorbito de champán…\n\n[Am] [Dm] [G7] [C] [Am] [Dm] [E]\nYo soy rebelde\nPorque el mundo me ha hecho así,\nPorque nadie me ha tratado con amor,\nPorque nadie me ha querido nunca oír.\nYo soy rebelde porque siempre y sin razón\nMe negaron todo aquello que pedí,\nY me dieron solamente incomprensión\n\n[Am] [F] [G] -7 [C](2)\nYo quisiera ser como el niño aquel\nComo el hombre aquel que es feliz.\nY quisiera dar lo que hay en mí,\nTodo a cambio de una amistad.\n\n[Dm] [Am] [E] [Am] (2)\n"
  },
  {
    "id": "stand-by-me",
    "title": "Stand By Me",
    "artist": "Ben E. King",
    "key": "A",
    "capo": 2,
    "tempo": 118,
    "tags": [
      "classic",
      "soul",
      "english"
    ],
    "file": "canciones/stand-by-me.md",
    "content": "---\ntitle: \"Stand By Me\"\nartist: \"Ben E. King\"\nkey: \"A\"\ncapo: 2\ntempo: 118\ntags: [\"classic\", \"soul\", \"english\"]\n---\n\n## Intro\n[G] [Em] [C] [D] [G]\n\n## Verse 1\nWhen the [G] night has come\n[Em] And the land is dark\nAnd the [C] moon is the [D] only light we'll [G] see\nNo, I [G] won't be afraid\nOh, I [Em] won't be afraid\nJust as [C] long as you [D] stand, stand by [G] me\n\n## Chorus\nSo darling, darling, [G] stand by me\nOh, [Em] stand by me\nOh, [C] stand, [D] stand by me\n[G] Stand by me\n\n## Verse 2\nIf the [G] sky that we look upon\n[Em] Should tumble and fall\nOr the [C] mountain should [D] crumble to the [G] sea\nI won't [G] cry, I won't cry\nNo, I [Em] won't shed a tear\nJust as [C] long as you [D] stand, stand by [G] me\n\n## Chorus\nAnd darling, darling, [G] stand by me\nOh, [Em] stand by me\nOh, [C] stand now, [D] stand by me\n[G] Stand by me\n"
  },
  {
    "id": "strawberry-fields-forever",
    "title": "Strawberry Fields Forever",
    "artist": "The Beatles",
    "key": "G",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rock",
      "psychedelic",
      "60s",
      "classic",
      "inglés"
    ],
    "file": "canciones/strawberry-fields-forever.md",
    "content": "---\ntitle: \"Strawberry Fields Forever\"\nartist: \"The Beatles\"\nkey: \"G\"\ncapo: 0\ntempo: 100\ntags: [\"rock\", \"psychedelic\", \"60s\", \"classic\", \"inglés\"]\n---\n\n## Intro\n[G]_ [Dm7]/_ [E7] /[C] [E] /[Cmaj7] [G]\n\n## Verso 1\nLet me take you down ‘cause I’m going to\nStrawberry fields, nothing is real\nAnd nothing to get hang about:\nStrawberry fields forever\n\n[D] RE7m [D7]/ [Em] [C]/ [D]/ [G] [Em] /[C] [D] [C]  -[G]\nLiving is easy with eyes closed, misunderstanding all you see\nIt’s getting hard to be someone but it all works out,\nIt doesn’t matter much to me\n\n[G]_ [Dm7]/_ [E7] /[C] [E] /[Cmaj7] [G]\nLet me take you down ‘cause I’m going to\nStrawberry fields, nothing is real\nAnd nothing to get hang about:\nStrawberry fields forever\n\n[D] RE7m [D7]/ [Em] [C]/ [D]/ [G] [Em] /[C] [D] [C]  -[G]\nNo one I think is in my tree, I mean it must be high or low,\nThat is you know you can’t tune_in but it’s all right,\nThat is, I think it’s not too bad\n\n[G]_ [Dm7]/_ [E7] /[C] [E] /[Cmaj7] [G]\nLet me take you down ‘cause I’m going to\nStrawberry fields, nothing is real\nAnd nothing to get hang about:\nStrawberry fields forever\n\n[D] RE7m [D7]/ [Em] [C]/ [D]/ [G] [Em] /[C] [D] [C]  -[G]\nAlways know, sometimes think it’s me,\nBut you know and I know it’s a dream,\nI think I know of thee, ah yes but it’s all wrong,\nThat is I think I disagree\n"
  },
  {
    "id": "sufre-mamon",
    "title": "Devuélveme a mi chica (Sufre Mamón)",
    "artist": "Hombres G",
    "key": "Dm",
    "capo": 0,
    "tempo": 138,
    "tags": [
      "pop",
      "rock",
      "español",
      "80s"
    ],
    "file": "canciones/sufre-mamon.md",
    "content": "---\ntitle: \"Devuélveme a mi chica (Sufre Mamón)\"\nartist: \"Hombres G\"\nkey: \"Dm\"\ncapo: 0\ntempo: 138\ntags: [\"pop\", \"rock\", \"español\", \"80s\"]\n---\n\n## Intro\n[Dm] [Am] [Dm] [Am]\n\n## Verso 1\n[Dm] Estoy llorando en mi habita[Am]ción,\n[Dm] Todo se nubla a mi alrede[Am]dor.\n[Gm] Ella se fue con un niño [Dm] pijo,\nEn un Ford [Gm] Fiesta blanco y un jersey ama[Am]rillo.\n\n[Dm] Por el parque les veo pa[Am]sar,\n[Dm] Cuando se besan lo paso fa[Am]tal.\n[Gm] Voy a vengarme de ese ma[Dm]rica,\nVoy a lle[Gm]narle el cuello de polvos pica-[Am]pica.\n\n## Coro\n[Bb] Sufre, ma[F]món,\n[Bb] Devuélveme a mi [F] chica,\n[Bb] O te retorce[F]rás\n[G] Entre polvos pica-[C]pica.\n[Bb] Sufre, ma[F]món,\n[Bb] Devuélveme a mi [F] chica,\n[Bb] O te retorce[F]rás\n[G] Entre polvos pica-[C]pica.\n\n## Solo\n[Dm] [Am] [Dm] [Am]\n[Gm] [Dm] [Gm] [Am]\n\n## Verso 2\n[Dm] Le he quemado su jer[Am]sey,\n[Dm] Se ha comprado cinco o [Am] seis.\n[Gm] Voy a destrozarle el [Dm] coche,\nLo tengo prepa[Gm]rado, voy esta [Am] noche.\n\n[Dm] No te reirás nunca más de [Am] mí,\n[Dm] Lo siento, nene, vas a mo[Am]rir.\n[Gm] Tú me quitaste lo que más que[Dm]ría,\nY volverá con[Gm]migo, volverá algún [Am] día.\n\n## Coro Final\n[Bb] Sufre, ma[F]món,\n[Bb] Devuélveme a mi [F] chica,\n[Bb] O te retorce[F]rás\n[G] Entre polvos pica-[C]pica.\n[Bb] Sufre, ma[F]món,\n[Bb] Devuélveme a mi [F] chica,\n[Bb] O te retorce[F]rás\n[G] Entre polvos pica-[C]pica... [Dm]\n"
  },
  {
    "id": "sweet-dreams",
    "title": "Sweet Dreams (Are Made of This)",
    "artist": "Eurythmics",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "synth-pop",
      "80s",
      "classic",
      "inglés"
    ],
    "file": "canciones/sweet-dreams.md",
    "content": "---\ntitle: \"Sweet Dreams (Are Made of This)\"\nartist: \"Eurythmics\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"synth-pop\", \"80s\", \"classic\", \"inglés\"]\n---\n\n## Intro\n[Am] [F] [E]\n\n## Verso 1\nSweet dreams are made of this who am I to disagree?\nI traveled the world and the seven seas\nEverybody's looking for something\n\nSome of them want to use you. Some of them want to get used by you\nSome of them want to abuse you. Some of them want to be abused\n\nSweet dreams are made of this…\n\n[Am] [C] [Am]\nHold your head up. Keep your head up (movin' on)\nHold your head up (movin' on) (3) Keep your head up\n\nSome of them want to use you…\n\nSweet dreams are made of this…(4)\n"
  },
  {
    "id": "sweet-home-alabama",
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
    ],
    "file": "canciones/sweet-home-alabama.md",
    "content": "---\ntitle: \"Sweet Home Alabama\"\nartist: \"Lynyrd Skynyrd\"\nkey: \"D\"\ncapo: 0\ntempo: 98\ntags: [\"rock\", \"southern\", \"70s\", \"classic\", \"fácil\"]\n---\n\n// El legendario riff de 3 acordes: Re - Do - Sol (D - C - G)\n## Intro\n[D] [C] [G] (x4)\n\n## Verso 1\n[D] Big wheels [C] keep on [G] turning\n[D] Carry me [C] home to see my [G] kin\n[D] Singing [C] songs about the [G] Southland\n[D] I miss [C] Alabamy once [G] again and I think it's a sin, yes\n\n## Verso 2\n[D] Well, I heard Mister [C] Young sing a[G]bout her\n[D] Well, I heard ol' [C] Neil put her [G] down\n[D] Well, I hope Neil [C] Young will re[G]member\n[D] A southern man don't [C] need him around, [G] anyhow\n\n## Coro\n[D] Sweet [C] home [G] Alabama\n[D] Where the [C] skies are so [G] blue\n[D] Sweet [C] home [G] Alabama\n[D] Lord, I'm [C] coming home to [G] you\n\n## Verso 3\n[D] In Birmin[C]gham they love the [G] Governor (boo-boo-boo)\n[D] Now we all [C] did what we could [G] do\n[D] Now Water[C]gate does not [G] bother me\n[D] Does your [C] conscience bother [G] you? Tell the truth!\n\n## Coro\n[D] Sweet [C] home [G] Alabama\n[D] Where the [C] skies are so [G] blue\n[D] Sweet [C] home [G] Alabama\n[D] Lord, I'm [C] coming home to [G] you\n\n## Verso 4\n[D] Now Muscle [C] Shoals has got the [G] Swampers\n[D] And they've been known to [C] pick a song or [G] two (yes, they do)\n[D] Lord, they [C] get me off so [G] much\n[D] They pick me up when I'm [C] feeling blue, [G] now how 'bout you?\n\n## Coro Final\n[D] Sweet [C] home [G] Alabama\n[D] Where the [C] skies are so [G] blue\n[D] Sweet [C] home [G] Alabama\n[D] Lord, I'm [C] coming home to [G] you... [D] [C] [G]\n"
  },
  {
    "id": "te-estoy-amando-locamente",
    "title": "Te estoy amando locamente",
    "artist": "Las Grecas",
    "key": "E",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "flamenco rock",
      "rumba",
      "70s"
    ],
    "file": "canciones/te-estoy-amando-locamente.md",
    "content": "---\ntitle: \"Te estoy amando locamente\"\nartist: \"Las Grecas\"\nkey: \"E\"\ncapo: 0\ntempo: 100\ntags: [\"flamenco rock\", \"rumba\", \"70s\"]\n---\n\n## Verso 1\nTe estoy amando locamenti\n\n(\n\nLas Grecas)\n\n[E] [F] [Dm] [E] (2)\nTe estoy amando locamenti\nPero no sé como te lo voy a decir\nQuisiera que lo comprendieras\nY sin darte cuenta te alejas de mí\n\n[F] [E] (2) [Am] [G] [F] [E] (2)\nPrefiero no pensar, prefiero no sufrir\n-Lo que quiero es que me beses\nRecuerda que deseo tenerte muy cerca\nPero sin darte cuenta te alejas de mí (2)\n"
  },
  {
    "id": "te-estoy-queriendo-tanto",
    "title": "Te estoy queriendo tanto",
    "artist": "Siempre Así",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rumba",
      "español",
      "sevillana"
    ],
    "file": "canciones/te-estoy-queriendo-tanto.md",
    "content": "---\ntitle: \"Te estoy queriendo tanto\"\nartist: \"Siempre Así\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"rumba\", \"español\", \"sevillana\"]\n---\n\n## Verso 1\nTe estoy queriendo tanto que, no sé querer a nadie más\nTe estoy queriendo tanto que, no sé vivir si tú no estás\nlas noches y los días son, para quererte más y más\nTe estoy queriendo tanto que, te estoy acostumbrando mal\n\n[Am] [Dm] [G7] [C]/ [F] [E7] [Am]\n[Am] [Dm] [G7] [C]/ [F] [E7] [Am]\nTe estoy queriendo tanto que, no puedo ya vivir sin ti\nTe estoy queriendo tanto que, yo soy feliz si eres feliz\n¿Qué pasará ese día en que no sientas lo que sientes hoy\nQué pasará ese día en que no pueda darte lo que hoy te doy\n\nY es que el amor no puede estar por siempre a nuestro lado\nY es que el amor cambia su curso de año en año\nY es que el amor viene y se va como las golondrinas\nY hay que darle de beber, amor en cada esquina amor En cada esquina amor, en cada esquina.\n(bis)\n\n[Am] [A7] [Dm]/ [G7] [C] / [F] [E7] [Am] (2) [E7] [Am]\n"
  },
  {
    "id": "te-quiero-hombres-g",
    "title": "Te quiero",
    "artist": "Hombres G",
    "key": "C",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop rock",
      "80s",
      "balada"
    ],
    "file": "canciones/te-quiero-hombres-g.md",
    "content": "---\ntitle: \"Te quiero\"\nartist: \"Hombres G\"\nkey: \"C\"\ncapo: 0\ntempo: 100\ntags: [\"pop rock\", \"80s\", \"balada\"]\n---\n\n## Intro\n[C] [Am] [Em]/ [F] [G] [C] [G](2)\n\nNo, no, no me llores,\nNo me vayas a hacer llorar a mi\nDame, dame tu mano,\nInténtalo mi niña, quiero verte reír\n\n[C] [Am] (2) [C] [F] [Fm] [G] [C]\nAbrázame fuerte, ven corriendo a mí\nTe quiero, te quiero, te quiero\nY no hago otra cosa que pensar en ti\n\n[C] [Am] [Em]/ [F] [G] [C] [G](2)\nTú, que estás dormida,\nY yo te abrazo y siento que respiras\nSueño, con tu sonrisa,\nTe beso muy despacio en las mejillas\n\n[C] [Am] (2) [Cm] [Fm] [Fm] [Cm]-[Fm] [Gm] [Cm] [Am]\nNecesito verte, donde quiera que estés\nTe quiero, te quiero, te quiero\nY no hago otra cosa que pensar en ti\nSólo vivo y respiro para ti\n\n[F] [G] [C] [Am]/ [F] [G] [C] [Cm] [G]\nTe quiero, te quiero,\nTe quiero, te quiero\n\nAbrázame fuerte, ven corriendo a mí\nDéjame que te diga otra vez\nQue te quiero, te quiero\n"
  },
  {
    "id": "tears-in-heaven",
    "title": "Tears in Heaven",
    "artist": "Eric Clapton",
    "key": "A",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "acoustic",
      "balada",
      "90s",
      "classic",
      "inglés"
    ],
    "file": "canciones/tears-in-heaven.md",
    "content": "---\ntitle: \"Tears in Heaven\"\nartist: \"Eric Clapton\"\nkey: \"A\"\ncapo: 0\ntempo: 100\ntags: [\"acoustic\", \"balada\", \"90s\", \"classic\", \"inglés\"]\n---\n\n## Intro\n[A] [E] [F#m]  [D] [Bm] [E] (2)/ [F#m] [E] (2) [D] [E] -7 [A]\n\n## Verso 1\nWould you know my name if i saw you in heaven?\nWould it be the same if i saw you in heaven?\nI must be strong and carry on\n‘Cause i know I don’t belong, here in heaven\n\nWould you hold my hand if I saw you in heaven?\nWould you help me stand if I saw you in heaven?\nI’ll find my way through night and day\n‘Cause i know i just can’t stay here in heaven\n\n[A] [E] [F#m] [Bm] [E]\nTime can bring you down\nTime can bend your knees,\nTime can break your heart\nHave you begging please, (begging please)\nBeyond the door, there’s peace I’m sure\nAnd I know there’ll be no more tears in heaven\n\n[A] [E] [F#m]  [D] [Bm] [E] (2)/ [F#m] [E] (2) [D] [E] -7 [A]\nWould you know my name if i saw you in heaven?\nWould it be the same if i saw you in heaven?\nI must be strong and carry on\n‘Cause I know I don’t belong, here in heaven\n‘Cause I know I don’t belong, here in heaven\n"
  },
  {
    "id": "the-boxer",
    "title": "The Boxer",
    "artist": "Simon & Garfunkel",
    "key": "C",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "folk",
      "classic",
      "60s",
      "himno",
      "inglés"
    ],
    "file": "canciones/the-boxer.md",
    "content": "---\ntitle: \"The Boxer\"\nartist: \"Simon & Garfunkel\"\nkey: \"C\"\ncapo: 0\ntempo: 100\ntags: [\"folk\", \"classic\", \"60s\", \"himno\", \"inglés\"]\n---\n\n## Intro\n[C] [Am] [G] [G7] [C]/ [C] [Am] [G] [F]/ [C] [G7] [C]\n\n## Verso 1\nI am just a poor boy and my story’s seldom told\nI’ve squandered my resistance\nFor a pocketful of mumbles, such are promises\nAll lies and jest, still the man hears\nWhat he wants to hear\nAnd disregards the rest, hmmmm\n\n[C] [Am] /[G] [G7] [C]/ [C] [Am] [G] [F]/_[C] [G7] [C]\nWhen I left my home and my family, I was no more than a boy\nIn the company of strangers, in the quiet of the railway station, running scared\nLaying low, seeking out the poorer quarters,\nWhere the ragged people go, looking for the places only they would know\n\n[Am] [Em] [Am] [G] [C]\nLie la lie...\n\n[C] [Am] /[G] [G7] [C]/ [C] [Am] [G] [F]/_[C] [G7] [C]\nAsking only workman’s wages, I come looking for a job, but I get no offers\nJust a come on from the whores on 7th avenue, I do declare,\nThere were times, when I was so lonesome\nI took some comfort there\n\n[C] [Am] [G] [G7] [C]/ [C] [Am] [G] [F]/ [C] [G7] [C]\nAnd I’m laying out my winter clothes,\nWishing I was gone, going home\nWhere the New York city winters\nAren’t bleeding me, leading me, to go home\n\n[C] [Am] [G] [G7] [C]/ [C] [Am] [G] [F]/ [C] [G7] [C]\nIn the clearing stands a boxer, and a fighter by his trade\nand he carries the reminders of every glove\nThat laid him down or cut him til he cried out\nIn his anger and his shame,\nI am leaving, I am leaving,\nBut the fighter still remains, yes, he still remains\n\n[Am] [Em] [Am] [G] [C]\nLie la lie...\n"
  },
  {
    "id": "the-fool-on-the-hill",
    "title": "The Fool on the Hill",
    "artist": "The Beatles",
    "key": "C",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rock",
      "psychedelic",
      "60s",
      "classic",
      "inglés"
    ],
    "file": "canciones/the-fool-on-the-hill.md",
    "content": "---\ntitle: \"The Fool on the Hill\"\nartist: \"The Beatles\"\nkey: \"C\"\ncapo: 0\ntempo: 100\ntags: [\"rock\", \"psychedelic\", \"60s\", \"classic\", \"inglés\"]\n---\n\n## Intro\n[C] [F] (2) [Dm] [G] [C] [Am] [Dm] [G]\n\n## Verso 1\nDay after day alone on a hill , the man with the foolish grin\nIs keeping perfectly still,\nBut nobody wants to know him, they can see that he's just a fool\nAnd he never gives an answer.\n\n[Cm] [Fm] [Bb] [Cm]\nBut the fool on the hill  sees the sun going down\nAnd the eyes in his head  see the world spinning 'round.\n\n[C] [F] (2) [Dm] [G] [C] [Am] [Dm] [G]\nWell on the way head in a cloud, the man of a thousand voces\nTalking perfectly loud,\nBut nobody ever hears him, or the sound he appears to make\nAnd he never seems to notice\n\n[Dm] [G] [C] [Am] [Dm] [G]\nAnd nobody seems to like him, they can tell what he wants to do\nAnd he never shows his feelings.\n\n[C] [F] (2) [Dm] [G] [C] [Am] [Dm] [G]\nHe never listens to them, he knows that they're the fool\nThey don't like him.\n"
  },
  {
    "id": "the-house-of-the-rising-sun",
    "title": "The House of the Rising Sun",
    "artist": "The Animals",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "folk rock",
      "classic",
      "60s",
      "himno",
      "inglés"
    ],
    "file": "canciones/the-house-of-the-rising-sun.md",
    "content": "---\ntitle: \"The House of the Rising Sun\"\nartist: \"The Animals\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"folk rock\", \"classic\", \"60s\", \"himno\", \"inglés\"]\n---\n\n## Intro\n[Am] [C] [D] [F]/ [Am] [C] [E]/ [Am] [C] [D] [F]/ [Am] [E] [Am]\n\n## Verso 1\nThere is a house in New Orleans\nThey call the Rising Sun\nAnd it's been the ruin of many a poor boy\nAnd God, I know I'm one\n\nMy mother was a tailor\nShe sewed my new blue jeans\nMy father was a gamblin' man\nDown in New Orleans\n\nNow the only thing a gambler needs\nIs a suitcase and a trunk\nAnd the only time he'll be satisfied\nIs when he's on a trump\n\nOh, mother, tell your children\nNot to do what I have done\nSpend your lives in sin and misery\nIn the House of the Rising Sun\n\nWell, I got one foot on the platform\nThe other foot on the train\nI'm goin' back to New Orleans\nTo wear that ball and chain\n\nWell, there is a house in New Orleans\nThey call the Rising Sun\nAnd it's been the ruin of many a poor boy\nAnd God, I know I'm one.\n"
  },
  {
    "id": "thinking-out-loud",
    "title": "Thinking Out Loud",
    "artist": "Ed Sheeran",
    "key": "C",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop",
      "balada",
      "2010s",
      "inglés"
    ],
    "file": "canciones/thinking-out-loud.md",
    "content": "---\ntitle: \"Thinking Out Loud\"\nartist: \"Ed Sheeran\"\nkey: \"C\"\ncapo: 0\ntempo: 100\ntags: [\"pop\", \"balada\", \"2010s\", \"inglés\"]\n---\n\n## Intro\n[C] [F] [G]\n\n## Verso 1\nWhen your legs don't work like they used to, before\nAnd I can't sweep you off of your feet\nWill your mouth still remember the taste of my love?\nWill your eyes still smile from your cheeks?\n\nAnd darling I, will, be loving you 'til we're 70\nAnd baby, my, heart could still fall as, hard at 23, and I'm thinking 'bout how\n\n[Dm] [G] [C], [Dm] [G]/ [Dm] [G] [Am]/ [Dm] [G] [C]\nPeople fall in love in mysterious ways, maybe just the touch of a hand\nWell, me, I fall in love with you every single day\nAnd I just wanna tell you I am, so honey now\n\n[F] [G] [C] (3) [F] [G]\nTake me into your loving arms, kiss me under the light of a thousand stars\nPlace your head on my beating heart, I'm thinking out loud\n[Am] [G]  [F]     [C]    [Dm] [G] [C]\nThat maybe we found love right where we are\n\n[C] [F] [G]\nWhen my hair's all but gone and my memory fades\nAnd the crowds don't remember my name\nWhen my hands, don't play the strings the same way\nI know you will still love me the same\n\n-'Cause honey your soul could never grow old, it's evergreen\nAnd baby your, smile's, forever in my mind and memory. I'm thinking 'bout how\n\n[Dm] [G] [C], [Dm] [G]/ [Dm] [G] [Am]/ [Dm] [G] [C]\nPeople fall in love in mysterious ways, maybe it's all part of a plan,\nWell, I'll just keep on making the same mistakes\nHoping that you'll understand, but baby now\n\n[F] [G] [C] (3) [F] [G]\nTake me into your loving arms, kiss me under the light of a thousand stars\nPlace your head on my beating heart, I'm thinking out loud\n[Am] [G]  [F]     [C]    [Dm] [G] [C]\nThat maybe we found love right where we are (bis)\nBaby, we found love right where we are, and we found love right where we are.\n"
  },
  {
    "id": "those-were-the-days",
    "title": "Those Were the Days",
    "artist": "Mary Hopkin",
    "key": "Em",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "folk",
      "pop",
      "60s",
      "classic",
      "inglés"
    ],
    "file": "canciones/those-were-the-days.md",
    "content": "---\ntitle: \"Those Were the Days\"\nartist: \"Mary Hopkin\"\nkey: \"Em\"\ncapo: 0\ntempo: 100\ntags: [\"folk\", \"pop\", \"60s\", \"classic\", \"inglés\"]\n---\n\n## Intro\n[Em] [Am]  [Em] [B7]\n\n## Verso 1\nOnce upon a time there  was a tavern\nWhere we used to raise a glass or two\nRemember how we laughed a way the hours\nAnd dreamt of all the great things we should do.\n\n[Em] [B7]-[Em] [Am] [D] -7 [G] [Am] [Em] [B7] [Em]\nThose were the days my friend\nWe thought they’d never end,\nWe’d sing & dance for ever and a day\nWe’d live the life we’d choose\nWe’d fight and never lose\nFor we were young and sure to have our way.\n"
  },
  {
    "id": "toda-una-vida",
    "title": "Toda una vida",
    "artist": "Antonio Machín",
    "key": "Em",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "bolero",
      "clásico",
      "romántico"
    ],
    "file": "canciones/toda-una-vida.md",
    "content": "---\ntitle: \"Toda una vida\"\nartist: \"Antonio Machín\"\nkey: \"Em\"\ncapo: 0\ntempo: 100\ntags: [\"bolero\", \"clásico\", \"romántico\"]\n---\n\n## Verso 1\n(Farrés/Machín ‘43)\n\n[Em] [E7]-[Am] [Em] [B7] [C7] [B7]\nToda una vida me estaría contigo\nNo me importa en qué forma\nNi dónde, ni cómo, pero junto a ti\n\n[Em] [E7]-[Am] [Em] [B7] [Em]\nToda una vida te estaría mimando\nTe estaría cuidando, como cuido mi vida\nQue la vivo por ti\n\n[D7]_ [G] /[B7] [C7]-[B7]\nNo me cansaría, de decirte siempre\nPero siempre, siempre,\nQue eres, en mi vida,\nAnsiedad, angustia, desesperación.\nDa capo Toda una vida…\n"
  },
  {
    "id": "todos-los-besos",
    "title": "Todos los besos",
    "artist": "Los Rebujitos",
    "key": "C",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop flamenco",
      "balada",
      "español"
    ],
    "file": "canciones/todos-los-besos.md",
    "content": "---\ntitle: \"Todos los besos\"\nartist: \"Los Rebujitos\"\nkey: \"C\"\ncapo: 0\ntempo: 100\ntags: [\"pop flamenco\", \"balada\", \"español\"]\n---\n\n## Verso 1\nTú, mi otra parte que esperaba\nLo que siento aquí en mi alma,\nLo siento en mi sentir\n- Tú, que endulzas las palabras\nY cuando te callas\nEl silencio sabe a ti\n\n[C] [Am] [F] [G]\n[F] [Am] [G] [F] [G]\nHoy creo, que he sido un poco tonto\nQue hoy no te he llamado\nPero es que se me ha pasado\nPor buscar en el cajón\n\n[C] [Am] [F] [G]\nTodos los besos posibles\nLas llaves para abrir tu corazón.\nIrresistible\nMil flores pa entregarte\nA mi manera\nY un sol pa que te ayude\nA despertar sin mí\n\n-Y un barquito de vela\nY un viento de levante\nPa llevarte a todas partes\nEl cielo, un pentagrama\nY componerte\nCon notas de colores\nUna canción pa ti\n\nEres el motor de mi corazón\nUna mujer hecha canción, eso eres\n-Miro, siempre a mi alrededor\nPara ver si veo yo,\nAlgo más bello, bello\n\n[C] [Am] [F] [G]\n"
  },
  {
    "id": "torn",
    "title": "Torn",
    "artist": "Natalie Imbruglia",
    "key": "G",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop rock",
      "90s",
      "classic",
      "inglés"
    ],
    "file": "canciones/torn.md",
    "content": "---\ntitle: \"Torn\"\nartist: \"Natalie Imbruglia\"\nkey: \"G\"\ncapo: 0\ntempo: 100\ntags: [\"pop rock\", \"90s\", \"classic\", \"inglés\"]\n---\n\n## Intro\n[G] [Bm] [C] (2)/ [Em] [D] [Bm]\n\n## Verso 1\nI thought I saw a man brought to life\nHe was warm, he came around like he was dignified\nHe showed me what it was to cry\nWell, you couldn't be that man I adored\nYou don't seem to know, or seem to care what your heart is for\nBut I don't know him anymore\nThere's nothing where he used to lie, the conversation has run dry\nThat's what's going on,\n\n[D] [G] [D] [Em] [C] [G]/ [D] [Em] [C] [G] [D] [Em] ([D]) [C]\nNothing's fine, I'm torn, I'm all out of faith, this is how I feel\nI'm cold and I'm shamed, lying naked on the floor\nIllusion never changed, into something real\nI'm wide awake, and I can see the perfect sky is torn\nYou're a little late, I'm already torn\n\n[G] [Bm] [C] (2)/ [Em] [D] [Bm]\nSo, I guess the fortune teller's right\nShould've seen, just what was there, and not some holy light\nBut you crawled beneath my veins and now\nI don't care, I had no luck, I don't miss it all that much\nThere's just so many things,\n\n[D] [G] [D] [Em] [C] [G]/ [D] [Em] [C] [G] [D] [Em] ([D]) [C]\nThat I can't touch, I'm torn, I'm all out of faith, this is how I feel\nI'm cold and I'm shamed, lying naked on the floor\nIllusion never changed, into something real\n[Em] [D] [C]/ [Em] [G] [D]\nI'm wide awake, and I can see the perfect sky is torn.\n\nYou're a little late, I'm already torn,                 Torn (Ooh, ooh-ooh, ooh)\n\n[Em] [D] [Bm]\nThere's nothing where he used to lie\nMy inspiration has run dry, and that's what's going on. Nothing's right,\n\n[D] [G] [D] [Em] [C] [G]/ [D] [Em] [C] [G] [D] [Em] ([D]) [C]\nI'm torn, I'm all out of faith, this is how I feel\nI'm cold and I'm shamed, lying broken on the floor\nIllusion never changed, into something real\nI'm wide awake, and I can see the perfect sky is torn\nYou're a little late, I'm already torn, torn, woah.  Oh, yeah, oh, yeah (3)\n"
  },
  {
    "id": "tu-calorro",
    "title": "Tu Calorro",
    "artist": "Estopa",
    "key": "Am",
    "capo": 0,
    "tempo": 132,
    "tags": [
      "rumba",
      "rock",
      "español",
      "90s"
    ],
    "file": "canciones/tu-calorro.md",
    "content": "---\ntitle: \"Tu Calorro\"\nartist: \"Estopa\"\nkey: \"Am\"\ncapo: 0\ntempo: 132\ntags: [\"rumba\", \"rock\", \"español\", \"90s\"]\n---\n\n## Intro\n[E] [F] [G] [C] [F] [G] [F] [E]\n\n## Verso 1\n[E] Fui a la orilla del [F] río y vi que estabas muy sola,\nVi que te habías dor[G]mido, vi que crecían ama[C]polas\nEn lo alto de tu [F] pecho, tu pecho hecho en la [G] gloria,\nYo me fui pa' ti de[F]recho [G] y así en[F]traste en mi me[E]moria.\n\n[E] Tú me vestiste los [F] ojos, yo te besaba la boca,\nToas' las palomas que [G] cojo vuelan a la pata [C] coja,\nTú ibas tendiendo las [F] alas, yo iba cerrando la [G] boca,\nTú eras flor desarro[F]pada y [E] yo el calorro que te arropa.\n\n## Coro\n[E] Tu perfume es el veneno\n[F] Que contamina el aire que tu pelo corta,\n[G] Que me corta hasta el habla y el entendimiento\nPorque es la droga que [C] vuelve mi cabeza loca.\nDespués me quedo dor[F]mido\nEn una cama más [G] dura que una roca,\nSoñando que aún no te has [F] ido,\nSoñando [G] que aún [F] me [E] tocas.\n\n## Verso 2\n[E] El sol se va sonro[F]jando porque la noche le va cayendo,\nLos pájaros van lle[G]gando, los árboles tienen [C] sueño,\nSus hojas ya se han can[F]sado de aguardar tanto el in[G]vierno,\nY yo sigo aquí a tu [F] lado y [G] hasta que [F] me lleve el [E] viento.\n\n[E] De luto se pone el [F] cielo que viene con nubes negras,\nSerá porque tiene [G] celos de que esta noche te [C] tenga,\nQué oscuro que se está ha[F]ciendo, échale leña a la ho[G]guera,\nLa hoguera de senti[F]mientos que arde si es[E]toy a tu vera.\n\n## Coro Final\n[E] Tu perfume es el veneno\n[F] Que contamina el aire que tu pelo corta,\n[G] Que me corta hasta el habla y el entendimiento\nPorque es la droga que [C] vuelve mi cabeza loca... [E]\n"
  },
  {
    "id": "tu-frialdad",
    "title": "Tu frialdad",
    "artist": "Triana",
    "key": "Em",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rock andaluz",
      "flamenco rock",
      "clásico"
    ],
    "file": "canciones/tu-frialdad.md",
    "content": "---\ntitle: \"Tu frialdad\"\nartist: \"Triana\"\nkey: \"Em\"\ncapo: 0\ntempo: 100\ntags: [\"rock andaluz\", \"flamenco rock\", \"clásico\"]\n---\n\n## Intro\n[Em] [Am] [Em] [B7] [Em]\n\n-Cada noche mi vida es para ti\nComo un juego cualquiera y nada más\nPorque a mí me atormenta en el alma tu frialdad\n-Yo quisiera saber si tu alma es igual\nA la de cualquier mujer\nPorque a mí me atormenta en el alma, tu frialdad\n-Y sueño con gran pasión que vives para mí\nComo yo vivo niña por ti\nNananá naná eh (ad libitum)\n"
  },
  {
    "id": "tu-me-camelas",
    "title": "Tú me camelas",
    "artist": "Niña Pastori",
    "key": "A",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "flamenco",
      "rumba",
      "español"
    ],
    "file": "canciones/tu-me-camelas.md",
    "content": "---\ntitle: \"Tú me camelas\"\nartist: \"Niña Pastori\"\nkey: \"A\"\ncapo: 0\ntempo: 100\ntags: [\"flamenco\", \"rumba\", \"español\"]\n---\n\n## Intro\n[A] [B] [G] [C] [A] [B] [A]\n\nTú me camelas (2) me lo han dicho tus acais, que me lo han dicho, primo, tus acais\nTú me camelas (2) tú me camelarás\n\n[A] [B] [A] (2) [Dm] [G7] [C] [B] [A]\nSi te vas, y me dejas triste, si te vas, ¿ay que soledad!\nSi no estás, el cielo no se poblará de estrellas, si no estás, ¿por quién despertar?\nLleva mi niña un traje, con sus volantes (2) el pelo negro al aire, negro azabache (2)\nBésame, como las olas besan a la orilla, bésame, ¡ay! Como besa el hambre al pan\nCon la mirada distante, con la sonrisa pintá, mi niña se echa palante,\nSopa de estrellas y luz de coral, mi niña se hace gigante y juega a la luna con la ciudad\n"
  },
  {
    "id": "tu-recuerdo-cantoral",
    "title": "Tu recuerdo",
    "artist": "Cantoral",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "folklore",
      "latino",
      "acústico"
    ],
    "file": "canciones/tu-recuerdo-cantoral.md",
    "content": "---\ntitle: \"Tu recuerdo\"\nartist: \"Cantoral\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"folklore\", \"latino\", \"acústico\"]\n---\n\n## Intro\n[Am] [G] [C] [E] -7 [Am]\n\nAsí no quiero verte niña, a tus ojos asomar\nPor más que hoy no puedo,\nHoy no puedo consolar , consolar\n-Si tu vida fue mi vida, y tu vida no sé qué,\nEl amor que tú me diste,\nDe las manos se me fue, se me fue.\n"
  },
  {
    "id": "tu-recuerdo-ricky-martin",
    "title": "Tu recuerdo (Ricky Martin)",
    "artist": "Ricky Martin",
    "key": "Dm",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop latino",
      "balada",
      "acústico"
    ],
    "file": "canciones/tu-recuerdo-ricky-martin.md",
    "content": "---\ntitle: \"Tu recuerdo (Ricky Martin)\"\nartist: \"Ricky Martin\"\nkey: \"Dm\"\ncapo: 0\ntempo: 100\ntags: [\"pop latino\", \"balada\", \"acústico\"]\n---\n\n## Intro\n[Dm] [C] [Gm] [Am] (4) [Dm]\n\nTu recuerdo sigue aquí, (\n\ncomo un aguacero\n\nay, pero a fuego lento\n\n)\nRompe fuerte sobre mí, (\n\n)\nQuema y moja por igual, (\n\ny ya no sé lo que pensar\n\nSi tu recuerdo me hace bien o me hace mal\n\n)\n\nUn beso gris, un beso blanco\nTodo depende del lugar\nQue yo me fui, eso está claro\nPero tu recuerdo no se va\nSiento tus labios en las noches de verano\nAhí están, cuidándome en mi soledad\nPero a veces me quieren matar\n\n[Dm] [C] [Gm] [Am] (4) [Dm]\nTu recuerdo sigue aquí, (\n\ncomo un aguacero\n\nay, pero a fuego lento\n\n)\nRompe fuerte sobre mí, (\n\n)\nQuema y moja por igual, (\n\ny ya no sé lo que pensar\n\n)\n\nSi tu recuerdo me hace bien o me hace mal\n\n[Dm] [C] [Gm] [Am] (4) [Dm]\nA veces gris, a veces blanco\nTodo depende del lugar\nQue tú te fuiste, eso es pasado\nSé que te tengo que olvidar\n\nPero_yo le puse una velita a to' mis santos\nAhí está, pa' que pienses mucho en mí\nNo dejes de pensar en mí\n\n[Dm] [C] [Gm] [Am] (4) [Dm]\nTu recuerdo sigue aquí, (\n\ncomo un aguacero\n\n)\nRompe fuerte sobre mí, (\n\n)\nQuema y moja por igual, (\n\nay, pero a fuego lento\n\ny ya no sé lo que pensar\n\n)\n\nSi tu recuerdo me hace bien o me hace mal\n\nPiensa en mí\n\nPiensa, piensa\n\n¿Tú dónde estás?\n\n[Dm] [C] [Gm] [Am] (4) [Dm]\nTu recuerdo sigue aquí,\n\nRompe fuerte sobre mí,\n\nQuema y moja por igual,\n\n(y ya no sé lo que pensar)\nSi tu recuerdo me hace bien o me hace mal\n\n[Dm] [C] [Gm] [Am]\nTu recuerdo sigue aquí,\n\nRompe fuerte sobre mí,\n"
  },
  {
    "id": "turnedo",
    "title": "Turnedo",
    "artist": "Iván Ferreiro",
    "key": "A",
    "capo": 0,
    "tempo": 105,
    "tags": [
      "indie",
      "pop",
      "español",
      "2000s"
    ],
    "file": "canciones/turnedo.md",
    "content": "---\ntitle: \"Turnedo\"\nartist: \"Iván Ferreiro\"\nkey: \"A\"\ncapo: 0\ntempo: 105\ntags: [\"indie\", \"pop\", \"español\", \"2000s\"]\n---\n\n## Intro\n[A]\n\n## Verso 1\n[A] Desde aquí, desde mi casa, veo la playa vacía,\n[D] Ya lo estaba hace unos días, ahora está llena de lluvia.\n[A] Y tú ahí sigues sin paraguas, sin tu ropa, paseando,\n[D] Como una tarde de julio pero con frío y tronando.\n\n## Puente 1\n[E] ¿Se puede saber qué esperas? ¿Qué te mire y que te seque?\n[D] Que te vea y que me quede tomando la luna juntos,\n[Bm] La luna, tú y yo expectantes [C#m] a que pase algún cometa\n[D] O baje un platillo volante.\n\n## Verso 2\n[A] Y la playa llora y llora y desde mi casa grito\n[D] Que aunque pienso en abrazarte, que aunque pienso en ir contigo,\n[E] El doctor me recomienda que no me quite mi abrigo,\n[D] Que no esté ya más contigo [Bm] y yo no puedo ne[C#m]garme\nPues el [E] tipo soy yo mismo, estudié mientras dor[D]mías\nY aún repaso las lecciones una a una cada [A] día.\n\n## Verso 3\n[A] Yo no puedo aconsejarte, ya es muy duro lo que llevo,\n[D] Dejemos que corra el aire [A] y digámonos adiós.\n[A] Aunque siga suspirando por algo que no era cierto,\n[D] Me lo dicen en los bares, es algo que llevas dentro,\n[E] Que no dejas que te quieran, [D] sólo quieres que te abracen\n[Bm] Y publicas que no [C#m] tuve ni valor para que[D]darme.\nYo rompí todas tus fotos, [E] tú no dejas de llamarme...\n\n## Coro\n¿Quién no tiene el [D] valor para marcharse?\n¿Quién no tiene el [E] valor para marcharse?\n¿Quién no tiene el [D] valor para marcharse?\n¿Quién prefiere que[Bm]darse [C#m] y aguan[A]tar?\n"
  },
  {
    "id": "twist-and-shout",
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
    ],
    "file": "canciones/twist-and-shout.md",
    "content": "---\ntitle: \"Twist and Shout\"\nartist: \"The Beatles\"\nkey: \"D\"\ncapo: 0\ntempo: 124\ntags: [\"rock\", \"60s\", \"classic\", \"fácil\", \"fiesta\"]\n---\n\n// Tres acordes eternos de rock and roll: D - G - A\n\n## Intro\n[D] [G] [A]\n[D] [G] [A]\n\n## Verso 1\nWell, [D] shake it up, [G] baby, now ([A] shake it up, baby)\n[D] Twist and [G] shout ([A] twist and shout)\nC'mon, [D] c'mon, c'mon, c'mon, [G] baby, now ([A] c'mon, baby)\nCome on and [D] work it on [G] out ([A] work it on out)\n\n## Verso 2\nWell, [D] work it on [G] out, honey ([A] work it on out)\nYou know you [D] look so [G] good ([A] look so good)\nYou know you [D] got me [G] goin' now ([A] got me goin')\nJust like I [D] knew you [G] would ([A] like I knew you would)\n\n## Coro\nWell, [D] shake it up, [G] baby, now ([A] shake it up, baby)\n[D] Twist and [G] shout ([A] twist and shout)\nC'mon, [D] c'mon, c'mon, c'mon, [G] baby, now ([A] c'mon, baby)\nCome on and [D] work it on [G] out ([A] work it on out)\n\n## Puente (Ahhh... Ahhh...)\n[A] Ah... ah... [A7] ah... ah... [A] WAAAAAH!\n\n## Coro Final\nWell, [D] shake it up, [G] baby, now ([A] shake it up, baby)\n[D] Twist and [G] shout ([A] twist and shout)\nC'mon, [D] c'mon, c'mon, c'mon, [G] baby, now ([A] c'mon, baby)\nCome on and [D] work it on [G] out ([A] work it on out)\n[D] Shake it, shake it, [G] shake it, baby, [A] now\n[D] Shake it, shake it, [G] shake it, baby, [A] now\n[D] Shake it, shake it, [G] shake it, baby, [A] now... [D]\n"
  },
  {
    "id": "un-ano-de-amor",
    "title": "Un año de amor",
    "artist": "Luz Casal",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "balada",
      "almodóvar",
      "español"
    ],
    "file": "canciones/un-ano-de-amor.md",
    "content": "---\ntitle: \"Un año de amor\"\nartist: \"Luz Casal\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"balada\", \"almodóvar\", \"español\"]\n---\n\n## Intro\n[Am] [Dm] [G7] [C] [E]/ [Am] [Dm] [Am] [B7] [F7] [E]\n\nLo nuestro se acabó y te arrepentirás\nDe haberle puesto fin a un año de amor\nSi ahora tú te vas, pronto descubrirás\nQue los días son eternos y vacíos sin mí.\n\n[Am] [Dm] [F7]-[E]\nY de noche, y de noche por no sentirte solo\n\n[Am] [Dm] [E] [Am] (3)\n-Recordarás nuestros días felices,\nRecordarás el sabor de mis besos\nY entenderás en un solo momento\nQué significa un año de amor (2)\n\n[Am] [Dm] [G7] [C] [E]/ [Am] [Dm] [Am] [B7] [F7] [E]\nTe has parado a pensar lo que sucederá\nTodo lo que perdemos y lo que sufrirás.\nSi ahora tú te vas, no recuperarás\nLos momentos felices que te hice vivir.\n"
  },
  {
    "id": "un-ano-mas",
    "title": "Un año más",
    "artist": "Mecano",
    "key": "C",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop",
      "nochevieja",
      "clásico"
    ],
    "file": "canciones/un-ano-mas.md",
    "content": "---\ntitle: \"Un año más\"\nartist: \"Mecano\"\nkey: \"C\"\ncapo: 0\ntempo: 100\ntags: [\"pop\", \"nochevieja\", \"clásico\"]\n---\n\n## Intro\n[C] [G]/ [Am] [G] [F]/ [C] [Dm] -[G] (2)\n\n-En la puerta del sol, como el año que fue\nOtra vez el champán y las uvas y el alquitrán,\nDe alfombra están\n-Los petardos que borran sonidos de ayer\nY acaloran el ánimo para aceptar\nQue ya pasó uno más.\n\n[E] [F] [G]/ [C] [F] [G] [C] (2)\nY en el reloj de antaño como de año en año,\nCinco minutos más de la cuenta atrás\nHacemos el balance de lo bueno y malo,\nCinco minutos antes de la cuenta atrás\n\n.\n\n[C] [G]/ [Am] [G] [F]/ [C] [Dm] -[G] (2)\n- Marineros, soldados, solteros, casados,\nAmantes, andantes\nY alguno que otro cura despistao\n-Entre gritos y pitos los españolitos,\nEnormes, bajitos, hacemos por una vez,\nAlgo a la vez.\n\n[E] [F] [G]/ [C] [F] [G] [C] (2)\nY en el reloj de antaño como de año en año,\nCinco minutos más de la cuenta atrás\nHacemos el balance de lo bueno y malo,\nCinco minutos antes de la cuenta atrás\n\n.\n\n[E] [F] [G]/ [C] [F] [G] [C] (2)\nY aunque para las uvas hay algunos nuevos\nA los que ya no están echaremos de menos\nY a ver si espabilamos los que estamos vivos\nY en el año que viene nos reímos.\n\n[C] [G]/ [Am] [G] [F]/ [C] [Dm] -[G] (2)\nUno, dos, tres y cuatro y empieza otra vez,\nQue en la 5ª es la una y la 6ª es la dos y así\nEl siete es tres.\n-Y decimos adiós y pedimos a Dios\nQue en el año que viene a ver si en vez\nDe un millón pueden ser dos\n\nEn la puerta del sol, como el año que fue\nOtra vez el champán y las uvas y el alquitrán,\nDe alfombra están…\n\n[C] [G]/ [Am] [G] [F]/ [C] [Dm] -[G]\n"
  },
  {
    "id": "un-beso-y-una-flor",
    "title": "Un beso y una flor",
    "artist": "Nino Bravo",
    "key": "A",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "clásico",
      "balada",
      "español",
      "70s"
    ],
    "file": "canciones/un-beso-y-una-flor.md",
    "content": "---\ntitle: \"Un beso y una flor\"\nartist: \"Nino Bravo\"\nkey: \"A\"\ncapo: 0\ntempo: 100\ntags: [\"clásico\", \"balada\", \"español\", \"70s\"]\n---\n\n## Intro\n[orig.] [A] [F]_[C] (2) [F]_[Em]-[Am]/ [F] [Dm] [D7] [G7]\n\n[C]-[F]-[C] [Em] [Am] [C] (2) [C7]\nDejaré mi tierra por ti, dejaré mis campos y me iré, lejos de aquí.\nCruzaré llorando el jardín y con tus recuerdos partiré, lejos de aquí\n\nDe día viviré pensando en tu sonrisa, de noche las estrellas me acompañarán,\nSerás como una luz que alumbra mi camino, me voy, pero te juro que mañana volveré\n\n[C] [G] [Am]_ [C] [F] [C]/ [Am] [Em] [F] [G7]/ [C] [F] [G7]\nAl partir un beso y una flor, un te quiero, una caricia y un adiós,\n-Es ligero equipaje para tan largo viaje, las penas pesan en el corazón.\n\n[C] [G] [Am]_ [C] [F] [C]/ [Am] [Em] [F] [G7]/ [C] [F] [G] -[C]\nMás allá del mar habrá un lugar donde el sol cada mañana brille más,\nForjarán mi destino las piedras del camino, lo que nos es querido siempre queda atrás.\n\n[C]-[F]-[C] [Em] [Am] [C] (2) [C7]\nBuscaré un hogar para ti donde el cielo se une con el mar, lejos de aquí.\nCon mis manos y con tu amor lograré encontrar otra ilusión, lejos de aquí\n\n[F]_[C] (2) [F]_[Em]-[Am]/ [F] [Dm] [D7] [G7]\nDe día viviré pensando en tu sonrisa, de noche las estrellas me acompañarán,\nSerás como una luz que alumbra mi camino, me voy, pero te juro que mañana volveré\n\n[C] [G] [Am]_ [C] [F] [C]/ [Am] [Em] [F] [G7]/ [C] [F] [G7]\nAl partir un beso y una flor, un te quiero, una caricia y un adiós,\n-Es ligero equipaje para tan largo viaje, las penas pesan en el corazón.\n\n[C] [G] [Am]_ [C] [F] [C]/ [Am] [Em] [F] [G7]/ [C] [F] [G] -[C]\nMás allá del mar habrá un lugar donde el sol cada mañana brille más,\nForjarán mi destino las piedras del camino, lo que nos es querido siempre queda atrás.\n"
  },
  {
    "id": "un-par-de-palabras",
    "title": "Un par de palabras",
    "artist": "Hombres G",
    "key": "Em",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop rock",
      "80s",
      "español"
    ],
    "file": "canciones/un-par-de-palabras.md",
    "content": "---\ntitle: \"Un par de palabras\"\nartist: \"Hombres G\"\nkey: \"Em\"\ncapo: 0\ntempo: 100\ntags: [\"pop rock\", \"80s\", \"español\"]\n---\n\n## Intro\n[Em] [C] [G]-[D]/ [Em] [C] [G]\n\nSé que no quieres ni escucharme,\nSe que ya todo terminó,\nYo no quiero hablarte,\nQuiero escribirte una canción\n\n[Am] _[C] [D]\n- Y entonces tendrás que escucharme,\nY por la radio oirás mi voz,\nIntentaré tocarte tu pequeño corazón.\n\n[C] [D] [G] [Em]/ [C] [D] [G]\nY una lágrima tuya mojará este papel\nSolo un par de palabras te diré\n\nY me odiarás cuando me veas,\nY ni siquiera me mirarás,\nProbablemente te reirás,\nSiempre te ha gustado interpretar\n- pero la película terminó,\nY ya sólo se oye mi canción,\nFrase tras frase,\nVa perforando tu corazón\n\nY sabrás que te quiero,\ny que siempre te querré\nSolo un par de palabras te diré\n\nSolo un par de palabras (3) te diré\n\n[C]-[D]-[G]\n[C] [Am] [F] [G] -[C]\nTe quiero...\n"
  },
  {
    "id": "un-sorbito-de-champan",
    "title": "Un sorbito de champán",
    "artist": "Los Brincos",
    "key": "D",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop",
      "60s",
      "español"
    ],
    "file": "canciones/un-sorbito-de-champan.md",
    "content": "---\ntitle: \"Un sorbito de champán\"\nartist: \"Los Brincos\"\nkey: \"D\"\ncapo: 0\ntempo: 100\ntags: [\"pop\", \"60s\", \"español\"]\n---\n\n## Intro\n[D] A [G] A(2) [Bm]\n\n16 añitos fiera\n\nY así fue…\n\n[D] A -[D]\n[C] [F] [Dm] [E] (2)\nNunca te podré olvidar,\nPorque me enseñaste a amar.\n\n[Am] [G] [F] [E] (2)\nCon un sorbito de champán,\nBrindando por el nuevo amor,\nLa suave luz de aquel rincón\nHizo latir mi corazón.\n\n[C] [F] [Dm] [E] (2)\nEs tan fácil recordar,\nSiempre que vuelvo a brindar\n\n[Am] [G] [F] [E] (2)\nCon un sorbito de champán,\nBrindando por el nuevo amor\n\n[Dm] [Am] [F]-[G][-(][Em]/[E]) (2)\n"
  },
  {
    "id": "un-velero-llamado-libertad",
    "title": "Un velero llamado libertad",
    "artist": "José Luis Perales",
    "key": "C",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "clásico",
      "balada",
      "español",
      "70s"
    ],
    "file": "canciones/un-velero-llamado-libertad.md",
    "content": "---\ntitle: \"Un velero llamado libertad\"\nartist: \"José Luis Perales\"\nkey: \"C\"\ncapo: 0\ntempo: 100\ntags: [\"clásico\", \"balada\", \"español\", \"70s\"]\n---\n\n## Intro\n[C] [Em] [F] [Am]/ [G] [F]-[C]/ [F]-[G]-[C] (2)\n\nAyer se fue, tomó sus cosas y se puso a navegar,\nUna camisa, un pantalón vaquero y una canción: ¿Dónde irá?, ¿dónde irá?\n-Se despidió, y decidió batirse en duelo con el mar,\nY recorrer el mundo en su velero, y navegar, nai na nai... Y navegar\n\n[Em] [Am] [C]/ [G] [C]-[G]-[F]/ [C]-[G]-[C]\n-Y se marchó, y a su barco le llamó “Libertad”\nY en el cielo descubrió, gaviotas, y pintó, estelas en el mar (bis)\n\n[C] [Em] [F] [Am]/ [G] [F]-[C]/ [F]-[G]-[C]\nSu corazón buscó una forma diferente de vivir,\nPero las olas le gritaron vete con los demás, nai na nai... con los demás.\n\n[Em] [Am] [C]/ [G] [C]-[G]-[F]/ [C]-[G]-[C] (3)\nY se durmió, y la noche le gritó “¿dónde vas?”\nY en sus sueños dibujó, gaviotas, y pensó: “hoy debo regresar”\n-Y regresó, y una voz le preguntó ¿cómo estás?\nY al mirarla descubrió unos ojos, nai na nai... azules como el mar (bis)\n-Y se marchó, y a su barco le llamó “Libertad”\nY en el cielo descubrió, gaviotas, y pintó, estelas en el mar\n\nSolo le pido a Dios\n"
  },
  {
    "id": "una-rosa-es-una-rosa",
    "title": "Una rosa es una rosa",
    "artist": "Mecano",
    "key": "G",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop",
      "rumba",
      "español",
      "90s"
    ],
    "file": "canciones/una-rosa-es-una-rosa.md",
    "content": "---\ntitle: \"Una rosa es una rosa\"\nartist: \"Mecano\"\nkey: \"G\"\ncapo: 0\ntempo: 100\ntags: [\"pop\", \"rumba\", \"español\", \"90s\"]\n---\n\n## Intro\n[G] [D] [Em] [Bm] [C] [B7] [C] ([D7]/[B7]) (2)\n\nEs por culpa de una hembra, que me estoy volviendo loco\nNo puedo vivir sin ella, pero con ella tampoco.\nY si de este mal de amores, yo me fuera pa’ la tumba\nA mí no me mandéis flores, y como dice esta rumba.\n\n[Em] [D] [C] [B7]\nQuise cortar la flor más tierna del rosal pensando que de amor no me podría pinchar\nY mientras me pinchaba me enseñó una cosa, que una rosa es una rosa es una rosa (2)\n-Y cuando abrí la mano y la dejé caer rompieron a sangrar las llagas en mi piel,\nY con sus pétalos me la curó mimosa, q ue una rosa es una rosa es una rosa\n\n[G] [D] [Em] [Bm] [C] [B7] [C] ([D7]/[B7]) (2)\n-Pero cuanto más me cura, al ratito más me escuece\nPorque amar es el empiece de la palabra amargura.\nUna mentira y un credo en cada espina del tallo,\nInjertándose en los dedos, una rosa es un rosario.\n\nMe cuesta tanto olvidarte\n"
  },
  {
    "id": "valerie",
    "title": "Valerie",
    "artist": "Amy Winehouse",
    "key": "D",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "soul",
      "pop",
      "2000s",
      "inglés"
    ],
    "file": "canciones/valerie.md",
    "content": "---\ntitle: \"Valerie\"\nartist: \"Amy Winehouse\"\nkey: \"D\"\ncapo: 0\ntempo: 100\ntags: [\"soul\", \"pop\", \"2000s\", \"inglés\"]\n---\n\n## Intro\n[D] [Em] (2)\n\n## Verso 1\nWell sometimes I go out by myself\nAnd I look across the water\nAnd I think of all the things, what you're doing\nAnd in my head I paint a picture\n\n[G] [F#m] (3) [A] [D]/ [D] [Em] (2)\nCause since I've come on home,\nWell my body's been a mess\nAnd I've missed your ginger hair\nAnd the way you like to dress\nWon't you come on over\nStop making a fool out of me\nWhy don't you come on over Valerie?\nValerie? Valerie? Valerie?\n\n[D] [Em] (4)\nDid you have to go to jail,\nPut your house up on for sale,\ndid you get a good lawyer?\nI hope you didn't catch a tan,\nI hope you'll find the right man who'll fix it for ya\nAnd are you shoppin' anywhere,\nChanged the color of your hair, are you busy?\nAnd did you have to pay the fine\nYou were dodging all the time, are you still dizzy?\n\n[G] [F#m] (3) [A] [D]/ [D] [Em] (2)\nCause since I've come on home,\nWell my body's been a mess\nAnd I've missed your ginger hair\nAnd the way you like to dress\nWon't you come on over\nStop making a fool out of me\nWhy don't you come on over, Valerie?(4)\n\n[D] [Em] (2)\nWell sometimes I go out by myself\nAnd I look across the water\nAnd I think of all the things, what you're doing\nAnd in my head I paint a picture\n\n[G] [F#m] (3) [A] [D]/ [D] [Em] (2)\nCause since I've come on home,\nWell my body's been a mess\nAnd I've missed your ginger hair\nAnd the way you like to dress\nWon't you come on over\nStop making a fool out of me\nWhy don't you come on over, Valerie?(4)\n\n[D] [Em] (2)/ [A] [Em] [D]\nOh Valerie? Valerie? Valerie?\nWhy don't you come on over Valerie?\n"
  },
  {
    "id": "verde-que-te-quiero-verde",
    "title": "Verde que te quiero verde",
    "artist": "Manzanita",
    "key": "Em",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rumba",
      "flamenco",
      "español"
    ],
    "file": "canciones/verde-que-te-quiero-verde.md",
    "content": "---\ntitle: \"Verde que te quiero verde\"\nartist: \"Manzanita\"\nkey: \"Em\"\ncapo: 0\ntempo: 100\ntags: [\"rumba\", \"flamenco\", \"español\"]\n---\n\n## Intro\n[Em] [E7] [Am] [Dm] [D7] [G] /[C] [B7] [Em] (3\n\n> )\nVerde que te quiero verde,\nVerde viento, verdes ramas\nEl barco sobre la mar,\nEl caballo en la montaña\n\nVerde, que yo te quiero verde, sí, sí\nYo te quiero verde ay, ay\nYo a ti te quiero, verde\n\nCon la sombra en la cintura,\nElla sueña en su baranda\nVerdes ojos, negro pelo,\nSu cuerpo de fría plata\n\nVerde, que yo te quiero verde, sí, sí\n\nCompadre quiero cambiar\nMi caballo por tu casa,\nMi montura por tu espejo,\nMi cuchillo por tu manta\n\nVerde, que yo te quiero verde, sí, sí\n\nCompadre vengo sangrando\nDesde los puertos de cabra\nY si yo fuera mocito,\nEste trato lo cerraba\n\nVerde, que yo te quiero verde, sí, sí\n\nCompadre dónde está dime,\nDónde está esta niña amarga\nCuántas veces la esperé,\nCuántas veces la esperaba.\n\nVerde, que yo te quiero verde, sí, sí\n\nCompadre quiero morir\nDecentemente en mi cama\nDe acero, si puede ser,\nCon las sábanas de Holanda.\n\nVerde, que yo te quiero verde, sí, sí\n\nVerde que te quiero verde,\nVerde viento, verdes ramas\nEl barco sobre la mar,\nEl caballo en la montaña\n"
  },
  {
    "id": "vida-de-rico",
    "title": "Vida de rico",
    "artist": "Camilo",
    "key": "E",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "cumbia pop",
      "latino",
      "alegre"
    ],
    "file": "canciones/vida-de-rico.md",
    "content": "---\ntitle: \"Vida de rico\"\nartist: \"Camilo\"\nkey: \"E\"\ncapo: 0\ntempo: 100\ntags: [\"cumbia pop\", \"latino\", \"alegre\"]\n---\n\n## Verso 1\nbailando\n\nA [E] [B] [C#m7] (1102[)/] [A#] [F] [C] [Dm]\n[G] [Em] [Am] [D] [C] [Am] [Dm] [G]\nYo puedo ofrecerte\nUna vida muy interesante.\nPero depende para ti, qué es interesante.\n-Si estás pensando\nEn discotecas, carros y diamantes,\nEntonces puede que pa ti\nSea insignificante\n\n[C] [G] [Am] [D] [F] [C] [Dm] [G]\nNo es vida de rico, pero se pasa bien rico\nY si en la casa no alcanza\nPal aire, te pongo abanico\n\n[G] [Em] [Am] [D] (2) [G] [C] [Am] [Dm] [G] (2)[C]\nYo no tengo pa darte ni un peso\nPero sí puedo darte mis besos\nPa sacarte yo tengo poquito\nPero es gratis bailar pegaíto\n-Yo no tengo pa abrirte champaña\nPero sí cervecita en la playa\nAunque es poco lo que yo te ofrezco,\nCon orgullo\nTodo lo que tengo es tuyo\n\n[G] [Em] [Am] [D] (2) [C] [Am] [Dm] [G]\nSería mentira decir que ahora mismo\nPuedo darte el viaje que tú te mereces\nNo será Europa, pero el sol cayendo\nDesde mi balcón medio se le parece\nY yo que tú no me acostumbraría\nA estar aquí en estas cuatro paredes\nHaría todo por comprarte un día\nCasa con piscina si Diosito quiere\n\n[G] [Em] [Am] [D] [G] (2) [C] [Am] [Dm] [G] (4)[C]\nYo no tengo pa darte ni un peso…\n\nAunque no es mucho\nEs tuyo, tuyo, tuyo\n\n[C] [G] [Am] [D] [F] [C] [Dm] [G]\nNo es vida de rico, pero se pasa bien rico\nY si en la casa no alcanza\nPa'l aire, te pongo abanico\n"
  },
  {
    "id": "volando-voy",
    "title": "Volando Voy",
    "artist": "Camarón de la Isla",
    "key": "E",
    "capo": 0,
    "tempo": 110,
    "tags": [
      "flamenco",
      "rumba",
      "español",
      "70s"
    ],
    "file": "canciones/volando-voy.md",
    "content": "---\ntitle: \"Volando Voy\"\nartist: \"Camarón de la Isla\"\nkey: \"E\"\ncapo: 0\ntempo: 110\ntags: [\"flamenco\", \"rumba\", \"español\", \"70s\"]\n---\n\n// Compuesta por Kiko Veneno, inmortalizada por Camarón en \"La leyenda del tiempo\"\n## Intro\n[F#m] [B7] [E] (x2)\n\n## Coro\n[F#m] Volando voy, [B7] volando vengo, [E]\n[F#m] Volando voy, [B7] volando vengo, [E]\n[F#m] Por el camino [B7] yo me entretengo, [E]\n[F#m] Por el camino [B7] yo me entretengo. [E]\n\n## Verso 1\n[F#m] Enamorao de la [B7] vida, aunque a veces duele, [E]\n[F#m] Enamorao de la [B7] vida, aunque a veces duele, [E]\n[F#m] Si tengo frío [B7] busco candela, [E]\n[F#m] Si tengo frío [B7] busco candela. [E]\n\n## Coro\n[F#m] Y vola, volando voy, [B7] volando vengo, vengo, [E]\n[F#m] Vola, volando voy, [B7] volando vengo, vengo, [E]\n[F#m] Por el camino [B7] yo me entretengo, [E]\n[F#m] Por el camino [B7] yo me entretengo. [E]\n\n## Verso 2\n[F#m] Señoras y señores, [B7] sepan ustedes, [E]\n[F#m] Señoras y señores, [B7] sepan ustedes, [E]\n[F#m] Que la flor de la noche [B7] pa' quien la merece, [E]\n[F#m] Que la flor de la noche [B7] pa' quien la merece. [E]\n\n## Coro\n[F#m] Y vola, volando voy, [B7] volando vengo, vengo, [E]\n[F#m] Vola, volando voy, [B7] volando vengo, vengo, [E]\n[F#m] Por el camino [B7] yo me entretengo, [E]\n[F#m] Por el camino [B7] yo me entretengo. [E]\n\n## Verso 3\n[F#m] Enamorao de la [B7] vida que a veces duele, [E]\n[F#m] Enamorao de la [B7] vida que a veces duele, [E]\n[F#m] Yo no soy quien soy [B7] ni los que me quieren, [E]\n[F#m] Yo no soy quien soy [B7] ni los que me quieren. [E]\n\n## Coro Final\n[F#m] Volando voy, [B7] volando vengo, [E]\n[F#m] Por el camino [B7] yo me entretengo... [E]\n"
  },
  {
    "id": "volar",
    "title": "Volar",
    "artist": "El Kanka",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "canción de autor",
      "rumba",
      "vals"
    ],
    "file": "canciones/volar.md",
    "content": "---\ntitle: \"Volar\"\nartist: \"El Kanka\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"canción de autor\", \"rumba\", \"vals\"]\n---\n\n## Verso 1\n(El Kanka) Filosofía y Letras\n\n(5ª 0-2-4)\n\nVals (5ª 0-2-4)\n\nRem Lam MI7 MI Lam LA7\n\n(joropo) Rem Lam SI7 MI Lam MI\n\n[Am] [B7] [E7] [Am] [F] [E7]\nSOLISTA: Volar lo que se dice volar, volar volar volar, no vuelo (bis)\nLA7\n\nREm\nPero.. desde que cambié el palacio por el callejón\nLAm\nDesde que rompí todas las hojas del guion\nMI7 LAm\nSi quieres buscarme, mira para el cielo\nREm\nPero desde que me deje_l bolso en la estación\nLAm\nY le pegué fuego a la tele del salón\nSI7 MI7 LAmaj7 RE MI7\nTe prometo hermano que mis suelas no tocan el suelo\n\nLAmaj7 Sim\nSolté todo lo que tenía y fui, feliz\nMI7 LAmaj7 LA7\nSolté las riendas y dejé pasar\nRE REm\nNo me ata nada aquí\nLAmaj7 SI7\nNo hay nada que guardar\nMI7 Lam\nasí que cojo impulso y a volar\n\n[E] [Am] [E] [Am] ([vals]) [A7] (5 0-2-4) [Dm] [Am] [E] [Am] ([joropo]) [Dm] [Am] [E7] [Am]\nPERO\n\ndesde que_\nolvidé el teléfono en un bar\nLAm\nDesde que no tengo nada parecido a un plan.\n\nRem\n\n> *(2ª voz, sube)\nSI7 MI7 LAmaj7 RE MI7\nTe prometo hermano que mis suelas no tocan, el suelo\n\nLAmaj7 Sim\nSolté todo lo que tenía y fui, feliz\nMI7 LAmaj7 LA7\nSolté las riendas y dejé pasar\nRE REm\nNo me ata nada aquí\nLAmaj7 SI7\nNo hay nada que guardar\nMI7 Lam SOL FA MI7\nasí que cojo impulso y a volar\nLAm SOL FA MI7 Rem FA MI LAm…\n\n```text\nLAmaj7(1100)\n```\nY a volaaaaaaar\n\nY a volaaaaaaar\n\nah….\n\n> *(lo que se dice volar)\n[Am] [B7] [E7] [Am] [F] [E7]\nVolar lo que se dice volar, volar volar volar, no vuelo (bis)\n\n[A7] [Dm]\nPero.. desde que cambié el palacio por el callejón\n\n[Am]\nDesde que rompí todas las hojas del guion\n\n[E7] [Am]\nSi quieres buscarme, mira para el cielo\n\n[Dm]\nPero desde que me deje_l bolso en la estación\n\n[Am]\nY le pegué fuego a la tele del salón\n\n[B7] [E7] [Amaj7] [D] [E7]\nTe prometo hermano que mis suelas no tocan el suelo\n\nSolté todo lo que tenía y fui, feliz\n\n[Amaj7] [Bm]\n[E7] [Amaj7] [A7] [D] [Dm]\nSolté las riendas y dejé pasar no me ata nada aquí\n\n[Amaj7] [B7] [E7] [Am]\nNo hay nada que guardar, así que cojo impulso y a volar\n\nVolar lo que se dice volar, volar volar volar, no vuelo (bis)\n\n[Am] [B7] [E7] [Am] [F] [E7]\n[A7] [Dm]\nPero, desde que tiré las llaves ya no quiero entrar,\n\nDesde que quemé las naves y aprendía a nadar\n\n[Am]\n[E7] [Am]\nSi quieres buscarme mira para el cielo\n\n[Dm]\nPERO\n\ndesde que_olvidé el teléfono en un bar\n\n[Am]\nDesde que no tengo nada parecido a un plan.\n\n> *(2ª voz, sube)\n[B7] [E7] [Amaj7] [D] [E7]\nTe prometo hermano que mis suelas no tocan, el suelo\n\n[Amaj7] [Bm]\nSolté todo lo que tenía y fui, feliz\n\n[E7] [Amaj7] [A7]\nSolté las riendas y dejé pasar\n\n[E7] [Amaj7] [A7] [D] [Dm]\nSolté las riendas y dejé pasar no me ata nada aquí\n\n[Amaj7] [B7] [E7] [Am] [G] [F] [E7]\nNo hay nada que guardar, así que cojo impulso y a volar\n\n[Am] [G] [F] [E7] [Dm] [F] [E] [Am…]\nY a volaaaaaaar\n\nY a volaaaaaaar\n\nah….\n\n> *(lo que se dice volar)\n"
  },
  {
    "id": "wish-you-were-here",
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
    ],
    "file": "canciones/wish-you-were-here.md",
    "content": "---\ntitle: \"Wish You Were Here\"\nartist: \"Pink Floyd\"\nkey: \"G\"\ncapo: 0\ntempo: 62\ntags: [\"rock\", \"70s\", \"classic\", \"balada\", \"acústico\"]\n---\n\n## Intro\n[Em7] [G] [Em7] [G]\n[Em7] [A7sus4] [Em7] [A7sus4] [G]\n\n## Verso 1\n[C] So, so you think you can [D] tell\nHeaven from [Am] hell, blue skies from [G] pain?\nCan you tell a green [D] field from a cold steel [C] rail?\nA smile from a [Am] veil? Do you think you can [G] tell?\n\n## Verso 2\nDid they get you to [C] trade your heroes for [D] ghosts?\nHot ashes for [Am] trees? Hot air for a [G] cool breeze?\nCold comfort for [D] change? Did you ex[C]change\nA walk-on part in the [Am] war for a lead role in a [G] cage?\n\n## Solo\n[Em7] [G] [Em7] [G]\n[Em7] [A7sus4] [Em7] [A7sus4] [G]\n\n## Coro\n[C] How I wish, how I wish you were [D] here\nWe're just [Am] two lost souls swimming in a fish bowl [G]\nYear after year [D]\nRunning over the same old [C] ground, what have we found?\nThe same old [Am] fears, wish you were [G] here\n\n## Outro\n[Em7] [G] [Em7] [G]\n[Em7] [A7sus4] [Em7] [A7sus4] [G]\n"
  },
  {
    "id": "wonderful-world",
    "title": "Wonderful World",
    "artist": "Sam Cooke",
    "key": "C",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "soul",
      "classic",
      "60s",
      "inglés"
    ],
    "file": "canciones/wonderful-world.md",
    "content": "---\ntitle: \"Wonderful World\"\nartist: \"Sam Cooke\"\nkey: \"C\"\ncapo: 0\ntempo: 100\ntags: [\"soul\", \"classic\", \"60s\", \"inglés\"]\n---\n\n## Intro\n[C] [Am] [F] [G] (4)/ [C] [F] (2) [Dm] [G] [C]\n\n## Verso 1\nDon’t know much about history\nDon’t know much biology\nDon’t know much about the science book\nDon’t know much about the French I took\nBut I do know that I love you\nAnd I know that if you love me too\nWhat a wonderful world this could be!\n\nDon’t know much about geometry\nDon’t know much trigonometry\nDon’t know much about algebra\nDon’t know what a slide rule is for\nBut I know that what I want is you\nAnd if this one could be with you\nWhat a wonderful world this could be!\n\n[F] [C] (2) [Am] [C] [F] [G]\nAnd I don’t blame to be an A-student, but I try to be\nMaybe if I were an a-student, baby\n> I could win your love for me. Da Capo.\n"
  },
  {
    "id": "wonderwall",
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
    ],
    "file": "canciones/wonderwall.md",
    "content": "---\ntitle: \"Wonderwall\"\nartist: \"Oasis\"\nkey: \"Em\"\ncapo: 2\ntempo: 87\ntags: [\"rock\", \"90s\", \"britpop\", \"fácil\"]\n---\n\n// Cejilla en el 2º traste. Mantén los dedos 3 y 4 fijos en cuerdas 1 y 2 traste 3\n## Intro\n[Em7] [G] [Dsus4] [A7sus4] (x2)\n\n## Verso 1\n[Em7] Today is gonna be the day that they're [G] gonna throw it back to you\n[Dsus4] By now you should've somehow realized [A7sus4] what you gotta do\n[Em7] I don't believe that anybody [G] feels the way I do\nAbout you [Dsus4] now [A7sus4]\n\n## Verso 2\n[Em7] Backbeat, the word is on the street that the [G] fire in your heart is out\n[Dsus4] I'm sure you've heard it all before, but you [A7sus4] never really had a doubt\n[Em7] I don't believe that anybody [G] feels the way I do\nAbout you [Dsus4] now [A7sus4]\n\n## Pre-Coro\nAnd [C] all the roads we [D] have to walk are [Em7] winding\nAnd [C] all the lights that [D] lead us there are [Em7] blinding\n[C] There are many things that [D] I would like to [G] say to [D/F#] you\nBut I [Em7] don't know [A7sus4] how\n\n## Coro\nBecause [C] maybe, [Em7] [G]\nYou're gonna be the one that [Em7] saves me, [C] [Em7]\nAnd [G] after all, [Em7]\nYou're my [C] wonder[Em7]wall. [G] [Em7]\n\n## Verso 3\n[Em7] Today was gonna be the day, but they'll [G] never throw it back to you\n[Dsus4] By now you should've somehow realized [A7sus4] what you're not to do\n[Em7] I don't believe that anybody [G] feels the way I do\nAbout you [Dsus4] now [A7sus4]\n\n## Pre-Coro\nAnd [C] all the roads that [D] lead you there were [Em7] winding\nAnd [C] all the lights that [D] light the way are [Em7] blinding\n[C] There are many things that [D] I would like to [G] say to [D/F#] you\nBut I [Em7] don't know [A7sus4] how\n\n## Coro Final\nI said [C] maybe, [Em7] [G]\nYou're gonna be the one that [Em7] saves me, [C] [Em7]\nAnd [G] after all, [Em7]\nYou're my [C] wonder[Em7]wall. [G] [Em7]\nI said [C] maybe, [Em7] [G]\nYou're gonna be the one that [Em7] saves me, [C] [Em7]\nAnd [G] after all, [Em7]\nYou're my [C] wonder[Em7]wall. [G] [Em7]\n"
  },
  {
    "id": "y-nos-dieron-las-diez",
    "title": "Y nos dieron las diez",
    "artist": "Joaquín Sabina",
    "key": "F",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "ranchera",
      "canción de autor",
      "clásico"
    ],
    "file": "canciones/y-nos-dieron-las-diez.md",
    "content": "---\ntitle: \"Y nos dieron las diez\"\nartist: \"Joaquín Sabina\"\nkey: \"F\"\ncapo: 0\ntempo: 100\ntags: [\"ranchera\", \"canción de autor\", \"clásico\"]\n---\n\n## Verso 1\nSabina\n\n(\n\n)\n\n[Intro:] [F] [C] [Dm]-[G]-[C] [G7] [C]\n[C] [Dm]-[G7]-[C][_/] [Dm7]-[G7]/[G7]_[C]/ [C7] [F] [D7] [G] -[G7]\n> Mujer\n> Hombre\nEra un pueblo con mar, una noche, después de un concierto.\n\nTú reinabas detrás, de la barra del único bar que vimos abierto.\n\nCántame una canción al oído, y te pongo un cubata.\n\nCon una condición, que me dejes abierto el balcón de tus ojos de gata.\n\nLoco por conocer los secretos, de mi dormitorio\n\nEsa noche canté, al piano del amanecer, todo mi repertorio.\n\n[C] [Dm]-[G7]-[C][_/] [Dm7]-[G7]/[G7]_[C]/ [C7] [F] [D7] [G]\nLos clientes del bar, uno a uno, se fueron marchando\n\nTú saliste a cerrar, yo me dije cuidado, chaval, te estás enamorando\n\nLuego todo pasó de repente, mi dedo en tu espalda\nDibujó un corazón\n\nmi mano le correspondió debajo de tu falda\n\ny\n\nCaminito al hostal nos besamos en cada farola\n\nEra un pueblo con mar yo quería dormir contigo y tú no querías dormir sola\n\n[F]_[C] [Dm]-[G7]-[C]\nY nos dieron las diez, y las once, las doce y la una y las dos y las tres\nY desnudos al anochecer, nos encontró la luna\n\n[C] [Dm]-[G7]-[C][_/] [Dm7]-[G7]/[G7]_[C]/ [C7] [F] [D7] [G] -[G7]\nNos dijimos adiós, ojalá, que volvamos a vernos.\nEl verano acabó, e\n\nl otoño duró lo que tarda en llegar el invierno\n\nY a tu pueblo el azar,\n\notra vez, el verano siguiente\n\nMe llevó y al final, del concierto me puse a buscar tu cara entre la gente.\nY no hallé quien, de ti, me dijera\n\nParecía como si\n\nNi media palabra.\n\nnos quisiera gastar el destino una broma macabra.\n\n[C] [Dm]-[G7]-[C][_/] [Dm7] [G7]_[C]/ [C7] [F] [D7] [G]\nNo había nadie detrás, de la barra, del otro verano.\n\nY en lugar de tu bar, me encontré una sucursal del Banco Hispanoamericano\nTu memoria vengué\n\na pedradas, contra los cristales\n\n.\n\nSé que no lo soñé, protestaba mientras me esposaban los municipales.\nEn mi declaración alegué que llevaba tres copas\nY empecé esta canción\n\nen el cuarto donde aquella vez te quitaba la ropa.\n\nY nos dieron las diez, y las once las doce y la una y las dos y las tres\n\n[F] [C] [Dm]-[G7]-[C]\nY desnudos al anochecer nos encontró la luna (2)\n"
  },
  {
    "id": "yellow-submarine",
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
    ],
    "file": "canciones/yellow-submarine.md",
    "content": "---\ntitle: \"Yellow Submarine\"\nartist: \"The Beatles\"\nkey: \"G\"\ncapo: 0\ntempo: 110\ntags: [\"rock\", \"60s\", \"classic\", \"fácil\"]\n---\n\n## Intro\n[G] [D] [C] [G]\n\n## Verso 1\n[D] In the [C]town where [G]I was [Em]born\n[Am] Lived a [C]man who [D]sailed to sea\n[G] And he [D]told us [C]of his [G]life\n[Am] In the [C]land of [D]submarines\n\n## Verso 2\n[G] So we [D]sailed on [C]to the [G]sun\n[Am] 'Til we [C]found a sea of [D]green\n[G] And we [D]lived beneath the [G]waves\n[Am] In our [C]yellow [D]submarine\n\n## Coro\n[G] We all live in a [D]yellow submarine\nYellow submarine, [G]yellow submarine\n[G] We all live in a [D]yellow submarine\nYellow submarine, [G]yellow submarine\n\n## Verso 3\n[G] And our [D]friends are [C]all aboard\n[Am] Many [C]more of them live [D]next door\n[G] And the [D]band begins to [G]play:\n[Am] [C] [D]\n\n## Coro\n[G] We all live in a [D]yellow submarine\nYellow submarine, [G]yellow submarine\n[G] We all live in a [D]yellow submarine\nYellow submarine, [G]yellow submarine\n\n## Interludio\nFull steam ahead, Mister Boatswain, full steam ahead\nFull steam ahead it is, Sergeant\n(Cut the cable, drop the cable)\nAye-aye, sir, aye-aye\nCaptain, captain\n\n## Verso 4\n[G] As we [D]live a [C]life of ease (a life of [G]ease)\n[Am] Every [C]one of us (every one of us)\nHas all we [D]need (has all we need)\n[G] Sky of [D]blue (sky of [C]blue)\nAnd sea of [G]green (sea of green)\n[Am] In our [C]yellow (in our yellow)\n[D] Submarine (submarine, aha)\n\n## Coro Final\n[G] We all live in a [D]yellow submarine\nA yellow submarine, [G]yellow submarine\n[G] We all live in a [D]yellow submarine\nA yellow submarine, [G]yellow submarine\n[G] We all live in a [D]yellow submarine\nYellow submarine, [G]yellow submarine\n[G] We all live in a [D]yellow submarine\nYellow submarine, [G]yellow submarine [G]\n"
  },
  {
    "id": "yellow",
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
    ],
    "file": "canciones/yellow.md",
    "content": "---\ntitle: \"Yellow\"\nartist: \"Coldplay\"\nkey: \"G\"\ncapo: 2\ntempo: 88\ntags: [\"pop\", \"rock\", \"2000s\", \"balada\"]\n---\n\n## Intro\n[G] [D] [C] [G]\n\n## Verso 1\n[G] Look at the stars\nLook how they shine for [D]you\nAnd everything you [C]do\nYeah, they were all yellow. [G]\n\n[G] I came along\nI wrote a song for [D]you\nAnd all the things you [C]do\nAnd it was called, \"Yellow\". [G]\n\n[G] So then I took my [D]turn\nOh, what a thing to have [C]done\nAnd it was all yellow. [G]\n\n## Coro\n[C] Your skin, oh yeah, your [Em]skin and [D]bones\n(Ooh) [C]turn into [Em]something [D]beautiful\n(Ah) [C]and you know, [Em]you know I [D]love you so, [C]\nYou know I love you so.\n\n## Verso 2\n[G] I swam across\nI jumped across for [D]you\nOh, what a thing to [C]do\n'Cause you were all yellow. [G]\n\n[G] I drew a line\nI drew a line for [D]you\nOh, what a thing to [C]do\nAnd it was all yellow. [G]\n\n## Coro\n[C] And your skin, oh, yeah, your [Em]skin and [D]bones\n(Ooh) [C]turn into [Em]somethin' [D]beautiful\n(Ah) [C]and you know, [Em]for you, I'd [D]bleed myself dry, [C]\nFor you, I'd bleed myself dry.\n\n## Puente\n[G] It's true\nLook how they shine for [D]you\nLook how they shine for [C]you\nLook how they shine for-\n[G] Look how they shine for [D]you\nLook how they shine for [C]you\nLook how they shine.\n\n## Outro\n[G] Look at the stars\nLook how they shine for [Em]you\nAnd all the things that you [C]do... [G]\n"
  },
  {
    "id": "yesterday",
    "title": "Yesterday",
    "artist": "The Beatles",
    "key": "C",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "rock",
      "balada",
      "60s",
      "classic",
      "himno",
      "inglés"
    ],
    "file": "canciones/yesterday.md",
    "content": "---\ntitle: \"Yesterday\"\nartist: \"The Beatles\"\nkey: \"C\"\ncapo: 0\ntempo: 100\ntags: [\"rock\", \"balada\", \"60s\", \"classic\", \"himno\", \"inglés\"]\n---\n\n## Intro\n[C] [E7] [Am] [F]-[G]-[C] [Am] [D] [C] (2)\n\n## Verso 1\nYesterday, all my troubles seemed so far away,\nNow it looks as though there’re here to stay,\nOh I believe in yesterday.\nSuddenly, I’m not half the man I used to be,\nThere’s a shadow hanging over me\nOh yesterday came suddenly\n\n[E7] [Am]  [G] [C](2)\nWhy she had to go, i don’t know,\nShe wouldn’t say,\nI said somethng wrong,\nNow I long for yesterday\n\n[C] [E7] [Am] [F]-[G]-[C] [Am] [D] [C]\nYesterday, love was such an easy game to play,\nNow I need a place to hide away, oh I believe in yesterday\n"
  },
  {
    "id": "yo-contigo-tu-conmigo",
    "title": "Yo contigo, tú conmigo",
    "artist": "Morat & Álvaro Soler",
    "key": "Am",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "pop",
      "latino",
      "soundtrack"
    ],
    "file": "canciones/yo-contigo-tu-conmigo.md",
    "content": "---\ntitle: \"Yo contigo, tú conmigo\"\nartist: \"Morat & Álvaro Soler\"\nkey: \"Am\"\ncapo: 0\ntempo: 100\ntags: [\"pop\", \"latino\", \"soundtrack\"]\n---\n\n## Intro\n[Am] [E] (2[)/] [F] [G] [Am] (bis) [F]\n\n¿Por qué, por qué, por qué?\nTe veo en el espejo aunque no estés\nReconozco tu voz\nSé que hay algo aquí entre los dos\n-Siento, siento, siento\nQue te conozco de antes de hace tiempo\nQue el destino cumplió su misión\nY aunque quieran quitarme la voz\n\n[F] [C] [G]/ [Am] [Em] [F]/ [C] [G] (2)\nYo pegaré un grito al cielo\nSoy más fuerte si estamos los dos\nVa a rendirse el mundo entero\n-Yo contigo, tú conmigo\nLe daré la vuelta al cuento\n__\nY aunque muera en el intento\nVamos a escribir lo mejor\nYo contigo, tú conmigo\n\n[Am] [Em] [F] [C] (2)\nGon gon goro gon gon\nQue va ser mi gon gon goro gon gon (bis)\n\n[Am] [E] (2[)/] [F] [G] [Am] (bis) [F]\n¿\n\nPor qué, por qué, por qué?\nTe escucho cuando hablo y aunque no estés\nEres parte de mí y no quiero verme sin ti\nSiento, siento, siento\nQue te conozco de antes, de hace tiempo\nQue el destino cumplió su misión\nY aunque quieran quitarme la voz\n\n[C] [G…]\nYo pegaré un grito al cielo…\n\n[Am]-[Em]-[G]-[Am]\nContra el viento,\n\n[F] [C] [G] [Am] (2[)/] [F] [G] [C]\nNuestro momento, sé que ya llegó y lo presiento\nContra el mundo, los mares,\nNo habrá quien nos separe.\nContra el viento, el viento oh\n"
  },
  {
    "id": "yolanda",
    "title": "Yolanda",
    "artist": "Pablo Milanés",
    "key": "C",
    "capo": 0,
    "tempo": 100,
    "tags": [
      "nueva trova",
      "balada",
      "cubano"
    ],
    "file": "canciones/yolanda.md",
    "content": "---\ntitle: \"Yolanda\"\nartist: \"Pablo Milanés\"\nkey: \"C\"\ncapo: 0\ntempo: 100\ntags: [\"nueva trova\", \"balada\", \"cubano\"]\n---\n\n## Intro\n[C] [F] [G] [C]\n\nEsto no puede ser no más que una canción\nQuisiera fuera una declaración de amor\nRomántica, sin reparar en formas tales\nQue pongan freno a lo q siento ahora a raudales\n\nTe amo, te amo, eternamente, te amo\n\nSi me faltaras no voy a morirme\nSi he de morir quiero que sea contigo\nMi soledad se siente acompañada,\nPor eso a veces sé qué necesito\n\nTu mano, tu mano, eternamente, tu mano\n\nCuando te vi, sabía que era cierto\nEste temor de haberte descubierto\nTu me desnudas con siete razones\nY abres el pecho siempre que me colmas\n\nDe amores de amores,\nEternamente de amores\n\nSi alguna vez me siento derrumbado\nRenuncio a ver el sol cada mañana\nRezando el credo que me has enseñado\nMiro a tu cara y digo en la ventana\n\nYolanda, Yolanda, eternamente Yolanda\n"
  },
  {
    "id": "zombie",
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
    ],
    "file": "canciones/zombie.md",
    "content": "---\ntitle: \"Zombie\"\nartist: \"The Cranberries\"\nkey: \"Em\"\ncapo: 0\ntempo: 84\ntags: [\"rock\", \"90s\", \"grunge\", \"fácil\", \"himno\"]\n---\n\n// Progresión de 4 acordes durante toda la canción: Em - C - G - D\n\n## Intro\n[Em] [C] [G] [D]\n[Em] [C] [G] [D]\n\n## Verso 1\n[Em] Another head hangs [C] lowly\n[G] Child is slowly [D] taken\n[Em] And the violence caused such [C] silence\n[G] Who are we mis[D]taken?\n\n## Pre-Coro\nBut you [Em] see, it's not me, it's not [C] my family\nIn your [G] head, in your head, they are [D] fighting\nWith their [Em] tanks and their bombs, and their [C] bombs and their guns\nIn your [G] head, in your head, they are [D] crying\n\n## Coro\nIn your [Em] head, in your [C] head\nZombie, [G] zombie, zombie-ie-[D]ie\nWhat's in your [Em] head, in your [C] head\nZombie, [G] zombie, zombie-ie-[D]ie, oh\n\n## Verso 2\n[Em] Another mother's [C] breakin'\n[G] Heart is taking [D] over\n[Em] When the violence causes [C] silence\n[G] We must be mis[D]taken\n\n## Pre-Coro\nIt's the [Em] same old theme since [C] nineteen-sixteen\nIn your [G] head, in your head, they're still [D] fighting\nWith their [Em] tanks and their bombs, and their [C] bombs and their guns\nIn your [G] head, in your head, they're still [D] dying\n\n## Coro\nIn your [Em] head, in your [C] head\nZombie, [G] zombie, zombie-ie-[D]ie\nWhat's in your [Em] head, in your [C] head\nZombie, [G] zombie, zombie-ie-[D]ie, oh... [Em]\n"
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
