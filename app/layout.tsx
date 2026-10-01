import type { Metadata } from 'next';
import { Newsreader, Instrument_Sans } from 'next/font/google';
import './globals.css';

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-instrument-sans',
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
    <html lang="en" className={`${newsreader.variable} ${instrumentSans.variable}`}>
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
