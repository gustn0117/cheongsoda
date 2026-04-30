'use client';

import { useState } from 'react';
import { FAQS } from '@/app/lib/data';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-white py-20 sm:py-32">
      <div className="container-px mx-auto max-w-5xl">
        <div className="text-center">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="heading-section mt-3 text-[2rem] text-ink sm:mt-4 sm:text-5xl break-keep">
            자주 <span className="text-navy-600">묻는 질문</span>
          </h2>
          <p className="mt-4 text-sm text-ink/70 sm:mt-6 sm:text-lg break-keep">
            궁금한 점을 미리 확인해 보세요. 더 자세한 내용은 카카오톡으로 안내드립니다.
          </p>
        </div>

        <div className="mt-8 divide-y divide-navy-100 overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-soft sm:mt-12 sm:rounded-3xl">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-left transition-colors hover:bg-mist"
                aria-expanded={isOpen}
              >
                <div className="flex items-start gap-3 p-5 sm:gap-6 sm:p-7">
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm font-black transition sm:h-9 sm:w-9 ${
                      isOpen
                        ? 'bg-navy-600 text-white'
                        : 'bg-navy-50 text-navy-700'
                    }`}
                  >
                    Q
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-extrabold text-ink break-keep sm:text-lg">{f.q}</h3>
                    <div
                      className={`grid overflow-hidden transition-all duration-300 ${
                        isOpen ? 'mt-2.5 grid-rows-[1fr] opacity-100 sm:mt-3' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="min-h-0">
                        <p className="text-sm leading-relaxed text-ink/75 break-keep sm:text-base">{f.a}</p>
                      </div>
                    </div>
                  </div>
                  <span
                    className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border transition sm:h-9 sm:w-9 ${
                      isOpen
                        ? 'rotate-180 border-navy-600 bg-navy-600 text-white'
                        : 'border-navy-100 text-navy-700'
                    }`}
                    aria-hidden
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center">
          <p className="text-sm text-ink/60">더 궁금한 점이 있으신가요?</p>
          <a href="#contact" className="btn-kakao !py-3 text-sm">
            카톡으로 1:1 상담
          </a>
        </div>
      </div>
    </section>
  );
}
