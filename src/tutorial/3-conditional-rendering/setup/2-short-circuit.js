import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text , setText] = useState("k");

  const firstValue = text || 'hello world'; // or
  const secondValue = text && 'hello world';// and

  // we can't display any conditional statements as expression in jsx , we need ternary operator to do so 
  return <>
  <h1>value : {firstValue}</h1>
  <h1> second :{secondValue}</h1>
  
  </>;
};

export default ShortCircuit;
