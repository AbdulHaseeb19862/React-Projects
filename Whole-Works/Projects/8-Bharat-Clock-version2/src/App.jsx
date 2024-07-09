import { useState } from 'react'
import ClockHeading from './components/ClockHeading'
import ClockSlugan from './components/ClockSlugan'
import CurrentTime from './components/CurrentTime'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <center>
        <ClockHeading />
        <ClockSlugan />
        <CurrentTime />
      </center>
        
    </>
  )
}

export default App
