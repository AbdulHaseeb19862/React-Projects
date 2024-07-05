import styles from './FoodItems.module.css';

let FoodItems = ({ items }) => {
  function eventHandling(event){
    console.log(event)
    console.log(`${items} clicked......`);
  }
  return (
    <li classNameName={`${styles.items} list-group-item`}>
      <span classNameName={styles.text}> {items} </span>
      <button type="button" classNameName={`${styles.button} btn btn-info`}
      // onClick={() => console.log(`${items} clicked`)}
      onClick={(event) => eventHandling(event) }

      >Click</button>
    </li>
  );
}

export default FoodItems;