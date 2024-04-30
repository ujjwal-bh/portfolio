import SectionTitle from "@/components/SectionTitle";
import { data } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Projects() {
  return (
    <article className="project" data-page="project">
      <SectionTitle>Projects</SectionTitle>

      <section className="projects">
        <ul className="project-list">
          {data.projects.map((item, index) => {
            const {
              description,
              githubLink,
              liveLink,
              img,
              shortName,
              stack,
              tagline,
              id
            } = item;
            return (
              <li
                className="project-item  active"
                key={index}
              >
                <Link href={`/projects/${id}`}>
                  <figure className="project-img">
                    <Image
                      src={img || ""}
                      alt="finance"
                      loading="lazy"
                      width={500}
                      height={500}
                    />
                  </figure>

                  <h3 className="project-title">{shortName}</h3>

                  <p className="project-category">{tagline}</p>
                </Link>
              </li>
            );
          })}

        </ul>
      </section>
    </article>
  );
}
