"use client";
import GradientProgress from "@/components/ui/gradientProgress";
import MovingBorderComponent from "@/components/ui/hoverBorderGradient";
import Image from "next/image";
import React from "react";
function HoverBorderGradientDemo() {
  return (
    <div className="m-40 flex flex-col  justify-center text-center">
      <MovingBorderComponent>
        <Image
          className="rounded-[10px]"
          src={"https://picsum.photos/id/237/200/300"}
          alt={"https://picsum.photos/id/237/400/600"}
          width={300}
          height={400}
        />
      </MovingBorderComponent>
      <GradientProgress rarity={"Rare"} />
    </div>
  );
}

export default HoverBorderGradientDemo;
