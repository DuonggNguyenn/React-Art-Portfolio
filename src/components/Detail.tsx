import { artworks } from "@/data/artworks";

export default function Detail({
    artworkId,
    currentImageId,
    totalArtworks,
    onClose,
    onPrev,
    onNext
}: {
    artworkId: number;
    currentImageId: number;
    totalArtworks: number;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}) {
    const artwork = artworks.find((a) => a.id === artworkId);

    if (!artwork) {
        return (
            <div className="w-full min-h-screen p-8 bg-[#1A1510] text-[#C6A664] flex flex-col items-center justify-center">
                <p>Artwork not found.</p>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4">
            <div className="relative flex flex-col xl:flex-row w-full max-w-6xl border border-[#C6A664] rounded-xl shadow-2xl overflow-hidden bg-[#221B10]">

                {/* Artwork Image */}
                <div className="relative flex-1 flex items-center justify-center bg-black">
                    <img
                        key={artwork.id}
                        src={artwork.src}
                        alt="Artwork Detail"
                        className="w-full h-auto max-h-[80vh] object-contain"
                    />

                    {/* Prev button */}
                    {currentImageId > 0 && (
                        <button
                            type="button"
                            onClick={onPrev}
                            className="absolute top-1/2 left-0 -translate-y-1/2 w-10 h-10 border border-[#C6A664] rounded-full
                                       flex items-center justify-center text-[#C6A664] text-lg
                                     bg-black/60 hover:bg-[#C6A664] hover:text-[#221B10] transition"
                        >
                            ◀
                        </button>
                    )}

                    {/* Next button */}
                    {currentImageId < totalArtworks - 1 && (
                        <button
                            type="button"
                            onClick={onNext}
                            className="absolute top-1/2 right-0 -translate-y-1/2 w-10 h-10 border border-[#C6A664] rounded-full
                                       flex items-center justify-center text-[#C6A664] text-lg
                                     bg-black/60 hover:bg-[#C6A664] hover:text-[#221B10] transition"
                        >
                            ▶
                        </button>
                    )}

                </div>

                {/* Info Box */}
                <div className="xl:w-[40%] p-6 text-[#C6A664] flex flex-col justify-center ">
                    <h2 className="xl:text-xl 2xl:text-2xl font-serif font-semibold mb-3 tracking-wide">
                        {artwork.title}
                    </h2>
                    <p className="mb-4 text-[#f5f2e7] text-[15px] md:text-sm xl:text-sm 2xl:text-base leading-relaxed">
                        {artwork.description}
                    </p>
                    <p className="text-sm tracking-wider opacity-80 mb-1">
                        <span className="font-semibold">Medium:</span> {artwork.medium}
                    </p>
                    <p className="text-sm tracking-wider opacity-80">
                        <span className="font-semibold">Year:</span> {artwork.year}
                    </p>
                </div>

                {/* Close Button */}
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-0 right-0 w-10 h-10 border border-[#C6A664] rounded-full
                               flex items-center justify-center text-[#C6A664] text-lg
                             hover:bg-[#C6A664] hover:text-[#221B10] transition"
                >
                    ✕
                </button>

            </div>
        </div>
    );
}
