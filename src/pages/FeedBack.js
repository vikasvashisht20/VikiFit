import React from 'react'
import SignUpForm from '../components/SignUpForm';
import banner from '../assets/banner.png';
import { Box, Grid } from '@mui/material';

const FeedBack = () => {
  return (

    <div>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={6}>
          <div className='addBorder' > <img className='fitImage' src={banner}></img></div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className='addBorder'>
            <SignUpForm/>
           </div>
        </Grid>
        
      </Grid>
    </Box>
    </div>
  )
}

export default FeedBack