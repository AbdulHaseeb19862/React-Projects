import { useState } from 'react'
import MessageError from './components/MessageError';
import FoodItems from './components/FoodItems';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  let foodItem = ['Milk','Vegetables','Rotai','Fruit']
  // let foodItem = []
  // if(foodItem,length === 0 ){ 
  //   return <h3>I am hungry</h3>
  // }
  return (
    <>
    <h1>Healthy Foods</h1>
    <MessageError item = {foodItem} />
    <FoodItems item = {foodItem} />
      
    </>
  )
}

export default App
