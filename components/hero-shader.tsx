"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import { useReducedMotion } from "motion/react";

export function HeroShader() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="hero-shader" aria-hidden="true">
      <MeshGradient
        width="100%"
        height="100%"
        colors={["#e1e6e3", "#77837d", "#27302c", "#090a0a"]}
        speed={reduceMotion ? 0 : 0.17}
        frame={920}
        distortion={0.86}
        swirl={0.36}
        grainMixer={0.16}
        grainOverlay={0.06}
        scale={0.92}
        offsetX={0.08}
        offsetY={-0.08}
        minPixelRatio={1}
        maxPixelCount={800000}
      />
    </div>
  );
}
