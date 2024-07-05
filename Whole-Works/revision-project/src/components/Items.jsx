import styles from './Items.module.css';
let Items = ({item,evenHandleButton}) => {
  return(
    <li  className="list-group-item"><span className={styles.sp}>{item}
    <button type="button" className={`${styles.button} btn btn-info`}
    onClick={evenHandleButton}>Buy</button></span></li>
  )
}

export default Items;