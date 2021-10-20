import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
    const{handleUserRegister,
         signInWithGoogle  }  = useAuth()
        const[email, setEmail]= useState("");
        const[name, setName]= useState("");
        const [password, setPassword] =useState("")
        const[error, setError] = useState()
    const  handleRegistration = e =>{
        e.preventDefault();
        handleUserRegister(email, password)
       if(password.length< 6){
           return;
       }
    }
    const handleEmailChange= e =>{
        setEmail(e.target.value);
    }
    const handlePasswordChange=e =>{
        setPassword(e.target.value);
    }
    const handleNameChange= e =>{
        setName(e.target.value);
    }

    return (
          <div>
         <div className="mx-5">
           <h2>Create Account</h2> 
        <form onSubmit={handleRegistration }>
            <h3 className="text-primary">Please Register</h3>

              <input className="form-control"  onBlur={handleNameChange} type="text" name="" id="" placeholder="Name" />
               <br />
               <input className="form-control"  onBlur={handleEmailChange} type="email" name="" id="" placeholder="Your Email"required />
               <br />
              
               <input className="form-control" onBlur={handlePasswordChange} type="password" name="" id="" placeholder="password" required/>
               <br />
            
            
             <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
    
           <button className="btn btn-warning " type="submit" value="submit">Submit</button>
           <br />
          
           </form>
           <p>Already have an account? <Link to = "/login">Log In</Link>  </p>
           <div>----------------------------or-------------------------------</div>
           <button onClick={signInWithGoogle} className="btn btn-warning">Google Sign In</button>

        </div>
        </div>
       
    );
};

export default Register;