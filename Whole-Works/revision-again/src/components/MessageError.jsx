let MessageError = ({foodList}) => {
  return (
    <>
    {foodList.length ===0 ? <h3>I am Hungry</h3> : null}
    </>
  )
}

export default MessageError;