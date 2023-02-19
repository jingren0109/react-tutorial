import { useState } from "react";

const ShortCircuitOverview = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("Tom");

  return (
    <div>
      <h4>Falsy OR: {text || "hello"}</h4>
      <h4>Falsy AND: {text && "hello"}</h4>
      <h4>Truethy OR: {name || "hello"}</h4>
      <h4>Truethy AND: {name && "hello"}</h4>
    </div>
  );
};
export default ShortCircuitOverview;
