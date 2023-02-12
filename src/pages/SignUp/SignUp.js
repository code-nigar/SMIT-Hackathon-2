import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../conf/config";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import './signUp.css'

export default function SignUp() {
  const [Name, setName] = useState("");
  const [Contact, setContact] = useState("");
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");

  const navigate = useNavigate();

  const signUpfunc = (e) => {
    e.preventDefault();

    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, Email, Pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user registered as", user);
        //dispatch trigger the action to replace login switch from navbar with logout switch
        // dispatch({ type: "USER", payload: true });
        //navigate user to profile page
        navigate(`/UserHome/${user.uid}`);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div id="thePage" className="d-flex flex-column justify-content-center align-items-center">
      <div className="form-container">
        <h1 className="heading">Saylani Welfare</h1>
        <p className="sub-heading lead text-uppercase">online discount store</p>
        <form className="signup-form p-4 d-flex flex-column align-items-center">
          <div className="fields d-flex flex-column justify-content-center px-4">
            <div className="input-field d-flex flex-row justify-content-between mt-3">
              {/* <label htmlFor="name"> Name:</label> */}
              <input
                type="text"
                name="name"
                id=""
                value={Name}
                onChange={(e) => setName(e.target.value)}
                placeholder="name"
              />
            </div>
            <div className="input-field d-flex flex-row justify-content-between mt-3">
              {/* <label htmlFor="name"> Contact:</label> */}
              <input
                type="text"
                name="Contact"
                id=""
                value={Contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="contact"
              />
            </div>
            <div className="input-field d-flex flex-row justify-content-between mt-3">
              {/* <label htmlFor="email">Email:</label> */}
              <input
                type="email"
                name="email"
                id=""
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
              />
            </div>
            <div className="input-field d-flex flex-row justify-content-between mt-3">
              {/* <label htmlFor="Pass">Password: </label> */}
              <input
                type="password"
                name="Pass"
                id=""
                value={Pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="password"
              />
            </div>
          </div>
          <Button variant="outline-success" className="mt-4" onClick={(e) => signUpfunc(e)}>
          Sign Up
          </Button>
        </form>
      </div>
      <p className="mt-2">already have an account?
        <NavLink to="/sign-in">Sign In</NavLink>
      </p>
    </div >
  );
}
