import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Vaughn Benedict",
  lastName: "Torreno",
  name: "Vaughn Benedict Torreno",
  role: "Full-stack Web Developer",
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
        tags: [
          { name: "JavaScript"},
          { name: "TypeScript"},
          { name: "PHP"},
          { name: "Python"},
          { name: "C#"},
        ],
        images: [],
      },
      {
        title: "Frameworks",
        tags: [
          { name: "REACT"},
          { name: "Next.js"},
          { name: "Express"},
          { name: "MERN"},
          { name: "ASP.NET"},
        ],
        images: [],
      },      
      {
        title: "Databases",
        tags: [
          { name: "MongoDB"},
          { name: "MySQL"},
          { name: "PostgreSQL"},
          { name: "SupaBase"},
          { name: "SQLite"},
        ],
        images: [],
      },
      {
        title: "Tools",
        tags: [
          { name: "Visual Studio"},
          { name: "GitHub"},
          { name: "Figma"},
          { name: "Canva"},
          { name: "Photoshop"},
          { name: "Illustrator"},
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
        Hello! I’m a full-stack developer and designer who prioritizes user experience in everything I build. 
        I enjoy creating intuitive and seamless web applications that are not only functional and reliable, but also simple and enjoyable to use.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Analog Devices",
        timeframe: "March - June 2026",
        role: "Intern",
        achievements: [
          <>Developed and deployed a full-stack internal Project Tracker system enabling engineering teams
          to efficiently manage project lifecycles, requests, and workflows.</>,
          <>Gathered requirements directly from engineers and translated feedback into system
          enhancements..</>,
          <>Refined an existing ticketing system by implementing enhancements and refinements based on
          feedback.</>
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
          <>2022 - 2026 · Bachelor of Science in Information Technology<br />Dean’s Lister | GPA 3.60 / 4.00
          <br /><br />Junior High School with Honors | Senior High School (STEM) with High Honors</>
        ),
      }
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
