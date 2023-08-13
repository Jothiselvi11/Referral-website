import React from "react";
import { Navigation } from "./navigation";
import Footer from "./footer";

function Annual(){
    return(
        <div>
            <Navigation/>
            <div className="about1" data-aos="zoom-out">
            <div className="about2">
            <h1>Annual Corporate Services</h1></div>
           <div className="about4"> <p>"Partner with us in our profit-shared referral program and revolutionize your corporate
journey. Our specialized annual corporate services are meant to streamline operations, from
company formation to compliance and ongoing support. Participate now to unlock the
potential for increased profits and business growth. Your success awaits!"</p>
            </div></div>
            <Footer/>
        </div>
    )
}

export default Annual;