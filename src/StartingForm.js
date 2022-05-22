import React, {useState} from 'react';
import { Routes, Route, Link } from "react-router-dom";

export default function StartingForm({func}) { 
    
   
    const [grade, setGrade] = useState(10);
    const [skill, setSkill] = useState("");

    let saved = false;

    const handleSubmit = (event) => { 
        event.preventDefault();
        func(event.target[0].value, event.target[1].value);
        saved = true;
        skill = "SAT Prep";
        grade = 10;
    }
 
    return( 
       <form onSubmit={handleSubmit}>
            <label className="form-label" >
              <div className="startingForm">
               <div>
               Enter your grade:
               </div>
               <select  value={grade} onChange={(e) => setGrade(e.target.value)} >
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            
              <div>
              <p>What skillsets do you need help with? </p>
              </div>
              <div>
             <select  value={skill} onChange={(e) => setSkill(e.target.value)}>
                <option value="SAT Prep">SAT Prep</option>
                <option value="ACT Prep">ACT</option>
                <option value="AP Calc BC">AP Calc BC</option>
                <option value="AP Physics C Mechanics">AP Physics C Mechanics</option>
                <option value="AP Physics C Electricity & Magnetism">AP Physics C Electricity & Magnetism</option>
                <option value="AP English Language">AP English Language</option>
                <option value="AP Euro">AP English Language</option>
                <option value="College Essays">College Essays</option>
               
              </select>
              </div>
              </div>

           
            
            <center><button >Submit</button></center>
            </label>
       </form> 
    );
   
  
}