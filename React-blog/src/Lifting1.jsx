import React, { useState } from 'react'

function Lifting1({setUser}) {
  return (
    <div>
      <input onChange={(event)=>setUser(event.target.value)} type="text" name="" id="" />
    </div>
  )
}

export default Lifting1
