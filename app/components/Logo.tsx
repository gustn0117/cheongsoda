type LogoProps = {
  variant?: 'navy' | 'white';
  className?: string;
};

export default function Logo({ variant = 'navy', className = '' }: LogoProps) {
  const src =
    variant === 'white' ? '/logo/logo-white.png' : '/logo/logo-transparent.png';
  const wordmarkColor = variant === 'white' ? 'text-white' : 'text-navy-700';
  return (
    <span
      className={`inline-flex items-center gap-1.5 ${className}`}
      aria-label="청소다 CHEONG SO DA"
    >
      <img
        src={src}
        alt="청소다"
        className="h-10 w-auto select-none sm:h-12"
        draggable={false}
      />
      <span
        className={`text-[17px] font-extrabold tracking-tight sm:hidden ${wordmarkColor}`}
      >
        청소다
      </span>
    </span>
  );
}
