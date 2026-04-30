import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '청소다 | 종합청소업체 No.1 · 입주·이사·거주·상가청소',
  description:
    '입주청소부터 이사·거주·상가청소까지, 청소다는 종합청소업체 1위로 피톤치드·스팀살균을 전 고객 무료 제공합니다. 지금 카카오톡으로 무료 견적 받아보세요.',
  keywords: [
    '청소다',
    '종합청소업체',
    '입주청소',
    '이사청소',
    '거주청소',
    '상가청소',
    '에어컨청소',
    '욕실청소',
    '주방청소',
    '곰팡이제거',
    '피톤치드',
    '스팀살균',
  ],
  openGraph: {
    title: '청소다 | 종합청소업체 1위',
    description:
      '입주·이사·거주·상가청소 전문. 피톤치드·스팀살균 무료 제공. 5만+ 고객의 선택.',
    type: 'website',
    locale: 'ko_KR',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#1B3FAA',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
