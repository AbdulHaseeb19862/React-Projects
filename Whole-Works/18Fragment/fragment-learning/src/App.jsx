import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  let foodList = ['Milk','Rotai','Salad','Fruit','Vegetables','Meat']
  return (
    <>
    <h1>Healthy Foods</h1>
    <ul className="list-group">
    {foodList.map((item) => (
       <li key={item} className="list-group-item">{item}</li>

    ))}
   
</ul>
     
    </>
)
}

export default App
