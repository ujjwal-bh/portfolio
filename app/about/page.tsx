import SectionTitle from "@/components/SectionTitle";
import { data } from "@/utils/data";
import React from "react";
import { FaBook, FaDotCircle } from "react-icons/fa";

export default function page() {
  return (
    <article className="resume">
      <SectionTitle>About Me</SectionTitle>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBook />
          </div>

          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          {data.education.map((item, index) => {
            const { desc, education, endDate, institution, startDate } = item;
            return (
              <li className="timeline-item" key={index}>
                <h4 className="h4 timeline-item-title">{education}</h4>
                <h5 className="timeline-title">{institution}</h5>

                <span>
                  {startDate} — {endDate}
                </span>

                <p className="timeline-text">{desc}</p>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBook />
          </div>

          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {data.experience.map((item, index) => {
            const { company, role, startDate, endDate, techStack, desc } = item;
            return (
              <li className="timeline-item" key={index}>
                <h4 className="h4 timeline-item-title">{company}</h4>
                <h5 className="timeline-title">{role}</h5>

                <span>
                  {startDate} — {endDate}
                </span>
                <ul className="tags-list">
                  {techStack.map((item, index) => {
                    return (
                      <li className="tags-item" key={index}>
                        #{item}
                      </li>
                    );
                  })}
                </ul>

                <ul className="list-desc">{
                  desc.map((item, index)=> {
                    return (
                      <li className="timeline-text" key={index}> <FaDotCircle/> {item}</li>
                    )
                  })
                }</ul>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <ul className="tags-list">
          {data.skills.map((item, index) => {
            return (
              <li className="tags-item" key={index}>
                #{item}
              </li>
            );
          })}
        </ul>
      </section>
    </article>
  );
}
