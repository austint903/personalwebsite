import React from 'react';
import spongebob from "../assets/spongebob.png";

const About1 = () => {
  return (
    <div className="container mx-auto px-4 flex items-center justify-center gap-8">
      <div className="w-1/3">
        <img src={spongebob} alt="Spongebob" className="max-w-full h-80" />
      </div>
      <div className="w-1/3 flex flex-col">
        <h2 className="text-4xl font-bold">Hi! I'm Austin!</h2>
        <p className="py-4 text-lg">
          I'm currently a student at New York University majoring in Computer Science. My current interests include systems, game engines, web development, and artificial intelligence. I have a passion for learning, building, and coding.
        </p>
        <p className="py-3 text-lg">
          Outside of programming, you can find me playing piano, practicing jiu-jitsu, or just laying in bed watching Netflix.
        </p>
        <p className="py-3 text-lg">
          I still have a lot to learn, and I'm always looking for new opportunities to grow, collaborate, and challenge myself in the world of tech.
        </p>
        <a 
          href="mailto:austintan2006@gmail.com" 
          className="text-lg text-blue-600 underline hover:text-blue-800"
        >
          Connect with me!
        </a>
      </div>
    </div>
  );
};

export default About1;
