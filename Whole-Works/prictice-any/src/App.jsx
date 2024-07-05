import Heading from './components/Heading';
import FoodItems from './components/FoodItem';
import Container from './components/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  
  let foodList = ['Milk','Fruit','Vegetables','Meat','Dry Fruit']

  return (
    <>
    <Container>
  <Heading></Heading>
  <FoodItems foodList={foodList} ></FoodItems>
  
    </Container>

    {/* <Container>
      <p>Health foods are nutrient-rich foods that promote overall well-being and are beneficial for maintaining good health. They include fruits, vegetables, whole grains, lean proteins, and healthy fats. These foods are often packed with vitamins, minerals, fiber, and antioxidants, which help boost the immune system, improve digestion, and reduce the risk of chronic diseases like heart disease and diabetes. Incorporating a variety of health foods into your diet can enhance energy levels, support weight management, and contribute to a longer, healthier life.</p>
    </Container> */}
    </>
  )
}

export default App
