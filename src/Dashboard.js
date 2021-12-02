import React, { Component, useState, useEffect } from "react";
import './Components.css'
import { Navbars, StudentScroll } from './Component.js';

function Dashboard() {
    const [details, setDetails] = useState()

    useEffect(() => {
        const getstudent = async () => {
            let data = await fetch('http://localhost:8080/getstudent').then(res => res.json())
            setDetails(data)
        }
        getstudent()
    }, [])
    return (
        <div >
            <Navbars />
            <div style={{ display: "inline-block", padding: 40, marginLeft: 100, width: '92%' }}>
                <div>
                    {
                        details && details.map((item, i) => (
                            <div> {item.name} </div>
                        ))
                    }
                </div>
                <h2>Students</h2>
                <div className="horizontalScroll">
                    <StudentScroll color={"#1069d8"} data={"101"} />
                    <StudentScroll color={"#1069d8"} data={"101"} />
                    <StudentScroll color={"#1069d8"} data={"101"} />
                    <StudentScroll color={"#1069d8"} data={"101"} />
                    <StudentScroll color={"#1069d8"} data={"101"} />
                </div>
                <br />

                <h2>Visitors</h2>
                <div className="horizontalScroll">
                    <StudentScroll color={"#7435a4"} data={"10 Oct 21"} />
                    <StudentScroll color={"#7435a4"} data={"10 Oct 21"} />
                    <StudentScroll color={"#7435a4"} data={"10 Oct 21"} />
                    <StudentScroll color={"#7435a4"} data={"10 Oct 21"} />
                    <StudentScroll color={"#7435a4"} data={"10 Oct 21"} />
                </div>
                <br />

                <h2>Staff</h2>
                <div className="horizontalScroll">
                    <StudentScroll color={"#ed8124"} data={"Security"} />
                    <StudentScroll color={"#ed8124"} data={"Security"} />
                    <StudentScroll color={"#ed8124"} data={"Security"} />
                    <StudentScroll color={"#ed8124"} data={"Security"} />
                    <StudentScroll color={"#ed8124"} data={"Security"} />
                </div>
            </div>

        </div>
    )
}

export default Dashboard;