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
    {
        id: 1,
        title: "Hobbit Painting",
        description: "A beautiful depiction of a hobbit, capturing the essence of fantasy and adventure through intricate brushwork and vibrant colors.",
        year: 2024,
        medium: "Oil on Canvas",
        category: "Oil Painting",
        src: "public/artworks/hobbit-painting.jpg"
    },
    {
        id: 2,
        title: "Portrait",
        description: "A detailed portrait of a person, showcasing their unique features and expressions with a blend of realism and artistic flair.",
        year: 2025,
        medium: "Oil on Canvas",
        category: "Portrait",       
        src: "public/artworks/portrait.jpg"
    },
    {
        id: 3,
        title: "Landscape",
        description: "A serene landscape scene that captures the beauty of nature, with lush greenery and a tranquil atmosphere.",
        year: 2023,
        medium: "Oil on Canvas",
        category: "Landscape",        
        src: "public/artworks/landscape-painting.jpg"
    },
]