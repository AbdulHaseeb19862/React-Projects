import Container from './components/Container';
import Heading from './components/Heading';
import FoodItems from './components/FoodItems';
import MessageError from './components/MessageError';
import Input from './components/Input';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useState } from 'react';


function App() {
  
  const [foodList,setList] = useState([])
  // const [textToShow,useSetText] = useState("Food Entere By Users")

  // function handleEvent(event){
  //   // console.log(event);
  //   useSetText(event.target.value);
  // }
  function handleEvent(event){
    if(event.key === "Enter"){
      let newItem = event.target.value;
      event.target.value = "";
      let newArr = [...foodList,newItem];
      setList(newArr)
    }
  }

  return (
    <>
    <Container>
    <Heading></Heading>
    <Input handleKeyDown={handleEvent} ></Input>
    {/* <p>{textToShow}</p> */}
    <MessageError foodList ={foodList}></MessageError>
    
    <FoodItems foodList = {foodList}></FoodItems>
    </Container>
    
    
      
    </>
  )
}

export default App
