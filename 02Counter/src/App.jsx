import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  //let counter = 0;
  const addValue = ()=>{
    //console.log("Clicked Value added", Math.random());
    // counter = counter+1;
    // setCounter(counter)
    if (counter<10) {
      setCounter(counter+=1)
    }
    console.log("Counter is : ", counter);
  }
  
  const removeValue = ()=>{
    if (counter>=1) {
      setCounter(counter-=1);
    }
    console.log("Counter is : ", counter);
  }
  return (
    <>
      <h1>Hii React</h1>
      <h2>Value :{counter}</h2>
      <button onClick = {addValue}>Add Value</button>
      <br />
      <button onClick = {removeValue}>Remove Value</button>
    </>
  )
}

export default App
