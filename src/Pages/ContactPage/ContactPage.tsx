import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon, GmailIcon, WhatsAppIcon } from "../../icons/icons";
import { SOCIAL_LINKS, ANIMATION_CONFIG } from "../../data/constants";
import "./ContactPage.scss";

export default function ContactPage() {
  return (
    <motion.div
      variants={ANIMATION_CONFIG.pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={ANIMATION_CONFIG.pageTransition}
    >
        <section className="contact">
        <div className="container">
            <h1 className="contact__heading">Get in Touch</h1>
            <p className="contact__text">Feel free to reach out to me via any of the platforms below:</p>
                <div className="contact__links">
                    <a
                    href={SOCIAL_LINKS.github}
                    className="contact__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit my GitHub profile"
                    >
                    <GithubIcon />
                    https://github.com/developav
                    </a>
                    <a
                    href={SOCIAL_LINKS.linkedin}
                    className="contact__link"
                    target="_blank"
                    rel="noopener noreferrer"         
                    aria-label="Visit my LinkedIn profile">
                        <LinkedInIcon />
                        www.linkedin.com/in/dmitriipavlove
                    </a>
                    <a
                    href={SOCIAL_LINKS.linkedin}
                    className="contact__link"
                    target="_blank"
                    rel="noopener noreferrer"         
                    aria-label="Visit my LinkedIn profile">
                        <WhatsAppIcon />
                        +7 929 612-33-72
                    </a>
                    <a
                    href={SOCIAL_LINKS.linkedin}
                    className="contact__link"
                    target="_blank"
                    rel="noopener noreferrer"         
                    aria-label="Visit my LinkedIn profile">
                        <GmailIcon />
                        dmitriiy.pavlov@gmail.com
                    </a>
                </div>
            </div>
        </section>
        </motion.div>
    )}