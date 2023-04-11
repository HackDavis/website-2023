import Navbar from '@/components/navbar/navbar';
import MainSection from '@/components/mainSection/mainSection';
import Faq from '@/components/faq';
import Footer from '@/components/footer';
import Sponsors2 from '@/components/sponsors/sponsors2';
import Bus from '@/components/bus/bus';
import Clouds from '@/components/mainSection/clouds';
import Head from 'next/head';
import Cta from '@/components/cta';

// Landing page
export default function Home() {
  return (
    <>
      <Head>
        <title>HackDavis 2023 | May 2023</title>
        <meta
          name="description"
          content="HackDavis is UC Davis' annual hackathon for students, run by students."
        ></meta>
        <meta
          name="keywords"
          content="HackDavis, social good, tech, hackathon"
        ></meta>
        <meta name="author" content="HackDavis"></meta>
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        ></meta>
      </Head>
      <Navbar />
      <div
        style={{
          position: 'relative',
          backgroundColor: '#023142',
          paddingTop: 50,
          zIndex: 1,
        }}
      >
        <Clouds />
        <MainSection />
        <Bus />
      </div>
      <div
        style={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Faq />
        <Sponsors2 />
      </div>
      <div style={{ backgroundColor: 'var(--color-teal-5)' }}>
        <Cta />
        <Footer />
      </div>
    </>
  );
}
