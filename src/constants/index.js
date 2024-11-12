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
    fiverr,
    shopify,
    threejs,
    kavithi,
    ceee,
    vedha,
    blender,
    java,
    python,
    angular,
    scienceclass,
    busport,
    vedha8,
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
      title: "Custom Web Development",
      icon: web,
    },
    {
      title: "Full-Stack Development & API Integration",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Project Customization & Post-Launch Support",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "python",
      icon: python,
    },
    {
      name: "java",
      icon: java,
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
      name: "angular",
      icon: angular,
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
      icon: blender,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Kavithi Group ",
      icon: kavithi,
      iconBg: "#ffffff",
      date: "March 2023 - November 2023",
      points: [
        "Developed and maintained web applications using Angular and Python, ensuring robust and scalable solutions.",
        "Collaborated with cross-functional teams to design and deliver feature-rich applications, enhancing user experience and functionality.",
        "Utilized Python Flask API to build efficient backend systems and support seamless data handling and API integration.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Fiverr",
      icon: fiverr,
      iconBg: "#1dbf73",
      date: "April 2023 - Present",
      points: [
        "Developed and designed custom websites for clients across various industries, ensuring unique and user-centered solutions.",
        "Communicated effectively with clients to understand their vision and requirements, delivering projects that align with their business goals.",
        "Implemented responsive design principles and optimized for mobile and cross-browser compatibility to enhance user experience.",
        "Maintained high standards for customer satisfaction, providing post-delivery support and revisions to ensure client needs were fully met.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "CEEE Technologies",
      icon: ceee,
      iconBg: "#ffffff",
      date: "Dec 2023 - Present",
      points: [
        "Developed and deployed full-stack applications using the MERN stack, ensuring high performance and scalability.",
        "Led project teams, coordinating tasks and timelines to ensure efficient project delivery and client satisfaction.",
        "Managed projects from planning through deployment, handling resource allocation, and addressing challenges to keep projects on track.",
        "Oversaw deployment processes, optimizing for reliability and security across production environments.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Vedha8",
      icon: vedha,
      iconBg: "#ffffff",
      date: "April 2023 - Present",
      points: [
        "Conceptualized, developed, and launched the entire Vedha8 platform, a marketplace for web systems that allows developers to upload projects and clients to purchase and customize them.",
        "Built user-friendly interfaces and a robust backend to support seamless project uploads, purchases, and customizations.",
        "Integrated a secure payment system and optimized the platform for high performance and scalability.",
        "Handled all aspects of project management, including planning, development, testing, and deployment, ensuring a smooth user experience.",
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
      name: "Vedha8",
      description:
        "A dynamic web system marketplace where developers upload projects, and clients purchase or customize solutions for their unique needs.",
      tags: [
        {
          name: "MERN",
          color: "#FAFFAF",
        },
        {
          name: "mongodb",
          color: "#2ecc71",
        },
        {
          name: "Mui",
          color: "#3498db",
        },
      ],
      image: vedha8,
      source_code_link: "https://vedhaeight.web.app/",
    },
    {
      name: "Bus Port",
      description:
        "An Uber-like platform for booking buses, offering convenient options for both long and short trips.",
      tags: [
        {
          name: "react",
          color: "#3498db",
        },
        {
          name: "restapi",
          color: "#41B06E",
        },
        {
          name: "scss",
          color: "#EB3678",
        },
      ],
      image: busport,
      source_code_link: "https://thevinu-vedha8-busport-001.web.app/presentation",
    },
    {
      name: "Science with Asela",
      description:
        "An AI-powered learning platform for science students, featuring interactive MCQ tests and class resources for grades 6 to 11.",
      tags: [
        {
          name: "MERN",
          color: "#FAFFAF",
        },
        {
          name: "OpenAI's API",
          color: "#f1f1f1",
        },
        {
          name: "Three.js",
          color: "#E2F4C5",
        },
      ],
      image: scienceclass,
      source_code_link: "http://sciencewithasela.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  