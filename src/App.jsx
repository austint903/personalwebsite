import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./components/About";
import Navbar from './components/Navbar';
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills"
import About1 from "./components/About1"
import Experiences from './components/Experiences';

const App = () => {
  return (
    <Router>
    <div className="relative min-h-screen overflow-hidden">
     
      <div className="fixed inset-0 w-full h-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>
      
     
      <div className="relative z-10 h-screen overflow-y-auto">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <About />
                <Experiences/>
                <Projects />
                <Skills />
                <Resume />
               
              </>
            } />
            <Route path="/about" element={<About1 />} />
           
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;