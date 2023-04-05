/* eslint-disable react/no-unknown-property */
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { DM_Mono } from '@next/font/google';
import localFont from '@next/font/local';

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
  return (
    <>
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
