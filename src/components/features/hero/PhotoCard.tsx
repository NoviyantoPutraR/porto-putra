import { motion } from 'framer-motion'

interface PhotoCardProps {
  src?: string
  alt: string
}

// [rendering-hoist-jsx] — static style hoisted outside component
const CARD_STYLE: React.CSSProperties = {
  width: '100%',
  maxWidth: '320px',
  aspectRatio: '3 / 4',
  borderRadius: '1.5rem',
  overflow: 'hidden',
  border: '1px solid rgba(229, 231, 235, 0.5)', // Lighter border to contrast the dark shadow
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 40px rgba(0, 0, 0, 0.05)', // Stronger, more elevated shadow
  background: '#f3f4f6',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const PLACEHOLDER_STYLE: React.CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '0.75rem',
  color: '#9ca3af',
  fontFamily: 'Inter, sans-serif',
  fontSize: '0.875rem',
  fontWeight: 500,
  textAlign: 'center',
  padding: '2rem',
  background: 'linear-gradient(160deg, #e8ecf0 0%, #d1d9e0 100%)',
}

const IMAGE_STYLE: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}

/**
 * PhotoCard — Isolated photo card with hover rotation.
 * Default: upright. Hover (triggered by parent): rotates -3deg via spring.
 */
const PhotoCard = ({ src, alt }: PhotoCardProps) => {
  return (
    <motion.div
      style={CARD_STYLE}
      whileHover={{ rotate: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {src ? (
        <img src={src} alt={alt} style={IMAGE_STYLE} />
      ) : (
        <div style={PLACEHOLDER_STYLE}>
          {/* User icon placeholder */}
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="40" cy="40" r="40" fill="#cbd5e1" />
            <circle cx="40" cy="30" r="16" fill="#94a3b8" />
            <ellipse cx="40" cy="72" rx="26" ry="20" fill="#94a3b8" />
          </svg>
          <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>
            {alt}
          </span>
          <span style={{ color: '#b0bac5', fontSize: '0.7rem' }}>
            Replace with your photo
          </span>
        </div>
      )}
    </motion.div>
  )
}

export default PhotoCard
