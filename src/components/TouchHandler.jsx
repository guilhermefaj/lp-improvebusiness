import { useEffect, useRef } from 'react';

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

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e) => {
      startY.current = e.touches[0].clientY;
      isDragging.current = true;
    };

    const handleTouchMove = (e) => {
      if (!isDragging.current) return;
      
      const currentY = e.touches[0].clientY;
      const diffY = currentY - startY.current;
      
      // Se o usuário está fazendo swipe para baixo e passou do threshold
      if (diffY > threshold && onSwipeDown) {
        isDragging.current = false;
        onSwipeDown();
      }
    };

    const handleTouchEnd = () => {
      isDragging.current = false;
    };

    // Adiciona os listeners de eventos
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Remove os listeners quando o componente for desmontado
    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onSwipeDown, threshold]);

  return (
    <div ref={containerRef} className="w-full h-full">
      {children}
    </div>
  );
} 