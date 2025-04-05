import React from "react";

type IconProps = {
  className?: string;
  width?: number;
  height?: number;
};

export default function SugarIcon({ className, width = 24, height = 24 }: IconProps) {
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
          d="M10.6 6H14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2"
        />
        <path 
          d="M5.2 2h12.6a1 1 0 0 1 .7 1.7L14 8"
        />
        <path 
          d="M9 11h4" 
        />
        <path 
          d="M9 14h4" 
        />
        <path 
          d="M10 17h2" 
        />
      </svg>
    </div>
  );
}