
export default function ArtworkFrame({ src, title }: { src: string, title: string }) {
    return (
        <div className="relative mb-8 mt-20">
            {/* Outer frame */}
            <div className="border-1 border-[#C6A664] rounded-sm shadow-[0_0_40px_rgba(198,140,100,0.5)] p-1
                                      bg-[#0F0C08]">
                <div className="border-2 border-[#C6A664]/60 m-2">
                    {/* Inner frame with image */}
                    <div className="bg-[#1f1a12] p-4 rounded-sm">

                        {/* Current image (fading in) */}
                        <img
                            src={src}
                            alt={title}
                            className="w-full h-full lg:max-w-sm object-cover rounded-md shadow-lg animate-fadeCrossfade"
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
