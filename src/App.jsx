import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {Route, Routes} from 'react-router-dom'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Home from './Pages/Home/Home'


const App = () => {
  return (
    <div className='app'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/card' element={<Cart/>} />
      <Route path='/Order' element={<PlaceOrder/>} />
    </Routes>
      
    </div>
  )
}

export default App
