import React from 'react';
import { m } from 'framer-motion';

interface AnimatedModalProps {
  children: React.ReactNode
  className: string
}

const TemplateModalAnimation: React.FC<AnimatedModalProps> = ({ className, children }) => {
  return (
    <>
      <m.div
        className={className}
        initial={{ translate: '100%' }}
        animate={{ translate: '0' }}
        exit={{ translate: '-100%' }}
      >
        {children}
      </m.div>
    </>
  );
};

export default TemplateModalAnimation;


// <motion.div
//           className={className}
//           initial={{ x: '100%' }}
//           animate={{ x: '0' }}
//           exit={{ x: '-100%' }}
//         >
//           {children}
//         </motion.div>