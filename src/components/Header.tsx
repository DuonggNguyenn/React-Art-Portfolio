import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from '/artworks/artist-portrait/logo.png';

export default function Header() {
    const NAV_IDS = ['portfolio', 'about', 'contact'];
    const [menuOpen, setMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
        }
    }

    const changeLanguage = (lng: "en" | "no") => {
        i18n.changeLanguage(lng);
    }

    return (
        <header
            className="w-full fixed top-0 left-0 z-60
             bg-[#15110B] bg-gradient-to-b from-[#15110B] to-[#302617]
             text-[#C6A664]
             border-b border-[#C6A664]"
        >
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
                <nav className="flex items-center justify-between h-10 lg:h-14">
                    {/* Logo */}
                    <button
                        type="button"
                        onClick={() => scrollToSection('hero')}
                        className="group flex items-center cursor-pointer outline-none focus:outline-none !p-0 !m-0"
                    >
                        <img
                            src={logo}
                            alt="Gallery logo"
                            className="
                                h-25 lg:h-35
                                mt-2 xl:mt-3
                                w-auto
                                object-contain
                                drop-shadow-[0_0_4px_rgba(0,0,0,0.6)]
                                group-hover:drop-shadow-[0_0_8px_rgba(227,201,123,0.85)] duration-200 group-hover:scale-[1.03]"
                        />
                    </button>
                    {/* Spacer to match hero layout proportions */}
                    <div className="flex-1"></div>

                    {/* Nav links */}
                    <ul className="hidden md:flex items-center font-serif
                                   space-x-4 xl:space-x-5
                                   text-sm xl:text-medium tracking-wide
                                  ">
                        {NAV_IDS.map((id) => (
                            <li key={id}>
                                <button
                                    onClick={() => scrollToSection(id)}
                                    className="hover:text-[#E3C97B] hover:scale-105 hover:drop-shadow-[0_0_6px_rgba(227,201,123,0.8)] transition-colors duration-200 focus:outline-none focus-visible:outline-none"
                                >
                                    {t(`header.${id}`)}
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* 🔀 Language switcher in top navbar */}
                    <div className="hidden md:flex items-center space-x-2 ml-4">
                        <button
                            onClick={() => changeLanguage("en")}
                            className={`text-xs border px-2 py-1 rounded 
                         ${i18n.language.startsWith("en") ? "opacity-100" : "opacity-60"}`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => changeLanguage("no")}
                            className={`text-xs border px-2 py-1 rounded 
                         ${i18n.language.startsWith("no") ? "opacity-100" : "opacity-60"}`}
                        >
                            NO
                        </button>
                    </div>

                    {/* Mobile menu hamburger */}
                    <div className="md:hidden">
                        <button onClick={() => setMenuOpen(!menuOpen)}
                            className="!p-0 !m-5 flex items-center justify-center rounded-md text-[#C6A664] hover:text-[#E3C97B] transition-colors duration-200 focus:outline-none"
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
                            <span className="sr-only">{menuOpen ? t('header.closeMenu') : t('header.openMenu')}</span>
                        </button>

                        {/* When menu is open, show mobile menu items */}
                        {menuOpen && (
                            <div className="absolute top-full right-0 mt-2 w-40 bg-[#15110B] border border-[#C6A664] border:p-1 rounded-md shadow-lg">
                                <ul className="flex flex-col p-2 space-y-1">
                                    {NAV_IDS.map((id) => (
                                        <li key={id}>
                                            <button
                                                onClick={() => scrollToSection(id)}
                                                className="!font-serif font-light text-sm hover:text-[#E3C97B] hover:scale-105 hover:drop-shadow-[0_0_6px_rgba(227,201,123,0.8)] transition-colors duration-200 focus:outline-none focus-visible:outline-none"
                                            >
                                                {t(`header.${id}`)}
                                            </button>
                                        </li>
                                    ))}
                                    <li>
                                        <button
                                            onClick={() => changeLanguage("en")}
                                            className={`!font-serif font-light text-sm hover:text-[#E3C97B] hover:scale-105 hover:drop-shadow-[0_0_6px_rgba(227,201,123,0.8)] transition-colors duration-200 focus:outline-none focus-visible:outline-none
                                        ${i18n.language.startsWith("en") ? "opacity-100" : "opacity-60"}`}
                                        >EN</button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => changeLanguage("no")}
                                            className={`!font-serif font-light text-sm hover:text-[#E3C97B] hover:scale-105 hover:drop-shadow-[0_0_6px_rgba(227,201,123,0.8)] transition-colors duration-200 focus:outline-none focus-visible:outline-none
                                        ${i18n.language.startsWith("no") ? "opacity-100" : "opacity-60"}`}
                                        >NO</button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    )
}