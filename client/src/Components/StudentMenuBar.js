import React, { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HomeMaxIcon from '@mui/icons-material/HomeMax';
import LogoutIcon from '@mui/icons-material/Logout';
import { capitalize, reject } from 'lodash';



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

export default function PersistentDrawerRight(props) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [user, setUser] = useState({});
    const [cart, setCart] = useState([]);


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
            let userdetail = JSON.parse(localStorage.getItem('user'))
            let arr = [];
            for (const [key, value] of userdetail.cart.entries(userdetail.cart)) {
                arr.push(`${value}`)
            }
            // console.log(arr, typeof (arr));
            setCart(arr);


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
                        {capitalize(user.name)}
                    </Typography>
                    {/* {console.log(typeof (user.cart))} */}

                    <Box>
                        <ShoppingCartIcon sx={{ position: 'relative' }} />
                        <sup style={{ borderRadius: '50%', position: 'absolute', top: '0', right: '2', color: 'white', fontStyle: 'bold' }}>{cart.length}</sup>
                    </Box>

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
                {props.children}
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
