"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import BlurText from "./ui/BlurText";

export function Intro() {
  return (
    <div className="h-[12rem] md:h-[15rem] w-full bg-inherit flex flex-col items-center justify-center overflow-hidden rounded-md">
      <BlurText
        text="SBN_Web_Dev"
        delay={150}
        animateBy="words"
        direction="top"
        className="mb-2"
      />
      <div className="w-[40rem] md:w-[60rem] h-20 md:h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-inherit [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
