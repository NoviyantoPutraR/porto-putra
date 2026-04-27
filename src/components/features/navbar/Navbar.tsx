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
 * Navbar — premium system with Ripple Expansion effect.
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Track scroll for frosted glass effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '1.25rem 2rem',
          transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
          backgroundColor: isMenuOpen ? 'transparent' : (isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent'),
          backdropFilter: isMenuOpen ? 'none' : (isScrolled ? 'blur(10px)' : 'none'),
          WebkitBackdropFilter: isMenuOpen ? 'none' : (isScrolled ? 'blur(10px)' : 'none'),
          borderBottom: isMenuOpen ? 'none' : (isScrolled ? '1px solid rgba(0, 0, 0, 0.05)' : '1px solid transparent'),
        }}
      >
        <div className="navbar-content">
          {/* Logo */}
          <a
            href="#home"
            style={{
              fontWeight: 800,
              fontSize: '1.25rem',
              color: isMenuOpen ? '#ffffff' : '#0a0a0a',
              textDecoration: 'none',
              letterSpacing: '-0.03em',
              zIndex: 110,
              transition: 'color 0.4s ease',
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            PutraRamadhan.
          </a>

          {/* Trigger Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: isMenuOpen ? '#ffffff' : '#0a0a0a',
              padding: '0.5rem',
              zIndex: 110,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'color 0.4s ease, transform 0.3s ease',
            }}
            className="hover:scale-110 active:scale-95"
          >
            {isMenuOpen ? <X size={32} strokeWidth={1.5} /> : <Menu size={32} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Ripple Animation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 25, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: [1, 0, 0, 1], // Custom slow to fast easing
            }}
            style={{
              position: 'fixed',
              top: '40px', // Matches trigger position roughly
              right: '40px',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              backgroundColor: '#0a0a0a', // Premium dark ripple
              zIndex: 90,
              transformOrigin: 'center center',
              pointerEvents: 'none',
            }}
          />
        )}
      </AnimatePresence>

      {/* Full-screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 95,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'transparent',
              paddingTop: '60px', // Dikurangi sedikit agar lebih luas
            }}
          >
            <nav style={{ maxHeight: '80vh', display: 'flex', alignItems: 'center' }}>
              <ul
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem', // Lebih rapat
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  textAlign: 'center',
                }}
              >
                {NAV_LINKS.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                      delay: 0.5 + index * 0.08,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="nav-link-item"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar-content {
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-link-item {
          font-family: 'Playfair Display', serif;
          font-weight: 400;
          font-size: clamp(1.5rem, 5vw, 2.75rem); /* Diperkecil lagi dari 3.5rem */
          color: #ffffff;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.2rem 1rem;
          display: block;
        }

        .nav-link-item:hover {
          color: #9ca3af;
          transform: translateY(-5px);
        }

        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background-color: #ffffff;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          transform: translateX(-50%);
        }

        .nav-link-item:hover::after {
          width: 60%;
        }

        @media (max-width: 768px) {
          header {
            padding: 1rem 1.5rem !important;
          }
        }
      `}</style>
    </>
  )
}

export default Navbar
