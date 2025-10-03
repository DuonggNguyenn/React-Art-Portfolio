export type Artwork = {
    id: number;
    title: string;
    description: string;
    year: number;
    medium: string;
    category: string;
    src: string;
};

export const artworks: Artwork[] = [

    /* Oil Paintings */
    {
        id: 1,
        title: "Hobbit Painting",
        description: "A beautiful depiction of a hobbit, capturing the essence of fantasy and adventure through intricate brushwork and vibrant colors.",
        year: 2024,
        medium: "Oil on Canvas",
        category: "Oil Painting",
        src: "artworks/oilpainting/thehobbit-oilpainting.jpeg"
    },
    {
        id: 2,
        title: "The swan lake",
        description: "A serene landscape scene that captures the beauty of nature, with lush greenery and a tranquil atmosphere.",
        year: 2025,
        medium: "Oil on Canvas",
        category: "Oil Painting",
        src: "artworks/oilpainting/theswan-oilpainting.jpeg"
    },
    {
        id: 3,
        title: "Still Life Painting",
        description: "A beautiful depiction of a still life arrangement, capturing the essence of everyday objects through intricate brushwork and vibrant colors.",
        year: 2024,
        medium: "Oil on Canvas",
        category: "Oil Painting",
        src: "artworks/oilpainting/stilllife-oilpainting.jpeg"
    },
    {
        id: 4,
        title: "Portrait",
        description: "A detailed portrait of a person, showcasing their unique features and expressions with a blend of realism and artistic flair.",
        year: 2025,
        medium: "Oil on Canvas",
        category: "Portrait",
        src: "artworks/artist-portrait.jpg"
    },

    /* Portraits */
    {
        id: 5,
        title: "Squid Game Portrait",
        description: "A detailed portrait of a character from Squid Game, capturing their unique features and expressions with a blend of realism and artistic flair.",
        year: 2025,
        medium: "Graphite on Paper",
        category: "Portrait",
        src: "artworks/portrait/squidgame-portrait.jpeg"
    },
    {
        id: 6,
        title: "The Beatles Portrait",
        description: "A detailed portrait of The Beatles, capturing their unique features and expressions with a blend of realism and artistic flair.",
        year: 2025,
        medium: "Graphite on Paper",
        category: "Portrait",
        src: "artworks/portrait/thebeatles-portrait.jpeg"
    },
    {
        id: 7,
        title: "Jack Sparrow Portrait",
        description: "A detailed portrait of Jack Sparrow, showcasing his unique features and expressions with a blend of realism and artistic flair.",
        year: 2024,
        medium: "Graphite on Paper",
        category: "Portrait",
        src: "artworks/portrait/jacksparrow_portrait.jpeg"
    },
    {
        id: 8,
        title: "Professor McGonagall Portrait",
        description: "A detailed portrait of Professor McGonagall, capturing her unique features and expressions with a blend of realism and artistic flair.",
        year: 2025,
        medium: "Graphite on Paper",
        category: "Portrait",
        src: "artworks/portrait/mcgonagall_portrait.jpeg"
    },
    {
        id: 9,
        title: "Oppenheimer Portrait",
        description: "A detailed portrait of Oppenheimer, showcasing his intelligence and complexity with a blend of realism and artistic flair.",
        year: 2025,
        medium: "Graphite on Paper",
        category: "Portrait",
        src: "artworks/portrait/oppenheimer-portrait.jpeg"
    },
    {
        id: 10,
        title: "Audrey Hepburn Portrait",
        description: "A detailed portrait of Audrey Hepburn, showcasing her timeless elegance and charm with a blend of realism and artistic flair.",
        year: 2025,
        medium: "Graphite on Paper",
        category: "Portrait",
        src: "artworks/portrait/audreyhepburn-portrait.jpeg"
    },
    {
        id: 11,
        title: "Davy Jones Portrait",
        description: "A detailed portrait of Davy Jones, capturing his enigmatic presence and intricate features with a blend of realism and artistic flair.",
        year: 2025,
        medium: "Graphite on Paper",
        category: "Portrait",
        src: "artworks/portrait/davyjones-portrait.jpeg"
    },
    {
        id: 12,
        title: "Freddie Mercury Portrait",
        description: "A detailed portrait of Freddie Mercury, showcasing his charisma and unique style with a blend of realism and artistic flair.",
        year: 2025,
        medium: "Graphite on Paper",
        category: "Portrait",
        src: "artworks/portrait/freddiemercury-portrait.jpeg"
    },
    {
        id: 13,
        title: "A girlfriend Portrait",
        description: "A detailed portrait of a girlfriend, capturing her beauty and charm with a blend of realism and artistic flair.",
        year: 2024,
        medium: "Graphite on Paper",
        category: "Portrait",
        src: "artworks/portrait/friend_portrait.jpeg"
    },
    {
        id: 14,
        title: "Game of Thrones Portrait",
        description: "A detailed portrait of a character from Game of Thrones, showcasing their unique features and expressions with a blend of realism and artistic flair.",
        year: 2023,
        medium: "Graphite on Paper",
        category: "Portrait",
        src: "artworks/portrait/gameofthrones-portrait.jpeg"
    },
    {
        id: 15,
        title: "Cole Sprouse Portrait",
        description: "A detailed portrait of Cole Sprouse, capturing his unique features and expressions with a blend of realism and artistic flair.",
        year: 2023,
        medium: "Graphite on Paper",
        category: "Portrait",
        src: "artworks/portrait/colesprouse-portrait.jpeg"
    },
    {
        id: 16,
        title: "Daenerys Targaryen Portrait",
        description: "A detailed portrait of Daenerys Targaryen, showcasing her strength and beauty with a blend of realism and artistic flair.",
        year: 2023,
        medium: "Graphite on Paper",
        category: "Portrait",
        src: "artworks/portrait/danaerys_portrait.jpeg"
    },
    {
        id: 17,
        title: "Tom Hiddleston Portrait",
        description: "A detailed portrait of Tom Hiddleston, capturing his charismatic presence and intricate features with a blend of realism and artistic flair.",
        year: 2024,
        medium: "Graphite on Paper",
        category: "Portrait",
        src: "artworks/portrait/tomhiddleston_portrait.jpeg"
    },

    /* Landscapes */
    {
        id: 18,
        title: "Trondheim Landscape",
        description: "A breathtaking view of Trondheim, Norway, capturing the charm of its historic architecture and stunning natural surroundings with intricate detail and vibrant colors.",
        year: 2024,
        medium: "Watercolor on Paper",
        category: "Landscape",
        src: "artworks/landscape/trondheim-landscape.jpeg",
    },
    {
        id: 19,
        title: "Arendal Landscape",
        description: "A stunning coastal landscape, showcasing the beauty of Arendal's archipelago with intricate detail and vibrant colors.",
        year: 2025,
        medium: "Watercolor on Paper",
        category: "Landscape",
        src: "artworks/landscape/arendal-landscape.jpeg"
    },
    {
        id: 20,
        title: "Nidarosdommen Landscape",    
        description: "A captivating view of Nidarosdommen, the stunning cathedral in Trondheim, Norway, showcasing its intricate architecture and historical significance with vibrant colors.",
        year: 2024,
        medium: "Watercolor on Paper",
        category: "Landscape",
        src: "artworks/landscape/nidarosdommen-landscape.jpeg"
    },
    {
        id: 21,
        title: "Hogwarts Express Landscape",
        description: "A beautiful depiction of the Hogwarts Express traveling through the Scottish Highlands, capturing the essence of its magical journey with intricate detail and vibrant colors.",
        year: 2024,
        medium: "Gouache on Paper",
        category: "Landscape",
        src: "artworks/landscape/hogwartstrain-landscape.jpeg"
    },

    /* Anime */
    {
        id: 22,
        title: "All Titan Forms (Attack on Titan)",
        description: "A dynamic illustration showcasing all the titan forms from Attack on Titan, capturing their unique features and powerful presence with vibrant colors and intricate details.",
        year: 2023,
        medium: "Colored Pencils on Paper",
        category: "Anime",
        src: "artworks/anime/aot-anime.jpeg"
    },
        {
        id: 23,
        title: "Howl's Moving Castle",
        description: "A stunning illustration of Howl's Moving Castle, capturing its whimsical design and magical essence with vibrant colors and intricate details.",
        year: 2023,
        medium: "Gouache on Paper",
        category: "Anime",
        src: "artworks/anime/howls-moving-castle-ghibli.jpeg"
    },
    {
        id: 24,
        title: "Totoro in a forest (My Neighbor Totoro)",
        description: "A striking illustration of Totoro from My Neighbor Totoro, capturing his whimsical presence and unique design with bold colors and intricate details.",
        year: 2024,
        medium: "Gouache on Paper",
        category: "Anime",
        src: "artworks/anime/totoro-ghibli.jpeg"
    },
     {
        id: 25,
        title: "Howl and Sophie (Howl's Moving Castle)",
        description: "A beautiful illustration featuring Howl and Sophie from Howl's Moving Castle, capturing their unique personalities and dynamic poses with intricate details and bold colors.",
        year: 2023,
        medium: "Gouache on Paper",
        category: "Anime",
        src: "artworks/anime/howland-sophie-ghibli.jpeg"
    },
     {
        id: 26,
        title: "Kiki in the Bakery (Kiki's Delivery Service)",
        description: "A charming illustration featuring Kiki and Jiji from Kiki's Delivery Service, capturing their unique personalities and dynamic poses with intricate details and bold colors.",
        year: 2023,
        medium: "Gouache on Paper",
        category: "Anime",
        src: "artworks/anime/kiki-ghibli.jpeg"
    },
    {
        id: 27,
        title: "Power and Vy (Arcane)",
        description: "A delightful illustration featuring Power and Vy from Arcane, capturing their unique personalities and dynamic poses with intricate details and bold colors.",
        year: 2024,
        medium: "Gouache on Paper",
        category: "Anime",
        src: "artworks/anime/power-and-vy-arcane.jpeg"
    },
    {
        id: 28,
        title: "Chihiro and Haku (Spirited Away)",
        description: "A vibrant illustration featuring Chihiro and Haku from Spirited Away, capturing their unique personalities and dynamic poses with intricate details and bold colors.",
        year: 2023,
        medium: "Gouache on Paper",
        category: "Anime",
        src: "artworks/anime/chihiroandhaku-ghibli.jpeg"
    },
    {
        id: 29,
        title: "Ducks in a Bath (Spirited Away)",
        description: "A captivating illustration featuring characters from Spirited Away, showcasing their unique designs and dynamic poses with vibrant colors and intricate details.",
        year: 2023,
        medium: "Gouache on Paper",
        category: "Anime",
        src: "artworks/anime/ducks-in-a-bath-ghibli.jpeg"
    },
    {
        id: 30,
        title: "Sheeta (Castle in the Sky)",
        description: "A captivating illustration featuring Sheeta from Castle in the Sky, showcasing her enigmatic presence and unique design with vibrant colors and intricate details.",
        year: 2023,
        medium: "Gouache on Paper",
        category: "Anime",
        src: "artworks/anime/laputa-ghibli.jpeg"
    },
    {
        id: 31,
        title: "Chihiro's flowers (Spirited Away)",
        description: "A striking illustration of Chihiro's flowers from Spirited Away, capturing their delicate beauty and vibrant colors with intricate details.",
        year: 2023,
        medium: "Gouache on Paper",
        category: "Anime",
        src: "artworks/anime/chihiros-flowers-ghibli.jpeg"
    }
]
