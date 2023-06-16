import React from "react";

import "../styles/aboutUs.css"

import aboutImage from "../assets/aboutUs/aboutImage.png"

const AboutUs = () => {
    return (
        <div id="aboutUs" className="aboutUs">
            <div className="aboutUs_image">
                <img src={aboutImage} alt="" />
            </div>
            <div className="aboutUs_content">
                <div className="aboutUs_content_title">About us</div>
                <div className="aboutUs_content_header">
                    Our Mission to Revolutionize the Way You Dine
                </div>
                <div className="aboutUs_content_text">
                    Our mission is to revolutionize the way you dine by making it easier, more enjoyable, and more personalized. We believe that everyone should have access to good food, whether you're a busy professional, a foodie, or a health-conscious individual.
                </div>
                <div className="aboutUs_content_button">Read More</div>
            </div>
        </div>
    )
}

export default AboutUs