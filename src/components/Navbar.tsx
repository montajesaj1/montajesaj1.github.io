import React from 'react';

interface SidebarProps {
  items: string[];
  onItemSelected?: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ items, onItemSelected }) => {
  return (
    /* <div */
    /* className="left-5 flex shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed top-2/4 -translate-y-2/4 left-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border */
    /* transform -translate-x-full opacity-0 hover:translate-x-0 hover:opacity-100 transition-transform ease-in-out duration-500" */
    /* > */
    <div
      className="left-5 flex shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed top-2/4 -translate-y-2/4 left-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border"
    >
      <div className="flex flex-col p-4">
        <h1 className='text-xl bold pb-5 px-4 py-2 pt-15 pb-15 underline underline-offset-4'>nav</h1>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path fillRule="evenodd" d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
            </svg> */}
        {items.map((item, index) => (
          <button
            key={index}
            className="text-l pt-3 mb-2 px-4 py-2 text-left rounded hover:bg-slate-100 focus:outline-none focus:bg-slate-500"
            onClick={() => onItemSelected && onItemSelected(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};


export default Sidebar;
/*
 * import React, { useState } from "react";
 * import { RxHamburgerMenu } from "react-icons/rx";
 * import { AiOutlineClose } from "react-icons/ai";
 * const Navbar = () => {
 *   const [isMenuOpen, setIsMenuOpen] = useState(false);
 *   const navLinks = [
 *     { href: "#home", label: "Home" },
 *     { href: "#about-us", label: "About Us" },
 *     { href: "#products", label: "Products" },
 *     { href: "#contact-us", label: "Contact Us" },
 *   ];
 *   return (
 *     <>
 *       <header className="sm:px-8 px-4 py-2 z-10 w-full">
 *         <nav className="flex justify-between items-center max-container">
 *           <a href="/" className="text-3xl font-bold">
 *             Logo
 *           </a>
 *           <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
 *             {navLinks.map((item) => (
 *               <li key={item.label}>
 *                 <a
 *                   href={item.href}
 *                   className="font-montserrat leading-normal text-lg text-slate-gray"
 *                 >
 *                   {item.label}
 *                 </a>
 *               </li>
 *             ))}
 *           </ul>
 *           <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
 *             <a href="/">Sign in</a>
 *             <span>/</span>
 *             <a href="/">Explore now</a>
 *           </div>
 *           <div
 *             className="hidden max-lg:block cursor-pointer"
 *             onClick={() => {
 *               setIsMenuOpen(!isMenuOpen);
 *             }}
 *           >
 *             <RxHamburgerMenu className="text-4xl" />
 *           </div>
 *         </nav>
 *       </header>
 *       {isMenuOpen && (
 *         <div>
 *           <nav className="fixed top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-slate-100  ">
 *             <div
 *               className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
 *               onClick={() => {
 *                 setIsMenuOpen(!isMenuOpen);
 *               }}
 *             >
 *               <AiOutlineClose className="text-4xl" />
 *             </div>
 *             <ul className=" lg:hidden flex flex-col items-center justify-center h-full ">
 *               {navLinks.map((item) => (
 *                 <li key={item.label}>
 *                   <a
 *                     href={item.href}
 *                     className="font-montserrat leading-normal text-lg text-slate-gray"
 *                   >
 *                     {item.label}
 *                   </a>
 *                 </li>
 *               ))}
 *             </ul>
 *           </nav>
 *         </div>
 *       )}
 *     </>
 *   );
 * };
 * export default Navbar;export function NavbarSimple() {
 *   const [openNav, setOpenNav] = React.useState(false);
 *
 *   const handleWindowResize = () =>
 *     window.innerWidth >= 960 && setOpenNav(false);
 *
 *   React.useEffect(() => {
 *     window.addEventListener("resize", handleWindowResize);
 *
 *     return () => {
 *       window.removeEventListener("resize", handleWindowResize);
 *     };
 *   }, []);
 *
 *   return (
 *     <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
 *       <div className="flex items-center justify-between text-blue-gray-900">
 *         <Typography
 *           as="a"
 *           href="#"
 *           variant="h6"
 *           className="mr-4 cursor-pointer py-1.5"
 *         >
 *           Material Tailwind
 *         </Typography>
 *         <div className="hidden lg:block">
 *           <NavList />
 *         </div>
 *         <IconButton
 *           variant="text"
 *           className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
 *           ripple={false}
 *           onClick={() => setOpenNav(!openNav)}
 *         >
 *           {openNav ? (
 *             <XMarkIcon className="h-6 w-6" strokeWidth={2} />
 *           ) : (
 *             <Bars3Icon className="h-6 w-6" strokeWidth={2} />
 *           )}
 *         </IconButton>
 *       </div>
 *       <Collapse open={openNav}>
 *         <NavList />
 *       </Collapse>
 *     </Navbar>
 *   );
 * }
 *
 * export default NavbarSimple; */
