import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/UseAuth';


const Login = () => {
   const  { user, signInWithGoogle,handleUserLogin} = useAuth();
   const[email, setEmail]= useState("");
 const [password, setPassword] =useState("");

    const handleLogin=()=>{
        handleUserLogin(email, password)
    }
    return (
        <div>
            <div>
            <h2>Please Log In</h2>
           
            
                <input type="email" name="" id="" placeholder="Your Email"/>
                             <br />
                
                <input type="password" name="" id="" placeholder="password"/>
                <br />
                       <button onClick={handleLogin} className="btn btn-primary">Submit</button>
                        <p>New to Ever Care ? <Link to ="/register"> Register</Link> </p>
                     <div>-----------------or--------------------------</div>
                     <button onClick ={signInWithGoogle} className="btn-warning">Google Sign In</button>

         
            </div>
           
        </div>
    );
};

export default Login;