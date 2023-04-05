import Navbar from '@/components/navbar';
import MainSection from '@/components/mainSection';
import Faq from '@/components/faq';
import Footer from '@/components/footer';
import Sponsors2 from '@/components/sponsors/sponsors2';

// Landing page
export default function Home() {
  return (
    <>
      <Navbar />
      <MainSection />
      <Faq />
      <Sponsors2 />
      <Footer />
    </>
  );
}
