"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dpv7tth", // Replace with your EmailJS service ID
        "template_1p2jnte", // Replace with your EmailJS template ID
        e.target,
        "bJSWFmn0jK5aVMiTh" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setFormStatus("Message sent successfully!");
        },
        (error) => {
          setFormStatus("Failed to send message.");
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact-form-wrapper">
      <h2>Contact Us</h2>
      <form onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="fullName"
          placeholder="Your Name"
          required
          className="contact-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="contact-input"
        />
        <textarea
          name="comments"
          placeholder="Your Message"
          required
          className="contact-textarea"
        ></textarea>
        <button type="submit" className="contact-submit-button">
          Send Message
        </button>
      </form>
      {formStatus && <p className="form-status">{formStatus}</p>}
    </div>
  );
};

export default ContactForm;
