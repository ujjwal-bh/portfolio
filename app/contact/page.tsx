import SectionTitle from "@/components/SectionTitle";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { data } from "@/utils/data";

export default function Contact() {
  return (
    <article className="contact">
      <SectionTitle>Contact</SectionTitle>

      <section className="mapbox">
        <figure>
          <iframe
            src={data.map}
            width="400"
            height="300"
            loading="lazy"
          ></iframe>
        </figure>
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
