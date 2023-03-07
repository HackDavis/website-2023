import { Inter } from '@next/font/google'
import Navbar from '@/components/navbar'
import MainSection from '@/components/mainSection'
import Faq from '@/components/faq'

// const inter = Inter({ subsets: ['latin'] })

// Landing page
export default function Home() {
  return (
    <>
      <Navbar />
      <MainSection />
      <Faq />
    </>
  )
}
