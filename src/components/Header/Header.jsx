import React from "react";

import "./header.css"
import icon from "../../assets/E-food-icon.png"

const Header = () => {
    return (
        <div className="header">
            <div className="header_nav">
                <a href='#home' className="header_nav_icon">
                    <img src={icon} alt="" />
                </a>
                <a href='#home' className="header_nav_link">Home</a>
                <a href='#feature' className="header_nav_link">Features</a>
                <a href='#aboutUs' className="header_nav_link">About Us</a>
                <a href='#app' className="header_nav_link">App</a>
                <a href='#' className="header_nav_link">Contact</a>
            </div>
            <div className="header_download">
                <a href="#">Download now</a>
            </div>
        </div>
    )
}

export default Header