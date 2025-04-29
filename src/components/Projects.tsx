"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { TbHandClick } from "react-icons/tb";

export function Projects() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  const ref: React.RefObject<HTMLDivElement | null> = useRef(null);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-4xl mx-auto  h-full  md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-auto"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={500}
                  height={500}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 md:h-[500px]  sm:rounded-tr-lg sm:rounded-tl-lg object-cover md:object-fill"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    <TbHandClick className="w-6 h-6 md:h-8 md:w-8 animate-pulse duration-300 ease-in-out inline mr-1" />
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 items-start gap-4 px-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div
                layoutId={`image-${card.title}-${id}`}
                className="w-full h-60 rounded-lg object-cover object-top relative"
              >
                <Image
                  fill
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className=" text-stone-300  text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-stone-400 font-bold text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Fullstack",
    title: "SBN_Connect_website",
    src: "/images/connect-website.png",
    ctaText: "Visit",
    ctaLink: "https://connect-frontend-client.vercel.app",
    content: () => {
      return (
        <p>
          <strong>SBN_Connect</strong> is a full-stack web application built
          with <strong>Next.js, Express.js, and Tailwind CSS</strong>, designed
          to offer a fast, responsive, and intuitive user experience. <br />
          <br />
          The frontend leverages the power of <strong>Next.js</strong> and{" "}
          <strong>React.js</strong> to deliver server-side rendering, dynamic
          routing, and excellent performance across devices.{" "}
          <strong>Express.js</strong> handles server-side logic and API
          integration, forming a solid foundation for the backend. <br />
          <br />
          On the backend, <strong>MongoDB</strong> and <strong>Mongoose</strong>{" "}
          are used for efficient, schema-based data modeling and database
          management, providing a flexible and scalable solution for storing and
          retrieving user data and posts. <br />
          <br />
          The user interface is crafted with <strong>Tailwind CSS</strong>,
          resulting in a clean, modern, and fully responsive design that works
          seamlessly across desktops and mobile devices. Users can connect,
          share posts, and interact in real time within an engaging and
          streamlined environment.
        </p>
      );
    },
  },
  {
    description: "Frontend",
    title: "SBN-Academy",
    src: "/images/school-website.png",
    ctaText: "Visit",
    ctaLink: "https://sbn-school-static.vercel.app",
    content: () => {
      return (
        <p>
          <strong>School</strong> is a modern frontend website built using{" "}
          <strong>Next.js, React.js, ShadCN UI, and Framer Motion</strong>,
          offering a smooth and engaging user experience. <br />
          <br />
          Leveraging the capabilities of <strong>Next.js</strong> and{" "}
          <strong>React.js</strong>, the site ensures fast performance,
          efficient routing, and dynamic content rendering for an optimized
          browsing experience. <br />
          <br />
          The interface is styled using the elegant and accessible components
          from <strong>ShadCN UI</strong>, while <strong>Framer Motion</strong>{" "}
          adds subtle and polished animations to enhance user interaction and
          visual appeal. <br />
          <br />
          Fully responsive and intuitively designed, the website adapts
          seamlessly across devices, providing users with a clean and
          interactive experience on both desktop and mobile platforms.
        </p>
      );
    },
  },
  {
    description: "FullStack",
    title: "Social Media Website",
    src: "/images/chatappmobile.png",
    ctaText: "Visit",
    ctaLink: "https://sbn-social-media-app.vercel.app",
    content: () => {
      return (
        <p>
          This FullStack social media website is built using{" "}
          <strong>Next.js, React.js, Appwrite, and Tailwind CSS</strong>,
          delivering a seamless and engaging user experience. <br /> <br />
          Powered by <strong>Next.js</strong> and <strong>React.js</strong>, the
          platform ensures fast performance and dynamic content rendering.{" "}
          <strong>Appwrite</strong> handles authentication, database management,
          and file storage, making backend operations smooth and efficient.{" "}
          <br /> <br />
          With a sleek and fully responsive UI designed using{" "}
          <strong>Tailwind CSS</strong>, users can effortlessly connect, share
          posts, and interact in real time. Whether on desktop or mobile, the
          experience remains intuitive and engaging.
          <br /> <br />
        </p>
      );
    },
  },
  {
    description: "FullStack",
    title: "Movie Website",
    src: "/images/movieapp.png",
    ctaText: "Visit",
    ctaLink: "https://sbn-moviewebsite.vercel.app",
    content: () => {
      return (
        <p>
          This movie website is built using{" "}
          <strong>React.js, Next.js, and RapidAPI</strong>, providing users with
          an immersive and dynamic experience for discovering movies. <br />{" "}
          <br />
          Powered by <strong>Next.js</strong>, the platform ensures fast page
          loading, server-side rendering, and smooth navigation.
          <strong>React.js</strong> brings an interactive and responsive UI,
          making browsing movies seamless. <br /> <br />
          With <strong>RapidAPI</strong>, the website fetches real-time movie
          data, including ratings, trailers, and reviews, offering users
          up-to-date information on their favorite films. Whether searching for
          the latest releases or exploring classic hits, the platform provides a
          user-friendly experience. <br /> <br />
        </p>
      );
    },
  },
  {
    description: "FullStack",
    title: "Solar System Company Website",
    src: "/images/solarapp.png",
    ctaText: "Visit",
    ctaLink: "https://sbn-solar-company-website.vercel.app/",
    content: () => {
      return (
        <p>
          This solar system company website is built using{" "}
          <strong>
            React.js, Next.js, Nodemailer, Framer Motion, and Tailwind CSS
          </strong>
          , offering a seamless and visually engaging experience for customers
          interested in solar energy solutions. <br /> <br />
          Powered by <strong>Next.js</strong> and <strong>React.js</strong>, the
          platform ensures fast performance, smooth navigation, and an intuitive
          user experience. <br /> <br />
          <strong>Nodemailer</strong> is integrated to enable customers to send
          inquiries effortlessly, ensuring quick and reliable email
          communication for support and service requests. <br /> <br />
          With <strong>Framer Motion</strong>, the website delivers fluid
          animations and interactive elements, making the browsing experience
          more engaging. The design is enhanced with{" "}
          <strong>Tailwind CSS</strong>, providing a clean, modern, and fully
          responsive UI across all devices. <br /> <br />
        </p>
      );
    },
  },
  {
    description: "FullStack",
    title: "Todo App",
    src: "/images/todoapp.png",
    ctaText: "Visit",
    ctaLink: "https://sbn-todo-app.vercel.app/todos",
    content: () => {
      return (
        <p>
          This Todo app is built using{" "}
          <strong>
            React.js, Next.js, MongoDB, Prisma, NextAuth, and Tailwind CSS
          </strong>
          , providing users with a seamless and secure task management
          experience. <br /> <br />
          Powered by <strong>Next.js</strong> and <strong>React.js</strong>, the
          platform ensures fast performance, smooth navigation, and a dynamic
          user interface. <br /> <br />
          <strong>MongoDB</strong> serves as the database, offering a scalable
          and efficient way to store tasks, while
          <strong>Prisma</strong> acts as the ORM, streamlining database
          interactions with a type-safe approach. <br /> <br />
          <strong>NextAuth</strong> is integrated for authentication, enabling
          secure user logins and protecting user data. <br /> <br />
          Designed with <strong>Tailwind CSS</strong>, the app features a
          modern, clean, and fully responsive UI, ensuring a great experience on
          any device. <br /> <br />
        </p>
      );
    },
  },
  {
    description: "Frontend",
    title: "E-School Website",
    src: "/images/eschoolapp.png",
    ctaText: "Visit",
    ctaLink: "https://sbn-school-testing.vercel.app",
    content: () => {
      return (
        <p>
          This E-School website is built using{" "}
          <strong>Next.js and Tailwind CSS</strong>, providing an intuitive and
          engaging platform for online learning. <br /> <br />
          Powered by <strong>Next.js</strong>, the website delivers fast
          performance, seamless navigation, and an optimized user experience.
          The dynamic frontend ensures a smooth interface for students and
          instructors. <br /> <br />
          Styled with <strong>Tailwind CSS</strong>, the platform features a
          modern, responsive, and visually appealing design, making learning
          accessible on all devices. From course listings to interactive UI
          components, the design is tailored for ease of use and accessibility.{" "}
          <br /> <br />
        </p>
      );
    },
  },
  {
    description: "Frontend",
    title: "Design Website",
    src: "/images/designapp.png",
    ctaText: "Visit",
    ctaLink: "https://sbn-design.vercel.app",
    content: () => {
      return (
        <p>
          This Design System website is built using{" "}
          <strong>Next.js and Tailwind CSS</strong>, offering a comprehensive
          collection of reusable UI components for modern web development.{" "}
          <br /> <br />
          Powered by <strong>Next.js</strong>, the platform ensures fast
          performance, seamless navigation, and an optimized development
          workflow. It provides a structured and scalable approach to UI design.{" "}
          <br /> <br />
          Styled with <strong>Tailwind CSS</strong>, the design system features
          a clean, responsive, and highly customizable interface, allowing
          developers to quickly build beautiful and consistent user experiences.{" "}
          <br /> <br />
          Whether you&apos;re designing web applications or creating new UI
          components, this system provides the flexibility and efficiency needed
          for rapid development. <br /> <br />
        </p>
      );
    },
  },
  {
    description: "FullStack",
    title: "Weather App",
    src: "/images/weatherapp.png",
    ctaText: "Visit",
    ctaLink: "https://sbn-weather-app.vercel.app",
    content: () => {
      return (
        <p>
          This Weather Checking website is built using{" "}
          <strong>React.js, Next.js, RapidAPI, and Tailwind CSS</strong>,
          providing real-time weather updates with a sleek and responsive
          design. <br /> <br />
          Powered by <strong>Next.js</strong> and <strong>React.js</strong>, the
          platform ensures fast performance, smooth navigation, and an intuitive
          user interface for checking weather conditions. <br /> <br />
          <strong>RapidAPI</strong> is integrated to fetch live weather data,
          offering users accurate temperature, humidity, wind speed, and other
          essential weather details for any location worldwide. <br /> <br />
          Styled with <strong>Tailwind CSS</strong>, the website features a
          modern and fully responsive UI, ensuring a seamless experience across
          all devices. <br /> <br />
        </p>
      );
    },
  },
];
