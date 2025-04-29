"use client";

import { motion } from "framer-motion";
import { DotIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import LiquidButton from "./LiquidButton";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-6xl mx-auto gap-2 md:gap-4">
      {/* Image slides in from the bottom slowly */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="h-32 w-32 md:h-40 md:w-40 border-8 border-stone-700/10 bg-stone-700/10 border-backdrop-blur-md rounded-full"
      >
        <div className="w-full h-full relative rounded-full">
          <Image
            src="/images/profile1.JPG"
            alt="portfolio"
            fill
            className=" h-full w-full rounded-full object-cover"
          />
        </div>
      </motion.div>

      {/* Dot Icon with scale-in and pulse animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="flex items-center gap-2"
      >
        <motion.div
          animate={{ scale: [1, 2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <DotIcon className="h-12 w-12 md:h-18 md:w-18 text-green-500" />
        </motion.div>
        <p className="md:text-2xl font-bold text-stone-400">
          available for work
        </p>
      </motion.div>

      {/* Name sliding in from the left slowly */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="flex items-center gap-2 md:gap-4 text-end"
      >
        <h1 className="md:text-8xl text-4xl font-bold text-stone-200">Somto</h1>
        <h1 className="md:text-6xl text-2xl text-stone-400 font-serif mt-3 md:mt-5 font-extralight">
          Nwali
        </h1>
      </motion.div>

      {/* Description sliding in from the right slowly */}
      <motion.p
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
        className="text-stone-400 text-sm md:text-lg font-serif"
      >
        FullStack Developer and Designer based in Nigeria
      </motion.p>

      {/* Social media icons sliding in from the bottom slowly */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
        className="flex gap-4 md:gap-6 items-center"
      >
        <Link
          href="https://x.com/sbn_clinton?t=WLV8nVRw6jBiGSNvbWO35Q&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-inherit text-stone-400"
        >
          <RiTwitterXFill className="w-6 h-6 md:h-8 md:w-8" />
        </Link>
        <hr className="h-6 md:h-8 border-l border-stone-500" />
        <Link
          href="https://www.linkedin.com/in/somto-nwali-0977ba1aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-inherit text-stone-400"
        >
          <FaLinkedinIn className="w-6 h-6 md:h-8 md:w-8" />
        </Link>
        <hr className="h-6 md:h-8 border-l border-stone-500" />
        <Link
          href="https://www.instagram.com/sbn_clinton?igsh=MXE1dXBmNDl6Z2hkOQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-inherit text-stone-400"
        >
          <FaInstagram className="w-6 h-6 md:h-8 md:w-8" />
        </Link>
      </motion.div>

      {/* Liquid Button */}
      <Link href="#contactMe" className="my-5">
        <LiquidButton />
      </Link>
    </div>
  );
};

export default Hero;
