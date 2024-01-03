import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import emailjs from '@emailjs/browser'



const SignUpForm = () => {
    const[name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    
    //Your EmaiJS serviceId
    const serviceId = process.env.REACT_APP_SERVICE_ID_KEY;
    const templateId =  process.env.REACT_APP_TEMPLATE_ID_KEY;
    const publicKey =  process.env.REACT_APP_PUBLIC_KEY;
    
    // dynamci template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'VikiFit ',
      message: message,
      };

      emailjs.send(serviceId,  templateId,templateParams, publicKey)
      .then((response) => {
          console.log("Email sent successfully",response);
          setName('');
          setEmail('');
          setMessage('');
          alert('Thank you for your feedback');
      }) 
        .catch((error) => {
          console.log("Error sending email:",error);
      });
    }
  return (
    <div className="SignUp">
      <h2> Reach us by sharing your feedbacks</h2>
      <form onSubmit={handleSubmit} className="emailForm"> 
        <input className=""
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* <label> Email</label> */}
        <input onChange={(e) =>setEmail(e.target.value)} value={email} type="email" placeholder="Your email" required/>

        <textarea className="messagearea"
          cols= "30"
          rows= "5"
          value={message}
          placeholder="Your message"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit"> Send us feedback</button>
      </form>
      <p>
        By signing up for Vikas fitness, you agree to our <br />
        <a href="#">Terms and conditions</a> & <a href="#">Policy Privacy</a>
      </p>
       
      
      {/* <p >
        <button className="socialIconPadding">
        <a  href="https://github.com/vikasvashisht20" target="_blank"> <GitHubIcon />
        </a>  
        </button>
        <button className="socialIconPadding">    
          <FacebookIcon />
        </button>
        <button className="socialIconPadding">
          <GoogleIcon />
        </button>
        <button className="socialIconPadding">  
          <a href="https://www.linkedin.com/in/vikas-vashisht-0724b3218/"><LinkedInIcon /></a>
        </button>
      </p> */}
    </div>
  );
};

export default SignUpForm;
