import React, { useState } from 'react';
import QuestionBox from './QuestionBox';
import axios from 'axios';

    

function Survey(){
    const [openQuestionForm, setQuestionForm] = useState(false);

    const[myTitle,setMyTitle]=useState("");
    const[myDescription,setMyDescription]=useState("");
  
    const handleSubmit = (e)=> {
      const data=new FormData
      data.append('title',myTitle)
      data.append('description',myDescription)
      e.preventDefault();
        axios({
          method:"post",
          data,
          url:"http://127.0.0.1:8000/api/add_survey",
        }).then(res=>console.log(res)).catch(error=>console.log(error))
    }
    return(
        <>
        <div className="Container">
            <input className="title" placeholder='Insert title here' value={myTitle} onChange={(e)=>setMyTitle(e.target.value)}></input>
            <input className="description" placeholder='Insert Description' value={myDescription} onChange={(e)=>setMyDescription(e.target.value)}></input>
            <button className="create-btn ques"  onClick={handleSubmit} onMouseOver={() => {
                setQuestionForm(true);
                }}>Add Question</button>
            
        </div>
        <div>{openQuestionForm && <QuestionBox/>}</div>
      
        </>
        
    )
}

export default Survey