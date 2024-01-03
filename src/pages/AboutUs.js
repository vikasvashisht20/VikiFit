import React from 'react'
import Darkgym from '../assets/dark gym.jpg';
import { Grid } from '@mui/material';
import { Slideshow } from '../components/slideShow';

const AboutUs = () => {
  return (
    <>
    <div className='aboutDiv'>

      <h2 className='whiteText'>About us</h2>
      <h1 className='whiteText'>UNLEASH YOUR INNER WARRIOR,  <br/>
        <span >CRAFTING A STRONGER YOU IS OUR MISSION.</span>
      </h1>
      {/* <p className='whiteText'>Together, we are enabling developers &amp; designers to bring <br/> stunning UIs to life with unrivalled speed and ease.</p> */}
    </div>
    <div className='aboutGym'>
    <Grid container>
       <Grid item xs={6}>
       <Slideshow/>
       </Grid>
       <Grid item xs= {6}>
        <h2 className='gymText'> The VikiFit's fitness studio is not only luxury<br/>  boutique gym. But also Unique in design,<br/>  underpinned by a dedication to <br/> service;  we provide an unrivalled <br/> experience where members feel <br/> at home.</h2>
       </Grid>
      </Grid>
    </div>
    {/* <div className='aboutWeight'>
      <h2 className='whiteText'> TRAIN WITH CONFIDENCE IN A RELAXED AND INCLUSIVE <br/> SPACE, LED BY EXPERT COACHES.</h2>
      <p className='whiteText'>The Studio is redefining the member experience with  <br/>an unrivalled customer service within VikiFit's  <br/>leading luxury gym, dedicated to health, fitness  <br/>and wellbeing.</p>
      <h2 className='whiteText'> FITNESS MEETS LUXURY</h2>
      <p className='whiteText'> Experience a uniquely designed gym floor, dedicated <br/> to 1:1 and small group training, home to our <br/> signature classes LIFT and SWEAT. Our boutique Yoga  <br/> suite offers a wide range of practices,<br/> led by inspirational and expert trainers. Now pamper <br/> yourself and relax. Our changing rooms<br/> are more luxury boutique hotel than gym.</p>
      <h2 className='whiteText'> TRAIN. WORK. RELAX</h2>
      <p className='whiteText'> Take a break from the office or bring the office to us. Work, <br/> meet or study in our 1500sqft co-working space or just relax <br/> after a session with a coffee or smoothie in our private members <br/> lounge.</p>
    </div> */}
   
    </>
  )
}

export default AboutUs

