'use client';

import { useEffect, useState } from 'react';
import { COMPANY } from '@/app/lib/data';
import Logo from './Logo';
import { CloseIcon, MenuIcon, NaverBlog, Phone } from './Icons';

const NAV = [
  { id: 'services', label: '청소 서비스' },
  { id: 'process', label: '진행 절차' },
  { id: 'promises', label: '청소다 약속' },
  { id: 'reviews', label: '고객 후기' },
  { id: 'pricing', label: '요금 안내' },
  { id: 'faq', label: 'FAQ' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl shadow-soft border-b border-navy-100/60'
          : 'bg-transparent'
      }`}
    >
      <div className="container-px mx-auto flex max-w-7xl items-center justify-between py-3.5">
        <a href="#top" className="flex items-center" aria-label="청소다 홈">
          <Logo variant={scrolled ? 'navy' : 'white'} />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                scrolled
                  ? 'text-ink/80 hover:text-navy-600 hover:bg-navy-50'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-1.5">
          <a
            href={COMPANY.blog}
            target="_blank"
            rel="noreferrer"
            aria-label="네이버 블로그"
            className={`grid h-10 w-10 place-items-center rounded-full transition ${
              scrolled
                ? 'bg-[#03C75A] text-white hover:bg-[#02A14A]'
                : 'bg-white/10 text-white hover:bg-[#03C75A]'
            }`}
          >
            <NaverBlog size={16} />
          </a>
          <a
            href={`tel:${COMPANY.phoneTel}`}
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold number-tabular transition ${
              scrolled
                ? 'text-navy-700 hover:bg-navy-50'
                : 'text-white hover:bg-white/10'
            }`}
          >
            <Phone size={14} />
            {COMPANY.phone}
          </a>
          <a
            href={COMPANY.kakao}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#FEE500] px-5 py-2.5 text-sm font-bold text-[#3C1E1E] shadow-soft transition hover:-translate-y-0.5"
          >
            카톡 견적 신청
          </a>
        </div>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className={`lg:hidden rounded-full p-2 ${
            scrolled ? 'text-ink' : 'text-white'
          }`}
          aria-label="메뉴 열기"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-navy-100 bg-white/95 backdrop-blur-xl">
          <div className="container-px mx-auto max-w-7xl py-4 space-y-1">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-semibold text-ink hover:bg-navy-50"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`tel:${COMPANY.phoneTel}`}
              onClick={() => setMobileOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-navy-200 px-4 py-3 text-center text-base font-bold text-navy-700 number-tabular"
            >
              <Phone size={16} />
              {COMPANY.phone}
            </a>
            <a
              href={COMPANY.kakao}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl bg-[#FEE500] px-4 py-3 text-center text-base font-bold text-[#3C1E1E]"
            >
              카톡 견적 신청
            </a>
            <a
              href={COMPANY.blog}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#03C75A] px-4 py-3 text-base font-bold text-white"
            >
              <NaverBlog size={16} />
              네이버 블로그
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
