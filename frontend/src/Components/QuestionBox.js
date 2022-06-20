import React, { useState} from "react";
import Boolean from "./Boolean";
import Text from "./Text";
import Checkbox from "./Checkbox";
import AddQuestion from "./AddQuestionButton";

function QuestionBox() {
  const [showText, setText] = useState(false);
  const [showBoolean, setBoolean] = useState(false);
  const [showCheckbox, setOption] = useState(false);



  return (
    <>
      <div className="Container">
        <input className="question" placeholder="Insert question here"></input>
        <button className="btn ">Add</button>
        <div>
          <select
            onChange={(e) => {
              const selectedOption = e.target.value;

              if (selectedOption === "boolean") {
                setBoolean(!showBoolean);
              }

              if (selectedOption==="text"){
                setText(!showText);
              }
              if (selectedOption==="checkbox"){
                setOption(!showCheckbox);
              }
            }}
          >
            <option value="text">Text</option>

            <option value="checkbox">Checkbox</option>

            <option value="rating">Rating</option>

            <option value="boolean">Boolean</option>
            
          </select>
          
          
        </div>
        <div>{showBoolean && <Boolean />}</div>
        <div>{showText && <Text/>}</div>
        <div>{showCheckbox && <Checkbox/>}</div>
      </div>
      <AddQuestion/>

      
    </>
  );
}

export default QuestionBox;
