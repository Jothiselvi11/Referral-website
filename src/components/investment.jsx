import React from "react";
import { Navigation } from "./navigation";
import Footer from "./footer";

function Investment(){
    return(
        <div>
            <Navigation/>
            <div className="about1" data-aos="zoom-out">
            <div className="about2">
            <h1>Investments</h1>
            </div>
            <div className="about3 short">
<h2> Real Estate</h2>
<p>Welcome to a world of dreams and possibilities. Our Real Estate services
are driven by your aspirations – finding the perfect space to call home or the ideal investment
that resonates with your heart. Let’s turn your visions into reality, crafting a future filled with
cherished moments.</p>
<h2> Financial Market</h2>
<p>Navigating the Financial Market is a journey of trust and growth.
We're here not just as advisors but as partners in your aspirations. Your financial success is
our purpose, guiding every step with unwavering dedication. Together, we'll shape a
prosperous tomorrow and build your dreams.
</p></div>
            </div>
            <Footer/>
        </div>
    )
}

export default Investment;