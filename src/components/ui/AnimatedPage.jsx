// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

const pageTransition = {
  duration: 0.4,
  ease: "easeInOut",
};

function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedPage;
