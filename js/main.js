import { animate, inView } from 'framer-motion';
import { MagneticLines } from '../components/ui/magnetic-lines';

document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o efeito magnetic lines
    const magneticLinesContainer = document.getElementById('magnetic-lines');
    if (magneticLinesContainer) {
        const magneticLines = new MagneticLines();
        magneticLinesContainer.appendChild(magneticLines.element);
    }

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animações com Framer Motion
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');

    // Animação inicial
    animate(heroTitle, { 
        opacity: [0, 1], 
        y: [50, 0] 
    }, { 
        duration: 0.8,
        ease: "easeOut" 
    });

    animate(heroSubtitle, { 
        opacity: [0, 1], 
        y: [30, 0] 
    }, { 
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut" 
    });

    // Animações ao scroll
    inView('.hero-section', () => {
        animate('.hero-title', { scale: [0.9, 1] }, { duration: 0.5 });
        return false; // Executa apenas uma vez
    });
}); 