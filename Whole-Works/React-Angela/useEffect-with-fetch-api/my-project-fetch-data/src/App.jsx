import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
useEffect (() => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
    console.log(res.data[0].title)
  }).catch(err => console.log(err))
},[count])

  return (
    <>
      <button onClick={() => setCount(count +1)}>Click Me {count}</button>
    </>
  )
}

export default App
