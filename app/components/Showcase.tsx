const TILES = [
  { src: '/services/cover-main.jpeg', label: '입주·이사청소', span: 'col-span-2 row-span-2' },
  { src: '/services/bathroom.jpeg', label: '욕실 청소', span: 'col-span-2 row-span-1' },
  { src: '/services/aircon.jpeg', label: '에어컨 청소' },
  { src: '/services/kitchen.jpeg', label: '주방 청소' },
  { src: '/services/floor.jpeg', label: '바닥 청소', span: 'col-span-2 row-span-1' },
  { src: '/services/window.jpeg', label: '창·샷시' },
  { src: '/services/storage.jpeg', label: '수납함' },
  { src: '/services/hood.jpeg', label: '후드·환풍기' },
  { src: '/services/mold.jpeg', label: '곰팡이 제거' },
];

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
            마감의 차이를 직접 확인해 보세요.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-2.5 auto-rows-[120px] sm:mt-12 sm:auto-rows-[180px] sm:grid-cols-4 sm:gap-4 lg:auto-rows-[200px]">
          {TILES.map((t, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl sm:rounded-2xl ${t.span ?? ''}`}
            >
              <img
                src={t.src}
                alt={t.label}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent transition group-hover:from-navy-700/85" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-navy-700">
                  {t.label}
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#FEE500] text-[#3C1E1E] opacity-0 transition group-hover:opacity-100">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
