import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 25,
    hobby: "Read books",
  });

  const handleClick = () => {
    setPerson({
      name: "John",
      age: 20,
      hobby: "Play games",
    });
  };

  const { name, age, hobby } = person;
  return (
    <>
      <h4>{name}</h4>
      <h4>{age}</h4>
      <h4>Enjoys: {hobby}</h4>
      <button className="btn" onClick={handleClick} type="button">
        Update
      </button>
    </>
  );
};

export default UseStateObject;
