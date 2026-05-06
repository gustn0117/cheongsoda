import { COMPANY } from '@/app/lib/data';
import {
  ArrowRight,
  ExternalLink,
  Instagram,
  KakaoBubble,
  NaverBlog,
  Phone,
  Soomgo,
  YouTube,
} from './Icons';

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

        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
            <div className="relative flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="inline-flex items-center gap-2 rounded-full bg-navy-100 px-3 py-1 text-[11px] font-extrabold text-navy-700 tracking-wider">
                  TAP TO CALL
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-ink sm:text-xl break-keep">
                  지금 바로 통화 연결
                </h3>
                <p className="mt-1.5 text-sm text-ink/65 break-keep">
                  본사 직영 상담원이 직접 응대 · 24시간
                </p>
                <div className="mt-5 number-tabular text-2xl font-black text-navy-700 sm:text-3xl">
                  {COMPANY.phone}
                </div>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-navy-600 text-white shadow-glow transition group-hover:scale-110 sm:h-12 sm:w-12">
                <Phone size={20} />
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
            <div className="relative flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#3C1E1E] px-3 py-1 text-[11px] font-extrabold text-[#FEE500] tracking-wider">
                  KAKAO TALK
                </div>
                <h3 className="mt-4 text-lg font-extrabold sm:text-xl break-keep">
                  카톡으로 무료 견적
                </h3>
                <p className="mt-1.5 text-sm break-keep">
                  사진·평수만 보내주시면 즉시 견적 (5분)
                </p>
                <div className="mt-5 text-base font-black sm:text-lg break-keep">
                  카카오톡 채널 바로가기
                </div>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#3C1E1E] text-[#FEE500] transition group-hover:scale-110 sm:h-12 sm:w-12">
                <KakaoBubble size={22} />
              </span>
            </div>
            <div className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-bold">
              지금 상담 시작하기
              <ArrowRight size={14} />
            </div>
          </a>

          {/* 네이버 블로그 카드 */}
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
            <div className="relative flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[11px] font-extrabold text-white tracking-wider backdrop-blur">
                  NAVER BLOG
                </div>
                <h3 className="mt-4 text-lg font-extrabold sm:text-xl break-keep">
                  네이버블로그
                </h3>
                <p className="mt-1.5 text-sm text-white/90 break-keep">
                  실제 작업 현장 사진과 후기를 한눈에
                </p>
                <div className="mt-5 text-base font-black sm:text-lg break-keep">
                  블로그 방문하기
                </div>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/15 text-white backdrop-blur transition group-hover:scale-110 sm:h-12 sm:w-12">
                <NaverBlog size={22} />
              </span>
            </div>
            <div className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-bold">
              네이버 블로그
              <ExternalLink size={14} />
            </div>
          </a>

          {/* 인스타그램 카드 */}
          <a
            href={COMPANY.instagram}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-[28px] p-7 text-white transition hover:-translate-y-1 hover:shadow-navy-lg sm:p-8"
            style={{
              background:
                'linear-gradient(135deg, #FEDA75 0%, #FA7E1E 25%, #D62976 50%, #962FBF 75%, #4F5BD5 100%)',
            }}
          >
            <div
              className="absolute inset-0 opacity-0 transition group-hover:opacity-100"
              style={{
                backgroundImage:
                  'radial-gradient(60% 60% at 0% 0%, rgba(255,255,255,0.2) 0%, transparent 60%)',
              }}
            />
            <div className="relative flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[11px] font-extrabold text-white tracking-wider backdrop-blur">
                  INSTAGRAM
                </div>
                <h3 className="mt-4 text-lg font-extrabold sm:text-xl break-keep">
                  인스타그램
                </h3>
                <p className="mt-1.5 text-sm text-white/90 break-keep">
                  매일 업데이트되는 청소 현장 스토리
                </p>
                <div className="mt-5 text-base font-black sm:text-lg break-keep">
                  팔로우하고 소식 받기
                </div>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/15 text-white backdrop-blur transition group-hover:scale-110 sm:h-12 sm:w-12">
                <Instagram size={22} />
              </span>
            </div>
            <div className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-bold">
              인스타그램 바로가기
              <ExternalLink size={14} />
            </div>
          </a>

          {/* 유튜브 카드 */}
          <a
            href={COMPANY.youtube}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-[28px] border border-red-200 bg-gradient-to-br from-[#FF3030] via-[#FF0000] to-[#CC0000] p-7 text-white transition hover:-translate-y-1 hover:shadow-navy-lg sm:p-8"
          >
            <div
              className="absolute inset-0 opacity-0 transition group-hover:opacity-100"
              style={{
                backgroundImage:
                  'radial-gradient(50% 60% at 100% 0%, rgba(255,255,255,0.18) 0%, transparent 60%)',
              }}
            />
            <div className="relative flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[11px] font-extrabold text-white tracking-wider backdrop-blur">
                  YOUTUBE
                </div>
                <h3 className="mt-4 text-lg font-extrabold sm:text-xl break-keep">
                  유튜브 채널
                </h3>
                <p className="mt-1.5 text-sm text-white/90 break-keep">
                  실제 청소 과정 영상을 공개합니다
                </p>
                <div className="mt-5 text-base font-black sm:text-lg break-keep">
                  영상으로 보는 청소다
                </div>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/15 text-white backdrop-blur transition group-hover:scale-110 sm:h-12 sm:w-12">
                <YouTube size={24} />
              </span>
            </div>
            <div className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-bold">
              유튜브 바로가기
              <ExternalLink size={14} />
            </div>
          </a>

          {/* 숨고 카드 */}
          <a
            href={COMPANY.soomgo}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-[28px] border border-navy-100 bg-gradient-to-br from-[#1F4FF1] via-[#2D5BFF] to-[#0E3AC8] p-7 text-white transition hover:-translate-y-1 hover:shadow-navy-lg sm:p-8"
          >
            <div
              className="absolute inset-0 opacity-0 transition group-hover:opacity-100"
              style={{
                backgroundImage:
                  'radial-gradient(50% 60% at 100% 0%, rgba(255,255,255,0.2) 0%, transparent 60%)',
              }}
            />
            <div className="relative flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[11px] font-extrabold text-white tracking-wider backdrop-blur">
                  SOOMGO
                </div>
                <h3 className="mt-4 text-lg font-extrabold sm:text-xl break-keep">
                  숨고 프로필
                </h3>
                <p className="mt-1.5 text-sm text-white/90 break-keep">
                  검증된 만족도 리뷰를 직접 확인하세요
                </p>
                <div className="mt-5 text-base font-black sm:text-lg break-keep">
                  숨고에서 후기 보기
                </div>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/15 text-white backdrop-blur transition group-hover:scale-110 sm:h-12 sm:w-12">
                <Soomgo size={22} />
              </span>
            </div>
            <div className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-bold">
              숨고 프로필 바로가기
              <ExternalLink size={14} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
