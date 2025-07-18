import React, { useState } from "react";
import Lifting1 from "./Lifting1";
import Lifting2 from "./Lifting2";

function LiftingState() {
  const [user, setUser] = useState("");
  return (
    <div>
      <Lifting1 setUser={setUser}/>
      <hr />
      <Lifting2 user={user}/>
    </div>
  );
}

export default LiftingState;
