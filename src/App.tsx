import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Timeline from "./components/Timeline";
// import Navbar from './components/Navbar';
// import Blog from './components/Blog';
import Gallery from "./components/Gallery";
// import { useState, useEffect } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes, Link, HashRouter } from "react-router-dom";

const Home = () => (
  <div className="flex-1 p-4 text-left">
    <div className="bg-white dark:bg-slate-900 text-stone-900 dark:text-stone-300 justify-center min-h-screen font-display">
      <div className="justify-center items-center max-w-5xl w-3/4 mx-auto">
        <Intro />
        {/* <div className='flex flex-col'> */}
        {/* <h3 className="underline underline-offset-4 text-xl md:text-7x1 mb:mb-3 font-bold pb-4"> projects </h3> */}
        {/* </div> */}
        <Timeline />
        <Footer />
      </div>
    </div>
  </div>
);

const Navbar = () => {
  // const [scrollPosition, setScrollPosition] = useState(0);
  //
  //  useEffect(() => {
  //    const handleScroll = () => {
  //      const position = window.pageYOffset;
  //      setScrollPosition(position);
  //    };

  // window.addEventListener("scroll", handleScroll, { passive: true });

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);
  //

  return (
    <nav className="py-5 fixed top-3 left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-stone-50 shadow-md transition-all duration-300 py-5 rounded-full z-50 border-stone-500">
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
                to="/gallery"
                className="font-young text-gray-600 hover:text-gray-900"
              >
                Gallery
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
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
          {/*<Navbar />*/}
        </div>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
