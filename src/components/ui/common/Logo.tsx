interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <a 
      href="/" 
      className={`inline-block ${className}`}
      aria-label="Improve Business IA - Página inicial"
    >
      <img 
        src="/logo.png" 
        alt="Improve Business IA" 
        className="h-8 w-auto object-contain"
        width={128}
        height={32}
      />
    </a>
  );
} 