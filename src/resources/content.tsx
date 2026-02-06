import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Vaughn Benedict",
  lastName: "Torreno",
  name: "Vaughn Benedict Torreno",
  role: "Junior Web Developer",
  avatar: "/images/avatar.jpg",
  email: "vaughntorreno@gmail.com",
  location: "Asia/Manila", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Tagalog"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Occasional notes on building full-stack projects and honing craft</>,
};

const contact = {
  display: true,
  title: <>Get in Touch</>,
  description: <>Let's build something great together. Feel free to reach out!</>,
  email: person.email,
  location: person.location,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/s9iko",
    essential: true,
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/vghntrrno/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/vghntrrno/?theme=dark",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `s9iko's Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headlineGreeting: "Hello! I'm",
  headlineName: "Vaughn",
  featured: {
    display: true,
    title: <>Check out my projects</>,
    href: "/work",
  },
  subline: (
    <>Student developer focused on learning and building real-world projects.</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  technical: {
    display: true,
    title: "Skills Summary",
    skills: [
      {
        title: "Programming Languages",
        description: <>C#, JavaScript, HTML, CSS, PHP, Python</>,
        tags: [
          { name: "C#", icon: "dotnet" },
          { name: "JavaScript", icon: "javascript" },
          { name: "HTML", icon: "html" },
          { name: "CSS", icon: "css" },
          { name: "PHP", icon: "php" },
          { name: "Python", icon: "python" },
        ],
        images: [],
      },
      {
        title: "Frameworks",
        description: <>MERN Stack (MongoDB, Express, React, Node), ASP.NET, Flutter</>,
        tags: [
          { name: "MongoDB", icon: "mongodb" },
          { name: "Express", icon: "code" },
          { name: "React", icon: "react" },
          { name: "Node.js", icon: "nodejs" },
          { name: "ASP.NET", icon: "code" },
          { name: "Flutter", icon: "flutter" },
        ],
        images: [],
      },
      {
        title: "Tools",
        description: <>Visual Studio, Android Studio, GitHub, Figma, Canva, Adobe Photoshop & Illustrator</>,
        tags: [
          { name: "Visual Studio", icon: "code" },
          { name: "Android Studio", icon: "code" },
          { name: "GitHub", icon: "github" },
          { name: "Figma", icon: "figma" },
          { name: "Canva", icon: "sparkles" },
          { name: "Photoshop", icon: "photoshop" },
          { name: "Illustrator", icon: "illustrator" },
        ],
        images: [],
      },
      {
        title: "Databases",
        description: <>MongoDB, MySQL</>,
        tags: [
          { name: "MongoDB", icon: "mongodb" },
          { name: "MySQL", icon: "mysql" },
        ],
        images: [],
      },
    ],
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Motivated Junior Full-Stack Developer with MERN stack experience. 
        Strong programming foundation and an eye for UI design, eager to contribute and grow within a collaborative development team.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Web Developer",
        timeframe: "Ongoing",
        role: "Web Developer",
        achievements: [
          <>Delivered web projects focusing on performance, accessibility, and responsiveness.</>,
          <>Collaborated with team members to enhance development processes and workflow efficiency.</>,
        ],
        images: [],
      },
      {
        company: "UI/UX & Graphic Design",
        timeframe: "Ongoing",
        role: "Designer",
        achievements: [
          <>Designed UI screens and digital graphics using Figma, Canva, Illustrator, and Photoshop.</>,
          <>Created wireframes and high-fidelity prototypes to validate user flows.</>,
        ],
        images: [],
      },

      {
        company: "Hardware & Software Troubleshooting",
        timeframe: "Ongoing",
        role: "IT Support",
        achievements: [
          <>Resolved hardware and software issues for desktops, laptops, and dev environments.</>,
          <>Performed OS, driver, and basic network fixes.</>,
        ],
        images: [],
      },

      {
        company: "Video Editor",
        timeframe: "Ongoing",
        role: "Video Editor",
        achievements: [
          <>Edited short and long form videos using Vegas Pro and CapCut.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "De La Salle University – Dasmariñas Campus",
        description: (
          <>2022–Present · Bachelor of Science in Information Technology<br />Dean’s Lister | GPA 3.60 / 4.00</>
        ),
      },
      {
        name: "Junior High School with Honors | Senior High School (STEM) with High Honors",
        description: <>2016–2022</>,
      },
    ],
  },
  softSkills: {
    display: true,
    title: "Soft skills",
    skills: [
      "Teamwork",
      "Effective Communication",
      "Critical Thinking",
      "Problem-Solving",
      "Adaptability",
      "Time Management",
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: "Vaughn's Projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, contact };
