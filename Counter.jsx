import React, { useState } from 'react'

export const Counter = () => {
    const [count,setCount]=useState(0);
    const warning='btn btn-warning mx-2';
    const danger='btn btn-danger mx-2';
    const decrement=()=>{
        let lcount=count;
        setCount(lcount<=0 ? 0 : lcount-1);
    };
    const increment=()=>{
        let lcount=count;
        setCount(++lcount);
    };
  return (
    <div className='my-3'>
        <button className='btn btn-primary' onClick={decrement}>Decrement</button>
        <span className={count > 0 ? warning : danger}>
            {count !==0 ? count : "zero"}
        </span>
        <button className='btn btn-primary' onClick={increment}>Increment</button>
    </div>
  );
};


