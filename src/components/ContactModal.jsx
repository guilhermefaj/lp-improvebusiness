import { Modal } from './Modal';
import { ContactForm } from './ContactForm';

export function ContactModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ContactForm onClose={onClose} />
    </Modal>
  );
} 