import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import 'leaflet/dist/leaflet.css';
import { About, Category, Contact, Header, MyFooter, Navbar, Product } from './Components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Header/>
    <Product/>
    <Category/>
    <About/>
    <Contact/>
    <MyFooter/>
    </>
  )
}

export default App
