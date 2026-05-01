import { COMPANY } from '@/app/lib/data';
import { KakaoBubble, Phone } from './Icons';

export default function PromoBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-px mx-auto max-w-7xl py-14 sm:py-20">
        <div className="relative overflow-hidden rounded-[28px] border border-navy-100 bg-gradient-to-br from-navy-700 via-navy-800 to-navy-950 px-6 py-10 text-white shadow-navy-lg sm:rounded-[32px] sm:px-12 sm:py-16">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                'radial-gradient(40% 60% at 80% 0%, rgba(254,229,0,0.25) 0%, transparent 60%), radial-gradient(45% 55% at 0% 100%, rgba(61,93,200,0.5) 0%, transparent 60%)',
            }}
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#FEE500]/50 bg-[#FEE500]/10 px-3.5 py-1 text-[11px] font-extrabold text-[#FEE500] sm:text-xs">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FEE500]" />
                FREE EVENT
              </div>
              <h2 className="heading-section mt-4 text-[1.65rem] sm:mt-5 sm:text-4xl lg:text-5xl break-keep">
                지금 신청하면{' '}
                <span className="text-[#FEE500]">이벤트 할인 진행중</span>
                <br />+ 리뷰 작성 시{' '}
                <span className="text-[#FEE500]">2만원 현금 페이백</span>
              </h2>
              <p className="mt-4 max-w-xl text-sm text-white/80 sm:mt-5 sm:text-base break-keep">
                전국 어디든 출장비 0원 · 평일·주말 동일 가격. 사진과 평수만 보내주시면 카톡으로
                즉시 견적을 안내드립니다. 살균·피톤치드는 추가 비용 없이 무료입니다.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-7 sm:gap-3">
                <a
                  href={COMPANY.kakao}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-kakao !px-5 !py-3.5 text-sm sm:!px-7 sm:!py-4 sm:text-base"
                >
                  <KakaoBubble size={16} />
                  카톡으로 즉시 견적
                </a>
                <a
                  href={`tel:${COMPANY.phoneTel}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15 number-tabular sm:px-7 sm:py-4 sm:text-base"
                >
                  <Phone size={14} />
                  {COMPANY.phone}
                </a>
              </div>
            </div>

            <div className="grid gap-3">
              {[
                { v: '이벤트 진행중', l: '지역별 맞춤 청소 견적', tone: 'gold' },
                { v: '2만원', l: '리뷰 작성 페이백' },
                { v: 'FREE', l: '피톤치드·스팀 살균' },
                { v: '5일 A/S', l: '책임 보장 기간' },
              ].map((b, i) => (
                <div
                  key={b.l}
                  className={`flex items-center justify-between rounded-2xl border px-5 py-4 ${
                    i === 0
                      ? 'border-[#FEE500]/50 bg-[#FEE500]/10'
                      : 'border-white/15 bg-white/5'
                  }`}
                >
                  <span className="text-sm text-white/75">{b.l}</span>
                  <span
                    className={`number-tabular text-lg font-extrabold ${
                      b.tone === 'gold' ? 'text-[#FEE500]' : 'text-white'
                    }`}
                  >
                    {b.v}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
