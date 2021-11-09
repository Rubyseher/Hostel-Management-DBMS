import React, { useState } from "react";
import { Redirect } from 'react-router';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DoorFrontIcon from '@mui/icons-material/DoorFront';
export const Navbars = props => {
    const [redirect, setRedirect] = useState();

    if (redirect) return <Redirect push to={{ pathname: redirect }} />

    return (
        <div className='burger'>
            <OverlayTrigger placement={'right'}
                overlay={<Tooltip >Log Out</Tooltip>} >
                <LogoutIcon sx={{ fontSize: 36, display: "block", marginBottom: 4 }} onClick={() => setRedirect("./")} />
            </OverlayTrigger>

            <OverlayTrigger placement={'right'}
                overlay={<Tooltip >Dashboard</Tooltip>} >
                <ListAltIcon sx={{ fontSize: 36, display: "block", marginBottom: 4 }} onClick={() => setRedirect("./dashboard")} />
            </OverlayTrigger>

            <OverlayTrigger placement={'right'}
                overlay={<Tooltip >Students</Tooltip>} >
                <GroupIcon sx={{ fontSize: 36, display: "block", marginBottom: 4 }} onClick={() => setRedirect("./student")} />
            </OverlayTrigger>

            <OverlayTrigger placement={'right'}
                overlay={<Tooltip >Staff</Tooltip>} >
                <BusinessCenterIcon sx={{ fontSize: 36, display: "block", marginBottom: 4 }} onClick={() => setRedirect("./dashboard")} />
            </OverlayTrigger>

            <OverlayTrigger placement={'right'}
                overlay={<Tooltip >Visitors</Tooltip>} >
                <EmojiPeopleIcon sx={{ fontSize: 36, display: "block", marginBottom: 4 }} onClick={() => setRedirect("./dashboard")} />
            </OverlayTrigger>

            <OverlayTrigger placement={'right'}
                overlay={<Tooltip >Rooms</Tooltip>} >
                <DoorFrontIcon sx={{ fontSize: 36, display: "block", marginBottom: 4 }} onClick={() => setRedirect("./dashboard")} />
            </OverlayTrigger>
        </div>
    )
}

export const StudentCards = props => {
    const [redirect, setRedirect] = useState();

    if (redirect) return <Redirect push to={{ pathname: redirect }} />

    return (
        <div style={{ margin: '5px 15px' }}>
            <div className='studentCard'>
                <div className='circleS'><PersonIcon sx={{ fontSize: 32, color: "white", margin: '5px 0px 0 6px' }} /></div>
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
