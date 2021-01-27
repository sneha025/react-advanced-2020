import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const editItem = (id) => {
    let newPeople = people.filter((person) => person.id == id);
    console.log(newPeople)
    setPeople(...people, [{name : "sneha"}]);

  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>

            <button onClick={() => editItem(id)}>Edit</button>
          </div>
        );
      })}
      <button
        className="btn"
        onClick={() => {
          setPeople([]);
        }}
      >
        clear Name
      </button>
    </>
  );
};

export default UseStateArray;
