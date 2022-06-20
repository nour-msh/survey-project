import React, { useState } from "react";
import QuestionBox from './QuestionBox';

function AddQuestion(){
    const [openQuestionForm, setQuestionForm] = useState(false);
    return(
        <>
        <div>
            <button onClick={() => {
                setQuestionForm(true);}}>+</button>
        </div>
        <div>{openQuestionForm && <QuestionBox/>}</div>
        </>
    )
}

export default AddQuestion