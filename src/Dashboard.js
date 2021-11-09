import React, { Component, useState } from "react";
import './Components.css'
import { Navbars, StudentCards } from './Component.js';

function Dashboard() {
    return (
        <div >
            <Navbars />
            <div style={{ display: "inline-block", padding: 40, marginLeft:250, width:'80%' }}>
                <h2>Students</h2>
                <div className="horizontalScroll">
                    <StudentCards />
                    <StudentCards />
                    <StudentCards />
                    <StudentCards />
                </div>
                <br/>
                <h2>Visitors</h2>
                <h2>Staff</h2>
            </div>

        </div>
    )
}

export default Dashboard;