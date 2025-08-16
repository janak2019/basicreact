import React from 'react'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Form from './components/Form/Form'

const App = () => {
  return (
   
   
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/login' element={<Form/>} />


    </Routes>
   
   </BrowserRouter>
  )
}

export default App