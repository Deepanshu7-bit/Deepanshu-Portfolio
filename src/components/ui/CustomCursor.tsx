"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "../theme/ThemeProvider";
import { motion } from "framer-motion";

export function CustomCursor() {
  const { config } = useTheme();
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      setIsTouchDevice(
        "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          window.innerWidth < 1024
      );
    };

    checkTouch();
    window.addEventListener("resize", checkTouch);

    const onMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Check if target is interactive or has custom cursor data
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectEl = target.closest("[data-cursor='project']");
      const ctaEl = target.closest("[data-cursor='cta']");
      const interactiveEl = target.closest("a, button, input, select, textarea, [role='button']");

      if (projectEl) {
        setIsHovered(true);
        setCursorText("VIEW ↗");
      } else if (ctaEl) {
        setIsHovered(true);
        setCursorText("OPEN ↗");
      } else if (interactiveEl) {
        setIsHovered(true);
        setCursorText(null);
      } else {
        setIsHovered(false);
        setCursorText(null);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", checkTouch);
    };
  }, []);

  if (isTouchDevice || config.cursor === "default") {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Outer Follower Ring / Pill */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          scale: cursorText ? 1 : isHovered ? 1.5 : 1,
          width: cursorText ? 88 : isHovered ? 40 : 12,
          height: cursorText ? 34 : isHovered ? 40 : 12,
          borderRadius: cursorText ? 18 : 9999,
          backgroundColor: cursorText
            ? "var(--accent-current)"
            : isHovered
            ? "transparent"
            : "var(--accent-current)",
          borderColor: isHovered && !cursorText ? "var(--accent-current)" : "transparent",
          borderWidth: isHovered && !cursorText ? 1.5 : 0,
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 350,
          mass: 0.2,
        }}
      >
        {cursorText && (
          <span className="text-[10px] font-mono font-bold tracking-wider text-white select-none whitespace-nowrap">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Tiny Center Dot when expanded without text */}
      {isHovered && !cursorText && (
        <motion.div
          className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-accent pointer-events-none -translate-x-1/2 -translate-y-1/2"
          animate={{ x: mousePos.x, y: mousePos.y }}
          transition={{ duration: 0 }}
        />
      )}
    </div>
  );
}
