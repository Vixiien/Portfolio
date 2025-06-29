// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.ico';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.ico';

// Project Section Logo's
import ccLogo from './assets/work_logo/cc.png';


export const SkillsInfo = [
  {
   title: 'Frontend',
    skills: [
      {
        name: 'HTML',
        logo: htmlLogo,
        description: 'The standard markup language used to create the structure and content of web pages.',
      },
      {
        name: 'CSS',
        logo: cssLogo,
        description: 'A style sheet language used for designing and visually presenting HTML elements.',
      },
      {
        name: 'JavaScript',
        logo: javascriptLogo,
        description: 'A programming language that enables interactive and dynamic behavior in web applications.',
      },
      {
        name: 'React JS',
        logo: reactjsLogo,
        description: 'A popular JavaScript library for building component-based user interfaces efficiently.',
      },
      {
        name: 'Next JS',
        logo: nextjsLogo,
        description: 'A React framework that enables server-side rendering and static site generation for fast web apps.',
      },
      {
        name: 'Tailwind CSS',
        logo: tailwindcssLogo,
        description: 'A utility-first CSS framework for rapidly building custom user interfaces with ease.',
      },
      {
        name: 'Bootstrap',
        logo: bootstrapLogo,
        description: 'A responsive front-end framework for designing mobile-first websites using prebuilt components.',
      },
    ],
  },
  {
    title: 'Backend',
    skills: [
      {
        name: 'Node JS',
        logo: nodejsLogo,
        description: 'A JavaScript runtime built on Chrome’s V8 engine, used to build scalable and fast backend services.',
      },
      {
        name: 'MySQL',
        logo: mysqlLogo,
        description: 'A reliable and widely-used relational database management system for storing and managing data.',
      },
    ],
  },
  {
    title: 'Languages',
    skills: [
      {
        name: 'JavaScript',
        logo: javascriptLogo,
        description: 'A dynamic scripting language used to build interactive elements and functionality on websites.',
      },
      {
        name: 'TypeScript',
        logo: typescriptLogo,
        description: 'A strongly typed superset of JavaScript that enhances code quality and maintainability.',
      },
    ],
  },
  {
    title: 'Tools',
    skills: [
      {
        name: 'Git',
        logo: gitLogo,
        description: 'A distributed version control system for tracking code changes and collaborating with others.',
      },
      {
        name: 'GitHub',
        logo: githubLogo,
        description: 'A web-based platform for hosting, managing, and collaborating on Git repositories.',
      },
      {
        name: 'Visual Code',
        logo: vscodeLogo,
        description: 'A powerful and lightweight code editor with built-in debugging, Git support, and extensions.',
      },
      {
        name: 'Vercel',
        logo: vercelLogo,
        description: 'A cloud platform for deploying front-end apps and static sites with CI/CD and global CDN.',
      },
      {
        name: 'Figma',
        logo: figmaLogo,
        description: 'A collaborative interface design tool used for creating UI/UX wireframes, prototypes, and mockups.',
      },
    ],

  },
];
  
  export const projects = [
    {
      id: 0,
      title: "CoCreate",
      description:
        "A powerful and user-friendly web-application designed to colaborate and share ideas with others.",
      image: ccLogo,
      tags: ["HTML", "React JS", "API", "NextJs", "Tailwind CSS", "Vercel", "Shadcn UI"],
    }
  ];  
