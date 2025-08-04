import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex items-center gap-8">
        <Link
          to="/"
          className={`text-lg font-semibold transition-colors  ${location.pathname === '/' ? 'text-purple-600' : 'hover:text-purple-600 '
            }`}>
          Home
        </Link>
        <Link
          to="/about"
          className={`text-lg font-semibold transition-colors ${location.pathname === '/about' ? 'text-purple-600' : 'hover:text-purple-600'
            }`}>
          About
        </Link>
        <a href="https://drive.google.com/file/d/1y3ZacI9g09RIwVam50aWRL_hM4mb3dfF/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors text-lg font-semibold">
          Resume
        </a>
      </div>
      <div className='m-8 flex items-center gap-4 text-4xl'>
        <a
          href="https://www.linkedin.com/in/austin-tan-10a320234/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/austint903">
          <FaGithub className="hover:text-purple-600 transition-colors" />
        </a>
        <a
          href="mailto:austintan2006@gmail.com" className="hover:text-purple-600 transition-colors"
        >
          <MdEmail />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;