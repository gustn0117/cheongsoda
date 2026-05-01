import { Bolt, Check, Shield, Star } from './Icons';

const FEATURES = [
  {
    Icon: Bolt,
    title: '전문장비 사용',
    desc: '구석구석 꼼꼼하게',
  },
  {
    Icon: Check,
    title: '숙련된 직영팀',
    desc: '하청 없이 직접 관리',
  },
  {
    Icon: Shield,
    title: '투명 견적 진행',
    desc: '추가요금 ZERO!',
  },
  {
    Icon: Star,
    title: '빠른 예약 가능',
    desc: '매주 일정 보장',
  },
];

export default function TrustBar() {
  return (
    <section className="relative -mt-6 sm:-mt-10">
      <div className="container-px mx-auto max-w-7xl">
        <div className="relative z-10 grid grid-cols-2 gap-3 rounded-2xl border border-navy-100 bg-white p-4 shadow-soft sm:grid-cols-4 sm:gap-4 sm:rounded-3xl sm:p-6">
          {FEATURES.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="flex items-center gap-3 sm:flex-col sm:items-start sm:text-left"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy-50 text-navy-600 sm:h-12 sm:w-12 sm:rounded-2xl">
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
