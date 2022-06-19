import Survey from '../Components/Survey';
import React, { useState } from "react";


const Admin = () => {
    const [openSurvey, setSurveyForm] = useState(false);
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
    </>
    )
   };
   export default Admin;