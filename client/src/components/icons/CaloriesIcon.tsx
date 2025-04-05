import React from "react";
import { motion } from "framer-motion";

type IconProps = {
  className?: string;
  width?: number;
  height?: number;
};

export default function CaloriesIcon({ className, width = 24, height = 24 }: IconProps) {
  return (
    <div className={className} style={{ width, height }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path 
          d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94"
          stroke="#E61D2B"
        />
      </svg>
    </div>
  );
}