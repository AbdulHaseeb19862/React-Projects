import Heading from './components/Heading';
import FoodItems from './components/FoodItems';
import Container from './components/Container';
import Input from './components/Input';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useState } from 'react';


function App() {
  // const foodList = ['Milk','Dry Fruit','Fruit','Vegetable','Meal'];
  // const foodList = [];

  // let [textToShow,setText] = useState('Enter Food By Users')

  // function onChange(event){
  //   console.log(event)
  //   setText(event.target.value);
  // }
  
  let [foodList,setFoodList] = useState([]);
  function onKeyDown(event){
    if(event.key === "Enter"){
      let newFoodItem = event.target.value;
      event.target.value = '';
      const newItem = [...foodList,newFoodItem];
      setFoodList(newItem);

    }
    
    
  }

  return (
    <>
    <Container>
    <Heading></Heading>
    {/* <Input handleEventButton={onChange}></Input> This is for textToShow */}
    <Input handleOnKeyDown={onKeyDown}></Input>
    {foodList.length === 0 ? "I am Hungry": null}
    {/* <p>{textToShow}</p> */}
    <FoodItems list = {foodList}></FoodItems>
    </Container>

    
    
     
    </>
  )
}

export default App
