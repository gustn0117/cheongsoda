import { CheckCircle, Gem, Leaf, Shield } from './Icons';

const BADGES = [
  { Icon: Shield, title: '대물 1억원', desc: '배상책임 보험 가입' },
  { Icon: CheckCircle, title: '5일 A/S', desc: '책임 보장 시스템' },
  { Icon: Leaf, title: '피톤치드·살균', desc: '전 고객 무료 제공' },
  { Icon: Gem, title: '리뷰 페이백', desc: '최대 2만원 현금' },
];

export default function TrustStrip() {
  return (
    <section className="relative bg-cream py-10 sm:py-14">
      <div className="container-px mx-auto max-w-7xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full bg-navy-50 px-5 py-2.5 text-base font-extrabold text-navy-700 sm:text-xl">
            <span aria-hidden className="text-lg sm:text-2xl">🛡</span>
            안심하고 맡기세요!
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-4 sm:gap-4">
          {BADGES.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="flex items-center gap-3 rounded-2xl border border-navy-100 bg-white p-4 shadow-soft sm:flex-col sm:items-center sm:p-6 sm:text-center"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-600 text-white sm:h-12 sm:w-12 sm:rounded-2xl">
                <Icon size={20} />
              </span>
              <div className="min-w-0">
                <div className="text-sm font-extrabold text-ink break-keep sm:text-base">
                  {title}
                </div>
                <div className="mt-0.5 text-xs text-ink/60 break-keep sm:mt-1 sm:text-sm">
                  {desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
