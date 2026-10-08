'use client';

import { useEffect, useRef, useState } from 'react';
import { COMPANY, PHONES } from '@/app/lib/data';
import { jumpToQuote } from '@/app/lib/scroll';
import { ArrowRight, KakaoBubble, Phone, Play } from './Icons';

const HIGHLIGHTS = ['하청·알바 NO', '전국 직영팀 50팀+', '5일 A/S 보장'];

const YOUTUBE_ID = '8mS-Qn3wGoA';
const YOUTUBE_ORIGIN = 'https://www.youtube-nocookie.com';

// auto: 화면 진입으로 음소거 재생 / click: 재생 버튼을 눌러 소리와 함께 재생
type PlayerMode = 'auto' | 'click';

export default function BrandFilm() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [mode, setMode] = useState<PlayerMode | null>(null);

  /* 화면에 들어오면 유튜브 플레이어를 불러와 음소거 재생, 벗어나면 정지 (모션 최소화 설정 시 자동재생 안 함) */
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || typeof IntersectionObserver === 'undefined') return;

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    const command = (func: 'playVideo' | 'pauseVideo') =>
      frameRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func, args: [] }),
        YOUTUBE_ORIGIN
      );

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          command('pauseVideo');
        } else if (!reduceMotion) {
          setMode((m) => m ?? 'auto');
          command('playVideo');
        }
      },
      { threshold: 0.4 }
    );
    io.observe(wrap);

    return () => io.disconnect();
  }, []);

  const embedSrc =
    mode &&
    `${YOUTUBE_ORIGIN}/embed/${YOUTUBE_ID}?autoplay=1&mute=${mode === 'auto' ? 1 : 0}` +
      `&loop=1&playlist=${YOUTUBE_ID}&playsinline=1&rel=0&enablejsapi=1`;

  return (
    <section
      id="film"
      className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-32"
    >
      <div
        className="absolute inset-0 -z-10 opacity-70"
        style={{
          backgroundImage:
            'radial-gradient(55% 45% at 15% 10%, rgba(61,93,200,0.45) 0%, transparent 60%), radial-gradient(45% 55% at 90% 90%, rgba(254,229,0,0.14) 0%, transparent 60%)',
        }}
      />

      <div className="container-px mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          {/* Copy */}
          <div>
            <span className="section-eyebrow text-[#7DA0FF]">Brand Film</span>
            <h2 className="heading-section mt-3 text-[1.75rem] sm:mt-4 sm:text-4xl lg:text-5xl break-keep">
              청소가 아니라{' '}
              <span className="text-[#FEE500]">새로운 시작</span>을 만듭니다
            </h2>
            <p className="mt-4 max-w-xl text-[15px] text-white/80 sm:mt-6 sm:text-lg break-keep">
              하청·알바 없이 로얄클린 직영팀이 직접 현장에 나갑니다.{' '}
              <br className="hidden sm:block" />
              입주·이사·거주청소의 실제 작업 과정을 영상으로 확인해 보세요.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-2.5">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="chip-glow sm:px-4 sm:py-2 sm:text-sm">
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-7 grid grid-cols-1 gap-2 sm:mt-9 sm:flex sm:flex-wrap sm:items-center sm:gap-3">
              <a
                href="#contact"
                onClick={jumpToQuote}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-bold text-navy-700 transition hover:-translate-y-0.5 hover:bg-navy-50 sm:w-auto sm:px-7 sm:py-4"
              >
                무료 견적 받기
                <ArrowRight size={16} />
              </a>
              <a
                href={COMPANY.kakao}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#FEE500] px-6 py-3.5 text-base font-bold text-[#3C1E1E] shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg sm:w-auto sm:px-7 sm:py-4"
              >
                <KakaoBubble size={18} />
                카톡으로 무료 견적
              </a>
              {PHONES.map((p) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-base font-bold text-white backdrop-blur transition hover:bg-white/15 number-tabular sm:w-auto sm:px-7 sm:py-4"
                >
                  <Phone size={16} />
                  <span className="text-sm font-semibold text-white/70">{p.label}</span>
                  {p.number}
                </a>
              ))}
            </div>
          </div>

          {/* Player */}
          <div ref={wrapRef} className="mx-auto w-full max-w-[340px] lg:max-w-[400px]">
            <div className="relative aspect-[9/16] overflow-hidden rounded-[28px] border border-white/20 bg-navy-900 shadow-navy-lg sm:rounded-[32px]">
              <img
                src="/videos/brand-film-poster.jpg"
                alt="로얄클린 실제 작업 영상 미리보기"
                loading="lazy"
                className="h-full w-full object-cover"
              />

              {/* 플레이어를 불러오기 전에는 포스터 + 재생 버튼, 불러온 뒤에는 유튜브 기본 컨트롤 사용 */}
              {embedSrc ? (
                <iframe
                  ref={frameRef}
                  src={embedSrc}
                  title="로얄클린 실제 작업 영상"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setMode('click')}
                  aria-label="영상 재생"
                  className="absolute inset-0 grid place-items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FEE500]"
                >
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-white/90 text-navy-700 shadow-soft">
                    <Play size={24} className="ml-0.5" />
                  </span>
                </button>
              )}
            </div>

            <p className="mt-3 text-center text-xs text-white/55 break-keep">
              로얄클린 실제 작업 영상 · 소리를 켜고 보시면 더 생생해요
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
