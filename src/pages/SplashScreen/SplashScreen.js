import React from 'react'
import Button from 'react-bootstrap/Button';
import './splashScreen.css';
import { NavLink } from "react-router-dom";

export default function SplashScreen() {
  return (
    <div id='thePage' className='d-flex flex-column justify-content-around align-items-center'>
        <div id='top-section'>
          <img className="store-logo" src="storeLogo.png" alt="logo" />
          <h1 className="heading">Saylani Welfare</h1>
          <p className="sub-heading lead text-uppercase">online discount store</p>
        </div>
        <div id='bottom-section'>
          <Button variant="outline-success">
            <NavLink to="sign-up">Get Started</NavLink>
          </Button>
        </div>
    </div>
  )
}
