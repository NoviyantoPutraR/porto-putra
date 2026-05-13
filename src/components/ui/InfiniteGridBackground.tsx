import { useEffect, useState } from 'react'
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useAnimationFrame,
  AnimatePresence,
} from 'framer-motion'

// ─── Types ──────────────────────────────────────────────────────────────────

interface InfiniteGridBackgroundProps {
  heroSectionId?: string
}

interface GridPatternProps {
  patternId: string
  offsetX: ReturnType<typeof useMotionValue<number>>
  offsetY: ReturnType<typeof useMotionValue<number>>
}

interface GlowBlobsProps {
  visible: boolean
}

// ─── Custom Hook ─────────────────────────────────────────────────────────────

function useGridState(heroSectionId?: string) {
  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0)
  const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0)
  const gridOffsetX = useMotionValue(0)
  const gridOffsetY = useMotionValue(0)
  const [heroVisible, setHeroVisible] = useState(true)

  // Pelacakan mouse global
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  // IntersectionObserver untuk glow blobs di Hero section
  useEffect(() => {
    if (!heroSectionId) return
    const target = document.getElementById(heroSectionId)
    if (!target) return

    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(target)
    return () => observer.disconnect()
  }, [heroSectionId])

  // Scroll animasi grid otomatis
  useAnimationFrame(() => {
    gridOffsetX.set((gridOffsetX.get() + 0.5) % 40)
    gridOffsetY.set((gridOffsetY.get() + 0.5) % 40)
  })

  return { mouseX, mouseY, gridOffsetX, gridOffsetY, heroVisible }
}

// ─── Sub-Component: GridPattern ──────────────────────────────────────────────

const GridPattern = ({ patternId, offsetX, offsetY }: GridPatternProps) => (
  <svg className="w-full h-full" aria-hidden="true">
    <defs>
      <motion.pattern
        id={patternId}
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
        x={offsetX}
        y={offsetY}
      >
        <path
          d="M 40 0 L 0 0 0 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-neutral-400"
        />
      </motion.pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#${patternId})`} />
  </svg>
)

// ─── Sub-Component: GlowBlobs ────────────────────────────────────────────────

const GlowBlobs = ({ visible }: GlowBlobsProps) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        className="fixed inset-0 pointer-events-none z-[0]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        aria-hidden="true"
      >
        {/* Blob kanan atas — oranye */}
        <div className="absolute right-[-20%] top-[-20%] w-[40%] h-[40%] rounded-full bg-orange-400/15 blur-[120px]" />
        {/* Blob tengah atas — primary */}
        <div className="absolute right-[10%] top-[-10%] w-[20%] h-[20%] rounded-full bg-primary/10 blur-[100px]" />
        {/* Blob kiri bawah — biru */}
        <div className="absolute left-[-10%] bottom-[-20%] w-[40%] h-[40%] rounded-full bg-blue-400/15 blur-[120px]" />
      </motion.div>
    )}
  </AnimatePresence>
)

// ─── Main Export ─────────────────────────────────────────────────────────────

// ID statis untuk SVG pattern — aman karena hanya ada satu instance komponen ini
const GRID_ID_STATIC = 'infinite-grid-static'
const GRID_ID_MASK = 'infinite-grid-mask'

/**
 * InfiniteGridBackground — Latar grid animasi global dengan cursor reveal.
 *
 * Menggunakan `position: fixed` + `pointer-events: none` agar bekerja
 * di semua section tanpa memblokir interaksi pengguna.
 * Glow blobs hanya aktif saat Hero section terlihat (via IntersectionObserver).
 */
export const InfiniteGridBackground = ({ heroSectionId }: InfiniteGridBackgroundProps) => {
  const { mouseX, mouseY, gridOffsetX, gridOffsetY, heroVisible } = useGridState(heroSectionId)

  const maskImage = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`

  return (
    <>
      {/* Layer 1: Grid statis — selalu bergerak, sangat subtle */}
      <div
        className="fixed inset-0 z-[0] opacity-[0.05] pointer-events-none"
        aria-hidden="true"
      >
        <GridPattern
          patternId={GRID_ID_STATIC}
          offsetX={gridOffsetX}
          offsetY={gridOffsetY}
        />
      </div>

      {/* Layer 2: Grid mask — cursor reveal via radial gradient */}
      <motion.div
        className="fixed inset-0 z-[1] opacity-20 pointer-events-none"
        style={{ maskImage, WebkitMaskImage: maskImage }}
        aria-hidden="true"
      >
        <GridPattern
          patternId={GRID_ID_MASK}
          offsetX={gridOffsetX}
          offsetY={gridOffsetY}
        />
      </motion.div>

      {/* Layer 3: Glow blobs — hanya saat Hero section terlihat */}
      <GlowBlobs visible={heroVisible} />
    </>
  )
}
