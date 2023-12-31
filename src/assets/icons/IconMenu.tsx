import React from 'react'

export const IconMenu = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z" />
    </svg>
  );
}
