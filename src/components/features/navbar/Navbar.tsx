import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'My Projects', href: '#projects' },
  { label: 'About Me', href: '#about' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Contact', href: '#contact' },
]

/**
 * Navbar — responsive with mobile full-screen overlay.
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Track scroll for frosted glass effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: '0.875rem 2rem',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled
            ? '1px solid rgba(0, 0, 0, 0.06)'
            : '1px solid transparent',
        }}
        className="navbar-header"
      >
        <div className="navbar-container">
          {/* Left — Logo */}
          <a
            href="#home"
            style={{
              fontWeight: 700,
              fontSize: '1.1rem',
              color: '#0a0a0a',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            PutraRamadhan.
          </a>

          {/* Center — Desktop Navigation */}
          <nav className="desktop-nav">
            <ul
              style={{
                display: 'flex',
                gap: '2rem',
                listStyle: 'none',
                margin: 0,
                padding: 0,
              }}
            >
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      fontWeight: 500,
                      fontSize: '0.875rem',
                      color: '#0a0a0a',
                      textDecoration: 'none',
                      letterSpacing: '0.01em',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#6b7280'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#0a0a0a'
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right — Desktop CTA */}
          <div className="desktop-cta">
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.5rem 1.125rem',
                borderRadius: '9999px',
                backgroundColor: '#0a0a0a',
                color: '#ffffff',
                fontWeight: 500,
                fontSize: '0.8125rem',
                textDecoration: 'none',
                transition: 'background-color 0.2s ease, transform 0.2s ease',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1a1a1a'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0a0a0a'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile — Hamburger Button */}
          <button
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: '#0a0a0a',
              display: 'none', // Hidden by default (desktop)
              padding: '0.5rem',
              zIndex: 60, // Ensure it stays above the overlay
              position: isMobileMenuOpen ? 'relative' : 'static',
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: '#ffffff',
              zIndex: 40,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2rem',
            }}
          >
            <nav>
              <ul
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem',
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  textAlign: 'center',
                }}
              >
                {NAV_LINKS.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{
                        fontWeight: 600,
                        fontSize: '2rem',
                        color: '#0a0a0a',
                        textDecoration: 'none',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{ marginTop: '4rem' }}
            >
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  display: 'inline-block',
                  padding: '1rem 2.5rem',
                  borderRadius: '9999px',
                  backgroundColor: '#0a0a0a',
                  color: '#ffffff',
                  fontWeight: 500,
                  fontSize: '1rem',
                  textDecoration: 'none',
                }}
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar-container {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
        }
        
        .desktop-nav {
          justify-self: center;
        }

        .desktop-cta {
          justify-self: end;
        }

        @media (max-width: 768px) {
          .navbar-header {
            padding: 1rem 1.5rem !important;
          }
          .navbar-container {
            display: flex;
            justify-content: space-between;
          }
          .desktop-nav, .desktop-cta {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </>
  )
}

export default Navbar
