import React, { useState } from "react";

import { FaEnvelopeOpen } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Contact.css";

function getInitialText() {
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const subject = localStorage.getItem("subject");
  const message = localStorage.getItem("message");

  return {
    name: name || "",
    email: email || "",
    subject: subject || "",
    message: message || "",
  };
}

function Contact() {
  const [postMessage, setPostMessage] = useState(getInitialText());

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPostMessage({
      ...postMessage,
      [name]: value,
    });
    localStorage.setItem(name, value);

    console.log(postMessage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postMessage),
    };

    try {
      const response = await fetch(
        "http://localhost:8888/.netlify/functions/send-email",
        options
      );
      const result = await response.json();
      console.log(result);

      if (response.ok) {
        toast.success("Your message has been sent!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        localStorage.clear();
        setPostMessage(getInitialText());
      } else {
        console.log(result.error);
        toast.error(`Error: ${result.error}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        localStorage.clear();
      }
    } catch (error) {
      console.error("Error when sending message:", error.message);
      toast.error("Error sending message. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <section className="section">
      <h1 className="section-title contact-title">
        Get In <span>Touch</span>
      </h1>

      <div className="contact-content-container grid">
        <div className="contact-content" data-aos="fade-right">
          <h2 className="talk">Let's Talk!</h2>

          <p className="content-text">
            Feel free to call or message me. I am always open to discuss new
            projects, creative ideas or oportunities to be a part of your super
            team.
          </p>

          <div className="contact-means">
            <FaEnvelopeOpen className="contact-icon" />
            <div>
              <h4>Email me</h4>
              <p>ilham2saleh@gmail.com</p>
            </div>
          </div>

          <div className="contact-means">
            <FaPhoneSquareAlt className="contact-icon" />
            <div>
              <h4>Call me</h4>
              <p>+447745756106</p>
            </div>
          </div>

          <div className="contact-means">
            <a href="https://github.com/ilham-saleh" target="_blank">
              <FaSquareGithub className="contact-icon" />
            </a>
            <div>
              <h4>Visit my Github account</h4>
              <p>Click GitHub icon</p>
            </div>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
          data-aos="fade-left"
        >
          <div className="form-head">
            <input
              type="text"
              name="name"
              value={postMessage.name}
              placeholder="Your Name"
              required
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              value={postMessage.email}
              placeholder="Your Email"
              required
              onChange={handleChange}
            />

            <input
              type="text"
              name="subject"
              value={postMessage.subject}
              placeholder="Subject"
              onChange={handleChange}
            />
          </div>

          <div className="form-body">
            <textarea
              name="message"
              value={postMessage.message}
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
              onChange={handleChange}
            ></textarea>
          </div>

          <button className="button" type="submit">
            Send Message{" "}
            <span>
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
