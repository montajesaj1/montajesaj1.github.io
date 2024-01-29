import React from 'react';
/*
 * interface SidebarProps {
 *     items: string[];
 *     onItemSelected?: (item: string) => void;
 * }
 *  */

const Navbar: React.FC = () => {
    return (
        /* <div */
        /* className="left-5 flex shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed top-2/4 -translate-y-2/4 left-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border */
        /* transform -translate-x-full opacity-0 hover:translate-x-0 hover:opacity-100 transition-transform ease-in-out duration-500" */
        /* > */
        <div
            className="border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg
                       dark:border-slate-600/60 dark:bg-slate-800/50 fixed top-2/4 -translate-y-2/4 right-20 min-h-[auto] min-w-[auto] flex-col rounded-lg border"
        >
            <div className="flex flex-col p-5">
                <h1 className='text-xl bold pb-5 pt-15 pb-15 underline underline-offset-4'>nav</h1>
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path fillRule="evenodd" d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clipRule="evenodd" />
                    </svg> */}
                <ul>
                    <a href="/">
                        <li className="text-l pt-3 mb-2 text-left rounded hover:bg-slate-100 focus:outline-none focus:bg-slate-500">Home</li>
                    </a>
                    <a href="../pages/projects">
                        <li className="text-l pt-3 mb-2 text-left rounded hover:bg-slate-100 focus:outline-none focus:bg-slate-500">Projects</li>
                    </a>
                </ul>

                {/* {items.map((item, index) => ( */}
                {/* <button */}
                {/* key={index} */}
                {/* className="text-l pt-3 mb-2 px-4 py-2 text-left rounded hover:bg-slate-100 focus:outline-none focus:bg-slate-500"
                    onClick={() => onItemSelected && onItemSelected(item)}
                    >
                  */}
                {/* {item} */}
                {/* </button> */}
                {/* ))} */}
            </div>
        </div>
    );
};


export default Navbar;
