import { Contact } from '../components/Contact'
import { PageIntro } from '../components/PageIntro'

export function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Book, enroll, or visit the studio"
        description="Use WhatsApp, social links, or the location QR to connect with Masterpiece directly."
      />
      <Contact />
    </>
  )
}
