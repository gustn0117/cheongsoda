type LogoProps = {
  variant?: 'navy' | 'white';
  className?: string;
};

export default function Logo({ variant = 'navy', className = '' }: LogoProps) {
  const src =
    variant === 'white' ? '/logo/logo-white.png' : '/logo/logo-transparent.png';
  return (
    <span
      className={`inline-flex items-center ${className}`}
      aria-label="청소다 CHEONG SO DA"
    >
      <img
        src={src}
        alt="청소다"
        className="h-11 w-auto select-none sm:h-12"
        draggable={false}
      />
    </span>
  );
}
