import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/',             label: 'Home', end: true },
  { to: '/about',        label: 'About Us' },
  { to: '/what-we-do',   label: 'What We Do' },
  { to: '/events',       label: 'Events' },
  { to: '/contact',      label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Lock page scroll while mobile menu is open; Escape closes it
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    const onKey = e => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', onKey) }
  }, [menuOpen])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className={'site-nav' + (scrolled || menuOpen ? ' scrolled' : '')}>
      <a href="#main" className="skip-link">Skip to content</a>
      <nav aria-label="Main" className="container nav-bar-inner">
        <Link to="/" className="nav-logo" aria-label="The Vanguard Initiative — home">
          <img src="/tvilogs-192.jpg" alt="" width="46" height="46" />
          <span><b>The Vanguard</b><b className="gold">Initiative</b></span>
        </Link>

        <div className="desk-nav">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/donate" className="btn btn-gold nav-donate-btn">Donate</Link>
        </div>

        <button type="button" onClick={() => setMenuOpen(o => !o)} className="mob-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="mobile-menu">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            {menuOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="mob-menu" id="mobile-menu">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => 'mob-link' + (isActive ? ' active' : '')}>{l.label}</NavLink>
          ))}
          <Link to="/donate" className="btn btn-gold">Donate</Link>
        </div>
      )}
    </header>
  )
}
