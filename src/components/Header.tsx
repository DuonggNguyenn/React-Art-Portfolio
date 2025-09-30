export default function Header() {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <header className="w-full bg-[#15110B] text-[#C6A664] fixed top-0 left-0 z-60 border-b border-[#C6A664]">
            <div className="max-w-7xl mx-auto w-full px-4">
                <nav className="flex items-center h-12">
                    {/* Logo */}
                    <button 
                    onClick={() => scrollToSection('hero')}
                    className="text-[#C6A664] font-semibold !text-2xl">
                        Artist Portfolio
                    </button>

                    {/* Spacer to match hero layout proportions */}
                    <div className="flex-1"></div>

                    {/* Nav link container - aligned with right content */}
                    <div className="max-w-md flex justify-end">
                        <ul className="flex items-center space-x-6 text-base">
                            <li>
                                <button
                                    onClick={() => scrollToSection('portfolio')}
                                    className="text-white font-light hover:text-[#C6A664] transition-colors duration-200"
                                >
                                    Portfolio
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('about')}
                                    className="text-white font-light hover:text-[#C6A664] transition-colors duration-200"
                                >
                                    About
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="text-white font-light hover:text-[#C6A664] transition-colors duration-200"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}