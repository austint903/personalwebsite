import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi";

const About = () => {
  return (
    <div className="flex flex-col items-center min-h-[40vh] justify-center py-20 animate-fadeIn">
      <p className="text-lofi-brown text-sm font-light tracking-widest animate-slideUp mb-4">
        *temporary website*
      </p>
      <div className="relative">
        <h1 className="font-light text-8xl text-lofi-deepBrown tracking-tight pb-3 animate-slideUp"
            style={{ fontFamily: "'Playfair Display', serif" }}>
          {"Austin Tan".split("").map((char, i) => (
            <span
              key={i}
              className="inline-block transition-transform duration-300 ease-out hover:-translate-y-3"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <div className="h-1 w-32 bg-lofi-accent mx-auto mt-6 rounded-full animate-glow"></div>
      </div>
      <div className="flex items-center gap-5 mt-8 animate-slideUp"
           style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
        <a
          href="https://www.linkedin.com/in/austin-tan-10a320234/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-lofi-brown/30 text-lofi-brown hover:text-lofi-darkBrown hover:border-lofi-darkBrown transition-all duration-300 text-sm font-light tracking-wide"
        >
          <FaLinkedin className="text-base" />
          LinkedIn
        </a>
        <a
          href="https://github.com/austint903"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-lofi-brown/30 text-lofi-brown hover:text-lofi-darkBrown hover:border-lofi-darkBrown transition-all duration-300 text-sm font-light tracking-wide"
        >
          <FaGithub className="text-base" />
          GitHub
        </a>
        <a
          href="mailto:tan.austin0903@gmail.com"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-lofi-brown/30 text-lofi-brown hover:text-lofi-darkBrown hover:border-lofi-darkBrown transition-all duration-300 text-sm font-light tracking-wide"
        >
          <MdEmail className="text-base" />
          Email
        </a>
        <a
          href="/Austin_Tan_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-lofi-brown/30 text-lofi-brown hover:text-lofi-darkBrown hover:border-lofi-darkBrown transition-all duration-300 text-sm font-light tracking-wide"
        >
          <HiDocumentText className="text-base" />
          Resume
        </a>
      </div>
    </div>
  )
}

export default About
