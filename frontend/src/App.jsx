import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Books from './pages/Books'
import SignUp from './pages/SignUp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <SignUp/>
    <Books/>
    </>
  )
}

export default App
