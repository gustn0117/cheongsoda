import { PORTFOLIO_TILES } from '@/app/lib/data';

const FEATURED = PORTFOLIO_TILES.slice(0, 6);

export default function QuoteIntro() {
  return (
    <section className="relative bg-cream pt-16 pb-6 sm:pt-24 sm:pb-10">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">Real Result</span>
          <h2 className="heading-section mt-3 text-[1.75rem] text-ink sm:mt-4 sm:text-4xl lg:text-5xl break-keep">
            이런 마감을 <span className="text-navy-600">약속드립니다</span>
          </h2>
          <p className="mt-4 text-sm text-ink/70 sm:mt-6 sm:text-lg break-keep">
            청소다 직영팀이 실제로 작업한 결과의 일부입니다.
            <br className="hidden sm:block" />
            아래에서 30초만에 견적을 신청하시면, 같은 마감으로 진행해 드립니다.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-2 sm:mt-12 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6">
          {FEATURED.map((t) => (
            <div
              key={t.src}
              className="group relative aspect-square overflow-hidden rounded-xl shadow-soft transition hover:-translate-y-1 hover:shadow-navy-lg sm:rounded-2xl"
            >
              <img
                src={t.src}
                alt={t.label}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <span className="inline-flex rounded-full bg-white/95 px-2.5 py-0.5 text-[11px] font-bold text-navy-700 sm:text-xs">
                  {t.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
