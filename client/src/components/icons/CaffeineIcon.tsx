import React from "react";

type IconProps = {
  className?: string;
  width?: number;
  height?: number;
};

export default function CaffeineIcon({ className, width = 24, height = 24 }: IconProps) {
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
        <path 
          d="M17 8h1a4 4 0 1 1 0 8h-1"
          stroke="#E61D2B"
        />
        <path 
          d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"
        />
        <path 
          d="M6 2v2"
        />
        <path 
          d="M10 2v2"
        />
        <path 
          d="M14 2v2"
        />
        <path 
          d="M10 14c.5-.3.8-.7.9-1.2.4-1.3 1-1.9 2.8-1.3"
          stroke="#E61D2B"
        />
      </svg>
    </div>
  );
}