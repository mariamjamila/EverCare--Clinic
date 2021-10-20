import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/UseAuth";
import  pic from "../../../images/flower.jpg"
import "./Login.css";
const Login = () => {
  const { user, signInWithGoogle, handleUserLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    handleUserLogin(email, password);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div
      style={{
        gap: "50px",
        maxWidth: "800px",
        display: "grid",
        margin: "0 auto",
        gridTemplateColumns: "1fr 1fr",
        color:"#606060",
        height:"600px",
        marginTop:"50px"
      }}
    >
      <div className="" style={{overflow:"hidden"}}>
         <img src={pic} alt="" />
      </div>
      <div className="login-box p-3">
        <h2>Please Log In</h2>

        <input
          className="form-control"
          onBlur={handleEmailChange}
          type="email"
          name=""
          id=""
          placeholder="Email"
        />
        <br />

        <input
          className="form-control"
          onBlur={handlePasswordChange}
          type="password"
          name=""
          id=""
          placeholder="Password"
        />
        <br />
       
        <button onClick={handleLogin} className="btn btn-warning">
          Submit
        </button>
        <p>
          New to Ever Care ? <Link to="/register"> Register</Link>{" "}
        </p>
        <div>-----------------or-----------------</div>
        <button onClick={signInWithGoogle} className="btn btn-warning">
          Google Sign In
        </button>
        
      </div>
    </div>
  );
};

export default Login;
