import { Intro } from "@/components/Intro";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MySkill from "@/components/MySkill";
import { ContactMeForm } from "@/components/ContactMeForm";
import { Projects } from "@/components/Projects";
import SplitText from "@/components/ui/SplitText";
import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Home() {
  return (
    <div className="relative  w-full space-y-4 md:space-y-8 ">
      <section id="hero" className="">
        <Intro />
        <Hero />
      </section>
      <section id="about" className="">
        <About />
      </section>
      <section id="mySkill" className="">
        <MySkill />
      </section>
      <section id="myProjects" className="py-2">
        <div className="flex flex-col gap-4 md:gap-8 w-full">
          <div className="flex flex-col gap-2 md:4 items-center justify-center">
            <SplitText
              text=" #My Projects"
              className="text-2xl font-bold text-stone-300 md:text-4xl self-center"
              delay={150}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              threshold={0.2}
              rootMargin="-50px"
            />
            <p className="text-stone-400 text-sm md:text-lg font-serif text-center">
              Tap on the project to view more details and <br /> learn more
              about it.
            </p>
          </div>

          <Projects />
        </div>
      </section>
      <section id="contactMe" className="">
        <ContactMeForm />
      </section>
      <FloatingNav />
    </div>
  );
}
