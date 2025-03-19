import React, { useRef, useEffect } from 'react';

export function AutoAnimatedLiquidImage({ src, alt, className }) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const animationRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    let currentX = 0;
    let currentY = 0;

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animate = (timestamp) => {
      if (!timeRef.current) timeRef.current = timestamp;
      const elapsed = timestamp - timeRef.current;

      // Cria um movimento circular suave
      const angle = (elapsed * 0.0015) % (Math.PI * 2);
      const targetX = Math.sin(angle) * 0.2;
      const targetY = Math.cos(angle) * 0.2;

      currentX = lerp(currentX, targetX, 0.08);
      currentY = lerp(currentY, targetY, 0.08);

      const moveX = currentX * 15;
      const moveY = currentY * 15;
      const rotateX = -currentY * 10;
      const rotateY = currentX * 10;

      image.style.transform = `
        perspective(1000px)
        translate3d(${moveX}px, ${moveY}px, 0)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale3d(1.05, 1.05, 1.05)
      `;

      animationRef.current = requestAnimationFrame(animate);
    };

    // Inicia a animação automática
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`${className} relative overflow-hidden rounded-[20px] p-4`}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="w-full h-full object-contain"
        style={{
          willChange: 'transform',
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
          maxWidth: '100%',
          maxHeight: '100%'
        }}
      />
    </div>
  );
} 