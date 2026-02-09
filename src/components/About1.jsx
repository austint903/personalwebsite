import React from 'react';
import headshot from "../assets/Austin_Tan_Headshot copy.png";

const About1 = () => {
  return (
    <div className="container mx-auto px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-16 flex-col md:flex-row">
          <div className="w-full md:w-2/5 flex justify-center animate-fadeIn">
            <div className="relative group">
              <div className="absolute -inset-1 bg-lofi-accent rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <img
                src={headshot}
                alt="Austin Tan"
                className="relative rounded-2xl shadow-xl h-80 w-auto object-cover border-4 border-lofi-sand transform transition duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="w-full md:w-3/5 flex flex-col gap-6 animate-slideUp">
            <h2 className="text-5xl font-light text-lofi-deepBrown tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}>
              Hi! I'm Austin!
            </h2>

            <div className="space-y-5 text-lofi-darkBrown leading-relaxed">
              <p className="text-base font-light">
                I'm currently a student at New York University majoring in Computer Science set to graduate in May 2027. My current interests include systems, game engines, web development, and artificial intelligence. I have a passion for learning, building, and coding.
              </p>

              <p className="text-base font-light">
                Outside of programming, you can find me playing piano, practicing jiu-jitsu, or just laying in bed watching Netflix.
              </p>

              <p className="text-base font-light">
                I still have a lot to learn, and I'm always looking for new opportunities to grow, collaborate, and challenge myself in the world of tech.
              </p>
            </div>

            <a
              href="mailto:austintan2006@gmail.com"
              className="inline-flex items-center gap-2 text-base font-light text-lofi-brown hover:text-lofi-darkBrown transition-all duration-300 mt-4 group w-fit"
            >
              <span className="relative">
                Connect with me
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lofi-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;
