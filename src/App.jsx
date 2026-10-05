import './App.css'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Menu/>
        <Hero />
      </main>
    </>
  )
}

export default App