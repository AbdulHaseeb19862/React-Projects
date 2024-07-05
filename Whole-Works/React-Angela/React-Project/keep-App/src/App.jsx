import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Footer from './components/Footer'
import Note from './components/Note'
import ContactCard from './components/Contact'
import './App.css'
import './index.css'

// function Card(props){
//    return (
//     <div>
//       <h2>{props.name}</h2>
//       <img 
//       src={props.img}
//       alt="avatar_img" style={{width: 300, marginTop:30, marginBottom: 30 }}/>
//       <p>{props.tel}</p>
//       <p>{props.email}</p>
//     </div>
//    )
// }

// function YourCard(props){
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <img 
//       src= {props.img}
//       alt="my-detail" />
//       <p>{props.address}</p>
//       <p>{props.email}</p>
//     </div>
//   )
// }

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <div>
     <Header />
      <Note />
     <Footer /></div> */}
     {/* <div>
      <Card name ="Beyonce" img = "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" tel = "+12356789" email= "b@bgmail.com" />
     </div>

     <div>
     <YourCard name = "Abdul Haseeb" img = "https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/passport/1-change1.jpg" address = "Forest Bazar Peshawar" contact ="+923357490115" email = "haseeb@gmail.com" />
     </div> */}
    <h1>My Contact</h1>
    <ContactCard 
    name= "Abdul Haseeb" 
    img = "https://images.pexels.com/photos/4100667/pexels-photo-4100667.jpeg"
    email = "Email : haseebbangash115@gmail.com"
    phone = "Phone : 03335-7490115" />

     
    </>
  )
}

export default App
