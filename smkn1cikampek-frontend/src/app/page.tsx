import HeroSection from '@/components/home/HeroSection'
import TickerBar from '@/components/home/TickerBar'
import StatsSection from '@/components/home/StatsSection'
import BeritaTerbaru from '@/components/home/BeritaTerbaru'
import JurusanSection from '@/components/home/JurusanSection'
import PrestasiSection from '@/components/home/PrestasiSection'
import OrganisasiSection from '@/components/home/OrganisasiSection'
import GuruCarousel from '@/components/home/GuruCarousel'
import SambutanSection from '@/components/home/SambutanSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TickerBar />
      <StatsSection />
      <BeritaTerbaru />
      <JurusanSection />
      <SambutanSection />
      <PrestasiSection />
      <OrganisasiSection />
      <GuruCarousel />
    </>
  )
}