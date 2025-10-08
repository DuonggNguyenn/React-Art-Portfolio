import { useState } from "react";

export default function Header() {

    const[menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
        }
    }

    return (
        <header className="w-full fixed top-0 left-0 z-60
                         bg-[#15110B] bg-gradient-to-b from-[#15110B] to-[#302617]
                          text-[#C6A664] 
                          border-b border-[#C6A664]">
            <div className="max-w-7xl mx-auto w-full px-6 xl:px-4">
                <nav className="flex items-center h-8 xl:h-12">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection('hero')}
                        className="text-[#C6A664] font-serif font-semibold 
                        !text-sm xl:!text-xl 
                        tracking-wide hover:text-[#E3C97B] hover:scale-105 hover:drop-shadow-[0_0_6px_rgba(227,201,123,0.8)] transition outline-none focus:outline-none"
                    >
                        Artist Portfolio
                    </button>

                    {/* Spacer to match hero layout proportions */}
                    <div className="flex-1"></div>

                    {/* Nav links */}
                    <ul className="hidden md:flex items-center 
                                   space-x-4 xl:space-x-5
                                   text-sm xl:text-medium
                                   font-light tracking-wide
                                  ">
                        {['portfolio', 'about', 'contact'].map((id) => (
                            <li key={id}>
                                <button
                                    onClick={() => scrollToSection(id)}
                                    className="hover:text-[#E3C97B] hover:scale-105 hover:drop-shadow-[0_0_6px_rgba(227,201,123,0.8)] transition-colors duration-200 focus:outline-none focus-visible:outline-none"
                                >
                                    {id.charAt(0).toUpperCase() + id.slice(1)}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile menu hamburger */}
                    <div className="md:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)}
                            className="!p-0 !m-0 flex items-center justify-center rounded-md text-[#C6A664] hover:text-[#E3C97B] transition-colors duration-200 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? (
                                //Close X menu icon
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            ) : (
                                //Hamburger menu icon
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            )}
                            <span className="sr-only">{menuOpen ? "Close Menu" : "Open Menu"}</span>
                        </button>

                        {/* When menu is open, show mobile menu items */}
                        {menuOpen && (
                            <div className="absolute top-full right-0 mt-2 w-40 bg-[#15110B] border border-[#C6A664] border:p-1 rounded-md shadow-lg">
                                <ul className="flex flex-col p-2 space-y-1">
                                    {['portfolio', 'about', 'contact'].map((id) => (    
                                        <li key={id}>
                                            <button
                                                onClick={() => scrollToSection(id)}
                                                className="!font-serif font-light text-sm hover:text-[#E3C97B] hover:scale-105 hover:drop-shadow-[0_0_6px_rgba(227,201,123,0.8)] transition-colors duration-200 focus:outline-none focus-visible:outline-none"
                                            >
                                                {id.charAt(0).toUpperCase() + id.slice(1)}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </nav>  
            </div>
        </header>
    )
}