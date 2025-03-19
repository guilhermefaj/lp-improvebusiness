import React from "react";

export function DotPattern({ className = "", ...props }) {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g opacity="0.3">
        <circle cx="2" cy="2" r="2" fill="currentColor" />
        <circle cx="22" cy="2" r="2" fill="currentColor" />
        <circle cx="42" cy="2" r="2" fill="currentColor" />
        <circle cx="62" cy="2" r="2" fill="currentColor" />
        <circle cx="82" cy="2" r="2" fill="currentColor" />
        <circle cx="2" cy="22" r="2" fill="currentColor" />
        <circle cx="22" cy="22" r="2" fill="currentColor" />
        <circle cx="42" cy="22" r="2" fill="currentColor" />
        <circle cx="62" cy="22" r="2" fill="currentColor" />
        <circle cx="82" cy="22" r="2" fill="currentColor" />
        <circle cx="2" cy="42" r="2" fill="currentColor" />
        <circle cx="22" cy="42" r="2" fill="currentColor" />
        <circle cx="42" cy="42" r="2" fill="currentColor" />
        <circle cx="62" cy="42" r="2" fill="currentColor" />
        <circle cx="82" cy="42" r="2" fill="currentColor" />
        <circle cx="2" cy="62" r="2" fill="currentColor" />
        <circle cx="22" cy="62" r="2" fill="currentColor" />
        <circle cx="42" cy="62" r="2" fill="currentColor" />
        <circle cx="62" cy="62" r="2" fill="currentColor" />
        <circle cx="82" cy="62" r="2" fill="currentColor" />
        <circle cx="2" cy="82" r="2" fill="currentColor" />
        <circle cx="22" cy="82" r="2" fill="currentColor" />
        <circle cx="42" cy="82" r="2" fill="currentColor" />
        <circle cx="62" cy="82" r="2" fill="currentColor" />
        <circle cx="82" cy="82" r="2" fill="currentColor" />
      </g>
    </svg>
  );
} 