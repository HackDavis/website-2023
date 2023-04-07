import Navbar from '@/components/navbar/navbar';
import MainSection from '@/components/mainSection/mainSection';
import Faq from '@/components/faq';
import Footer from '@/components/footer';
import Sponsors2 from '@/components/sponsors/sponsors2';
import Bus from '@/components/bus/bus';

// Landing page
export default function Home() {
  return (
    <>
      <Navbar />
      <MainSection />
      <Bus />
      <Faq />
      <Sponsors2 />
      <Footer />
    </>
  );
}
