import type { Metadata } from 'next';
import { Open_Sans, Domine } from 'next/font/google';
import './globals.css';
import SkipToMain from '@/components/layout/SkipToMain';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

const lora = Domine({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Grove Park Fine Homes',
  description:
    'Grove Park Fine Homes builds luxury homes in the Asheville, North Carolina area.',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang='en'
      className={`overflow-auto scroll-smooth  ${openSans.variable} ${lora.variable}`}
    >
      <body className={'overscroll-none  font-medium'}>
        <SkipToMain />
        <Header />
        <main
          id='mainContent'
          className={`bg-stone-950 min-h-fullscr font-sans`}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
