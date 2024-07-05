import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [num, setNum] = useState(0)
  const [nums, setNums] = useState(0)

  useEffect(() => {
    alert("I am clicked")
  },[num])

  return (
    <>
    <div>
      <button onClick={() => setNum(num + 1)}>Click Me {num} </button>
      <button onClick={() => setNums(nums + 1)}>Click Me {nums} </button></div>
      
      
    </>
  )
}

export default App
