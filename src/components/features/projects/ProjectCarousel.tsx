import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export interface ProjectDetail {
  id: number | string
  title: string
  description: string
  longDescription: string
  techStack: string[]
  imageUrl: string
  githubUrl?: string
  liveUrl?: string
  year?: string
  role?: string
}

interface ProjectCarouselProps {
  projectList: ProjectDetail[]
}

export const ProjectCarousel = ({ projectList }: ProjectCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const activeProject = projectList[activeIndex]
  

  // Timer pengaturan putar otomatis (Auto-play)
  useEffect(() => {
    if (isHovered || projectList.length === 0) return

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projectList.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isHovered, projectList.length])

  if (!activeProject) return null

  // Membatasi lebar thumbnail agar sangat kecil (kalkulasi untuk 8 item) = sekitar 100px-110px
  const thumbnailMaxWidth = `calc((100% / 8) - 20px)`

  return (
    <section id="projects" className="w-full overflow-hidden" style={{ background: '#FFFFFF', padding: '120px 0' }}>
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] md:gap-16 lg:gap-24 max-w-7xl mx-auto px-5 relative items-start">
        
        {/* Kolom Kiri (Judul - Fit Content) */}
        <div className="w-full flex-shrink-0 relative">
          <div className="md:sticky md:top-32 flex justify-start md:justify-end">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            >
              <h2 
                className="font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-black to-neutral-400 md:[writing-mode:vertical-rl] md:rotate-180"
                style={{
                  fontSize: 'clamp(4rem, 8vw, 7rem)',
                  whiteSpace: 'nowrap'
                }}
              >
                My Projects.
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Kolom Kanan (Carousel - Sisa Area) */}
        <div className="w-full min-w-0">

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
          className="carousel" 
          style={{ display: 'block', textAlign: 'left', position: 'relative', marginBottom: '22px' }} 
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}
        >
          
          <ul className="carousel__slides" style={{ position: 'relative', zIndex: 1, padding: 0, margin: 0, overflow: 'hidden', whiteSpace: 'nowrap', boxSizing: 'border-box', display: 'flex' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="carousel__slide"
                style={{ position: 'relative', display: 'block', flex: '1 0 100%', width: '100%', height: '100%', overflow: 'hidden', verticalAlign: 'top', boxSizing: 'border-box', whiteSpace: 'normal' }}
              >
                <figure style={{ display: 'flex', margin: 0 }}>
                  <div style={{ position: 'relative', width: '75%' }}>
                     {/* Padding top 47% untuk menaikkan sedikit tinggi gambar utamanya (sekitar rasio 2:1) */}
                     <div style={{ display: 'block', content: '""', width: '100%', paddingTop: '47%' }} />
                     <img 
                       src={activeProject.imageUrl} 
                       alt={activeProject.title}
                       style={{ 
                         position: 'absolute', 
                         top: 0, 
                         left: 0, 
                         right: 0, 
                         bottom: 0, 
                         width: '100%', 
                         height: '100%', 
                         display: 'block', 
                         flex: '1 1 auto', 
                         objectFit: 'cover',
                         boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)'
                       }}
                     />
                  </div>
                  <figcaption style={{ alignSelf: 'flex-end', padding: '24px 20px 0 20px', flex: '0 0 auto', width: '25%', minWidth: '150px' }}>
                    <h3 className="text-base font-bold text-neutral-900 mb-2 leading-tight break-words whitespace-normal">
                      {activeProject.title}
                    </h3>
                    <p className="text-xs text-neutral-700 leading-relaxed mb-4 break-words whitespace-normal">
                      {activeProject.description}
                    </p>
                    
                    {/* Tech Stack Badges */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
                      {activeProject.techStack.map((tech) => (
                         <span 
                           key={tech}
                           style={{
                             backgroundColor: 'rgba(238, 242, 255, 0.5)',
                             color: '#475569',
                             padding: '4px 12px',
                             borderRadius: '9999px',
                             fontSize: '10px',
                             fontWeight: 600,
                             border: '1px solid rgba(224, 231, 255, 0.8)',
                             letterSpacing: '0.02em'
                           }}
                         >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </figcaption>
                </figure>
              </motion.div>
            </AnimatePresence>
          </ul>

          <motion.ul 
            className="carousel__thumbnails" 
            style={{ listStyle: 'none', padding: 0, display: 'flex', margin: '20px 0 0 0', overflowX: 'auto', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.4
                }
              }
            }}
          >
            {projectList.map((project, idx) => {
              const isActive = idx === activeIndex
              const activeBoxShadow = isActive ? '0px 0px 0px 5px rgba(0,0,255,0.5)' : 'none'
              const hoverShadow = !isActive ? '0px 0px 0px 1px rgba(0,0,0,0.25)' : activeBoxShadow

              return (
                <motion.li 
                  key={project.id} 
                  style={{ flex: '1 1 auto', maxWidth: thumbnailMaxWidth, margin: '0 10px', transition: 'all 300ms ease-in-out' }}
                  variants={{
                    hidden: { scale: 0.9, opacity: 0 },
                    show: { scale: 1, opacity: 1 }
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <button 
                    onClick={() => setActiveIndex(idx)}
                    className="group"
                    style={{ display: 'block', width: '100%', position: 'relative', background: 'transparent', border: 'none', padding: 0, cursor: 'pointer' }}
                  >
                    <div style={{ display: 'block', content: '""', width: '100%', paddingTop: '100%' }} />
                     <img 
                       src={project.imageUrl} 
                       alt=""
                       style={{ 
                         position: 'absolute', 
                         top: 0, 
                         left: 0, 
                         right: 0, 
                         bottom: 0, 
                         width: '100%', 
                         height: '100%', 
                         display: 'block', 
                         objectFit: 'cover', 
                         boxShadow: isActive ? '0 0 0 4px rgba(99, 102, 241, 0.4)' : '0 4px 12px rgba(0,0,0,0.05)', 
                         transition: 'all 300ms ease-in-out' 
                       }}
                      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = hoverShadow }}
                      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = activeBoxShadow }}
                    />
                  </button>
                </motion.li>
              )
            })}
          </motion.ul>
          
        </motion.div>
        </div>
      </div>
    </section>
  )
}
