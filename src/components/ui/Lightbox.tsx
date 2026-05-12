import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { X } from 'lucide-react'

interface LightboxProps {
  imageUrl: string | null
  onClose: () => void
}

export function Lightbox({ imageUrl, onClose }: LightboxProps) {
  // Menutup modal saat tombol Esc ditekan
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  // Mencegah scroll pada body saat modal terbuka
  useEffect(() => {
    if (imageUrl) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [imageUrl])

  return (
    <AnimatePresence>
      {imageUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10"
          onClick={onClose}
        >
          {/* Tombol Tutup */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors duration-300 z-[110]"
            aria-label="Tutup Galleri"
          >
            <X size={32} />
          </button>

          {/* Kontainer Gambar */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative max-w-full max-h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Mencegah penutupan saat mengeklik gambar
          >
            <img
              src={imageUrl}
              alt="Pratinjau Proyek"
              className="max-w-full max-h-[90vh] object-contain shadow-2xl"
              draggable={false}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
