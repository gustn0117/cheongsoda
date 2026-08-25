'use client';

import { useEffect, useRef, useState } from 'react';
import { COMPANY } from '@/app/lib/data';
import { jumpToQuote } from '@/app/lib/scroll';
import { ArrowRight, KakaoBubble, Pause, Phone, Play, SoundOff, SoundOn } from './Icons';

const HIGHLIGHTS = ['하청·알바 NO', '전국 직영팀 50팀+', '5일 A/S 보장'];

export default function BrandFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  /* 화면에 들어오면 음소거 재생, 벗어나면 정지 (모션 최소화 설정 시 자동재생 안 함) */
  useEffect(() => {
    const v = videoRef.current;
    const wrap = wrapRef.current;
    if (!v || !wrap) return;

    v.muted = true;

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    v.addEventListener('play', onPlay);
    v.addEventListener('pause', onPause);

    let io: IntersectionObserver | undefined;
    if (!reduceMotion && typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            v.play().catch(() => undefined);
          } else if (!v.paused) {
            v.pause();
          }
        },
        { threshold: 0.4 }
      );
      io.observe(wrap);
    }

    return () => {
      v.removeEventListener('play', onPlay);
      v.removeEventListener('pause', onPause);
      io?.disconnect();
    };
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => undefined);
    else v.pause();
  };

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !v.muted;
    v.muted = next;
    setMuted(next);
    if (!next && v.paused) v.play().catch(() => undefined);
  };

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
              하청·알바 없이 청소다 직영팀이 직접 현장에 나갑니다.
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
              <a
                href={`tel:${COMPANY.phoneTel}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-base font-bold text-white backdrop-blur transition hover:bg-white/15 number-tabular sm:w-auto sm:px-7 sm:py-4"
              >
                <Phone size={16} />
                {COMPANY.phone}
              </a>
            </div>
          </div>

          {/* Player */}
          <div ref={wrapRef} className="mx-auto w-full max-w-[340px] lg:max-w-[400px]">
            <div className="relative aspect-[9/16] overflow-hidden rounded-[28px] border border-white/20 bg-navy-900 shadow-navy-lg sm:rounded-[32px]">
              <video
                ref={videoRef}
                src="/videos/promo.mp4"
                poster="/videos/promo-poster.jpg"
                muted
                loop
                playsInline
                preload="none"
                className="h-full w-full object-cover"
              />

              {/* 재생/일시정지 (영상 전체 클릭) */}
              <button
                type="button"
                onClick={togglePlay}
                aria-label={playing ? '영상 일시정지' : '영상 재생'}
                className="absolute inset-0 grid place-items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FEE500]"
              >
                <span
                  className={`grid h-16 w-16 place-items-center rounded-full bg-white/90 text-navy-700 shadow-soft transition ${
                    playing ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <Play size={24} className="ml-0.5" />
                </span>
              </button>

              {/* 컨트롤 */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-navy-950/80 to-transparent p-3 sm:p-4">
                <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-extrabold text-navy-700 sm:text-xs">
                  청소다 실제 작업 영상
                </span>
                <div className="pointer-events-auto flex items-center gap-2">
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={playing ? '영상 일시정지' : '영상 재생'}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-navy-950/60 text-white backdrop-blur transition hover:bg-navy-950/85"
                  >
                    {playing ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
                  </button>
                  <button
                    type="button"
                    onClick={toggleSound}
                    aria-label={muted ? '소리 켜기' : '소리 끄기'}
                    aria-pressed={!muted}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-navy-950/60 text-white backdrop-blur transition hover:bg-navy-950/85"
                  >
                    {muted ? <SoundOff size={17} /> : <SoundOn size={17} />}
                  </button>
                </div>
              </div>
            </div>

            <p className="mt-3 text-center text-xs text-white/55 break-keep">
              소리를 켜고 보시면 더 자세한 설명을 들으실 수 있어요
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
