import React from "react";
import { Header } from "./header";
import Footer from "./footer";
import { Navigation } from "./navigation";

function Realestate(){
    return(
        <div>
           <Navigation/>
            <div className="about1">
            <div className="business">
                <h1>Real estate</h1>
                <span>Unlock the gateway to perfect property solutions through our exclusive referral marketing
program. Partner with us, and not only will you gain access to trusted real estate services for
buying, selling, renting, investing, and will writing, you will also reap handsome rewards.
Our expert team offers invaluable insights and assistance, ensuring a seamless process. Refer
others to experience the best in real estate with us!</span></div>
          <div className="about3"><h2>Buying – Residential/Commercial (Self, Rental, Investments)</h2>
            <p>Welcome to our buying services
page! Whether you're seeking a perfect home, a lucrative commercial space, or a smart investment
opportunity, our team guides you every step of the way. Discover your dream property confidently,
tailored to your residential, rental, or investment needs.</p>
            <h2>Selling – Residential/Commercial</h2>
            <p>Congratulations on finding our selling services! Trust us to handle
your residential or commercial property sale with utmost care. Our proven marketing strategies and
negotiation expertise ensure you get the best value. Let&#39;s make the selling process smooth and
rewarding together.</p>
            <h2>Rental Services</h2>
            <p>Searching for rental services? You've come to the right place. Whether it's a cosy
home or a thriving commercial space, our extensive rental solutions cater to your requirements.
Rent with confidence or find reliable tenants effortlessly with our dedicated rental assistance.</p>
            <h2>Holiday Homes (short-rental, Self)</h2>
            <p>Hey there, vacation enthusiast! Our Holiday Homes services
promise unforgettable getaways. Experience short-term rentals in captivating destinations or
indulge in self-catering retreats. With our handpicked holiday homes, create cherished memories
and escape to blissful experiences.</p>
            </div></div>  
            <Footer></Footer>
        </div>
    )
}

export default Realestate;