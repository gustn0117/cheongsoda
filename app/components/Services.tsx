import { SERVICES } from '@/app/lib/data';
import { ArrowRight, Gem, Leaf, Shield } from './Icons';

export default function Services() {
  return (
    <section id="services" className="relative bg-cream py-20 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-grid-pattern bg-[size:48px_48px] opacity-40" />
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">Services</span>
          <h2 className="heading-section mt-3 text-[2rem] text-ink sm:mt-4 sm:text-5xl lg:text-6xl break-keep">
            구석구석, <span className="text-navy-600">청소 + 시공</span>까지
          </h2>
          <p className="mt-4 text-sm text-ink/70 sm:mt-6 sm:text-lg break-keep">
            입주·이사·거주·상가청소부터 줄눈시공·탄성코팅·폐기물처리까지.
            <br className="hidden sm:block" />
            한 번에 끝내는 종합청소 서비스를 제공합니다.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-16 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <a
              key={s.slug}
              href="#contact"
              aria-label={`${s.title} 문의하기`}
              className="group relative block overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-navy-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-600 focus-visible:ring-offset-2 sm:rounded-3xl"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-navy-50">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/15 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <h3 className="text-xl font-extrabold text-[#7DA0FF] drop-shadow-lg sm:text-2xl break-keep">
                    {s.title}
                  </h3>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-sm font-semibold text-navy-600 break-keep">{s.summary}</p>
                <p className="mt-2.5 text-sm leading-relaxed text-ink/70 line-clamp-4 break-keep sm:mt-3">
                  {s.detail}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-navy-100 pt-3.5 text-sm sm:mt-5 sm:pt-4">
                  <span className="font-semibold text-ink">전문 장비 · 직영팀</span>
                  <span className="inline-flex items-center gap-1 font-bold text-navy-600 transition group-hover:gap-2 group-hover:text-navy-700">
                    문의하기
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 grid gap-5 rounded-[24px] border border-navy-100 bg-white p-5 shadow-soft sm:mt-14 sm:rounded-[28px] sm:grid-cols-3 sm:p-8">
          {[
            {
              Icon: Shield,
              title: '직영팀 50팀 운영',
              text: '하청·알바 없이 20~40대 베테랑 직영팀만 배정됩니다. 7년 노하우의 청소팀장이 직접 진행합니다.',
            },
            {
              Icon: Leaf,
              title: '피톤치드·스팀 살균',
              text: '모든 고객께 무료 제공하여 새집증후군과 해충까지 한 번에 잡아드립니다.',
            },
            {
              Icon: Gem,
              title: '리뷰 2만원 페이백',
              text: '진행한 청소에 대한 리뷰 작성 시 2만원 현금 페이백을 즉시 지급해 드립니다.',
            },
          ].map((b) => (
            <div key={b.title} className="flex gap-3.5 sm:gap-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-navy-50 text-navy-600 sm:h-12 sm:w-12">
                <b.Icon size={20} />
              </div>
              <div className="min-w-0">
                <h4 className="text-base font-extrabold text-ink break-keep">{b.title}</h4>
                <p className="mt-1 text-sm text-ink/65 break-keep">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
