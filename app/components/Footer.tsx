import { COMPANY } from '@/app/lib/data';
import Logo from './Logo';
import { Instagram, KakaoBubble, NaverBlog, Phone, Soomgo, YouTube } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-navy-950 pb-32 text-white/80 sm:pb-16">
      <div className="container-px mx-auto max-w-7xl py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="white" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65 break-keep">
              청소다는 입주·이사·거주·상가청소를 전문으로 하는 종합청소업체 본사입니다.
              하청·알바 없이 직영팀 50팀 이상이 운영되며, 피톤치드·스팀살균을 모든 고객께 무료
              제공합니다.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={COMPANY.kakao}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#FEE500] px-4 py-2 text-sm font-bold text-[#3C1E1E] transition hover:-translate-y-0.5"
              >
                <KakaoBubble size={14} />
                카톡 상담
              </a>
              <a
                href={`tel:${COMPANY.phoneTel}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 number-tabular"
              >
                <Phone size={14} />
                {COMPANY.phone}
              </a>
              <a
                href={COMPANY.blog}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#03C75A] px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5"
              >
                <NaverBlog size={14} />
                블로그
              </a>
              <a
                href={COMPANY.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="인스타그램"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-[#FA7E1E] via-[#D62976] to-[#962FBF] px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5"
              >
                <Instagram size={14} />
                인스타
              </a>
              <a
                href={COMPANY.soomgo}
                target="_blank"
                rel="noreferrer"
                aria-label="숨고"
                className="inline-flex items-center gap-2 rounded-full bg-[#1F4FF1] px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5"
              >
                <Soomgo size={14} />
                숨고
              </a>
              <a
                href={COMPANY.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="유튜브"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF0000] px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5"
              >
                <YouTube size={14} />
                유튜브
              </a>
            </div>
          </div>

          <FooterCol
            title="청소 서비스"
            items={[
              '입주/이사청소',
              '거주청소',
              '리모델링후청소',
              '상가/사무실청소',
              '특수청소',
              '폐기물 처리',
              '가전청소',
              '맞춤형 공간정리',
              '줄눈시공/탄성코팅',
            ]}
          />
          <FooterCol
            title="고객 지원"
            items={['견적 신청', '진행 절차', '청소다 약속', '자주 묻는 질문', '리뷰 페이백']}
          />
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-white/60">
              CONTACT
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <span className="block text-xs text-white/50">본사 대표번호</span>
                <span className="number-tabular">{COMPANY.phone}</span>
              </li>
              <li>
                <span className="block text-xs text-white/50">서비스 지역</span>
                {COMPANY.serviceArea}
              </li>
              <li>
                <span className="block text-xs text-white/50">상담 시간</span>
                {COMPANY.hours}
              </li>
              <li>
                <span className="block text-xs text-white/50">보험</span>
                {COMPANY.insurance}
              </li>
              <li>
                <span className="block text-xs text-white/50">네이버 블로그</span>
                <a
                  href={COMPANY.blog}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-white/90 transition hover:text-[#03C75A]"
                >
                  <NaverBlog size={14} />
                  네이버블로그
                </a>
              </li>
              <li>
                <span className="block text-xs text-white/50">인스타그램</span>
                <a
                  href={COMPANY.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-white/90 transition hover:text-rose-300"
                >
                  <Instagram size={14} />
                  {COMPANY.instagramHandle}
                </a>
              </li>
              <li>
                <span className="block text-xs text-white/50">숨고</span>
                <a
                  href={COMPANY.soomgo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-white/90 transition hover:text-blue-300"
                >
                  <Soomgo size={14} />
                  숨고 프로필
                </a>
              </li>
              <li>
                <span className="block text-xs text-white/50">유튜브</span>
                <a
                  href={COMPANY.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-white/90 transition hover:text-red-300"
                >
                  <YouTube size={14} />
                  {COMPANY.youtubeHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 청소다 (CHEONG SO DA). All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">
              개인정보처리방침
            </a>
            <a href="#" className="hover:text-white">
              이용약관
            </a>
            <a href="#" className="hover:text-white">
              사업자정보
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-white/60">{title}</h4>
      <ul className="mt-5 space-y-2.5 text-sm">
        {items.map((it) => (
          <li key={it}>
            <a href="#" className="text-white/75 transition hover:text-white">
              {it}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
