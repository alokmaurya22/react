import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'
function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [characterAllow, setCharacterAllow] = useState(false)
  const [Password, setPassword] = useState('')
  //use ref hook
  const passwordRef = useRef(null)

  // Password Generator Function
  const passGen = function passGenFn() {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    if (numberAllow) str += '0123456789'
    if (characterAllow) str += '!@#$%^&*()_+'

    for (let i = 1; i <= length; i++) {
      let char = Math.floor((Math.random() * str.length) + 1)
      pass += str.charAt(char)
    }
    setPassword(pass);
  }


  const passwordGenerator = useCallback(passGen, [length, numberAllow, characterAllow, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllow, characterAllow, passwordGenerator])

  const copyPasswordToClickboard = useCallback(() => {
    //window.navigator.clipboard.writeText(Password)
    passwordRef.current?.select();
    //passwordRef.current?.setSelectionRange(0, 6); //For 6 digit password copy
  }, [Password])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-800'>
        <h1 className='text-3xl text-center text-white my-6'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={Password} className='w-full px-3 py-2 outline-none' placeholder='Password' readonly
            ref={passwordRef} />
          <button onClick={copyPasswordToClickboard}
            className='py-1 px-3 bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" min={6} max={25} value={length} className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllow}
              id="numberInput"
              onChange={() => { setNumberAllow((prev) => !prev) }} />
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllow} id="charectersInput"
              onChange={() => { setCharacterAllow((prev) => !prev) }} />
            <label>Charecter</label>
          </div>
        </div>
      </div>
    </>
  )
} export default App
