import { Logo } from "./Logo";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="absolute top-0 left-0 right-0 py-8 flex items-center justify-between px-4 md:px-6 lg:px-[40px]">
            <div>
                <Logo />
            </div>
            
            {/* Menu para Mobile */}
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden z-50"
            >
                <span className="sr-only">Menu</span>
                {/* Ícone de Menu Animado */}
                <motion.svg 
                    className="w-6 h-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                >
                    {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    )}
                </motion.svg>
            </button>
            
            {/* Menu Mobile */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 top-[96px] bg-white z-40 lg:hidden"
                    >
                        <div className="flex flex-col items-center pt-8 gap-6">
                            <a href="#" className="nav-link text-xl">Soluções</a>
                            <a href="#" className="nav-link text-xl">Clientes</a>
                            <a href="#" className="nav-link text-xl">Sobre Nós</a>
                            <button className="w-[136px] h-[40px] bg-[#FF6511] hover:bg-primary-hover rounded-[30px] transition-colors">
                                <span className="text-white font-ibm font-semibold">
                                    Contato
                                </span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            {/* Links de Navegação - Desktop */}
            <div className="hidden lg:flex gap-[40px]">
                <a href="#" className="nav-link">Soluções</a>
                <a href="#" className="nav-link">Clientes</a>
                <a href="#" className="nav-link">Sobre Nós</a>
            </div>

            {/* Botão Contato - Desktop */}
            <button className="hidden lg:block w-[136px] h-[40px] bg-[#FF6511] hover:bg-primary-hover rounded-[30px] transition-colors">
                <span className="text-white font-ibm font-semibold">
                    Contato
                </span>
            </button>
        </nav>
    );
} 