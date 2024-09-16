import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Books from './pages/Books'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
function App() {
 

  return (
    <>
   {/* <SignUp/> */}
   <Login/>
    <Books/>
    </>
  )
}

export default App
