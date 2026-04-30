'use client';

import { useState } from 'react';
import { COMPANY, PYEONG_OPTIONS, REGIONS, SERVICE_OPTIONS } from '@/app/lib/data';
import { supabase } from '@/app/lib/supabase';
import { ArrowRight, CheckCircle, ChevronDown, KakaoBubble } from './Icons';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    region: REGIONS[0],
    service: SERVICE_OPTIONS[0],
    size: PYEONG_OPTIONS[1],
    consent: false,
  });
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    if (digits.length < 4) return digits;
    if (digits.length < 8) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!form.name.trim()) return setError('이름을 입력해 주세요.');
    if (form.phone.replace(/\D/g, '').length < 10)
      return setError('전화번호를 정확히 입력해 주세요.');
    if (!form.consent) return setError('개인정보 수집·이용에 동의해 주세요.');

    setStatus('submitting');
    const { error: insertError } = await supabase.from('inquiries').insert({
      name: form.name.trim(),
      phone: form.phone,
      region: form.region,
      service: form.service,
      size: form.size,
      consent: form.consent,
    });

    if (insertError) {
      setStatus('error');
      setError('신청 접수에 실패했습니다. 잠시 후 다시 시도해 주세요.');
      return;
    }
    setStatus('success');
    setForm((f) => ({ ...f, name: '', phone: '', consent: false }));
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-700 via-navy-800 to-navy-950" />
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(50% 40% at 20% 20%, rgba(61,93,200,0.55) 0%, transparent 60%), radial-gradient(40% 40% at 90% 80%, rgba(254,229,0,0.18) 0%, transparent 60%)',
        }}
      />

      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="text-white">
            <span className="section-eyebrow !text-[#FEE500]">Free Quote</span>
            <h2 className="heading-section mt-3 text-[2rem] sm:mt-4 sm:text-5xl lg:text-6xl break-keep">
              30초 만에
              <br />
              <span className="text-[#FEE500]">무료 견적</span>을 받아보세요
            </h2>
            <p className="mt-4 max-w-md text-sm text-white/80 sm:mt-6 sm:text-lg break-keep">
              평수와 옵션만 알려주시면, 청소다 본사 직영팀에서 카카오톡으로 즉시 견적을
              안내드립니다. 전국 어디든 출장비 없이 동일한 가격으로 진행됩니다.
            </p>

            <div className="mt-8 grid gap-2.5 sm:mt-10 sm:gap-3">
              {[
                { v: '50팀+', l: '전국 직영팀 서비스 지역' },
                { v: '24시간', l: '카카오톡 상담 응대' },
                { v: '평당 8,000원~', l: '정직한 가격' },
                { v: '1억원', l: '대물 배상책임 보험' },
              ].map((b) => (
                <div
                  key={b.l}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3.5 backdrop-blur sm:px-5 sm:py-4"
                >
                  <span className="text-sm text-white/70 break-keep">{b.l}</span>
                  <span className="text-sm font-extrabold text-white sm:text-base shrink-0 number-tabular">{b.v}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5 sm:mt-10 sm:gap-3">
              <a
                href={COMPANY.kakao}
                target="_blank"
                rel="noreferrer"
                className="btn-kakao !px-5 !py-3.5 text-sm sm:!px-7 sm:!py-4 sm:text-base"
              >
                <KakaoBubble size={16} />
                카카오 채널 바로가기
              </a>
              <a
                href={`tel:${COMPANY.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15 number-tabular sm:px-7 sm:py-4 sm:text-base"
              >
                {COMPANY.phone}
              </a>
            </div>
          </div>

          {/* Form card */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-br from-[#FEE500]/30 via-white/10 to-transparent blur-2xl" />
            <form
              onSubmit={handleSubmit}
              className="relative rounded-[28px] border border-white/40 bg-white p-6 shadow-navy-lg sm:p-8"
            >
              <h3 className="text-2xl font-extrabold text-ink">청소 견적 신청</h3>
              <p className="mt-1 text-sm text-ink/60">
                * 표시는 필수 항목입니다 · 카톡으로 답변 드립니다
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="이름 *">
                  <input
                    type="text"
                    placeholder="홍길동"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="input"
                  />
                </Field>
                <Field label="연락처 *">
                  <input
                    type="tel"
                    placeholder="010-0000-0000"
                    inputMode="numeric"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: formatPhone(e.target.value) })}
                    className="input number-tabular"
                  />
                </Field>
                <Field label="지역">
                  <Select
                    value={form.region}
                    onChange={(v) => setForm({ ...form, region: v })}
                    options={REGIONS}
                  />
                </Field>
                <Field label="청소 종류">
                  <Select
                    value={form.service}
                    onChange={(v) => setForm({ ...form, service: v })}
                    options={SERVICE_OPTIONS}
                  />
                </Field>
                <Field label="평수 (공급면적)" full>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
                    {PYEONG_OPTIONS.map((sz) => (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => setForm({ ...form, size: sz })}
                        className={`rounded-xl border py-2.5 text-xs font-bold transition sm:py-3 sm:text-sm ${
                          form.size === sz
                            ? 'border-navy-600 bg-navy-600 text-white'
                            : 'border-navy-100 bg-white text-ink hover:border-navy-300'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </Field>
              </div>

              <label className="mt-6 flex items-start gap-3 rounded-2xl bg-mist p-4 text-sm">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                  className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-navy-600"
                />
                <span className="text-ink/75">
                  <span className="font-bold text-ink">[필수]</span> 견적 상담을 위한 개인정보
                  수집·이용에 동의합니다. 수집된 정보는 견적 안내 외 용도로 사용되지 않습니다.
                </span>
              </label>

              {error && (
                <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  {error}
                </div>
              )}
              {status === 'success' && (
                <div className="mt-4 flex items-start gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                  <CheckCircle size={18} />
                  <span>신청이 접수되었습니다. 곧 카카오톡으로 연락드리겠습니다.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary mt-6 w-full text-lg disabled:opacity-60"
              >
                {status === 'submitting' ? '신청 중...' : '청소견적 신청하기'}
                {status !== 'submitting' && <ArrowRight size={18} />}
              </button>

              <p className="mt-4 text-center text-xs text-ink/50">
                평균 응대 시간 5분 이내 · 영업일 기준
              </p>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          border-radius: 0.875rem;
          border: 1px solid #E2E7F4;
          background: white;
          padding: 0.875rem 1rem;
          font-size: 0.95rem;
          font-weight: 500;
          color: #0B1437;
          transition: all 0.2s;
        }
        .input::placeholder { color: #9AA7C9; }
        .input:focus {
          outline: none;
          border-color: #1B3FAA;
          box-shadow: 0 0 0 4px rgba(27, 63, 170, 0.12);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  full,
  children,
}: {
  label: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${full ? 'sm:col-span-2' : ''}`}>
      <span className="text-xs font-bold text-ink/70">{label}</span>
      {children}
    </label>
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded-[14px] border border-navy-100 bg-white px-4 py-[14px] pr-10 text-sm font-medium text-ink transition focus:border-navy-600 focus:outline-none focus:ring-4 focus:ring-navy-600/10"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-navy-400">
        <ChevronDown size={14} />
      </span>
    </div>
  );
}
