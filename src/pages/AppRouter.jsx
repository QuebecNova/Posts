import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import EmptyPage from './EmptyPage'
import Posts from '../components/Posts/Posts'
import About from './About'
import PostDetailed from './PostDetailed'
import { useSelector } from 'react-redux/es/exports'
import Login from './Login'

export default function AppRouter() {

  const user = useSelector(state => state.user)

  return (
    <div className="App">
        {localStorage.getItem('auth') || user.isAuth
          ?
          <Routes>
            <Route path='*' element={<EmptyPage/>}/>
            <Route path='/posts' element={<Posts/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/posts/:id' element={<PostDetailed/>}/>
          </Routes>
          :
          <Routes>
            <Route path='*' element={<Navigate to='/login'/>}/>
            <Route path='/login' element={<Login/>}/>
          </Routes>
        }
    </div>
  )
}
