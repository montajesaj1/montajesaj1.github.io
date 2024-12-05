import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Timeline from "./components/Timeline";
// import Navbar from './components/Navbar';
import Blog from "./components/Blog";
import Gallery from "./components/Gallery";
// import { useState, useEffect } from "react";
import Resume from "./components/Resume"

import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes, Link, HashRouter } from "react-router-dom";

const Home = () => (
  <div className="flex flex-1 items-center justify-center min-w-1.5 min-h-screen p-4">
    <div className="flex flex-col items-center justify-center bg-white dark:bg-slate-900 text-stone-900 dark:text-stone-300 w-full max-w-5xl px-10 py-4">
      <Intro />
      <iframe src="./assets/aj_resume.pdf" width="100%" height="100%" />
      <Footer />
    </div>
  </div>
);

// const Currently = () => {
//   return (
//     <div className="flex-1 pt-10 p-4">
//       <div className="max-w-screen-fit pt-10 flex items-left justify-left flex-col text-left">
//         <h1 className="pb-10 pl-36 items-center justify-center text-3xl md:text-7x1 mb- mb:mb-3 font-young">
//           Work in Progress!
//         </h1>
//         <div className="flex flex-col md:flex-row items-center justify-center">
//           {/* Modified grid container */}
//           <div className="masonry-grid"></div>
//         </div>
//       </div>
//     </div>
//   );
// };
//

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 70);
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`py-5 ${isScrolled ? "min-w-fit" : "min-w-full"} ${isScrolled ? "rounded-full" : "rounded-none"} bg-opacity-90 bg-white fixed top-3 left-1/2 transform -translate-x-1/2 flex items-center justify-center shadow-md transition-all duration-1000  z-50 border-stone-500`}
    >
      <div className="container mx-12">
        <div className="font-young flex justify-between items-center">
          <a href="/" className="font-bold text-xl">
            A/J
          </a>
          <ul className="pl-20 flex space-x-4">
            <li>
              <Link
                to="/"
                className="font-young text-gray-600 hover:text-gray-900"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                className="font-young text-gray-600 hover:text-gray-900"
              >
                Resume
              </Link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

function App() {
  return (
    <ChakraProvider>
      <HashRouter>
        <div className="flex">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Timeline />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
          {/*<Navbar />*/}
        </div>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
