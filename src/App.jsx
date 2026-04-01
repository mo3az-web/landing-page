import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Categories from './components/Categories'
import About from './components/About'
import Gallery from './components/Gallery'
function App() {
  

  return (
<>
<Navbar/>
<Hero/>
<Categories/>
<Products/>
<About/>
<Gallery/>
</>
  )
}

export default App
