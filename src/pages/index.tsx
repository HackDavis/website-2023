import Navbar from '@/components/navbar/navbar';
import MainSection from '@/components/mainSection/mainSection';
import Faq from '@/components/faq/faq';
import Footer from '@/components/footer';
import Sponsors from '@/components/sponsors/sponsors';
import Truck from '@/components/truck/truck';
import Cta from '@/components/cta';
import Seo from '@/components/seo';
import { useEffect } from 'react';
import NonProfits from '@/components/sponsors/nonprofits';

// Landing page
export default function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = 'var(--color-cow)';

    window.addEventListener('scroll', () => {
      const documentHeight = document.body.scrollHeight;
      const currentScroll = window.scrollY + window.innerHeight;
      // When the user is [modifier]px from the bottom, fire the event.
      const modifier = 200;

      document.body.style.backgroundColor =
        currentScroll + modifier > documentHeight
          ? 'var(--color-cow)'
          : 'var(--color-teal-5)';
    });
  }, []);

  return (
    <>
      <Seo />
      <Navbar />
      <main>
        <div
          style={{
            position: 'relative',
            backgroundColor: 'var(--color-teal-5)',
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
            backgroundColor: 'var(--color-teal-4)',
            zIndex: 1,
          }}
        >
          <Faq />
          <Sponsors />
          <NonProfits />
        </div>
      </main>
      <div style={{ backgroundColor: 'var(--color-cow)' }}>
        <Cta />
        <Footer />
      </div>
    </>
  );
}
