import { brand } from '../data/siteContent'

type PageIntroProps = {
  eyebrow: string
  title: string
  description: string
}

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="page-intro">
      <img src={brand.namasteProfile} alt="" aria-hidden="true" />
      <div className="hero-panel hero-panel-left"></div>
      <div className="hero-panel hero-panel-center"></div>
      <div className="hero-panel hero-panel-right"></div>
      <div className="page-intro-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  )
}
