import { Link } from 'react-router-dom'
import { brand, profileHighlights } from '../data/siteContent'
import { createWhatsAppUrl } from '../utils/links'
import { SectionHeader } from './SectionHeader'

export function ProfileSection() {
  return (
    <section className="section profile-section">
      <div className="profile-card">
        <div className="profile-photo">
          <img src={brand.ladyBossProfile} alt="Ms. Kirti Gautam, founder of Masterpiece" />
        </div>

        <div className="profile-copy">
          <SectionHeader
            eyebrow="Lady boss profile"
            title="Kirti Gautam leads Masterpiece with calm authority"
            description="Founder, trainer, and beauty mentor with a polished presence, practical leadership, and a studio culture built around confidence, discipline, and care."
          />

          <div className="profile-signature">
            <span>Founder, trainer and beauty professional</span>
            <strong>{brand.shortName} Beauty Make-up Studio & Academy</strong>
          </div>

          <ul className="profile-list">
            {profileHighlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <div className="profile-actions">
            <a
              className="button button-primary"
              href={createWhatsAppUrl(
                brand.phone,
                'Hello Masterpiece, I want to talk with the academy team about courses and services.',
              )}
            >
              Talk to the Studio
            </a>
            <Link className="button button-ghost" to="/courses#enroll">
              Fill Course Form
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
