import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import BigCard from './components/BigCard'
import About from './components/About'
import Project from './components/Project'
import Cert from './components/Cert'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar  />
      <BigCard />
      <About />
      <Project />
      <Cert />
      <footer className="text-center py-6">
        <p className="text-gray-600">&copy; 2025 Sudarshan Hegde. All rights reserved. <br />(ofcourse i have no rights reserved, please don't sue me 😅) </p>
      </footer>
    </>
  )
}

export default App
