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
