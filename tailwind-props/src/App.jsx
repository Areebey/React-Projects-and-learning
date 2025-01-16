// import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)
 let myObj={
  name: "Areeb",
  age: 20
 }
 let myArr=[1,2,3]
  return (
    <>
      <h1 className='bg-green-500 p-4 text-black rounded-xl mb-5 '>Tailwind Css</h1>
      <Card username="Jenna" btnText="Click me" />
      <Card username="Keil" />
    </>
  )
}

export default App
