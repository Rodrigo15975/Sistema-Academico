import React from 'react';
import { m } from 'framer-motion';

interface AnimatedModalProps {
  children: React.ReactNode
  className: string
}

const TemplateModalAnimationOpacity: React.FC<AnimatedModalProps> = ({ className, children }) => {
  return (
    <>
      <m.div
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ translate: "100%" }}
      >
        {children}
      </m.div>
    </>
  );
};

export default TemplateModalAnimationOpacity;


// <motion.div
//           className={className}
//           initial={{ x: '100%' }}
//           animate={{ x: '0' }}
//           exit={{ x: '-100%' }}
//         >
//           {children}
//         </motion.div>