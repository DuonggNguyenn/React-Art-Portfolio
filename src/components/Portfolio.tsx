import { Card, CardContent } from "./ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from "./ui/pagination";
import { Input } from "./ui/input";
import Detail from "./Detail";
import { artworks } from "@/data/artworks";
import React, { useEffect, useState } from "react";

export default function Portfolio() {
    const [filter, setFilter] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        setCurrentPage(1);
    }, [filter, searchTerm]);

    useEffect(() => {
        const portfolio = document.getElementById("portfolio");
        if (portfolio) {
            const timeout = setTimeout(() => {
                portfolio.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100); // 200ms delay

            return () => clearTimeout(timeout);
        }
    }, [currentPage]);

    //Apply filtering + searching
    const filteredArtworks = artworks.filter(artwork => {
        const matchesCategory = filter === "All" || artwork.category === filter;
        const searchedArtworks = artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            artwork.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            artwork.medium.toLowerCase().includes(searchTerm.toLowerCase()) ||
            artwork.year.toString().includes(searchTerm);
        return matchesCategory && searchedArtworks;
    });

    // Work out slice for pagination
    const totalPages = Math.ceil(filteredArtworks.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedArtworks = filteredArtworks.slice(startIndex, endIndex);

    //Selected Artwork
    const [selectedArtworkId, setSelectedArtworkId] = useState<number | null>(null);

    const currentImageId = filteredArtworks.findIndex(a => a.id === selectedArtworkId);

    return (
        <section
            id="portfolio"
            className="min-h-screen w-full 
            bg-[rgb(20,14,2)] text-[#C6A664]
            bg-[url('textures/canvas-pattern.jpg')] bg-cover bg-blend-overlay 
            ">
            <div className="max-w-xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
                {/* Heading */}
                <div className="w-full text-center">
                    <h2 className="text-xl sm:text-2xl xl:text-4xl pt-20 lg:pt-20 font-semibold  font-serif">
                        Portfolio
                        <div className="border-b border-[#C6A664] my-4 lg:my-6 mx-auto w-90 sm:w-120 lg:w-140"></div>
                    </h2>

                    <p className="text-sm mx-6 xl:text-base 2xl:text-base text-[#f5f5f5] font-sans tracking-wide">A collection of moments, sketches, and visions from my artistic journey.</p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-3 lg:gap-6 my-4 lg:my-6 font-serif text-sm md:text-base">
                    {['All', 'Portrait', 'Oil Painting', 'Landscape', 'Anime'].map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            role="tab"
                            aria-selected={filter === category}
                            className={`
                                    relative cursor-pointer transition-colors duration-200
                                    ${filter === category
                                    ? "text-[#C6A664] font-bold after:w-full"
                                    : "text-[#C6A664]/50 hover:text-[#C6A664] after:w-0 hover:after:w-full"
                                }
                                    after:absolute after:left-1 after:-bottom-[0.2px] after:h-[1px] after:bg-[#C6A664]
                                    after:transition-all after:duration-300
                                    `}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Search Bar */}
                <div className="flex justify-center xl:justify-end mb-10 px-6 sm:px-4 lg:px-8">
                    <div className="relative w-full max-w-xs xl:max-w-sm">
                        <Input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            aria-label="Search"
                            placeholder="Search..."
                            className="w-full text-sm xl:text-base 2xl:text-base border border-[#C6A664] rounded-2xl px-4 py-2 text-[#C6A664] font-serif placeholder:text-[#C6A664] focus:ring-1 focus:ring-[#C6A664] focus:border-[#C6A664]"
                        ></Input>
                        {/* ✕ button */}
                        <button
                            type="button"
                            onClick={() => {
                                setSearchTerm("");
                            }}
                            className="absolute inset-y-[-0.5rem] right-0 text-[#C6A664] bg-transparent hover:text-white"
                        >
                            ✕
                        </button>
                    </div>
                </div>

                {filteredArtworks.length === 0 ?
                    (<p className="text-center text-sm lg:text-base xl:text-lg 2xl:text-lg text-[#C6A664] mt-10 font-serif">
                        No artworks found.
                    </p>) :
                    (
                        // Artworks Grid
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 px-6 sm:px-4 lg:px-8 justify-center">
                            {paginatedArtworks.map((artwork, index) => (
                                <Card
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl border border-[#C6A664]/40 bg-[#1b140c] transition-transform duration-200 hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(198,166,100,0.4)]"
                                >
                                    <CardContent className="p-0">
                                        <div
                                            className=" w-full relative cursor-pointer"
                                            onClick={() => setSelectedArtworkId(artwork.id)}
                                        >
                                            {/* Artwork Image */}
                                            <div className="border-1 border-[#C6A664] shadow-[0_8px_20px_rgba(0,0,0,0.6)] bg-[#0F0C08] p-2">
                                                <div className="aspect-[3/4] border-1 border-[#C6A664]/60 p-2 bg-black">
                                                    <img
                                                        src={artwork.src}
                                                        alt={artwork.title}
                                                        loading="lazy"
                                                        className="h-full w-full object-cover
                                                                   transition-all duration-500 ease-in-out
                                                                   group-hover:object-contain group-hover:bg-black"
                                                    />
                                                </div>
                                            </div>

                                            {/* Overlay on hover */}
                                            <div className="absolute bottom-4.5 left-4.5 -translate-x-0 bg-[#0F0C08]/90 
                                                            border border-[#C6A664]/60 px-4 py-2 opacity-0 
                                                            group-hover:opacity-100 transition duration-300">
                                                <h3 className="text-sm font-serif text-[#C6A664]">{artwork.title}</h3>
                                                <p className="text-xs text-white/70 font-sans">{artwork.year} | {artwork.medium}</p>
                                            </div>

                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>)
                }

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-end py-6 sm:py-8">
                        <Pagination className="[&]:mx-0">
                            <PaginationContent className="flex flex-wrap items-center gap-2
                                                          justify-center sm:justify-end">
                                <PaginationItem>
                                    {/* Previous Page Button */}
                                    <PaginationPrevious

                                        onClick={
                                            (e) => {
                                                if (currentPage > 1) {
                                                    setCurrentPage(page => page - 1)
                                                }
                                                e.preventDefault();
                                            }
                                        }
                                        size="default"
                                        className="
                                        !bg-transparent !border-none !shadow-none text-[#C6A664] hover:text-[#e2c98f] hover:underline hover:underline-offset-5 transition-colors cursor-pointer" />
                                </PaginationItem>


                                {/* Middle pages (current -1, current, current +1) */}
                                <div className="hidden sm:flex items-center gap-2">
                                    {Array.from({ length: totalPages }, (_, i) =>
                                        i + 1
                                    ).filter(
                                        (page) =>
                                            page === 1 ||
                                            page === totalPages ||
                                            (page >= currentPage - 1 && page <= currentPage + 1)
                                    ).map((page, idx, arr) => (
                                        <React.Fragment key={page}>
                                            {idx > 0 && page - arr[idx - 1] > 1 && (
                                                <PaginationItem>
                                                    <PaginationEllipsis className="text-[#C6A664]" />
                                                </PaginationItem>
                                            )}

                                            <PaginationItem>
                                                {/* Normal page button */}
                                                <PaginationLink onClick={(e) => {
                                                    e.preventDefault();
                                                    setCurrentPage(page);
                                                }}
                                                    className={` flex items-center justify-center min-w-[2.5rem] h-10 cursor-pointer
                                                        ${currentPage === page ?
                                                            'text-[#C6A664] font-semibold underline underline-offset-5 font-serif hover:!bg-transparent hover:!border-none hover:text-[#e2c98f]' :
                                                            'text-[#C6A664]/70 hover:text-[#e2c98f] hover:!bg-transparent hover:!border-none'} `}>
                                                    {page}
                                                </PaginationLink>
                                            </PaginationItem>
                                        </React.Fragment>
                                    ))}
                                </div>

                                <PaginationItem>
                                    {/* Next Page Button */}
                                    <PaginationNext
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (currentPage < totalPages) {
                                                setCurrentPage(page => page + 1)
                                            }
                                        }}
                                        size="default"
                                        className="
                                        !bg-transparent !border-none !shadow-none text-[#C6A664] hover:text-[#e2c98f] hover:underline hover:underline-offset-5 transition-colors cursor-pointer" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                )}

                {/* Detail Modal */}
                {selectedArtworkId && (
                    <Detail
                        artworkId={selectedArtworkId}
                        currentImageId={currentImageId}
                        totalArtworks={filteredArtworks.length}
                        onClose={() => setSelectedArtworkId(null)}

                        onPrev={() => {
                            if (currentImageId > 0) {
                                setSelectedArtworkId(filteredArtworks[currentImageId - 1].id)
                            }
                        }}
                        onNext={() => {
                            if (currentImageId < filteredArtworks.length - 1) {
                                setSelectedArtworkId(filteredArtworks[currentImageId + 1].id)
                            }
                        }}
                    />
                )}
            </div>
        </section >
    );
}
