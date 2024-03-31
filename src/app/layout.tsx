import type { Metadata, Viewport } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import SkipToMain from '@/components/layout/SkipToMain';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: 'Grove Park Fine Homes',
  description:
    'Grove Park Fine Homes builds luxury homes in the Asheville, North Carolina area.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0c0a09',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang='en'
      className={`overscroll-none overflow-auto scroll-smooth  ${openSans.variable}`}
    >
      <body className={' overscroll-none font-medium'}>
        <SkipToMain />
        <Header />
        <main id='mainContent' className={`min-h-scr font-sans bg-stone-950`}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
