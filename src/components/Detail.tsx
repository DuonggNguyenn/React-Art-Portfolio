export default function Detail() {
    return (
        <div className="w-full min-h-screen p-8 bg-[#1A1510] text-[#C6A664] flex flex-col items-center justify-center center">
            <div className="max-w-xl w-full p-4 relative">
                <img src="/src/assets/hobbit-painting.jpg" alt="Artwork Detail" className="w-full h-auto rounded-2xl shadow-lg" />

                {/* Close button */}
                <button
                    type="button"
                    onClick={() => {
                        // clear logic
                    }}
                    className="absolute top-4 right-4 px-3 text-white 
                    text-2xl font-extrabold 
                    bg-transparent hover:text-gray-300"
                >
                    ✕
                </button>

                {/* Prev button */}
                <button
                    type="button"
                    onClick={() => {
                        // clear logic
                    }}
                    className="absolute top-1/2 left-1 px-3 text-white text-2xl font-bold bg-transparent hover:text-gray-300"
                >
                    ◀
                </button>

                {/* Next button */}
                <button
                    type="button"
                    onClick={() => {
                        // clear logic
                    }}
                    className="absolute top-1/2 right-1 px-3 text-white text-2xl font-bold bg-transparent hover:text-gray-300"
                >
                    ▶
                </button>

            </div>

            {/* Info box */}
            <div>
                <div className="max-w-xl bg-[#C6A664] text-[#221B10] p-6 rounded-2xl shadow-lg mt-5 mb-10">
                    <h2 className="text-3xl font-semibold mb-4">Hobbit Painting</h2>
                    <p className="mb-4">A beautiful depiction of a hobbit, capturing the essence of fantasy and adventure through intricate brushwork and vibrant colors.</p>
                    <p className="mb-2"><span className="font-semibold">Medium:</span> Oil on Canvas</p>
                    <p className="mb-2"><span className="font-semibold">Dimensions:</span> 24" x 36"</p>
                    <p className="mb-2"><span className="font-semibold">Year:</span> 2023</p>
                </div>
            </div>
        </div>
    );
}