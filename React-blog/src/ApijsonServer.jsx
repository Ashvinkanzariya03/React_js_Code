import React, { useEffect, useState } from "react";

function ApijsonServer() {
  const [usersData, setUsersData] = useState([]);
  const [loding, setLoding] = useState(false);
  useEffect(() => {
    setLoding(true);
    userData();
  }, []);
  const userData = async () => {
    const url = "http://localhost:3000/users";
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setUsersData(response);
    setLoding(false);
  };
  return (
    <div>
      <h2>json server And Loder</h2>
      {
      !loding?
      usersData &&
        usersData.map((user) => (
          <ul>
            <li>
              {user.name}
              {user.age}
              {user.email}
            </li>
          </ul>
        )):
        <h1>Data Loding............</h1>
    }
    </div>
  );
}

export default ApijsonServer;
