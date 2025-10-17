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
        src="https://f005.backblazeb2.com/file/improvebusinessai/logo.svg" 
        alt="Improve Business IA" 
        className="h-12 w-auto max-w-full object-contain"
        width={128}
        height={32}
      />
    </a>
  );
} 