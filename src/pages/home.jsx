import React from "react";

import "../styles/home.css"
import picture from "../assets/home-picture.png"

const Home = () => {
    return(
        <div id="home" className="home">
            <div className="home_text">
                <h1>Making time a good time by find tasty food and stunning place</h1>
                <p>There are many places that we can't figure out and why we are here to find for you, all you need are to follow our destination.</p>
            </div>
            <div className="home_picture">
                <img src={picture} alt="" />
            </div>
        </div>
    )
}

export default Home