import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


const Footer = () => {
  return (
    <div className='footerContainer'>
      <div className='contact'>
        <h2>Contact</h2>
        <p className='details'>
          VikiFit2024@gmail.com <br />
          VikiFit Studio <br />
          Kalyan Marg 201, <br />
          Faridabad <br />
          10XX21, Haryana
        </p>
      </div>

      {/* <div className='footerIcons'>
      <p >
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
      </p>
      </div> */}
      <div className='footerHeading'>
      <p >
        <button className="socialIconPadding">
        <a  href="https://github.com/vikasvashisht20" target="_blank"> <GitHubIcon />
        </a>  
        </button>
        <button className="socialIconPadding">    
         <a href='https://www.facebook.com/profile.php?id=100008459777628&mibextid=2JQ9oc'>
         <FacebookIcon /></a> 
        </button>
        <button className="socialIconPadding">
          <a href='https://www.instagram.com/vashishtvikas17?igsh=MTQ0dDNlam1lcTJldw=='><InstagramIcon /></a>
        </button>
        <button className="socialIconPadding">  
          <a href="https://www.linkedin.com/in/vikas-vashisht-0724b3218/"><LinkedInIcon /></a>
        </button>
      </p>
        <h2>Made with ❤️by Vikas Vashisht</h2>
      </div>
      
    </div>
  );
}

export default Footer