"use client";
import SectionTitle from "@/components/SectionTitle";
import { data } from "@/utils/data";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";

export default function SingleProject() {
  const { id } = useParams();
  const router = useRouter();
  let item = data.projects.result.filter((item) => item.id == Number(id));
  return (
    <article className="project">
      <SectionTitle>Projects</SectionTitle>

      <div className="back-icon" onClick={() => router.back()}>
        <FaChevronLeft /> back
      </div>

      {item.length > 0 && (
        <section className="projects">
          <div className="project-item active">
            <figure className="project-img project-img-full">
              <Image
                src={item[0].img}
                alt={item[0].name}
                loading="lazy"
                width={2000}
                height={2000}
              />
            </figure>

            <h2 className="project-title">{item[0].name}</h2>

            <p className="project-category">{item[0].tagline}</p>

            <p className="project-description">{item[0].description}</p>
            <ul className="tags-list">
              {item[0].stack.map((item, index) => {
                return (
                  <li className="tags-item" key={index}>
                    #{item}
                  </li>
                );
              })}
            </ul>

            <div className="project-link-container">
              {item[0].githubLink && (
                <a href={item[0].githubLink} className="project-link">
                  <button>Github</button>
                </a>
              )}
              {item[0].liveLink && (
                <a
                  href={item[0].liveLink}
                  target="_blank"
                  className="project-link"
                >
                  <button>Live link</button>
                </a>
              )}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
