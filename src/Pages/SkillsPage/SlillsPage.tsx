import { motion } from "framer-motion";
import { 
  ReactIcon, 
  TypeScriptIcon, 
  HTMLIcon, 
  CSSIcon, 
  SassIcon, 
  GitIcon, 
  GitHubIcon, 
  VueIcon 
} from "../../icons/TechIcons";
import "./SkillsPage.scss";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const pageTransition = {
  duration: 0.3,
  ease: "easeInOut" as const,
};

interface Tech {
  id: string;
  name: string;
  icon: React.ComponentType;
}

const TECHNOLOGIES: Tech[] = [
  { id: "react", name: "React", icon: ReactIcon },
  { id: "typescript", name: "TypeScript", icon: TypeScriptIcon },
  { id: "html", name: "HTML5", icon: HTMLIcon },
  { id: "css", name: "CSS3", icon: CSSIcon },
  { id: "sass", name: "Sass", icon: SassIcon },
  { id: "git", name: "Git", icon: GitIcon },
  { id: "github", name: "GitHub", icon: GitHubIcon },
  { id: "vue", name: "Vue.js", icon: VueIcon },
];

export default function SkillsPage() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      <section className="tech">
        <div className="container">
          <h2 className="tech__heading">Technologies & Skills</h2>
          <div className="tech__group">
            <div className="tech__group-daily">
              <p className="tech__group-daily-text">
                Technologies I use daily
              </p>
              <ul className="tech__group-daily-list">
                {TECHNOLOGIES.map((tech) => {
                  const IconComponent = tech.icon;
                  return (
                    <li key={tech.id} className="tech__group-daily-item">
                      <IconComponent />
                      <span className="tech__name">{tech.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
