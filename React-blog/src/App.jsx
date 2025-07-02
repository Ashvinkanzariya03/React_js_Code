import { useState } from "react";

function App() {
  const [display, setDisplay] = useState(true);
  return (
    <>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
      {display ? <h1>Ashvin</h1> : <h2>Kanzariya</h2>}
    </>
  );
}

export default App;
