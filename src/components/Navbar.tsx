import React from 'react';


interface SidebarProps {
  items: string[];
  onItemSelected?: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ items, onItemSelected }) => {
  return (
    <div 
      className="left-5 flex shrink-0 grow-0 justify-around gap-4 border-t border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed top-2/4 -translate-y-2/4 left-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border 
      transform -translate-x-full opacity-0 hover:translate-x-0 hover:opacity-100 transition-transform ease-in-out duration-500"
    >
      <div className="flex flex-col p-4">
        <h1 className='text-xl bold pb-5 px-4 py-2 pt-15 pb-15 underline underline-offset-4'>AJ</h1>
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
