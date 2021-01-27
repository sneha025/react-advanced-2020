import React from "react";

const ErrorExample = () => {
  let title = "random title";

  const handleClick = () => {
    title = "here";
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2 className="container">{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        New title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
