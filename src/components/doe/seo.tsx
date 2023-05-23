import Head from 'next/head';
import React from 'react';

const Seo = () => {
  const start = new Date('May 20, 2023, 11:00:00 GMT-0700');
  const difference = (start.getTime() - Date.now()) / 1000;

  return (
    <Head>
      <title>HackDavis 2023 | May 2023</title>
      {difference > 0 ? (
        <meta httpEquiv="refresh" content={`${difference}`} />
      ) : null}
      <meta
        name="description"
        content="HackDavis is UC Davis' annual hackathon for students, run by students."
      />
      <meta name="keywords" content="HackDavis, social good, tech, hackathon" />
      <meta name="author" content="HackDavis" />
      <meta
        httpEquiv="Cache-Control"
        content="no-cache, no-store, must-revalidate"
      />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:url" content="https://hackdavis.io" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="HackDavis 2023 | May 2023" />
      <meta
        property="og:description"
        content="HackDavis is UC Davis' annual hackathon for students, run by students."
      />
      <meta property="og:image" content="/preview.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@hack_davis" />
      <meta property="twitter:domain" content="hackdavis.io" />
      <meta property="twitter:url" content="https://hackdavis.io" />
      <meta name="twitter:title" content="HackDavis 2023 | May 2023" />
      <meta
        name="twitter:description"
        content="HackDavis is UC Davis' annual hackathon for students, run by students."
      />
      <meta name="twitter:image" content="/preview.png" />
    </Head>
  );
};

export default Seo;
