import React from "react";
import { useInView } from "react-intersection-observer";

interface TimelineItemProps {
  year: string;
  title: string;
  duration: string;
  details: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  duration,
  details,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Only trigger this hook once
    threshold: 0.1, // Percentage of the item that needs to be in view
  });

  return (
    <ol
      ref={ref}
      className={`pl-4 max-w-screen-lg flex hover:bg-slate-100 rounded-md flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700 transition-all duration-500 transform ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
    >
      <li className="mb-10">
        <div className="absolute w-3 h-3 bg-stone-700 rounded-full mt-1.5  -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
        <p className="flex flex-wrap gap-4 flex-row items-center text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-poppins font-medium text-white dark:text-stone-900 bg-stone-700 dark:bg-white rounded-md">
            {year}
          </span>
          <h3 className="text-lg font-young text-stone-900 dark:text-white">
            {title}
          </h3>
          <div className="my-1 text-sm font-poppins leading-none text-stone-400 dark:text-stone-500">
            {duration}
          </div>
        </p>
        <p className="my-2 text-base font-poppins text-stone-500 dark:text-stone-400">
          {details}
        </p>
      </li>
    </ol>
  );
};

export default TimelineItem;
