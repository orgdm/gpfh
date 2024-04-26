import type { Metadata, Viewport } from 'next';
import { Archivo } from 'next/font/google';
import './globals.css';
import SkipToMain from '@/components/layout/SkipToMain';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/footer/Footer';

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Next App',
  description: 'create next app',
  appleWebApp: {
    statusBarStyle: 'black',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
  themeColor: '#1c1917',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en' className={`${archivo.variable}`}>
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
