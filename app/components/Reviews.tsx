'use client';

import { useEffect, useRef, useState } from 'react';
import { PLATFORM_BADGES, REVIEWS } from '@/app/lib/data';
import { ChevronLeft, ChevronRight, Star } from './Icons';

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? 'text-[#FFB800]' : 'text-navy-100'}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.children[i] as HTMLElement | undefined;
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft - 8, behavior: 'smooth' });
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const cards = Array.from(el.children) as HTMLElement[];
      const center = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      cards.forEach((c, i) => {
        const cCenter = c.offsetLeft + c.clientWidth / 2 - el.offsetLeft;
        const d = Math.abs(cCenter - center);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setActive(best);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="reviews" className="relative bg-mist py-20 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid items-end gap-6 sm:gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="section-eyebrow">Real Reviews</span>
            <h2 className="heading-section mt-3 text-[2rem] text-ink sm:mt-4 sm:text-5xl lg:text-6xl break-keep">
              모든 플랫폼
              <br />
              <span className="text-navy-600">만족도 리뷰 100%</span>
            </h2>
            <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
              {PLATFORM_BADGES.map((p) => (
                <span
                  key={p.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-navy-100 bg-white px-3 py-1.5 text-[11px] font-bold text-navy-700 sm:gap-2 sm:px-3.5 sm:text-xs"
                >
                  <span aria-hidden className="text-rose-500">♥</span>
                  {p.label}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:items-end">
            <div className="inline-flex items-center gap-3 self-start rounded-2xl border border-navy-100 bg-white px-5 py-3.5 shadow-soft sm:self-auto sm:py-4">
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-ink/60 sm:text-xs">평균 평점</span>
                <span className="number-tabular text-xl font-black text-ink sm:text-2xl">
                  5.0 / 5.0
                </span>
              </div>
              <StarRow rating={5} />
            </div>
            <div className="hidden gap-2 sm:flex">
              <button
                onClick={() => scrollTo(Math.max(active - 1, 0))}
                className="grid h-11 w-11 place-items-center rounded-full border border-navy-200 bg-white text-navy-700 transition hover:border-navy-600 hover:bg-navy-50"
                aria-label="이전 후기"
              >
                <ChevronLeft size={18} strokeWidth={2.5} />
              </button>
              <button
                onClick={() => scrollTo(Math.min(active + 1, REVIEWS.length - 1))}
                className="grid h-11 w-11 place-items-center rounded-full bg-navy-600 text-white transition hover:bg-navy-700"
                aria-label="다음 후기"
              >
                <ChevronRight size={18} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={trackRef}
          className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 -mx-5 px-5 sm:mt-12 sm:gap-6 sm:px-0 sm:-mx-0"
        >
          {REVIEWS.map((r, i) => (
            <article
              key={i}
              className="group relative w-[85%] shrink-0 snap-start overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-soft transition hover:shadow-navy-lg sm:w-[58%] sm:rounded-3xl lg:w-[40%]"
            >
              <img
                src={r.image}
                alt={r.alt}
                loading="lazy"
                className="block w-full select-none transition-transform duration-700 group-hover:scale-[1.02]"
                draggable={false}
              />
            </article>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`후기 ${i + 1} 보기`}
              className={`h-1.5 rounded-full transition-all ${
                active === i ? 'w-8 bg-navy-600' : 'w-1.5 bg-navy-200 hover:bg-navy-300'
              }`}
            />
          ))}
        </div>

        <div className="mt-10 grid grid-cols-3 gap-3 rounded-2xl border border-navy-100 bg-white p-5 shadow-soft sm:mt-14 sm:gap-4 sm:rounded-3xl sm:p-8">
          {[
            { v: '5.0', l: '상위 1% 평점 유지' },
            { v: '100%', l: '재의뢰·추천 비율' },
            { v: '2만원', l: '리뷰 작성 페이백' },
          ].map((s) => (
            <div key={s.l} className="text-center sm:text-left">
              <div className="number-tabular text-2xl font-black text-navy-700 sm:text-3xl">{s.v}</div>
              <div className="mt-0.5 text-[11px] font-semibold text-ink/60 sm:mt-1 sm:text-sm break-keep">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
