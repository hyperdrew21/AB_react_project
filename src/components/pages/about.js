import React from 'react';
import profilePicture from "../../../static/assets/images/bio/wdpic.jpg";

export default function() {
    return (
        <div className= "content-page-wrapper">
            <div className= "left-column"
            style={{ 
                background: "url(" + profilePicture + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            >
                
            </div>   
            <div className="right-column">
                placeholder text
            </div>
        </div>
        );
}