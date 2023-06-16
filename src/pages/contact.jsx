import React from "react";

import "../styles/contact.css"

const Contact = () => {
    return(
        <div className="contact">
            <div className="contact_title">Contact</div>
            <div className="contact_header">Any ideas are a great honor for us, to better</div>
            <form action="" className="contact_form">
                <input className="contact_form_input" type="text" placeholder="Enter your message," />
                <button>Send</button>
            </form>
        </div>
    )
}

export default Contact