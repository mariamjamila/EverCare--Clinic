import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
import useFirebase from '../../hooks/useFirebase';

const Register = () => {
    const{handleUserRegister,
         signInWithGoogle  }  = useAuth()
        const[email, setEmail]= useState("");
        const [password, setPassword] =useState("")
    const  handleRegistration = e =>{
        handleUserRegister(email, password)
        e.preventDefault();
    }
    const handleEmailChange= e =>{
        setEmail(e.target.value);
    }
    const handlePasswordChange=e =>{
        setPassword(e.target.value);
    }

    return (
        <div>
         <div className="mx-5">
           <h2>Create Account</h2> 
        <form onSubmit={handleRegistration }>
            <h3 className="text-primary">Please Register</h3>
               <input onBlur={handleEmailChange} type="email" name="" id="" placeholder="Your Email" />
               <br />
               <input onBlur={handlePasswordChange} type="password" name="" id="" placeholder="password"/>
               <br />
               <input type="password" name="" id=""placeholder="re-enter password" />
             <br />
           <input type="submit" value="submit" />
           <br />
           <button></button>
           </form>
           <p>Already have an account? <Link to = "/login">Log In</Link>  </p>
           <div>----------------------------or-------------------------------</div>
           <button onClick={signInWithGoogle} className="btn-warning">Google Sign In</button>

        </div>
        </div>
       
    );
};

export default Register;