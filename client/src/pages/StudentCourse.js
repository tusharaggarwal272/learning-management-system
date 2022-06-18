import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import StudentMenuBar from '../Components/StudentMenuBar';
import StudentCourseDescription from './StudentCourseDescription';
import { Button, Typography, TextField } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { capitalize, reject } from 'lodash';
import { CircularProgress } from '@mui/material';

import axios from 'axios';

function StudentCourse() {

    const params = useParams();
    const [course, setCourse] = useState({});
    const [section, setSection] = useState('contents');
    const [chapters, setChapters] = useState([]);
    const [loading, setLoading] = useState(false);

    const [currentVideo, setCurrentVideo] = useState('');

    useEffect(() => {
        setLoading(true);
        try {
            axios.post('/api/courses/findCourseDetails', { courseid: params.courseid }).then((res) => {
                console.log(res.data);
                setCourse(res.data);
                setChapters(res.data.chapters);
                let chapters = res.data.chapters;
                let arr = [];
                chapters.map((chapter) => {
                    chapter.videos.map((video) => {
                        arr.push(video.link)
                    })
                });
                setLoading(false)
                if (arr.length) setCurrentVideo(arr[0]);
            }).catch((err) => {
                setLoading(false)
                console.log(err.message);
            });

        } catch (error) {
            console.log(error.message);
            setLoading(false);
        }




    }, []);

    if (loading) {
        return <Box sx={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress />
        </Box>
    }




    return (
        <StudentMenuBar>

            <Typography sx={{ fontSize: '2rem' }}>{capitalize(course.name)}</Typography>
            {
                currentVideo && <Grid item md={3} sm={12}  >
                    <Card>
                        <CardActionArea sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                src={currentVideo}
                                component="video"
                                autoPlay
                                controls
                                height={300}

                            />
                            {/* <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {capitalize(v.title)}
                            </Typography>
                            <Typography variant="body2" color="#ccc">
                                {
                                    v.description

                                }
                            </Typography>
                        </CardContent> */}
                        </CardActionArea>
                    </Card>

                </Grid>
            }



            <StudentCourseDescription chapters={chapters} course={course} section={section} setSection={setSection} currentVideo={currentVideo} setCurrentVideo={setCurrentVideo} />

        </StudentMenuBar>
    )
}

export default StudentCourse