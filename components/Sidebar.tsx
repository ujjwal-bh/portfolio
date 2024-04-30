"use client";
import { data } from "@/utils/data";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaCalendar,
  FaChevronDown,
  FaChevronUp,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

export default function Sidebar() {
  const [active, setActive] = useState(false);
  return (
    <aside className={`sidebar ${active ? "active" : ""}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image
            src="/img/my-avatar.png"
            alt="Richard hanrick"
            width={80}
            height={100}
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Richard hanrick">
            {data.name}
          </h1>

          <p className="title">{data.tagline}</p>
        </div>

        <button
          className={`info_more-btn`}
          onClick={() => setActive((prev) => !prev)}
        >
          <span>Show Contacts</span>

          {active ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      <div className={`sidebar-info_more ${active && "active"}`}>
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
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

          <li className="contact-item">
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

          <li className="contact-item">
            <div className="icon-box">
              <FaCalendar />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time dateTime={data.birthdate}>{data.birthdate}</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <FaLocationPin />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>{data.location}</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          {data.socialMedia.map((item, index) => {
            const { Icon, url } = item;
            return (
              <li className="social-item" key={index}>
                <a href={url} target="_blank" className="social-link">
                  <Icon />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
