import React from 'react'
import { Box } from '@mui/system'
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {
    return (
        <Box sx={{ background: '#1F3965' }}>


            <Box sx={{ width: '96%', height: '50%', background: '#1F3965', display: 'flex', padding: '2%' }}>
                <Grid container md={4} sm={12} >
                    <Grid item md={12} sx={{ margin: '8% auto', marginBottom: '0%' }} textAlign='center'> <img style={{ background: 'white', width: '40%', padding: '2px' }} src='https://pu.tmcdn.in/defaults/landing_v3/static2/images/early-access/logo.svg' /></Grid>
                    <Grid item md={12} textAlign='center' sx={{ lineHeight: '0' }} >
                        <p style={{ color: '#ffffff', margin: '0' }}>Create and sell online courses with your own
                        </p>
                    </Grid>
                    <Grid item md={12} textAlign='center' sx={{ lineHeight: '0' }}>
                        <p style={{ color: '#ffffff', margin: '0' }}>   fully-featured mobile apps and website.</p>
                    </Grid>
                    <Grid item md={12} textAlign='center' sx={{ lineHeight: '0' }}>
                        <p style={{ color: '#ffffff', margin: '0' }}> Don't miss out on sales for not having mobile apps!</p>
                    </Grid>
                    <Grid item md={12} textAlign='center'>
                        < LinkedInIcon sx={{ color: '#ffffff', border: '2px solid white', margin: '1%' }} />
                        < FacebookIcon sx={{ color: '#ffffff', border: '2px solid white', margin: '1%' }} />
                        <InstagramIcon sx={{ color: '#ffffff', border: '2px solid white', margin: '1%' }} />
                        <TwitterIcon sx={{ color: '#ffffff', border: '2px solid white', margin: '1%' }} />
                        <YouTubeIcon sx={{ color: '#ffffff', border: '2px solid white', margin: '1%' }} />
                    </Grid>


                </Grid>
                <Grid container md={4} sm={12} sx={{ display: 'flex', justifyContent: 'center' }} textAlign='center'>
                    <Grid item md={12}>
                        <h1 style={{ color: 'white' }}>Links</h1></Grid>
                    <Grid item md={12}>
                        <a style={{ color: 'white' }}>Home</a></Grid>

                    <Grid item md={12}>
                        <a style={{ color: 'white' }}>Blog</a></Grid>
                    <Grid item md={12}>
                        <a style={{ color: 'white' }}>Privacy Policy</a></Grid>
                    <Grid item md={12}>
                        <a style={{ color: 'white' }}>Terms of Service</a></Grid>
                    <Grid item md={12}>
                        <a style={{ color: 'white' }}>Cancellation & Refunds</a></Grid>
                    <Grid item md={12}>
                        <a style={{ color: 'white' }}>Knowledge Base</a></Grid>
                    <Grid item md={12}>
                        <a style={{ color: 'white' }}>Book a Demo</a></Grid>



                </Grid>
                <Grid container md={4} sm={12} textAlign='start'>
                    {/* <Grid container md={4} sx={{ border: '2px solid black' }}> */}
                    <Grid item md={12} textAlign='center'><h1 style={{ color: 'white' }}>Contact Us</h1></Grid>
                    <Grid item md={12} sx={{ color: 'white' }} ><LocationOnIcon />Teachmint Technologies Private Limited Enzyme Park View #1604, 1st Floor 25th Main, 22nd Cross Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102</Grid>
                    <Grid item md={12} sx={{ color: 'white' }} textAlign='center'><EmailIcon />hello@teachmore.com</Grid>
                    <Grid item md={12} sx={{ color: 'white' }} textAlign='center'><CallIcon />08035242274 (8 AM - 8 PM Everyday)</Grid>
                    {/* </Grid> */}
                </Grid>



            </Box>
            <hr />
            <Box textAlign='center' sx={{ width: '96%', background: '#1F3965', display: 'flex', justifyContent: 'center' }}>
                <p ><CopyrightIcon />Copyright 2022, Teachmint Technologies Pvt. Ltd.</p>
            </Box>
        </Box>
    )
}

export default Footer