type IconProps = {
  size?: number;
  className?: string;
  strokeWidth?: number;
};

const base = (props: IconProps) => ({
  width: props.size ?? 18,
  height: props.size ?? 18,
  viewBox: '0 0 24 24',
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: props.strokeWidth ?? 2.2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className: props.className,
  'aria-hidden': true,
});

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base(props)}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg {...base(props)}>
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <svg {...base(props)}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function ChevronLeft(props: IconProps) {
  return (
    <svg {...base(props)}>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

export function ChevronRight(props: IconProps) {
  return (
    <svg {...base(props)}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg {...base({ ...props, strokeWidth: props.strokeWidth ?? 3 })}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function CheckCircle(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

export function Phone(props: IconProps) {
  return (
    <svg {...base({ ...props, strokeWidth: props.strokeWidth ?? 2.4 })}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function Bolt(props: IconProps) {
  return (
    <svg
      width={props.size ?? 18}
      height={props.size ?? 18}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={props.className}
      aria-hidden
    >
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
    </svg>
  );
}

export function Flame(props: IconProps) {
  return (
    <svg
      width={props.size ?? 18}
      height={props.size ?? 18}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={props.className}
      aria-hidden
    >
      <path d="M12 2c1.5 3 4 5 4 8a4 4 0 0 1-1.2 2.8c.7-.4 1.7-1 2.2-2.3.4 1 .6 2 .6 3a6 6 0 0 1-12 0c0-3.3 2.4-5.5 4-7.5C10.5 4.5 11 3 12 2z" />
    </svg>
  );
}

export function Shield(props: IconProps) {
  return (
    <svg {...base({ ...props, strokeWidth: props.strokeWidth ?? 2 })}>
      <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

export function Leaf(props: IconProps) {
  return (
    <svg {...base({ ...props, strokeWidth: props.strokeWidth ?? 2 })}>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6" />
    </svg>
  );
}

export function Gem(props: IconProps) {
  return (
    <svg {...base({ ...props, strokeWidth: props.strokeWidth ?? 2 })}>
      <path d="M6 3h12l4 6-10 12L2 9l4-6z" />
      <path d="M11 3 8 9l4 12 4-12-3-6" />
      <line x1="2" y1="9" x2="22" y2="9" />
    </svg>
  );
}

export function KakaoBubble(props: IconProps) {
  return (
    <svg
      width={props.size ?? 18}
      height={props.size ?? 18}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={props.className}
      aria-hidden
    >
      <path d="M12 3C6.48 3 2 6.49 2 10.8c0 2.7 1.83 5.07 4.6 6.45-.2.69-.71 2.55-.81 2.95-.13.49.18.49.38.36.16-.1 2.55-1.74 3.58-2.45.74.11 1.5.17 2.25.17 5.52 0 10-3.49 10-7.78S17.52 3 12 3z" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base({ ...props, strokeWidth: props.strokeWidth ?? 2.5 })}>
      <line x1="3" y1="7" x2="21" y2="7" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="17" x2="21" y2="17" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base({ ...props, strokeWidth: props.strokeWidth ?? 2.5 })}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function NaverBlog(props: IconProps) {
  return (
    <svg
      width={props.size ?? 18}
      height={props.size ?? 18}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={props.className}
      aria-hidden
    >
      <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm5 5v8h2.2v-3.8L13.7 16H16V8h-2.2v3.8L11.3 8H9z" />
    </svg>
  );
}

export function ExternalLink(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export function Star(props: IconProps & { filled?: boolean }) {
  return (
    <svg
      width={props.size ?? 16}
      height={props.size ?? 16}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={props.className}
      aria-hidden
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
