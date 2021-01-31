import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world'; // or
  // const secondValue = text && 'hello world';// and

  // we can't display any conditional statements as expression in jsx , we need ternary operator to do so
  return (
    <>
      {/* <h1>value : {firstValue}</h1>
  <h1> second :{secondValue}</h1> */}
      <h1>{text || "sneha maurya"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        {" "}
        toggle error
      </button>
      {isError && <h21>Error .. </h21>}
      {isError ? (
        <p>thee is an error..</p>
      ) : (
        <div>
          <h2>There is no error </h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
