"use client"
import SectionTitle from "@/components/SectionTitle";
import React, { SyntheticEvent, useState } from "react";
import { FaEnvelope, FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
import { data } from "@/utils/data";
import axios from "axios";
import toast from "react-hot-toast";

const INIT = {
  name: "",
  email: "",
  message: ""
}
export default function Contact() {
  const [formData, setFormData] = useState(INIT)

  const handleContact = async (e: SyntheticEvent) => {
    e.preventDefault();
    try{

      const response = await axios.post("/api/contact", JSON.stringify(formData))
      console.log(response, "ress")
      toast.success("Message sent successfully");
      setFormData(INIT)
    } catch(error) {
      toast.error("Something went wrong")
    }

  }
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
        <h3 className="h3 form-title">Let's Chat</h3>
        <form className="form" onSubmit={handleContact}>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              value={formData.name}
              onChange={(e)=> setFormData({...formData, name: e.target.value})}
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              value={formData.email}
              onChange={(e)=> setFormData({...formData, email: e.target.value})}
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            value={formData.message}
            onChange={(e)=> setFormData({...formData, message: e.target.value})}
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
