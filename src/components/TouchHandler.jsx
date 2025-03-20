import { useEffect, useRef, useState } from 'react';

/**
 * Componente para lidar com eventos de toque em dispositivos móveis
 * @param {Function} onSwipeDown - Função a ser chamada quando o usuário fizer swipe para baixo
 * @param {number} threshold - Distância mínima que o usuário precisa arrastar para considerar um swipe (em pixels)
 * @param {React.ReactNode} children - Conteúdo filho
 * @returns {JSX.Element}
 */
export function TouchHandler({ onSwipeDown, threshold = 50, children }) {
  const containerRef = useRef(null);
  const startY = useRef(0);
  const isDragging = useRef(false);
  const [swipeProgress, setSwipeProgress] = useState(0);
  
  // Para evitar swipes em elementos de formulário
  const shouldIgnoreTouch = (target) => {
    const ignoredElements = ['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON', 'A'];
    const ignoredClasses = ['py-3', 'py-4', 'rounded-full']; // Classes comuns em botões
    
    // Ignorar se o alvo é um elemento de formulário
    if (ignoredElements.includes(target.tagName)) {
      return true;
    }
    
    // Verificar se algum elemento pai é um elemento de formulário
    let element = target;
    while (element && element !== document.body) {
      // Ignorar se tem uma das classes comuns em botões
      for (const cls of ignoredClasses) {
        if (element.classList?.contains(cls)) {
          return true;
        }
      }
      
      // Ignorar se é um elemento de formulário
      if (ignoredElements.includes(element.tagName)) {
        return true;
      }
      
      element = element.parentElement;
    }
    
    return false;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e) => {
      // Não iniciar swipe em elementos de formulário
      if (shouldIgnoreTouch(e.target)) {
        return;
      }
      
      startY.current = e.touches[0].clientY;
      isDragging.current = true;
      setSwipeProgress(0);
    };

    const handleTouchMove = (e) => {
      if (!isDragging.current) return;
      
      const currentY = e.touches[0].clientY;
      const diffY = currentY - startY.current;
      
      // Só permitir swipe para baixo, não para cima
      if (diffY < 0) {
        setSwipeProgress(0);
        return;
      }
      
      // Atualiza o progresso do swipe para feedback visual
      if (diffY > 0) {
        const progress = Math.min(diffY / threshold, 1);
        setSwipeProgress(progress);
        
        // Evitar scroll da página durante o swipe
        if (progress > 0.2) {
          e.preventDefault();
        }
      } else {
        setSwipeProgress(0);
      }
      
      // Se o usuário está fazendo swipe para baixo e passou do threshold
      if (diffY > threshold && onSwipeDown) {
        isDragging.current = false;
        setSwipeProgress(0);
        onSwipeDown();
      }
    };

    const handleTouchEnd = () => {
      isDragging.current = false;
      setSwipeProgress(0);
    };

    // Adiciona os listeners de eventos com opções corretas para dispositivos móveis
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });
    container.addEventListener('touchcancel', handleTouchEnd, { passive: true });

    // Remove os listeners quando o componente for desmontado
    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [onSwipeDown, threshold]);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {/* Indicador de progresso do swipe */}
      {swipeProgress > 0 && (
        <div className="absolute top-0 left-0 right-0 flex justify-center items-center h-8 pointer-events-none z-50">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center opacity-70">
            <svg 
              className="w-4 h-4 text-gray-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              style={{ transform: `rotate(${90 * swipeProgress}deg)` }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      )}
      {children}
    </div>
  );
} 