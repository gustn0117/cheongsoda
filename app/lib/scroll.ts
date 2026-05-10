type Preventable = { preventDefault: () => void };

export function jumpToQuote(e?: Preventable) {
  e?.preventDefault();
  if (typeof window === 'undefined') return;

  const target =
    document.getElementById('quote-card') ?? document.getElementById('contact');
  if (!target) return;

  const headerEl = document.querySelector('header');
  const headerH = headerEl ? headerEl.getBoundingClientRect().height : 64;
  const y = target.getBoundingClientRect().top + window.scrollY - headerH - 12;

  const prev = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = 'auto';
  window.scrollTo({ top: Math.max(0, y), behavior: 'auto' });
  document.documentElement.style.scrollBehavior = prev;

  window.setTimeout(() => {
    const input = document.getElementById('quote-name') as HTMLInputElement | null;
    input?.focus({ preventScroll: true });
  }, 60);
}
