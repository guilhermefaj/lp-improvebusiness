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
        src="/logo.svg" 
        alt="Improve Business IA" 
        className="h-8 w-auto"
        width={128}
        height={32}
      />
    </a>
  );
} 