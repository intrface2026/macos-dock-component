import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: Variants;
  duration?: number;
  delay?: number;
  offset?: number;
  blur?: string;
  inView?: boolean;
}

export const BlurFade: React.FC<BlurFadeProps> = ({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  offset = 6,
  blur = '6px',
  inView = true,
}) => {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: "-50px" });
  const isInView = !inView || inViewResult;

  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: offset, filter: `blur(${blur})` },
    visible: { opacity: 1, y: 0, filter: `blur(0px)` },
  };

  const combinedVariants = variant || defaultVariants;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={combinedVariants}
      transition={{
        delay: 0.04 + delay,
        duration,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};