import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';
import MenuBar from '../Components/MenuBar';

function NewSection() {
    const [open, setOpen] = React.useState(true);
    // { console.log(window.location.href.samplename) }
    const [courseName, setCourseName] = useState('');

    const handleChange = (e) => {
        setCourseName(e.target.value);
    }

    const handleCancelClick = () => {
        setCourseName('');
        return;
    }
    const handleCreateClick = () => {
        window.location.href = `/admin/content/courses/${courseName}`
    }

    const params = useParams();
    return (
        <Box sx={{ position: 'relative', display: 'flex', width: '100vw', height: '100vh', overflowX: 'hidden' }}>
            <Box>
                <MenuBar />
            </Box>




            <Box sx={{ width: '80vw', height: '100%', position: 'absolute', right: '0%' }}>
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', marginTop: '5%', marginTop: '2%', alignItems: 'center' }}>
                    <Collapse in={open} sx={{ width: '95%' }}>
                        <Alert severity="success"
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }>
                            Course was successfully created.
                        </Alert>
                    </Collapse>

                    <Typography sx={{ fontSize: '250%', margin: '1%', marginBottom: '0%', fontWeight: 'bold', width: '90%', textAlign: 'start' }}> {(params.samplename)}</Typography>
                    <Box sx={{ width: '90%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', color: '#D3D3D3' }}>
                        <Typography sx={{ fontSize: '15px', margin: '0 1px', fontWeight: 'bold' }}>Not Published</Typography>
                        <FiberManualRecordIcon sx={{ fontSize: '10px', margin: '0 1px' }} />
                        <Typography sx={{ fontSize: '15px', margin: '0 1px', fontWeight: 'bold' }}>0 Enrolled Users</Typography>
                    </Box>
                    <Box sx={{ padding: '2%', border: '1px dashed #D3D3D3', height: '50vh', width: '90%', marginTop: '5%', background: '#FAFAFA', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ fontSize: '150%', margin: '1%', fontWeight: 'bold' }}>Add a new section</Typography>
                        <Box sx={{ width: '60%', height: '100%', borderRadius: '10px', border: '1px solid #ccc', display: 'flex', background: 'white', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography sx={{ fontSize: '100%', marginLeft: '5%', width: '100%', textAlign: 'start' }}>Name of the section</Typography>
                            <TextField onChange={(e) => handleChange(e.target.value)} size="small" sx={{ width: '95%' }}></TextField>
                            <Typography sx={{ fontSize: '100%', marginLeft: '5%', width: '100%', textAlign: 'start' }}>Description</Typography>
                            <TextareaAutosize onChange={(e) => handleChange(e.target.value)} minRows={3} style={{ width: '94%', borderRadius: '5px' }}></TextareaAutosize>

                            <Box sx={{ width: '95%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', margin: '1%', alignItems: 'flex-end', marginTop: '4%' }}>

                                <Button sx={{ margin: '0.5%', borderRadius: '5px' }} onClick={handleCreateClick} variant="contained">Add new section</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default NewSection