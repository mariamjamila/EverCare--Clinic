import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";
import useFirebase from "../../hooks/useFirebase";
import  pic from "../../images/flowers2.jpg"

const Register = () => {
  const { handleUserRegister, signInWithGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const handleRegistration = (e) => {
    e.preventDefault();
    handleUserRegister(email, password);
    if (password.length < 6) {
      setError("password must be six characters");
      return;
    }
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div style={{
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
      <div className="mx-5" style={{backgroundColor:"#bbe079"}}>
        <h2>Create Account</h2>
        <form onSubmit={handleRegistration}>
          <h3 className="text-primary">Please Register</h3>

          <input
            className="form-control"
            onBlur={handleNameChange}
            type="text"
            name=""
            id=""
            placeholder="Name"
          />
          <br />
          <input
            className="form-control"
            onBlur={handleEmailChange}
            type="email"
            name=""
            id=""
            placeholder="Your Email"
            required
          />
          <br />

          <input
            className="form-control"
            onBlur={handlePasswordChange}
            type="password"
            name=""
            id=""
            placeholder="password"
            required
          />
          <br />

          <div className="row mb-3 text-danger">{error}</div>
          <button className="btn btn-warning " type="submit" value="submit">
            Submit
          </button>
          <br />
        </form>
        <p>
          Already have an account? <Link to="/login">Log In</Link>{" "}
        </p>
        <div>----------------------------or-------------------------------</div>
        <button onClick={signInWithGoogle} className="btn btn-warning">
          Google Sign In
        </button>
      </div>
      <div className="" style={{overflow:"hidden"}}>
         <img src={pic} alt="" />
      </div>
    </div>
  );
};

export default Register;
