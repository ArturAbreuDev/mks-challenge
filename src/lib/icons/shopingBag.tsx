import * as React from 'react'

function ShoppingBagIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      width={14}
      height={16}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.737212}
        clipRule="evenodd"
        d="M3 1L1 3.7v9.45c0 .746.597 1.35 1.333 1.35h9.334c.736 0 1.333-.604 1.333-1.35V3.7L11 1H3z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.737212}
        d="M1 4.375h12M10 7c0 1.243-1.175 2.25-2.625 2.25S4.75 8.243 4.75 7"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ShoppingBagIcon
