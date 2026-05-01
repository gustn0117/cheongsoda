'use client';

import { useEffect, useState } from 'react';
import { COMPANY } from '@/app/lib/data';
import { Instagram, KakaoBubble, NaverBlog, Phone } from './Icons';

export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed right-3 bottom-3 sm:right-6 sm:bottom-6 z-40 flex flex-col items-end gap-2 transition-all duration-500 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <a
        href={COMPANY.instagram}
        target="_blank"
        rel="noreferrer"
        className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-tr from-[#FA7E1E] via-[#D62976] to-[#962FBF] text-white shadow-navy-lg transition hover:-translate-y-0.5 sm:h-12 sm:w-12"
        aria-label="인스타그램"
      >
        <Instagram size={18} />
      </a>

      <a
        href={COMPANY.blog}
        target="_blank"
        rel="noreferrer"
        className="grid h-11 w-11 place-items-center rounded-full bg-[#03C75A] text-white shadow-navy-lg transition hover:-translate-y-0.5 sm:h-12 sm:w-12"
        aria-label="네이버 블로그"
      >
        <NaverBlog size={18} />
      </a>

      <a
        href={`tel:${COMPANY.phoneTel}`}
        className="group flex items-center gap-2.5 rounded-full bg-white px-3 py-2.5 shadow-navy-lg ring-1 ring-navy-100 transition hover:-translate-y-0.5 sm:px-4 sm:py-3"
        aria-label="전화 상담"
      >
        <span className="grid h-9 w-9 place-items-center rounded-full bg-navy-600 text-white sm:h-10 sm:w-10">
          <Phone size={16} />
        </span>
        <span className="hidden sm:flex flex-col leading-tight pr-1">
          <span className="text-[11px] font-semibold text-navy-500">24시간 상담</span>
          <span className="text-sm font-extrabold text-ink number-tabular">{COMPANY.phone}</span>
        </span>
      </a>

      <a
        href={COMPANY.kakao}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-2.5 rounded-full bg-[#FEE500] px-3 py-2.5 shadow-navy-lg transition hover:-translate-y-0.5 animate-pulse-soft sm:px-4 sm:py-3"
        aria-label="카카오톡 상담"
      >
        <span className="grid h-9 w-9 place-items-center rounded-full bg-[#3C1E1E] text-[#FEE500] sm:h-10 sm:w-10">
          <KakaoBubble size={16} />
        </span>
        <span className="hidden sm:flex flex-col leading-tight pr-1">
          <span className="text-[11px] font-semibold text-[#3C1E1E]/70">무료 견적</span>
          <span className="text-sm font-extrabold text-[#3C1E1E]">카톡 상담하기</span>
        </span>
      </a>
    </div>
  );
}
