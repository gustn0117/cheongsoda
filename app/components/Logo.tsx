type LogoProps = {
  variant?: 'navy' | 'white';
  className?: string;
};

export default function Logo({ variant = 'navy', className = 'h-10 w-auto' }: LogoProps) {
  const stroke = variant === 'navy' ? '#1B3FAA' : '#FFFFFF';
  const accent = variant === 'navy' ? '#1B3FAA' : '#FEE500';
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        className="h-10 w-10 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M9 26 L32 8 L55 26 V52 a4 4 0 0 1 -4 4 H13 a4 4 0 0 1 -4 -4 Z"
          stroke={stroke}
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <circle cx="22" cy="32" r="3" stroke={stroke} strokeWidth="2.5" />
        <path d="M22 35 V46" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M16 46 H28" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M40 28 L40 44" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M36 36 H44" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
        <path
          d="M51 18 L52.6 21.4 L56 23 L52.6 24.6 L51 28 L49.4 24.6 L46 23 L49.4 21.4 Z"
          fill={accent}
        />
      </svg>
      <div className="flex flex-col leading-none">
        <span
          className="text-xl font-black tracking-tight"
          style={{ color: variant === 'navy' ? '#0B1437' : '#FFFFFF' }}
        >
          청소다
        </span>
        <span
          className="mt-0.5 text-[10px] font-semibold tracking-[0.2em]"
          style={{ color: variant === 'navy' ? '#5C72BD' : 'rgba(255,255,255,0.7)' }}
        >
          CHEONG SO DA
        </span>
      </div>
    </div>
  );
}
