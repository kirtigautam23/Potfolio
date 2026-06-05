import { PageIntro } from '../components/PageIntro'
import { ServiceBook } from '../components/ServiceBook'

export function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Beauty services by real professionals"
        description="Explore skin, hair, makeup, nails, waxing, and salon care in a refined service-book experience."
      />
      <ServiceBook />
    </>
  )
}
