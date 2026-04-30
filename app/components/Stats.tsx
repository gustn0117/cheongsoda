import { STATS } from '@/app/lib/data';

export default function Stats() {
  return (
    <section className="relative bg-white py-16 sm:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
          <div>
            <span className="section-eyebrow">Why 청소다</span>
            <h2 className="heading-section mt-3 text-[1.75rem] text-ink sm:mt-4 sm:text-4xl lg:text-5xl break-keep">
              숫자로 증명하는
              <br />
              <span className="text-navy-600">청소다의 신뢰</span>
            </h2>
            <p className="mt-4 text-sm text-ink/70 sm:mt-5 sm:text-lg break-keep">
              많은 고객님께서 청소다를 선택하시고, 다시 찾아주십니다. 단순히 청소만 하는
              업체가 아닌, 정직한 가격과 꼼꼼함으로 답해드립니다.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`group relative overflow-hidden rounded-2xl border p-5 transition-all duration-500 hover:-translate-y-1 sm:rounded-3xl sm:p-8 ${
                  i % 3 === 0
                    ? 'border-navy-200 bg-navy-600 text-white shadow-glow'
                    : 'border-navy-100 bg-mist text-ink'
                }`}
              >
                <div className="number-tabular text-3xl font-black tracking-tight sm:text-5xl">
                  {s.value}
                </div>
                <div
                  className={`mt-2 text-xs font-semibold sm:mt-3 sm:text-sm break-keep ${
                    i % 3 === 0 ? 'text-white/80' : 'text-ink/60'
                  }`}
                >
                  {s.label}
                </div>
                <div
                  className={`absolute -right-4 -top-4 h-24 w-24 rounded-full opacity-0 transition group-hover:opacity-30 ${
                    i % 3 === 0 ? 'bg-[#FEE500]' : 'bg-navy-200'
                  } blur-2xl`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
