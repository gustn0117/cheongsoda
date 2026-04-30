import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '청소다 어드민',
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-mist">{children}</div>;
}
