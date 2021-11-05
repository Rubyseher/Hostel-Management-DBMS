import React, { Component, useState } from "react";
import './Components.css'
import { Navbars,StudentCards } from './Component.js';

function Dashboard() {
    return (
        <div>
            <Navbars />
            <div style={{display:"inline-block",padding:40}}>
                <h2>Students</h2>
                <StudentCards/>
                <h2>Visitors</h2>
                <h2>Staff</h2>
            </div>

        </div>
    )
}

export default Dashboard;