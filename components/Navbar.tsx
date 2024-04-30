"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function Navbar() {
  const path = usePathname();

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link href="/">
            <button className={`navbar-link  ${path === "/" ? "active" : ""}`}>
              About
            </button>
          </Link>
        </li>

        <li className="navbar-item">
          <Link href="/resume">
            <button
              className={`navbar-link  ${
                path.includes("/resume") ? "active" : ""
              }`}
            >
              Resume
            </button>
          </Link>
        </li>

        <li className="navbar-item">
          <Link href="/projects">
            <button
              className={`navbar-link  ${
                path.includes("/projects") ? "active" : ""
              }`}
            >
              Projects
            </button>
          </Link>
        </li>

        <li className="navbar-item">
          <Link href="/contact">
            <button
              className={`navbar-link  ${
                path.includes("/contact") ? "active" : ""
              }`}
            >
              Contact
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
