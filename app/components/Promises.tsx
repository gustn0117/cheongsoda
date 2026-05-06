import { PROMISES } from '@/app/lib/data';
import { Check } from './Icons';

const FREE_BENEFITS = [
  '리뷰 작성 시 2만원 현금 페이백',
  '살균소독된 타올로 구역별 사용',
  '피톤치드 소독 (새집증후군 제거)',
  '고온 스팀 살균소독',
  '화장실 거울·수전 오염방지 코팅',
  '모든 수납장·전등 탈거 청소',
  '5일 이내 A/S 보장 (업계 최대)',
];

export default function Promises() {
  return (
    <section id="promises" className="relative overflow-hidden bg-mist py-20 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">Our Promise</span>
          <h2 className="heading-section mt-3 text-[2rem] text-ink sm:mt-4 sm:text-5xl lg:text-6xl break-keep">
            청소다가 <span className="text-navy-600">고객님과 약속</span>합니다
          </h2>
          <p className="mt-4 text-sm text-ink/70 sm:mt-6 sm:text-lg break-keep">
            30대 청년들이 운영하는 청소다는 7년간의 청소팀장 경력과 노하우로, 보이지 않는 곳까지
            내 집처럼 청소합니다. 만족하실 때까지 끝까지 책임집니다.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl sm:mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-soft sm:rounded-[32px]">
            <img
              src="/team/group-shot.png"
              alt="청소다 직영팀 단체샷"
              loading="lazy"
              className="block h-auto w-full"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#FEE500] px-2.5 py-1 text-[10px] font-extrabold text-[#3C1E1E] sm:text-xs">
                  본사 직영팀
                </span>
                <span className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-navy-700 sm:text-xs">
                  20~40대 베테랑 50팀+
                </span>
              </div>
              <p className="mt-2 text-base font-extrabold text-white drop-shadow sm:text-xl break-keep">
                하청·알바 없이 청소다 본사에서 직접 운영하는 직영팀입니다.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          {/* Promise list */}
          <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2">
            {PROMISES.map((p) => (
              <article
                key={p.no}
                className="group relative overflow-hidden rounded-2xl border border-navy-100 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-navy-lg sm:rounded-3xl sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="number-tabular text-3xl font-black text-navy-100 group-hover:text-navy-200">
                    {p.no}
                  </span>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-navy-50 text-navy-600 transition group-hover:bg-navy-600 group-hover:text-white">
                    <Check size={16} strokeWidth={3} />
                  </span>
                </div>
                <h3 className="mt-3 text-base font-extrabold text-ink sm:text-lg break-keep">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/65 sm:mt-2 break-keep">{p.desc}</p>
              </article>
            ))}

            {/* 마지막 카드: 이미지 */}
            <article className="relative overflow-hidden rounded-2xl border border-navy-100 bg-navy-600 p-5 text-white shadow-glow sm:rounded-3xl sm:p-7">
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  backgroundImage:
                    'radial-gradient(45% 45% at 0% 100%, rgba(61,93,200,0.6) 0%, transparent 60%), radial-gradient(50% 60% at 100% 0%, rgba(254,229,0,0.25) 0%, transparent 60%)',
                }}
              />
              <div className="relative">
                <span className="number-tabular text-3xl font-black text-white/30">06</span>
                <h3 className="mt-3 text-lg font-extrabold sm:text-xl break-keep">내 집처럼 청소합니다</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/80 sm:mt-2 break-keep">
                  새로 시작하시는 공간에서 기분 좋은 일들만 가득하도록, 보이지 않는 곳까지 더
                  신경 써서 작업합니다.
                </p>
              </div>
            </article>
          </div>

          {/* Free benefits panel */}
          <aside className="rounded-2xl border border-navy-100 bg-white p-6 shadow-soft sm:rounded-3xl sm:p-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FEE500]/15 px-3 py-1 text-[11px] font-bold text-[#9A7C00] sm:text-xs">
              FREE · 청소다 무료 서비스
            </div>
            <h3 className="mt-4 text-xl font-extrabold text-ink sm:text-3xl break-keep">
              청소다에 의뢰하면
              <br />
              <span className="text-navy-600">7가지 무료 혜택</span>이 따라옵니다
            </h3>
            <ul className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
              {FREE_BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm sm:gap-3 sm:text-base">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-navy-600 text-white sm:h-6 sm:w-6">
                    <Check size={11} strokeWidth={3} />
                  </span>
                  <span className="text-ink/85 font-medium break-keep">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 grid grid-cols-3 gap-3 rounded-2xl bg-mist p-4 text-center">
              {[
                { v: '50팀+', l: '직영팀' },
                { v: '5.0', l: '리뷰 평점' },
                { v: '0원', l: '출장비' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="number-tabular text-xl font-black text-navy-700 sm:text-2xl">
                    {s.v}
                  </div>
                  <div className="mt-1 text-xs font-semibold text-ink/60">{s.l}</div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
