import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import About from "./components/About";
import Navbar from './components/Navbar';
import Projects from "./components/Projects";
import Skills from "./components/Skills"
import About1 from "./components/About1"
import Experiences from './components/Experiences';
import CafeDecor from './components/CafeDecor';

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen overflow-hidden">

        <div className="fixed inset-0 w-full h-full bg-lofi-cream">
          <div className="absolute inset-0 grain-texture"></div>

          <div className="absolute inset-0 opacity-30"
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B7355' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
               }}>
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-lofi-peach/30 via-lofi-sand/20 to-lofi-sage/15"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-lofi-honey/15 via-transparent to-lofi-terracotta/10"></div>

          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[900px] h-[500px] bg-gradient-radial from-lofi-honey/20 to-transparent rounded-full blur-3xl"></div>

          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-lofi-terracotta/20 to-lofi-warmTan/15 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-lofi-rust/15 to-lofi-honey/20 rounded-full blur-3xl animate-float"
               style={{ animationDelay: '2s', animationDuration: '8s' }}></div>

          <div className="absolute top-1/2 left-20 w-64 h-64 bg-lofi-caramel/12 rounded-full blur-2xl animate-glow"></div>
          <div className="absolute bottom-1/3 right-32 w-72 h-72 bg-lofi-rust/10 rounded-full blur-2xl animate-glow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-lofi-honey/10 rounded-full blur-3xl animate-glow" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-lofi-terracotta/12 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <CafeDecor />

        <div className="relative z-10 h-screen overflow-y-auto">
          <div className="container mx-auto px-6 max-w-7xl">
            <Navbar />
            <Routes>
              <Route path="/" element={
                <>
                  <About />
                  <Experiences/>
                  <Projects />
                  <Skills />
                </>
              } />
              <Route path="/about" element={<About1 />} />
            </Routes>
          </div>
        </div>
      </div>
      <Analytics />
    </Router>
  )
}

export default App;