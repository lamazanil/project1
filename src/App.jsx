import React from 'react'
import Navbar from './component/Navbar'
import ContactPage from './component/ContactPage'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './component/About'
import Location from './component/Location'

export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/Contact' element={<ContactPage/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Location' element={<Location/>}/>
    </Routes>
    </>
  )
}
