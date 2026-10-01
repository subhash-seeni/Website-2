import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'BOGO — Building India\'s Next Retail Ecosystem (Investor Overview)',
  description: 'Where brands, technology and experiences come together. A comprehensive ecosystem overview for partners and institutional investors.',
  openGraph: {
    title: 'BOGO — Building India\'s Next Retail Ecosystem',
    description: 'Where brands, technology and experiences come together.',
    images: ['/Images/Outlet images/Square.png'],
  },
  icons: {
    icon: '/Images/Logos/Bogo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
