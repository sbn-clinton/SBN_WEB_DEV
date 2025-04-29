"use client";

import { motion } from "framer-motion";
import { FaNodeJs, FaReact } from "react-icons/fa6";
import SplitText from "./ui/SplitText";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiAppwrite,
  SiAuth0,
  SiExpress,
  SiMongodb,
  SiMongoosedotws,
  SiPassport,
  SiPostman,
  SiPrisma,
  SiSqlite,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { icon: <FaReact />, name: "React.js" },
      { icon: <RiJavascriptFill />, name: "Javascript" },
      { icon: <SiTypescript />, name: "Typescript" },
      { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { icon: <SiAuth0 />, name: "NextAuth" },
      { icon: <SiPassport />, name: "Passport.Js" },
      { icon: <SiPostman />, name: "PostMan" },
      { icon: <TbBrandFramerMotion />, name: "Framer Motion" },
    ],
  },
  {
    title: "Databases & ORM",
    skills: [
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiMongoosedotws />, name: "Mongoose" },
      { icon: <SiPrisma />, name: "Prisma" },
      { icon: <SiSqlite />, name: "SQLite" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { icon: <FaNodeJs />, name: "Node.Js" },
      { icon: <SiExpress />, name: "Express.Js" },
      { icon: <RiNextjsFill />, name: "Next.Js" },
      { icon: <SiAppwrite />, name: "Appwrite" },
    ],
  },
];

const MySkill = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-4 gap-5 py-5 md:py-10">
      <div className="flex flex-col gap-4 md:gap-8 w-full">
        <SplitText
          text="#My Skills"
          className="text-2xl font-bold text-[#72ecff] mb-2 md:text-4xl self-end md:self-start"
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          threshold={0.2}
          rootMargin="-50px"
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full md:max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-2 md:gap-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h1 className="md:text-xl font-bold text-stone-400 mb-2">
                {category.title}
              </h1>
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex items-center gap-1 p-2 rounded border"
                >
                  <div className="w-8 h-8 flex items-center justify-center text-stone-400 md:text-xl">
                    {skill.icon}
                  </div>
                  <p className="text-stone-400 text-sm md:text-base font-serif">
                    {skill.name}
                  </p>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkill;
