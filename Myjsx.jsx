import React from 'react'

const examplejsx = () => {
    let name='MCA React';
    let mydata='This is react js';
    let n1=134,n2=84;
    const findMax=()=>{
      if(n1>n2)
         return "n1";
      else 
         return "n2";  
    } 
   const findMin=()=>{
    if(n1<n2)
      return n1;
    else
      return n2;
   }
  return (
    <div>

        <h2>JSX example</h2>
        <h3>welcome to react by {name}</h3>
        <h3>Now {mydata}</h3>
        <h3>Greater number is {n1>n2?n1:n2}</h3>
        <h3>Greater number is {findMax()}</h3>
        <h3>Min number is {findMin()}</h3>
    </div>
  )
}

export default examplejsx