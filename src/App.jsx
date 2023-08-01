import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Topnav from './components/Topnav'
import Hero from './components/Hero'
import Content1 from './components/Content1'
import Content2 from './components/Content2'
Navbar
Topnav

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Topnav />
      <Navbar />
      <Hero />
      <Content1 />
      <Content2 />
    </>
  )
}

export default App
