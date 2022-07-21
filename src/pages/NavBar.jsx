import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/UI/Button'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { authenticate } from '../store/slices/userSlice'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const navigate = useNavigate()

    function logoutOrLogin() {
      user.isAuth 
      ? dispatch(authenticate(false))
      : navigate('/login')
    }

  return (
    <nav>
        <div className='login'>
          <Button onClick={logoutOrLogin}>{user.isAuth ? 'Выйти' : 'Войти'}</Button >
        </div>
        <div className='links'>
          <Link to="/posts">Посты</Link>
          <Link to="/about">About</Link>
        </div>
    </nav>
  )
}
