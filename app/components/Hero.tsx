'use client';

import { useEffect, useRef, useState } from 'react';
import { COMPANY } from '@/app/lib/data';
import { ArrowRight, Bolt, Check, KakaoBubble, Phone } from './Icons';

const VIDEOS = [
  '/videos/hero-1.mp4',
  '/videos/hero-2.mp4',
  '/videos/hero-3.mp4',
  '/videos/hero-4.mp4',
  '/videos/hero-5.mp4',
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onEnded = () => setIdx((i) => (i + 1) % VIDEOS.length);
    v.addEventListener('ended', onEnded);
    return () => v.removeEventListener('ended', onEnded);
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.load();
    v.play().catch(() => undefined);
  }, [idx]);

  return (
    <section id="top" className="relative isolate overflow-hidden text-white">
      {/* Video background */}
      <div className="absolute inset-0 -z-10">
        <video
          ref={videoRef}
          src={VIDEOS[idx]}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/85 via-navy-800/70 to-navy-950/95" />
        <div
          className="absolute inset-0 mix-blend-overlay opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(60% 50% at 30% 30%, rgba(61,93,200,0.55) 0%, transparent 60%), radial-gradient(50% 60% at 80% 70%, rgba(254,229,0,0.18) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="container-px mx-auto max-w-7xl pt-28 pb-16 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:items-center">
          <div className="animate-fade-up">
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FEE500]/40 bg-[#FEE500]/10 px-3.5 py-2 text-sm font-bold text-[#FEE500] sm:px-4 sm:text-base">
                <Bolt size={15} />
                온라인 플랫폼 만족도 1위
              </span>
              <span className="chip-glow !px-3.5 !py-2 !text-sm sm:!px-4 sm:!text-base">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                지금 33명이 견적 상담중
              </span>
            </div>

            <p className="mt-5 text-base font-bold tracking-[0.04em] text-[#7DA0FF] sm:mt-6 sm:text-lg break-keep">
              입주 · 이사 · 거주 · 상가청소 전문
            </p>

            <h1 className="heading-display mt-2 text-[2.5rem] sm:text-6xl lg:text-7xl break-keep">
              종합청소업체 <span className="text-[#FEE500]">1위</span>
              <br />
              <span className="text-[3.25rem] sm:text-[5rem] lg:text-[6.5rem] text-[#7DA0FF]">
                청소다
              </span>
              는 다릅니다
            </h1>

            <p className="mt-5 max-w-xl text-base text-white/85 sm:mt-6 sm:text-xl break-keep">
              하청·알바 없는{' '}
              <span className="font-bold text-white">전국 직영팀 50팀+</span> 운영
              <br />
              보이지 않는 곳까지 완벽하게,{' '}
              <span className="font-bold text-white">결과로 증명합니다.</span>
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-2.5 sm:mt-9 sm:gap-3">
              <a
                href={COMPANY.kakao}
                target="_blank"
                rel="noreferrer"
                className="btn-kakao !px-5 !py-3.5 text-base sm:!px-7 sm:!py-4 sm:text-lg"
              >
                <KakaoBubble size={18} />
                카톡으로 무료 견적
              </a>
              <a
                href={`tel:${COMPANY.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15 number-tabular sm:px-7 sm:py-4 sm:text-base"
              >
                <Phone size={14} />
                {COMPANY.phone}
              </a>
              <a
                href="#services"
                className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                서비스 둘러보기
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="mt-9 grid grid-cols-2 gap-2 max-w-lg sm:mt-12 sm:grid-cols-4 sm:gap-3">
              {[
                { v: '50팀+', l: '전국 직영팀 운영' },
                { v: '5.0', l: '고객 만족도' },
                { v: '5일', l: 'A/S 보장 서비스' },
                { v: '10,000+', l: '누적 고객 수' },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl border border-white/15 bg-white/5 px-3 py-3 backdrop-blur sm:px-4"
                >
                  <div className="number-tabular text-lg font-extrabold text-white sm:text-xl">{s.v}</div>
                  <div className="mt-0.5 text-[11px] font-medium text-white/70 sm:text-xs break-keep">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating quick quote card */}
          <div className="animate-fade-up [animation-delay:120ms]">
            <div className="relative rounded-3xl border border-white/20 bg-white/[0.08] p-6 shadow-navy-lg backdrop-blur-xl sm:p-8">
              <div className="absolute -top-3 left-6 rounded-full bg-[#FEE500] px-3 py-1 text-[11px] font-extrabold text-[#3C1E1E] shadow-soft sm:text-xs">
                30초 견적 신청
              </div>
              <h3 className="heading-section text-2xl text-white sm:text-3xl break-keep">
                지역별 맞춤 청소 견적!
                <br />
                지금 신청하면
                <br />
                <span className="text-[#FEE500]">평당 가격</span> 이벤트
                <br />
                할인 진행중
              </h3>
              <p className="mt-2 text-sm text-white/75 break-keep">
                전국 어디든 출장비 0원 · 평일·주말 동일 가격
              </p>

              <ul className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
                {[
                  '전국 베테랑 직영팀 배정 (하청·알바 X)',
                  '피톤치드·스팀 살균 전 고객 무료',
                  '리뷰 작성시 2만원 현금 페이백',
                  '대물 1억원 배상책임 보험 가입',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-white/90 break-keep">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#FEE500] text-[#3C1E1E]">
                      <Check size={11} strokeWidth={3} />
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-white py-3.5 text-base font-bold text-navy-700 transition hover:bg-navy-50 sm:py-4"
              >
                무료 견적 받기
                <ArrowRight size={16} />
              </a>

              <a
                href={COMPANY.kakao}
                target="_blank"
                rel="noreferrer"
                className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                <KakaoBubble size={14} />
                카카오톡 채널 바로가기
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-cream to-transparent" />
    </section>
  );
}
