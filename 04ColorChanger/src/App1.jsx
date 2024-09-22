// This is default and base project with tailwind where we are manually adding colors

import { useState } from 'react'
import './App.css'

function App() {
    const [color, setColor] = useState("olive")

    return (
        <>
            <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
                <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
                    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
                        <button
                            onClick={() => setColor("red")}
                            className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "red" }} >Red</button>
                        <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "green" }} >Green</button>
                        <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "blue" }} >Blue</button>
                        <button onClick={() => setColor("Yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "Yellow" }} >Yellow</button>
                        <button onClick={() => setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "black" }} >Black</button>
                        <button onClick={() => setColor("White")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "White" }} >White</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
