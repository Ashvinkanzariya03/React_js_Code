import React from "react";

function ForWordRefInput(props) {
  return (
    <div>
      <input type="text" ref={props.ref} />
    </div>
  );
}

export default ForWordRefInput;
