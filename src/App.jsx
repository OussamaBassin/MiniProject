
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

function App() {
  return (<>
    <FetchUsers/>
    <main className='w-screen h-screen flex flex-col items-center justify-center px-10 bg-gray-300'>
      <header className='h-1/5 flex items-center justify-center py-5'>
        <img src={logo} />
      </header>
      <section className='h-4/5 flex items-center justify-center'>
        <Routes>
          <Route path='/' element={<LoginForm/>} />
          <Route path='/create-account' element={<CreateAccount/>}/>
          <Route path='/accueil/:id' element={<>
            <div className='h-full w-full flex flex-col items-center'>
            <NavBar/>
            <Accueil/>
            </div>
          </>}/>
          <Route path='/profile/:id' element={<>
            <div className='h-full w-full flex flex-col items-center'>
            <NavBar/>
            <Profile/>
            </div>
          </>} />
          <Route path='/modify-color/:id' element={<ModifyMyColor/>} />
          <Route path='/add-user/:id' element={<AddUser/>} />
          <Route path='/users-list' element={<UsersList/>} />
        </Routes>
      </section>
    </main>

  </>)
}

export default App
