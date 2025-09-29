import { Card, CardContent } from "./ui/card";
import portraitPainting from '../assets/portrait.jpg';
import hobbitPainting from '../assets/hobbit-painting.jpg';
import landscapePainting from '../assets/landscape-painting.jpg';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";
import { Input } from "./ui/input";
export default function Portfolio() {
    const artworks = [
        {
            src: hobbitPainting,
            title: "Hobbit Painting",
            description: "A beautiful depiction of a hobbit.",
            category: "Oil Painting"
        },
        {
            src: portraitPainting,
            title: "Portrait",
            description: "A detailed portrait of a person.",
            category: "Portrait"
        },
        {
            src: landscapePainting,
            title: "Landscape",
            description: "A serene landscape scene.",
            category: "Landscape"
        },

    ];

    return (
        <section
            id="portfolio"
            className="min-h-screen w-full bg-[rgb(34,27,16)] text-[#C6A664] py-25">
            <div className="max-w-6xl mx-auto px-8">
                {/* Heading */}
                <div className="w-full text-center">
                    <h2 className="text-5xl font-semibold mb-8">Gallery</h2>
                    <p className="text-lg text-[#f5f5f5]">A collection of moments, sketches, and visions from my artistic journey.</p>
                </div>


                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-10 mt-10">
                    {['All', 'Portraits', 'Oil Painting', 'Landscape', 'Anime'].map((filter) => (
                        <span
                            key={filter}
                            className="bg-[#C6A664] text-[#221B10] px-5 py-2 rounded-2xl text-center font-semibold hover:bg-[rgb(34,27,16)] border border-[#C6A664] hover:text-[#C6A664] transition-colors duration-200 cursor-pointer"
                        >
                            {filter}
                        </span>
                    ))}
                </div>

                <div className="flex justify-end mb-10">
                    <div className="w-full md:w-auto relative">
                        <Input
                            aria-label="Search"
                            placeholder="Search..."
                            className="w-full md:w-72 border border-[#C6A664] rounded-2xl px-4 py-2 text-[#C6A664] placeholder-[#C6A664]/70 focus-visible:ring-[#C6A664]"
                        />
                        {/* ✕ button */}
                        <button
                            type="button"
                            onClick={() => {
                                // clear logic
                            }}
                            className="absolute inset-y-0 right-0 px-3 flex items-center text-[#C6A664] bg-transparent hover:text-white"
                        >
                            ✕
                        </button>
                    </div>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 mt-6">
                    {artworks.map((artwork, index) => (
                        <Card
                            key={index}
                            className="group relative overflow-hidden rounded-2xl border border-[#C6A664]/40 bg-[#1b140c] transition-transform duration-200 hover:scale-[1.01]"
                        >
                            <CardContent className="p-0">
                                <div className="aspect-[3/4] w-full">
                                    <img
                                        src={artwork.src}
                                        alt={artwork.title}
                                        loading="lazy"
                                        className="block w-full h-full object-cover"
                                    />

                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        <div className="p-4 text-white bg-black/50 rounded-lg">
                                            <h3 className="text-lg font-semibold">{artwork.title}</h3>
                                            <p className="text-sm">{artwork.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Back to Home button and Pagination */}
                <div className="flex justify-between">
                    <div className="text-left mt-7">
                        <a href="#hero" className="text-lg text-[#C6A664] hover:underline">
                            ← Back to Home
                        </a>
                    </div>
                    <div className="mt-5">
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href="#" size="default" className="text-[#C6A664] text-lg hover:underline" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#" size="default" className="text-[#C6A664] text-lg hover:underline">
                                        1
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#" size="default" className="text-[#C6A664] text-lg hover:underline">
                                        2
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#" size="default" className="text-[#C6A664] text-lg hover:underline">
                                        3
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href="#" size="default" className="text-[#C6A664] text-lg hover:underline" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
            </div>

        </section>
    );
}
