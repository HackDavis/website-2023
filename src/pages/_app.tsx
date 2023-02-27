/* eslint-disable react/no-unknown-property */
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { DM_Sans, DM_Mono } from '@next/font/google';
import localFont from '@next/font/local';

const dmSans = DM_Sans({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});
const dmMono = DM_Mono({
  weight: ['400', '500'],
  style: ['normal'],
  subsets: ['latin'],
});
const proximaNova = localFont({
  src: [
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
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --inter: ${inter.style.fontFamily};
          --proxima-nova: ${proximaNova.style.fontFamily};
          --dm-sans: ${dmSans.style.fontFamily};
          --dm-mono: ${dmMono.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
