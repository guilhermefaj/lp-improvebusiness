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
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            const currentScrollY = latest;
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
                y: isVisible ? 0 : -200,
                opacity: isVisible ? 1 : 0
            }}
            transition={{ duration: 0.4 }}
        >
            <nav className="max-w-[1360px] mx-auto px-4 md:px-6 lg:px-[40px] py-6">
                <div className="flex items-center justify-between relative">
                    <div className="flex items-center">
                        <Logo />
                    </div>
                    
                    {/* Menu para Mobile */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden z-50 w-10 h-10 flex items-center justify-center"
                    >
                        <span className="sr-only">Menu</span>
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-current transform transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`w-full h-0.5 bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`w-full h-0.5 bg-current transform transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                    
                    {/* Menu Mobile */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="fixed inset-0 top-0 bg-white z-40 lg:hidden overflow-hidden"
                            >
                                <div className="h-full flex flex-col items-center justify-center -mt-10 gap-8">
                                    <Link 
                                        to="/" 
                                        className="text-xl font-clash font-semibold text-[#1E1E1E] py-3"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Início
                                    </Link>
                                    <a 
                                        href="https://improve.business/Sobre/sobre-nos" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-xl font-clash font-semibold text-[#1E1E1E] py-3"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Sobre Nós
                                    </a>
                                    <a 
                                        href="#clientes" 
                                        className="text-xl font-clash font-semibold text-[#1E1E1E] py-3"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Clientes
                                    </a>
                                    <a 
                                        href="#solucoes" 
                                        className="text-xl font-clash font-semibold text-[#1E1E1E] py-3"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Soluções
                                    </a>
                                    <button 
                                        onClick={() => {
                                            setIsMenuOpen(false);
                                            openContactModal();
                                        }}
                                        className="mt-4 w-[200px] py-3 bg-[#FF610B] text-white text-lg font-clash font-semibold rounded-full hover:bg-[#e65709] transition-colors"
                                    >
                                        Contato
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