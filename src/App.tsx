import Footer from './components/Footer';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
// import Navbar from './components/Navbar';
import Blog from './components/Blog';
import { useState, useEffect } from 'react';

import { ChakraProvider } from '@chakra-ui/react'
import { Route, Routes, Link, HashRouter } from 'react-router-dom'

const Home = () => (
  <div className="flex-1 p-4">
    <div className="bg-white dark:bg-slate-900 text-stone-900 dark:text-stone-300 justify-center min-h-screen font-inter">
      <div className="justify-center items-center max-w-5xl w-3/4 mx-auto">
        <Intro />
        {/* <div className='flex flex-col'> */}
        {/* <h3 className="underline underline-offset-4 text-xl md:text-7x1 mb:mb-3 font-bold pb-4"> projects </h3> */}
        {/* </div> */}
        <Timeline />
        <Blog />
        <Footer />
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all duration-300 ${scrollPosition > 0 ? 'py-2' : 'py-4'} rounded-full`}>
      <div className="container mx-auto px-2">
        <div className="flex justify-between items-center">
          <a href="/" className="font-bold text-xl">AJ Montajes</a>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
            <li><Link to="/projects" className="text-gray-600 hover:text-gray-900">Projects</Link></li>
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
        <div className='flex'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Portfolio />} />
          </Routes>
          {/*<Navbar />*/}
        </div>
      </HashRouter>
    </ChakraProvider>
  )
}

export default App;
