import Navbar from '@/components/features/navbar/Navbar'
import HeroSection from '@/components/features/hero/HeroSection'
import { ProjectCarousel, type ProjectDetail } from '@/components/features/projects/ProjectCarousel'

const DAFTAR_PROYEK: ProjectDetail[] = [
  {
    id: 1,
    title: 'Kerjabaik.ai — HR Platform',
    description:
      'A modern web-based talent and HR management system with AI integration for performance tracking.',
    longDescription:
      'Kerjabaik.ai is a next-generation human resource management platform that leverages artificial intelligence to automate recruitment processes, performance appraisals, and talent management. The platform is designed to help medium to large-scale organizations make more accurate and efficient data-driven decisions.',
    techStack: ['React', 'Next.js', 'PostgreSQL', 'OpenAI', 'Supabase'],
    imageUrl:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
    githubUrl: '#',
    liveUrl: '#',
    year: '2024',
    role: 'Full Stack Developer',
  },
  {
    id: 2,
    title: 'Financial Analytics Dashboard',
    description:
      'A financial analytics dashboard interface with interactive charts and real-time data synchronization.',
    longDescription:
      'A comprehensive financial data visualization solution that allows finance managers to monitor cash flow, income statements, and budget projections through an intuitive interface. Features smart notifications and automatic report exports (PDF/Excel).',
    techStack: ['TypeScript', 'Tailwind CSS', 'Recharts', 'React Query', 'Prisma'],
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    githubUrl: '#',
    liveUrl: '#',
    year: '2024',
    role: 'Frontend Developer',
  },
  {
    id: 3,
    title: 'Multi-Platform Shopping App',
    description:
      'A mobile shopping application with centralized state management and offline-first optimization.',
    longDescription:
      'A cross-platform e-commerce application built with React Native, supporting a seamless shopping experience even with unstable internet connections. Key features include persistent shopping carts, integrated payment systems, and location-based push notifications.',
    techStack: ['React Native', 'Zustand', 'Supabase', 'Stripe', 'Expo'],
    imageUrl:
      'https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2070&auto=format&fit=crop',
    githubUrl: '#',
    liveUrl: '#',
    year: '2023',
    role: 'Mobile Developer',
  },
  {
    id: 4,
    title: 'Content Management System',
    description:
      'A modular CMS for organizations with multi-level content approval workflows and audit logs.',
    longDescription:
      'A content management system built from the ground up to meet the needs of organizations with complex editorial structures. Supports multi-level workflows, content versioning, automated publication scheduling, and integration with various content distribution platforms.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Zod', 'Framer Motion'],
    imageUrl:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop',
    githubUrl: '#',
    liveUrl: '#',
    year: '2023',
    role: 'Full Stack Developer',
  },
]

/**
 * App — Root component portofolio.
 */
function App() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      <Navbar />
      <HeroSection />
      <ProjectCarousel projectList={DAFTAR_PROYEK} />
    </main>
  )
}

export default App
