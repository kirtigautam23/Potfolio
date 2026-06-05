import { brand, contactScans } from '../data/siteContent'
import { createWhatsAppUrl } from '../utils/links'
import { SectionHeader } from './SectionHeader'

type ContactProps = {
  compact?: boolean
}

export function Contact({ compact = false }: ContactProps) {
  return (
    <section className={compact ? 'section contact-section contact-section-compact' : 'section contact-section'}>
      <SectionHeader
        eyebrow={compact ? 'Contact' : 'Scan & connect'}
        title={compact ? 'Connect after viewing products' : 'Scan, follow, review, or message'}
        description="Clean QR cards for review, WhatsApp, social links, and directions so clients can connect without searching."
        align="center"
      />

      <div className="contact-scan-grid">
        {contactScans.map((scan) => {
          const href =
            scan.id === 'whatsapp-connect'
              ? createWhatsAppUrl(brand.phone, 'Hello, I want to contact Masterpiece Beauty.')
              : scan.href

          return (
            <article className="scan-card" key={scan.id}>
              <div className="scan-card-image">
                <img src={scan.image} alt={`${scan.eyebrow} QR scan for Masterpiece`} />
              </div>
              <div className="scan-card-copy">
                <span className="contact-tag">{scan.eyebrow}</span>
                <h3>{scan.title}</h3>
                <p>{scan.description}</p>
                {href ? (
                  <a className="scan-link" href={href} target="_blank" rel="noreferrer">
                    {scan.actionLabel ?? 'Open Link'}
                  </a>
                ) : (
                  <span className="scan-only">Scan with phone</span>
                )}
              </div>
            </article>
          )
        })}

        <article className="scan-card scan-card-location">
          <div className="scan-card-image">
            <img src={brand.mapQr} alt="Google Maps QR for Masterpiece location" />
          </div>
          <div className="scan-card-copy">
            <span className="contact-tag">Location</span>
            <h3>Get directions</h3>
            <p>{brand.locationName}</p>
            <a className="scan-link" href={brand.mapUrl} target="_blank" rel="noreferrer">
              Open Map
            </a>
          </div>
        </article>
      </div>

      <div className="contact-direct-strip">
        <div className="contact-card">
          <span className="contact-tag">Quick contact</span>
          <h3>Book or ask on WhatsApp</h3>
          <a href={createWhatsAppUrl(brand.phone, 'Hello, I want to contact Masterpiece Beauty.')}>
            {brand.phone}
          </a>
          <p>Best for products, course admission, service booking, and appointment questions.</p>
        </div>

        <div className="contact-card social-card">
          <span className="contact-tag">Social links</span>
          <h3>Follow Masterpiece</h3>
          <a href={brand.socialLinks.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={brand.socialLinks.tiktok} target="_blank" rel="noreferrer">
            TikTok
          </a>
          <a href={brand.socialLinks.facebook} target="_blank" rel="noreferrer">
            Facebook
          </a>
        </div>
      </div>
    </section>
  )
}
