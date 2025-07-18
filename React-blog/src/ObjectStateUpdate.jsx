import React, { useState } from "react";

function ObjectStateUpdate() {
  const [data, setData] = useState({
    name: "ashvin",
    address: {
      city: "Surendranager",
      country: "India",
    },
  });
  const updateObj = (val) => {
    console.log((data.name = val));
    data.name = val;
    setData({ ...data });
  };
  const updatecity = (val) => {
    data.address.city = val;
    setData({ ...data });
  };
  const updateCountry = (val) => {
    data.address.country = val;
    setData({ ...data });
  };
  return (
    <div>
      <h1>Object state Update</h1>
      <input
        type="text"
        name=""
        id=""
        onChange={(event) => updateObj(event.target.value)}
        placeholder="Enter Your Name"
      />
      <br />
      <br />
      <input
        type="text"
        name=""
        id=""
        onChange={(event) => updatecity(event.target.value)}
        placeholder="Enter Your city"
      />
      <br />
      <br />
      <input
        type="text"
        name=""
        id=""
        onChange={(event) => updateCountry(event.target.value)}
        placeholder="Enter Your Country"
      />
      <h2>Name: {data.name}</h2>
      <h2>City: {data.address.city}</h2>
      <h2>Country: {data.address.country}</h2>
    </div>
  );
}

export default ObjectStateUpdate;
