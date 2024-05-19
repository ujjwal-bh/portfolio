import SectionTitle from "@/components/SectionTitle";
import React from "react";
import { FaEnvelope, FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
import { data } from "@/utils/data";
import { FaLocationPin } from "react-icons/fa6";

export default function Contact() {
  return (
    <article className="contact">
      <SectionTitle>Contact</SectionTitle>

      <section className="mapbox">
      <ul className="contacts-list flex-list">
          <li className="contact-item flex-item">
            <div className="icon-box">
              <FaEnvelope />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href={`mailto:${data.email}`} className="contact-link">
                {data.email}
              </a>
            </div>
          </li>

          <li className="contact-item flex-item">
            <div className="icon-box">
              <FaPhoneAlt />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href={`tel:${data.phone}`} className="contact-link">
                {data.phone}
              </a>
            </div>
          </li>
        </ul>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form action="#" className="form">
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
          ></textarea>

          <button className="form-btn" type="submit">
            <FaPaperPlane />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
}
