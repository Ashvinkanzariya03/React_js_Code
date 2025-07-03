import React from 'react'

function ByDefaultProps({name="NewUser"}) {
  return (
    <div>
      <h2>hello, {name}</h2>
    </div>
  )
}

export default ByDefaultProps
