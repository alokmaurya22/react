import { useState } from 'react'
import './App.css'

function App() {
  const colors = ["Red", "Blue", "Green", "Purple", "Orange", "Pink", "Brown", "Black", "Gray", "Cyan", "Magenta"];
  const [color, setColor] = useState("white")

  return (
    <>
      <h1 className="text-3xl font-bold underline">Color Changer</h1>
      <div className="w-full h-screen duration-200 border-2 border-black" style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl border-2 border-black'>
            {/*
                        <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "red" }} >Red</button>
                        <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "green" }} >Green</button>
                        <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "blue" }} >Blue</button>
                        <button onClick={() => setColor("Yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "Yellow" }} >Yellow</button>
                        <button onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "black" }} >Black</button>
                        <button onClick={() => setColor("White")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "White" }} >White</button>
                        */
            }
            {colors.map(colorName => (
              <button key={colorName} onClick={() => setColor(colorName)} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: colorName }} >{colorName}</button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
} export default App
