import { GitBranch, Link2, Mail, Heart, ArrowUp } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer" id="contact">
      {/* Contact CTA */}
      <div className="footer__cta">
        <div className="container footer__cta-inner">
          <div className="orb orb-orange footer__orb" />
          <p className="section-label">Let's Connect</p>
          <h2 className="footer__cta-title">
            Have a project in mind?<br />
            <span>Let's build something great.</span>
          </h2>
          <p className="footer__cta-sub">
            I'm currently open to freelance work and full-time roles.<br />
            Drop me a message and let's talk!
          </p>
          <a
            href="mailto:tanmaysaxena2404@gmail.com"
            className="btn-primary footer__cta-btn"
            id="send-email-btn"
          >
            <Mail size={18} />
            Say Hello
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bar">
        <div className="container footer__bar-inner">
          <span className="footer__logo">
            <span className="logo-bracket">&lt;</span>Tanmay<span className="logo-bracket">/&gt;</span>
          </span>



          <div className="footer__socials">
            <a href="https://github.com/Tanmay240405" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <GitBranch size={18} />
            </a>
            <a href="https://www.linkedin.com/in/tanmay-saxena-1389802b1/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <Link2 size={18} />
            </a>
            <a href="mailto:tanmaysaxena2404@gmail.com" className="social-link" aria-label="Email">
              <Mail size={18} />
            </a>
            <button className="social-link scroll-top-btn" onClick={scrollTop} aria-label="Scroll to top">
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
