type LogoProps = {
  variant?: 'navy' | 'white';
  className?: string;
};

export default function Logo({ variant = 'navy', className = 'h-10 w-auto' }: LogoProps) {
  const isWhite = variant === 'white';
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src="/logo/logo-mono-dark.png"
        alt="청소다 CHEONG SO DA"
        className="h-10 w-auto shrink-0 select-none"
        style={
          isWhite
            ? { filter: 'brightness(0) invert(1)' }
            : undefined
        }
        draggable={false}
      />
      <div className="flex flex-col leading-none">
        <span
          className="text-xl font-black tracking-tight"
          style={{ color: isWhite ? '#FFFFFF' : '#0B1437' }}
        >
          청소다
        </span>
        <span
          className="mt-0.5 text-[10px] font-semibold tracking-[0.2em]"
          style={{ color: isWhite ? 'rgba(255,255,255,0.7)' : '#5C72BD' }}
        >
          CHEONG SO DA
        </span>
      </div>
    </div>
  );
}
