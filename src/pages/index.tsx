import Navbar from '@/components/navbar/navbar';
import MainSection from '@/components/mainSection/mainSection';
import Faq from '@/components/faq/faq';
import Footer from '@/components/footer';
import Sponsors from '@/components/sponsors/sponsors';
import Truck from '@/components/truck/truck';
import Cta from '@/components/cta';
import Seo from '@/components/seo';

// Landing page
export default function Home() {
  return (
    <>
      <Seo />
      <Navbar />
      <main>
        <div
          style={{
            position: 'relative',
            backgroundColor: '#023142',
            // paddingTop: 50,
            zIndex: 1,
            contain: 'paint',
          }}
        >
          <MainSection />
          <Truck />
        </div>
        <div
          style={{
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Faq />
          <Sponsors />
        </div>
      </main>
      <div style={{ backgroundColor: 'var(--color-cow)' }}>
        <Cta />
        <Footer />
      </div>
    </>
  );
}
