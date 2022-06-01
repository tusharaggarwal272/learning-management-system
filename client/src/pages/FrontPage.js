import { Box, Typography } from '@mui/material'
import React from 'react'
import { Button } from '@mui/material'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import SchoolIcon from '@mui/icons-material/School';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Footer from '../Components/Footer';

function FrontPage() {
    return (
        <Box sx={{ height: '100%', background: '#e5efff' }}>
            <Box sx={{ position: 'relative', background: '#e5efff', height: '100%', width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', margin: 'auto auto' }}>

                <Box sx={{ width: '50%', marginLeft: '5%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Box sx={{ width: '100%', marginTop: '5%', marginBottom: '8%', display: 'flex', justifyContent: 'center' }}>
                        <img src='https://pu.tmcdn.in/defaults/landing_v3/static2/images/early-access/logo.svg' />
                        <Button size="small" sx={{ margin: '2%' }}>
                            Features
                        </Button>
                        <Button size="small" sx={{ margin: '2%' }}>
                            Examples
                        </Button >
                        <Button size="small" sx={{ margin: '2%' }}>
                            Pricing
                        </Button>
                        <Button size="small" sx={{ margin: '2%' }}>
                            Blog
                        </Button>
                    </Box>
                    <Button size="small" sx={{ margin: '2%', position: 'absolute', top: '2%', right: '18%' }} onClick={() => { window.location.href = '/login' }}>
                        Login
                    </Button>
                    <Button variant='contained' size="small" sx={{ margin: '2%', position: 'absolute', top: '2%', right: '3%' }} >Get Started for free</Button>
                    <Typography sx={{ color: '1F3965', fontSize: '1.54rem', fontStyle: 'Lato Arial sans-serif' }}>India’s #1 Course Selling platform</Typography>
                    <Typography sx={{ color: '1F3965', fontSize: '3rem', textAlign: 'start', lineHeight: '3rem' }}>Sell courses online on your platform</Typography>
                    <Typography sx={{ color: '#6B82AB', fontSize: '1.5rem', textAlign: 'start', margin: '1rem', marginLeft: '0rem', marginRight: '0rem' }}>Start today and increase your earnings. Trusted by 1000+ educators.</Typography>
                    {/* color='#64b5f6' */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '15px' }}>
                        <PlayCircleFilledWhiteIcon color='success' />
                        <Typography>Watch Video</Typography>
                    </Box>
                    <Button variant='contained' size="large" >Get Started for free</Button>
                </Box>
                <Box component="img" sx={{
                    // height: '30%',
                    // width: '40%',
                    marginRight: '5%',
                    marginTop: '5%',
                    maxHeight: { xs: '50%', md: '80%' },
                    maxWidth: { xs: '50%', md: '50%' },

                }} src="https://pu.tmcdn.in/defaults/landing_v3/static2/images/early-access/ea-hero.webp" />

            </Box>

            <Box sx={{ background: '#e5efff', display: 'flex', width: '100%', height: '80%', justifyContent: 'center', alignItems: 'center' }}>
                <Grid container sx={{ border: '2px dotted #ccc', width: '90%', height: '100%', borderRadius: '15px', background: '#ffffff', }}>
                    <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CastForEducationIcon sx={{ fontSize: '400%' }} /><div style={{ display: 'flex', flexDirection: 'column' }}><p style={{ marginBottom: 0 }}>5000+</p><p style={{ marginTop: 0 }}>Courses</p></div></Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><SchoolIcon sx={{ fontSize: '400%' }} /><div sx={{ display: 'flex', flexDirection: 'column' }}><p style={{ marginBottom: 0 }}>1000+</p><p style={{ marginTop: 0 }}>Creators</p></div></Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CurrencyRupeeIcon sx={{ fontSize: '400%' }} /><div sx={{ display: 'flex', flexDirection: 'column' }}><p style={{ marginBottom: 0 }}>50 Million+</p><p style={{ marginTop: 0 }}>Earned by Teachers</p></div> </Grid>
                </Grid>
            </Box>
            <Box sx={{ width: '100%', background: '#e5efff', display: 'flex', justifyContent: 'center' }}>
                <Grid container sx={{ display: 'flex', width: '90%', height: '50%' }}>
                    <Grid container xs={12} sm={12} md={6} >
                        <Grid item md={12}><h1>Why sell courses online?</h1 ></Grid>
                        <Grid item md={5} sx={{ fontSize: '1rem', margin: '2%' }}><Paper sx={{ padding: '2%' }}>Create and sell your courses to global audience.</Paper></Grid>
                        <Grid item md={5} sx={{ fontSize: '1rem', margin: '2%' }}><Paper sx={{ padding: '2%' }}>Millions of students are looking for courses online</Paper></Grid>
                        <Grid item md={5} sx={{ fontSize: '1rem', margin: '2%' }}><Paper sx={{ padding: '2%' }}>Convenient and affordable for students to learn</Paper></Grid>
                    </Grid>
                    <Grid container xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <img src='https://pu.tmcdn.in/defaults/landing_v3/static2/images/early-access/zz-why-sell.webp' />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ width: '100%', background: '#e5efff', display: 'flex', justifyContent: 'center' }}>
                <Grid container sx={{ display: 'flex', width: '90%', height: '50%' }}>
                    <Grid container xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <img src='https://pu.tmcdn.in/defaults/landing_v3/static2/images/early-access/zz-who-can.webp' />
                    </Grid>
                    <Grid container xs={12} sm={12} md={6} >
                        <Grid item md={12}><h1>Who can use Teachmore?</h1 ></Grid>
                        <Grid item md={5} sx={{ fontSize: '1rem', margin: '2%' }}><Paper sx={{ padding: '2%' }}>Educators with passion to teach learners worldwide</Paper></Grid>
                        <Grid item md={5} sx={{ fontSize: '1rem', margin: '2%' }}><Paper sx={{ padding: '2%' }}>Teachers, Coaches, Subject-matter experts, Creators</Paper></Grid>
                        <Grid item md={5} sx={{ fontSize: '1rem', margin: '2%' }}><Paper sx={{ padding: '2%' }}>Institutes aspiring for best-in-class learning experience</Paper></Grid>
                    </Grid>

                </Grid>
            </Box>

            <Box sx={{ background: '#e5efff', width: '100%', height: '60%', display: 'flex', justifyContent: 'center', marginBottom: '2%' }}>
                <Grid container sx={{ width: '90%', background: '#ffffff', display: 'flex', justifyContent: 'center' }}>
                    <Grid item sm={12} xs={12} md={12} textAlign='center'>Our Customers Love Us</Grid>
                    <Grid item md={12} textAlign='center'>Users who increased their earnings with Teachmore</Grid>
                    <Grid item md={5} sx={{ margin: '2%' }}><iframe width="560" height="315" src="https://www.youtube.com/embed/sHyI3VeoGxE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Grid>
                    <Grid item md={5} sx={{ margin: '2%' }}><iframe width="560" height="315" src="https://www.youtube.com/embed/ddKEzpWPS14" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Grid>
                </Grid>
            </Box>

            {/* <Footer /> */}

            <Box sx={{ width: '100%', background: '#e5efff', display: 'flex', justifyContent: 'center' }}>
                <Grid container sx={{ display: 'flex', width: '90%', height: '50%' }}>

                    <Grid container xs={12} sm={12} md={6} >
                        <Grid item md={12}><h1>Create your online course, set your priceWho can use Teachmore?</h1 ></Grid>
                        <Grid item md={5} sx={{ fontSize: '1rem', margin: '2%' }}><Paper sx={{ padding: '2%' }}>Create courses using Video, Quizzes, Pdfs and more</Paper></Grid>
                        <Grid item md={5} sx={{ fontSize: '1rem', margin: '2%' }}><Paper sx={{ padding: '2%' }}>Add seamless and reliable Live Classes to your courses</Paper></Grid>
                        <Grid item md={5} sx={{ fontSize: '1rem', margin: '2%' }}><Paper sx={{ padding: '2%' }}>Easy setup of pricing, discounts and course bundles</Paper></Grid>
                    </Grid>
                    <Grid container xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <img src='https://pu.tmcdn.in/defaults/landing_v3/static2/images/early-access/zz-create-course-new.webp' />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ width: '100%', background: '#e5efff', display: 'flex', justifyContent: 'center' }}>
                <Grid container sx={{ display: 'flex', width: '90%', height: '50%' }}>
                    <Grid container xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <img src='https://pu.tmcdn.in/defaults/landing_v3/static2/images/early-access/zz-get-app-new.webp' />
                    </Grid>
                    <Grid container xs={12} sm={12} md={6} >
                        <Grid item md={12}><h1>Get your own app & website</h1 ></Grid>
                        <Grid item md={5} sx={{ fontSize: '1rem', margin: '2%' }}><Paper sx={{ padding: '2%' }}>Customise everything the way you like, imprint your brand</Paper></Grid>
                        <Grid item md={5} sx={{ fontSize: '1rem', margin: '2%' }}><Paper sx={{ padding: '2%' }}>Create unlimited sales pages and apply beautiful themes</Paper></Grid>
                        <Grid item md={5} sx={{ fontSize: '1rem', margin: '2%' }}><Paper sx={{ padding: '2%' }}>You own it. We support it.</Paper></Grid>
                    </Grid>

                </Grid>
            </Box>
            <Box sx={{ width: '100%', background: '#e5efff', display: 'flex', justifyContent: 'center' }}>
                <Grid container sx={{ display: 'flex', width: '90%', height: '50%' }}>

                    <Grid container xs={12} sm={12} md={6} >
                        <Grid item md={12}><h1>Marketing and sales tools to grow revenue</h1 ></Grid>
                        <Grid item md={5} sx={{ fontSize: '1rem', margin: '2%' }}><Paper sx={{ padding: '2%', background: '#ccc' }}>Send personalised emails to your learners.</Paper></Grid>
                        <Grid item md={5} sx={{ fontSize: '1rem', margin: '2%', display: 'flex', alignItems: 'flex-end' }}><Paper sx={{ padding: '2%' }}>Engage and retain users through push notifications</Paper></Grid>
                        <Grid item md={5} sx={{ fontSize: '1rem', margin: '2%' }}><Paper sx={{ padding: '2%' }}>Drive up your sales through Affiliate programs</Paper></Grid>
                    </Grid>
                    <Grid container xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <img src='https://pu.tmcdn.in/defaults/landing_v3/static2/images/early-access/zz-get-amazing.webp' />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ width: '100%', background: '#ccc', display: 'flex', justifyContent: 'center', padding: '2% 0%' }}>
                <Grid container sx={{ display: 'flex', width: '90%', height: '50%' }}>
                    <Grid container xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <img src='https://pu.tmcdn.in/defaults/landing_v3/static2/images/early-access/zz-get-paid.webp' />
                    </Grid>
                    <Grid container xs={12} sm={12} md={6} >
                        <Grid item md={12}><h1>Get paid on your own Terms</h1 ></Grid>
                        <Grid item md={5} sx={{ fontSize: '1rem', margin: '2%' }}><Paper sx={{ padding: '2%' }}>Lowest transaction charges with our payment gateway</Paper></Grid>
                        <Grid item md={5} sx={{ fontSize: '1rem', margin: '2%', display: 'flex', alignItems: 'flex-end' }}><Paper sx={{ padding: '2%' }}>Integrate your preferred payment gateway</Paper></Grid>
                        <Grid item md={5} sx={{ fontSize: '1rem', margin: '2%' }}><Paper sx={{ padding: '2%' }}>Collect payments globally</Paper></Grid>
                    </Grid>

                </Grid>
            </Box>

            <Footer />

        </Box >
    )
}

export default FrontPage