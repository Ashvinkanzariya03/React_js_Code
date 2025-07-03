import React, { useState } from 'react'

function InputField() {
    const [val,setVal]=useState('');
  return (
    <div>
      <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} placeholder="Enter Your Name"/>
      <h1>{val}</h1>
      <button onClick={()=>setVal('')}>Clear Value</button>
    </div>
  )
}

export default InputField
