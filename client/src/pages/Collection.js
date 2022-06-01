import React from 'react'
import './Collection.css'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import MenuBar from '../Components/MenuBar';

function Collection() {
    return (
        <Box sx={{ position: 'relative', display: 'flex', width: '100vw', height: '100vh', overflowX: 'hidden' }}>
            <Box>
                <MenuBar />
            </Box>
            <Box sx={{ width: '80vw', height: '100%', position: 'absolute', right: '0%' }}>
                <div className='collection-main'>
                    <div className="collection-content">
                        <div className="collection-heading">
                            <div className="collection-heading-left">
                                <div className='collection-title'>
                                    <h1>Collections</h1>
                                </div>
                                <div className='collection-count'>/0</div>
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
                                        window.location.href = '/admin/content/collections/new'
                                    }} variant="contained" textAling="center" sx={{ fontSize: '15px', height: '100%' }} size="small">+ New Collection</Button>
                                </div>

                            </div>
                        </div>
                        <div className="collection-list">
                            <div className="collection-allList">
                                <div className="collection-empty">
                                    <InsertDriveFileIcon />
                                    No Collections to show yet
                                </div>
                                <div className="collection-help">
                                    If you need any help, check our <a href="#"> knowledge base</a> or <a href="#">contact us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </Box >
    )
}

export default Collection