"use client";

import React from "react";

export default function Page() {
  const [coordinates, setCoordinates] = React.useState({ x: 0, y: 0 });

  return (
    <div
      className="relative"
      onPointerMove={(e) => {
        setCoordinates({ x: e.clientX, y: e.clientY });
      }}
    >
      <div
        className="dot bg-white w-12 h-12 top-[-25px] left-[-25px] rounded-full absolute"
        style={{
          transform: `translate(${coordinates.x}px, ${coordinates.y}px)`,
        }}
      />
    </div>
  );
}
