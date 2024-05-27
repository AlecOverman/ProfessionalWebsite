import React from "react";
import pfp from '../Assets/blank.webp';

const TextBox = () => {
    return (
        <div className="text-box">
            <div id="text-box-introduction">
                <div id="introduction-text">
                    <h1>Introduction</h1>
                    <p>
                        Welcome to the professional website of Alec Overman, an aspiring computer scientist and software developer with a passion for creating innovative and efficient solutions. Currently pursuing a B.S. in Computer Science at the University of California Riverside, Alec combines academic excellence with hands-on experience to drive impactful projects and collaborations.
                    </p>
                </div>
                <div id="pfp">
                    <img src={pfp} ></img>
                </div>
            </div>
        </div>
    )
}

export default TextBox