
import './App.css'
import LoginForm from  './components/Login'
import CreateAccount from './components/CreateAccount'
import { Route , Routes } from 'react-router-dom'
import logo from '/logo.svg'
import Accueil from './components/Accueil'
import Profile from './components/Profile'
import NavBar from './components/NavBar'
import ModifyMyColor from './components/ModifyMyColor'
import AddUser from './components/AddUser'
import UsersList from './components/UsersList'
import FetchUsers from './components/FetchUsers'
import ShowDetails from './components/ShowDetails'

function App() {
  return (<>
    <main>
      <header>
        <img src={logo} />
      </header>
      <section>
        <Routes>
          <Route path='/' element={<><LoginForm/><FetchUsers/></>} />
          <Route path='/create-account' element={<CreateAccount/>}/>
          <Route path='/accueil/:id' element={<><NavBar/><Accueil/></>}/>
          <Route path='/profile/:id' element={<><NavBar/><Profile/></>} />
          <Route path='/modify-color/:id' element={<ModifyMyColor/>} />
          <Route path='/add-user' element={<AddUser/>} />
          <Route path='/users-list' element={<UsersList/>} />
          <Route path='/show-details/:id' element={<ShowDetails/>} />
        </Routes>
      </section>
    </main>

  </>)
}

export default App
