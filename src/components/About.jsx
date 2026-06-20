import { Code2, Lightbulb, Rocket, Heart } from 'lucide-react'
import Lanyard from './Lanyard'
import './About.css'

const generateBadgeImage = () => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="600">
      <rect width="100%" height="100%" fill="#111111" />
      <rect width="100%" height="80" fill="#f97316" />
      <text x="200" y="52" font-family="sans-serif" font-size="32" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="2">DEVELOPER PASS</text>
      
      <text x="200" y="160" font-family="sans-serif" font-size="46" font-weight="800" fill="#f97316" text-anchor="middle">Tanmay</text>
      <text x="200" y="210" font-family="sans-serif" font-size="22" font-weight="600" fill="#f1f5f9" text-anchor="middle">Full Stack Developer</text>
      
      <rect x="40" y="260" width="320" height="2" fill="#333333" />
      
      <text x="50" y="320" font-family="sans-serif" font-size="20" fill="#94a3b8">Location</text>
      <text x="350" y="320" font-family="sans-serif" font-size="22" font-weight="600" fill="#f1f5f9" text-anchor="end">India</text>
      
      <text x="50" y="380" font-family="sans-serif" font-size="20" fill="#94a3b8">Focus</text>
      <text x="350" y="380" font-family="sans-serif" font-size="22" font-weight="600" fill="#f1f5f9" text-anchor="end">Full Stack + ML</text>
      
      <text x="50" y="440" font-family="sans-serif" font-size="20" fill="#94a3b8">Degree</text>
      <text x="350" y="440" font-family="sans-serif" font-size="22" font-weight="600" fill="#f1f5f9" text-anchor="end">B.Tech - CS</text>
      
      <text x="50" y="500" font-family="sans-serif" font-size="20" fill="#94a3b8">Status</text>
      <text x="350" y="500" font-family="sans-serif" font-size="22" font-weight="600" fill="#4ade80" text-anchor="end">Open to Work</text>
      
      <rect x="40" y="540" width="320" height="2" fill="#333333" />
    </svg>
  `;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="orb orb-orange about__orb" />
      <div className="container about__container">
        <div className="about__header">
          <p className="section-label" style={{ justifyContent: 'center' }}>Who I Am</p>
          <h2 className="section-title">
            About <span>Me</span>
          </h2>
        </div>

        <div className="about__lanyard-centered">
          <Lanyard
            position={[0, 0, 16]}
            gravity={[0, -20, 0]}
            frontImage={generateBadgeImage()}
            imageFit="cover"
          />
        </div>
      </div>
    </section>
  )
}
