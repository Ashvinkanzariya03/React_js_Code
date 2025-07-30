import React, { useEffect, useState } from 'react'

function UserApi() {
  const [usersData,setUsersData]=useState([]);
  useEffect(()=>{
    getUsersData()
  },[])
  async function getUsersData(){
    const url = "https://dummyjson.com/users";
    let response = await fetch(url);
    response= await response.json()
    console.log(response.users);
    setUsersData(response.users)
  }
  console.log(usersData);
  
  return (
    <div>
      {
        usersData && usersData.map((user)=>(
          <h2>{user.firstName}</h2>
        )) 
      }
    </div>
  )
}

export default UserApi
