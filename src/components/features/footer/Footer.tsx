import { motion, type Variants } from 'framer-motion'


/**
 * Footer — Premium footer with Entrance Reveal animation.
 * Follows the "Spread Balanced" layout (Opsi 1).
 */
export const Footer = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const lineVariants: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 0.3, // Opacity sedang agar terlihat tapi tetap halus
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <footer className="w-full bg-white py-8 px-6 md:px-12 lg:px-24">
      <motion.div
        className="mx-auto max-w-[1200px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >

        {/* Garis Pemisah dengan Animasi Entrance Reveal */}
        <motion.div
          variants={lineVariants}
          style={{ originX: 0.5 }}
          className="w-full border-t border-[var(--border)] mx-auto mb-6"
        />

        {/* Brand & Copyright */}
        <motion.div
          variants={itemVariants}
          className=""
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <a
              href="#home"
              className="text-sm font-bold text-[var(--text)] hover:opacity-70 transition-opacity no-underline"
            >
              PutraRamadhan.
            </a>
            <p className="text-xs text-[var(--text)] opacity-60">
              &copy; {new Date().getFullYear()} PutraRamadhan. Semua hak dilindungi.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

