import { createContext, useContext } from 'react';
import { useModal } from '../hooks/useModal';
import { ContactModal } from '../components/ContactModal';

const ContactModalContext = createContext({});

export function ContactModalProvider({ children }) {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <ContactModalContext.Provider value={{ openContactModal: openModal }}>
      {children}
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error('useContactModal must be used within a ContactModalProvider');
  }
  return context;
} 