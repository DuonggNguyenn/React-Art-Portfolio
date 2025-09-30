import { Card, CardContent } from "./ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from "./ui/pagination";
import { Input } from "./ui/input";
import Detail from "./Detail";
import { artworks } from "@/data/artworks";
import { useState } from "react";

export default function Portfolio() {
    const [filter, setFilter] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

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
                    {['All', 'Portrait', 'Oil Painting', 'Landscape', 'Anime'].map((filter) => (
                        <span
                            key={filter}
                            onClick={() => setFilter(filter)}
                            className="bg-[#C6A664] text-[#221B10] px-5 py-2 rounded-2xl text-center font-semibold hover:bg-[rgb(34,27,16)] border border-[#C6A664] hover:text-[#C6A664] transition-colors duration-200 cursor-pointer"
                        >
                            {filter}
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
                            className="w-full md:w-65 border border-[#C6A664] rounded-2xl px-4 py-2 text-[#C6A664] placeholder-[#C6A664]/70 focus-visible:ring-[#C6A664]"
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

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 mt-6">
                    {paginatedArtworks.map((artwork, index) => (
                        <Card
                            key={index}
                            className="group relative overflow-hidden rounded-2xl border border-[#C6A664]/40 bg-[#1b140c] transition-transform duration-200 hover:scale-[1.01]"
                        >
                            <CardContent className="p-0">
                                <div
                                    className="aspect-[3/4] w-full relative cursor-pointer"
                                    onClick={() => setSelectedArtworkId(artwork.id)}
                                >
                                    <img
                                        src={artwork.src}
                                        alt={artwork.title}
                                        loading="lazy"
                                        className="block w-full h-full object-cover"
                                    />

                                    {/* Overlay on hover */}
                                    <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        <div className="p-4 text-white bg-black/50 rounded-lg">
                                            <h3 className="text-lg font-semibold">{artwork.title}</h3>
                                            <p className="text-sm">{artwork.year} | {artwork.medium}</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-end">
                    <div className="mt-4">
                        <Pagination>
                            <PaginationContent>
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
                                        className="text-[#C6A664] text-lg hover:underline" />
                                </PaginationItem>

                                {/* First page */}
                                <PaginationItem>
                                    <PaginationLink
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setCurrentPage(1);
                                        }}
                                        size="default"
                                        className="text-[#C6A664] text-lg hover:underline">
                                        1
                                    </PaginationLink>
                                </PaginationItem>

                                {/* Ellipsis for middle pages */}
                                {currentPage > 3 && (
                                    <PaginationItem>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                )}

                                {/* Middle pages (current -1, current, current +1) */}
                                {Array.from({ length: totalPages }, (_, i) =>
                                    i + 1
                                ).filter(
                                    (page) =>
                                        page !== 1 &&
                                        page !== totalPages &&
                                        Math.abs(page - currentPage) <= 1
                                ).map((page) => (
                                    <PaginationItem key={page}>
                                        {/* Page Numbers */}
                                        <PaginationLink
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setCurrentPage(page);
                                            }}
                                            size="default"
                                            className="text-[#C6A664] text-lg hover:underline">
                                            {page}
                                        </PaginationLink>
                                    </PaginationItem>
                                ))}

                                {/* Ellipsis after middle pages */}
                                {currentPage < totalPages - 1 && (
                                    <PaginationItem>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                )}

                                {/* Last page */}
                                <PaginationItem>
                                    <PaginationLink
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setCurrentPage(totalPages);
                                        }}
                                        size="default"
                                        className="text-[#C6A664] text-lg hover:underline">
                                        {totalPages}
                                    </PaginationLink>
                                </PaginationItem>

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
                                        className="text-[#C6A664] text-lg hover:underline" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
            </div>

            {/* Detail Modal */}
            {selectedArtworkId && (
                <Detail
                    artworkId={selectedArtworkId}
                    onClose={() => setSelectedArtworkId(null)}

                    //TODO: Fix logic
                    onPrev={() => setSelectedArtworkId(
                        (prev) =>
                            (prev ? prev - 1 : prev)
                    )}
                    onNext={
                        () => setSelectedArtworkId(
                            (next) => (next ? next + 1 : next)
                        )
                    }
                />
            )}

        </section>
    );
}
