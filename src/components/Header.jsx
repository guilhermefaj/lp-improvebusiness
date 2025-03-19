import { Logo } from "./Logo";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import { useContactModal } from '../contexts/ContactModalContext';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const { scrollY } = useScroll();
    const { openContactModal } = useContactModal();

    useEffect(() => {
        return scrollY.onChange((latest) => {
            const currentScrollY = latest;
            
            // Se rolou mais que 100px, esconde o header permanentemente
            if (currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            
            setLastScrollY(currentScrollY);
        });
    }, [lastScrollY, scrollY]);

    return (
        <motion.header 
            className="fixed w-full z-50 bg-transparent"
            initial={{ y: 0, opacity: 1 }}
            animate={{ 
                y: isVisible ? 0 : -200, // Aumentei o valor para garantir que saia completamente da tela
                opacity: isVisible ? 1 : 0
            }}
            transition={{ duration: 0.4 }}
        >
            <nav className="max-w-[1360px] mx-auto px-4 md:px-6 lg:px-[40px] py-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Logo />
                    </div>
                    
                    {/* Menu para Mobile */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden z-50"
                    >
                        <span className="sr-only">Menu</span>
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
                                    <Link to="/" className="nav-link text-xl">Início</Link>
                                    <a 
                                        href="https://improve.business/Sobre/sobre-nos" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="nav-link text-xl"
                                    >
                                        Sobre Nós
                                    </a>
                                    <a href="#clientes" className="nav-link text-xl">Clientes</a>
                                    <a href="#solucoes" className="nav-link text-xl">Soluções</a>
                                    <button 
                                        onClick={() => {
                                            setIsMenuOpen(false);
                                            openContactModal();
                                        }}
                                        className="w-[136px] h-[40px] bg-[#FF6511] hover:bg-primary-hover rounded-[30px] transition-colors"
                                    >
                                        <span className="text-white font-ibm font-semibold">
                                            Contato
                                        </span>
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    
                    {/* Links de Navegação - Desktop */}
                    <div className="hidden lg:flex gap-[40px] items-center">
                        <Link to="/" className="nav-link">Início</Link>
                        <a 
                            href="https://improve.business/Sobre/sobre-nos" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="nav-link"
                        >
                            Sobre Nós
                        </a>
                        <a href="#clientes" className="nav-link">Clientes</a>
                        <a href="#solucoes" className="nav-link">Soluções</a>
                        <button
                            onClick={openContactModal}
                            className="bg-[#FF610B] text-white px-6 py-2 rounded-full hover:bg-[#e65709] transition-colors"
                        >
                            Contato
                        </button>
                    </div>
                </div>
            </nav>
        </motion.header>
    );
} 