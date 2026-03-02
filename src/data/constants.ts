// Animation configuration
export const ANIMATION_CONFIG = {
  pageVariants: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  pageTransition: {
    duration: 0.3,
    ease: "easeInOut" as const,
  },
};

// Social media and contact links
export const SOCIAL_LINKS = {
  github: "https://github.com/developav",
  linkedin: "https://www.linkedin.com/in/dmitriipavlove",
  whatsapp: "https://wa.me/+79296123372", // Replace with your actual WhatsApp number,
  email: "mailto:dmitriiy.pavlov@gmail.com",
} as const;
