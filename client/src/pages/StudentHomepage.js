
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { capitalize, reject } from 'lodash';
import LogoutIcon from '@mui/icons-material/Logout';
import { CircularProgress } from '@mui/material';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import axios from 'axios';
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HomeMaxIcon from '@mui/icons-material/HomeMax';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: 0,
        }),
    }),
);
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));


const StudentHomepage = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [user, setUser] = useState({});
    const [courses, setCourses] = useState([]);


    if (!user) {
        window.location.href = ('/login');
    }


    useEffect(() => {
        // const user = localStorage.get('user');
        if (!localStorage.getItem('user')) {
            window.location.href = ('/login');
        }
        else {

            setUser(JSON.parse(localStorage.getItem('user')));
        }

        try {
            axios.get('/api/courses/allcourses').then((res) => {
                console.log(res);
                setCourses(res.data);
            }).catch((err) => {
                console.log(err.message);
            })
        } catch (error) {
            console.log(error.message);
        }


    }, [])

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
                        {console.log(user)}
                        {capitalize(user.name)}
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        sx={{ ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Main open={open}>
                <DrawerHeader />
                {
                    courses.length > 0 && <Grid container>

                        {
                            courses.map((course) => (
                                <Grid key={course._id} item md={3} sm={12} sx={{ margin: '2%' }}>
                                    <Card >
                                        <CardActionArea sx={{ display: 'flex', flexDirection: 'column' }}>
                                            <CardMedia
                                                src='https://www.coe.int/documents/9558393/53556644/745932934.jpg/b9ddd436-94a9-40fa-c9b3-0e2db8f26c51'
                                                component="img"
                                                height="140"
                                            // image="/static/images/cards/contemplative-reptile.jpg"
                                            // alt="green iguana"
                                            />
                                            <CardContent sx={{ width: '100%' }}>
                                                <Typography sx={{ width: '100%' }} textAlign={"start"}>
                                                    {capitalize(course.name)}
                                                </Typography>
                                                <Typography color="#ccc" textAlign={"start"}>
                                                    Author :
                                                    {
                                                        capitalize(course.owner)

                                                    }
                                                </Typography>
                                                <Typography textAlign={"end"}><CurrencyRupeeIcon />{course.price}</Typography>

                                                <Button variant='contained'>Enroll Now</Button>

                                            </CardContent>
                                        </CardActionArea>
                                    </Card>

                                </Grid>
                            ))
                        }
                    </Grid>
                }


            </Main>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                    },
                }}
                variant="persistent"
                anchor="right"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>

                <List>

                    {['U-Smart Courses'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton to={'/home'}>
                                <ListItemIcon>
                                    <HomeMaxIcon />
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ color: 'black' }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    {/* <Divider /> */}
                    {['My Courses'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton to={'/mycourses'}>
                                <ListItemIcon>
                                    <LibraryBooksIcon />
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ color: 'black' }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    {['Cart'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton >
                                <ListItemIcon>
                                    <ShoppingCartIcon />
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ color: 'black' }} />

                            </ListItemButton>
                        </ListItem>
                    ))}
                    <Divider />
                    {['Logout'].map((text, index) => (
                        <ListItem key={text} disablePadding onClick={() => {
                            localStorage.removeItem('user');
                            window.location.href = ('/login')
                        }}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <LogoutIcon />
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ color: 'black' }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                {/* <Divider /> */}

            </Drawer>
        </Box>
    );
}

export default StudentHomepage