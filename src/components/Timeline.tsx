import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import { Image } from "@chakra-ui/react";

function Timeline() {
  return (
    <div className="pt-28 flex flex-1 items-center justify-center min-w-full min-h-screen p-4">
      <div className="flex flex-col items-center justify-center bg-white dark:bg-slate-900 text-stone-900 dark:text-stone-300 w-full max-w-5xl px-10 py-4">
        <div className="place-items-center">
          <h3 className="pl-12 justify-center text-3xl mb-3 font-young">
            My journey so far!
          </h3>
          <Image
            src="../assets/journey.svg"
            alt="Profile image"
            width="200"
            height="200"
          />

          {/* Experience Section */}
          <h3 className="pl-2 pt-10 justify-center text-2xl mb-3 font-young">
            Experience
          </h3>
          <div className="max-w-prose">
            {timeline.map((item, index) => (
              <TimelineItem
                key={`exp-${index}`}
                year={item.year}
                title={item.title}
                duration={item.duration}
                details={item.details}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
