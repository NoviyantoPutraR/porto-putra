
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

/**
 * GetInTouch - Section kontak dengan estetika premium.
 * Menampilkan Call to Action (CTA) untuk kolaborasi dengan komposisi bingkai simetris.
 */
export function GetInTouch() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-32 lg:py-48 flex items-center justify-center min-h-[60vh]">
      {/* Container utama untuk membatasi lebar maksimal konten */}
      <div className="relative w-full max-w-7xl px-4 md:px-8 mx-auto flex flex-col items-center justify-center z-10">
        
        {/* Gambar Kiri (Floating Cross-Placement: Kiri Atas) */}
        <div className="absolute left-0 md:-left-8 lg:-left-16 top-1/2 -translate-y-1/2 -mt-16 md:-mt-24 lg:-mt-32 pointer-events-none flex items-center justify-center z-0">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img 
              src="/kiri.png" 
              alt="Ilustrasi aksen kiri" 
              className="w-[150px] sm:w-[250px] md:w-[350px] lg:w-[450px] object-contain mix-blend-multiply opacity-30 md:opacity-80"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        {/* Gambar Kanan (Floating Cross-Placement: Kanan Bawah) */}
        <div className="absolute right-0 md:-right-8 lg:-right-16 top-1/2 -translate-y-1/2 mt-16 md:mt-24 lg:mt-32 pointer-events-none flex items-center justify-center z-0">
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img 
              src="/kanan.png" 
              alt="Ilustrasi aksen kanan" 
              className="w-[150px] sm:w-[250px] md:w-[350px] lg:w-[450px] object-contain mix-blend-multiply opacity-30 md:opacity-80"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
            />
          </motion.div>
        </div>

        {/* Konten Teks dan Tombol */}
        <div className="relative z-20 flex flex-col items-center text-center">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-8 max-w-3xl leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            Get In Touch
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
              <span className="relative z-10 flex items-center font-medium tracking-wide">
                Let's Collaborate
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              {/* Efek hover pada latar belakang tombol */}
              <div className="absolute inset-0 h-full w-full bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
