import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import GradientBlinds from './components/GradientBlinds'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Dynamic Background */}
      <div className="background-blinds" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
        <GradientBlinds
          gradientColors={['#0a0a0a', '#111111', '#1a1a1a', '#241005', '#f97316']}
          angle={30}
          noise={0.15}
          blindCount={12}
          blindMinWidth={50}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="normal"
        />
      </div>
      
      {/* Foreground Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
