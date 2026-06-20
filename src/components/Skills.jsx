import { useEffect, useRef } from 'react'
import TagCloud from 'TagCloud'
import './Skills.css'

const SKILLS_LIST = [
  'HTML', 'CSS', 'Javascript', 'React', 'Node js', 'Express js',
  'MongoDB', 'Python', 'figma', 'Swift', 'Xcode', 'C', 'C++'
]

export default function Skills() {
  const containerRef = useRef(null)
  const isInstantiated = useRef(false)

  useEffect(() => {
    if (isInstantiated.current) return
    isInstantiated.current = true

    if (containerRef.current) {
      // Mix our skills with 120 bullet points evenly to spread them across the sphere
      const mixedItems = []
      const dotsCount = 120
      let dotCounter = 0
      const step = dotsCount / SKILLS_LIST.length

      for (let i = 0; i < SKILLS_LIST.length; i++) {
        mixedItems.push(SKILLS_LIST[i])
        // Distribute dots evenly between skills
        const numDotsToInsert = Math.round((i + 1) * step) - dotCounter
        for (let j = 0; j < numDotsToInsert; j++) {
          mixedItems.push('•')
          dotCounter++
        }
      }

      // Shuffle the mixedItems so they are randomly, but broadly, distributed on the sphere
      // This prevents them from forming a single line or cluster due to fibonacci resonance
      for (let i = mixedItems.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mixedItems[i], mixedItems[j]] = [mixedItems[j], mixedItems[i]];
      }

      const isMobile = window.innerWidth < 600
      const sphereRadius = isMobile ? 180 : 340

      TagCloud(containerRef.current, mixedItems, {
        radius: sphereRadius,
        maxSpeed: 'fast',
        initSpeed: 'fast',
        direction: 135,
        keep: true,
      })

      // Post-process to apply distinct classes to text vs dots
      setTimeout(() => {
        if (containerRef.current) {
          const spans = containerRef.current.querySelectorAll('span')
          spans.forEach(span => {
            if (span.innerText === '•') {
              span.classList.add('skill-dot')
            } else {
              span.classList.add('skill-text')
            }
          })
        }
      }, 50)
    }
    
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
        isInstantiated.current = false
      }
    }
  }, [])

  return (
    <section className="skills section" id="skills">
      <div className="orb orb-amber skills__orb" />
      <div className="container skills__container">
        <div className="skills__header">
          <p className="section-label" style={{ justifyContent: 'center' }}>What I Know</p>
          <h2 className="section-title">
            My <span>Skills</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto 40px', textAlign: 'center' }}>
            A collection of technologies I work with.
          </p>
        </div>

        {/* The Box */}
        <div className="skills__box glass-card">
          <div className="skills__box-inner">
            {/* The interactive synchronized sphere */}
            <div className="skills__tagcloud">
              <div ref={containerRef}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
