export type TranslationText = {
    en: string;
    no: string;
};

export type ArtworkStatus = 'finished' | 'sold' | 'work in progress';

export type Artwork = {
    id: number;
    title: TranslationText;
    description: TranslationText;
    year: number;
    medium: TranslationText;
    category: string;
    src: string;
    views?: number; // Optional field for tracking views
    status?: ArtworkStatus; // Optional field for artwork status
};

export const artworks: Artwork[] = [

    /* Oil Paintings */
    {
        id: 1,
        title:
        {
            "en": "The Shire",
            "no": "Hobbiten"
        },
        description: {
            "en": "A warm oil painting of the Shire from The Hobbit, with green hills, hobbit-holes, and a calm blue sky—capturing the peaceful charm of Tolkien’s world.",
            "no": "Et varmt oljemaleri av Hobbiten, med grønne åser, hobbithuler og en rolig blå himmel som fanger den fredelige sjarmen i Tolkiens verden."
        },
        year: 2024,
        medium: {
            "en": "Oil on Canvas",
            "no": "Olje på lerret"
        },
        category: "Oil Painting",
        src: "artworks/oilpainting/thehobbit-oilpainting.jpg",
        views: 0
    },
    {
        id: 2,
        title: {
            "en": "The Swan Lake",
            "no": "Svanesjøen"
        },
        description: {
            "en": "A peaceful oil painting of a swan    swimming together across a lily-covered lake, shaded by the soft branches of a willow tree.",
            "no": "Et fredelig oljemaleri av en svanefamilie som svømmer sammen over en liljedekket innsjø, skygget av de myke grenene til et piletre."
        },
        year: 2025,
        medium: {
            "en": "Oil on Canvas",
            "no": "Olje på lerret"
        },
        category: "Oil Painting",
        src: "artworks/oilpainting/theswan-oilpainting.jpeg",
        views: 0
    },
    {
        id: 3,
        title: {
            "en": "Still Life with Everyday Objects",
            "no": "Stilleben med hverdagsobjekter"
        },
        description: {
            "en": "A quiet still life oil painting, where everyday objects rest in soft shadows and gentle light.",
            "no": "Et stille oljemaleri, hvor hverdagsobjekter hviler i myke skygger og mildt lys."
        },
        year: 2024,
        medium: {
            "en": "Oil on Canvas",
            "no": "Olje på lerret"
        },
        category: "Oil Painting",
        src: "artworks/oilpainting/stilllife-oilpainting.jpeg",
        views: 0
    },
    {
        id: 4,
        title: { 
            "en": "Under the chandelier",
            "no": "Under lysekronen"
            },
        description: {
            "en": "An oil painting of a moonlit ballroom, where the heroine moves slowly toward her lover beneath glowing chandeliers, surrounded by softly watching guests.",
            "no": "Et oljemaleri av en måneskinnsball, hvor helten beveger seg sakte mot sin elskede under glødende lysekroner, omgitt av mykt observerende gjester."
        },
        year: 2025,
        medium: {
            "en": "Oil on Canvas",
            "no": "Olje på lerret"
        },
        category: "Oil Painting",
        src: "artworks/oilpainting/theballroom-oilpainting.jpeg",
        views: 0,
        status: 'work in progress'
    },

    /* Portraits */
    {
        id: 5,
        title: {
            "en": "The Dreammakers",
            "no": "Drømmemakerne"
        },
        description: {
            "en": "A gouache painting created as a tribute to Hayao Miyazaki and Joe Hisaishi — the two artists whose work shaped my sense of wonder since childhood, surrounded by my favorite Ghibli characters.",
            "no": "Et gouache-maleri laget som en hyllest til Hayao Miyazaki og Joe Hisaishi — de to kunstnerne hvis arbeid har formet min følelse av undring siden barndommen, omgitt av mine favoritt Ghibli-figurer."
        },
        year: 2025,
        medium: {
            "en": "Gouache on Paper",
            "no": "Gouache på papir"
        },
        category: "Portrait",
        src: "artworks/portrait/ghibli-portrait.jpeg",
        views: 0
    },
    {
        id: 6,
        title: {
            "en": "Squid Game",
            "no": "Squid Game"
        },
        description: {
            "en": "A graphite sketch of the main player, with the Chairman and guards in the background, capturing the intense atmosphere of the series.",
            "no": "En grafittskisse av hovedspilleren, med formannen og vaktene i bakgrunnen, som fanger den intense atmosfæren i serien."
        },
        year: 2025,
        medium: {
            "en": "Graphite on Paper",
            "no": "Grafitt på papir"
        },
        category: "Portrait",
        src: "artworks/portrait/squidgame-portrait.jpeg",
        views: 0
    },
    {
        id: 7,
        title: {
            "en": "The Beatles in Starry Night",
            "no": "The Beatles i Stjernenatt"
        },
        description: {
            "en": "A detailed portrait of The Beatles set against the backdrop of Van Gogh's Starry Night, blending their unique features with the iconic swirling skies.",
            "no": "Et detaljert portrett av The Beatles satt mot bakteppet av Van Goghs Stjernenatt, som blander deres unike trekk med de ikoniske virvlende himlene."
        },
        year: 2025,
        medium: {
            "en": "Graphite on Paper",
            "no": "Grafitt på papir"
        },
        category: "Portrait",
        src: "artworks/portrait/thebeatles-portrait.jpeg",
        views: 0
    },
    {
        id: 8,
        title: {
            "en": "Jack Sparrow",
            "no": "Jack Sparrow"
        },
        description: {
            "en": "A graphite portrait of the charismatic Captain Jack Sparrow, one of my favorite characters from the Pirates of the Caribbean series.",
            "no": "Et grafittportrett av den karismatiske kaptein Jack Sparrow, en av mine favorittkarakterer fra Pirates of the Caribbean-serien."
        },
        year: 2024,
        medium: {
            "en": "Graphite on Paper",
            "no": "Grafitt på papir"
        },
        category: "Portrait",
        src: "artworks/portrait/jacksparrow_portrait.jpeg",
        views: 0
    },
    {
        id: 9,
        title: {
            "en": "Professor McGonagall",
            "no": "Professor McGonagall"
        },
        description: {
            "en": "A graphite sketch of Professor McGonagall, one of the most respected and powerful witches in the Harry Potter series.",
            "no": "En grafittskisse av professor McGonagall, en av de mest respekterte og mektige heksene i Harry Potter-serien."
        },
        year: 2025,
        medium: {
            "en": "Graphite on Paper",
            "no": "Grafitt på papir"
        },
        category: "Portrait",
        src: "artworks/portrait/mcgonagall_portrait.jpeg",
        views: 0
    },
    {
        id: 10,
        title: {
            "en": "Oppenheimer",
            "no": "Oppenheimer"
        },
        description: {
            "en": "A graphite portrait capturing J. Robert Oppenheimer at three significant stages of his life—before, during, and after the creation of the atom bomb.",
            "no": "Et grafittportrett som fanger J. Robert Oppenheimer i tre betydningsfulle stadier av hans liv—før, under og etter skapelsen av atombomben."
        },
        year: 2025,
        medium: {
            "en": "Graphite on Paper",
            "no": "Grafitt på papir"
        },
        category: "Portrait",
        src: "artworks/portrait/oppenheimer-portrait.jpeg",
        views: 0
    },
    {
        id: 11,
        title: {
            "en": "Audrey Hepburn",
            "no": "Audrey Hepburn"
        },
        description: {
            "en": "A graphite portrait capturing the timeless elegance and grace of Audrey Hepburn, an icon of elegance and grace whose timeless style has always inspired me.",
            "no": "Et grafittportrett som fanger den tidløse elegansen og nåden til Audrey Hepburn, et ikon for eleganse og nåde hvis tidløse stil alltid har inspirert meg."
        },
        year: 2025,
        medium: {
            "en": "Graphite on Paper",
            "no": "Grafitt på papir"
        },
        category: "Portrait",
        src: "artworks/portrait/audreyhepburn-portrait.jpeg",
        views: 0
    },
    {
        id: 12,
        title: {
            "en": "Davy Jones",
            "no": "Davy Jones"
        },
        description: {
            "en": "A graphite sketch of Davy Jones, known for his tragic love and haunting presence beneath the waves in the Pirates of the Caribbean series.",
            "no": "En grafittskisse av Davy Jones, kjent for sin tragiske kjærlighet og hjemsøkende tilstedeværelse under bølgene i Pirates of the Caribbean-serien."
        },
        year: 2025,
        medium: {
            "en": "Graphite on Paper",
            "no": "Grafitt på papir"
        },
        category: "Portrait",
        src: "artworks/portrait/davyjones-portrait.jpeg",
        views: 0
    },
    {
        id: 13,
        title: {
            "en": "Freddie Mercury",
            "no": "Freddie Mercury"
        },
        description: {
            "en": "A graphite sketch capturing the legendary Freddie Mercury, portrayed with his trademark charisma and powerful stage presence.",
            "no": "En grafittskisse som fanger den legendariske Freddie Mercury, portrettert med sin karakteristiske karisma og kraftige scenetilstedeværelse."
        },
        year: 2025,
        medium: {
            "en": "Graphite on Paper",
            "no": "Grafitt på papir"
        },
        category: "Portrait",
        src: "artworks/portrait/freddiemercury-portrait.jpeg",
        views: 0
    },
    {
        id: 14,
        title: {
            "en": "A Girlfriend Portrait",
            "no": "Et portrett av en kjæreste"
        },
        description: {
            "en": "A graphite sketch of my friend in her prime, showing her natural confidence and the bright joy of youth that I admire so much.",
            "no": "En grafittskisse av min venninne i sin beste alder, som viser hennes naturlige selvtillit og den lyse gleden av ungdom som jeg beundrer så mye."
        },
        year: 2024,
        medium: {
            "en": "Graphite on Paper",
            "no": "Grafitt på papir"
        },
        category: "Portrait",
        src: "artworks/portrait/friend_portrait.jpeg",
        views: 0
    },
    {
        id: 15,
        title: {
            "en": "Mother of Dragons",
            "no": "Dragenes mor"
        },
        description: {
            "en": "A graphite sketch of Daenerys Targaryen, surrounded by her dragons and bearing the Targaryen sigil",
            "no": "En grafittskisse av Daenerys Targaryen, omgitt av dragene sine og bærende Targaryen-sigillet"
        },
        year: 2023,
        medium: {
            "en": "Graphite on Paper",
            "no": "Grafitt på papir"
        },
        category: "Portrait",
        src: "artworks/portrait/gameofthrones-portrait.jpeg",
        views: 0
    },
    {
        id: 16,
        title: {
            "en": "Cole Sprouse",
            "no": "Cole Sprouse"
        },
        description: {
            "en": "A graphite portrait of Cole Sprouse, whom many people recognize from “The Suite Life of Zack & Cody.",
            "no": "Et grafittportrett av Cole Sprouse, som mange kjenner igjen fra «The Suite Life of Zack & Cody.»"
        },
        year: 2023,
        medium: {
            "en": "Graphite on Paper",
            "no": "Grafitt på papir"
        },
        category: "Portrait",
        src: "artworks/portrait/colesprouse-portrait.jpeg",
        views: 0
    },
    {
        id: 17,
        title: {
            "en": "Daenerys Targaryen I",
            "no": "Daenerys Targaryen I"
        },
        description: {
            "en": "My first graphite portrait of Daenerys Targaryen, inspired by her strength and grace as the Mother of Dragons.",
            "no": "Mitt første grafittportrett av Daenerys Targaryen, inspirert av hennes styrke og nåde som Dragenes mor."
        },
        year: 2023,
        medium: {
            "en": "Graphite on Paper",
            "no": "Grafitt på papir"
        },
        category: "Portrait",
        src: "artworks/portrait/danaerys_portrait.jpeg",
        views: 0
    },
    {
        id: 18,
        title: {
            "en": "Tom Hiddleston",
            "no": "Tom Hiddleston"
        },
        description: {
            "en": "A graphite sketch of Tom Hiddleston—an actor I admire, especially for his witty and unforgettable role as Loki in the Marvel universe.",
            "no": "En grafittskisse av Tom Hiddleston—en skuespiller jeg beundrer, spesielt for hans vittige og uforglemmelige rolle som Loki i Marvel-universet."
        },
        year: 2024,
        medium: {
            "en": "Graphite on Paper",
            "no": "Grafitt på papir"
        },
        category: "Portrait",
        src: "artworks/portrait/tomhiddleston_portrait.jpeg",
        views: 0
    },

    /* Landscapes */
    {
        id: 19,
        title: {
            "en": "Den Røde Broen, Trondheim",
            "no": "Den Røde Broen, Trondheim"
        },
        description: {
            "en": "A watercolor painting of Den Røde Broen in Trondheim, Norway - one of my favourite views in the city",
            "no": "Et akvarellmaleri av Den Røde Broen i Trondheim, Norge - en av mine favorittutkikkspunkter i byen"
        },
        year: 2025,
        medium: {
            "en": "Watercolor on Paper",
            "no": "Akvarell på papir"
        },
        category: "Landscape",
        src: "artworks/landscape/trondheim-landscape.jpeg",
        views: 0
    },
    {
        id: 20,
        title: {
            "en": "Arendal Landscape",
            "no": "Arendal Landskap"
        },
        description: {
            "en": "A stunning coastal landscape, showcasing the beauty of Arendal with intricate detail and vibrant colors.",
            "no": "Et fantastisk kystlandskap som viser skjønnheten i Arendal med intrikat detalj og levende farger."
        },
        year: 2025,
        medium: {
            "en": "Watercolor on Paper",
            "no": "Akvarell på papir"
        },
        category: "Landscape",
        src: "artworks/landscape/arendal-landscape.jpeg",
        views: 0
    },
    {
        id: 21,
        title: {
            "en": "Nidarosdommen Landscape",
            "no": "Nidarosdommen Landskap"
        },
        description: {
            "en": "A captivating view of Nidarosdommen, the stunning cathedral in Trondheim, Norway. A place full of history and architectural beauty.",
            "no": "En fengslende utsikt over Nidarosdommen, den fantastiske katedralen i Trondheim, Norge. Et sted fullt av historie og arkitektonisk skjønnhet."
        },
        year: 2024,
        medium: {
            "en": "Watercolor on Paper",
            "no": "Akvarell på papir"
        },
        category: "Landscape",
        src: "artworks/landscape/nidarosdommen-landscape.jpeg",
        views: 0
    },
    {
        id: 22,
        title: {
            "en": "Hogwarts Express Landscape",
            "no": "Hogwarts-ekspressen Landskap"
        },
        description: {
            "en": "A gouache painting of the Hogwarts Express traveling through the Scottish Highlands. Bringing back magical memories from the Harry Potter series.",
            "no": "Et gouache-maleri av Hogwarts-ekspressen som reiser gjennom de skotske høylandene. Vekker magiske minner fra Harry Potter-serien."
        },
        year: 2024,
        medium: {
            "en": "Gouache on Paper",
            "no": "Gouache på papir"
        },
        category: "Landscape",
        src: "artworks/landscape/hogwartstrain-landscape.jpeg",
        views: 0
    },

    /* Anime */
    {
        id: 23,
        title: {
            "en": "Titans and Their Hosts",
            "no": "Titanene og deres verter"
        },
        description: {
            "en": "A colored pencil artwork of all the Titan forms and their human hosts from Attack on Titan.",
            "no": "Et fargeblyantkunstverk av alle titanformene og deres menneskelige verter fra Attack on Titan."
        },
        year: 2023,
        medium: {
            "en": "Colored Pencils on Paper",
            "no": "Fargeblyanter på papir"
        },
        category: "Anime",
        src: "artworks/anime/aot-anime.jpeg",
        views: 0
    },
    {
        id: 24,
        title: {
            "en": "Howl's Moving Castle",
            "no": "Howl's Moving Castle"
        },
        description: {
            "en": "A gouache painting of the flying castle from Howl’s Moving Castle, inspired by the film’s final scene where it soars through the sky.",
            "no": "Et gouache-maleri av det flygende slottet fra Howl’s Moving Castle, inspirert av filmens siste scene der det svever gjennom himmelen."
        },
        year: 2023,
        medium: {
            "en": "Gouache on Paper",
            "no": "Gouache på papir"
        },
        category: "Anime",
        src: "artworks/anime/howls-moving-castle-ghibli.jpeg",
        views: 0
    },
    {
        id: 25,
        title: {
            "en": "Totoro in a forest (My Neighbor Totoro)",
            "no": "Totoro i en skog (Min nabo Totoro)"
        },
        description: {
            "en": "A gouache painting of Totoro resting peacefully among the trees, surrounded by the calm and magic of the forest.",
            "no": "Et gouache-maleri av Totoro som hviler fredelig blant trærne, omgitt av skogens ro og magi."
        },
        year: 2024,
        medium: {
            "en": "Gouache on Paper",
            "no": "Gouache på papir"
        },
        category: "Anime",
        src: "artworks/anime/totoro-ghibli.jpeg",
        views: 0
    },
    {
        id: 26,
        title: {
            "en": "Howl and Sophie (Howl's Moving Castle)",
            "no": "Howl og Sophie (Howl's Moving Castle)"
        },
        description: {
            "en": "A gouache painting of Howl and Sophie from Howl’s Moving Castle. Their story always inspires me with its themes of love and transformation.",
            "no": "Et gouache-maleri av Howl og Sophie fra Howl’s Moving Castle. Deres historie inspirerer meg alltid med sine temaer om kjærlighet og forvandling."
        },
        year: 2023,
        medium: {
            "en": "Gouache on Paper",
            "no": "Gouache på papir"
        },
        category: "Anime",
        src: "artworks/anime/howland-sophie-ghibli.jpeg",
        views: 0
    },
    {
        id: 27,
        title: {
            "en": "Kiki in the Bakery (Kiki's Delivery Service)",
            "no": "Kiki i bakeriet (Kikis budservice)"
        },
        description: {
            "en": "A gouache painting inspired by Kiki’s Delivery Service, showing Kiki and Jiji in Osono’s bakery as she waves to the customers.",
            "no": "Et gouache-maleri inspirert av Kikis budservice, som viser Kiki og Jiji i Osonos bakeri mens hun vinker til kundene."
        },
        year: 2023,
        medium: {
            "en": "Gouache on Paper",
            "no": "Gouache på papir"
        },
        category: "Anime",
        src: "artworks/anime/kiki-ghibli.jpeg",
        views: 0
    },
    {
        id: 28,
        title: {
            "en": "Power and Vy (Arcane)",
            "no": "Power og Vy (Arcane)"
        },
        description: {
            "en": "A gouache painting of Vi and Powder from Arcane, inspired by their bond and the emotional contrast between love, loss, and strength.",
            "no": "Et gouache-maleri av Vi og Powder fra Arcane, inspirert av deres bånd og den emosjonelle kontrasten mellom kjærlighet, tap og styrke."
        },
        year: 2023,
        medium: {
            "en": "Gouache on Paper",
            "no": "Gouache på papir"
        },
        category: "Anime",
        src: "artworks/anime/power-and-vy-arcane.jpeg",
        views: 0
    },
    {
        id: 29,
        title: {
            "en": "Chihiro and Haku (Spirited Away)",
            "no": "Chihiro og Haku (Chihiro og heksa)"
        },
        description: {
            "en": "A gouache painting of Chihiro and Haku in their final embrace from Spirited Away. A tender moment where love, memory, and magic meet—two souls holding on before drifting apart.",
            "no": "Et gouache-maleri av Chihiro og Haku i deres siste omfavnelse fra Chihiro og heksa. Et ømt øyeblikk hvor kjærlighet, minner og magi møtes—to sjeler som holder fast før de driver fra hverandre."
        },
        year: 2023,
        medium: {
            "en": "Gouache on Paper",
            "no": "Gouache på papir"
        },
        category: "Anime",
        src: "artworks/anime/chihiroandhaku-ghibli.jpeg",
        views: 0
    },
    {
        id: 30,
        title: {
            "en": "Ducks in a Bath (Spirited Away)",
            "no": "Ender i et bad (Chihiro og heksa)"
        },
        description: {
            "en": "A gouache painting inspired by Spirited Away, showing the playful bathhouse scene with the ducks enjoying their time in the water.",
            "no": "Et gouache-maleri inspirert av Chihiro og heksa, som viser den lekne badstuescenen med endene som nyter tiden i vannet."
        },
        year: 2023,
        medium: {
            "en": "Gouache on Paper",
            "no": "Gouache på papir"
        },
        category: "Anime",
        src: "artworks/anime/ducks-in-a-bath-ghibli.jpeg",
        views: 0
    },
    {
        id: 31,
        title: {
            "en": "Sheeta (Castle in the Sky)",
            "no": "Sheeta (Himmelens slott)"
        },
        description: {
            "en": "A gouache painting of Sheeta from Castle in the Sky, inspired by the peaceful moment when she feeds the pigeons.",
            "no": "Et gouache-maleri av Sheeta fra Himmelens slott, inspirert av det fredelige øyeblikket når hun mater due."
        },
        year: 2023,
        medium: {
            "en": "Gouache on Paper",
            "no": "Gouache på papir"
        },
        category: "Anime",
        src: "artworks/anime/laputa-ghibli.jpeg",
        views: 0
    },
    {
        id: 32,
        title: {
            "en": "Chihiro's flowers (Spirited Away)",
            "no": "Chihiros blomster (Chihiro og heksa)"
        },
        description: {
            "en": "A gouache painting inspired by the opening scene of Spirited Away, showing Chihiro’s flower bouquet with her name card tucked inside.",
            "no": "Et gouache-maleri inspirert av åpningsscenen i Chihiro og heksa, som viser Chihiros blomsterbukett med navnekortet hennes stukket inn."
        },
        year: 2023,
        medium: {
            "en": "Gouache on Paper",
            "no": "Gouache på papir"
        },
        category: "Anime",
        src: "artworks/anime/chihiros-flowers-ghibli.jpeg",
        views: 0
    },
     {
        id: 33,
        title: {
            "en": "The Boy and The Heron (Ghibli)",
            "no": "Gutten og hegren (Ghibli)"
        },
        description: {
            "en": "A gouache painting tribute to The Boy and the Heron — capturing the quiet bond between the boy and his strange, magical guide",
            "no": "Et gouache-maleri til ære for Gutten og hegren — som fanger det stille båndet mellom gutten og hans merkelige, magiske veileder"
        },
        year: 2023,
        medium: {
            "en": "Gouache on Paper",
            "no": "Gouache på papir"
        },
        category: "Anime",
        src: "artworks/anime/the-boy-and-heron-ghibli.jpeg",
        views: 0
    },
    {
        id: 34,
        title: {
            "en": "Nahoko - The Wind Rises (Ghibli)",
            "no": "Nahoko - Vinden stiger (Ghibli)"
        },
        description: {
            "en": "A gouache painting painting of Nahoko from The Wind Rises, a gentle soul and one of the strongest girls I’ve ever known.",
            "no": "Et gouache-maleri av Nahoko fra Vinden stiger, en mild sjel og en av de sterkeste jentene jeg noen gang har kjent."
        },
        year: 2023,
        medium: {
            "en": "Gouache on Paper",
            "no": "Gouache på papir"
        },
        category: "Anime",
        src: "artworks/anime/the-wind-rises-ghibli.jpeg",
        views: 0
    },
    {
        id: 35,
        title: {
            "en": "Arrietty (Ghibli)",
            "no": "Arrietty (Ghibli)"
        },
        description: {
            "en": "Arrietty in gouache — a reminder that even the smallest hearts can carry the greatest courage.",
            "no": "Et gouache-maleri av Arrietty, en påminnelse om at selv de minste hjerter kan bære det største motet."
        },
        year: 2023,
        medium: {
            "en": "Gouache on Paper",
            "no": "Gouache på papir"
        },
        category: "Anime",
        src: "artworks/anime/arrietty-ghibli.jpeg",
        views: 0
    },
    {
        id: 36,
        title: {
            "en": "Thomas Shelby",
            "no": "Thomas Shelby"
        },
        description: {
            "en": "Graphite sketches of Thomas Shelby, the cunning and ambitious leader from Peaky Blinders.",
            "no": "Grafittskisser av Thomas Shelby, den listige og ambisiøse lederen fra Peaky Blinders."
        },
        year: 2024,
        medium: {
            "en": "Graphite on Paper",
            "no": "Grafitt på papir"
        },
        category: "Portrait",
        src: "artworks/portrait/thomasshelby-portrait.jpeg",
        views: 0
    }
]
