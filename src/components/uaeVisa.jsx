import React from "react";
import { Navigation } from "./navigation";
import Footer from "./footer";

function Uaevisa(){
    return(
        <div>
            <Navigation/>
            <div className="about1">
            <div className="business">
            <h1>UAE Golden Visa</h1>
            <span>Open doors to new horizons with the prestigious UAE Golden Visa program through our
exclusive referral marketing program. Our seamless visa services make the application
process a breeze, ensuring you and your referred connections secure visas that unlock
opportunities. Join now and embark on a journey of limitless possibilities!</span></div>
<div className="about3 short"><h2>Investors/Entrepreneurs</h2>
<p>Congratulations on your journey to the UAE Golden Visa! Our dedicated
services cater to investors and entrepreneurs seeking this prestigious opportunity. We&#39;d like to help
you with the application process, ensuring a smooth path to residency and new business horizons.</p>
<h2>Salaried</h2>
<p>Exciting times lie ahead with the UAE Golden Visa for salaried individuals. Our specialized
team will guide you through the visa application, making your transition to the UAE a seamless
experience. Embrace new possibilities and build a promising future in the Emirates.</p> 
            </div></div>
            <Footer/>
        </div>
    )
}

export default Uaevisa;