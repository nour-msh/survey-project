import React, { Component } from 'react';
import surveyImage from "../assets/surveyImage.jpg"

function About(){
    return(
    <div className="about">
        <h1 >Welcome to the #1 Rated Survey Maker</h1>
        <div>
            <h2>Create FREE online surveys with unlimited questions and responses!</h2>
            <img src={surveyImage} alt=""/>
        </div>
    </div>
        
    )
}
export default About;