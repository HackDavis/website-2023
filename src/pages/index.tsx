import Navbar from '@/components/navbar/navbar';
import MainSection from '@/components/mainSection/mainSection';
import Faq from '@/components/faq';
import Footer from '@/components/footer';
import Sponsors2 from '@/components/sponsors/sponsors2';
import Bus from '@/components/bus/bus';
import Clouds from '@/components/mainSection/clouds';

// Landing page
export default function Home() {
  return (
    <>
      <Navbar />
      <div
        style={{
          position: 'relative',
          backgroundColor: '#023142',
          overflowX: 'hidden',
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
