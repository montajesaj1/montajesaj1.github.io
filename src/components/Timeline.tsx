/* import React from 'react'; */
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';

function Timeline() {
  return (
    <div className="place-items-center">
      <h3 className="pb-2 underline underline-offset-4 text-xl md:text-7x1 mb:mb-3 font-bold"> journey </h3>
      <div className="flex flex-col md:flex-row my-1">
        <div className="max-w-prose justify-items-center">
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

