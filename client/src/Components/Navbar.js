import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from 'react';

export default function ButtonAppBar() {
    let user = localStorage.getItem('user');

    {
        user = JSON.parse(user);
        console.log(user, user.name)


    }
    const [name, setname] = useState((user.name).toUpperCase())
    return (
        <Box >

        </Box>
    );
}