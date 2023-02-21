import { Inter } from '@next/font/google'
import Navbar from '@/components/navbar'
import MainSection from '@/components/mainSection'

// const inter = Inter({ subsets: ['latin'] })

// Landing page
export default function Home() {
  return (
    <>
      <Navbar />
      <MainSection />
    </>
  )
}
