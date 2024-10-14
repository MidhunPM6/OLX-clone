import React, { useState } from "react";
import Logo from "../../olx-logo.png";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/config";
import { useNavigate } from "react-router-dom";



function Login() {
  const [lname, setLname] = useState("");
  const [lpassword, setLpassword] = useState("");
  const Navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        signInWithEmailAndPassword(
        auth,
        lname,
        lpassword
      );
      //const user = userCredential.user;
      Navigate('/')
    } catch (error) {
      console.error("Error signing in:", error.message);
      alert("Try Again");
    }
  };

  const signupHandler = () => {
    Navigate("/signup");
  };

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt=""></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={lpassword}
            onChange={(e) => setLpassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <button onClick={signupHandler}>Signup</button>
      </div>
    </div>
  );
}

export default Login;
