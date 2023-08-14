import React from "react";
import { Navigation } from "./navigation";
import Footer from "./footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Loans(){
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
            <h1>Loans</h1></div>
            <div className="about3">
<h2>Mortgage Loan:</h2>
<p>Your home, your haven. We understand the importance of this
journey. Beyond finances, it's about family, security, and a future you envision. Let’s make
this significant step a seamless reality, crafting the foundation where your stories unfold.
</p>
<h2>SME Loan:</h2>
<p>Small dreams, big heart. We believe in your enterprise; your passion for
creating. Our SME Loan service isn't just about funds, and it's about nurturing aspirations and
empowering growth. Your success fuels ours – let’s build a legacy that resonates with your
roaring spirit.</p>
<h2>Trade Facilities:</h2>
<p>Getting commerce, connections, thoughts and ideas exchanged, our
facilities go beyond mere transactions. They’re bridges, linking ambition to achievement.
We’re partners in your global journey, providing wings to your ventures. Let’s cross borders,
break barriers, and turn possibilities into profitable realities.</p>
<h2>Personal Loan:</h2>
<p>Every aspiration matters, and we know a loan is much more than
finances – it's about moments and memories. Whether it's education, travel, or something
close to your heart, we’re here to make it happen. Let’s turn your dreams into cherished
experiences, one step at a time.</p>
</div>
            </div>
            <Footer/>
        </div>
    )
}

export default Loans;