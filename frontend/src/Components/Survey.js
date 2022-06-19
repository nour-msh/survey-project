import React, { useState } from 'react';
import QuestionBox from './QuestionBox';

    

function Survey(){
    const [openQuestionForm, setQuestionForm] = useState(false);
    return(
        <>
        <div className="Container">
            <input className="title" placeholder='Insert title here'></input>
            <input className="description" placeholder='Insert Description'></input>
            <button className="create-btn ques" onClick={() => {
                setQuestionForm(true);
                }}>Add Question</button>
            
        </div>


        <div>{openQuestionForm && <QuestionBox/>}</div>
      
        </>
        
    )
}

export default Survey