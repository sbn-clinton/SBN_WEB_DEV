import SplitText from "./ui/SplitText";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row  max-w-6xl mx-auto px-4 gap-5 py-5 md:py-10 ">
      <div className="flex flex-col  gap-4 md:gap-8 ">
        <SplitText
          text="#About Me"
          className="text-2xl font-bold text-[#72ecff] mb-2 md:text-4xl self-start"
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          threshold={0.2}
          rootMargin="-50px"
        />
        <p className="text-stone-400 text-sm md:text-base font-serif max-w-3xl text-start">
          Hello there! I am Somto, a full stack developer and designer based in
          Nigeria. I have been working with the web for the past few years and
          have been working on a variety of projects ranging from websites to
          web apps. I am passionate about creating user-friendly and visually
          appealing websites that are easy to navigate and understand. I am also
          a strong advocate for accessibility and have worked on projects that
          ensure accessibility for all users.
        </p>
        <p className="text-stone-400 text-sm md:text-base font-serif max-w-3xl text-start">
          I am currently working on a project that aims to provide a platform
          for small businesses to connect with potential clients and partners.
          The project is still in development and will be available soon.
        </p>
      </div>
    </div>
  );
};

export default About;
