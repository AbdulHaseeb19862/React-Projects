import styles from './Items.module.css';
let Items = ({item,bought,handleButton}) => {
  return (
    <li className={`list-group-item ${bought && "active"} `}><span className={styles.sp}>{item}
    <button  type="button" className={`${styles.button} btn btn-info`}
    onClick={handleButton}>Buy</button></span></li>
  )
}

export default Items;