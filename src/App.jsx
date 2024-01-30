import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Help from './components/Help/Help'
import Footer from './components/Footer/Footer'
import TheCompany from './components/TheCompany/TheCompany'
import Careers from './components/Careers/Careers'
import Press from './components/Press/Press'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Shop from './components/Shop/Shop'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/shop/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/shop/category/:idCategory'/>
          <Route path='/about' element={<About/>}/>
          <Route path='/help' element={<Help/>}/>
          <Route path='/the-company' element={<TheCompany/>}/>
          <Route path='/careers' element={<Careers/>}/>
          <Route path='/press' element={<Press/>}/>
          <Route path='*' element={<h4>404 Not Found</h4>}/>          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App