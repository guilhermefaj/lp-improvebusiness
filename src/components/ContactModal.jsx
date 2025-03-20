import { useState, useEffect } from 'react';
import { Modal } from './Modal';
import { ContactForm } from './ContactForm';
import { EnvelopeSimple } from '@phosphor-icons/react';

export function ContactModal({ isOpen, onClose }) {
  const [formFailed, setFormFailed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Detectar dispositivo móvel
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Quando o modal abre, resetamos o estado de falha
  useEffect(() => {
    if (isOpen) {
      setFormFailed(false);
    }
  }, [isOpen]);

  // Desabilita o scroll da página quando o modal está aberto
  useEffect(() => {
    if (isOpen) {
      // Salva a posição atual do scroll
      const scrollY = window.scrollY;
      
      // Aplica estilos para evitar scroll na página principal
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      return () => {
        // Restaura o scroll quando o modal é fechado
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  // Quando o formulário falha repetidamente em dispositivos móveis
  const handleFormFailure = () => {
    setFormFailed(true);
  };

  // Abrir o app de email nativo
  const openEmailApp = () => {
    window.location.href = 'mailto:contato@improve.business?subject=Contato via site ImproveAI';
    setTimeout(onClose, 1000); // Fechar o modal após um segundo
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {formFailed ? (
        <div className="w-full bg-white p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
          <EnvelopeSimple size={48} className="text-[#FF610B] mb-4" weight="duotone" />
          <h2 className="text-xl sm:text-2xl font-clash font-bold text-[#1E1E1E] mb-3">
            Formulário Indisponível
          </h2>
          <p className="text-gray-600 mb-6 max-w-md">
            Parece que estamos tendo dificuldades técnicas com nosso formulário neste dispositivo.
          </p>
          <button
            onClick={openEmailApp}
            className="bg-[#FF610B] text-white px-6 py-3 rounded-full hover:bg-[#e65709] transition-colors w-full max-w-xs mb-3"
          >
            Abrir App de Email
          </button>
          <p className="text-sm text-gray-500">
            Você também pode nos contatar diretamente pelo email: contato@improve.business
          </p>
        </div>
      ) : (
        <ContactForm onClose={onClose} onMobileFormFailure={isMobile ? handleFormFailure : undefined} />
      )}
    </Modal>
  );
} 