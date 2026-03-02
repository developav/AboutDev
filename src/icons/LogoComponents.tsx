import { type SVGProps } from "react";

// Main Logo Component
export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="200"
      height="80"
      viewBox="0 0 200 80"
      {...props}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#667eea" stopOpacity={1} />
          <stop offset="100%" stopColor="#764ba2" stopOpacity={1} />
        </linearGradient>
      </defs>
      
      {/* Left bracket */}
      <path
        d="M 30 15 L 20 15 L 20 65 L 30 65"
        stroke="url(#logoGradient)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* DP letters */}
      <text
        x="50"
        y="50"
        fontFamily="'Courier New', monospace"
        fontSize="36"
        fontWeight="bold"
        fill="url(#logoGradient)"
      >
        DP
      </text>
      
      {/* Right bracket */}
      <path
        d="M 110 15 L 120 15 L 120 65 L 110 65"
        stroke="url(#logoGradient)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Forward slash */}
      <line
        x1="135"
        y1="55"
        x2="145"
        y2="25"
        stroke="url(#logoGradient)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Decorative dots */}
      <circle cx="155" cy="30" r="2.5" fill="#667eea" />
      <circle cx="165" cy="40" r="2.5" fill="#764ba2" />
      <circle cx="155" cy="50" r="2.5" fill="#667eea" />
    </svg>
  );
}

// Favicon 32x32
export function Favicon32(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      {...props}
    >
      <defs>
        <linearGradient id="favicon32Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#667eea" stopOpacity={1} />
          <stop offset="100%" stopColor="#764ba2" stopOpacity={1} />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="6" fill="url(#favicon32Gradient)" />
      <text
        x="16"
        y="22"
        fontFamily="'Courier New', monospace"
        fontSize="16"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
      >
        DP
      </text>
      <path
        d="M 6 8 L 4 8 L 4 24 L 6 24"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 26 8 L 28 8 L 28 24 L 26 24"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Favicon 16x16
export function Favicon16(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      {...props}
    >
      <defs>
        <linearGradient id="favicon16Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#667eea" stopOpacity={1} />
          <stop offset="100%" stopColor="#764ba2" stopOpacity={1} />
        </linearGradient>
      </defs>
      <rect width="16" height="16" rx="3" fill="url(#favicon16Gradient)" />
      <text
        x="8"
        y="11.5"
        fontFamily="'Courier New', monospace"
        fontSize="8"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
      >
        DP
      </text>
    </svg>
  );
}

// Apple Touch Icon 180x180
export function AppleTouchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="180"
      height="180"
      viewBox="0 0 180 180"
      {...props}
    >
      <defs>
        <linearGradient id="appleIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#667eea" stopOpacity={1} />
          <stop offset="100%" stopColor="#764ba2" stopOpacity={1} />
        </linearGradient>
      </defs>
      <rect width="180" height="180" rx="40" fill="url(#appleIconGradient)" />
      <path
        d="M 40 50 L 25 50 L 25 130 L 40 130"
        stroke="white"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />
      <text
        x="90"
        y="110"
        fontFamily="'Courier New', monospace"
        fontSize="72"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
      >
        DP
      </text>
      <path
        d="M 140 50 L 155 50 L 155 130 L 140 130"
        stroke="white"
        strokeWidth="8"
        fill="none"
        strokeLinecap="round"
      />
      <line
        x1="60"
        y1="45"
        x2="75"
        y2="30"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.5"
      />
      <line
        x1="105"
        y1="45"
        x2="120"
        y2="30"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
