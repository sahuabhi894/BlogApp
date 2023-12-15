import { useState,useEffect } from 'react';
import './App.css'
import config from './config/config'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {logIn,logOut} from './store/authSlice'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'


function App() {
  const [loading,setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(logIn({userData}))
      } else {
        dispatch(logOut())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
