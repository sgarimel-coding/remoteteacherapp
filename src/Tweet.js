import React from 'react'
import "./App.css"
function Tweet (props) {

    let ready = "";
    function setReady() { 
        if(props.available)
            ready = "a";
        else    
            ready = "b";
    }
    setReady();
    return ( 
        <div className="tweet">
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
            <h3>{ready}</h3>
          
        </div>
    );
}

export default Tweet