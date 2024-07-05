let MessageError = (props) => {
  let {item} = props; // You can like as well destructuring from props
  return (
    <>
    {item.length === 0 && <h3>I am hungry</h3>}
    </>
  )
}

export default MessageError;