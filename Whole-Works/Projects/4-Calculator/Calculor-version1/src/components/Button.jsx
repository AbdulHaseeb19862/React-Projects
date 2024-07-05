import styles from "./Button.module.css";
let Button = () => {  
  let btnArray = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
  return (
    <div className={styles.buttonContainer}>
      {btnArray.map((item) =>(
      <button className={styles.button}>{item}</button>
    ))}
    
  </div>
  )
}

export default Button;