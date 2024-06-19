import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from './views/Login'
import { Header } from './components/Header'
import { SignUp } from './views/SignUp'
import { Home } from './views/Home'

export default function App() {

  return (
    <>
      <div className='container mt-5'>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
        </Routes>
      </div>
    </>
  )
}