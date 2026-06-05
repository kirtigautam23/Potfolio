import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="section not-found-section">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>The page you are looking for is not available.</p>
      <Link className="button button-primary" to="/">
        Back Home
      </Link>
    </section>
  )
}
