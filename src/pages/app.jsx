import React from "react";

import "../styles/app.css"

import appImage from "../assets/app/appImage.png"
import flatIphone from "../assets/app/Flat iPhone.png"
import appstoreButton from "../assets/app/appstoreButton.png"
import googleButton from "../assets/app/googleButton.png"

const App = () => {
    return (
        <div id="app" className="app">
            <div className="app_content">
                <div className="app_content_title">App</div>
                <div className="app_content_header">Get Full Access to Assistant AI E-Food with our App</div>
                <div className="app_content_text">By downloading our app, you'll have full access to Assistant AI E-Food and all of its features. This includes personalized food recommendations based on your taste, diet, and allergies, as well as the ability to discover new flavors and dishes that you'll love.</div>
                <div className="app_content_button">
                    <div className="app_content_button_appstore">
                        <img src={appstoreButton} alt="" />
                    </div>
                    <div className="app_content_button_google">
                        <img src={googleButton} alt="" />
                    </div>
                </div>
            </div>
            <div className="app_image">
                <img src={flatIphone} alt="" />
                <img className="app_image_iphone" src={appImage} alt="" />
            </div>
        </div>
    )
}

export default App