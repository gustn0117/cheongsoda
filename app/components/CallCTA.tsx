import { COMPANY } from '@/app/lib/data';
import { ArrowRight, ExternalLink, KakaoBubble, NaverBlog, Phone } from './Icons';

export default function CallCTA() {
  return (
    <section className="relative bg-white py-20 sm:py-24">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <span className="section-eyebrow">Contact</span>
          <h2 className="heading-section mt-3 text-3xl text-ink sm:text-4xl lg:text-5xl break-keep">
            가장 편하신 방법으로
            <br className="sm:hidden" />
            <span className="sm:ml-2 text-navy-600">바로 연결</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
          {/* 전화 카드 */}
          <a
            href={`tel:${COMPANY.phoneTel}`}
            className="group relative overflow-hidden rounded-[28px] border border-navy-100 bg-gradient-to-br from-navy-50 via-white to-mist p-7 transition hover:-translate-y-1 hover:shadow-navy-lg sm:p-8"
          >
            <div
              className="absolute inset-0 opacity-0 transition group-hover:opacity-100"
              style={{
                backgroundImage:
                  'radial-gradient(50% 60% at 100% 0%, rgba(27,63,170,0.18) 0%, transparent 60%)',
              }}
            />
            <div className="relative flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 rounded-full bg-navy-100 px-3 py-1 text-[11px] font-extrabold text-navy-700 tracking-wider">
                  TAP TO CALL
                </div>
                <h3 className="mt-4 text-xl font-extrabold text-ink sm:text-2xl break-keep">
                  지금 바로 통화 연결
                </h3>
                <p className="mt-1.5 text-sm text-ink/65 break-keep">
                  본사 직영 상담원이 직접 응대 · 24시간
                </p>
                <div className="mt-5 number-tabular text-3xl font-black text-navy-700 sm:text-[2rem] break-all">
                  {COMPANY.phone}
                </div>
              </div>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-navy-600 text-white shadow-glow transition group-hover:scale-110 sm:h-14 sm:w-14">
                <Phone size={22} />
              </span>
            </div>
            <div className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-navy-700">
              번호 누르면 통화 연결
              <ArrowRight size={14} />
            </div>
          </a>

          {/* 카톡 카드 */}
          <a
            href={COMPANY.kakao}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-[28px] border border-[#FEE500]/40 bg-[#FEE500] p-7 text-[#3C1E1E] transition hover:-translate-y-1 hover:shadow-navy-lg sm:p-8"
          >
            <div
              className="absolute inset-0 opacity-0 transition group-hover:opacity-100"
              style={{
                backgroundImage:
                  'radial-gradient(50% 60% at 0% 100%, rgba(60,30,30,0.2) 0%, transparent 60%)',
              }}
            />
            <div className="relative flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#3C1E1E] px-3 py-1 text-[11px] font-extrabold text-[#FEE500] tracking-wider">
                  KAKAO TALK
                </div>
                <h3 className="mt-4 text-xl font-extrabold sm:text-2xl break-keep">
                  카톡으로 무료 견적
                </h3>
                <p className="mt-1.5 text-sm break-keep">
                  사진·평수만 보내주시면 즉시 견적 (5분)
                </p>
                <div className="mt-5 text-base font-black sm:text-lg break-all">
                  {COMPANY.kakaoHandle}
                </div>
              </div>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#3C1E1E] text-[#FEE500] transition group-hover:scale-110 sm:h-14 sm:w-14">
                <KakaoBubble size={24} />
              </span>
            </div>
            <div className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-bold">
              카카오톡 채널 바로가기
              <ArrowRight size={14} />
            </div>
          </a>

          {/* 블로그 카드 */}
          <a
            href={COMPANY.blog}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-[28px] border border-emerald-100 bg-gradient-to-br from-[#03C75A] via-[#04B850] to-[#02A14A] p-7 text-white transition hover:-translate-y-1 hover:shadow-navy-lg sm:p-8"
          >
            <div
              className="absolute inset-0 opacity-0 transition group-hover:opacity-100"
              style={{
                backgroundImage:
                  'radial-gradient(50% 60% at 100% 100%, rgba(255,255,255,0.18) 0%, transparent 60%)',
              }}
            />
            <div className="relative flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[11px] font-extrabold text-white tracking-wider backdrop-blur">
                  NAVER BLOG
                </div>
                <h3 className="mt-4 text-xl font-extrabold sm:text-2xl break-keep">
                  네이버 블로그 후기
                </h3>
                <p className="mt-1.5 text-sm text-white/90 break-keep">
                  실제 작업 현장 사진 & 후기 확인하기
                </p>
                <div className="mt-5 text-base font-black sm:text-lg break-all">
                  {COMPANY.blogHandle}
                </div>
              </div>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/15 text-white backdrop-blur transition group-hover:scale-110 sm:h-14 sm:w-14">
                <NaverBlog size={24} />
              </span>
            </div>
            <div className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-bold">
              블로그 방문하기
              <ExternalLink size={14} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
