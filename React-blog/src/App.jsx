import { useState } from "react";
import Multipleconditions from "./Multipleconditions";
import PropsComponents from "./PropsComponents";

function App() {
  const [display, setDisplay] = useState(true);
  let username="PropsComponents"
  let userage=20
  let useremail="Ashvin@gamil.com"
  return (
    <>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display ? <h1>Ashvin</h1> : <h2>Kanzariya</h2>}
      <Multipleconditions/>
      <PropsComponents name={username} age={userage} email={useremail}/>
    </>
  );
}

export default App;
