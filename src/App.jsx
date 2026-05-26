import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Ex01 from './pages/Ex01'
import Home from './pages/Home'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
    <Menu />
    <Footer />
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/ex01" element={<Ex01 />} />
    </Routes>
    </>
  )
}

export default App