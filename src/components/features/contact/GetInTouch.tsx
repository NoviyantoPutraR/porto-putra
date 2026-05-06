import { useState } from 'react'
import { motion, Variants, AnimatePresence } from 'framer-motion'

/**
 * TAUTAN_KONTAK - Data tautan dan ikon bentuk vektor untuk ditampilkan.
 */
const TAUTAN_KONTAK = [
  {
    nama: 'WhatsApp',
    tautan: 'https://wa.me/6285707500040?text=Halo,%20saya%20melihat%20portofolio%20Anda%20dan%20ingin%20berdiskusi',
    ikon: (
      <svg className="transition-all duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 71 72" fill="none">
        <path d="M12.5762 56.8405L15.8608 44.6381C13.2118 39.8847 12.3702 34.3378 13.4904 29.0154C14.6106 23.693 17.6176 18.952 21.9594 15.6624C26.3012 12.3729 31.6867 10.7554 37.1276 11.1068C42.5685 11.4582 47.6999 13.755 51.5802 17.5756C55.4604 21.3962 57.8292 26.4844 58.2519 31.9065C58.6746 37.3286 57.1228 42.7208 53.8813 47.0938C50.6399 51.4668 45.9261 54.5271 40.605 55.7133C35.284 56.8994 29.7125 56.1318 24.9131 53.5513L12.5762 56.8405ZM25.508 48.985L26.2709 49.4365C29.7473 51.4918 33.8076 52.3423 37.8191 51.8555C41.8306 51.3687 45.5681 49.5719 48.4489 46.7452C51.3298 43.9185 53.1923 40.2206 53.7463 36.2279C54.3002 32.2351 53.5143 28.1717 51.5113 24.6709C49.5082 21.1701 46.4003 18.4285 42.6721 16.8734C38.9438 15.3184 34.8045 15.0372 30.8993 16.0736C26.994 17.11 23.5422 19.4059 21.0817 22.6035C18.6212 25.801 17.2903 29.7206 17.2963 33.7514C17.293 37.0937 18.2197 40.3712 19.9732 43.2192L20.4516 44.0061L18.6153 50.8167L25.508 48.985Z" fill="#00D95F"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M44.0259 36.8847C43.5787 36.5249 43.0549 36.2716 42.4947 36.1442C41.9344 36.0168 41.3524 36.0186 40.793 36.1495C39.9524 36.4977 39.4093 37.8134 38.8661 38.4713C38.7516 38.629 38.5833 38.7396 38.3928 38.7823C38.2024 38.8251 38.0028 38.797 37.8316 38.7034C34.7543 37.5012 32.1748 35.2965 30.5122 32.4475C30.3704 32.2697 30.3033 32.044 30.325 31.8178C30.3467 31.5916 30.4555 31.3827 30.6286 31.235C31.2344 30.6368 31.6791 29.8959 31.9218 29.0809C31.9756 28.1818 31.7691 27.2863 31.3269 26.5011C30.985 25.4002 30.3344 24.42 29.4518 23.6762C28.9966 23.472 28.4919 23.4036 27.9985 23.4791C27.5052 23.5546 27.0443 23.7709 26.6715 24.1019C26.0242 24.6589 25.5104 25.3537 25.168 26.135C24.8256 26.9163 24.6632 27.7643 24.6929 28.6165C24.6949 29.0951 24.7557 29.5716 24.8739 30.0354C25.1742 31.1497 25.636 32.2144 26.2447 33.1956C26.6839 33.9473 27.163 34.6749 27.6801 35.3755C29.3607 37.6767 31.4732 39.6305 33.9003 41.1284C35.1183 41.8897 36.42 42.5086 37.7799 42.973C39.1924 43.6117 40.752 43.8568 42.2931 43.6824C43.1711 43.5499 44.003 43.2041 44.7156 42.6755C45.4281 42.1469 45.9995 41.4518 46.3795 40.6512C46.6028 40.1675 46.6705 39.6269 46.5735 39.1033C46.3407 38.0327 44.9053 37.4007 44.0259 36.8847Z" fill="#00D95F"/>
      </svg>
    )
  },
  {
    nama: 'Telegram',
    tautan: 'https://t.me/putrarhmdan22',
    ikon: (
      <svg className="rounded-md transition-all duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 72 72" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M61.03 36.015C61.03 49.8304 49.8304 61.03 36.015 61.03C22.1996 61.03 11 49.8304 11 36.015C11 22.1996 22.1996 11 36.015 11C49.8304 11 61.03 22.1996 61.03 36.015ZM38.4121 28.3392C34.1147 30.1955 21.7235 35.4671 21.7235 35.4671C18.7869 36.6551 20.5058 37.7688 20.5058 37.7688C20.5058 37.7688 23.0127 38.6599 25.1615 39.328C27.3103 39.9963 28.4563 39.2538 28.4563 39.2538C28.4563 39.2538 33.47 35.8384 38.5554 32.2002C42.1366 29.6757 41.2772 31.7547 40.4176 32.6457C38.5554 34.5762 35.4755 37.6204 32.897 40.0706C31.751 41.1101 32.324 42.001 32.8254 42.4465C34.2836 43.7256 37.718 46.0518 39.2773 47.1079C39.7093 47.4005 39.9974 47.5956 40.0596 47.6439C40.4176 47.941 42.4232 49.2774 43.6408 48.9804C44.8584 48.6834 45.0017 46.9757 45.0017 46.9757C45.0017 46.9757 45.9328 40.8873 46.7923 35.3186C46.9515 34.2252 47.1107 33.1548 47.2592 32.1567C47.645 29.5623 47.9582 27.4565 48.0099 26.7058C48.2248 24.1814 45.6463 25.2208 45.6463 25.2208C45.6463 25.2208 40.0596 27.5968 38.4121 28.3392Z" fill="#34AADF"/>
      </svg>
    )
  },
  {
    nama: 'LinkedIn',
    tautan: 'https://www.linkedin.com/in/noviyanto-putra-ramadhan-743334321/',
    ikon: (
      <svg className="rounded-md transition-all duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 72 72" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M14.6975 11C12.6561 11 11 12.6057 11 14.5838V57.4474C11 59.4257 12.6563 61.03 14.6975 61.03H57.3325C59.3747 61.03 61.03 59.4255 61.03 57.4468V14.5838C61.03 12.6057 59.3747 11 57.3325 11H14.6975ZM26.2032 30.345V52.8686H18.7167V30.345H26.2032ZM26.6967 23.3793C26.6967 25.5407 25.0717 27.2703 22.4615 27.2703L22.4609 27.2701H22.4124C19.8998 27.2701 18.2754 25.5405 18.2754 23.3791C18.2754 21.1686 19.9489 19.4873 22.5111 19.4873C25.0717 19.4873 26.6478 21.1686 26.6967 23.3793ZM37.833 52.8686H30.3471L30.3469 52.8694C30.3469 52.8694 30.4452 32.4588 30.3475 30.3458H37.8336V33.5339C38.8288 31.9995 40.6098 29.8169 44.5808 29.8169C49.5062 29.8169 53.1991 33.0363 53.1991 39.9543V52.8686H45.7133V40.8204C45.7133 37.7922 44.6293 35.7269 41.921 35.7269C39.8524 35.7269 38.6206 37.1198 38.0796 38.4653C37.8819 38.9455 37.833 39.6195 37.833 40.2918V52.8686Z" fill="#006699"/>
      </svg>
    )
  },
  {
    nama: 'Email',
    tautan: 'mailto:noviyantoputraramadhan@gmail.com',
    ikon: (
      <svg className="rounded-md transition-all duration-300 group-hover:scale-110" width="32" height="32" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.0065 56.1236H21.4893V35.5227L9.37109 26.4341V52.4881C9.37109 54.4997 11.001 56.1236 13.0065 56.1236Z" fill="#4285F4"/>
        <path d="M50.5732 56.1236H59.056C61.0676 56.1236 62.6914 54.4937 62.6914 52.4881V26.4341L50.5732 35.5227" fill="#34A853"/>
        <path d="M50.5732 19.7693V35.5229L62.6914 26.4343V21.587C62.6914 17.0912 57.5594 14.5282 53.9663 17.2245" fill="#FBBC04"/>
        <path d="M21.4893 35.5227V19.769L36.0311 30.6754L50.5729 19.769V35.5227L36.0311 46.429" fill="#EA4335"/>
        <path d="M9.37109 21.587V26.4343L21.4893 35.5229V19.7693L18.0962 17.2245C14.4971 14.5282 9.37109 17.0912 9.37109 21.587Z" fill="#C5221F"/>
      </svg>
    )
  },
  {
    nama: 'GitHub',
    tautan: 'https://github.com/NoviyantoPutraR',
    ikon: (
      <svg className="transition-all duration-300 group-hover:scale-110" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#181717">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.73.084-.73 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.228-1.552 3.331-1.23 3.331-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    )
  }
]

// Variasi animasi untuk memunculkan deretan ikon satu per satu (Staggered Pop-In)
const variasiKontainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    }
  }
}

const variasiIkon: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
}

/**
 * GetInTouch - Section kontak dengan estetika premium.
 * Menampilkan barisan ikon kontak mengambang sebagai Call to Action.
 */
export function GetInTouch() {
  const [tersalinEmail, setTersalinEmail] = useState(false)

  const tanganiSalinEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    const email = "noviyantoputraramadhan@gmail.com"
    navigator.clipboard.writeText(email).then(() => {
      setTersalinEmail(true)
      setTimeout(() => setTersalinEmail(false), 2000)
    })
  }

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
            className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-wide text-gray-900 mb-8 max-w-3xl leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            Get In Touch
          </motion.h2>

          <motion.div
            className="flex items-center justify-center gap-4 md:gap-6 mt-4 flex-wrap"
            variants={variasiKontainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {TAUTAN_KONTAK.map((kontak) => (
              <motion.a
                key={kontak.nama}
                href={kontak.tautan}
                onClick={kontak.nama === 'Email' ? tanganiSalinEmail : undefined}
                aria-label={`Hubungi via ${kontak.nama}`}
                variants={variasiIkon}
                className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-2xl bg-white shadow-md shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200 group transition-all duration-300 cursor-pointer"
              >
                {/* Feedback Badge "Tersalin!" */}
                <AnimatePresence>
                  {kontak.nama === 'Email' && tersalinEmail && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ opacity: 1, y: -45, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.8 }}
                      className="absolute top-0 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-[10px] font-bold rounded-full whitespace-nowrap z-50 pointer-events-none"
                    >
                      Tersalin!
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Pembungkus ringan untuk menaikkan ikon ke atas saat kursor mendekat */}
                <span className="transition-transform duration-300 group-hover:-translate-y-1">
                  {kontak.ikon}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
