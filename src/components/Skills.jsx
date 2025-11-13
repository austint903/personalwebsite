import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const Skills = () => {
  const skills = [
    { icon: FaReact, name: "React", delay: 0 },
    { icon: SiTypescript, name: "TypeScript", delay: 0.1 },
    { icon: FaPython, name: "Python", delay: 0.2 },
    { icon: IoLogoJavascript, name: "JavaScript", delay: 0.3 },
  ];

  return (
    <div className="py-20">
      <h2 className="font-light py-10 text-center text-5xl text-lofi-deepBrown tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}>
        Technical Skills
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="group relative rounded-2xl border-2 border-lofi-rust/30 p-8
                        bg-gradient-to-br from-lofi-peach/60 to-lofi-warmTan/50 backdrop-blur-sm
                        hover:border-lofi-terracotta hover:bg-gradient-to-br hover:from-lofi-honey/60 hover:to-lofi-peach/60
                        transition-all duration-500 transform hover:scale-110 hover:-translate-y-2
                        shadow-md hover:shadow-xl animate-float"
              style={{
                animationDelay: `${skill.delay}s`,
                animationDuration: `${6 + index * 0.5}s`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-lofi-honey/20 to-lofi-terracotta/15 rounded-2xl
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <Icon className="text-6xl text-lofi-rust group-hover:text-lofi-espresso transition-colors duration-300 relative z-10" />

              <p className="text-center text-sm font-light text-lofi-mocha mt-3 tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                {skill.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;