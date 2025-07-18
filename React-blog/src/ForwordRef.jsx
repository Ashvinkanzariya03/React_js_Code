import React, { useRef } from "react";
import ForWordRefInput from "./ForWordRefInput";

function ForwordRef() {
  const userref = useRef(null);
  const updateInput = () => {
    console.log("Forword Ref");
    userref.current.value = 100;
    userref.current.focus();
  };
  return (
    <div>
      <h1>forward ref</h1>
      <ForWordRefInput ref={userref} />
      <button onClick={updateInput}>Update ForWord ref</button>
    </div>
  );
}

export default ForwordRef;
