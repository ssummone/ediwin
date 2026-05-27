import type { Metadata } from 'next';
import Script from 'next/script';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.edinburghwindowsanddoors.co.uk'),
  title: {
    default: 'Edinburgh Windows and Doors | Scottish Timber Sash & Case Windows',
    template: '%s | Edinburgh Windows and Doors',
  },
  description: 'Scottish timber sash and case window manufacturer. Bespoke windows and Accoya doors made in Edinburgh, delivered UK-wide. Book a free survey today.',
  openGraph: {
    siteName: 'Edinburgh Windows and Doors',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-32C4KP77F6"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-32C4KP77F6');
          function trackEvent(e,p){if(typeof gtag!=='undefined')gtag('event',e,p||{});}
        `}</Script>

        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
