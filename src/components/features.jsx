import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import JsonData from "../data/data.json";
import { Header } from "./header";
import { Navigation } from "./navigation";
import Footer from "./footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Features = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);

      
      AOS.init(
        {
          duration:1000
        }
      );
  }, []);
  return (
    <div>
<Navigation/>
    <div id="features" className="text-center" data-aos="fade-up "data-aos-anchor-placement="top-bottom">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Mission And Vision</h2>
          <p style={{fontWeight:"500"}} data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">"Your Network, Your Rewards"</p>
        </div>
       
        <div className="row f1">
          {landingPageData.Features
            ? landingPageData.Features.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-12 col-md-12">
                  {" "}
                  <i className={d.icon} data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"></i>
                  <h3>{d.title}</h3>
                  <p style={{fontSize:"20px"}}>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};
