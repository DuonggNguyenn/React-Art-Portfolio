export default function ArtworkFrame({ src, title }: { src: string, title: string }) {
    return (
        <div
            className="relative mb-8 mt-20 
                    mx-auto
                    w-full
                    max-w-xs sm:max-w-sm 2xl:max-w-md"
        >
            {/* Outer frame */}
            <div className="border border-[#C6A664] rounded-xl shadow-[0_0_40px_rgba(198,140,100,0.4)] p-1 bg-[#0F0C08]">
                <div className="border border-[#C6A664]/60 m-1.5">
                    {/* Inner frame with image */}
                    <div className="bg-[#1f1a12] p-2 rounded-lg">
                        <img
                            src={src}
                            alt={title}
                            className="
                                        w-full h-auto 
                                        object-cover rounded-md shadow-lg 
                                        animate-fadeCrossfade
                                        "
                        />
                        <p className="italic font-serif text-sm text-[#C6A664]/90 text-center mt-3 tracking-wide">
                            {title}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

}
