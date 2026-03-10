export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  category: 'react' | 'javascript' | 'professional';
  image: string;
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'platformM',
    description: 'Content Management Platform',
    fullDescription: 'Modern platform for managing web content and UI components with focus on developer experience. Features include routing, Redux Toolkit state management, responsive design, and API integration with automated GitHub Pages deployment.',
    technologies: ['React', 'Redux Toolkit', 'TypeScript', 'CSS/SCSS', 'Vite', 'REST API'],
    category: 'react',
    image: './marusya.png', // You'll need to add this image
    githubUrl: 'https://github.com/developav/platformM',
    liveUrl: 'https://developav.github.io/platformM',
    highlights: [
      'Routing and navigation system',
      'Redux Toolkit for state management',
      'Responsive component design',
      'API integration',
      'Automated GitHub Pages deployment'
    ]
  },
   {
    id: 7,
    title: 'AboutDev Personal Portfolio — Dmitrii Pavlov Frontend Developer',
    description: 'Personal Portfolio Website',
    fullDescription: 'A personal portfolio website built to showcase frontend development skills and projects. Clean, modern design with smooth navigation and a developer-focused presentation of work experience, skills, and featured projects.',
    technologies: ['React','TypeScript', 'CSS/SCSS', 'Vite', 'CI/CD'],
    category: 'react',
    image: './portfolio.png', // You'll need to add this image
    githubUrl: 'https://github.com/developav/AboutDev',
    liveUrl: 'https://developav.github.io/AboutDev/#/',
    highlights: [
      'Responsive layout optimized for all screen sizes',
      'Project showcase with live demos and source links',
      'Deployed via automated GitHub Pages pipeline'
    ]
  },
  {
  id: 8,
  title: 'ShopCalendar — Smart Shopping List & Meal Planner',
  description: 'Full-stack shopping planner with calendar, recipes, and iOS app',
  fullDescription: 'ShopCalendar is a full-stack web and iOS application for planning grocery shopping. Users can schedule purchases by date on an interactive calendar, manage an unscheduled shopping list, add recipe ingredients directly to any date, and archive completed lists. Built with React, Redux Toolkit, and a Node.js REST API backed by PostgreSQL, deployed on a VDS with Nginx, PM2, and SSL.',
  technologies: ['React', 'TypeScript', 'Redux Toolkit', 'CSS Modules', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Nginx', 'CI/CD'],
  category: 'react',
  image: './shopcalendar.png',
  githubUrl: 'https://github.com/developav/shopcalendar-web',
  liveUrl: 'https://jokerfrontdev.ru',
  highlights: [
    'Interactive calendar with per-date shopping lists and archive',
    'Recipe catalog with one-tap ingredient import to any date',
    'Full-stack deployment: Nginx + PM2 + SSL on VDS',
    'Companion iOS app built with React Native',
    'Automated CI/CD via GitHub Actions for both web and API'
  ]
},
  {
    id: 2,
    title: 'W-Wave',
    description: 'Online Radio Web Application',
    fullDescription: 'Interactive web application for online radio with engaging animations and fully responsive layout. Demonstrates proficiency in vanilla JavaScript and modern CSS techniques with focus on user experience.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'BEM', 'GSAP'],
    category: 'javascript',
    image: './wawe.png',
    githubUrl: 'https://developav.github.io/wawe',
    liveUrl: 'https://developav.github.io/wawe',
    highlights: [
      'Engaging visual animations',
      'Fully responsive layout',
      'BEM methodology',
      'Clean vanilla JavaScript',
      'Modern CSS techniques'
    ]
  },
  {
    id: 3,
    title: 'Articul',
    description: 'Animation Showcase',
    fullDescription: 'Demonstrates advanced animation capabilities using GSAP with scroll-triggered effects and smooth transitions. Built with performance and responsive design in mind, showcasing modern web animation techniques.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    category: 'javascript',
    image: './articul.png',
    githubUrl: 'https://github.com/developav/articul',
    liveUrl: 'https://developav.github.io/articul',
    highlights: [
      'GSAP scroll animations',
      'Smooth transitions',
      'Performance optimized',
      'Responsive design',
      'Modern animation techniques'
    ]
  },
  {
    id: 4,
    title: 'Clients List',
    description: 'Client Management Interface',
    fullDescription: 'Professional UI interface for displaying and managing client lists with advanced filtering, sorting, and dynamic data loading capabilities. Demonstrates clean code architecture and user-centric design.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    category: 'javascript',
    image: './client.png',
    githubUrl: 'https://github.com/developav/Clients-List',
    liveUrl: 'https://developav.github.io/Clients-List',
    highlights: [
      'Advanced filtering system',
      'Sorting functionality',
      'Dynamic data loading',
      'Clean code architecture',
      'User-centric design'
    ]
  }
];

// Professional/Commercial projects (optional - can be shown separately)
export const professionalProjects: Project[] = [
  {
    id: 5,
    title: 'ProspectSchool',
    description: 'Language School Website',
    fullDescription: 'Commercial one-page website for a language school. Built from concept to production with focus on conversion optimization and user engagement.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    category: 'professional',
    image: './prosp.png',
    githubUrl: '', // Private/commercial project
    liveUrl: 'https://prospectschool.ru',
    highlights: [
      'Full production deployment',
      'Conversion optimized',
      'Responsive design',
      'Professional client work'
    ]
  },
   {
    id: 6,
    title: 'Qualification Assessment Center',
    description: 'Qualification Assessment Center Website',
    fullDescription: 'Commercial one-page website for a Qualification Assessment Center. Built from concept to production with focus on conversion optimization and user engagement.',
    technologies: ['HTML5', 'CSS3', 'JavaScript','PHP'],
    category: 'professional',
    image: './cok.png',
    githubUrl: '', // Private/commercial project
    liveUrl: 'https://www.cok-niime.ru/',
    highlights: [
      'Full production deployment',
      'Conversion optimized',
      'Responsive design',
      'Professional client work'
    ]
  }
];

// Filter functions
export const getProjectsByCategory = (category: Project['category']) => {
  return projects.filter(project => project.category === category);
};

export const getAllProjects = () => {
  return [...projects, ...professionalProjects];
};
