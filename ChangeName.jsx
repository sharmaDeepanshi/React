import React,{useState} from 'react'
import MyButton from './MyButton';

 const ChangeName = () => {
    const [name,setName] = useState("MCA");
    const changeNM=()=>{
        setName("React JS");
    }
  return (
    <div>
        <h2>Your name is {name}</h2>
        <MyButton onPress={changeNM}/>
    </div>
  )
}
export default ChangeName;