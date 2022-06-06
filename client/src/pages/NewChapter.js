import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import MenuBar from '../Components/MenuBar';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function NewCourse() {
    const user = localStorage.getItem('user');
    if (user) {

    } else {
        window.location.href = '/login'
    }

    const params = useParams();
    const [chapterName, setchapterName] = useState('');
    const [chapterDescription, setDescription] = useState('');

    const handleChange = (e) => {
        console.log(e);
        setchapterName(e);
    }

    const handleCancelClick = () => {
        setchapterName('');
        return;
    }
    const handleCreateClick = () => {
        const details = {
            name: chapterName,
            description: chapterDescription,
            courseid: params.courseid
        }

        console.log(details);
        axios.post(`/api/courses/user/courses/${user.email}/newchapter`, details).then((res) => {
            console.log(res);
            window.location.href = ('/courses');
        }).catch((err) => {
            console.log(err.message);
            console.log("something went wrong in creating the new course");
        })
        // window.location.href = `/admin/content/Chapters/new/${chapterName}`
    }

    return (
        <Box sx={{ background: 'aliceblue', position: 'relative', display: 'flex', width: '100vw', height: '100vh', overflowX: 'hidden' }}>
            <Box>
                <MenuBar />
            </Box>




            <Box sx={{ width: '80vw', height: '100%', position: 'absolute', right: '0%' }}>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', marginTop: '5%', alignItems: 'center', alignItems: 'center' }}>

                    <Typography sx={{ fontSize: '200%', margin: '1%', fontWeight: 'bold' }}>Create a new Chapter</Typography>
                    <Box sx={{ width: '60%', height: '70%', borderRadius: '10px', border: '1px solid #ccc', display: 'flex', background: '#FAFAFA', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ fontSize: '120%', marginLeft: '5%', width: '100%', textAlign: 'start', marginTop: '5%' }}>Name of the Chapter</Typography>
                        <TextField onChange={(e) => handleChange(e.target.value)} size="small" sx={{ width: '95%', background: 'white' }} value={chapterName}></TextField>
                        <Typography sx={{ fontSize: '120%', marginLeft: '5%', width: '100%', textAlign: 'start', marginTop: '5%' }}>Chapter Description</Typography>
                        <TextField rows={5} cols={105} onChange={(e) => setDescription(e.target.value)} size="small" sx={{ width: '95%' }} value={chapterDescription}></TextField>
                        <Box sx={{ width: '95%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', margin: '1%', alignItems: 'flex-end', marginTop: '4%' }}>
                            <Button sx={{ margin: '0.5%' }} onClick={handleCancelClick}>Cancel</Button>
                            <Button sx={{ margin: '0.5%' }} onClick={handleCreateClick} variant="contained">Create</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}

export default NewCourse