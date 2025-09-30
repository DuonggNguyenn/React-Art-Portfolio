import { artworks } from "@/data/artworks";

export default function Detail({
    artworkId,
    onClose,
    onPrev,
    onNext }:
    {
        artworkId: number,
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
        <div className="fixed inset-0 bg-black/70 z-[60] flex flex-col items-center justify-center">
            <div className="max-w-xl w-full p-4 relative">
                {/* Artwork Image */}
                <img 
                key={artwork.id} 
                src={artwork.src} 
                alt="Artwork Detail" 
                className="w-full h-auto rounded-2xl shadow-lg" />

                {/* Close button */}
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-3 right-5 !px-3 
                    bg-transparent text-white font-extrabold 
                    leading-none !text-[24px] md:text-[36px]
                     hover:text-black"
                >
                    ✕
                </button>

                {/* Prev button */}
                <button
                    type="button"
                    onClick={onPrev}
                    className="absolute top-1/2 left-1 px-3 text-white text-2xl font-bold bg-transparent hover:text-gray-300"
                >
                    ◀
                </button>

                {/* Next button */}
                <button
                    type="button"
                    onClick={onNext}
                    className="absolute top-1/2 right-1 px-3 text-white text-2xl font-bold bg-transparent hover:text-gray-300"
                >
                    ▶
                </button>

            </div>

            {/* Info box */}
            <div className="max-w-xl w-full p-4 mx-auto">
                <div className="bg-[#C6A664] text-[#221B10] p-6 rounded-2xl shadow-lg mb-10">
                    <h2 className="text-3xl font-semibold mb-4">{artwork.title}</h2>
                    <p className="mb-4">{artwork.description}</p>
                    <p className="mb-2"><span className="font-semibold">Medium:</span> {artwork.medium}</p>
                    <p className="mb-2"><span className="font-semibold">Year:</span> {artwork.year}</p>
                </div>
            </div>
        </div>
    );
}