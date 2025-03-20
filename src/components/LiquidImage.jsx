import React, { useRef, useEffect } from 'react';

export function LiquidImage({ src, alt, className, width = "400", height = "300", loading = "lazy" }) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    let isHovered = false;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animate = () => {
      if (!isHovered) {
        targetX = 0;
        targetY = 0;
      }

      currentX = lerp(currentX, targetX, 0.1);
      currentY = lerp(currentY, targetY, 0.1);

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

      rafId.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      if (!isHovered) return;

      const rect = container.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width) - 0.5;
      targetY = ((e.clientY - rect.top) / rect.height) - 0.5;
    };

    const handleMouseEnter = () => {
      isHovered = true;
      image.style.transition = 'transform 0.2s ease-out';
      rafId.current = requestAnimationFrame(animate);
    };

    const handleMouseLeave = () => {
      isHovered = false;
      image.style.transition = 'transform 0.5s ease-out';
      image.style.transform = 'perspective(1000px) translate3d(0, 0, 0) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
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
        alt={alt || "Imagem ilustrativa"}
        width={width}
        height={height}
        loading={loading}
        className="w-full h-auto object-cover rounded-[12px] transition-transform"
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