import Items from './Items';
import styles from './FoodItems.module.css';
import { useState } from 'react';
let FoodItems = ({foodList}) =>{

  let [activeItem,setItem] = useState([])

  function onlyBuyButton(item,event){
    let newItem = [...activeItem,item]
    setItem(newItem)
  }
 
  return (
    <ul className={`${styles.element} list-group`}>
    {foodList.map((item) => (
      <Items key={item}
       item={item}
       bought={activeItem.includes(item)}
       handleButton = {(event) => onlyBuyButton(item,event)}></Items>
    ))}
  
</ul>
  )
} 

export default FoodItems;