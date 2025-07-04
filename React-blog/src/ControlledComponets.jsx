import React, { useState } from "react";

function ControlledComponets() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <form method="get">
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your Name"
        />{" "}
        <br />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter your Password"
        />
        <br />
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
        />
        <br />
      </form>
      <button>Submit</button>
      <button
        onClick={() => {
          setName("");
          setPassword("");
          setEmail("");
        }}
      >
        Clear
      </button>

      <h2>{name}</h2>
      <h2>{password}</h2>
      <h2>{email}</h2>
    </div>
  );
}

export default ControlledComponets;
