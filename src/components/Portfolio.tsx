// At the top of your Portfolio.js file
import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import { Divider } from "@chakra-ui/react";
import "../assets/Portfolio.css";

function Portfolio() {
  return (
    <div className="flex-1 pt-10 p-4">
      <div className="max-w-screen-fit pt-10 flex items-left justify-left flex-col text-left">
        <h1 className="pb-10 pl-36 items-center justify-center text-3xl md:text-7x1 mb- mb:mb-3 font-young">
          Work in Progress!
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Modified grid container */}
          <div className="masonry-grid">
            {portfolio.map((project, index) => (
              <PortfolioItem
                key={index}
                imgUrl={project.imgUrl}
                title={project.title}
                desc={project.desc}
                stack={project.stack}
                link={project.link}
              />
            ))}
          </div>
        </div>
        <Divider className="pt-10" />
      </div>
    </div>
  );
}

export default Portfolio;
