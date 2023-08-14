import React from "react";
import { Header } from "./header";
import Footer from "./footer";
import { Navigation } from "./navigation";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Privacy(){
    React.useEffect(() => {
      
        AOS.init(
          {
            duration:1000
          }
        );})
    return(
        <div>
        <Navigation/>
        <div data-aos="fade-down">
        <div className="about1">
        <div className="about2">
        <h1 >Privacy Policy</h1>

        </div>
        <div className="about31">
        <h2>Data Protection Policy</h2>
<p>At Referral.ae, we take data protection seriously and are committed to
safeguarding the privacy and confidentiality of your personal information. This
Data Protection Policy outlines how we collect, use, store, and protect your data
when you visit our website or engage with our referral program. By using our
services, you consent to the practices described in this policy.</p>
<h2>Information Collection:</h2>
<p >We collect and process personal data that you provide voluntarily when using
our website or participating in our referral program. This data may include your
name, contact details, email address, and other information relevant to the
referral process.</p>
<h2>Use of Personal Data:</h2>
<p>We use your personal data to facilitate the referral process, communicate with
you about our services, and ensure smooth program operations. Your
information is solely used for the purpose for which it was collected and will not
be shared with third parties without your consent, except as required by law.</p>
<h2>Data Security:</h2>
<p>We implement industry-standard security measures to protect your personal
data from unauthorized access, disclosure, alteration, or destruction. Our
website is encrypted using SSL (Secure Socket Layer) to ensure the secure
transmission of data.</p>
<h2>Data Retention:</h2>
<p>We retain your personal data for as long as necessary to fulfil the purposes for
which it was collected, and to comply with legal obligations. If you wish to have
your data removed from our systems, please contact us using the provided
contact details.</p>
<h2>Cookies and Analytics:</h2>
<p>Our website may use cookies to enhance user experience and track website
usage. We may also use analytics tools to collect and analyze data on website
traffic and user behaviour. This information is anonymized and used for
improving our services.</p>
<h2>Third-Party Links:</h2>
<p>Our website may contain links to third-party websites. Please note that we are
not responsible for the privacy practices of these websites. We encourage you to
review the privacy policies of third-party sites before providing any personal
data.</p>
<h2>Your Rights:</h2>
<p>You have the right to access, update, and correct your personal data held by us.
If you have any questions or wish to exercise your rights, please contact us
using the provided contact details.</p>
<h2>Changes to this Policy:</h2>

<p>We may update this Data Protection Policy from time to time to reflect changes
in our practices or applicable laws. The most current version of the policy will be
posted on our website.
By using our services and engaging with our referral program, you agree to the
terms outlined in this Data Protection Policy. If you have any concerns or queries
regarding data protection, please contact us at info@referral.ae Your privacy and
data security are of utmost importance to us, and we are committed to
maintaining the trust you place in our services..</p>

            
            </div>

        </div>

        </div>
        <Footer/>

        </div>
    )
}

export default Privacy;