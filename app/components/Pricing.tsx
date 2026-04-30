'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, Check, Flame } from './Icons';

type Tier = {
  key: string;
  label: string;
  desc: string;
  perPyeong: number;
  highlights: string[];
  popular?: boolean;
};

const TIERS: Tier[] = [
  {
    key: 'live',
    label: '거주 청소',
    desc: '가구가 있는 상태에서 진행되는 일반 청소',
    perPyeong: 8000,
    highlights: ['주방·욕실·창틀 기본', '바닥 살균 마감', '가구 외부 청소'],
  },
  {
    key: 'move',
    label: '입주·이사 청소',
    desc: '빈 집 기준 전체 정밀 청소 + 살균',
    perPyeong: 10000,
    highlights: [
      '수납함·전등 전체 탈거 후 청소',
      '에어컨 커버·필터 청소',
      '피톤치드·스팀 살균 무료',
    ],
    popular: true,
  },
  {
    key: 'shop',
    label: '상가·사무실 청소',
    desc: '오픈 전·후 매장 정밀 청소',
    perPyeong: 9000,
    highlights: ['전 구역 살균 마감', '유리·창문 청소', '폐기물 분리·반출'],
  },
];

const PYEONG = [10, 15, 20, 25, 30, 35, 40, 50];

export default function Pricing() {
  const [tier, setTier] = useState<Tier>(TIERS[1]);
  const [pyeong, setPyeong] = useState(30);

  const estimate = useMemo(() => tier.perPyeong * pyeong, [tier, pyeong]);
  const formatted = estimate.toLocaleString('ko-KR');

  return (
    <section id="pricing" className="relative overflow-hidden bg-cream py-20 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">Pricing</span>
          <h2 className="heading-section mt-3 text-[2rem] text-ink sm:mt-4 sm:text-5xl lg:text-6xl break-keep">
            평수만 알려주세요,
            <br />
            <span className="text-navy-600">정직한 견적</span>을 드립니다
          </h2>
          <p className="mt-4 text-sm text-ink/70 sm:mt-6 sm:text-lg break-keep">
            전국 어디든 출장비 0원 · 평일·주말 동일 가격
            <br className="hidden sm:block" />
            추가 부분 발생 시에도 사전 안내 후 진행합니다.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-[1.1fr_1fr]">
          {/* Tier cards */}
          <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {TIERS.map((t) => {
              const selected = t.key === tier.key;
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setTier(t)}
                  className={`relative text-left overflow-hidden rounded-2xl border p-5 transition-all duration-300 sm:rounded-3xl sm:p-6 ${
                    selected
                      ? 'border-navy-600 bg-navy-600 text-white shadow-glow scale-[1.01]'
                      : 'border-navy-100 bg-white text-ink hover:border-navy-300 hover:-translate-y-0.5'
                  }`}
                >
                  {t.popular && (
                    <span
                      className={`absolute right-4 top-4 inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-extrabold sm:right-5 sm:top-5 sm:px-3 sm:py-1 sm:text-[11px] ${
                        selected ? 'bg-[#FEE500] text-[#3C1E1E]' : 'bg-navy-50 text-navy-700'
                      }`}
                    >
                      <Flame size={11} />
                      인기
                    </span>
                  )}
                  <div className="text-xs font-semibold opacity-70 sm:text-sm">
                    평당 {t.perPyeong.toLocaleString()}원~
                  </div>
                  <h3 className="mt-1.5 text-xl font-extrabold sm:mt-2 sm:text-2xl break-keep">{t.label}</h3>
                  <p className={`mt-1.5 text-sm sm:mt-2 break-keep ${selected ? 'text-white/80' : 'text-ink/65'}`}>
                    {t.desc}
                  </p>
                  <ul className="mt-3.5 space-y-1.5 sm:mt-4">
                    {t.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm break-keep">
                        <span
                          className={`grid h-4 w-4 shrink-0 place-items-center rounded-full ${
                            selected ? 'bg-[#FEE500] text-[#3C1E1E]' : 'bg-navy-100 text-navy-600'
                          }`}
                        >
                          <Check size={9} strokeWidth={3} />
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </button>
              );
            })}
          </div>

          {/* Estimate calculator */}
          <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-soft sm:rounded-3xl sm:p-9">
            <div className="text-xs font-bold text-navy-600 sm:text-sm">실시간 견적 계산</div>
            <div className="mt-1.5 text-xl font-extrabold text-ink sm:mt-2 sm:text-2xl break-keep">
              <span>{tier.label}</span>
              <span className="mx-2 text-navy-200">·</span>
              <span className="number-tabular">{pyeong}평</span>
            </div>

            <div className="mt-5 flex items-end gap-2 sm:mt-6">
              <div className="number-tabular text-4xl font-black text-navy-700 sm:text-6xl">
                {formatted}
              </div>
              <div className="pb-1.5 text-sm font-bold text-ink/60 sm:pb-2 sm:text-base">원~</div>
            </div>
            <p className="mt-2 text-xs text-ink/60 sm:text-sm break-keep">
              VAT 포함 · 피톤치드·스팀살균 무료 포함 · 옵션에 따라 변동
            </p>

            <div className="mt-6 sm:mt-7">
              <label className="flex items-center justify-between text-sm font-semibold text-ink">
                <span>면적 선택</span>
                <span className="number-tabular text-navy-600">{pyeong}평</span>
              </label>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {PYEONG.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPyeong(p)}
                    className={`number-tabular rounded-xl border py-2.5 text-sm font-bold transition ${
                      pyeong === p
                        ? 'border-navy-600 bg-navy-600 text-white'
                        : 'border-navy-100 bg-white text-ink hover:border-navy-300'
                    }`}
                  >
                    {p}평
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-2 rounded-2xl bg-mist p-4 text-sm sm:mt-7">
              {[
                { k: '평당 단가', v: `${tier.perPyeong.toLocaleString()}원` },
                { k: '예상 총 비용', v: `${formatted}원~` },
                { k: '피톤치드·스팀살균', v: '무료 포함' },
                { k: '출장비 / 주말', v: '없음 (전국 동일)' },
                { k: '리뷰 페이백', v: '최대 2만원 현금' },
              ].map((row) => (
                <div key={row.k} className="flex items-center justify-between gap-3">
                  <span className="text-ink/60 break-keep">{row.k}</span>
                  <span className="font-bold text-ink text-right break-keep">{row.v}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary mt-6 w-full sm:mt-7">
              이 견적으로 카톡 상담
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
