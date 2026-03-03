import { useState } from 'react';
import { motion } from "framer-motion";
import { projects, professionalProjects, type Project } from '../../data/projects';
import "./AboutMe.scss";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const pageTransition = {
  duration: 0.3,
  ease: "easeInOut",
}as const;

type TabType = 'all' | 'react' | 'javascript' | 'professional';

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const getFilteredProjects = (): Project[] => {
    if (activeTab === 'all') {
      return [...projects, ...professionalProjects];
    }
    if (activeTab === 'professional') {
      return professionalProjects;
    }
    return projects.filter(p => p.category === activeTab);
  };

  const filteredProjects = getFilteredProjects();

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      <section className="about">
        <div className="container">
          {/* About Section */}
          <div className="about__block">
            <div className="about__image-wrapper">
              <img 
                className="about__block-image" 
                src="../../../public/pav2.webp" 
                alt="Dmitrii Pavlov - Frontend Developer"
                aria-label='Photo Dmitrii Pavlov - Frontend Developer'
              />
            </div>
            
            <div className="about__descr">
              <p className="about__descr-label">About Me</p>
              <h1 className="about__descr-head">Dmitrii Pavlov</h1>
              <h2 className="about__descr-subhead">Frontend Developer</h2>
              
              <div className="about__descr-content">
                <p className="about__descr-text">
                  Frontend developer with 3+ years of experience building responsive, 
                  user-focused web applications. Currently contributing to financial sector 
                  projects at Moscow Exchange while seeking opportunities with European 
                  product companies.
                </p>
                
                <div className="about__highlights">
                  <div className="about__highlight-item">
                    <span className="about__highlight-icon">💼</span>
                    <span className="about__highlight-text">
                      Specialized in React, TypeScript, and modern frontend tooling
                    </span>
                  </div>
                  
                  <div className="about__highlight-item">
                    <span className="about__highlight-icon">📈</span>
                    <span className="about__highlight-text">
                      Proven track record of improving conversion rates (1.7% → 3%)
                    </span>
                  </div>
                  
                  <div className="about__highlight-item">
                    <span className="about__highlight-icon">🎓</span>
                    <span className="about__highlight-text">
                      Bachelor's in Information Systems & Technologies
                    </span>
                  </div>
                  
                  <div className="about__highlight-item">
                    <span className="about__highlight-icon">🌍</span>
                    <span className="about__highlight-text">
                      Open to relocation in Europe | Remote work available
                    </span>
                  </div>
                </div>
                
                <p className="about__descr-text">
                  Passionate about creating accessible, performant interfaces that deliver 
                  measurable business impact. Focused on continuous improvement and staying 
                  current with frontend innovations.
                </p>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="about__project">
            <h2 className="about__project-heading">Featured Projects</h2>
            <p className="about__project-subheading">
              A selection of my recent work showcasing different technologies and approaches
            </p>
            
            <div className="about__project-list">
              <button 
                className={`about__project-button ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                All Projects
              </button>
              <button 
                className={`about__project-button ${activeTab === 'react' ? 'active' : ''}`}
                onClick={() => setActiveTab('react')}
              >
                React
              </button>
              <button 
                className={`about__project-button ${activeTab === 'javascript' ? 'active' : ''}`}
                onClick={() => setActiveTab('javascript')}
              >
                JavaScript
              </button>
              <button 
                className={`about__project-button ${activeTab === 'professional' ? 'active' : ''}`}
                onClick={() => setActiveTab('professional')}
              >
                Professional
              </button>
            </div>
          </div>

          {/* Project Cards */}
          <motion.div 
            className="about__project-tabs-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            key={activeTab}
          >
            {filteredProjects.map((project) => (
              <motion.article 
                key={project.id}
                className="about__project-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: project.id * 0.1 }}
              >
                <div className="about__project-card-header">
                  <h3 className="about__project-card-heading">{project.title}</h3>
                  <p className="about__project-card-subtitle">{project.description}</p>
                </div>
                
                <p className="about__project-card-text">{project.fullDescription}</p>
                
                <div className="about__project-card-group">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="about__project-card-lang">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.highlights && (
                  <ul className="about__project-card-highlights">
                    {project.highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                )}
                
                <div className="about__project-card-links-wrapper">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      className="about__project-card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img 
                        className="about__project-card-img" 
                        src={project.image} 
                        alt={`${project.title} screenshot`}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/images/placeholder.jpg';
                        }}
                      />
                      <div className="about__project-card-overlay">
                        <span>View Live Demo →</span>
                      </div>
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      className="about__project-card-github"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub →
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* GitHub Link */}
          <div className="about__project-footer">
            <a 
              href="https://github.com/developav" 
              className="about__project-link-git"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More Projects on GitHub →
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
