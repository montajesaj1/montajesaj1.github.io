import Footer from './components/Footer';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
// import Navbar from './components/Navbar';
import Blog from './components/Blog';

import { ChakraProvider } from '@chakra-ui/react'
// import { Routes, Route } from 'react-router-dom'

function App() {

  return (
	  <ChakraProvider>
		  <div className='flex h-screen'>
			  {/*<Navbar />*/}
			  <div className="flex-1 p-4">
				  <div className="bg-white dark:bg-slate-900 text-stone-900 dark:text-stone-300 justify-center min-h-screen font-inter">
					  <div className="justify-center items-center max-w-5xl w-3/4 mx-auto">
						  <Intro />
						  {/* <div className='flex flex-col'> */}
							  {/* <h3 className="underline underline-offset-4 text-xl md:text-7x1 mb:mb-3 font-bold pb-4"> projects </h3> */}
								{/* </div> */}
						  <Timeline />
							<Portfolio />
							<Blog />
						  <Footer />
					  </div>
				  </div>
			  </div>
		  </div>
	  </ChakraProvider>
  )
}

export default App;
