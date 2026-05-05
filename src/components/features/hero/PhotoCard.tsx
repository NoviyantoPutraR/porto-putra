"use client"

import { useRef, useState } from 'react'
import { MousePointer2 } from 'lucide-react'
import { CursorProvider, Cursor, CursorFollow } from '@/components/ui/cursor'

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
  borderRadius: '1.5rem',
}

const IMAGE_STYLE: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '1.5rem',
}

/**
 * PhotoCard — Isolated photo card with 3D hover rotation interaktif.
 */
const PhotoCard = ({ src, alt }: PhotoCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<React.CSSProperties>({})

  const saatMouseBergerak = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const { left, top, width, height } = cardRef.current.getBoundingClientRect()
    const x = e.clientX - left
    const y = e.clientY - top

    const rotateX = ((y - height / 2) / (height / 2)) * -8 // Max rotasi 8deg
    const rotateY = ((x - width / 2) / (width / 2)) * 8   // Max rotasi 8deg

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: "transform 0.1s ease-out",
    })
  }

  const saatMouseKeluar = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.5s ease-in-out",
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={saatMouseBergerak}
      onMouseLeave={saatMouseKeluar}
      style={{
        ...CARD_STYLE,
        ...style,
        transformStyle: "preserve-3d",
      }}
    >
      {src ? (
        <img 
          src={src} 
          alt={alt} 
          style={{
            ...IMAGE_STYLE,
            transform: "translateZ(30px) scale(1.05)",
            transition: "transform 0.3s ease-out"
          }} 
        />
      ) : (
        <div 
          style={{
            ...PLACEHOLDER_STYLE,
            transform: "translateZ(30px)",
            transition: "transform 0.3s ease-out"
          }}
        >
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

      <CursorProvider
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          transform: "translateZ(50px)",
        }}
      >
        <Cursor>
          <MousePointer2 className="fill-[#0a0a0a] stroke-white stroke-[1.5px]" size={36} />
        </Cursor>
        <CursorFollow align="bottom-right">
          <div className="bg-[#0a0a0a] text-white font-medium text-xs px-4 py-1.5 rounded-full shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] border border-white/5 whitespace-nowrap tracking-wide">
            Noviyanto Putra Ramadhan
          </div>
        </CursorFollow>
      </CursorProvider>
    </div>
  )
}

export default PhotoCard
