import React from "react";
import { Header } from "./header";
import Footer from "./footer";
import { Navigation } from "./navigation";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactFloaterJs from 'react-floaterjs';

function Abouts(){
    React.useEffect(() => {
      
        AOS.init(
          {
            duration:1000
          }
        );})
    return(
        <div>
            <Navigation/>
            <div className="about1" data-aos="zoom-out">
            <div className="about2">
            <h1>About us</h1>
            <span>Sharing value has never been this rewarding!</span>
            </div>
            <div className="container aboutnew ">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            {/* <img src="img/ab.jpg" className="img-responsive" alt="" />{" "} */}
            <ReactFloaterJs>
  <img src="img/ab1.jpg" className="img-responsives " />
</ReactFloaterJs>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Welcome To Referral.ae</h2>
              {/* <span>Welcome To Referral</span> */}
              <p  data-aos="flip-down">Our platform offers a seamless and hassle-free way to refer friends and colleagues while reaping the benefits
               of lucrative rewards.At Referral.ae, we know your time is precious and respect that.
                That's why we've specially crafted a referral program that allows you to refer others to our exceptional services and products effortlessly. 
                The best part? Our referral program seamlessly integrates into your daily routine. So, whether at work, socializing with friends, or simply
                 relaxing at home, you can easily refer others and watch your rewards grow. 
              Register with us and start referring today!</p>
              </div>
              </div>
              </div>
              </div>
            
            {/* <div className="about3">
            <h1>About us</h1>
            <span>Sharing value has never been this rewarding!</span>
            </div> */}
            
            <div className="about3">
                <h2>Discover Effortless Referral Rewards</h2>
                <p>Our platform offers a seamless and hassle-free way to refer friends and colleagues while
reaping the benefits of lucrative rewards.</p>
                <h2>We Value Your Time</h2>
                <p>At Referral.ae, we know your time is precious and respect that. That&#39;s why we&#39;ve specially
crafted a referral program that allows you to refer others to our exceptional services and
products effortlessly. No complicated processes or unnecessary steps – just a straightforward
and rewarding experience.</p>
                <h2>Earn Rewards with Ease</h2>
                <p>You&#39;ll be generously rewarded when someone you refer qualifies for our product or engages
with our services. The best part? Our referral program seamlessly integrates into your daily
routine. So, whether at work, socializing with friends, or simply relaxing at home, you can
easily refer others and watch your rewards grow. Register with us and start referring today!</p>
                <h2>No Extra Effort Required</h2>
                <p>Gone are the days of making extra efforts to participate in referral programs. With
Referral.ae, you can leverage your network and get rewarded by simply sharing the value of
our services and products with others. It's a win-win situation that lets you enjoy the benefits
of our referral program without disrupting your daily routine.</p>
            </div>
</div>

            <Footer/>
        </div>
    )

}


export default Abouts;