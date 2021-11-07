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
        <div style={{margin:'5px 15px'}}>
            <div className='studentCard'>
                <div className='circleS'><PersonIcon sx={{ fontSize: 32, color: "white",margin:'3px 0px 0 5px' }} /></div>
                <h5 style={{ position: 'relative', left: 60, top: -25 }}>John Snow</h5>
                <h6><b>Student id :</b> ENG20C0265</h6>
                <h6><b>Father Name :</b> Ajay</h6>
                <h6><b>Dept :</b> CSE</h6>
                <h6><b>Dob :</b> 2002-09-30</h6>
                <h6><b>Age :</b>18</h6>
                <h6><b>City :</b> Bangalore</h6>
            </div>
        </div>
    )
}
