import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import list from './components/ContactList'
import ContactCard from './components/ContactCard'
import './App.css'

function createCard(items){
  return (
    <ContactCard
    id = {items.id}
    key = {items.id}
    name = {items.personName}
    img = {items.img}
    email = {items.email} 
    phone = {items.phone} />
  )
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>My Contacts</h1>
    {list.map(createCard)}
     
    </>
  )
}

export default App
