import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });
  console.log(person);
  // const [name,setName] =usestate()
  const changeMessage = () => {
    setPerson({ ...person, message: "hello Sneha" }); // we use the spread operator because we only want to change the message not entire data,
    //spread operator helps us to do that
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        change
      </button>
    </>
  );
};

export default UseStateObject;
