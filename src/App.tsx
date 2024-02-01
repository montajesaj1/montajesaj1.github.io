import Footer from './components/Footer';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
// import Navbar from './components/Navbar';
import Blog from './components/Blog';

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

const Navbar = () => (

  <div
    className="fixed top-0 left-0 right-0 bg-white shadow-md"
    style={{ zIndex: 999 }}
  >
    <div className="max-w-screen-md mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        <ul className="flex space-x-4">
          <li className="font-bold">
            <Link to="/home">Home</Link>
          </li>
          <li className="font-bold">
            <Link to="/projects">Projects</Link>
          </li>
          {/* Add more navigation links here */}
        </ul>
      </div>
    </div>
  </div>


);

function App() {

  return (
    <ChakraProvider>
      <HashRouter>
        <div className='flex h-screen'>
          <Navbar />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/projects' element={<Portfolio />} />
          </Routes>
          {/*<Navbar />*/}
        </div>
      </HashRouter>
    </ChakraProvider>
  )
}

export default App;
