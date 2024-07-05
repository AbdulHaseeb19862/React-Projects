import FoodItems from "./FoodItems";
let FoodItem = ({foodList}) => {
  return (
 
  <ul classNameName="list-group">
   {foodList.map((item) => (
    <FoodItems key={item} items = {item}></FoodItems>
  ))}
</ul>
  )
}
export default FoodItem;