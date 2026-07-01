import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/achievements', label: 'Achievements' },
  { to: '/extracurricular', label: 'Extra Curricular' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav
      id="main-nav"
      className="fixed top-0 left-0 w-full z-50 bg-background border-b-4 border-primary"
      style={{ boxShadow: '4px 4px 0px 0px #1a1a1a' }}
    >
      <div className="flex justify-between items-center w-full px-4 sm:px-6 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-sm sm:text-lg md:text-2xl font-headline font-black text-primary border-2 border-primary px-2 py-1 hover:bg-primary-fixed transition-colors shrink-0 truncate max-w-[200px] sm:max-w-none"
        >
          <span className="hidden sm:inline">Software Developer // 2027</span>
          <span className="sm:hidden">RD // 2027</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-headline text-sm uppercase tracking-tighter font-bold transition-colors duration-75 px-2 py-1 ${pathname === link.to
                ? 'text-primary font-black border-b-4 border-primary-fixed'
                : 'text-on-surface-variant hover:text-primary hover:bg-primary-fixed'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:block bg-primary text-background hover:bg-background hover:text-primary font-headline font-black px-5 py-2 border-2 border-primary neo-shadow active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all uppercase tracking-tighter text-sm"
          >
            CONTACT ME
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden bg-primary text-background p-2 border-2 border-primary"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t-4 border-primary px-6 pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 font-headline font-bold uppercase tracking-tighter text-lg border-b-2 border-outline-variant ${pathname === link.to
                ? 'text-primary bg-primary-fixed px-3'
                : 'text-on-surface-variant hover:text-primary hover:bg-primary-fixed hover:px-3'
                } transition-all`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 bg-primary text-background font-headline font-black px-6 py-3 border-2 border-primary neo-shadow text-center uppercase tracking-tighter"
          >
            CONTACT ME
          </Link>
        </div>
      )}
    </nav>
  )
}
