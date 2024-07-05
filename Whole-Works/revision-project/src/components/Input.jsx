import styles from './Input.module.css';
let Input = ({handleOnKeyDown}) => {
  return(
    <input className={styles.text} type="text" placeholder="Enter your foods" 
    // onChange={handleOnChange}
    // onChange={handleEventButton}
    onKeyDown={handleOnKeyDown}
    
    />

  )
}

export default Input;