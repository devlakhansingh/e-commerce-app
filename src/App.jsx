import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProductContainer from './components/ProductContainer'
import Footer from './components/Footer'
import Login from './pages/Login'
import Landing from './components/Landing'
import CartContainer from './components/CartContainer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cartll from './components/Cartll'

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* <Home /> */}
      <Routes>



        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />

        <Route path='/cart' element={<CartContainer />} />
      </Routes>
      <ProductContainer />
      <Landing />

      <Footer />


    </Router>
  )
}

export default App
