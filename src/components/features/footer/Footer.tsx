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
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <footer className="w-full bg-white border-t border-[var(--border)] py-8 px-6 md:px-12 lg:px-24">
      <motion.div
        className="mx-auto max-w-[1200px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >

        {/* Divider & Copyright */}
        <motion.div
          variants={itemVariants}
          className=""
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
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

