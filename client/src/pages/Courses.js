import React, { useEffect, useState } from 'react'
import './Courses.css'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';
import MenuBar from '../Components/MenuBar';
import { Box } from '@mui/system';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { capitalize } from 'lodash';

const Courses = () => {

    let user = localStorage.getItem('user');
    const [courses, setCourses] = useState([]);
    const [loading, setloading] = useState(false);
    useEffect(() => {
        setloading(true);
        if (typeof (user) == 'string') {
            user = JSON.parse(user);
        }

        const userDetails = {
            email: user.email
        }
        axios.post('/api/courses/user', userDetails).then((res) => {
            console.log(res);
            setCourses(res.data.courses);
            setloading(false);
        }).catch((err) => {
            console.log(err.message);
            setloading(false);
        })
    }, [])
    // console.log(courses);
    // courses.map((c) => {
    //     console.log(c.name, c.published)
    // })


    const handleCourseClick = (e, id) => {
        e.preventDefault();
        console.log(id);
        window.location.href = (`/courses/${id}`);
    }

    if (loading) {
        return <Box sx={{ display: 'flex', width: '100%', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress />
        </Box>

    }

    return (
        <Box sx={{ position: 'relative', display: 'flex', width: '100vw', height: '100vh', overflowX: 'hidden' }}>
            <Box>
                <MenuBar />
            </Box>
            <Box sx={{ width: '80vw', height: '100%', position: 'absolute', right: '0%' }}>

                <div className='courses-main'>
                    <div className="courses-content">
                        <div className="courses-heading">
                            <div className="courses-heading-left">
                                <div className='courses-title'>
                                    <h1>Courses</h1>
                                </div>
                                <div className='courses-count'>/{courses.length}</div>
                            </div>
                            <div className="courses-heading-right" style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'center', width: '50%', padding: '0' }}>
                                <div className="courses-option" style={{ width: '15%', height: '100%' }}>
                                    <div className="courses-option-row"><ViewColumnIcon /></div>
                                    <div className="courses-option-col"><ArrowForwardIcon /></div>
                                </div>
                                <div className="courses-option" style={{ width: '15%', height: '100%' }}>
                                    <div className="courses-option-icon" ><ExitToAppIcon /></div>
                                    <div className="courses-option-info" >Export</div>
                                </div>
                                <div className="courses-option" style={{ width: '15%', height: '150%' }}>

                                    <div className="courses-option-icon"><FilterAltIcon /></div>
                                    <div className="courses-option-info">Filter</div>
                                </div>
                                <div style={{ height: '100%', marginRight: '0%' }}>
                                    <Button onClick={() => {
                                        window.location.href = '/admin/content/courses/new'
                                    }} variant="contained" textAling="center" sx={{ fontSize: '15px', height: '100%' }} size="small">+ New Course</Button>
                                </div>

                            </div>
                        </div>

                        {/* courses here */}

                        {
                            courses.length > 0 && <Grid container>

                                {
                                    courses.map((course) => (
                                        <Grid key={course._id} item md={3} sm={12} sx={{ margin: '2%' }}>
                                            <Card onClick={e => handleCourseClick(e, course._id)}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        src='https://www.coe.int/documents/9558393/53556644/745932934.jpg/b9ddd436-94a9-40fa-c9b3-0e2db8f26c51'
                                                        component="img"
                                                        height="140"
                                                    // image="/static/images/cards/contemplative-reptile.jpg"
                                                    // alt="green iguana"
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            {capitalize(course.name)}
                                                        </Typography>
                                                        <Typography variant="body2" color="#ccc">
                                                            {
                                                                course.published ? "Published" : "Not Published"

                                                            }
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>

                                        </Grid>
                                    ))
                                }
                            </Grid>
                        }
                    </div>
                </div >
            </Box>
        </Box>
    )
}

export default Courses