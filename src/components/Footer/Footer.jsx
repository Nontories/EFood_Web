import React from "react";

import "./footer.css"

import icon from "../../assets/E-food-icon.png"
import fbIcon from "../../assets/footer/FacebookIcon.png"
import insIcon from "../../assets/footer/InstagramIcon.png"
import tiktokIcon from "../../assets/footer/TiktokIcon.png"
import appleIcon from "../../assets/footer/appleIcon.png"
import playIcon from "../../assets/footer/playstoreIcon.png"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_icon">
                <div className="footer_icon_image">
                    <img src={icon} alt="" />
                </div>
                <div className="footer_icon_text">E-Food</div>
            </div>
            <div className="footer_home">
                <div className="footer_home_title footer_title">
                    Home
                </div>
                <a href="" className="footer_home_link footer_link">Head</a>
                <a href="" className="footer_home_link footer_link">About us</a>
                <a href="" className="footer_home_link footer_link">App</a>
                <a href="" className="footer_home_link footer_link">Testimonial</a>
                <a href="" className="footer_home_link footer_link">Contact</a>
            </div>
            <div className="footer_location">
                <div className="footer_home_title footer_title">
                    Location
                </div>
                <div className="footer_location_text">Floor M, Victory Tower Building, 12 Tan Trao Street, Tan Phu Ward, District 7.</div>
                <div className="footer_location_text">Referral Program</div>
                <div className="footer_location_text">Phone: +7 485-118-03-25</div>
                <a href="#" className="footer_location_text page_link">home@efood.com</a>
                <div className="footer_location_text">www.e-food.com</div>
            </div>
            <div className="footer_social">
                <div className="footer_social_title footer_title">Social</div>
                <div className="footer_social_link">
                    <img src={fbIcon} alt="" />
                    <a href="#" className="footer_social_link_text footer_link">Facebook</a>
                </div>
                <div className="footer_social_link">
                    <img src={insIcon} alt="" />
                    <a href="#" className="footer_social_link_text footer_link">Instagram</a>
                </div>
                <div className="footer_social_link">
                    <img src={tiktokIcon} alt="" />
                    <a href="#" className="footer_social_link_text footer_link">Tiktok</a>
                </div>
            </div>
            <div className="footer_app">
                <div className="footer_social_title footer_title">Application</div>
                <div className="footer_social_link">
                    <img src={appleIcon} alt="" />
                    <a href="#" className="footer_social_link_text footer_link">Appstore</a>
                </div>
                <div className="footer_social_link">
                    <img src={playIcon} alt="" />
                    <a href="#" className="footer_social_link_text footer_link">Playstore</a>
                </div>
            </div>
        </div>
    )
}

export default Footer