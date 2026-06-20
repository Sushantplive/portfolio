import './App.css'
import Contact from './components/Contact/Contact'
import FrontLine from './components/FrontLine/FrontLine'
import Projects from './components/Projects/Projects'
// import TechStack from './components/TechStack/TechStack'
import About from './components/About/About'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import Experience from './components/Experience/Experience'

function App() {

  return (
    <>
      <Navigation />
      <div className="App relative z-10 w-full text-theme pt-8">
        <div className="transition-all duration-300 relative overflow-hidden">
          <FrontLine />
        </div>
        <div className="transition-all duration-300 relative">
          <About />
        </div>
        <div className="transition-all duration-300 relative">
          <Experience />
        </div>
        {/* <div id="tech-stack" className="transition-all duration-300 relative">
          <TechStack />
        </div> */}
        <div className="transition-all duration-300 relative">
          <Projects />
        </div>
        <div className="transition-all duration-300 relative">
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
