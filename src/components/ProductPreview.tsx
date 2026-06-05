import { Link } from 'react-router-dom'
import { brand, products } from '../data/siteContent'
import { createProductInquiryMessage, createWhatsAppUrl } from '../utils/links'
import { SectionHeader } from './SectionHeader'

export function ProductPreview() {
  return (
    <section className="section product-section">
      <div className="product-heading-row">
        <SectionHeader
          eyebrow="Our shop"
          title="Check our products"
          description="A compact product preview now, ready to grow into the ecommerce section later."
        />
        <Link className="button button-shadow" to="/contact">
          More Products
        </Link>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-image">
              <span>{product.badge}</span>
              <img src={product.image} alt={product.name} loading="lazy" />
            </div>
            <h3>{product.name}</h3>
            <p className="product-price">
              {product.price}
              {product.previousPrice ? <del>{product.previousPrice}</del> : null}
            </p>
            <p className="product-category">{product.category}</p>
            <a
              className="button button-shadow"
              href={createWhatsAppUrl(brand.phone, createProductInquiryMessage(product.name))}
            >
              Inquiry on WhatsApp
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
