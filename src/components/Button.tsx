import { motion } from "framer-motion";
import { FC } from "react";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "disabled";
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const { onClick, className, variant = "primary", children, disabled, ...rest } = props;

  let buttonClasses = " py-2 rounded-xl transition-all";

  if (variant === "primary") {
    buttonClasses += " bg-blue-400 text-white font-bold";
  } else if (variant === "secondary") {
    buttonClasses += " border-2 font-bold text-blue-400 border-blue-400";
  } else if (variant === "disabled") {
    buttonClasses += " bg-gray-200 text-gray-500  ";
  }

  buttonClasses += ` ${className}`;

  if (variant === "disabled") {
    return (
      <button className={buttonClasses} disabled onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={buttonClasses}
      onClick={onClick}
      {...rest}
    >
      {children}
    </motion.button>
  );
};

export default Button;
