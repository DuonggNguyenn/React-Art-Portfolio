import { artworks } from "@/data/artworks";

export default function Detail({
    artworkId,
    currentImageId,
    totalArtworks,
    onClose,
    onPrev,
    onNext }:
    {
        artworkId: number,
        currentImageId: number,
        totalArtworks: number,
        onClose: () => void,
        onPrev: () => void,
        onNext: () => void
    }) {

    const artwork = artworks.find(a => a.id === artworkId);

    if (!artwork) {
        // TODO : Handle case where artwork is not found
        return <div className="w-full min-h-screen p-8 bg-[#1A1510] text-[#C6A664] flex flex-col items-center justify-center center">
            <p>Artwork not found.</p>
        </div>;
    }

    return (
        <div className="fixed inset-0
         bg-black/80 
         z-[60] flex flex-col items-center justify-center
         ">
            <div className="max-w-xl w-full p-4 relative">
                {/* Artwork Image */}
                <img
                    key={artwork.id}
                    src={artwork.src}
                    alt="Artwork Detail"
                    className="w-full max-h-[65vh] rounded-t-sm border-2 border-[#C6A664] shadow-lg" />

                {/* Close button */}
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-4 right-4 w-12 h-12
                    border border-[#C6A664] 
                 flex items-center justify-center text-[#C6A664] !text-[20px]
                 hover:bg-[#C6A664] hover:text-[#221B10] transition "

                >
                    ✕
                </button>

                {/* Prev button */}
                {currentImageId > 0 && (
                    <button
                        type="button"
                        onClick={onPrev}
                        className="absolute top-1/2 left-4 
                                    w-10 h-10
                                    border border-[#C6A664] 
                                    flex items-center justify-center text-[#C6A664] !text-[20px]
                                hover:bg-[#C6A664] hover:text-[#221B10] transition"
                    >
                        ◀
                    </button>
                )}

                {/* Next button */}
                {currentImageId < totalArtworks - 1 && (
                    <button
                        type="button"
                        onClick={onNext}
                        className="absolute top-1/2 right-4 w-10 h-10
                                    border border-[#C6A664] 
                                    flex items-center justify-center text-[#C6A664] !text-[20px]
                                hover:bg-[#C6A664] hover:text-[#221B10] transition"
                    >
                        ▶
                    </button>
                )}

                {/* Info box */}
                <div className="bg-[#221B10] border border-[#C6A664] rounded-b-md p-5 text-[#C6A664]">
                    <h2 className="text-xl font-semibold font-serif mb-2 tracking-wide">{artwork.title}</h2>
                    <p className="mb-4 text-[#f5f2e7]">{artwork.description}</p>
                    <p className="text-sm tracking-wider opacity-80"><span className="font-semibold">Medium:</span> {artwork.medium}</p>
                    <p className="text-sm tracking-wider opacity-80"><span className="font-semibold">Year:</span> {artwork.year}</p>
                </div>
            </div>
        </div>
    );
}