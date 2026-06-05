import { useState } from 'react'
import { servicePages } from '../data/siteContent'
import { SectionHeader } from './SectionHeader'

export function ServiceBook() {
  const [pageIndex, setPageIndex] = useState(0)
  const [turnDirection, setTurnDirection] = useState<'next' | 'previous'>('next')
  const [isTurning, setIsTurning] = useState(false)
  const leftPage = servicePages[pageIndex]
  const rightPage = servicePages[(pageIndex + 1) % servicePages.length]

  const goPrevious = () => {
    setTurnDirection('previous')
    setIsTurning(true)
    setPageIndex((current) => (current - 1 + servicePages.length) % servicePages.length)
    window.setTimeout(() => setIsTurning(false), 620)
  }

  const goNext = () => {
    setTurnDirection('next')
    setIsTurning(true)
    setPageIndex((current) => (current + 1) % servicePages.length)
    window.setTimeout(() => setIsTurning(false), 620)
  }

  return (
    <section className="section service-section">
      <SectionHeader
        eyebrow="Services"
        title="Turn the service book"
        description="A refined service menu inspired by the studio list, cleaned into readable categories for clients."
        align="center"
      />

      <div className="book-toolbar">
        <div className="book-controls" aria-label="Service book controls">
          <button type="button" onClick={goPrevious} aria-label="Previous service page">
            Prev
          </button>
          <span>
            Page {pageIndex + 1} of {servicePages.length}
          </span>
          <button type="button" onClick={goNext} aria-label="Next service page">
            Next
          </button>
        </div>

      </div>

      <div
        className={`service-book service-book-${turnDirection}${isTurning ? ' is-turning' : ''}`}
        aria-live="polite"
      >
        {[leftPage, rightPage].map((page, index) => (
          <article className="book-page" key={`${page.title}-${index}`}>
            <p>{page.eyebrow}</p>
            <h3>{page.title}</h3>
            <div className="service-list">
              {page.services.map((service) => (
                <div className="service-line" key={service.name}>
                  <div>
                    <strong>{service.name}</strong>
                    <span>{service.detail}</span>
                  </div>
                  <em>{service.price}</em>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
