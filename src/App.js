import React, { useState } from "react";
import styled from "styled-components";
import LargeTitle from './LargeTitle'
import MainButton from './MainButton'
import LoginInput from './LoginInput'
import TeacherPreview from "./TeacherPreview";
import StartingForm from "./StartingForm";
import QuestionPage from "./QuestionPage" 
import { Routes, Route, Link } from "react-router-dom";


var username = "";
var password = "";
var skill ="";
var loggedIn = false;



const teachers = [
  {
    id: 1, 
    name: 'Laura A', 
    src: "https://media.istockphoto.com/photos/african-american-professor-prepares-for-class-picture-id1146044327?s=612x612",   
    desc: "SAT Prep, ACT Prep, AP Euro & AP Physics C Electricity & Magnetism Prep, College Essay Writing",
    descAsTags: ["SAT Prep", "ACT Prep", "AP Euro", "AP Physics C Electricity & Magnetism", "College Essay Writing"]
  },

  {  
    id: 2, 
    src: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-04/220331-Nicolette-Solomon-cover-ac-757p-ff2261.jpg",
    name: "Ann B." ,
    desc: "College Essays, AP Calculus BC",
    descAsTags: ["College Essays", "AP Calculus AB"]
  },

  {
    id: 3, 
    src: "https://27mi124bz6zg1hqy6n192jkb-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/Top-5-Teaching-Strategies-768x548.jpg",
    name: "Marc C." ,
    desc: "AP Calculus BC, AP Physics C Mechanics, AP Physics C Electricity/Magnetism",
    descAsTags: ["AP Calculus BC", "AP Physics C Mechanics", "AP Physics C Electricity &Magnetism"]
  },

  {
    id: 4, 
    src: "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/people-posing-photography-1004.jpg?resize=1000%2C1500&ssl=1",
    name: "David E." ,
    desc: "SAT Prep, College Essay Writing",
    descAsTags: ["SAT Prep", "College Essay Writing"]
  },

  {
    id: 5, 
    src: "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/people-posing-photography-1002.jpg?resize=1500%2C1000&ssl=1",
    name: "Kyle G." ,
    desc: "ACT Prep, AP English Language",
    descAsTags: ["ACT Prep", "AP English Language"]
  }
]

function App() {
  return ( 
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/find_teacher" element={<FindTeacher />} />
        <Route path="/starting_form" element={<SForm />} />  
        <Route path="/profile_page" element={<ProfilePage />} />  
        <Route path="/ask_question" element={<QPage />} />  
      </Routes>
     
    </div>
  );
}

function QPage() { 
  return (
    <div>
    <LargeTitle/>
    <Link to="/starting_form">  < MainButton name="Starting Form" /> </Link>
    <Link to="/profile_page">< MainButton name="Profile" /></Link>
    <Link to="/find_teacher">< MainButton name="Find a Teacher"  /></Link>
    <Link to="/login"> < MainButton name="Login" /></Link>
    <Link to="/">< MainButton name="Home" /></Link>
    <QuestionPage />
    </div>
  );
}
function Home () {
 
  if(username.length > 0)
 return (
    <div>
      < LargeTitle />
      <Link to="/starting_form">  < MainButton name="Starting Form" /> </Link>
      <Link to="/profile_page">< MainButton name="Profile" /></Link>
      <Link to="/find_teacher">< MainButton name="Find a Teacher"  /></Link>
      <Link to="/login"> < MainButton name="Login" /></Link>
      <Link to="/">< MainButton name="Home" /></Link>
    <h2 className="username">Hello, {username}!</h2>
    <h1 className="header-mission">OUR MISSION</h1>
    <div className="mission-text"> <p className="home-page-text" padding = "100px">The aim of this tutoring website is to match underprivileged students to quality teachers free-of-cost, in 
an effort to promote education in rural areas without school access. <mark className="home-page-text" color="yellow">Students shouldn't need to pay hundreds of dollars just to reach their potentials in education.</mark></p>
    </div>
    <center><img src='https://www.istianjin.org/uploaded/our-programs/unnamed.jpg'/></center>
    </div> 
  );
 
  else
  return (
    <div>
      < LargeTitle />
      <Link to="/starting_form">  < MainButton name="Starting Form" /> </Link>
      <Link to="/profile_page">< MainButton name="Profile" /></Link>
      <Link to="/find_teacher">< MainButton name="Find a Teacher"  /></Link>
      <Link to="/login"> < MainButton name="Login" /></Link>
      <Link to="/">< MainButton name="Home" /></Link>
    <h2 className="username">Please login.</h2>
    <h1 className="header-mission">OUR MISSION</h1>
    <div className="mission-text"> <p className="home-page-text" padding = "100px"> Tutoring is becoming more popular nowadays. Hence, the aim of this website is to match underprivileged students to high-quality, free tutors, eliminating the cost of private help for those who cannot afford it.<mark className="home-page-text" color="yellow">Students shouldn't need to pay hundreds of dollars just to reach their potentials in education.</mark></p>
    </div>
    <center><img src='https://www.istianjin.org/uploaded/our-programs/unnamed.jpg'/></center>
    </div> 
  );
 
}

function Login () { 

  function getUsernamePassword(user, pass) { 
    username = user; 
    password = pass;
    
  }

return (
  <div>
    < LargeTitle />
    <Link to="/starting_form">  < MainButton name="Starting Form" /> </Link>
      <Link to="/profile_page">< MainButton name="Profile" /></Link>
      <Link to="/find_teacher">< MainButton name="Find a Teacher"  /></Link>
      <Link to="/login"> < MainButton name="Login" /></Link>
   
      <Link to="/">< MainButton name="Home" /></Link>
    <h1> Login page! </h1>
    <LoginInput func={getUsernamePassword}/>
  

    </div>
   

  
  
)

}

function FindTeacher () { 
  return (
    <div>
      < LargeTitle />
      <Link to="/starting_form">  < MainButton name="Starting Form" /> </Link>
      <Link to="/profile_page">< MainButton name="Profile" /></Link>
      <Link to="/find_teacher">< MainButton name="Find a Teacher"  /></Link>
      <Link to="/login"> < MainButton name="Login" /></Link>
      <Link to="/">< MainButton name="Home" /></Link>
      <h1 className="find-teacher-header">Find your Free Teacher Here!</h1>
    
    
    <u1>
      {teachers.map((teacher) =>
      
      <TeacherPreview src={teacher.src} 
                      name={teacher.name}
                      desc={teacher.desc}
                      addButton = "true"
                      height = "300px"
                      width = "400px"/>
      )}
    </u1> 
    

 
    </div>
  )
  
  }

  function collectResponses(grade, skill2) { 
    skill = skill2;
    console.log("HERE");
  }

  function SForm() { 

    

    return (
    <div>
       < LargeTitle />
       <Link to="/starting_form">  < MainButton name="Starting Form" /> </Link>
      <Link to="/profile_page">< MainButton name="Profile" /></Link>
      <Link to="/find_teacher">< MainButton name="Find a Teacher"  /></Link>
      <Link to="/login"> < MainButton name="Login" /></Link>
      <Link to="/">< MainButton name="Home" /></Link>
      <StartingForm func={collectResponses}/>
      
    </div>
    );
  }

  

  function ProfilePage() {


    return(
      <div>
      <LargeTitle/>

      <Link to="/starting_form">  < MainButton name="Starting Form" /> </Link>
      <Link to="/profile_page">< MainButton name="Profile" /></Link>
      <Link to="/find_teacher">< MainButton name="Find a Teacher"  /></Link>
      <Link to="/login"> < MainButton name="Login" /></Link>
      <Link to="/">< MainButton name="Home" /></Link>
      <h2 className="your-teacher-text">Skill to improve: {skill}</h2>
      <h2 className="your-teacher-text">Your Teacher: Laura A</h2>
      <TeacherPreview src={teachers[0].src} 
                      name={teachers[0].name}
                      desc={teachers[0].desc}
                      addButton= "false"
                      height = "300px"
                      width = "400px"/>
      <center><Link to="/ask_question"><button className="ask-question-button">Ask a Question</button></Link></center>
      </div>
    );

  }

export default App;