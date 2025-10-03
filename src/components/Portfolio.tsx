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
            bg-[rgb(10,7,1)] text-[#C6A664]
            bg-[url('/public/textures/canvas-pattern.jpg')] bg-cover bg-blend-overlay pt-25 pb-20
            ">
            <div className="max-w-6xl mx-auto px-6">
                {/* Heading */}
                <div className="w-full text-center">
                    <h2 className="text-5xl font-semibold mb-8 font-serif">Portfolio</h2>
                    <p className="border-b border-[#C6A664] mb-8 w-150 mx-auto"></p>
                    <p className="text-lg text-[#f5f5f5] font-serif tracking-wide">A collection of moments, sketches, and visions from my artistic journey.</p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-6 mb-8 mt-8">
                    {['All', 'Portrait', 'Oil Painting', 'Landscape', 'Anime'].map((category) => (
                        <span
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-5 py-2 rounded-2xl text-center  
                                ${filter === category ?
                                    "bg-[#C6A664] px-4 py-2 rounded-full text-[#221B10] text-base text-center tracking-wide font-serif cursor-pointer" :
                                    "bg-transparent px-4 py-2 rounded-full border border-[#C6A664] text-[#C6A664] text-base text-center tracking-wide font-serif cursor-pointer hover:bg-[#C6A664] hover:text-[#221B10] transition-colors duration-200"
                                }`}>
                            {category}
                        </span>
                    ))}
                </div>

                {/* Search Bar */}
                <div className="flex justify-end mb-12">
                    <div className="w-full md:w-auto relative">
                        <Input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            aria-label="Search"
                            placeholder="Search..."
                            className="w-full md:w-65 border border-[#C6A664] rounded-2xl px-4 py-2 text-[#C6A664] font-serif placeholder:text-[#C6A664] focus:ring-1 focus:ring-[#C6A664] focus:border-[#C6A664]"
                        />
                        {/* ✕ button */}
                        <button
                            type="button"
                            onClick={() => {
                                setSearchTerm("");
                            }}
                            className="absolute inset-y-0 right-0 px-3 flex items-center text-[#C6A664] bg-transparent hover:text-white"
                        >
                            ✕
                        </button>
                    </div>
                </div>

                {filteredArtworks.length === 0 ?
                    (<p className="text-center text-lg text-[#C6A664] mt-10 font-serif">
                        No artworks found.
                    </p>) :
                    (
                        // Artworks Grid
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
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
                                                <div className="border-1 border-[#C6A664]/60 p-2">
                                                    <img
                                                        src={artwork.src}
                                                        alt={artwork.title}
                                                        loading="lazy"
                                                        className="block w-full h-[420px] object-cover "
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
                    <div className="flex justify-end mt-12">
                        <Pagination className="[&]:mx-0 [&]:justify-end">
                            <PaginationContent className="flex items-center gap-2">
                                <PaginationItem>
                                    {/* Previous Page Button */}
                                    <PaginationPrevious
                                        href="#"
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
                                        px-3 py-2 h-10 flex items-center justify-center
                                        rounded-full border border-[#C6A664]/60 
                                        text-[#C6A664] font-serif 
                                        transition hover:!bg-[#C6A664] hover:text-[#221B10] hover:shadow-[0_0_10px_rgba(198,166,100,0.5)]" />
                                </PaginationItem>


                                {/* Middle pages (current -1, current, current +1) */}
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
                                                className={`px-3 py-2 rounded-full border border-[#C6A664]/60 flex items-center justify-center min-w-[2.5rem] h-10 cursor-pointer
                                                        ${currentPage === page ?
                                                        'bg-[#C6A664] text-[#221B10] font-serif' :
                                                        'border border-[#C6A664]/60 text-[#C6A664] font-serif hover:!bg-[#C6A664] hover:text-[#221B10] hover:shadow-[0_0_10px_rgba(198,166,100,0.5)]'}`}>
                                                {page}
                                            </PaginationLink>
                                        </PaginationItem>
                                    </React.Fragment>
                                ))}
                                <PaginationItem>
                                    {/* Next Page Button */}
                                    <PaginationNext
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (currentPage < totalPages) {
                                                setCurrentPage(page => page + 1)
                                            }
                                        }}
                                        size="default"
                                        className="
                                        px-3 py-2 h-10 flex items-center justify-center
                                        rounded-full border border-[#C6A664]/60 
                                        text-[#C6A664] font-serif 
                                        transition hover:!bg-[#C6A664] hover:text-[#221B10] hover:shadow-[0_0_10px_rgba(198,166,100,0.5)]" />
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
