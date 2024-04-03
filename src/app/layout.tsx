import type { Metadata, Viewport } from 'next';
import { Open_Sans, Roboto } from 'next/font/google';
import './globals.css';
import SkipToMain from '@/components/layout/SkipToMain';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/footer/Footer';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Next App',
  description: 'create next app',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#1c1917',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en' className={`${roboto.variable} ${openSans.variable}`}>
      <body>
        <SkipToMain />
        <Header />
        <main id='mainContent' className='font-sans bg-stone'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
