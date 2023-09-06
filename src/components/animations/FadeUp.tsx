import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface FadeUpProps {
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}

const variants: Variants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function FadeUp({ children, onClick, className }: FadeUpProps) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      onClick={onClick}
      className={className}
    >
      <motion.div variants={variants}>{children}</motion.div>
    </motion.div>
  );
}
