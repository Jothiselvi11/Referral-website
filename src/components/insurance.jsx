import React from "react";
import { Navigation } from "./navigation";
import Footer from "./footer";

function Insurance(){
    return(
        <div>
            <Navigation/>
            <div className="about1" data-aos="zoom-out">
            <div className="about2">
            <h1>Insurance</h1></div>
            <div className="about3">
            <h2>Staff Medical Insurance</h2>
            <p> Prioritize your team's well-being with our Staff Medical
Insurance. We care for your employees health, providing comprehensive coverage and peace
of mind. Strengthen your workforce by offering the best medical care and fostering a
thriving, secure environment.</p>
<h2> General Insurance</h2>
<p>Safeguard against uncertainties with our General Insurance
solutions. From property to liability, we,ve got you covered. Rest easy knowing your assets
and interests are protected, enabling you to face challenges confidently.</p>
<h2>  Key Man Insurance</h2>
<p>You know, and we know that your business's future is of
paramount importance. Our Key Man Insurance shields your company from potential
setbacks by covering key personnel. Ensure business continuity even in unforeseen
circumstances by securing your operations and investments.</p>
<h2>     Life Insurance</h2>
<p>Embrace peace of mind by letting us care for your family's financial
stability and legacy. Whether for protection or estate planning, our tailored solutions ensure
your loved ones future remains secure, no matter what lies ahead.</p>
</div>
            </div>
            <Footer/>
        </div>
    )
}

export default Insurance;