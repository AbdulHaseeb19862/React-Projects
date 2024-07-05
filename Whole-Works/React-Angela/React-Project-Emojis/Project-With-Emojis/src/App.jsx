import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import emoList from './components/EmojisList'
import Emojis from './components/Emojis'
import './App.css'

function creatEmojis(items){
  return (
    <Emojis 
    id = {items.id}
    key = {items.id}
    emojis = {items.emojis}
    text = {items.text}
    des = {items.des}/>

  )

  
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='emoji-text-parent'>
        <h1 className='emo'>Emojipedia</h1>
    </div>
    <div style={{display:'flex', justifyContent: 'space-between', flex:'wrape'}}>
    {emoList.map(creatEmojis)}
    </div>

    {/* <div style={{display:'flex', justifyContent: 'space-between'}}>
    <Emojis />
    <Emojis />
    </div>
   */}
    </>
  )
}

export default App
