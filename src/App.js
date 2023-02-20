import {Routes, Route} from 'react-router-dom'
import { Login, Main, Navbar, Register } from './components';

function App() {
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App;