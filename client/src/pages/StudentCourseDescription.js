import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { capitalize } from 'lodash';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { List, ListItem, Collapse, Drawer } from '@material-ui/core';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import clsx from 'clsx';
import Divider from '@mui/material/Divider';
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import ListItemText from '@mui/material/ListItemText';
import axios from 'axios';
import CollapseVideos from './CollapseVideos';
import useStyles from '../Components/menuBarStyles';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CollectionsIcon from '@mui/icons-material/Collections';




function StudentCourseDescription({ chapters, course, section, setSection, currentVideo, setCurrentVideo }) {
    const [user, setUser] = useState({});
    const classes = useStyles();
    const [button, setButton] = useState('Add to Cart');

    // const [chapters, setChapter] = useState([]);
    useEffect(() => {
        if (!JSON.parse(localStorage.getItem('user'))) {
            window.location.href = '/login';
        }
        else {
            setUser(JSON.parse(localStorage.getItem('user')));
            console.log(course[0]);
            // setChapter(course.chapters);
            // console.log(course.chapters);
            // console.log(JSON.parse(localStorage.getItem('user')));
        }

        // let cart = JSON.parse(localStorage.getItem('user')).cart;

        // let arr = cart.filter((c) => {
        //     return c == course._id
        // })

        // if (arr.length) setButton("Start Learning");

    }, [])

    const handleAddToCart = () => {
        try {
            axios.put(`/api/cart/addtocart/${user.email}/${course._id}`).then((res) => {
                console.log(res);
                localStorage.setItem('user', JSON.stringify(res.data));
                setUser(res.data);
                window.location.reload();
            }).catch((err) => {
                console.log(err.message);
            })
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Grid container sm={12} md={12} justifyContent={"center"} sx={{ margin: '2% 0%' }}>
                <Grid item xs={12} sm={4} md={2} onClick={(e) => setSection("overview")} sx={{ border: '2px dashed black', cursor: 'pointer', padding: '1%', background: section === "overview" ? 'black' : 'white', color: section === "overview" ? 'white' : 'black' }}>Overview </Grid>
                <Grid item xs={12} sm={4} md={2} onClick={(e) => setSection("author")} sx={{ border: '2px dashed black', cursor: 'pointer', padding: '1%', background: section === "author" ? 'black' : 'white', color: section === "author" ? 'white' : 'black' }}>About Author </Grid>
                <Grid item xs={12} sm={4} md={2} onClick={(e) => setSection("contents")} sx={{ border: '2px dashed black', cursor: 'pointer', padding: '1%', background: section === "contents" ? 'black' : 'white', color: section === "contents" ? 'white' : 'black' }}>Contents </Grid>
            </Grid>
            {
                chapters.map((chapter) => {
                    console.log(chapter.name, chapter.videos);
                    // let arr = [];
                    // arr = chapter.videos;
                    chapter.videos.map((video) => (
                        console.log(video.title)
                    ))
                })
            }
            <Grid container sm={12} md={12} justifyContent={"center"} >
                <Grid item xs={12} sm={4} md={12}>
                    {
                        section === "overview" && course.overview && <Typography paragraph>{course.overview}</Typography>

                    }
                    {
                        section === "author" && course.owner && <Typography paragraph>{capitalize(course.owner)}</Typography>
                    }
                    {section === "contents" && <List>{chapters.map((chapter, index) => (


                        <div>
                            {/* {let m = index} */}
                            <ListItem
                                className={classes.item}
                                disableGutters
                                style={{ padding: "0px", display: 'block' }}
                                key={chapter.name}
                            >
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: 'initial',
                                        px: 2.5,
                                    }}
                                // component={CustomRouterLink}

                                >
                                    <ListItemIcon
                                        sx={{
                                            height: '100%',
                                            color: 'black',
                                            // minWidth: 0,
                                            // mr: 'auto',
                                            // justifyContent: 'center',
                                        }}
                                    >
                                        {index} &nbsp;
                                        <CollectionsIcon />

                                    </ListItemIcon>
                                    <ListItemText primary={chapter.name} sx={{ opacity: 1, color: 'black' }} />

                                </ListItemButton>
                            </ListItem>
                            < Divider />
                            <div>
                                {
                                    chapter.videos.map((video, idx) => (
                                        <div>
                                            <ListItem
                                                className={classes.item}
                                                disableGutters
                                                style={{ padding: "0px", display: 'block' }}
                                                key={video.title}
                                                onClick={() => { setCurrentVideo(video.link) }}
                                            >
                                                <ListItemButton
                                                    sx={{
                                                        minHeight: 48,
                                                        justifyContent: 'initial',
                                                        px: 2.5,
                                                    }}
                                                // component={CustomRouterLink}

                                                >
                                                    <ListItemIcon
                                                        sx={{
                                                            height: '100%',
                                                            color: 'black',
                                                            // minWidth: 0,
                                                            // mr: 'auto',
                                                            // justifyContent: 'center',
                                                        }}
                                                    >
                                                        {index.toString() + '.' + idx.toString()}&nbsp;
                                                        <PlayCircleIcon />

                                                    </ListItemIcon>
                                                    <ListItemText primary={video.title} sx={{ opacity: 1, color: 'black' }} />

                                                </ListItemButton>
                                            </ListItem>


                                            {/* < Divider /> */}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))}</List>}

                </Grid >
            </Grid >
            {
                user && user.cart && <Grid item xs={12} md={2} justifyContent={"center"}><Button variant='contained' onClick={handleAddToCart}>{user.cart.includes(course._id) ? "StartLearning" : "Add to Cart"}</Button></Grid>
            }
        </Box >
    )
}

export default StudentCourseDescription



// {
//     chapter.videos.map((video) => (
//         <Collapse
//             // in={ (chapter.videos.length > 0) ? true : false }
//             timeout="auto"
//             unmountOnExit
//         >
//             {video.title}
//         </Collapse >

//     ))
//         < Divider />
// }