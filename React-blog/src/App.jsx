import { useState } from "react";
import Multipleconditions from "./Multipleconditions";
import PropsComponents from "./PropsComponents";

function App() {
  const [display, setDisplay] = useState(true);
  return (
    <>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display ? <h1>Ashvin</h1> : <h2>Kanzariya</h2>}
      <Multipleconditions/>
      <PropsComponents name="PropsComponents" age={20} email="Ashvin@gamil.com"/>
    </>
  );
}

export default App;
