import React, { useState } from "react";

function Map() {
  const userData = [
    {
      name: "ashvin",
      age: 20,
      email: "ashvin@gamil.com",
      id: 1,
    },
    {
      name: "Mitul",
      age: 22,
      email: "mitul@gamil.com",
      id: 2,
    },
    {
      name: "manoj",
      age: 25,
      email: "manoj@gamil.com",
      id: 3,
    },
    {
      name: "xyz",
      age: 20,
      email: "xyz@gamil.com",
      id: 4,
    },
  ];
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <td>id</td>
            <td>Name</td>
            <td>age</td>
            <td>email</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Map;
