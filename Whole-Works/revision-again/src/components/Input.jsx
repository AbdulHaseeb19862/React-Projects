import styles from './Input.module.css';
let Input = ({handleKeyDown}) => {
  return(
    <input className={styles.text} type="text" placeholder="Enter your foods" 
    // onChange={handleChangeText}
    onKeyDown={handleKeyDown} />

  )
}

export default Input;