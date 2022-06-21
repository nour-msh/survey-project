import React, { useState} from "react";
import axios from "axios";
import Boolean from "./Boolean";
import Text from "./Text";
import Checkbox from "./Checkbox";
import AddQuestion from "./AddQuestionButton";

function QuestionBox() {
  const [showText, setText] = useState(false);
  const [showBoolean, setBoolean] = useState(false);
  const [showCheckbox, setOption] = useState(false);

  const[myQuestion,setMyQuestion]=useState("");

  const handleSubmit = (e)=> {
    const data=new FormData
    data.append('text',myQuestion)
    e.preventDefault();
      axios({
        method:"post",
        data,
        url:"http://127.0.0.1:8000/api/add_question",
      }).then(res=>console.log(res)).catch(error=>console.log(error))
  }


  return (
    <>
      <div className="Container">
        <input className="question" placeholder="Insert question here" value={myQuestion} onChange={(e)=>setMyQuestion(e.target.value)}></input>
        <button className="btn" onClick={handleSubmit}>Add</button>
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
