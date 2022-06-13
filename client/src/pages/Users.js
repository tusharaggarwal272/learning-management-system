import React, { useState, useEffect } from 'react';
import './Users.css';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import MenuBar from '../Components/MenuBar';
import { DataGrid } from '@mui/x-data-grid';

import { Box } from '@mui/system';
import axios from 'axios';


const columns = [

    {
        field: 'username',
        headerName: 'Name',
        headerClassName: 'table--header',
        flex: 2,
    },
    {
        field: 'email',
        headerName: 'Email',
        headerClassName: 'table--header',
        flex: 2,
    },
    {
        field: 'contact',
        headerName: 'Contact',
        headerClassName: 'table--header',
        flex: 2,
    },
    {
        field: 'createdAt',
        headerName: 'Joined on',
        headerClassName: 'table--header',
        flex: 2,
        valueGetter: (params) => {
            return new Date(params.row.createdAt).toUTCString();
        }
    },
];
function Users() {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        axios.get('/api/users/allusers').then((res) => {
            // console.log(res.data);
            setRows(res.data);
            rows.map((r) => {
                r.createdAt = new Date(r.createdAt).toUTCString();
            })
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);


    return (
        <Box sx={{ position: 'relative', display: 'flex', width: '100vw', height: '100vh', overflowX: 'hidden' }}>
            <Box>
                <MenuBar />
            </Box>
            <Box sx={{ width: '80vw', height: '100%', position: 'absolute', right: '2%', margin: ' 1%' }}>
                {console.log(rows)}
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        getRowId={(row) => row._id}
                        loading={rows.length === 0}
                        checkboxSelection
                        disableSelectionOnClick
                    />
                </div>
            </Box>
        </Box>
    )
}

export default Users