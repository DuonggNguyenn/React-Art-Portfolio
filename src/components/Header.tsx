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
            <div className="max-w-7xl mx-auto w-full sm:px-6 md:px-8 lg:px-10 xl:px-4 2xl:px-10">
                <nav className="flex items-center sm:h-8 md:h-8 lg:h-8 xl:h-12 2xl:h-14">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection('hero')}
                        className="text-[#C6A664] font-serif font-semibold 
                        sm:!text-sm md:!text-sm lg:!text-base xl:!text-xl 2xl:!text-2xl
                        tracking-wide hover:text-[#E3C97B] hover:scale-105 hover:drop-shadow-[0_0_6px_rgba(227,201,123,0.8)] transition outline-none focus:outline-none"
                    >
                        Artist Portfolio
                    </button>

                    {/* Spacer to match hero layout proportions */}
                    <div className="flex-1"></div>

                    {/* Nav links */}
                    <ul className="hidden md:flex items-center 
                                   md:space-x-4 lg:space-x-5 xl:space-x-5 2xl:space-x-5 
                                   text-sm md:text-[12px] lg:text-sm xl:text-sm 2xl:text-base
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
                            className="flex items-center justify-center p-2 rounded-md text-[#C6A664] hover:text-[#E3C97B] transition-colors duration-200 focus:outline-none"
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
                                <ul className="flex flex-col p-2 space-y-2">
                                    {['portfolio', 'about', 'contact'].map((id) => (    
                                        <li key={id}>
                                            <button
                                                onClick={() => scrollToSection(id)}
                                                className="font-serif text-sm hover:text-[#E3C97B] hover:scale-105 hover:drop-shadow-[0_0_6px_rgba(227,201,123,0.8)] transition-colors duration-200 focus:outline-none focus-visible:outline-none"
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