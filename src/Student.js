import React, { Component, useState } from "react";
import './Components.css'
import { Navbars, StudentCards } from './Component.js';

function Student() {
    return (
        <div>
            <Navbars />
            <div style={{ display: "inline-block", padding: 40, marginLeft: 100, width: '92%' }}>
                <h2>Students Details</h2>
                <StudentCards color={"blue"}/>
                <StudentCards />
                <StudentCards />
                <StudentCards />
            </div>
        </div>
    )
}

export default Student;