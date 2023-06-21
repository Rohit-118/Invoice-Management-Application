import React from "react";
import abclogo from './logos/abclogo.svg';
import hrclogo from './logos/hrclogo.svg';
import'./cssfile/Heading.css'



function Heading() {
    return (
        <div className="heading">
            <img src={abclogo} alt="abc logo" className="abclogo"/>
            <img src={hrclogo} alt="hrc logo" className="hrclogo"/>
            <p className="headingtext">Invoice List</p>
        </div>
    );

}
export default Heading;