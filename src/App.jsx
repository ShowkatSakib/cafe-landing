import './App.css'
import Navbar from './components/Navbar'
import Reviews from './components/Reviews'
import Menu from './components/Menu'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Reviews/>
        <Menu/>
        <Hero />
      </main>
    </>
  )
}

export default App