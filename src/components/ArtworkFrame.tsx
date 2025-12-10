import { AnimatePresence, motion } from "framer-motion";

export default function ArtworkFrame({ src, title, index }: { src: string, title: string, index?: number }) {
    return (
        <div
            className="relative mb-8 mt-12 mx-auto w-full max-w-2xl sm:max-w-2xl"
        >
            {/* Outer frame */}
            <div className="border border-[#C6A664] rounded-xl shadow-[0_0_40px_rgba(198,140,100,0.4)] p-1 bg-[#0F0C08]">
                <div className="border border-[#C6A664]/60 m-1.5">
                    {/* Inner frame */}
                    <div className="bg-[#1f1a12] p-2 rounded-lg relative overflow-hidden">
                        {/* Fast høyde på bildefeltet */}
                        <div className="relative w-full aspect-[4/5]">
                            <AnimatePresence initial={false} mode="sync">
                                <motion.img
                                    key={index}
                                    src={src}
                                    alt={title}
                                    className="absolute inset-0 w-full h-full object-contain rounded-md shadow-lg"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        duration: 1.2,   
                                        ease: "easeInOut",
                                    }}
                                />
                            </AnimatePresence>
                        </div>
                        {/* Title */}
                        <p className="italic font-serif text-sm text-[#C6A664]/90 text-center mt-3 tracking-wide">
                            {title}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}