"use client"
import SectionTitle from "@/components/SectionTitle";
import { data } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState(data.projects.result|| [])
  const [activeActegory, setActiveCategory] = useState("all");

  const filterBasedOnCategory = useCallback(() => {
    const filtered = data.projects.result.filter((project) => project.category.includes(activeActegory) || activeActegory ==="all")
    return filtered;
  },[activeActegory])


  useEffect(()=> {
    setProjects(filterBasedOnCategory())
  },[activeActegory, filterBasedOnCategory])

  return (
    <article className="project">
      <SectionTitle>Projects</SectionTitle>

      <section className="projects">
        <div className="projects-category">
          {
            data.projects.category.map((item)=> (
              <div key={item} onClick={()=> setActiveCategory(item)} className={item === activeActegory ? "category-item active-category" : "category-item"}>{item}</div>
            ))
          }

        </div>
        <ul className="project-list">
          {projects.map((item, index) => {
            const {
              img,
              shortName,
              tagline,
              id
            } = item;
            console.log(item, "item")
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
