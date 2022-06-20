import Survey from '../Components/Survey';
import React, { useState } from "react";
import QuestionBox from '../Components/QuestionBox';


const Admin = () => {
    const [openSurvey, setSurveyForm] = useState(false);
    const [openQuestionForm, setQuestionForm] = useState(false);
    return (
        <>
    <div className="adminAccess">
        <h1>Welcome, Admin</h1>
        <div>
            <button className="create-btn" onClick={() => {
                setSurveyForm(!openSurvey);
                }}>Create Questionnaire</button>
        </div>

        
       

    </div>
    <div>{openSurvey && <Survey/>}</div>
    <div>{openQuestionForm && <QuestionBox/>}</div>
    <button className='btn'>Save</button>
    </>
    )
   };
   export default Admin;