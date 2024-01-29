/* import React from 'react'; */
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';

function Timeline() {
   return (
      <div className="flex flex-col md:flex-row justify-left my-1">
         <h3 className="pr-8 underline underline-offset-4 text-xl md:text-7x1 mb:mb-3 font-bold"> journey </h3>
         <div className="max-w-screen-sm">
            {timeline.map(item => (
               <TimelineItem
                  year={item.year}
                  title={item.title}
                  duration={item.duration}
                  details={item.details}
               />
            ))}
         </div>
      </div>

   )
}

export default Timeline;

