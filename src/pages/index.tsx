import Navbar from '@/components/navbar/navbar';
import MainSection from '@/components/mainSection/mainSection';
import Faq from '@/components/faq';
import Footer from '@/components/footer';
import Sponsors2 from '@/components/sponsors/sponsors2';
import Bus from '@/components/bus/bus';
import Clouds from '@/components/mainSection/clouds';
import Head from 'next/head';

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
          contain: 'paint',
          paddingTop: 50,
        }}
      >
        <Clouds />
        <MainSection />
        <Bus />
      </div>
      <Faq />
      <Sponsors2 />
      <Footer />
    </>
  );
}
