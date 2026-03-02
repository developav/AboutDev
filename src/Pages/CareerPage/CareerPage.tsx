import { useState } from 'react';
import { motion } from "framer-motion";
import { formatEmploymentPeriod } from './dateUtils';
import "./CareerPage.scss";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const pageTransition = {
  duration: 0.3,
  ease: "easeInOut" as const,
};

interface Job {
  id: number;
  title: string;
  company: string;
  type: string;
  startDate: Date;
  endDate?: Date; // undefined означает "Present"
  location: string;
  description: string;
  responsibilities: string[];
  stack: string;
  links: Array<{ url: string; label: string }>;
}

const JOBS_DATA: Job[] = [
  {
    id: 1,
    title: "HTML Developer",
    company: "Moscow Exchange",
    type: "Full-time",
    startDate: new Date("2024-09-01"),
    endDate: undefined, // текущая работа - дата обновится автоматически!
    location: "Moscow · Hybrid",
    description: "Frontend development and maintenance of corporate websites. Implementation of responsive UI components using HTML, CSS (SCSS), and JavaScript.",
    responsibilities: [
      "Built responsive, accessible and pixel-perfect user interfaces",
      "Maintained and updated content based on business requirements",
      "Implemented and secured forms (validation, CAPTCHA, Honeypot)",
      "Ensured cross-device and cross-browser compatibility",
    ],
    stack: "HTML5, CSS3, JavaScript (Vanilla), Git, REST API",
    links: [
      { url: "https://www.moex.com", label: "Moscow Exchange" },
    ],
  },
  {
    id: 2,
    title: "HTML Developer",
    company: "NIIME",
    type: "Full-time",
    startDate: new Date("2022-09-01"),
    endDate: new Date("2024-09-01"),
    location: "Moscow · On-site",
    description: "Worked on development and support of corporate and educational websites (cok-niime.ru, prospectschool.ru).",
    responsibilities: [
      "Built responsive, accessible and pixel-perfect user interfaces",
      "Maintained and updated content based on business requirements",
      "Implemented and secured forms (validation, CAPTCHA, Honeypot)",
      "Ensured cross-device and cross-browser compatibility",
    ],
    stack: "HTML5, CSS3, JavaScript (Vanilla), Git, REST API",
    links: [
      { url: "https://prospectschool.ru", label: "Prospect School" },
      { url: "https://www.cok-niime.ru", label: "COK NIIME" },
    ],
  },
];

function JobCard({ job }: { job: Job }) {
  // Автоматически рассчитывает длительность с учётом текущей даты
  const employmentPeriod = formatEmploymentPeriod(job.startDate, job.endDate);
  
  return (
    <div className="about__block-page">
      <div className="about__descr">
        <h2 className="about__descr-head">{job.title}</h2>
        <p className="about__descr-text-forme">
          {job.company} · {job.type}
        </p>
        <p className="about__descr-text-forme">{employmentPeriod}</p>
        <p className="about__descr-text-forme">{job.location}</p>
        
        <p className="about__descr-text-forme">{job.description}</p>
        
        {job.responsibilities.map((item, index) => (
          <p key={index} className="about__descr-text-forme">
            • {item}
          </p>
        ))}
        
        <p className="about__descr-text-forme">
          <strong>Stack:</strong> {job.stack}
        </p>
        
        <div className="about__links">
          {job.links.map((link, index) => (
            <div key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="about__link"
              >
                {link.url}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CareerPage() {
  const [activeTab, setActiveTab] = useState(1);
  
  const activeJob = JOBS_DATA.find(job => job.id === activeTab);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      <section className='career'>
        <div className="container">
                <div className="about__project-list">
                  {JOBS_DATA.map(job => (
                    <button
                      key={job.id}
                      className={`about__project-button ${activeTab === job.id ? 'active' : ''}`}
                      onClick={() => setActiveTab(job.id)}
                      aria-selected={activeTab === job.id}
                    >
                      {job.company}
                    </button>
                  ))}
                </div>
                
                {activeJob && <JobCard job={activeJob} />}
          </div>
      </section>
      
    </motion.div>
  );
}
