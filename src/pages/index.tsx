import Navbar from '@/components/navbar/navbar';
import MainSection from '@/components/mainSection/mainSection';
import Faq from '@/components/faq';
import Footer from '@/components/footer';
import Sponsors2 from '@/components/sponsors/sponsors2';
import Bus from '@/components/bus/bus';
import Clouds from '@/components/mainSection/clouds';
import Cta from '@/components/cta';
import Seo from '@/components/seo';

// Landing page
export default function Home() {
  return (
    <>
      <Seo />
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
      <div style={{ backgroundColor: 'var(--color-teal-4)' }}>
        <Cta />
        <Footer />
      </div>
    </>
  );
}
