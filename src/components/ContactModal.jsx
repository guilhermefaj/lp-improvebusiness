import { Modal } from './Modal';
import { ContactForm } from './ContactForm';
import { useEffect } from 'react';

export function ContactModal({ isOpen, onClose }) {
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

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ContactForm onClose={onClose} />
    </Modal>
  );
} 