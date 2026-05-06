import { memo } from 'react'
import { motion, type Variants } from 'framer-motion'
import PhotoCard from '@/components/features/hero/PhotoCard'
import { GetStartedButton } from '@/components/ui/get-started-button'
import { Typewriter } from '@/components/ui/typewriter'

// [rendering-hoist-jsx] — static content and animation variants hoisted outside component
const HERO_CONTENT = {
  badge: 'Available for New Projects',
  headline1: 'Hi! I am',
  headline2: 'Putra',
  descBold: 'Engineering High-Performance Web Apps with AI-Driven Features.',
  descMuted:
    'Experienced in building clean, responsive full-stack architectures. Combining code precision with the power of AI to create more intuitive digital experiences.',
  primaryCta: 'View My Projects',
} as const

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
}

const SECTION_STYLE: React.CSSProperties = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: '0 1.5rem',
}

const GRID_STYLE: React.CSSProperties = {
  maxWidth: '72rem',
  margin: '0 auto',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '2fr 3fr',
  gap: '4rem',
  alignItems: 'center',
  padding: '6rem 0 4rem',
}

const CONTENT_STYLE: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
}

const BADGE_CONTAINER_STYLE: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
}

const BADGE_DOT_STYLE: React.CSSProperties = {
  width: '0.5rem',
  height: '0.5rem',
  borderRadius: '50%',
  backgroundColor: '#22c55e',
  display: 'inline-block',
  flexShrink: 0,
}

const BADGE_TEXT_STYLE: React.CSSProperties = {
  fontWeight: 500,
  fontSize: '0.75rem',
  letterSpacing: '0.08em',
  textTransform: 'uppercase' as const,
  color: '#6b7280',
}

const H1_STYLE: React.CSSProperties = {
  fontWeight: 700,
  lineHeight: 1.1,
  letterSpacing: '-0.02em',
  color: '#0a0a0a',
}

const DESC_BOLD_STYLE: React.CSSProperties = {
  fontWeight: 600,
  fontSize: '1.125rem',
  lineHeight: 1.55,
  color: '#0a0a0a',
  maxWidth: '34rem',
}

const DESC_MUTED_STYLE: React.CSSProperties = {
  fontWeight: 400,
  fontSize: '0.9375rem',
  lineHeight: 1.65,
  color: '#6b7280',
  maxWidth: '34rem',
}

const CTA_ROW_STYLE: React.CSSProperties = {
  display: 'flex',
  gap: '1rem',
  marginTop: '0.5rem',
  flexWrap: 'wrap' as const,
}



/**
 * HeroSection — Classic Split layout (Option A from design spec).
 * Photo left (2fr), content right (3fr).
 */
const HeroSection = () => {
  return (
    <section
      id="home"
      style={SECTION_STYLE}
    >
      <div style={GRID_STYLE} className="hero-grid">
        {/* Left — Photo */}
        <motion.div 
          style={{ display: 'flex', justifyContent: 'center' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        >
          <PhotoCard
            alt="Putra — Software Engineer"
            src="/Hero.png"
          />
        </motion.div>

        {/* Right — Content */}
        <motion.div
          style={CONTENT_STYLE}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-content"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} style={BADGE_CONTAINER_STYLE}>
            <span style={BADGE_DOT_STYLE} />
            <span style={BADGE_TEXT_STYLE}>{HERO_CONTENT.badge}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            style={{
              ...H1_STYLE,
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
            }}
          >
            <span className="font-medium">{HERO_CONTENT.headline1}</span>
            <br />
            <Typewriter
              text={[
                HERO_CONTENT.headline2,
                "Web Developer",
                "AI Enthusiast"
              ]}
              speed={70}
              waitTime={2500}
              deleteSpeed={40}
              cursorChar={"_"}
              className="text-[#0a0a0a] font-bold"
              cursorClassName="text-[#0a0a0a] ml-1 font-bold"
            />
          </motion.h1>

          {/* Bold Description */}
          <motion.p variants={itemVariants} style={DESC_BOLD_STYLE}>
            {HERO_CONTENT.descBold}
          </motion.p>

          {/* Muted Description */}
          <motion.p variants={itemVariants} style={DESC_MUTED_STYLE}>
            {HERO_CONTENT.descMuted}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} style={CTA_ROW_STYLE}>
            <GetStartedButton 
              label={HERO_CONTENT.primaryCta} 
              onClick={() => {
                const el = document.getElementById('projects')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 1023px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 2.5rem !important;
            padding-top: 7rem !important;
          }
          .hero-content {
            align-items: center !important;
          }
        }
        @media (max-width: 640px) {
          .hero-grid {
            padding-top: 6rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default memo(HeroSection)
