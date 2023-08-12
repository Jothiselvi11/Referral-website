import React from "react";
import { Navigation } from "./navigation";
import Footer from "./footer";

function Digital(){
    return(
        <div>
            <Navigation/>
            <div className="about1">
            <div className="business">
            <h1>Digital Marketing</h1>
            <span>Join our referral partnership program and empower businesses to amplify their online
presence and achieve marketing goals while you earn handsome commissions. Our proven
digital marketing strategies, from captivating social media campaigns to result-driven search
engine optimization, ensure reaching the target audience effectively—partner with us to
significantly impact businesses, digital footprint and share the success together.</span></div>
<div className="about3"><h2>SEO</h2>
<p>Boost your online presence with our SEO services. Reach your target audience effectively and
climb search engine rankings. Our team will optimize your website, ensuring increased visibility and
organic traffic to grow your business.</p>
<h2>Web Designing</h2>
<p>Welcome to our web designing services! We craft visually stunning and user-friendly
websites tailored to your brand and audience. Leave a lasting impression on visitors with responsive
designs that guarantee seamless device experiences.</p>
<h2>Social Media Marketing</h2>
<p>Connect, engage, and grow your audience with our social media marketing
expertise. From content creation to campaign management, we&#39;ll help your brand stand out on
popular platforms, driving valuable interactions and increasing brand loyalty.</p>
<h2>Google Ads</h2>
<p>Unlock the power of Google Ads for your business. Our Google-certified team will
create targeted campaigns to reach potential customers immediately, driving qualified leads and
maximizing your return on investment.</p>
<h2>Social Media Page Handling</h2>
<p>Trust us to manage your social media presence seamlessly. Our experts
will curate engaging content, respond to interactions, and build a vibrant community around your
brand, ensuring your social media pages have a lasting impact.</p>
</div>
            </div>
            <Footer/>
        </div>
    )
}

export default Digital;