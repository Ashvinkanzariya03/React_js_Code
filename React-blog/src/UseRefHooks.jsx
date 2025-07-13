import React, { useRef } from "react";

function UseRefHooks() {
  const focusInput = useRef(null);
  const h1Ref = useRef(null);
  const inputHandler = () => {
    console.log("Focus");
    focusInput.current.focus();
    focusInput.current.style.color = "red";
    focusInput.current.placeholder = "Ashvin Kanzariya";
  };
  const h1Handler=()=>{
    h1Ref.current.style.color="red"
  }
  return (
    <div>
      <h2>Use Ref Hooks Focus On input</h2>
      <input ref={focusInput} placeholder="Enter Your Name" type="text" />
      <button onClick={inputHandler}>Focus on Input</button>

      <h1 ref={h1Ref}>Hello H1</h1>
      <button onClick={h1Handler}>Change H1 with UseRef</button>
    </div>
  );
}

export default UseRefHooks;
