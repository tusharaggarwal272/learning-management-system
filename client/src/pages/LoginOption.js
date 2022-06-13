import React from 'react';
import { Box } from '@mui/system';
import { Grid, Typography, Button, TextField } from '@mui/material';


const LoginOption = ({ loginAs, setLoginAs }) => {

    return (
        <Box sx={{ height: '100%' }}>
            <Box sx={{ marginTop: '2%' }}><Typography sx={{ fontSize: '3rem' }}>Continue to LoginPage</Typography></Box>
            <Box sx={{ margin: '10%' }}>
                <Grid sx={{ background: "aliceblue", border: '2px dashed blue', borderRadius: '5px', padding: '2%' }} container direction={"row"} rowSpacing={0} justifyContent={'center'} alignItems='center' spacing={{ xs: 2, md: 1 }} columns={{ xs: 12, sm: 12, md: 6 }}>
                    <Grid item xs={12} md={12}><Typography>Do you want to Login as ?</Typography></Grid>
                    <Grid item xs={12} md={12}><Button variant='contained' onClick={(e) => setLoginAs("Student")}>Student</Button></Grid>
                    <Grid item xs={12} md={12}><Typography>Or Do you want to login as </Typography></Grid>
                    <Grid item xs={12} md={12}><Button variant='contained' onClick={(e) => setLoginAs("Instructor")}>Instructor</Button></Grid>

                </Grid>
            </Box>
        </Box>
    )
}


export default LoginOption;
