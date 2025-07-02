import { useState } from "react";
import Multipleconditions from "./Multipleconditions";

function App() {
  const [display, setDisplay] = useState(true);
  return (
    <>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display ? <h1>Ashvin</h1> : <h2>Kanzariya</h2>}
      <Multipleconditions/>
    </>
  );
}

export default App;
