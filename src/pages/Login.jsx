import React from 'react'
import Button from '../components/UI/Button'
import Input from '../components/UI/Input'
import { useDispatch } from 'react-redux/es/exports'
import { authenticate } from '../store/slices/userSlice'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function login(e) {
        e.preventDefault()
        dispatch(authenticate(true))
        navigate('/posts')
    }

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={login}>
            <Input type='text' placeholder='Введите логин'/>
            <Input type='password' placeholder='Введите пароль'/>
            <Button>Войти</Button>
        </form>
    </div>
  )
}
