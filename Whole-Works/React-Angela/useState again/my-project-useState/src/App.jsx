import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function increasing(){
    return setCount(count + 1);
  }

  function decreasing(){
    return setCount(count -1);
  }

  return (
    <>
      <div>
        <h1>{count}</h1><br /><br />
        <button onClick={increasing}>+</button><br /><br />
        <button onClick={decreasing}>-</button><br /><br />
      </div>
    </>
  )
}

export default App
