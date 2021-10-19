import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/UseAuth";

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
    <div>
      <div>
        <h2>Please Log In</h2>

        <input
          onBlur={handleEmailChange}
          type="email"
          name=""
          id=""
          placeholder="Your Email"
        />
        <br />

        <input
          onBlur={handlePasswordChange}
          type="password"
          name=""
          id=""
          placeholder="password"
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
