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
                            <a href="mailto:contato@improve.business?subject=Contato%20via%20site" className="w-[136px] h-[40px] bg-[#FF6511] hover:bg-primary-hover rounded-[30px] transition-colors flex items-center justify-center">
                                <span className="text-white font-ibm font-semibold">
                                    Contato
                                </span>
                            </a>
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
            <a href="mailto:contato@improve.business?subject=Contato%20via%20site" className="hidden lg:flex w-[136px] h-[40px] bg-[#FF6511] hover:bg-primary-hover rounded-[30px] transition-colors items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                  <path d="M1.5 8.67v6.58A2.25 2.25 0 0 0 3.75 17.5h16.5a2.25 2.25 0 0 0 2.25-2.25V8.67l-8.7 5.06a2.25 2.25 0 0 1-2.3 0L1.5 8.67Z"/>
                  <path d="M22.5 6.75v-.08A2.25 2.25 0 0 0 20.25 4.5H3.75A2.25 2.25 0 0 0 1.5 6.67v.08l9.17 5.33a.75.75 0 0 0 .76 0L22.5 6.75Z"/>
                </svg>
                <span className="text-white font-ibm font-semibold">
                    Contato
                </span>
            </a>
        </nav>
    );
} 