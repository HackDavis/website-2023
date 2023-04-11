/* eslint-disable react/no-unknown-property */
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { DM_Mono } from '@next/font/google';
import localFont from '@next/font/local';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from '@/lib/gtag';
import Script from 'next/script';

const dmMono = DM_Mono({
  weight: ['400', '500'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Courier New'],
});

const proximaNova = localFont({
  src: [
    {
      path: '../font/ProximaNova-Light.woff2',
      weight: '300',
    },
    {
      path: '../font/ProximaNova-Regular.woff2',
      weight: '400',
    },
    {
      path: '../font/ProximaNova-Medium.woff2',
      weight: '500',
    },
    {
      path: '../font/ProximaNova-Bold.woff2',
      weight: '700',
    },
  ],
  display: 'swap',
  fallback: ['Arial'],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };

    // When the component is mounted, subscribe to router changes
    // and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
      <style jsx global>{`
        :root {
          --proxima-nova: ${proximaNova.style.fontFamily};
          --dm-mono: ${dmMono.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
