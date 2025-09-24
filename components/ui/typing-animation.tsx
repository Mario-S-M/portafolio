"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypingAnimationProps {
  texts: string[];
  className?: string;
  cursorClassName?: string;
  duration?: number;
  delay?: number;
}

export function TypingAnimation({
  texts,
  className,
  cursorClassName,
  duration = 100,
  delay = 1000,
}: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const text = texts[currentTextIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setCurrentText(text.substring(0, currentText.length + 1));
        if (currentText.length + 1 === text.length) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        // Deleting
        setCurrentText(text.substring(0, currentText.length - 1));
        if (currentText.length - 1 === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? duration / 2 : duration);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, duration, delay]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {currentText}
      <span
        className={cursorClassName}
        style={{ opacity: showCursor ? 1 : 0 }}
      >
        |
      </span>
    </motion.div>
  );
}