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
            <div className="max-w-7xl mx-auto w-full px-4">
                <nav className="flex items-center h-12">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection('hero')}
                        className="text-[#C6A664] font-serif font-semibold !text-2xl tracking-wide hover:text-[#E3C97B] transition "
                    >
                        Artist Portfolio
                    </button>

                    {/* Spacer to match hero layout proportions */}
                    <div className="flex-1"></div>

                    {/* Nav links */}
                    <ul className="flex items-center space-x-8 text-sm font-light tracking-wide">
                        {['portfolio','about','contact'].map((id) => (
                            <li key={id}>
                                <button
                                    onClick={() => scrollToSection(id)}
                                    className="hover:text-[#E3C97B] transition-colors duration-200"
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