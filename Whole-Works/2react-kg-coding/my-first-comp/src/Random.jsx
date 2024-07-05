
function Random() {
  let number = Math.random() * 100;
  return (
    <div>
      <h1 style={{backgroundColor : '#667791'}}>The random number is {Math.round(number)}</h1>
    </div>
  )
}

export default Random;