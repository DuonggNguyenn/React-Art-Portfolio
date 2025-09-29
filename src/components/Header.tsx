export default function Header() {
   
    return (
        <header className="w-full bg-[#15110B] text-[#C6A664] fixed top-0 left-0 z-50 border-b border-[#C6A664] py-2">
            <div className="max-w-7xl mx-auto px-10 w-full">
                <nav className="flex items-center py-2">
                    {/* Logo */}
                    <h1 className="text-[#C6A664] font-semibold text-2xl flex-shrink-0">
                        Artist Portfolio
                    </h1>

                    {/* Spacer to match hero layout proportions */}
                    <div className="flex-1"></div>
                    
                    {/* Nav link container - aligned with right content */}
                    <div className="max-w-md flex justify-end">
                        <ul className="flex space-x-8 text-lg">
                            <li>
                                <a 
                                    href="#portfolio" 
                                    className="text-white font-light hover:text-[#C6A664] transition-colors duration-200"
                                >
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#about" 
                                    className="text-white font-light hover:text-[#C6A664] transition-colors duration-200"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#contact" 
                                    className="text-white font-light hover:text-[#C6A664] transition-colors duration-200"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}