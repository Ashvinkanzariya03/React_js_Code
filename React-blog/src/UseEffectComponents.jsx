import React, { useState } from "react";
import UseEffectComponents2 from "./UseEffectComponents2";

function UseEffectComponents() {
  const [count, setcount] = useState(0);
  const [data, setData] = useState(0);
  return (
    <div>
      <h2>UseEffect with Components</h2>
      <UseEffectComponents2 count={count} data={data} />
      <button onClick={() => setcount(count + 1)}>count{count}</button>
      <button onClick={() => setData(data + 1)}>data{data}</button>
    </div>
  );
}

export default UseEffectComponents;
