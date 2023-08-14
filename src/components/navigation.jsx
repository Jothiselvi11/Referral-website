import React from "react";
import "../styles/nav.css"
import {Link, useNavigate} from "react-router-dom";
import logo from "../video/new3.png"

export const Navigation = (props) => {
  const navigate= useNavigate();
  
  return (
    
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          {/* <a className="navbar-brand page-scroll" href="#page-top">
            Referral.ae
          </a>{" "} */}
          <img src={logo} className="logo1"/>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link href="#features" className="page-scroll" onClick={()=>{
                navigate("/")
              }}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#about1" className="page-scroll" to="/about">
                About Us
              </Link>
              {/* <Link to="about1" className="page-scroll">About</Link> */}
            </li>
            <li className="dropdown">
              <a href="#services" className="page-scroll dropbtn" >
                Our Services
              </a>
              <div class="dropdown-content">
              <Link to="/real-estate">Real Estate</Link>
              <Link to="/business">Business Services</Link>
    <Link to="/banking">Banking and business compliance</Link>
    <Link to="/loans">Loans</Link>
    <Link to="/uaevisa">Golden Uae Visa</Link>
    <Link to="/digital-market">Digital Marketing</Link>
    <Link to="/insurance">Insurance Services</Link>
    <Link to="/investment">Investment Services</Link>
   
   
   
    
  </div>
            </li>
            {/* <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li> */}
            <li>
              <Link to="/features" className="page-scroll">
                Mission and visions
              </Link>
            </li>
            <li>
              <Link href="#team" className="page-scroll" to="/team">
                Our Team
              </Link>
            </li>
            <li>
              <Link to="/contact" href="#contact" className="page-scroll" >
                Join Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
