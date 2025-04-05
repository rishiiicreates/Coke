import React from "react";

type IconProps = {
  className?: string;
  width?: number;
  height?: number;
};

export default function SodiumIcon({ className, width = 24, height = 24 }: IconProps) {
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
          d="M12 13.5V6.8m0 6.7c.8 0 1.5.7 1.5 1.5v1c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5v-1c0-.8.7-1.5 1.5-1.5Z"
        />
        <path 
          d="M10.5 6.8h3"
        />
        <path 
          d="M8 14a6 6 0 1 1 12 0 6 6 0 0 1-12 0Z"
          stroke="#E61D2B"
        />
        <path 
          d="M22 22 2 2"
          strokeOpacity="0.5"
          stroke="#E61D2B"
        />
      </svg>
    </div>
  );
}