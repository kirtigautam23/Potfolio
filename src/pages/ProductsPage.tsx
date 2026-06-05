import { PageIntro } from '../components/PageIntro'
import { ProfileSection } from '../components/ProfileSection'
import { ProductPreview } from '../components/ProductPreview'
import { Contact } from '../components/Contact'

export function ProductsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Products"
        title="Salon care products, ready for inquiry"
        description="A future-ready product preview for hair and skincare items, with WhatsApp inquiry for now."
      />
      <ProductPreview />
      <ProfileSection />
      <Contact compact />
    </>
  )
}
