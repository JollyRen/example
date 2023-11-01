import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Cart } from './components/Cart'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import { Navbar } from './components/Navbar'
import { View } from './components/View'
import './style/index.css'

const App = () => {
  const [cart, setCart] = useState([])
  useEffect(() => {
    const localCart = localStorage.getItem('cart')
    if (localCart) setCart(JSON.parse(localCart))
    else localStorage.setItem('cart', JSON.stringify(cart))
  }, [])
  return (
    <>
      {/* Navigation Component */}
      <header>
        <Navbar />
      </header>
      {/* Routes */}
      <main>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Cart" element={<Cart cart={cart} setCart={setCart} />} />
            <Route path="/View/:id" element={<View cart={cart} setCart={setCart} />} />
          </Routes>
        </div>
      </main>
      {/*  Footer */}
      <footer>
        <div className="foot">
          <p>(c) 1899 Zigs Capstone Inc</p>
        </div>
      </footer>
    </>
  )
}

export default App
