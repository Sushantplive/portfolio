import './App.css'
import Contact from './components/Contact/Contact'
import FrontLine from './components/FrontLine/FrontLine'
import Projects from './components/Projects/Projects'
// import TechStack from './components/TechStack/TechStack'
import About from './components/About/About'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import CustomCursor from './components/CustomCursor/CustomCursor'
// import Experience from './components/Experience/Experience'

function App() {

  return (
    <>
      <CustomCursor />
      <Navigation />
      <div className="App relative z-10 w-full text-white pt-8">
        <div id="hero" className="transition-all duration-300 relative overflow-hidden">
          <FrontLine />
        </div>
        <div id="about" className="transition-all duration-300 relative">
          <About />
        </div>
        {/* <div id="experience" className="transition-all duration-300 relative">
          <Experience />
        </div> */}
        {/* <div id="tech-stack" className="transition-all duration-300 relative">
          <TechStack />
        </div> */}
        <div id="projects" className="transition-all duration-300 relative">
          <Projects />
        </div>
        <div id="contact" className="transition-all duration-300 relative bg-cyan-950/80">
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
