// src/components/GridBackground.js
import React from "react";

const LINE_SPACING_X = "50%";
const LINE_SPACING_Y = "55%";
const LINE_THICKNESS = "1px";
const LINE_COLOR = "#CBD1D2";
const FULL_WIDTH = "100vw";
const CUSTOM_HEIGHT_LIMIT = "1500px";

export default function GridBackground({ children }) {
  const gridStyle = {
    // ... (Your gradient style remains the same) ...
    backgroundImage: `
      repeating-linear-gradient(to bottom, ${LINE_COLOR}, ${LINE_COLOR} ${LINE_THICKNESS}, transparent ${LINE_THICKNESS}, transparent ${LINE_SPACING_Y}),
      repeating-linear-gradient(to right, ${LINE_COLOR}, ${LINE_COLOR} ${LINE_THICKNESS}, transparent ${LINE_THICKNESS}, transparent ${LINE_SPACING_X})
    `,
    backgroundSize: `
      ${LINE_SPACING_X} ${CUSTOM_HEIGHT_LIMIT},
      ${FULL_WIDTH} ${LINE_SPACING_Y}`,
    
    backgroundPosition: `
      -${LINE_THICKNESS} 0, 
      0 -${LINE_THICKNESS} 
    `,
  };

  return (
    // ➡️ KEY CHANGE: Make this container relative
    <div className="w-full min-h-screen relative">
      {/* ➡️ NEW: Absolute layer for the grid lines, z-index: 10 */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={gridStyle}
      />

      {/* This renders all your page content (Header, Hero, About, etc.) */}
      {children}
    </div>
  );
}
