import { motion } from 'framer-motion'
import { memo } from 'react'

/**
 * Komponen TechStackMarquee — Menampilkan logo teknologi dalam baris berjalan (marquee).
 */
const TECH_ITEMS = [
  { name: 'Laravel', icon: '/tech/laravel.svg' },
  { name: 'React', icon: '/tech/react.svg' },
  { name: 'Next.js', icon: '/tech/nextjs.svg' },
  { name: 'Node.js', icon: '/tech/nodejs.svg' },
  { name: 'JavaScript', icon: '/tech/javascript.svg' },
  { name: 'PHP', icon: '/tech/php.svg' },
  { name: 'MySQL', icon: '/tech/mysql.svg' },
  { name: 'PostgreSQL', icon: '/tech/postgresql.svg' },
  { name: 'Postman', icon: '/tech/postman.svg' },
  { name: 'Gemini AI', icon: '/tech/gemini.svg' },
  { name: 'Tailwind CSS', icon: '/tech/tailwindcss.svg' },
  { name: 'Git', icon: '/tech/git.svg' },
  { name: 'GitHub', icon: '/tech/github.svg' },
]

function TechStackMarqueeComponent() {
  // Duplikasi daftar untuk loop tak terbatas yang halus
  const listItems = [...TECH_ITEMS, ...TECH_ITEMS]

  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="container mx-auto px-6 mb-2 text-center">
        <motion.h2 
          className="text-xs font-bold uppercase tracking-[0.3em] text-black mb-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Tech Stack
        </motion.h2>
        <motion.div 
          className="h-[1px] bg-gray-300 mx-auto mt-2"
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        ></motion.div>
      </div>

      <div className="container mx-auto max-w-5xl">
        <div 
          className="relative overflow-hidden group py-4"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          }}
        >
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: [0, '-50%'] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {listItems.map((item, index) => (
              <motion.div
                key={`${item.name}-${index}`}
                className="flex items-center justify-center mx-8 md:mx-12"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: (index % TECH_ITEMS.length) * 0.1,
                }}
              >
                <div className="flex flex-col items-center gap-4 group/item">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center filter grayscale opacity-40 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all duration-500">
                    {/* Fallback jika logo tidak ditemukan, menampilkan teks */}
                    <img 
                      src={item.icon} 
                      alt={item.name} 
                      className={`max-w-full max-h-full object-contain ${item.name === 'Gemini AI' ? 'scale-[1.6]' : ''}`}
                      onError={(e) => {
                        // Fallback sederhana jika file SVG tidak tersedia
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const span = document.createElement('span');
                          span.innerText = item.name.substring(0, 1);
                          span.className = 'text-2xl font-bold text-gray-300';
                          parent.appendChild(span);
                        }
                      }}
                    />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-300 group-hover/item:text-black transition-colors duration-300 opacity-0 group-hover/item:opacity-100">
                    {item.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export const TechStackMarquee = memo(TechStackMarqueeComponent)
