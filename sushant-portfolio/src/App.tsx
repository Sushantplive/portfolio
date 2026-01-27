import './App.css'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import About from './components/About'
import Navigation from './components/Navigation'
import Experience from './components/Experience'

function App() {

  return (
    <>
      <Navigation />
      <div className="App relative z-10 w-full text-white space-y-16 pt-8">
        <div id="hero" className="transition-all duration-300 py-12 relative overflow-hidden">
          <Hero />
        </div>
        <div id="about" className="transition-all duration-300 relative">
          <About />
        </div>
        <div id="experience" className="transition-all duration-300 relative">
          <Experience />
        </div>
        <div id="tech-stack" className="transition-all duration-300 relative">
          <TechStack />
        </div>
        <div id="projects" className="transition-all duration-300 relative">
          <Projects />
        </div>
        <div id="contact" className="transition-all duration-300 relative">
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App
