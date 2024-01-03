import { Stack } from "@mui/material";
import React  from "react";

const Pricing = () => {
  
  
  return (
    <>
      <div className="Header-container">
        <h1 className="Header-price">Pricing</h1>
        <p>   
          Join VikiFit gym for a fitness experience that meets your needs
          without breaking the bank.<br/> Your journey to a healthier, stronger you
          begins here.
        </p>
      </div>
      <Stack direction="row" gap="10px" alignItems='center' alignContent= 'center' justifyContent='center'
      sx={{gap:{lg: '110px', xs: '50px'}}}
      mt= "50px"
      p= "20px"
      >
        <div className="Pricing-card">
          <h3>Free</h3>
          <div className="card-body">
            <h1 className="card-title">$0/mo</h1>
            <ul>
              <li>2 days free trial</li>
              <li> Trainer included for guide sessions</li>
              <li>Granting exercise info on webpage</li>
              <li> Free to join Yoga and Jumba trail sessions</li>
            </ul>
            {/* <button className="Pricing-btn" href='/SignUp'
            >Sign up for Free</button> */}
          </div>
        </div>

        <div className="Pricing-card">
          <h3>Premium</h3>
          <div className="card-body">
            <h1 className="card-title">$29.99/mo</h1>
            <ul>
              <li>Unlimited gym access</li>
              <li>Personalized training sessions</li>
              <li>Full access to group classes</li>
              <li>24/7 gym access</li>
              <li> Dance classes included</li>
            </ul>
            {/* <button className="Pricing-btn">Get Premium</button> */}
          </div>
        </div>

        <div className="Pricing-card">
          <h3>Platinum</h3>
          <div className="card-body">
            <h1 className="card-title">$49.99/mo</h1>
            <ul>
              <li>All Premium benefits</li>
              <li>One-on-one sessions with top trainers</li>
              <li>Complimentary nutritional guidance</li>
              <li>Exclusive access to premium facilities</li>
            </ul>
            {/* <button className="Pricing-btn">Upgrade to Platinum</button> */}
          </div>
        </div>
      </Stack>
    </>
  );
};

export default Pricing;
