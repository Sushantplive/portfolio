import './App.css'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import About from './components/About'
import ParticleBackground from './components/ParticleBackground'
import Navigation from './components/Navigation'
import Experience from './components/Experience'

function App() {

  return (
    <>
      <ParticleBackground />
      <Navigation />
      <div className="App relative z-10 w-full text-white pt-16">
        <div id="hero" className="transition-all duration-300">
          <Hero />
        </div>
        <div id="about" className="transition-all duration-300">
          <About />
        </div>
        <div id="experience" className="transition-all duration-300">
          <Experience />
        </div>
        <div id="tech-stack" className="transition-all duration-300">
          <TechStack />
        </div>
        <div id="projects" className="transition-all duration-300">
          <Projects />
        </div>
        <div id="contact" className="transition-all duration-300">
          <Contact />
        </div>
        
      </div>
    </>
  )
}

export default App
