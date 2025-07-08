import React, { useEffect, useState } from "react";

function UseEffectHooks() {
  const [counter, setCounter] = useState(0);
  const [data,setData]=useState(0)
  function Callone() {
    console.log("Called",counter);
  }
  // useEffect(() => {
  //   Callone();
  // });

  // useEffect(() => {
  //   Callone();
  // },[]);

  // useEffect(() => {
  //   Callone();
  // },[counter,data]);
  
  useEffect(() => {
    Callone();
  },[]);
  return (
    <div>
      <h2>Use Effect Hooks</h2>
      <button onClick={() => setCounter(counter + 1)}>Counter{counter}</button>
      <button onClick={()=>setData(data+1)}>Data{data}</button>
    </div>
  );
}

export default UseEffectHooks;
