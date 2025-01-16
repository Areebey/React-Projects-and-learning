import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter, setCounter] = useState(15)
  // let counter = 15

  const addValue = ()=>{
    setCounter(counter + 1)
    if(counter > 19){
      alert("Its out of limit - Stack reset")
      setCounter(0)
    }
    // console.log("Clicked", counter)
  }

  const removeValue = () =>{
    setCounter(counter - 1)
    if(counter < 1){
      alert("Negative value isn't allowed- Stack reset")
      setCounter(0)
    }
  }
  return (
    <>
      <h1>Basic Counter Project</h1>
      <h3>Counter Value: {counter}</h3>

      <button
      onClick={addValue}
      >Add value</button>
      {/* <br/> */}
      <button
      onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App
