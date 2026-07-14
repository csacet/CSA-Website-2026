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
        <main className ="help-page csa-earth-section">
        <div className="csa-section-heading help-heading">
        <svg className="csa-heading-dino" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M30.8 0V2.8H28V19.6H25.2V22.4H19.6V25.2H16.8V28H14V30.8H8.4V28H5.6V25.2H2.8V19.6H0V36.4H2.8V39.2H5.6V42H8.4V44.8H11.2V56H16.8V53.2H14V50.4H16.8V47.6H19.6V44.8H22.4V47.6H25.2V56H30.8V53.2H28V42H30.8V39.2H33.6V36.4H36.4V28H39.2V30.8H42V25.2H36.4V19.6H50.4V16.8H42V14H56V2.8H53.2V0M33.6 2.8H36.4V5.6H33.6V2.8Z" fill="#202020" />
        </svg>
        <svg className="csa-heading-disk" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="25" cy="25" r="10.9375" stroke="#202020" strokeWidth="3.125" />
            <circle cx="25" cy="25" r="17.1875" stroke="#202020" strokeWidth="3.125" />
            <circle cx="25" cy="25" r="23.4375" stroke="#202020" strokeWidth="3.125" />
            <circle cx="25" cy="25.4434" r="6" fill="#202020" />
        </svg>
        <div className="csa-section-heading-frame">
            <span className="csa-section-heading-line" />                                                                              
            <h1 className="csa-section-heading-title">Help</h1>
            <span className="csa-section-heading-line" />
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
