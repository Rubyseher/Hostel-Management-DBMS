import React, { Component, useState } from "react";
import './Components.css'
import { Navbars, StudentCards } from './Component.js';

function Student() {
    return (
        <div>
            <Navbars />
            <div style={{ padding: '50px 300px' }}>
                <h2>Students Details</h2>
                <StudentCards />
                <StudentCards />
                <StudentCards />
                <StudentCards />
            </div>
        </div>
    )
}

export default Student;