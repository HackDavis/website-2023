import { Inter } from '@next/font/google'
import Navbar from '@/components/navbar'
import MainSection from '@/components/mainSection'
import styles from '@/styles/landingPage.module.scss'

// const inter = Inter({ subsets: ['latin'] })

// Landing page
export default function Home() {
  return (
    <>
    <div>
      <Navbar />
      <MainSection />
    </div>
    </>
  );
}
