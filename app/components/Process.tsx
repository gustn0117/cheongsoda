import { PROCESS_STEPS } from '@/app/lib/data';
import { ArrowRight } from './Icons';

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-32">
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(45% 35% at 20% 20%, rgba(61,93,200,0.55) 0%, transparent 60%), radial-gradient(40% 40% at 85% 80%, rgba(254,229,0,0.18) 0%, transparent 60%)',
        }}
      />
      <div className="absolute inset-0 -z-10 bg-grid-pattern bg-[size:64px_64px] opacity-[0.05]" />

      <div className="container-px mx-auto max-w-7xl">
        <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto] lg:gap-10">
          <div>
            <span className="section-eyebrow !text-[#FEE500]">How it works</span>
            <h2 className="heading-section mt-3 text-[2rem] sm:mt-4 sm:text-5xl lg:text-6xl break-keep">
              상담부터 살균 마감까지,
              <br />
              <span className="text-[#FEE500]">단 4단계</span>로 끝납니다
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/75 sm:text-base break-keep">
            번거로운 견적 절차 없이, 카톡 한번이면 시작됩니다. 청소 당일까지 모든 단계를
            본사 팀장이 직접 안내해 드립니다.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-16 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((s, i) => (
            <div
              key={s.step}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-white/30 hover:bg-white/10 sm:rounded-3xl sm:p-7"
            >
              <div className="flex items-center justify-between">
                <span className="number-tabular text-4xl font-black text-white/15 sm:text-5xl">
                  {s.step}
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#FEE500] text-[#3C1E1E] sm:h-10 sm:w-10">
                  <ArrowRight size={16} strokeWidth={2.5} />
                </span>
              </div>
              <h3 className="mt-5 text-lg font-extrabold text-white sm:mt-6 sm:text-xl break-keep">{s.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/70 sm:mt-3 break-keep">{s.desc}</p>

              {i < PROCESS_STEPS.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 lg:block">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    aria-hidden
                  >
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
