import Items from "./Items";
let FoodItems = (props) => {  // You can also use directly like this 
  return (
    <ul className="list-group">

    {props.item.map((item) => (
        <Items key={item} foodItems = {item} />
    ))}
    
   
</ul>
  )
}
export default FoodItems;