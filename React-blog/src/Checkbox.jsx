import React, { useState } from "react";

function Checkbox() {
  const [skils, setSkils] = useState([]);
  const handelSkils = (event) => {
    // console.log(event);
    console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      setSkils([...skils, event.target.value]);
    } else {
      setSkils([...skils.filter((item) => item != event.target.value)]);
    }
  };
  return (
    <div>
      <h1>Select Your Skills</h1>
      <input onChange={handelSkils} type="checkbox" id="React" value="React" />
      <label htmlFor="React">React</label>
      <br />
      <br />

      <input onChange={handelSkils} type="checkbox" id="js" value="js" />
      <label htmlFor="js">js</label>
      <br />
      <br />

      <input onChange={handelSkils} type="checkbox" id="php" value="php" />
      <label htmlFor="php">php</label>
      <br />
      <br />

      <input onChange={handelSkils} type="checkbox" id="java" value="java" />
      <label htmlFor="java">java</label>
      <br />
      <br />
      <h2>{skils.toString()}</h2>
    </div>
  );
}

export default Checkbox;
