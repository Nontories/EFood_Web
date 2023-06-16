import React from "react";
import Header from "../Header/Header";
import Home from "../../pages/home";
import Feature from "../../pages/feature";
import AboutUs from "../../pages/aboutUs";
import App from "../../pages/app";
import Contact from "../../pages/contact";
import Testimonial from "../../pages/testimonial";
import Footer from "../Footer/Footer";

import "./Layout.css"

const Layout = () => {
    return (
        <div className="layout">
            <Header />
            <Home />
            <Feature />
            <AboutUs />
            <App />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
    )
}

export default Layout