import React from "react";

import "../styles/feature.css"

import mapIcon from "../assets/feature/mapIcon.png"
import tasteIcon from "../assets/feature/tasteIcon.png"

const Feature = () => {
    return (
        <div id="feature" className="feature">
            <div className="feature_title">Features</div>
            <div className="feature_assistant">Assistant AI E-Food</div>
            <div className="feature_pack">
                <div className="feature_pack_item">
                    <div className="feature_pack_item_image">
                        <img src={mapIcon} alt="" />
                    </div>
                    <div className="feature_pack_item_name">
                        Quality Food
                    </div>
                    <div className="feature_pack_item_content">
                        Quality food for good lunch, through the reviews in the most transparent and accurate way
                    </div>
                </div>

                <div className="feature_pack_item">
                    <div className="feature_pack_item_image">
                        <img src={mapIcon} alt="" />
                    </div>
                    <div className="feature_pack_item_name">
                        Location Guide
                    </div>
                    <div className="feature_pack_item_content">
                        Assists users in finding nearby restaurants, cafes, or food trucks, with ratings, reviews, menus, and directions.
                    </div>
                </div>

                <div className="feature_pack_item">
                    <div className="feature_pack_item_image">
                        <img src={tasteIcon} alt="" />
                    </div>
                    <div className="feature_pack_item_name">
                        Super Taste
                    </div>
                    <div className="feature_pack_item_content">
                        Food assistant helps discover your unique taste profile and provides personalized food recommendations.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature