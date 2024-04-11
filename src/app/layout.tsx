import type { Metadata, Viewport } from 'next';
import { Open_Sans, Archivo } from 'next/font/google';
import './globals.css';
import SkipToMain from '@/components/layout/SkipToMain';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/footer/Footer';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Next App',
  description: 'create next app',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 10,
  userScalable: true,
  themeColor: '#1c1917',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en' className={`${archivo.variable} ${openSans.variable}`}>
      <body>
        <SkipToMain />
        <Header />
        <main id='mainContent' className='font-sans bg-stone-950'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
