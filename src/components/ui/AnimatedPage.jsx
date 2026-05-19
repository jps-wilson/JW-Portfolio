// eslint-disable-next-line no-unused-vars
import { motion, useReducedMotion } from "framer-motion";

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
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      variants={pageVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={shouldReduce ? { duration: 0 } : pageTransition}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedPage;
