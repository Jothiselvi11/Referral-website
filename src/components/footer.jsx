import React from "react";
import { Link } from "react-router-dom";


function Footer(){
    return(
        <div>
        <div id="footer">
        <div className="container text-center">
        <p>
            |  <Link to="/terms-conditions" href="#" rel="nofollow">
              Terms and Conditions
            </Link> | <Link to="/privacy-policy" href="#" rel="nofollow">
              Privacy Policy
            </Link> | 
          </p>
          {/* <p>
             Copyright reserved by Abhu Dhabi Islamic Bank Public Joint Stock Comapany lincensed by Central Bank of Uae.
            
          </p> */}
          <p>
          Design by{" "}
          <a href="#" rel="nofollow">
              Referral.ae
            </a>
          </p>
           
        </div>
      </div>
            
        </div>
    )

}


export default Footer;