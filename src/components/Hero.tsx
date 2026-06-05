import { Link } from 'react-router-dom'
import { brand, stats } from '../data/siteContent'
import { createWhatsAppUrl } from '../utils/links'

const bookingMessage =
  'Hello Masterpiece Beauty Make-up Studio & Academy, I want to book an appointment.'

export function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-stage">
        <img
          className="hero-backdrop"
          src={brand.namasteProfile}
          alt="Masterpiece beauty professional"
        />
        <div className="hero-panel hero-panel-left"></div>
        <div className="hero-panel hero-panel-center"></div>
        <div className="hero-panel hero-panel-right"></div>

        <div className="hero-copy">
          <p className="eyebrow">Premium beauty experience</p>
          <h1>
            Reveal your <span>signature beauty</span>
          </h1>
          <p className="hero-text">
            Bridal makeup, skin rituals, hair care, nail artistry, and career-focused academy
            training from Masterpiece Beauty Make-up Studio & Academy.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" to="/courses">
              Explore Courses
            </Link>
            <a className="button button-ghost" href={createWhatsAppUrl(brand.phone, bookingMessage)}>
              Book Consultation
            </a>
          </div>
        </div>

        <div className="hero-notes">
          <span>Diagonal split effect</span>
          <span>Glass beauty presentation</span>
          <span>Professional studio and academy</span>
        </div>

        <div className="stat-row hero-stats" aria-label="Masterpiece highlights">
          {stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
