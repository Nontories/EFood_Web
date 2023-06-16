import React from "react";

import "../styles/testimonial.css"

import TestimonialImage from "../assets/testimonial/TestimonialImage.png"
import star from "../assets/Star.png"

const Testimonial = () => {
    return(
        <div id="testimonial" className="testimonial">
            <div className="testimonial_title">Testimonial</div>
            <div className="testimonial_header">How Our App Revolutionized My Dining Experience</div>
            <div className="testimonial_image">
                <img src={TestimonialImage} alt="" />
            </div>
            <div className="testimonial_text">I've always struggled with finding good restaurants and dishes that fit my dietary needs and taste preferences. But ever since I downloaded the Assistant AI E-Food app, my dining experience has been revolutionized.</div>
            <div className="testimonial_star">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
            </div>
            <div className="testimonial_name">Augusta W. Reynoso</div>
            <div className="testimonial_position">happy user of Assistant AI E-Food</div>
        </div>
    )
}

export default Testimonial