import './App.css'
import Header from './shared/Header'
import Login from './pages/Login'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import Register from './pages/Register'
import WhatsAppIcon from './pages/home/components/WhatsAppIcon'


function App() {
  
  return (
    <>
    <BrowserRouter>
    <Header />
    <WhatsAppIcon />
    <Routes >
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
