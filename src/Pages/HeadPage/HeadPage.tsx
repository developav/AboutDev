import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon, ArrowDownIcon, WhatsAppIcon } from "../../icons/icons";
import { SOCIAL_LINKS, ANIMATION_CONFIG } from "../../data/constants";
import headImage from "/head.webp";
import "./HeadPage.scss";

export default function HeadPage() {
  return (
    <motion.div
      variants={ANIMATION_CONFIG.pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={ANIMATION_CONFIG.pageTransition}
    >
      <main className="main">
        <section className="head">
          <div className="container">
            <div className="head__block">
              <div className="head__block-name">
                <p className="head__block-name-hello">👋 Hello</p>
                <h1 className="head__block-name-heading">I'm Dmitrii Pavlov</h1>
                <span className="head__block-name-special">
                  Front-end Developer
                </span>
                <div className="head__block-social-block">
                  <a
                    href={SOCIAL_LINKS.github}
                    className="head__block-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit my GitHub profile"
                  >
                    <GithubIcon />
                  </a>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    className="head__block-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit my LinkedIn profile"
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
              
              <div className="head__block-men">
                <img
                  src={headImage}
                  alt="Dmitrii Pavlov - Frontend Developer"
                  className="head__block-men-img"
                  loading="lazy"
                  aria-label="Abstract image different developer"
                />
              </div>
              
              <div className="head__block-cv">
                <a href="../../../public/docx/Dmitrii_Pavlov.docx" className="head__block-cv-download" download="Dmitrii_Pavlov.docx" aria-label="Download my CV">
                  Download CV
                  <ArrowDownIcon className="head__block-cv-svg" />
                </a>
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  className="head__block-cv-contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact me on WhatsApp"
                >
                  <WhatsAppIcon className="head__block-cv-svg" />
                  Contact me
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
