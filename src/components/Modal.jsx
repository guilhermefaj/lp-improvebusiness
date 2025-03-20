import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from '@phosphor-icons/react';
import { TouchHandler } from './TouchHandler';

export function Modal({ isOpen, onClose, children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Verificar no carregamento inicial
    checkMobile();
    
    // Adicionar ouvinte para redimensionamento
    window.addEventListener('resize', checkMobile);
    
    // Limpar ouvinte
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      document.body.style.top = `-${scrollY}px`;
      
      return () => {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.height = '';
        document.body.style.top = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  // Renderiza um indicador de swipe apenas em dispositivos móveis
  const SwipeIndicator = () => (
    <div className="absolute top-2 left-0 right-0 flex justify-center pointer-events-none">
      <div className="w-16 h-1 bg-gray-300 rounded-full"></div>
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-[9999] backdrop-blur-sm"
          />
          
          <div className="fixed inset-0 z-[9999] overflow-y-auto overscroll-contain">
            <div className={`min-h-full flex items-${isMobile ? 'end' : 'center'} justify-center p-4 md:p-6`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: isMobile ? 100 : 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: isMobile ? 100 : 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className={`w-full max-w-[600px] relative bg-white rounded-[20px] shadow-xl ${
                  isMobile ? 'max-h-[90vh] rounded-b-none' : ''
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={onClose}
                  className="absolute -right-3 -top-3 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
                >
                  <X size={24} weight="bold" className="text-gray-600" />
                </button>

                {isMobile && <SwipeIndicator />}
                
                <TouchHandler onSwipeDown={onClose} threshold={30}>
                  {children}
                </TouchHandler>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
} 