import { Box, Button, Grid, TableRow, Typography} from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom';
import HomeWallpaper from '../assets/HomepageBanner.jpg';

const HomeBanner = () => {
  return (
    // <Box  sx={{
    //     mt: {lg: '100px', xs: '70px'},
    //     ml: {sm: '50px'}
    // }} position = "relative" p = "20px">
    // <Grid container spacing={0}>
    //     <Grid xs={12} md = {6}>
    //         <Typography color= "#337a2c" fontWeight= "600" fontSize= "26px">
    //     Vikas Fitness Club
    //   </Typography>
    //   <Typography fontWeight={700}
    //   sx= {{fontSize:{lg: '44px', xs: '40px'}
    //   }}
    //   mb="23px" mt = "30px"
    
    //     >
    //     Decide, Commit <br />and Succeed.
    //     </Typography>
    //     <Button variant='contained'
    //     color='success' href='/Exercises'
    //     > Explore Exercises</Button>
    //     </Grid>
      
    //     <Grid xs= {12} md= {6}  >
    //         <div className='home-Image'>
    //             <img src= {HomeImage}
    //                 alt='Fitness Club'
    //                 style={{maxWidth: '100%', height: 'auto'}}
    //             />
    //         </div>
            
    //     </Grid>
    // </Grid>
    // </Box>
    <>
    <div className='homeHeading'>
      {/* <h2> Vikas Fitness Club</h2>
       <h1> Decide, Commit and Succeed.</h1> */}

      <Grid container className="container">
      <Grid item xs={12} className="overlay">
        <h2> Welcome to Vikas Fitness Studio</h2>
        <h3 className='exerciseDescription'>Discover Your Fitness Potential.</h3>
        <Link to ="/Exercises">
        <button className='exercisebutton'>Explore Exercises</button>
        </Link>
        <Link to ="/FitnessNews">
        <button className='exercisebutton'>Explore FitnessNews</button>
        </Link>
      </Grid>

      <img className="fitnessImg" src={HomeWallpaper} alt="Wallpaer" />
      </Grid>
       {/* </Grid> */}

       
    </div>
            
    </>
  )
}

export default HomeBanner
