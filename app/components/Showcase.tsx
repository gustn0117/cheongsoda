import { PORTFOLIO_TILES } from '@/app/lib/data';

export default function Showcase() {
  return (
    <section className="relative bg-white py-20 sm:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-6">
          <div>
            <span className="section-eyebrow">Portfolio</span>
            <h2 className="heading-section mt-3 text-[1.75rem] text-ink sm:mt-4 sm:text-4xl lg:text-5xl break-keep">
              청소다가 작업한 <span className="text-navy-600">현장의 기록</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-ink/65 sm:text-base break-keep">
            매 현장마다 사진과 영상을 남겨 고객님께 투명하게 공유합니다.
            <br className="hidden sm:block" />
            마감의 차이를 직접 확인해 보세요.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {PORTFOLIO_TILES.map((t, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl"
            >
              <img
                src={t.src}
                alt={t.label}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent transition group-hover:from-navy-700/85" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-navy-700">
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
