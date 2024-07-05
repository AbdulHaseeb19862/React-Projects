import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { allContacts } from './components/ContactsAll'
import ContactCard from './components/Contact'
import './App.css'

function CreateCard(contacts){
 return <ContactCard 
 id = {contacts.id}
 key = {contacts.id}
 name = {contacts.personName} 
 img= {contacts.img}
 email={contacts.email}
 phone={contacts.phone} />
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>My Contact</h1>
    {allContacts.map(CreateCard)}

    {/* {allContacts.map((items, index)=> (
      <ContactCard 
      id = {items.id}
      key = {index}
      name = {items.personName}
      img = {items.img}
      email={items.email}
      phone={items.phone}


      />

    ))} */}


    {/* <ContactCard 
    name= "Abdul Haseeb" 
    img = "https://images.pexels.com/photos/4100667/pexels-photo-4100667.jpeg"
    email = "Email : haseebbangash115@gmail.com"
    phone = "Phone : 03335-7490115" /> */}
    </>
  )
}

export default App
