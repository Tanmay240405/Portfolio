import { useEffect, useState } from 'react'
import { ArrowDown, GitBranch, Link2, Mail, Download } from 'lucide-react'
import './Hero.css'

const ROLES = [
  'Full Stack Developer',
  'iOS Developer',
  'AI & ML Enthusiast',
  'Problem Solver',
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [charIdx, setCharIdx] = useState(0)

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIdx]
    let timeout

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx + 1))
        setCharIdx(c => c + 1)
      }, 80)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx - 1))
        setCharIdx(c => c - 1)
      }, 45)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setRoleIdx(r => (r + 1) % ROLES.length)
    }

    return () => clearTimeout(timeout)
  }, [charIdx, deleting, roleIdx])

  return (
    <section className="hero section" id="hero">
      {/* Background orbs */}
      <div className="orb orb-orange hero__orb-1" />
      <div className="orb orb-amber  hero__orb-2" />

      {/* Grid lines */}
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__inner">
        {/* Text side */}
        <div className="hero__content">
          <h1 className="hero__name">
            Hi, I'm <span className="hero__name-highlight">Tanmay</span>
          </h1>

          <div className="hero__role">
            <span className="hero__role-text">{displayed}</span>
            <span className="hero__cursor">|</span>
          </div>

          <p className="hero__bio">
            I build web and iOS applications, turning ideas into functional and user-friendly products. Currently exploring AI, Machine Learning, and modern development technologies.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn-primary" id="view-work-btn">
              View My Work
              <ArrowDown size={16} />
            </a>
            <a href="mailto:tanmaysaxena2404@gmail.com" className="btn-outline" id="contact-btn">
              <Mail size={16} />
              Get In Touch
            </a>
          </div>

          <div className="hero__socials">
            <a
              href="https://github.com/Tanmay240405"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
              id="github-link"
            >
              <GitBranch size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/tanmay-saxena-1389802b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
              id="linkedin-link"
            >
              <Link2 size={20} />
            </a>
            <a
              href="mailto:tanmaysaxena2404@gmail.com"
              className="social-link"
              aria-label="Email"
              id="email-link"
            >
              <Mail size={20} />
            </a>
            <div className="social-divider" />
            <a href="/Tanmay%20Resume.pdf" download="Tanmay_Resume.pdf" className="hero__resume" id="resume-download">
              <Download size={14} />
              Resume
            </a>
          </div>
        </div>

        {/* Image side */}
        <div className="hero__visual">
          <div className="hero__img-wrap animate-float">
            <div className="hero__img-ring" />
            <img src="/hero.jpg" alt="Tanmay" className="hero__img" />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#about" className="hero__scroll-cue" aria-label="Scroll down">
        <span className="scroll-cue__dot" />
      </a>
    </section>
  )
}
