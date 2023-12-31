import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import ReactTyped from "react-typed";
import { Header } from "./header";
import { Navigation } from "./navigation";
import Footer from "./footer";
import { Link } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
    <Navigation/>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
              <h2>
        Let's Get{" "}
        <ReactTyped
          strings={["Connected"]}
          typeSpeed={200}
          loop
          backSpeed={30}
          cursorChar="🔗"
          showCursor={true}
        />
      </h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                
                <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="integer"
                        id="r-number"
                        name="r-number"
                        className="form-control"
                        placeholder="Contact Number"
                        
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                <div className="col-md-6">
                <div className="form-group ">
                  <div>
                  <select placeholder="Product" name="cars" id="cars" className="form-control drop">
                  
    <option value="volvo" className="dropdown-content">Products</option>
    <option value="Real Estate" className="drt">Real Estate</option>
    <option value="Business Services">Business Services</option>
    <option value="Banking">Banking & Business Compliance</option>
    <option value="Loans">Loans</option>
    <option value="visa">UAE Golden Visa</option>
    <option value="Digital Marketing">Digital Marketing </option>
    <option value="Insurance">Insurance</option>
    <option value="Investment">Investment</option>

  </select>
  </div></div></div>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <div><input
                        type="text"
                        id="referral-name"
                        name="referral-name"
                        className="form-control"
                        placeholder="Referral person Name"
                        required
                        onChange={handleChange}
                      />
                    
                      </div>
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="integer"
                        id="r-number"
                        name="r-number"
                        className="form-control"
                        placeholder="Referral Contact Number"
                        
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 Referral. Design by{" "}
            <a href="#" rel="nofollow">
              Referral.ae
            </a>
          </p>
        </div>
      </div> */}
      <Footer/>
    </div>
  );
};
