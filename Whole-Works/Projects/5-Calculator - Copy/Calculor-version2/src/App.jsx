import Display from './components/Display';
import Button from './components/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';
import { useState } from 'react';

function App() {
  const [calValue, setCalValue] = useState("");

  function eventChange(buttonText){
    if(buttonText === "C"){
      buttonText = "";
      setCalValue(buttonText);

    }else if(buttonText === '='){
      let cal = eval(calValue);
      setCalValue(cal);

    }else{
      let newValue = calValue + buttonText;
      setCalValue(newValue);
    }
  }
  
  return (
    <div className={styles.calculator}>
      <Display displayValue = {calValue}></Display>
      <Button handleClickButton={eventChange}></Button>
      
    </div>
  )
}

export default App
