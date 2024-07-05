import Display from './components/Display';
import Button from './components/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';
import { useState } from 'react';

function App() {
  let [calValue,setCalValue] = useState("")
  function eventOnClick(buttonText){
    if(buttonText === 'C'){
      buttonText = "";
      setCalValue(buttonText);
    } else if(buttonText === '='){
      let calculate = eval(calValue);
      setCalValue(calculate);
    }else{
      let newValue = calValue + buttonText;
      setCalValue(newValue);
    }
  }
  return (
    <div className={styles.calculator}>
      <Display displayValue = {calValue}></Display>
      <Button onClick = {eventOnClick}></Button>
      
    </div>
  )
}

export default App
