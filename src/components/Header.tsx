export default function Header() {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <header className="w-full fixed top-0 left-0 z-60
                         bg-[#15110B] bg-gradient-to-b from-[#15110B] to-[#302617]
                          text-[#C6A664]  
                          border-b border-[#C6A664]">
            <div className="max-w-7xl mx-auto w-full xl:px-4 2xl: px-10">
                <nav className="flex items-center xl:h-12 2xl:h-14">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection('hero')}
                        className="text-[#C6A664] font-serif font-semibold 
                        xl:!text-xl 2xl:!text-2xl
                        tracking-wide hover:text-[#E3C97B] hover:scale-110 transition outline-none focus:outline-none"
                    >
                        Artist Portfolio
                    </button>

                    {/* Spacer to match hero layout proportions */}
                    <div className="flex-1"></div>

                    {/* Nav links */}
                    <ul className="flex items-center 
                                   xl:space-x-5 2xl:space-x-5 
                                   xl:text-sm 2xl:text-base
                                   font-light tracking-wide
                                  ">
                        {['portfolio', 'about', 'contact'].map((id) => (
                            <li key={id}>
                                <button
                                    onClick={() => scrollToSection(id)}
                                    className="hover:text-[#E3C97B] hover:scale-110 transition-colors duration-200 focus:outline-none focus-visible:outline-none"
                                >
                                    {id.charAt(0).toUpperCase() + id.slice(1)}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}