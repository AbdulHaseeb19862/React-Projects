import styles from './Items.module.css';
let Items = ({foodItems}) => {  // You can destructring directly like this
  return (<li className={`${styles.kgItems} list-group-item`} ><span className={styles["kg-span"]} >{foodItems}</span></li>)
}

export default Items;



