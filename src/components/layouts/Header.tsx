import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Logo } from "../ui/common/Logo";
import { HeaderProps, NavItem } from "../../types/components";

const defaultNavItems: NavItem[] = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Clientes", href: "#clientes" },
  { label: "Sobre Nós", href: "#sobre" }
];

export function Header({ navItems = defaultNavItems }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      const currentScrollY = latest;
      const isScrollingDown = currentScrollY > lastScrollY;
      
      if (currentScrollY > 100) {
        setIsVisible(!isScrollingDown);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    });
  }, [lastScrollY, scrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Previne scroll quando menu mobile está aberto
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  return (
    <motion.header 
      className="fixed w-full z-50 bg-white/80 backdrop-blur-sm"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <nav className="max-w-[1360px] mx-auto px-4 md:px-6 lg:px-[40px] py-8" aria-label="Menu principal">
        <div className="flex items-center justify-between">
          <Logo />
          
          <button 
            onClick={toggleMenu}
            className="lg:hidden z-50 p-2"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
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
          
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed inset-0 top-[96px] bg-white z-40 lg:hidden"
                role="dialog"
                aria-modal="true"
                aria-label="Menu mobile"
              >
                <nav className="flex flex-col items-center pt-8 gap-6">
                  {navItems.map((item) => (
                    <a 
                      key={item.href}
                      href={item.href}
                      className="nav-link text-xl hover:text-primary transition-colors"
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </a>
                  ))}
                  <button className="w-[136px] h-[40px] bg-primary hover:bg-primary-hover rounded-[30px] transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    <span className="text-white font-ibm font-semibold">
                      Contato
                    </span>
                  </button>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="hidden lg:flex gap-[40px]">
            {navItems.map((item) => (
              <a 
                key={item.href}
                href={item.href}
                className="nav-link hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button 
            className="hidden lg:block w-[136px] h-[40px] bg-primary hover:bg-primary-hover rounded-[30px] transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            aria-label="Entre em contato"
          >
            <span className="text-white font-ibm font-semibold">
              Contato
            </span>
          </button>
        </div>
      </nav>
    </motion.header>
  );
} 