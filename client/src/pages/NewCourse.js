import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import MenuBar from '../Components/MenuBar';
const axios = require('axios');

function NewCourse() {
    let user = localStorage.getItem('user');
    if (user) {

    } else {
        window.location.href = '/login'
    }

    const [courseName, setCourseName] = useState('');
    const [overview, setOverview] = useState('');
    const [price, setPrice] = useState(0);

    const handleChange = (e) => {
        console.log(e);
        setCourseName(e);
    }

    const handleCancelClick = () => {
        setCourseName('');
        return;
    }
    const handleCreateClick = () => {
        if (typeof (user) == 'string') {
            user = JSON.parse(user);
            console.log(typeof (user));
        }
        const course = {
            owneremail: user.email,
            coursename: courseName,
            overview: overview,
            price: price
        }
        axios.post(`/api/courses/user/courses/${user.email}/newcourse`, course).then((res) => {
            console.log(res);
            window.location.href = ('/courses');
        }).catch((err) => {
            console.log(err.message);
            console.log("something went wrong in creating the new course");
        })

        // console.log("new course information", course);
        // window.location.href = `/admin/content/courses/new/${courseName}`
    }

    return (
        <Box sx={{ position: 'relative', display: 'flex', width: '100vw', height: '100vh', overflowX: 'hidden' }}>
            <Box>
                <MenuBar />
            </Box>




            <Box sx={{ width: '80vw', height: '100%', position: 'absolute', right: '0%' }}>

                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', marginTop: '5%', alignItems: 'center', alignItems: 'center' }}>

                    <Typography sx={{ fontSize: '200%', margin: '1%', fontWeight: 'bold' }}>Create a new course</Typography>
                    <Box sx={{ width: '60%', height: '70%', borderRadius: '10px', border: '1px solid #ccc', display: 'flex', background: '#FAFAFA', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ fontSize: '120%', marginLeft: '5%', width: '100%', textAlign: 'start', marginTop: '5%' }}>Name of the course</Typography>
                        <TextField onChange={(e) => handleChange(e.target.value)} size="small" sx={{ width: '95%' }} value={courseName}></TextField>
                        <Typography sx={{ fontSize: '120%', marginLeft: '5%', width: '100%', textAlign: 'start', marginTop: '5%' }}>Overview of the course</Typography>
                        <TextField onChange={(e) => setOverview(e.target.value)} size="small" sx={{ width: '95%' }} value={overview}></TextField>


                        <Typography sx={{ fontSize: '120%', marginLeft: '5%', width: '100%', textAlign: 'start', marginTop: '5%' }}>Price of the course</Typography>
                        <TextField paragraph onChange={(e) => setPrice(e.target.value)} size="small" sx={{ width: '95%' }} value={price}></TextField>

                        <Box sx={{ width: '95%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', margin: '1%', alignItems: 'flex-end', marginTop: '4%' }}>
                            <Button sx={{ margin: '0.5%' }} onClick={handleCancelClick}>Cancel</Button>
                            <Button sx={{ margin: '0.5%' }} onClick={handleCreateClick} variant="contained">Create</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default NewCourse