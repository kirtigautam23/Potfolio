import './App.css'
import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Breadcrumbs } from './components/Breadcrumbs'
import { Footer } from './components/Footer'
import { HashScroll } from './components/HashScroll'
import { Navbar } from './components/Navbar'
import { ContactPage } from './pages/ContactPage'
import { CoursesPage } from './pages/CoursesPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProfilePage } from './pages/ProfilePage'
import { ProductsPage } from './pages/ProductsPage'
import { ServicesPage } from './pages/ServicesPage'

function App() {
  const location = useLocation()
  const [siteTheme, setSiteTheme] = useState<'light' | 'dark'>('light')

  return (
    <div className={`site-shell theme-${siteTheme}`}>
      <Navbar siteTheme={siteTheme} onThemeChange={setSiteTheme} />
      <HashScroll />
      <main className={location.pathname === '/' ? 'home-main' : 'page-main'} key={location.pathname}>
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
