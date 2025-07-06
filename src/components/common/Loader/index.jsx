import React from "react";

export default function Loader({ size = 48, color = "#00BDD3", strokeWidth = 6 }) {
  // Arc math
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const arcLength = 0.65 * circumference; // 75% visible
  const gapLength = circumference - arcLength; // 25% gap

  return (
    <svg
      width={size}
      height={size}
      style={{ display: "block" }}
      viewBox={`0 0 ${size} ${size}`}
      aria-label="Loading"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={`${arcLength} ${gapLength}`}
        strokeDashoffset="0"
        strokeLinecap="round"
        style={{
          transformOrigin: "50% 50%",
          animation: "loader-rotate 0.8s linear infinite"
        }}
      />
      <style>
        {`
          @keyframes loader-rotate {
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </svg>
  );
}