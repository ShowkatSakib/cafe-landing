import './App.css'
import Navbar from './components/Navbar'
import Reviews from './components/Reviews'

function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Reviews/>
      </main>
    </>
  )
}

export default App