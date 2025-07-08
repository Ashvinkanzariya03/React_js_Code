import React, { useEffect } from "react";

function UseEffectComponents2({ count, data }) {
  const handelcount = () => {
    console.log("Called Count");
  };
  const handeldata = () => {
    console.log("Called Data");
  };
  // handelcount()
  // useEffect(()=>{
  //     handelcount();
  // },[])

  // useEffect(()=>{
  //     handelcount();
  // },[count])

  //   useEffect(() => {
  //     handelcount();
  //   }, [count,data]);

  useEffect(() => {
    handelcount();
  }, []);
  useEffect(() => {
    handeldata();
  }, [data]);
  return (
    <div>
      <h2>Count {count}</h2>
      <h2>data {data}</h2>
    </div>
  );
}

export default UseEffectComponents2;
