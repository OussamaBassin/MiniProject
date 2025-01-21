
import './App.css'
import LoginForm from  './components/Login'
import FetchUsers from './components/FetchUsers'
import CreateAccount from './components/CreateAccount'
import { Route , Routes } from 'react-router-dom'

function App() {
  return (<>

    <Routes>
      <Route path='/' element={<LoginForm/>} />
      <Route path='/create-account' element={<CreateAccount/>}/>
      
    </Routes>

  </>)
}

export default App
