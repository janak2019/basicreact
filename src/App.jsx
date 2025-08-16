import React from 'react'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/auth/login/Login'

const App = () => {
  return (
   
   
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />


    </Routes>
   
   </BrowserRouter>
  )
}

export default App