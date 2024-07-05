import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  setInterval(update,1000);
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now)

  function update(){
    const updateTime = new Date().toLocaleTimeString();
    setTime(updateTime)
  }
  return (
    <>
     <div>
      <h1>{time}</h1>
      <button onClick={update}>Get Time</button>
     </div>
    </>
  )
}

export default App
