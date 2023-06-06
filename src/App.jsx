import './App.css'
import  { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Update from './pages/Update'
import Create from './pages/Create'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/create' element={<Create />}/>
        <Route path='/edit/:id' element={<Update />}/>
      </Routes>
    </div>
  )
}

export default App
