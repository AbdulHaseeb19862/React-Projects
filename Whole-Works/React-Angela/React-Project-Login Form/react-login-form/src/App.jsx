import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './components/Login'
import Input from './components/Input'
import './App.css'

var isLoggedIn = true;

// function renderConditionaly(){
//   if(isLoggedIn === true){
//     return<h1>Hello</h1>
//   }else{
//     return <Login />
//   }
// }

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
      {/* {renderConditionaly() } */}

      {isLoggedIn ? <h1>Hello</h1> : <Login /> }
      
    </div>
    </>
  )
}

export default App
