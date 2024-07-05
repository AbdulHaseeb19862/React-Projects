import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './components/Form'
import './App.css'

var registeration = false;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Form registered = {registeration} />
    </>
  )
}

export default App
