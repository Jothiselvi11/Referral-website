import React from "react";
import { TypeAnimation } from 'react-type-animation';

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
        <h2>Our Services</h2>
        <TypeAnimation
        sequence={[
          `Welcome to Our Services!\nYou Can Refer To Us.`,
          1000,
          "",
        ]}
        speed={50}
        style={{ whiteSpace: 'pre-line', fontSize: '2em' ,marginBottom:"20px"}}
        repeat={Infinity}
      />
          {/* <h2>Our Services</h2>
          <h1>You Can Refer To Us</h1> */}
         <div className="s1"> <p>
          At Referral.ae, we understand the value of your time and the importance of effortless referrals. That's why we've designed a program that allows you to refer others to our services and products without any hassle. Simply register and start referring, and when someone you refer qualifies for the product or engages 
          with our services, you'll be rewarded.</p><p>
          Our team brings together a wealth of expertise in various domains, including Businessmen
Services, Corporate Services, Banking Compliance, UAE Golden Visa, and Real Estate.
</p><p> By
partnering with us, you gain access to this vast knowledge and experience, allowing you to
streamline your operations and supercharge your earnings.
Don't wait any longer! Together, we will reach new heights of success and prosperity, fueled
by the collective ambition to thrive and prosper. Referral.ae is your stepping stone to a
brighter, more rewarding tomorrow!
          </p></div>
        </div>
        {/* <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3">
                  {" "}
                  <i className={d.icon}/>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div> */}
      </div>
    </div>
  );
};
