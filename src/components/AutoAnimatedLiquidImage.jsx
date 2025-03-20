import React, { useRef, useEffect } from 'react';

export function AutoAnimatedLiquidImage({ src, alt, className, width = "400", height = "300", loading = "lazy" }) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    let time = 0;
    
    const animateImage = () => {
      const image = imageRef.current;
      if (!image) return;
      
      time += 0.01;
      
      // Cria movimento ondulado com funções seno e cosseno
      const x = Math.sin(time) * 15;
      const y = Math.cos(time * 1.3) * 10;
      const rotateX = Math.cos(time * 0.7) * 5;
      const rotateY = Math.sin(time * 0.9) * 5;
      
      image.style.transform = `
        perspective(1000px)
        translate3d(${x}px, ${y}px, 0)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale3d(1.05, 1.05, 1.05)
      `;
      
      animationRef.current = requestAnimationFrame(animateImage);
    };
    
    animationRef.current = requestAnimationFrame(animateImage);
    
    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ perspective: '1000px' }}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt || "Imagem ilustrativa"}
        width={width}
        height={height}
        loading={loading}
        className="w-full h-auto object-cover rounded-[12px] transition-transform"
        style={{ 
          willChange: 'transform',
          transformStyle: 'preserve-3d'
        }}
      />
    </div>
  );
} 