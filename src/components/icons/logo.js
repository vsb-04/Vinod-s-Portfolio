
import React from 'react';

const IconLogo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
    <title>Logo</title>
    <g transform="translate(-8.000000, -2.000000)">
      <g transform="translate(11.000000, 5.000000)">
        {/* Hexagon shape remains unchanged */}
        <polygon
          id="Shape"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="39 0 0 22 0 67 39 90 78 68 78 23"
        />
        
        {/* Updated Path for "V" */}
        <path
          d="M28 30 L40 60 L52 30 L46 30 L40 50 L34 30 Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);

export default IconLogo;


