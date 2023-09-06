import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { motion, Variants, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { NAVIGATION_DATA } from "@/config/NAVIGATION_DATA";

const variants: Variants = {
  close: { x: 300, opacity: 0 },
  open: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

export default function Navigation() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest === 0) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  });

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const RenderNavigationData = ({ className }: { className?: string }) => {
    return (
      <>
        {NAVIGATION_DATA.map((item, i) => {
          return (
            <Link
              key={i}
              href={item.url}
              className={`${
                router.pathname === item.url ? "text-blue-700" : "text-gray-700"
              } ${className}`}
            >
              {item.title}
            </Link>
          );
        })}
      </>
    );
  };

  return (
    <div
      className={`flex items-center justify-between p-[20px] md:px-[100px] bg-white w-full shadow-lg ${
        isFixed ? "sticky" : ""
      }`}
    >
      <h1 className="font-bold text-gray-700">Solitaire</h1>
      {/* desktop */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`hidden md:flex gap-[30px] font-light`}
      >
        <RenderNavigationData />
      </motion.nav>

      {/* mobile */}
      <div className="md:hidden">
        {!isOpen ? <FaBars onClick={handleToggle} /> : <IoClose onClick={handleToggle} />}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="close"
              animate="open"
              exit="close"
              variants={variants}
              className="flex flex-col fixed top-[64px] left-0 w-full border-2 border-y"
            >
              <RenderNavigationData className=" p-3 bg-white" />
              <div className={` w-full left-0 h-screen bg-black opacity-50 `}></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
