import { Inter } from '@next/font/google'
// import Navbar from '@/components/navbarDesktop'
import Navbar from '@/components/navbar'
import MainSection from '@/components/mainSection'
import Faq from '@/components/faq'
import Sponsors from '@/components/sponsors'
import Footer from '@/components/footer'
import Sponsors2 from '@/components/sponsors2'

// const inter = Inter({ subsets: ['latin'] })

// Landing page
export default function Home() {
  return (
    <>
      <Navbar />
      <MainSection />
      <Faq />
      <Sponsors2 />
      <Sponsors />
      <Footer />
    </>
  )
}
