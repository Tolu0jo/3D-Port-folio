import {
    mobile,
    backend,
    creator,
    preclinic,
    web,
    blogapp,
    javascript,
    typescript,
    html,
    website,
    Decagon,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    techniche,
    express,
 
    carrent,
    jobit,
    tripguide,
    threejs,
    gamehub
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: creator,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
   

  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Express JS",
      icon: express,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
  
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
   
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Decagon",
      icon: Decagon,
      iconBg: "#383E56",
      date: "Jan 2023 - PRESENT",
      points: [
        "Conducting testing, debugging, and optimization of apps to improve performance and user experience.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing best practices and design patterns to deliver maintainable and extensible code..",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer-Intern",
      company_name: "TechNiche",
      icon: techniche,
      iconBg: "#E6DEDD",
      date: "May 2022 - Nov 2022",
      points: [
        "Developed and maintained web applications using React.js and other related technologies.",
        "Worked on a variety of projects involving backend development and  integration with frontend.",
        "Implemented responsive design and ensuring cross-browser compatibility.",
        "Participated in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Game Hub",
      description:
        "Web-based platform that allows users to keeps track of new video game releases, updates, and availability on different game platforms.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Chakra UI",
          color: "green-text-gradient",
        },
        {
          name: "rawg.io",
          color: "pink-text-gradient",
        },
      ],
      image: gamehub,
      source_code_link: "https://react-game-hub-lovat.vercel.app/",
    },
    {
      name: "Blog",
      description:
        "A blog app that provides a user-friendly interface that enables, to share their thoughts, opinions, experiences, and expertise on various topics with a broader audience.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: blogapp,
      source_code_link: "https://github.com/Tolu0jo/Blog-App.git",
    },
    {
      name: "Preclinic",
      description:
        "Patient management web application that enables doctors to tracking and managing patients' health statuses, and  accessing patient information efficiently.",
      tags: [
        {
          name: "mongodb",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: preclinic,
      source_code_link: "https://hospital-management-system-rim8.onrender.com/",
    },
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };