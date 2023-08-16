import React from "react";
import { Navigation } from "./navigation";
import Footer from "./footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import b1 from "../video/bu1.jpg";
import b2 from "../video/bu2.jpg"
import b3 from "../video/bu3.jpg"
import b4 from "../video/bu4.jpg"
import b5 from "../video/bu5.jpg"
import b6 from "../video/bu6.jpg"
import b7 from "../video/bu7.jpg"
import b8 from "../video/bu8.jpg"
import b9 from "../video/bu9.jpg"
import b10 from "../video/bu10.jpg"

function Business(){
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
            <div className="business">
            <h1>Businessmen Services</h1>
            <span>
               Maximize your business success with our lucrative leads referral program. Invest in building
valuable connections and watch your returns soar. Join now and unlock the power of referrals
to drive your business growth. The future of your investment starts here.</span>
             </div>
<div className="about31">
<div className="row bus">
                <div className="col-md-6">
<h2>Company Formation</h2>
<p> Company formation refers to legally incorporating a new business. It involves
registering the company with the appropriate government authorities, defining its structure, and
obtaining necessary permits. Once this is done, any business can begin functioning.
</p></div>

                <div className="col-md-6 xs-12">
                  <img className="bus-img" src={b1} data-aos="fade-up"/>
                </div></div>
                <div className="row bus">
                

                <div className="col-md-6 xs-12">
                  <img className="bus-img" src={b2} data-aos="fade-up"/>
                </div>
                <div className="col-md-6">              
<h2>TL Renewal</h2>
<p> Trade License renewal extends the validity of a business's trade license. It is essential
for maintaining legality and continued operations. Timely renewal ensures the company can
continue its commercial activities without disruptions.
</p> </div></div>

                <div className="row bus">
                <div className="col-md-6 xs-12">
<h2>VAT Services</h2>
<p> This includes VAT registration, filing VAT returns, and ensuring compliance with VAT
regulations. Expert VAT services can help businesses manage their tax liabilities efficiently and avoid
penalties.</p></div>
<div className="col-md-6 xs-12">
                  <img className="bus-img" src={b3} data-aos="fade-up"/>
                </div>


</div>
 <div className="row bus">
 <div className="col-md-6 xs-12">
                  <img className="bus-img" src={b4} data-aos="fade-up"/>
                </div>
                <div className="col-md-6 xs-12">
<h2>Corporate Tax Advisory</h2>
<p>
 Corporate tax advisory involves expert guidance and assistance to
businesses in managing their tax obligations effectively. Tax advisors help businesses optimize tax
planning, deductions, and credits, and comply with tax laws, ultimately minimizing the corporate tax
burden.</p></div></div>
<div className="row bus">
 <div className="col-md-6 xs-12">
<h2>Audit Financials</h2> 
<p>A systematic examination and verification of the company's financial records,
transactions, and statements is necessary for every business. This process is for transparency,
compliance with accounting principles and standards and providing stakeholders with confidence in
the business’s financial health.
</p></div>
<div className="col-md-6 xs-12">
                  <img className="bus-img" src={b5} data-aos="fade-up"/>
                </div>
</div>
<div className="row bus">
<div className="col-md-6 xs-12">
                  <img className="bus-img" src={b6} data-aos="fade-up"/>
                </div>
                <div className="col-md-6 xs-12">
<h2>Loan Eligibility Check</h2>
<p>This is an assessment of an individual or a business's creditworthiness to
determine their ability to qualify for a loan
</p></div></div>
<div className="row bus">
<div className="col-md-6 xs-12">

<h2>Office Space</h2>
<p> You have an idea of your office's appearance. But do you know how to create that? Do
you need a dedicated office, a co-working space, or a virtual office? Your office impacts the
company's image, employee productivity, and overall business operations, so you must get it right.
</p></div>
<div className="col-md-6 xs-12">
                  <img className="bus-img" src={b7} data-aos="fade-up"/>
                </div></div>

                <div className="row bus">
                <div className="col-md-6 xs-12">
                  <img className="bus-img" src={b8} data-aos="fade-up"/>
                </div>
                <div className="col-md-6 xs-12">
<h2>Business Account</h2>
<p>A specialized bank account designed for commercial purposes that allows
businesses to manage their finances, receive payments, make transactions, and separate personal
and business funds for better financial management and transparency is a must.
</p></div>
                </div>
                <div className="row bus">
                <div className="col-md-6 xs-12 bus1">

<h2>Business Compliance</h2>
<p> Adhering to complex legal and regulatory requirements applicable to a
company's operations is no easy task. We handle various aspects like tax compliance, licensing, data
protection, and other industry-specific regulations.
</p></div>
 <div className="col-md-6 xs-12">
                  <img className="bus-img" src={b9} data-aos="fade-up"/>
                </div></div>
                <div className="row bus">
                <div className="col-md-6 xs-12">
                  <img className="bus-img" src={b10} data-aos="fade-up"/>
                </div>
                <div className="col-md-6 xs-12">
<h2>Will Writing Services </h2>
<p>This is professional assistance for creating a legally binding will. It allows
individuals to specify how they want their assets and estate to be distributed after their death,
ensuring their wishes are honored and their loved ones are taken care of according to their
preferences.
</p></div>


</div></div></div>
<div className="annual1">
<h1 >Annual Corporate Services</h1>
            <p>"Partner with us in our profit-shared referral program and revolutionize your corporate
journey. Our specialized annual corporate services are meant to streamline operations, from
company formation to compliance and ongoing support. Participate now to unlock the
potential for increased profits and business growth. Your success awaits!"</p>
            
            </div>
           
            <Footer/>
        </div>
        
    )
}

export default Business;