import { Image } from "./image";
import React, { useState } from "react";
import img1 from "../video/01-small.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export const Gallery = (props) => {

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
        
      <h2 data-aos="fade-down">Link to Our services</h2>
          
          <p>
          Invest in your future and join us today to witness the transformative power of
collaboration!
          </p>
        </div>
        {/* <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image className ="serviceimg"
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                      url={d.url}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
          
      
        </div> */}
      
      <div style={{ }} >
      
      {props.data && <Carousel infiniteLoop autoPlay={true} transitionTime={4000} >

      
            {props.data
              ? props.data.map((d, i) => (
                  <div className="galcontainer"><div
                    key={`${props.data[i].title}-${i}`}
                    // className="col-sm-6 col-md-4 col-lg-4"
                    className="gal3"
                  >
                    <Image className ="serviceimg"
                      title={props.data[i].title}
                      largeImage={props.data[i].largeImage}
                      smallImage={props.data[i].smallImage}
                      url={props.data[i].url}
                    />
                  
                  </div>
                  {/* <div
                    key={`${props.data[i+1].title}-${i+1}`}
                    // className="col-sm-6 col-md-4 col-lg-4"
                    className="gal3"
                  >
                    <Image className ="serviceimg"
                      title={props.data[i+1].title}
                      largeImage={props.data[i+1].largeImage}
                      smallImage={props.data[i+1].smallImage}
                      url={props.data[i+1].url}
                    />
                  
                  </div>
                  <div
                    key={`${props.data[i+2].title}-${i+2}`}
                    // className="col-sm-6 col-md-4 col-lg-4"
                    className="gal3"
                  >
                    <Image className ="serviceimg"
                      title={props.data[i+2].title}
                      largeImage={props.data[i+2].largeImage}
                      smallImage={props.data[i+2].smallImage}
                      url={props.data[i+2].url}
                    /> */}
                  
                  {/* </div> */}
                  </div>

                ))
              : "Loading..."}
          
                
              
            </Carousel>}
            </div>
    </div>
</div>
  );
};