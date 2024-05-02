import {
  FaDesktop,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPaintBrush,
} from "react-icons/fa";

export const data = {
  name: "Ujjwal Bhattarai",
  profile: "/img/my-avatar.png",
  tagline: "Web developer",
  description1:
    "I fell in love with programming and I have at least learnt something, I think.. I am fluent in classics like Javascript and Java. I am Passionate about crafting, cutting-edge web technologies and products.",
  description2: "I thrive on transforming innovative ideas into tangible digital solutions. Constantly exploring the latest trends, I aim to push the boundaries of web development to create engaging and impactful user experiences. Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like React.js and Next.js ",
    email: "ujjwalbh001@gmail.com",
  phone: "+91-8105822779",
  birthdate: "2001/09/07",
  location: "Bangalore, India",
  map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.224542353479!2d77.71380920991693!3d12.957478715136459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1306cd2cd527%3A0x822d084f0e13ba42!2sBNR%20Luxury%20HOMES%20(co-living)!5e0!3m2!1sen!2sin!4v1714492683842!5m2!1sen!2sin",
  socialMedia: [
    {
      Icon: FaLinkedin,
      url: "https://www.linkedin.com/in/ujjwal2021",
    },
    {
      Icon: FaInstagram,
      url: "https://www.instagram.com/__ujjwal_bh__/",
    },
    {
      Icon: FaGithub,
      url: "https://www.github.com/ujjwal-bh",
    },
  ],
  services: [
    {
      Icon: FaDesktop,
      title: "Web Development",
      description:
        "Developing high quality web applications both frontend and backend",
    },
    {
      Icon: FaPaintBrush,
      title: "UI/UX Design",
      description: "Design a best looking websites and mobile application",
    },
  ],
  education: [
    {
      institution: "Jain (deemed-to-be) University",
      education: "B-Tech, Computer Science and Engineering",
      startDate: "2020",
      endDate: "2024",
      desc: "Overall CGPA 9.0",
    },
    {
      institution: "Kathmandu Model Higher Secondary School",
      education: "High School",
      startDate: "2018",
      endDate: "2020",
      desc: "Overall GPA 3.75",
    },
  ],
  experience: [
    {
      company: "BNP Paribas Bank",
      role: "SWE Intern",
      startDate: "Jan, 2024",
      endDate: "July, 2024",
      techStack: ["SQL", "Jira", "Confluence", "PowerBI"],
      desc: [
        "Used SQL to query and analyze datasets for business reporting and visualization.",
        "Managed projects and its documentation with Jira and Confluence.",
        "Created interactive dashboards in PowerBI for data visualization.",
        "Improved data workflows by optimizing SQL queries.",
      ],
    },
    {
      company: "IDeploy Solutions",
      role: "Project Intern",
      startDate: "Feb, 2024",
      endDate: "Aug, 2024",
      techStack: ["HTML", "CSS", "JS", "ReactJS", "NodeJS", "Figma"],
      desc: [
        "Worked with mentors and fellow interns to build a dashboard to manage travel bookings for travel companies.",
        "Learned and worked hands-on with different programming languages and frameworks.",
        "Developed frontend of the application, API Integration and also UI design.",
      ],
    },
  ],
  skills: [
    "HTML",
    "CSS",
    "Javascript",
    "Java",
    "ReactJS",
    "NextJS",
    "NodeJS",
    "NestJS",
    "Mongodb",
    "SQL",
    "Figma",
  ],
  projects: [
    {
      id: 1,
      name: "Clipz - Game highlight clips sharing platform",
      shortName: "Clipz",
      img:"/img/clipz.png",
      
      tagline: "Web Development",
      description:
        "Implemented a full stack web app to allow users to share their gaming highlight clips using Angular as a frontend framework and Firebase as a backend. Used webassembly and ffmpeg package to make video upload feature more effective. Used tailwind css for UI styling.",
      stack: ["Tailwindcss", "Angular", "Firebase", "webassembly", "ffmpeg"],
      liveLink:
        "https://clips-angular-sand-two.vercel.app/",
      githubLink: "https://github.com/ujjwal-bh/clips-fullstack",
    },
   
    {
      id: 2,
      name: "SNeonConstructions- Website for a Construction company",
      shortName: "SNeonConstructions",
      img:"/img/sneonconstruction.png",
      tagline: "Web Development",
      description:
        "Built a website for a construction company to showcase themselves and their features using javascript  (Vanilla JS and Nodejs) as per their requirement and deployed it.",
      stack: [
        "Javascript",
        "ReactJs",
        "NodeJS",
        "ExpressJS",
        "mongodb",
        "websocket",
      ],
      liveLink: "https://sneonconstruction.com/",
      githubLink: "",
    },
    {
      id: 3,
      shortName: "Pickup",
      name: "Pickup - Ride booking application",
      img: "/img/pickup.png",
      tagline: "Design",
      description:
        "built a user friendly and excellent looking UI/UX for a ride booking application using figma.",
      stack: [
        "Figma",
        "UI/UX"
      ],
      liveLink: "https://www.figma.com/proto/v4f3Wk9aW3EOg0Ub9aUsOr/book-it?node-id=5-697&starting-point-node-id=5%3A697",
      githubLink: "",
    },
    {
      id:4,
      name: "RMS - Internal Restaurant Management System",
      shortName: "RMS",
      img: "/img/rms.png",
      tagline: "Web Development",
      description:
        "Built a complete restaurant management system including all the required facilities like order taking for waiters, billing, Employee management. Worked on both frontend and backend of the project.",
      stack: [
        "Javascript",
        "ReactJs",
        "NodeJS",
        "ExpressJS",
        "mongodb",
        "websocket",
      ],
      liveLink: "https://restaurant.the-binaries.xyz/login",
      githubLink: "",
    },
  ],
};
