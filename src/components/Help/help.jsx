import React from "react";
import "./help.css";

const contacts = [
    {
        id : 1,
        name : "Abel John Jose",
        role : "Department Representative",
        phoneNo : "+91 1234567890",
        mail : "example@email.com"
    },

    {   
        id : 2,
        name : "Abel John Jose",
        role : "Department Representative",
        phoneNo : "+91 1234567890",
        mail : "example@email.com"
    },

    {   
        id : 3,
        name : "Abel John Jose",
        role : "Department Representative",
        phoneNo : "+91 1234567890",
        mail : "example@email.com"
    },

];

function Help(){
    return (
        <main className ="help-page">
        <div className="title-section">
        <div className="title-frame">
            <span className="line left" />                                                                              
            <h1 className="title">Help</h1>
            <span className="line right" />
        </div>
        </div>
        <p className="description">Questions, concerns or suggestions? Get in touch with us</p>
        <div className = "contact-flex">
            {
                contacts.map((contact) => (
                    <div key={contact.id} className="contact">
                    <div className="contact-identity-group">
                        <p className="contact-name">{contact.name}</p>
                        <p className="contact-role">{contact.role}</p>
                    </div>

                    <div className="contact-details-group">
                        <p className="contact-phone">{contact.phoneNo}</p>
                        <a href={`mailto:${contact.mail}`} className="contact-mail">{contact.mail}</a>
                        </div>
                    </div>
    ))}
        </div>
        <div className="footer">
            <p>© CS Association 2025 - 26</p>
            </div>
        </main>
    )
}

export default Help;