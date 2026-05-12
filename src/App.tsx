import Navbar from '@/components/features/navbar/Navbar'
import HeroSection from '@/components/features/hero/HeroSection'
import { BagianProyek, type DetailProyek } from '@/components/features/projects/BagianProyek'
import { AboutMe } from '@/components/AboutMe'
import { TechStackMarquee } from '@/components/features/tech-stack/TechStackMarquee'
import { GetInTouch } from '@/components/features/contact/GetInTouch'
import { Footer } from '@/components/features/footer/Footer'

const DAFTAR_PROYEK: DetailProyek[] = [
  {
    id: 1,
    title: 'RestoPay - Point of Sale',
    description:
      'QR-based restaurant ordering system with integrated Xendit payment gateway for seamless and automated transactions.',
    longDescription:
      'RestoPay is a modern web-based point-of-sale system that leverages artificial intelligence to automate recruitment processes, performance appraisals, and talent management. The platform is designed to help medium to large-scale organizations make more accurate and efficient data-driven decisions.',
    techStack: ['laravel', 'Blade', 'MySQL', 'Xendit', 'Tailwind CSS'],
    imageUrl: '/Gambar 1 .png',
    githubUrl: '#',
    liveUrl: '#',
    year: '2024',
    role: 'Full Stack Developer',
  },
  {
    id: 2,
    title: 'SiCMS — AI-Powered Smart Digital Government Portal',
    description:
      'Intelligent content management system to accelerate transparent and accountable government information publication for citizens.',
    longDescription:
      'SiCMS is a government-scale content management system designed to streamline the publication of official information. The platform integrates AI-powered content analysis, automated compliance checking, and multi-channel distribution to ensure transparency, accuracy, and accountability in public communication.',
    techStack: ['TypeScript', 'Tailwind CSS', 'Recharts', 'React Query', 'Prisma'],
    imageUrl: '/gambar 2.png',
    githubUrl: '#',
    liveUrl: '#',
    year: '2024',
    role: 'Frontend Developer',
  },
  {
    id: 3,
    title: 'JalanBaik AI: Computer Vision Road Infrastructure Monitoring System',
    description:
      'AI platform for automated road damage detection to ensure budget transparency and smart infrastructure maintenance.',
    longDescription:
      'A modern learning management system designed to support flexible and scalable education delivery. With multi-tenant architecture, the platform can be used by various institutions simultaneously while maintaining data isolation and security. Key features include AI-powered quiz generation, progress tracking, and integration with various learning tools.',
    techStack: ['React Native', 'Zustand', 'Supabase', 'Stripe', 'Expo'],
    imageUrl: '/gambar 3.png',
    githubUrl: '#',
    liveUrl: '#',
    year: '2023',
    role: 'Mobile Developer',
  },
  {
    id: 4,
    title: 'Modern LMS Platform',
    description:
      'Cloud-based multi-tenant LMS featuring AI-powered automated quiz generation for diverse organizations and institutions.',
    longDescription:
      'A content management system built from the ground up to meet the needs of organizations with complex editorial structures. Supports multi-level workflows, content versioning, automated publication scheduling, and integration with various content distribution platforms.',
    techStack: ['Next.js', 'TypeScript', 'Supabase', 'Zod', 'Framer Motion'],
    imageUrl: '/gambar 4.png',
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
      <AboutMe />
      <BagianProyek daftarProyek={DAFTAR_PROYEK} />
      <TechStackMarquee />
      <GetInTouch />
      <Footer />
    </main>
  )
}

export default App
