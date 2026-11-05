import React from 'react'

export const FloralCornerTopLeft: React.FC<{ className?: string }> = ({
  className = '',
}) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-24 h-24 md:w-32 md:h-32 text-primary/30 pointer-events-none ${className}`}
  >
    <path
      d="M10 10C35 12 60 25 75 45C85 58 90 75 95 95"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M10 10C12 35 25 60 45 75C58 85 75 90 95 95"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M35 20C42 16 52 18 55 25C58 32 50 40 42 38C34 36 30 24 35 20Z"
      fill="currentColor"
      fillOpacity="0.25"
    />
    <path
      d="M20 35C16 42 18 52 25 55C32 58 40 50 38 42C36 34 24 30 20 35Z"
      fill="currentColor"
      fillOpacity="0.25"
    />
    <circle cx="50" cy="50" r="3" fill="#C9A464" fillOpacity="0.6" />
    <circle cx="28" cy="28" r="2" fill="#C9A464" fillOpacity="0.8" />
  </svg>
)

export const FloralCornerBottomRight: React.FC<{ className?: string }> = ({
  className = '',
}) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-24 h-24 md:w-32 md:h-32 text-primary/30 pointer-events-none rotate-180 ${className}`}
  >
    <path
      d="M10 10C35 12 60 25 75 45C85 58 90 75 95 95"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M10 10C12 35 25 60 45 75C58 85 75 90 95 95"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M35 20C42 16 52 18 55 25C58 32 50 40 42 38C34 36 30 24 35 20Z"
      fill="currentColor"
      fillOpacity="0.25"
    />
    <path
      d="M20 35C16 42 18 52 25 55C32 58 40 50 38 42C36 34 24 30 20 35Z"
      fill="currentColor"
      fillOpacity="0.25"
    />
    <circle cx="50" cy="50" r="3" fill="#C9A464" fillOpacity="0.6" />
    <circle cx="28" cy="28" r="2" fill="#C9A464" fillOpacity="0.8" />
  </svg>
)

export const FloralDivider: React.FC<{ className?: string }> = ({
  className = '',
}) => (
  <div className={`flex items-center justify-center gap-3 my-8 ${className}`}>
    <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent via-border to-primary/40" />
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary/70 animate-pulse-soft"
    >
      <path
        d="M12 3C12 3 13.5 7.5 18 8C18 8 14.5 10.5 15 15C15 15 12 12.5 9 15C9.5 10.5 6 8 6 8C10.5 7.5 12 3 12 3Z"
        fill="currentColor"
      />
      <circle cx="12" cy="12" r="1.5" fill="#C9A464" />
    </svg>
    <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent via-border to-primary/40" />
  </div>
)
