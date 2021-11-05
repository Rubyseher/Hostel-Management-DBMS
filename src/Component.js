import React, { useState } from "react";
import { Redirect } from 'react-router';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';

export const Navbars = props => {
    const [redirect, setRedirect] = useState();

    if (redirect) return <Redirect push to={{ pathname: redirect }} />

    return (
        <div className='burger'>
            <h4 onClick={() => setRedirect("./")}> <LoginIcon sx={{ fontSize: 28 }} /> &nbsp;Login</h4>
            <h4 onClick={() => setRedirect("./dashboard")}> <ListAltIcon sx={{ fontSize: 28 }} /> &nbsp;Dashboard</h4>
            <h4 onClick={() => setRedirect("./student")}> <GroupIcon sx={{ fontSize: 28 }} /> &nbsp;Students</h4>
            <h4 onClick={() => setRedirect("./dashboard")}> <PersonIcon sx={{ fontSize: 28 }} /> &nbsp;Hostel</h4>
        </div>
    )
}

export const StudentCards = props => {
    const [redirect, setRedirect] = useState();

    if (redirect) return <Redirect push to={{ pathname: redirect }} />

    return (
        <div className='studentCard'>
            <PersonIcon sx={{ fontSize: 26 }} />
        </div>
    )
}
