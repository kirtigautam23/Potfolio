import { Link } from 'react-router-dom'
import { brand } from '../data/siteContent'
import { createWhatsAppUrl } from '../utils/links'
import { SectionHeader } from './SectionHeader'

const kirtiFacts = [
  {
    label: 'Founder',
    value: 'Ms. Kirti Gautam',
    detail: 'The mentor and personal brand behind Masterpiece Beauty Make-up Studio & Academy.',
  },
  {
    label: 'Academy focus',
    value: 'Practical beauty education',
    detail: 'Small-batch guidance for makeup, skin, hair, nail, waxing, and beautician courses.',
  },
  {
    label: 'Studio promise',
    value: 'Polished care with patience',
    detail: 'A warm, professional space where students and clients feel guided, not rushed.',
  },
]

export function FounderInfoSection() {
  return (
    <section className="section founder-info-section" id="studio-info">
      <div className="founder-info-grid">
        <div className="founder-info-copy">
          <SectionHeader
            eyebrow="About the studio"
            title="Built around Kirti Gautam's beauty mentorship"
            description="Masterpiece is more than a service studio. It is a training-focused beauty space where Kirti Gautam guides clients and students with practical technique, clean presentation, and professional confidence."
          />

          <div className="founder-info-actions">
            <Link className="button button-primary" to="/courses">
              View Courses
            </Link>
            <a
              className="button button-ghost"
              href={createWhatsAppUrl(
                brand.phone,
                'Hello Masterpiece, I want to know more about Kirti Gautam and academy admission.',
              )}
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>

        <div className="founder-fact-grid">
          {kirtiFacts.map((fact) => (
            <article className="founder-fact-card" key={fact.label}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
              <p>{fact.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
