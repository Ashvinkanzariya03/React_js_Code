import React, { useState } from 'react'

function Multipleconditions() {
    const[count,setCount]=useState(0);

  return (
    <div>
      <h2>Multiple Conditions In React</h2>
      <button onClick={()=>setCount(count+1)}>Click Me</button>
      <p>{count}</p>
      {
        count==0?<h1>Conditions 01</h1>:
        count==1?<h1>Conditions 1</h1>:
        count==2?<h1>Conditions 2</h1>:
        count==3?<h1>Conditions 3</h1>:
        <h1>Other Conditions</h1>
      }
      
    </div>
  )
}

export default Multipleconditions
