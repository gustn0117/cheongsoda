import type { Metadata, Viewport } from 'next';
import './globals.css';

const SITE_URL = 'https://cheongsoda.com';
const TITLE = '청소다 | 종합청소업체 1위 · 입주·이사·거주·상가청소';
const DESCRIPTION =
  '입주·이사·거주·상가청소 전문. 하청·알바 없는 전국 직영팀 50팀+ 운영, 피톤치드·스팀살균 전 고객 무료. 지금 카카오톡으로 무료 견적 받아보세요.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    '청소다',
    '종합청소업체',
    '입주청소',
    '이사청소',
    '거주청소',
    '상가청소',
    '리모델링후청소',
    '특수청소',
    '에어컨청소',
    '욕실청소',
    '주방청소',
    '곰팡이제거',
    '피톤치드',
    '스팀살균',
    '줄눈시공',
    '탄성코팅',
    '폐기물처리',
    '맞춤형 공간정리',
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    locale: 'ko_KR',
    url: SITE_URL,
    siteName: '청소다',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '청소다 - 종합청소업체 1위',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/logo/logo-mono-dark.png',
    apple: '/logo/logo-mono-dark.png',
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
