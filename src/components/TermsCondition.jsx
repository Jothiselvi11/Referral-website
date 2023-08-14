import React from "react";
import { Header } from "./header";
import Footer from "./footer";
import { Navigation } from "./navigation";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Terms(){
    React.useEffect(() => {
      
        AOS.init(
          {
            duration:1000
          }
        );})
    return(
        <div>
        <Navigation/>
        <div className="about1"  data-aos="zoom-out">
        <div className="about2">
        <h1 >Terms and Conditions</h1>

        </div>
        <div className="about31">
        <h2>Referral Client Contact:</h2>
<p>All referral clients will be contacted using the name of our referral partners. We
respect the relationship you have established with your referrals and will ensure
they know your involvement in the referral process.</p>
<h2>Commission Eligibility:</h2>
<p >The commission will only be paid for converted leads. Non-qualifying leads,
which our team determines based on predefined criteria, will not be eligible for
commission.</p>
<h2>Lead Validation:</h2>
<p>Our team will diligently validate the leads referred by our partners to ensure
their authenticity and eligibility. Leads that meet our validation criteria will be
considered qualifying leads.</p>
<h2>Payment Communication:</h2>
<p>Once a referral lead is successfully converted, our team will promptly notify you
regarding the commission amount and the expected payment release date. We
believe in transparent communication throughout the commission payment
process.</p>
<h2>Payment Release:</h2>
<p>Commission payments for converted referral leads will be released within a
maximum of 60 days from the date of successful conversion. We strive to
process payments promptly while allowing for necessary verification and
administrative procedures.</p>
<h2>Communication and Updates:</h2>
<p>We will keep our referral partners informed about the progress of their referred
leads. Regular updates will be provided regarding the status of referrals,
including any changes or additional information required.</p>
<h2>Exclusivity and Non-Disclosure:</h2>
<p>We value the trust and confidentiality of our referral partners. Any sensitive or
confidential information shared during the referral process will be treated with
utmost discretion. Our referral partners can be assured of our commitment to
maintaining their privacy.</p>
<h2>Modification or Termination:</h2>
<p>We reserve the right to modify or terminate the referral program at any time. In
such cases, all existing referral agreements and commission terms will be
honoured until the effective date of termination or modification.</p>
<h2>Compliance with Laws and Regulations:</h2>

<p>Our referral partners are responsible for complying with all applicable laws and
regulations related to the referral program, including any requirements for
disclosure or obtaining necessary permissions.</p>
<h2>Updates and Changes:</h2>
<p>Referral.ae reserves the right to update or modify the commission payment
terms at its discretion. Any changes will be communicated to our referral
partners in advance.
By participating in our referral program, you acknowledge and agree to the
above terms and conditions. We value your partnership and look forward to a
successful referral collaboration.</p>
            
            </div>

        </div>
        <Footer/>
    

        </div>
    )
}

export default Terms;