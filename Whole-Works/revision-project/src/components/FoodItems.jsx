import styles from './FoodItems.module.css';
import Items from "./Items";
let FoodItems = ({list}) => {
  return (
    <ul className={`${styles.element} list-group`}>
      {list.map((item) => {

       return (
        <Items key={item} item = {item} evenHandleButton={() =>{
          console.log(`${item} clicked....`)
        }} 
        
        
        ></Items>
       )

      })}
      
</ul>
  )
}

export default FoodItems;