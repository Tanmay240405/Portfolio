import { ExternalLink, GitBranch, ChevronRight } from 'lucide-react'
import './Projects.css'

const PROJECTS = [
  {
    id: 1,
    title: 'ResumeForge AI',
    desc: 'An intelligent resume builder that leverages AI to generate ATS-optimized content, offering real-time scoring, tailored bullet points, and dynamic PDF generation.',
    tags: ['React', 'Vite', 'NLP', 'PDF'],
    cat: 'Web',
    featured: true,
    color: '#f97316',
    emoji: '📄',
    image: '/ResumeForgeAI.png',
    github: 'https://github.com/Tanmay240405/ResumeForgeAI.git',
    live: 'https://resume-forge-ai-iota.vercel.app/',
  },
  {
    id: 2,
    title: 'F1 Dashboard',
    desc: 'High-engagement F1 web app featuring a Neo-Brutalist UI with GSAP scroll-triggered motion sequences and cloud-integrated asset delivery via AWS S3.',
    tags: ['React', 'Charts', 'API', 'CSS'],
    cat: 'Web',
    featured: true,
    color: '#ef4444',
    emoji: '🏎️',
    image: '/F1.Experience.png',
    github: 'https://github.com/Tanmay240405/F1.experience.git',
    live: 'https://f1-experience-nu.vercel.app/',
  },
  {
    id: 3,
    title: 'Paint By Numbers AI',
    desc: 'Full-stack web platform that transforms user-uploaded images into paint-by-numbers templates via an ML pipeline combining image segmentation, color quantization, and contour extraction.',
    tags: ['Python', 'OpenCV', 'K-Means'],
    cat: 'ML',
    featured: false,
    color: '#14b8a6',
    emoji: '🎨',
    image: '/PaintbyNumbers.png',
    github: 'https://github.com/Tanmay240405/Paint-By-Number-web.git',
    live: 'https://paint-by-numbers-beta.vercel.app/',
  },
  {
    id: 4,
    title: 'ABCD (Any Body Can Draw)',
    desc: 'Native iOS app guiding users through face portrait creation using Apple’s Vision framework for facial landmark detection, PencilKit for Pencil input, and CoreImage for real-time processing.',
    tags: ['iOS', 'Vision', 'PencilKit'],
    cat: 'Tools',
    featured: false,
    color: '#8b5cf6',
    emoji: '✍️',
    image: 'coming-soon',
    github: 'https://github.com/Tanmay240405/ABCD_AnyBodyCanDraw.git',
    live: null,
  },
]

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="orb orb-orange projects__orb" />
      <div className="container">
        <p className="section-label">What I've Built</p>
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>
        <p className="section-subtitle">
          A selection of projects across web development, machine learning, and creative tooling.
        </p>

        {/* Grid */}
        <div className="projects__featured">
          {PROJECTS.map(p => <ProjectCard key={p.id} project={p} big />)}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project: p, big }) {
  return (
    <article className={`project-card glass-card ${big ? 'project-card--big' : ''}`}>
      {/* Header */}
      <div className="project-card__header" style={{ '--accent': p.color }}>
        {p.featured && <span className="project-badge">Featured</span>}
      </div>

      {/* Image / Coming Soon */}
      <div className="project-card__image-container">
        {p.image === 'coming-soon' ? (
          <div className="project-card__coming-soon">
            <span>COMING SOON</span>
          </div>
        ) : (
          <img src={p.image} alt={p.title} className="project-card__image" />
        )}
        <div className="project-card__overlay">
          <p className="project-desc">{p.desc}</p>
        </div>
      </div>

      {/* Body */}
      <div className="project-card__body">
        <div className="project-title-row">
          <span className="project-emoji">{p.emoji}</span>
          <h3 className="project-title">{p.title}</h3>
        </div>
      </div>

      {/* Footer */}
      <div className="project-card__footer">
        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          id={`github-${p.id}`}
          aria-label={`${p.title} GitHub`}
        >
          <GitBranch size={16} />
          Code
        </a>
        {p.live && (
          <a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link project-link--live"
            id={`live-${p.id}`}
            aria-label={`${p.title} live demo`}
          >
            <ExternalLink size={16} />
            Live Demo
            <ChevronRight size={14} />
          </a>
        )}
      </div>
    </article>
  )
}
