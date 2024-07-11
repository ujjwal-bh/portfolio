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
  description: [
    "I am dedicated to translating innovative concepts into sophisticated digital solutions. Fluent in foundational languages like Java, Javascript and Typescript, I continually explore and integrate cutting-edge web technologies and frameworks. My expertise spans across Node.js for backend development and modern JavaScript libraries such as React.js and Next.js for frontend solutions.",
    "I love crafting compelling user experiences that resonate with audiences and drive engagement. By leveraging my skills in Figma for design and Tailwind CSS for responsive styling, I ensure intuitive and visually captivating interfaces. I am committed to staying ahead of industry trends and best practices, enabling me to deliver impactful products that meet diverse client needs.",
  ],

  email: "bhattaraiujjwal26@gmail.com",
  phone: "+977-9863452920",
  birthdate: "2001/09/07",
  location: "Kathmandu, Nepal",
  map: "",
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
      title: "Frontend Development",
      description:
        "developing high-quality frontend ensuring dynamic, responsive, and visually appealing interfaces.",
    },
    {
      Icon: FaDesktop,
      title: "Backend Development",
      description:
        "developing high-quality backend applications ensuring robust, scalable, and efficient solutions including API development, security, etc.",
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
      endDate: "Jun, 2024",
      techStack: [
        "Angular",
        "Spring Boot",
        "jQuery",
        "Javascript",
        "Jira",
        "PowerBI",
        "SQL",
      ],
      desc: [
        "Developed highly functional backend and frontend for client applications based on requirements.",
        " Collaborated with team members on agile projects, achieving a sprint completion rate of 100%.",
        "Enhanced user interface responsiveness, resulting in a 20% improvement in user satisfaction scores.",
      ],
    },
    {
      company: "IDeploy Solutions",
      role: "Project Intern",
      startDate: "Feb, 2024",
      endDate: "Aug, 2024",
      techStack: ["React", "Mongodb", "Node.js", "Express.js", "Figma"],
      desc: [
        "Designed and developed multiple modules of a travel booking management dashboard automating booking processing  and travel vehicle scheduling.",
        "Created and implemented robust authentication, services and api endpoints.",
        "Developed backend modules, frontend of the application, API Integration and also UI design.",
      ],
    },
  ],
  skills: [
    "Javascript",
    "Typescript",
    "Java",
    "React",
    "Angular",
    "Next.js",
    "Node.js",
    "Express.js",
    "NestJS",
    "Mongodb",
    "SQL",
    "Figma",
    "Jira",
    "Git",
    "Github",
  ],
  projects: [
    {
      id: 0,
      name: "LMS - Redifining Learning",
      shortName: "LMS",
      img: "/img/lms.png",
      tagline: "Fullstack-Next.js",
      description:
        " Implemented a fully authenticated full stack learning management application to allow users to buy and watch courses, track their progress, allows permitted users to create and sell courses.",
      stack: [
        "Next.js",
        "Tailwindcss",
        "Clerk",
        "uploadthing",
        "MySQL",
        "Axios",
        "RPC",
        "Uploadthing",
      ],
      liveLink: "https://lms-steel-ten.vercel.app/",
      githubLink: "https://github.com/ujjwal-bh/lms",
    },
    {
      id: 1,
      name: "phonecase.com - Your Image on a Custom Phone Case",
      shortName: "phonecase.com",
      img: "/img/phonecase-2.png",

      tagline: "Fullstack-Next.js",
      description:
        " Implemented a fully authenticated full stack ecommerce web app to allow users to order a customized phone cases for their iphones based on the image they provide using Next.js including the admin dashboard to view and update orders. It uses postgresql for storing data, Resend as a email provider, uploadthing to store images on cloud and tailwind css for UI styling.",
      stack: [
        "Next.js",
        "Tailwindcss",
        "Kinde",
        "uploadthing",
        "postgresql",
        "tanstack-react-query",
        "RPC",
        "Server actions",
      ],
      liveLink: "https://phonecase-com-crbw.vercel.app/",
      githubLink: "https://github.com/ujjwal-bh/phonecase.com",
    },

    {
      id: 2,
      name: "Clipz - Game highlight clips sharing platform",
      shortName: "Clipz",
      img: "/img/clipz.png",

      tagline: "Fullstack-Angular-Firebase",
      description:
        " Implemented a fully authenticated full stack web app to allow users to share their gaming highlight clips using Angular as a frontend framework and Firebase as a backend, used webassembly and ffmpeg package to make video upload feature more effective and  tailwind css for UI styling.",
      stack: ["Tailwindcss", "Angular", "Firebase", "webassembly", "ffmpeg"],
      liveLink: "https://clips-angular-sand-two.vercel.app/",
      githubLink: "https://github.com/ujjwal-bh/clips-fullstack",
    },

    {
      id: 3,
      name: "SNeonConstructions- Website for a Construction company",
      shortName: "SNeonConstructions",
      img: "/img/sneonconstruction.png",
      tagline: "Fullstack-Vanilla-Express.js",
      description:
        "Built a website for a construction company to showcase themselves and their features using javascript  (Vanilla JS and Nodejs) as per their requirement and deployed it.",
      stack: ["Javascript", "Node.js", "Express.js", "HTML", "CSS"],
      liveLink: "https://sneonconstruction.com/",
      githubLink: "",
    },
    {
      id: 4,
      shortName: "Pickup",
      name: "Pickup - Ride booking application",
      img: "/img/pickup.png",
      tagline: "Design-Figma",
      description:
        "built a user friendly and excellent looking UI/UX for a ride booking application using figma.",
      stack: ["Figma", "UI/UX"],
      liveLink:
        "https://www.figma.com/proto/v4f3Wk9aW3EOg0Ub9aUsOr/book-it?node-id=5-697&starting-point-node-id=5%3A697",
      githubLink: "",
    },
    {
      id: 5,
      name: "RMS - Internal Restaurant Management System",
      shortName: "RMS",
      img: "/img/rms.png",
      tagline: "Fullstack-MERN",
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
      liveLink: "https://restaurant.the-binaries.xyz",
      githubLink: "",
    },
    {
      id: 6,
      name: "Amazon Product Scrapper",
      shortName: "Amazon Scrapper",
      img: "/img/scrapper.png",
      tagline: "Fullstack-React-NestJS",
      description:
        "Developed a full-stack application to scrape and display product information from e-commerce websites. The frontend uses React with TypeScript and CSS, along with RTK Query for data fetching and caching. The backend is built with NestJS, Prisma ORM, MySQL, and Puppeteer for web scraping. Users can input a product URL, view product details, and search or filter through the data. Outdated data is automatically refreshed asynchronously. This project highlights my skills in both front-end and back-end development, demonstrating technical proficiency and problem-solving abilities.",
      stack: [
        "HTML",
        "CSS",
        "Typescript",
        "React",
        "Node.js",
        "NestJS",
        "Prisma",
        "Mysql",
        "Puppeteer",
      ],
      // liveLink: "https://www.ujjwal-bhattarai.com.np",
      githubLink: "https://github.com/ujjwal-bh/amazon-product-scrapper",
    },
    {
      id: 7,
      name: "Real-time document editing and sharing platform",
      shortName: "Synchrodocs",
      img: "/img/document.png",
      tagline: "Fullstack-MERN",
      description:
        "fullstack application for a collaborative online document editor. The frontend is built with React and uses Quill for rich text editing. backend is built on NestJS. Its features include Real-time collaborative editing, Rich text formatting with Quill, User authentication and authorization, Document sharing",
      stack: ["HTML", "CSS", "Javascript", "React", "Node.js", "NestJS"],
      githubLink: "https://github.com/ujjwal-bh/synchrodocs-ui",
    },
    {
      id: 8,
      name: "Personal Portfolio site ",
      shortName: "Portfolio",
      img: "/img/portfolio.png",
      tagline: "Fullstack-Next.js",
      description:
        "Developed a responsive and interactive portfolio website using Next.js to showcase my skills, projects, experience, and contact information. The site features a skills showcase, detailed project descriptions with visuals, a chronologically organized experience timeline, and an integrated contact form for direct communication. This portfolio provides a professional and comprehensive online presence, enhancing visibility and networking opportunities.",
      stack: ["HTML", "CSS", "Javascript", "React", "Next.js"],
      liveLink: "https://www.ujjwal-bhattarai.com.np",
      githubLink: "https://github.com/ujjwal-bh/portfolio",
    },
  ],
};
