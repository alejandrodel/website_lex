import React from "react";
import ignition from "../images/Home/Certifications/ignition.svg";
import kepware from "../images/Home/Certifications/kepware.svg";
import siemens from "../images/Home/Certifications/siemens.png";
import kuka from "../images/Home/Certifications/kuka.svg";
import abb from "../images/Home/Certifications/abb.png";
import weintek from "../images/Home/Certifications/weintek.png";
import keyence from "../images/Home/Certifications/keyence.svg";
import cognex from "../images/Home/Certifications/cognex.png";
import rockwell from "../images/Home/Certifications/rockwell.svg";



function Home(){
    return(
        <div>
            <h1>This is the home page</h1>
            <p>This is the home page</p>
            <p>This is the home page</p>
            <p>This is the home page</p>
            <p>This is the home page</p>
            <p>This is the home page</p>
            <p>This is the home page</p><p>This is the home page</p>
            <p>This is the home page</p>
            <p>This is the home page</p>
            <p>This is the home page</p>
            <p>This is the home page</p>
            <p>This is the home page</p><p>This is the home page</p>
            <p>This is the home page</p>
            <p>This is the home page</p>
            <p>This is the home page</p>
            <p>This is the home page</p>
            <p>This is the home page</p>
            <p>This is the home page</p>
            <p>This is the home page</p>
            <p>This is the home page</p>

            <div>
            <h2>
                <span className="bt_bb_headline_content"><span>Our <strong>certifications</strong></span></span></h2>
                <div className="certifications">
                    <img className= "grid-element" src={ignition} alt="" />
                    <img className= "grid-element" src={siemens} alt="" />
                    <img className= "grid-element" src={kepware} alt="" />
                    <img className= "grid-element" src={rockwell} alt="" />
                    <img className= "grid-element" src={kuka} alt="" />
                    <img className= "grid-element" src={abb} alt="" />
                    <img className= "grid-element" src={weintek} alt="" />
                    <img className= "grid-element" src={keyence} alt="" />
                    <img className= "grid-element" src={cognex} alt="" />

                </div>      
            </div>
            
        </div>
    )
}

export default Home;