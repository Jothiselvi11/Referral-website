import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";


export const Image = ({ title, largeImage, smallImage ,url}) => {
 const navigate= useNavigate()

  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {" "}
        <Link  title={title} data-lightbox-gallery="gallery1">
        <div onClick={()=>{
          navigate(url)
        }}>
        <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img src={smallImage} className="img-responsive" alt={title} />{" "}
        </div>
          
        </Link>{" "}
      </div>
    </div>
  );
};
