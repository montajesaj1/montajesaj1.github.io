import React from "react";
import { Image } from "@chakra-ui/react";

// Define a type for the project information
type Project = {
  title: string;
  imgUrl: string;
  description: string;
  link: string;
};

// Sample data for currently working on projects
const currently: Project[] = [
  {
    title: "CoPilot @ Visual Cognition Lab",
    imgUrl: "../assets/code.png", // Update the path as necessary
    link: "https://example.com/project1",
  },
  {
    title: "Operations Engineer @ CEDaR Space",
    imgUrl: "path/to/image2.jpg", // Update the path as necessary
    link: "https://example.com/project2",
  },
];

const Currently: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currently.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
          >
            <Image src={project.imgUrl} width="200" height="200" />
            <div className="p-4">
              <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">
                {project.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Currently;
