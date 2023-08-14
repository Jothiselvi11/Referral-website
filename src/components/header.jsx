import React from "react";
import sample from '../video/v1.mp4';
import { useEffect } from "react";
import { useRef } from "react";
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Header = (props) => {
  const el = React.useRef(null);
    React.useEffect(() => {
      
        AOS.init(
          {
            duration:1000
          }
        );
      
        const typed = new Typed(el.current,
        {
            strings:["Referring!"," Earning!"],
            typeSpeed:100,
            backSpeed:100,
            backDelay:1000,
            loop:true
        }
    );
    return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
              {/* <div className="abc">
              <video className='videoTag' autoPlay loop muted>
    <source src={sample} type='video/mp4' />
</video></div> */}
                <h1>
                Join Now To Start  <span ref={el} className="invest"/>
                  
                </h1>
                <p data-aos="zoom-in">{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#contact" 
                  className="btn btn-custom btn-lg page-scroll" id="conbtn btns" style={{background: "#0E8388"}}
                >
                  Join Us Today
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
