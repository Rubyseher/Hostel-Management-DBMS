import React, { Component, useState } from "react";
import './Components.css'
import { Navbars } from './Component.js';

function Student() {
    return (
        <div>
            <Navbars/>
            <div style={{padding:'50px 300px'}}>
                <h2>Students Details</h2>
                
            </div>
        </div>
    )
}

export default Student;