import React from "react";

import { FaEnvelopeOpen } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";

import './Contact.css'

function Contact() {
    return (
        <section className="section">
            <h1 className="section-title contact-title">Get In <span>Touch</span></h1>

            <div className="contact-content-container grid">
                <div className="contact-content">
                    <h2 className="talk">Let's Talk!</h2>

                    <p className="content-text">Feel free to call or message me. I am always open to discuss new projects, creative ideas or oportunities to be a part of your super team.</p>

                    <div className="contact-means">
                        <FaEnvelopeOpen className="contact-icon" />
                        <div>
                            <p>Email me</p>
                            <p>ilham2saleh@gmail.com</p>
                        </div>
                    </div>

                    <div className="contact-means">
                        <FaPhoneSquareAlt className="contact-icon" />
                        <div>
                            <p>Call me</p>
                            <p>+447745756106</p>
                        </div>
                    </div>

                    <div className="contact-means">
                        <a href="https://github.com/ilham-saleh" target="_blank">
                            <FaSquareGithub className="contact-icon" />
                        </a>
                        <div>
                            <p>Visit my GitHub account</p>
                        </div>
                    </div>
                </div>

                <form className="contact-form">
                    <div className="form-head">
                        <input type="text" placeholder="Your Name"/>

                        <input type="text" placeholder="Your Email"/>

                        <input type="text" placeholder="Subject"/>
                    </div>

                    <div className="form-body">
                        <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                    </div>

                    <button className="button" type="submit">Send Message <span><FiSend /></span></button>
                </form>
            </div>
        </section>
    )
}

export default Contact