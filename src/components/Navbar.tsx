import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { brand, navItems } from '../data/siteContent'
import { createWhatsAppUrl } from '../utils/links'

const bookingMessage =
  'Hello Masterpiece Beauty Make-up Studio & Academy, I want to book an appointment.'

type NavbarProps = {
  siteTheme: 'light' | 'dark'
  onThemeChange: (theme: 'light' | 'dark') => void
}

export function Navbar({ siteTheme, onThemeChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const nextTheme = siteTheme === 'light' ? 'dark' : 'light'

  return (
    <header className="site-header">
      <NavLink className="brand-link" to="/" aria-label="Masterpiece home">
        <img src={brand.logo} alt={brand.name} />
        <span>{brand.shortName}</span>
      </NavLink>

      <button
        className="menu-button"
        type="button"
        aria-expanded={isOpen}
        aria-controls="site-navigation"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span className="sr-only">Toggle menu</span>
      </button>

      <nav id="site-navigation" className={isOpen ? 'nav-list is-open' : 'nav-list'}>
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            end={item.href === '/'}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      <button
        className="site-theme-toggle"
        type="button"
        onClick={() => onThemeChange(nextTheme)}
        aria-label={`Switch to ${nextTheme === 'light' ? 'white' : 'black'} background`}
        aria-pressed={siteTheme === 'dark'}
      >
        <span aria-hidden="true">{siteTheme === 'light' ? '◐' : '☀'}</span>
      </button>

      <a className="nav-cta" href={createWhatsAppUrl(brand.phone, bookingMessage)}>
        Book Now
      </a>
    </header>
  )
}
