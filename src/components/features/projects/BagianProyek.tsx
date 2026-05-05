import { motion, useInView, Variants } from 'framer-motion'
import { useRef } from 'react'

export interface DetailProyek {
  id: number
  title: string
  description: string
  longDescription: string
  techStack: string[]
  imageUrl: string
  githubUrl: string
  liveUrl: string
  year: string
  role: string
}

interface BagianProyekProps {
  daftarProyek: DetailProyek[]
}

const varianWadah: Variants = {
  tersembunyi: { opacity: 0 },
  terlihat: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const varianAnak: Variants = {
  tersembunyi: { opacity: 0, x: 50 },
  terlihat: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

export function BagianProyek({ daftarProyek }: BagianProyekProps) {
  const referensi = useRef<HTMLDivElement>(null)
  const dalamTampilan = useInView(referensi, { once: true, margin: '-10% 0px' })
  const wadahScrollRef = useRef<HTMLDivElement>(null)

  // Status untuk fitur drag-to-scroll menggunakan mouse
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeftPos = useRef(0)

  const saatMouseDitekan = (e: React.MouseEvent) => {
    if (!wadahScrollRef.current) return
    isDragging.current = true
    wadahScrollRef.current.classList.add('cursor-grabbing')
    wadahScrollRef.current.classList.remove('snap-x', 'snap-mandatory', 'scroll-smooth')
    startX.current = e.pageX - wadahScrollRef.current.offsetLeft
    scrollLeftPos.current = wadahScrollRef.current.scrollLeft
  }

  const saatMouseDilepasAtauKeluar = () => {
    isDragging.current = false
    if (!wadahScrollRef.current) return
    wadahScrollRef.current.classList.remove('cursor-grabbing')
    wadahScrollRef.current.classList.add('snap-x', 'snap-mandatory', 'scroll-smooth')
  }

  const saatMouseBergerak = (e: React.MouseEvent) => {
    if (!isDragging.current || !wadahScrollRef.current) return
    e.preventDefault()
    const x = e.pageX - wadahScrollRef.current.offsetLeft
    const perpindahan = (x - startX.current) * 2 // Kecepatan scroll digandakan agar lebih responsif
    wadahScrollRef.current.scrollLeft = scrollLeftPos.current - perpindahan
  }

  return (
    <section id="proyek" className="w-full relative bg-white py-24 mb-10 overflow-x-hidden font-roboto text-slate-900">
      
      {/* Header Container untuk menjaga alignment max-width */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-end mb-16">
          <h2 className="text-5xl md:text-7xl font-playfair italic font-medium tracking-wide">
            PROJECTS
          </h2>
        </div>
      </div>

      {/* Slider Container - Full Bleed memanjang layar penuh */}
      <div className="w-full border-t border-b border-slate-300">
        <motion.div
          ref={(el) => {
            // Memberikan referensi ke el tanpa menggunakan 'any'
            // Type casting ke MutableRefObject untuk memungkinkan penulisan ke .current
            (referensi as React.MutableRefObject<HTMLDivElement | null>).current = el;
            (wadahScrollRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
          }}
          variants={varianWadah}
          initial="tersembunyi"
          animate={dalamTampilan ? 'terlihat' : 'tersembunyi'}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar cursor-grab active:cursor-grabbing w-full"
          onMouseDown={saatMouseDitekan}
          onMouseLeave={saatMouseDilepasAtauKeluar}
          onMouseUp={saatMouseDilepasAtauKeluar}
          onMouseMove={saatMouseBergerak}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Sembunyikan scrollbar bawaan */}
          <style>{`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {/* Spacer Kiri (Menyelaraskan kartu pertama dengan kontainer max-w-7xl px-8 kita) */}
          <div className="flex-none w-4 md:w-8 lg:w-[calc(50vw-40rem+2rem)] shrink-0 pointer-events-none" />

          {/* Kartu Proyek */}
          {daftarProyek.map((proyek, indeks) => (
            <motion.div
              key={proyek.id}
              variants={varianAnak}
              className="group relative flex-none w-[85vw] md:w-[45vw] lg:w-[31.5vw] snap-start border-l border-r border-slate-300 p-8 flex flex-col transition-colors duration-500 hover:bg-slate-50 -ml-[1px]"
            >
              {/* Nomor */}
              <div className="text-xl md:text-2xl font-light text-slate-400 mb-6 transition-colors duration-500 group-hover:text-slate-900 pointer-events-none">
                {indeks + 1}
              </div>

              {/* Wadah Gambar */}
              <div className="w-full aspect-[4/3] overflow-hidden mb-8 bg-slate-100 flex-shrink-0 relative pointer-events-none">
                <img
                  src={proyek.imageUrl}
                  alt={proyek.title}
                  className="w-full h-full object-cover origin-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                  draggable={false} // Mencegah konflik browser image drag bawaan
                />
              </div>

              {/* Konten */}
              <div className="flex-grow flex flex-col pointer-events-none">
                <h3 className="text-lg font-bold uppercase tracking-tight mb-4 text-slate-900">
                  {proyek.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 mb-8 line-clamp-3">
                  {proyek.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-auto pt-4 pointer-events-auto">
                  <div className="flex flex-wrap gap-2">
                    {proyek.techStack.map((teknologi) => (
                      <span
                        key={teknologi}
                        className="px-3 py-1 text-[10px] uppercase tracking-widest font-semibold text-slate-500 bg-slate-100 rounded-none border border-slate-300 transition-colors duration-300 group-hover:bg-white group-hover:border-slate-400"
                      >
                        {teknologi}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Spacer Kanan (Agar ujung kanan kartu terakhir tidak mepet layar) */}
          <div className="flex-none w-4 md:w-8 lg:w-[calc(50vw-40rem+2rem)] shrink-0 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}
