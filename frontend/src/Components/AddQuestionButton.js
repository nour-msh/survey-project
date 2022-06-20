import React, { useState } from "react";
import QuestionBox from './QuestionBox';

function AddQuestion(){
    const [openQuestionForm, setQuestionForm] = useState(false);
    return(
        <>
        <div>
            <button className="save btn add-btn" onClick={() => {
                setQuestionForm(true);}}>+</button>
        </div>
        <div>{openQuestionForm && <QuestionBox/>}</div>
        </>
    )
}

export default AddQuestion