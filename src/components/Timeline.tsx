import React from 'react';
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';

function Timeline() {
   return (
      <div className="pt-10 pb-1">
         <div className="flex flex-col md:flex-row justify-left my-20">
            <div className="w-full md:w-7/12">
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
      </div>
   )
}

export default Timeline;

