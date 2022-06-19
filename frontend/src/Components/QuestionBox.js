import React, { useState } from "react";
import Boolean from "./Boolean";

function QuestionBox() {
  // const [showText, setTextForm] = useState(false);
  const [showBoolean, setBoolean] = useState(false);

  return (
    <>
      <div className="Container">
        <input className="question" placeholder="Insert question here"></input>
        <div>
          <select
            onChange={(e) => {
              const selectedOption = e.target.value;

              if (selectedOption === "boolean") {
                setBoolean(!showBoolean);
              }
            }}
          >
            <option value="text">Text</option>

            <option value="checkbox">Checkbox</option>

            <option value="rating">Rating</option>

            <option value="boolean">Boolean</option>
          </select>
        </div>
      </div>

      <div>{showBoolean && <Boolean />}</div>
    </>
  );
}

export default QuestionBox;
