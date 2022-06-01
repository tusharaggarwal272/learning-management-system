import React from 'react';
import './Users.css';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import MenuBar from '../Components/MenuBar';

import { Box } from '@mui/system';
function Users() {
    return (
        <Box sx={{ position: 'relative', display: 'flex', width: '100vw', height: '100vh', overflowX: 'hidden' }}>
            <Box>
                <MenuBar />
            </Box>
            <Box sx={{ width: '80vw', height: '100%', position: 'absolute', right: '0%' }}>
                <div className='users-main'>

                    <div className="users-content">
                        <div className="users-heading">
                            <div className="users-heading-left">
                                <div className='users-title'>
                                    <h1>Users</h1>
                                </div>
                                <div className='users-count'>/1</div>
                            </div>
                            <div className="users-heading-right">
                                <div className="users-option">
                                    Send
                                    {/* <label for='send'>Send</label>
                            <select name="msg" id="msg">
                                <option value="sms">SMS</option>
                                <option value="email">EMAIL</option>
                                <option value="notification">PUSH NOTIFICATION</option>
                            </select> */}

                                </div>
                                <div className="users-option">
                                    <div className="users-option-icon"><ExitToAppIcon /></div>
                                    <div className="users-option-info">Export</div>
                                </div>
                                <div className="users-option">

                                    <div className="users-option-icon"><FilterAltIcon /></div>
                                    <div className="users-option-info">Filter</div>
                                </div>
                            </div>
                        </div>
                        <div className="users-list">
                            <div className="users-listHead">
                                <ul>
                                    <li>ID</li>
                                    <li>NAME</li>
                                    <li>EMAIL</li>
                                    <li>MOBILE</li>
                                    <li>JOINED ON</li>
                                    <li>LAST ACTIVE</li>
                                </ul>
                            </div>
                            <div className="users-listAll">
                                <ul>
                                    <li>1234</li>
                                    <li>John</li>
                                    <li>john@gmail.com</li>
                                    <li>1212345678</li>
                                    <li>April 10th,smhbfvkmhjbf adbgfakdsjbfh adbgfakdsjbfh adbgfakdsjbfh adbgfakdsjbfh skehbfkjsdbfh amhbfvkashdbfv</li>
                                    <li>2 min ago ,dnfbvmzvdhb sm dahfbkabdshf ,shbgflajbgf</li>
                                </ul>
                                <ul>
                                    <li>1234</li>
                                    <li>John</li>
                                    <li>john@gmail.com</li>
                                    <li>1212345678</li>
                                    <li>April 10th,smhbfvkmhjbf adbgfakdsjbfh adbgfakdsjbfh adbgfakdsjbfh adbgfakdsjbfh skehbfkjsdbfh amhbfvkashdbfv</li>
                                    <li>2 min ago ,dnfbvmzvdhb sm dahfbkabdshf ,shbgflajbgf</li>
                                </ul>
                                <ul>
                                    <li>1234</li>
                                    <li>John</li>
                                    <li>john@gmail.com</li>
                                    <li>1212345678</li>
                                    <li>April 10th,smhbfvkmhjbf adbgfakdsjbfh adbgfakdsjbfh adbgfakdsjbfh adbgfakdsjbfh skehbfkjsdbfh amhbfvkashdbfv</li>
                                    <li>2 min ago ,dnfbvmzvdhb sm dahfbkabdshf ,shbgflajbgf</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </Box>
    )
}

export default Users