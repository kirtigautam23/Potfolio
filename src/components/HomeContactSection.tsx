import { Link } from 'react-router-dom'
import { brand } from '../data/siteContent'
import { createWhatsAppUrl } from '../utils/links'
import { SectionHeader } from './SectionHeader'

export function HomeContactSection() {
  return (
    <section className="section home-contact-section" id="home-contact">
      <div className="home-contact-panel">
        <SectionHeader
          eyebrow="Start here"
          title="Book a service or begin your academy journey"
          description="Use the course form for admission details, WhatsApp for quick consultation, or visit the studio through the map location."
          align="center"
        />

        <div className="home-contact-grid">
          <Link className="home-contact-card" to="/profile">
            <span>Profile</span>
            <strong>Meet Kirti Gautam</strong>
            <p>See the founder profile, mentor story, and lady boss personal branding.</p>
          </Link>

          <Link className="home-contact-card" to="/courses#enroll">
            <span>Application</span>
            <strong>Fill the course form</strong>
            <p>Submit personal, guardian, academic, schedule, and payment details.</p>
          </Link>

          <a
            className="home-contact-card"
            href={createWhatsAppUrl(
              brand.phone,
              'Hello Masterpiece, I want to book a consultation for services or courses.',
            )}
          >
            <span>WhatsApp</span>
            <strong>{brand.phone}</strong>
            <p>Ask directly about available batches, services, and booking times.</p>
          </a>
        </div>
      </div>
    </section>
  )
}
