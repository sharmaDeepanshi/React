import React from 'react'

const MyButton = (props) => {
  return (
    <div>
        {/* <button onClick={()=>props.onPress("Deepanshi Sharma")}>Click ME</button>  */}
        <button className="btn btn-danger" onClick={()=>props.onPress()}>Change name</button>
    </div>
  )
}

export default MyButton;
