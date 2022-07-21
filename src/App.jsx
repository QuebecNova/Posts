import React, { useEffect } from "react"
import { HashRouter } from "react-router-dom"
import AppRouter from "./pages/AppRouter"
import NavBar from "./pages/NavBar"
import { useDispatch } from "react-redux/es/exports"
import { authenticate } from "./store/slices/userSlice"

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            dispatch(authenticate(true))
        }
    }, [dispatch])
    
  return (
    <HashRouter>
        <NavBar/>
        <AppRouter/>
    </HashRouter>
  )
}

export default App
