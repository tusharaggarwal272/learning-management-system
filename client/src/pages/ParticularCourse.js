import React from 'react'
import { useEffect, useState, useRef } from 'react';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import LinearProgress from '@mui/material/LinearProgress';
import Modal from '@mui/material/Modal';
import CancelIcon from '@mui/icons-material/Cancel';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { capitalize } from 'lodash';
import { CircularProgress } from '@mui/material';
import MenuBar from '../Components/MenuBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AbcIcon from '@mui/icons-material/Abc';


const style2 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2%'
};

function ParticularCourse() {
    const params = useParams();
    const [videoModal, setVideoModal] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [video, setVideo] = useState();
    const [Uploading, setUploading] = useState(false);
    const [UploadVideoButton, SetUploadVideoButton] = useState('Upload Video');
    const [progress, setProgress] = useState(0);
    const [courseName, setCourseName] = useState('');
    const [chapters, setChapters] = useState([]);
    const [loading, setloading] = useState(false);
    const [course, setCourse] = useState({});
    const [user, setUser] = useState({});
    const handleClose = (e) => {
        e.preventDefault();
        setVideoModal(false);
    }

    if (!JSON.parse(localStorage.getItem('user'))) {
        window.location.href = '/login';
    }



    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
        setloading(true);
        axios.post('/api/courses/findCourseDetails', { courseid: params.courseid }).then((res) => {
            // console.log(res);

            console.log(res.data);
            setCourseName(res.data.name);
            setChapters(res.data.chapters)
            setCourse(res.data);


            // let date = new Date(res.data.chapters[0].createdAt);
            // console.log(chapter.createdAt.toUTCString());
            // setVideos(res.data.videos);
            setloading(false);
        }).catch((err) => {
            console.log(err);
            setloading(false);
        })

        return () => {
            setChapters([])// This worked for me
        };
    }, []);










    const handleAddChapter = (e) => {
        e.preventDefault();
        window.location.href = (`/courses/${params.courseid}/newchapter`);
    }

    const handleChapterClick = (id) => {
        window.location.href = (`/courses/${params.courseid}/${id}`);
    }
    if (loading) {
        return <Box sx={{ display: 'flex', width: '100%', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress />
        </Box>

    }

    const handleCourseStatus = (e) => {
        // console.log(e);
        // console.log("You clicked the course");
        setloading(true);
        try {
            axios.put('/api/courses/publishunpublishcourse', { courseid: params.courseid }).then((res) => {
                // console.log(res);
                setCourse(res.data);

            }).catch((err) => {
                console.log(err.message);
            })
            setloading(false);
        } catch (error) {
            console.log(error.message);
            setloading(false);
        }
    }



    return (

        <Box sx={{ position: 'relative', display: 'flex', width: '100vw', height: '100vh', overflowX: 'hidden' }}>
            <Box>
                <MenuBar />
            </Box>
            {/* sx={{ width: '80vw', height: '100%', position: 'absolute', right: '0%' }} */}
            <div style={{ width: '80vw', height: '100%', overflowX: 'hidden', position: 'absolute', right: '2%', display: 'flex', justifyContent: 'space-around', flexDirection: 'column', padding: '0' }}>
                <Box sx={{ position: 'absolute', top: '5%', right: '5%' }}>
                    <Button onClick={(e) => { handleCourseStatus(e) }} sx={{ margin: '1%', cursor: 'pointer' }} variant='contained'>{course.published ? "UnPublish" : "Publish"}</Button>
                    <Button onClick={handleAddChapter} variant='contained'>Add Chapter +</Button>
                    {/* <Button variant="contained">+ Add Chapter</Button> */}


                </Box>
                <Typography sx={{ textAlign: 'start', color: 'blue', fontSize: '4em', position: 'absolute', top: '2%', left: '2%' }}>{capitalize(courseName)}</Typography>
                {course && course.overview && <Typography>{course.overview}</Typography>}
                <Box sx={{ background: '#ccc', width: '100%' }}>

                    {
                        chapters.length > 0 && <List sx={{ width: '100%', bgcolor: 'background.paper' }}>

                            {
                                chapters.map((chapter, idx) => (

                                    <Box key={idx} sx={{ width: '100%' }} onClick={() => handleChapterClick(chapter._id)}>
                                        <ListItem sx={{ width: '100% ', boxShadow: "2px 2px 2px  #9E9E9E", margin: '1%', cursor: 'pointer' }}>
                                            <ListItemAvatar>
                                                <Avatar alt="Remy Sharp" sx={{ bgcolor: 'green' }} ><AbcIcon /></Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                // {
                                                // let date=new Date(chapter.createdAt);
                                                // }
                                                primary={
                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                        <Typography sx={{ color: 'blue' }}>{capitalize(chapter.name)}</Typography>
                                                        <Typography sx={{ color: 'black' }}>{new Date(chapter.createdAt).toUTCString()}</Typography>
                                                    </Box>
                                                }
                                                secondary={
                                                    <React.Fragment>
                                                        <Typography
                                                            sx={{ display: 'inline' }}
                                                            component="span"
                                                            variant="body2"
                                                            color="text.primary"
                                                        >
                                                            what this chapter contains:
                                                        </Typography>
                                                        <Typography sx={{ color: 'black' }}>{capitalize(chapter.description)}</Typography>
                                                    </React.Fragment>
                                                }

                                            />
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                    </Box>
                                ))

                            }
                        </List>
                    }

                </Box>



            </div>
        </Box>

    )
}

export default ParticularCourse