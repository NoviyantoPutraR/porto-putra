import { cn } from '@/lib/utils'
import { MoveRight } from 'lucide-react'

// Interface Data Proyek sesuai rancangan Blueprint
export interface Project {
  id: number | string
  title: string
  description: string
  techStack: string[]
  imageUrl: string
  href?: string
  className?: string
}

interface ProjectGridProps {
  title: string
  description: string
  backgroundLabel?: string
  backgroundPosition?: 'left' | 'right'
  projects?: Project[]
  className?: string
  onProjectClick?: (project: Project) => void
}

/**
 * ProjectGrid — Menampilkan daftar proyek dalam bentuk grid responsif
 * Desain didasarkan pada template artikel dengan gubahan data struktur portofolio.
 */
export const ProjectGrid = ({
  title,
  description,
  backgroundLabel,
  backgroundPosition = 'left',
  projects = [],
  className,
  onProjectClick,
}: ProjectGridProps) => {
  return (
    <section
      id="projects"
      className={cn('container relative my-20 py-10 mx-auto px-4 lg:px-8', className)}
    >
      <h2 className="text-center text-4xl font-sans font-bold capitalize !leading-[1.4] md:text-5xl lg:text-6xl mb-4 text-[#0a0a0a]">
        {title}
      </h2>

      {/* Latar Teks Watermark Besar */}
      {backgroundLabel && (
        <span
          className={cn(
            'absolute -top-10 -z-50 select-none text-[180px] font-extrabold leading-[1] text-black/[0.03] md:text-[250px] lg:text-[400px]',
            backgroundPosition === 'left' ? '-left-[18%]' : '-right-[28%]'
          )}
        >
          {backgroundLabel}
        </span>
      )}

      <p className="mx-auto max-w-[800px] text-center text-xl !leading-[1.8] text-[#6b7280] md:text-2xl mb-12">
        {description}
      </p>

      {/* Area Grid Proyek */}
      <div className="grid h-auto lg:h-[700px] grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6">
        {projects.map((project, index) => {
          const {
            id,
            title: projectTitle,
            description,
            techStack,
            imageUrl,
            className: postClassName,
          } = project

          // Proyek pertama akan memiliki ukuran ganda (menonjol)
          const isPrimary = index === 0

          return (
            <div
              key={id || index}
              style={{ backgroundImage: `url(${imageUrl})` }}
              className={cn(
                'group relative w-full h-[350px] lg:h-full flex cursor-pointer flex-col justify-end overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat p-6 text-white transition-all duration-300 hover:-rotate-1 hover:scale-[0.98]',
                isPrimary ? 'lg:col-span-2 lg:row-span-2' : 'lg:col-span-1 lg:row-span-1',
                postClassName
              )}
              onClick={() => onProjectClick?.(project)}
            >
              {/* Overlay Gelap Dinamis */}
              <div className="absolute inset-0 -z-0 h-[150%] w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-500 group-hover:h-full" />

              <article className="relative z-10 flex items-end justify-between">
                <div className="flex flex-1 flex-col gap-3">
                  <h3 className="text-3xl font-bold md:text-4xl text-white tracking-tight">
                    {projectTitle}
                  </h3>
                  
                  {/* Container Deskripsi & Tech Stack */}
                  <div className="flex flex-col gap-4 mt-2">
                    <p className="text-gray-200 text-sm md:text-base font-medium max-w-[90%] line-clamp-2 md:line-clamp-3 leading-relaxed">
                      {description}
                    </p>
                    
                    {/* Deretan Tag Teknologi */}
                    <div className="flex flex-wrap items-center gap-2">
                      {techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs md:text-sm font-semibold py-1 px-3 rounded-full bg-white/20 text-white backdrop-blur-md border border-white/20 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <MoveRight
                  className="transition-transform duration-300 group-hover:translate-x-3 mb-2 shrink-0"
                  color="white"
                  width={36}
                  height={36}
                  strokeWidth={1.5}
                />
              </article>
            </div>
          )
        })}
      </div>
    </section>
  )
}
