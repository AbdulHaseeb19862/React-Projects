import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function increase(){
    setCount(count+1)
  }
  function decreace(){
    setCount(count-1)
  }
  return (
    <>
    <div>
      <h1>{count}</h1><br /><br />
      <button onClick={increase}>+</button><br /><br />
      <button onClick={decreace}>-</button></div>
    </>
  )
}

export default App
