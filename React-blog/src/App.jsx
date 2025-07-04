import { useState } from "react";
import Multipleconditions from "./Multipleconditions";
import PropsComponents from "./PropsComponents";
import ArrayComponents from "./ArrayComponents";
import ByDefaultProps from "./ByDefaultProps";
import InputField from "../InputField";
import ControlledComponets from "./ControlledComponets";
import Checkbox from "./Checkbox";

function App() {
  const [display, setDisplay] = useState(true);
  // let username="PropsComponents"
  // let userage=20
  // let useremail="Ashvin@gamil.com"
  let userobject1={
    name:"ashvin",
    age:"21",
    email:"ashvin@gamil.com"
  }
  let userobject2={
    name:"name2",
    age:"25",
    email:"name3@gamil.com"
  }
  let userobject3={
    name:"name3",
    age:"20",
    email:"name3@gamil.com"
  }
  let City=['Ahemdabad','surat','pune']
  return (
    <>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display ? <h1>Ashvin</h1> : <h2>Kanzariya</h2>}
      <Multipleconditions/>
      {/* <PropsComponents name={username} age={userage} email={useremail}/> */}
      <PropsComponents user={userobject1}/>
      <PropsComponents user={userobject2}/>
      <PropsComponents user={userobject3}/>
      <hr />
      <h2>*Array Components*</h2>
      <ArrayComponents name={City}/>
      <hr />
      <h2>*By Default Props*</h2>
      <ByDefaultProps name="ashvin Kanzariya"/>
      <ByDefaultProps />
      <hr />
      <h2>*Input Field*</h2>
      <InputField/>
      <hr />
      <h1>*Controlled Componets*</h1>
      <ControlledComponets/>
      <hr />
      <Checkbox/>
    </>
  );
}

export default App;
