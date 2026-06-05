import { Link, useLocation } from 'react-router-dom'

const routeLabels: Record<string, string> = {
  profile: 'Profile',
  services: 'Services',
  courses: 'Courses',
  products: 'Products',
  contact: 'Contact',
}

export function Breadcrumbs() {
  const location = useLocation()
  const segments = location.pathname.split('/').filter(Boolean)

  if (segments.length === 0) {
    return null
  }

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      {segments.map((segment, index) => {
        const path = `/${segments.slice(0, index + 1).join('/')}`
        const label = routeLabels[segment] ?? segment
        const isLast = index === segments.length - 1

        return isLast ? (
          <span key={path} aria-current="page">
            {label}
          </span>
        ) : (
          <Link key={path} to={path}>
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
