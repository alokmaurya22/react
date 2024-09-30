import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Componants/Login'
import Profile from './Componants/Profile'

function App() {
  const [count, setCount] = useState()

  return (
    <UserContextProvider>
      <h1>React with context</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
