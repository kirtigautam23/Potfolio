import { Hero } from '../components/Hero'
import { FounderInfoSection } from '../components/FounderInfoSection'
import { HomeContactSection } from '../components/HomeContactSection'

export function HomePage() {
  return (
    <>
      <Hero />

      <FounderInfoSection />
      <HomeContactSection />
    </>
  )
}
