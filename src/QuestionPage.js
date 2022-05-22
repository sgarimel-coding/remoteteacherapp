import React from 'react'
import {useForm} from 'react-hook-form'
function QuestionPage() { 

    const {register, handleSubmit} = useForm()
    var sent = "false"
    const onSubmit = (data) => { 
        handleSubmit(data);
        console.log("HERE");
        sent = true;
    }

    if(sent == true)
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <center><label className="form-label">Ask Laura A. your Question Below!</label>
                <div><textarea/></div>
                <image src= "https://cdn-icons-png.flaticon.com/512/1160/1160358.png"/>
                <input type="file" name="picture" />
                <button>Submit</button></center>
                <center><h2>SENT!</h2></center>
            </form>
          
                
         
        </div>
    );

    else
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <center><label className="form-label">Ask Laura A. your Question Below!</label>
                <div><textarea/></div>
                <image src= "https://cdn-icons-png.flaticon.com/512/1160/1160358.png"/>
                <input type="file" name="picture" />
                <button>Submit</button></center>
             
            </form>
          
                
         
        </div>
    );
}

export default QuestionPage;