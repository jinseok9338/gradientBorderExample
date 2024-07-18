"use client";
import { useState } from "react";

const MovingBorderComponent = ({ children }: { children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  if (!isHovered) {
    return (
      <div
        onMouseEnter={handleMouseEnter}
        className="relative flex items-center rounded-[10px] w-fit h-fit justify-center"
        style={{ overflow: "hidden" }}
      >
        <div
          className="absolute  inset-0 before:content-[''] before:absolute before:w-[110%] before:h-[110%] before:rounded-full before:top-0 before:left-0 before:z-0  before:bg-gradient-to-r before:from-green-500/50 before:via-green-500/75 before:to-green-500/50 before:animate-orbit "
          style={{ transformOrigin: `center` }}
        ></div>
        <div className="relative z-[1] w-full m-[0.7%]">{children}</div>
      </div>
    );
  }

  return (
    <div
      onMouseLeave={handleMouseLeave}
      className="relative flex h-fit w-fit  items-center rounded-[10px] justify-center"
      style={{ overflow: "hidden" }}
    >
      <div
        className="absolute  inset-0 before:content-[''] before:absolute before:w-[250%] before:h-[250%]  before:top-[-50%] before:left-[-50%] before:z-0  before:bg-gradient-to-r before:from-green-500/10 before:via-green-500 before:to-green-500/10 before:animate-rotate "
        style={{ transformOrigin: `center` }}
      ></div>
      <div className="relative z-[1] w-full m-[0.7%]">{children}</div>
    </div>
  );
};

export default MovingBorderComponent;
