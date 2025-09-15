import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '@/contexts/NavigationContext';

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  in: {
    x: 0,
    opacity: 1,
  },
  out: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const pageTransition = {
  duration: 0.3,
};

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const { direction } = useNavigation();

  return (
    <motion.div
      custom={direction}
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
      className="page-transition min-h-screen"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;