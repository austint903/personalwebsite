import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="mb-16 flex items-center justify-between py-8 animate-fadeIn">
      <div className="flex items-center gap-10">
        <Link
          to="/"
          className={`text-base font-light tracking-wide transition-all duration-300 relative group ${
            location.pathname === '/' ? 'text-lofi-darkBrown' : 'text-lofi-brown hover:text-lofi-darkBrown'
          }`}>
          Home
          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-lofi-accent transition-transform duration-300 ${
            location.pathname === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          }`}></span>
        </Link>
        <Link
          to="/about"
          className={`text-base font-light tracking-wide transition-all duration-300 relative group ${
            location.pathname === '/about' ? 'text-lofi-darkBrown' : 'text-lofi-brown hover:text-lofi-darkBrown'
          }`}>
          About
          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-lofi-accent transition-transform duration-300 ${
            location.pathname === '/about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
          }`}></span>
        </Link>
        <a
          href="https://drive.google.com/file/d/14Y8jKr71trlgo99hE7JVZKXdsFyuQJUt/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lofi-brown hover:text-lofi-darkBrown transition-all duration-300 text-base font-light tracking-wide relative group">
          Resume
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lofi-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
      </div>
      <div className='flex items-center gap-6 text-2xl'>
        <a
          href="https://www.linkedin.com/in/austin-tan-10a320234/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lofi-brown hover:text-lofi-darkBrown transition-all duration-300 hover:scale-110 transform"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/austint903"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lofi-brown hover:text-lofi-darkBrown transition-all duration-300 hover:scale-110 transform"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:austintan2006@gmail.com"
          className="text-lofi-brown hover:text-lofi-darkBrown transition-all duration-300 hover:scale-110 transform"
        >
          <MdEmail />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;