import React, {useState} from 'react'
import "./App.css"

export default function LoginInput ({func}) { 

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    var submitted = false;
    const submitAction = (val) => { 
       
        
        //storeUsernamePassword(username, password);
        val.preventDefault();
        const login = {username, password}
        func(username, password);
        // fetch('http://localhost:3000/login', {
        //     method: 'POST', 
        //     headers: { "Content-Type": "application/json"},
        //     body: JSON.stringify(login)
        // }).then(() => {
        //     console.log("LOGGED IN");
        // })
    }


  
    return ( 

        <div className="loginBox">
            <div className="loginInput">
                <form onSubmit={submitAction}> 
                    <label>Username: </label>
                    <input
                        type="text"
                        required
                        value={username}
                        onChange={(val) => setUsername(val.target.value)}
                    />
                    <label>Password: </label>
                    <input
                     type = "password" 
                     required
                     value={password}
                     onChange={(val) => setPassword(val.target.value)}/>
                  
                  
                <button>Submit</button>
                </form>
            </div>
        </div>
    );
}