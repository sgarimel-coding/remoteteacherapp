import React from 'react'




export default function TeacherPreview(props) { 
    let button;
    if(props.addButton == "true")
        button = <button className="selectButton">Select Teacher</button>
    

    return (
        <div className="teacherPreview">
            <div className="teacherImage">
                <center><img src={props.src} height={props.height} width={props.width} /></center>
            </div>

            <div className="teacherName">
                <h4>{props.name}</h4>
            </div>
            <div className="teacherDesc">
                <p>{props.desc}</p>
            </div>
            <div>
                <center>{button}</center>
            </div>
        </div>
    );
}