import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function strike(){
  document.getElementById('root').style.textDecoration = 'line-through'
}

function unStrike(){
  document.getElementById('root').style.textDecoration = null;
}

function App() {
  const [count, setCount] = useState(0);
  // const isDone = true;
  // const strikeThrough = { textDecoration: 'line-through' }

  return (
    <>
      <h1>Welcome back to react js</h1>
      <button onClick={strike}>Change To Line Through</button><br /> <br />
      <button onClick={unStrike}>Change Back</button>
      {/* <h1 style={isDone ? strikeThrough : null}>Welcome To React Js</h1> */}
      {/* {This method is Declarative} */}
    </>
  );
}

export default App;
