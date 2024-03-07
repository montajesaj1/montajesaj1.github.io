/* import React from 'react'; */
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";

import { Image } from "@chakra-ui/react";

function Timeline() {
  return (
    <div className="pt-20 place-items-center">
      <h3 className="pl-12 justify-center text-3xl md:text-7x1 mb:mb-3 font-young">
        My journey so far!
      </h3>
      <Image
        // src="https://plato.stanford.edu/entries/frege-logic/sec-3-1-Ga.svg"
        src="../assets/journey.svg"
        alt="Profile image"
        width="200"
        height="200"
      />

      <div className="flex flex-col md:flex-row my-1 pt-10">
        <div className="max-w-prose">
          {timeline.map((item) => (
            <TimelineItem
              year={item.year}
              title={item.title}
              duration={item.duration}
              details={item.details}
            />
          ))}
        </div>
        <Image
          // src="https://plato.stanford.edu/entries/frege-logic/sec-3-1-Ga.svg"
          src="../assets/adventure.svg"
          alt="Profile image"
          width="300"
          height="300"
        />
      </div>
    </div>
  );
}

export default Timeline;
