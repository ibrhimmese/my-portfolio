import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  doctorApp,
  erp,
  gamehub,
  backendgithub,
  weather,
  business,
  nuget
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: ".Net Developer",
    icon: creator,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "CI/CD-Devops",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Freelance",
    company_name: "Bionluk & Upwork | Home Office",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Aug 2022 - Now",
    points: [
      "Designed, developed, and delivered full-stack web, mobile, and desktop applications tailored to client needs, focusing on clean architecture, secure API integrations, and responsive user interfaces.",
      "Responsible for the entire development lifecycle, including requirementanalysis, UI/UX design, deployment, andpost-launch support.",
  
    ],
  },
  {
    title: "Intern Computer Engineer",
    company_name: "Mikrosel Bilisim | Kartal/ISTANBUL",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2023 - October 2023",
    points: [
      "Developed end-to-end web-based applications tailored to corporate needs, contributing actively to both front-end and back-end layers by applying layered architecture, clean code principles, and established design patterns.",
      "Implemented and integrated RESTful APIs, and performed database modeling and performance optimization to ensure the scalability, maintainability, and efficiency of the systems.",
 
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "True Bms | Maltepe/Istanbul",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "October 2023 - Now",
    points: [
      "Developed and maintained full-stack web applications tailored to project requirements, while also managing and automating CI/CD pipelines to streamline deployment processes.",
      "Built custom web-based solutions for shopping malls and business plazas by integrating various communication protocols, enabling seamless data exchange between systems.",
      "Developed a billing and energy monitoring platform for tenants and store owners in malls and plazas to track electricity consumption. The system includes remote electricity cut-off capabilities for unpaid accounts, managed by the administration.",
      "Leading a development team for a multi-tenant SaaS startup project, taking responsibility for team coordination, task management, and technical leadership throughout the project lifecycle.",
      "Managing and maintaining the company’s internal and external websites, ensuring stability, performance, and regular content updates as needed.",
      "Conducting infrastructure-related tasks and optimizations using virtualization technologies such as VMware and Proxmox, including setup, configuration, and monitoring for enhanced system performance.",
    ],
  },
  {
    title: "Technical Infrastructure Engineer and Project Manager - Contracted via True Bms",
    company_name: "Halkbank | Ataşehir/ISTANBUL",
    icon: shopify,
    iconBg: "#383E56",
    date: " 2024 June - Now",
    points: [
      "Leading the management of critical infrastructure systems, including communication infrastructure, KNX lines, and internet connectivity for the existing building.",
      "Taking a leadership role in all stages of infrastructure projects, from design to implementation, ensuring successful project execution.",
      "Guiding teams and ensuring smooth execution of projects such as system integrations and infrastructure updates.",
      "Providing leadership in project planning, resource management, and timeline creation to ensure projects are completed within the targeted time and budget.",
      "Analyzing the requirements of infrastructure projects and developing and implementing innovative and efficient technical solutions.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "He brought my startup project, which was supposed to be completed in 3 months, to life in just 2 months. He definitely deserves 5 stars.",
    name: "Mr. Aren",
    designation: "Customer",
    company: "Bionluk",
    image: "https://play-lh.googleusercontent.com/XDKGzDD_jjY_KrqZg3COTdV9oW5e4lZjgOPGP07aOIaNsCqNdvcmVrocc7XFr01PdR0P",
  },
  {
    testimonial:
      "He is my friend and business partner. We are running two startups together, and I always say, 'I'm glad you're my partner.' I am confident he will be successful..",
    name: "Oktay Parlak",
    designation: "Customer",
    company: "Bionluk",
    image: "https://play-lh.googleusercontent.com/XDKGzDD_jjY_KrqZg3COTdV9oW5e4lZjgOPGP07aOIaNsCqNdvcmVrocc7XFr01PdR0P",
  },
  {
    testimonial:
      "He has delivered four projects for me so far. He is always ready to help whenever there's an issue, and I'm extremely satisfied working with him. I highly recommend him to everyone; he definitely does his job with integrity.",
    name: "Mrs. Yeliz",
    designation: "Customer",
    company: "Bionluk",
    image: "https://play-lh.googleusercontent.com/XDKGzDD_jjY_KrqZg3COTdV9oW5e4lZjgOPGP07aOIaNsCqNdvcmVrocc7XFr01PdR0P",
  },
];

const projects = [

  {
    name: "ERP",
    description:
      "A comprehensive ERP software designed for factories to manage production, inventory, accounting, and warehouse operations.",
    tags: [
      {
        name: "dotnet-8",
        color: "blue-text-gradient",
      },
      {
        name: "mssql",
        color: "green-text-gradient",
      },
      {
        name: "angular",
        color: "pink-text-gradient",
      },
    ],
    image: erp,
    source_code_link: "https://github.com/ibrhimmese/ERP.Web.Application.Server",
  },
  
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "express.js",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ibrhimmese/Vehicles-App-Nodejs",
  },
  {
    name: "Currency Mobile App",
    description:
      "A mobile wallet app that integrates with the central bank API to buy, store, and sell foreign currencies across different exchange rates.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "expo",
        color: "pink-text-gradient",
      },
      {
        name: "postgre sql",
        color: "orange-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ibrhimmese/Currency-Mobile-App",
  },
  {
    name: "Maintenance Master",
    description:
      "A comprehensive maintenance management platform, available on both mobile and web, that handles maintenance processes, device failure information, reporting, building details, and bulk maintenance order evaluation.",
    tags: [
      {
        name: "dotnet-8",
        color: "blue-text-gradient",
      },
      {
        name: "postgre sql",
        color: "green-text-gradient",
      },
      {
        name: "azure",
        color: "pink-text-gradient",
      },
      {
        name: "redis",
        color: "orange-text-gradient",
      },
      {
        name: "cloudinary",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "react-native",
        color: "green-text-gradient",
      },
    ],
    image: business,
    source_code_link: "#",
  },
  {
    name: "E-Appointment",
    description:
      "A digital appointment system that manages online booking between doctors and patients in a fast and user-friendly way.",
    tags: [
      {
        name: "dotnet-8",
        color: "blue-text-gradient",
      },
      {
        name: "mssql",
        color: "green-text-gradient",
      },
      {
        name: "angular",
        color: "pink-text-gradient",
      },
    ],
    image: doctorApp,
    source_code_link: "https://github.com/ibrhimmese/eAppointmentServer",
  },
  {
    name: "PowerTrack",
    description:
      "An energy management system for malls and office plazas that monitors electricity usage, generates bills, and disables power for unpaid accounts.",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "modbus",
        color: "orange-text-gradient",
      }
    ],
    image: tripguide,
    source_code_link: "#",
  },
  {
    name: "Game-Hub",
    description:
      "A simple client-side game library app that lists game titles, platforms, and ratings.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chakra-ui",
        color: "green-text-gradient",
      }
    
    ],
    image: gamehub,
    source_code_link: "https://github.com/ibrhimmese/game-hub",
  },
  
  {
    name: "WeatherDo",
    description:
      "A productivity-focused to-do app that tracks daily tasks and displays real-time weather information.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "green-text-gradient",
      },
      {
        name: "async storage",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/ibrhimmese/Weather-Task-App-React-Native",
  },
  
 
  {
    name: "Backend Solutions",
    description:
      "A repository containing infrastructure and backend development work, including various technologies and architectures.",
    tags: [
      {
        name: "dotnet-8",
        color: "blue-text-gradient",
      },
      
    ],
    image: backendgithub,
    source_code_link: "https://github.com/ibrhimmese/Server",
  },
  {
    name: "Nuget Packages",
    description:
      "A collection of custom NuGet packages providing reusable solutions for .NET projects.",
    tags: [
      
    ],
    image: nuget,
    source_code_link: "https://www.nuget.org/packages?q=ibrhimmese",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
