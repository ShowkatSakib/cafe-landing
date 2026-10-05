import './App.css'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Reviews from './components/Reviews'
import Menu from './components/Menu'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Contact/>
        <Reviews/>
        <Menu/>
        <Hero />
      </main>
    </>
  )
}

export default App