import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './assets/bootstrap/css/bootstrap.min.css'
import UpdateUsers from './UpdateUser'
import Users from './Users'
import CreateUser from './CreateUser'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users />}></Route>
        <Route path='/create' element={<CreateUser />}></Route>
        <Route path='/update/:id' element={<UpdateUsers />}></Route>

      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
