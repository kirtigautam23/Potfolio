import { NavLink } from 'react-router-dom'
import { brand, navItems } from '../data/siteContent'

export function Footer() {
  return (
    <footer className="site-footer">
      <img src={brand.logo} alt={brand.name} loading="lazy" decoding="async" />
      <nav aria-label="Footer navigation">
        {navItems.map((item) => (
          <NavLink key={item.href} to={item.href}>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <p>
        {brand.shortName} Beauty Make-up Studio & Academy. {brand.tagline}.
      </p>
    </footer>
  )
}
