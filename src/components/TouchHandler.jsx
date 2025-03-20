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

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e) => {
      startY.current = e.touches[0].clientY;
      isDragging.current = true;
      setSwipeProgress(0);
    };

    const handleTouchMove = (e) => {
      if (!isDragging.current) return;
      
      const currentY = e.touches[0].clientY;
      const diffY = currentY - startY.current;
      
      // Atualiza o progresso do swipe para feedback visual
      if (diffY > 0) {
        const progress = Math.min(diffY / threshold, 1);
        setSwipeProgress(progress);
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
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
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
        <div className="absolute top-0 left-0 right-0 flex justify-center items-center h-8 pointer-events-none">
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