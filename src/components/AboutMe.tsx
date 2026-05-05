import { motion } from 'framer-motion'
import { memo } from 'react'

/**
 * AboutMe — Seksi profil pengguna dengan desain layout monokrom asimetris.
 */
function AboutMeComponent() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-24 text-black md:px-12 lg:px-24 pt-32">

      {/* Latar Belakang Judul Watermark Besar (Opsi 3) */}
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 0.04, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="pointer-events-none absolute left-0 w-full text-center top-16 z-0 select-none whitespace-nowrap text-[80px] leading-none tracking-normal text-black md:top-10 md:text-[150px] lg:-top-6 lg:text-[220px] font-playfair italic font-medium"
      >
        ABOUT ME
      </motion.h2>

      <div className="mx-auto mt-8 relative z-10 flex w-full max-w-[1200px] flex-col items-end md:mt-16">
        <div className="relative flex w-full flex-col-reverse items-end justify-between md:flex-row md:items-stretch">
          
          {/* Area Teks (Blob Gelap) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative z-10 mt-10 w-full rounded-[60px] bg-[#111] p-10 text-white md:mt-0 md:w-[70%] md:rounded-[100px] md:p-20 md:pr-40 lg:rounded-tr-none"
          >
            <h3 className="mb-6 text-xl font-medium tracking-wide">
              Hello, I'm Noviyanto Putra Ramadhan
            </h3>
            <p className="mb-6 font-sans font-light leading-relaxed text-gray-300 md:text-lg">
              I am a Full-stack Web Developer. I focus on clean architecture, performance optimization, and building efficient, scalable systems, including AI technology integration.
            </p>
            <p className="font-sans text-sm font-light leading-relaxed text-gray-400">
              Experienced in collaborative environments, I bring a strong problem-solving approach and the ability to translate business requirements into precise technical solutions.
            </p>

            {/* Elemen Dekorasi Garis Halus di kiri (opsional) */}
            <div className="pointer-events-none absolute bottom-0 left-0 h-full w-[200px] opacity-10 overflow-hidden">
                <svg className="absolute -bottom-20 -left-20 w-80 h-80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                  <path d="M50 0C50 27.6142 27.6142 50 0 50C27.6142 50 50 72.3858 50 100C50 72.3858 72.3858 50 100 50C72.3858 50 50 27.6142 50 0Z" />
                </svg>
            </div>
          </motion.div>

          {/* Area Foto Profil (Arch) */}
          <div className="relative z-20 flex w-full justify-center md:absolute md:right-[5%] md:top-[-100px] md:w-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="relative h-[350px] w-[260px] overflow-hidden rounded-t-[1000px] bg-gray-200 md:h-[450px] md:w-[320px] shadow-2xl"
            >
              <img
                src="/about me.png"
                alt="Foto Profil"
                className="h-full w-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </motion.div>
            
            {/* Bintang Dekoratif Kecil (Tengah) */}
            <motion.svg
              initial={{ opacity: 0, rotate: -45 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
              className="absolute -bottom-8 right-16 z-30 h-16 w-16 text-white drop-shadow-lg"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <path d="M50 0C50 27.6142 27.6142 50 0 50C27.6142 50 50 72.3858 50 100C50 72.3858 72.3858 50 100 50C72.3858 50 50 27.6142 50 0Z" />
            </motion.svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export const AboutMe = memo(AboutMeComponent)
