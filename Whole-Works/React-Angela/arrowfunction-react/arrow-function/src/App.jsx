import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import note from './components/Notelist'
import NoteDetail from './components/Note'
import './App.css'

// function isDone(){
//   var value = false;
//   const strikeThrough = {textDecoration: "line-through"};
//   return <h3 style={value ? strikeThrough : null}>Milk</h3>
// }

function strike(){
  document.getElementById('h3').style.textDecoration = "line-through";
}
function unStrike(){
  document.getElementById('h3').style.textDecoration = null;
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <NoteDetail title = "This is the note title"  content = "This is the note content" /> */}
    {note.map(item =><NoteDetail title = {item.title}content = {item.content} />)}
    {/* {isDone()} */}
    <h3 id='h3'>Milk</h3>
    <button onClick={strike}>Click Line-Through</button>
    <br />
    <button onClick={unStrike}>Change</button>
    
    </>
  )
}

export default App
