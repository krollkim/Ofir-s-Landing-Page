import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import PersonalTraining from './components/PersonalTraining'
import Workshops from './components/Workshops'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <PersonalTraining />
      <Workshops />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
