'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, Check } from './Icons';

const PER_PYEONG = 10000;
const PYEONG = [10, 15, 20, 25, 30, 35, 40, 50];

type AddOn = { key: string; label: string; included: boolean };
const DEFAULT_ADDONS: AddOn[] = [
  { key: 'aircon', label: '에어컨 청소', included: false },
  { key: 'mold', label: '곰팡이 제거', included: false },
  { key: 'hood', label: '후드·환풍기 청소', included: false },
  { key: 'fridge', label: '냉장고 청소', included: false },
  { key: 'window', label: '창문·창틀 정밀', included: false },
  { key: 'storage', label: '수납장 탈거 청소', included: false },
];

export default function Pricing() {
  const [pyeong, setPyeong] = useState(30);
  const [addons, setAddons] = useState<AddOn[]>(DEFAULT_ADDONS);

  const estimate = useMemo(() => PER_PYEONG * pyeong, [pyeong]);
  const formatted = estimate.toLocaleString('ko-KR');
  const checkedCount = addons.filter((a) => a.included).length;

  const toggle = (key: string) =>
    setAddons((prev) =>
      prev.map((a) => (a.key === key ? { ...a, included: !a.included } : a))
    );

  return (
    <section id="pricing" className="relative overflow-hidden bg-cream py-20 sm:py-32">
      <div className="container-px mx-auto max-w-3xl">
        <div className="text-center">
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

        <div className="mt-10 sm:mt-14">
          <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-soft sm:rounded-3xl sm:p-9">
            <div className="text-xs font-bold text-navy-600 sm:text-sm">실시간 견적 계산</div>
            <div className="mt-1.5 text-xl font-extrabold text-ink sm:mt-2 sm:text-2xl break-keep">
              <span className="number-tabular">{pyeong}평</span>
              <span className="mx-2 text-navy-200">·</span>
              <span>평당 {PER_PYEONG.toLocaleString()}원~</span>
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

            <div className="mt-6 sm:mt-7">
              <div className="flex items-center justify-between text-sm font-semibold text-ink">
                <span>추가 옵션 선택</span>
                <span className="text-xs font-medium text-ink/60">
                  체크한 항목 {checkedCount}개 (별도 견적 안내)
                </span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {addons.map((a) => {
                  const on = a.included;
                  return (
                    <button
                      key={a.key}
                      type="button"
                      onClick={() => toggle(a.key)}
                      className={`flex items-center justify-between gap-2 rounded-xl border px-3 py-2.5 text-left text-sm font-semibold transition ${
                        on
                          ? 'border-navy-600 bg-navy-50 text-navy-700'
                          : 'border-navy-100 bg-white text-ink/70 hover:border-navy-300'
                      }`}
                    >
                      <span className="break-keep">{a.label}</span>
                      <span
                        className={`grid h-4 w-4 shrink-0 place-items-center rounded ${
                          on ? 'bg-navy-600 text-white' : 'border border-navy-200 bg-white'
                        }`}
                      >
                        {on && <Check size={11} strokeWidth={3.5} />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 grid gap-2 rounded-2xl bg-mist p-4 text-sm sm:mt-7">
              {[
                { k: '평당 단가', v: `${PER_PYEONG.toLocaleString()}원` },
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
