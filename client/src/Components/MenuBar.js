import React, { useState, forwardRef } from 'react';
import { List, ListItem, Collapse, Button, Drawer } from '@material-ui/core';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import clsx from 'clsx';
import Divider from '@mui/material/Divider';
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import menuItems from './sideBarItems';
import { NavLink as RouterLink } from 'react-router-dom';
import useStyles from './menuBarStyles';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SourceIcon from '@mui/icons-material/Source';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CollectionsIcon from '@mui/icons-material/Collections';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { Box } from '@material-ui/core';
import LogoutIcon from '@mui/icons-material/Logout';

const MenuBar = (props) => {
    const [menu, setMenu] = useState({});
    const { className, ...rest } = props;
    const classes = useStyles();
    const handleClick = (item) => {
        let newData = { ...menu, [item]: !menu[item] };
        setMenu(newData);
    }
    const CustomRouterLink = forwardRef((props, ref) => (
        <div ref={ref} style={{ flexGrow: 1 }}>
            <RouterLink {...props} />
        </div>
    ));

    const handleLogout = () => {
        // console.log("clicking on logout");
        localStorage.removeItem("user");
        window.location.reload();
        return;
    }

    const icons = {
        Home: <HomeIcon />,
        Content: <SourceIcon />,
        Courses: <MenuBookIcon />,
        Collection: <CollectionsIcon />,
        Quizes: <ContentPasteIcon />,
        Admins: <AdminPanelSettingsIcon />,
        Users: <GroupAddIcon />,
        Owner: <AccessibilityNewIcon />
    }
    // if (true) {
    //     return { icons.Home };
    // }
    const handleMenu = (children, level = 0) => {
        return children.map(({ children, name, url, links }) => {
            if (!children) {
                return (
                    <List component="div" disablePadding key={name}>
                        <ListItem
                            className={classes.item}
                            disableGutters
                            style={{ padding: "0px", display: 'block' }}
                            key={name}
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: 'initial',
                                    px: 2.5,
                                }}
                                component={CustomRouterLink}
                                to={url}
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
                                    {icons[name]}
                                </ListItemIcon>
                                <ListItemText primary={name} sx={{ opacity: 1, color: 'black' }} />

                            </ListItemButton>
                        </ListItem>
                        < Divider />
                    </List>


                )
            }
            return (
                <div key={name}>
                    <ListItem
                        className={classes.item}
                        disableGutters
                        key={name}
                        onClick={() => handleClick(name)}
                    >
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: 'initial',
                                px: 2.5,
                            }}
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
                                {icons[name]}
                            </ListItemIcon>

                            <ListItemText sx={{
                                opacity: 1, display: 'flex',
                                color: 'black'
                            }} primary={name} secondary={menu[name] ? <ExpandLess /> : <ExpandMore />} />

                        </ListItemButton>
                    </ListItem>
                    <Collapse
                        in={(menu[name]) ? true : false}
                        timeout="auto"
                        unmountOnExit
                    >
                        {handleMenu(children, 1)}
                    </Collapse>
                    <Divider />
                </div>
            )
        })
    }

    return (
        <Drawer
            anchor="left"
            classes={{ paper: classes.drawer }}
            open={true}
            variant="persistent"

        >
            <Box sx={{
                height: '95vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>


                <Box>
                    <List {...rest} >

                        {handleMenu(menuItems.data)}
                    </List>
                </Box>
                <Box>
                    <List onClick={handleLogout}>
                        <Divider />
                        <ListItem className={classes.item}
                            disableGutters
                            key={"Logout"}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: 'initial',
                                    px: 2.5,
                                    color: 'black'
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        color: 'black'
                                        // minWidth: 0,
                                        // mr: 'auto',
                                        // justifyContent: 'center',
                                    }}
                                >
                                    <LogoutIcon />
                                </ListItemIcon>
                                <ListItemText primary={"Logout"} sx={{ opacity: 1 }} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Drawer >
    )
}

export default MenuBar;