import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Swap from './pages/Swap'

function App() {

  return (
    <div>
      <Routes>  
        <Route path='/' element={<Home />} />
        <Route path='/swap' element={<Swap />} />
      </Routes>
    </div>
  )
}

export default App
