import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Card from './components/card.jsx'


export function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    name: "Alok",
    age: 21
  }
  let myArr = [1, 2, 3, 4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card username="Alok" Address="Naibazar" />
      <Card username="Golu" Address="Ayodhya" />
    </>
  )
}
