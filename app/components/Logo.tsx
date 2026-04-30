type LogoProps = {
  variant?: 'navy' | 'white';
  className?: string;
};

export default function Logo({ variant = 'navy', className = '' }: LogoProps) {
  const isWhite = variant === 'white';
  return (
    <span
      className={`inline-flex items-center ${className}`}
      aria-label="청소다 CHEONG SO DA"
    >
      <img
        src="/logo/logo-mono-dark.png"
        alt="청소다"
        className="h-11 w-auto select-none sm:h-12"
        style={
          isWhite
            ? { filter: 'invert(1)', mixBlendMode: 'screen' }
            : { mixBlendMode: 'multiply' }
        }
        draggable={false}
      />
    </span>
  );
}
