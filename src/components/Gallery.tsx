import portfolio from "../data/portfolio"; // Correct import path
import PortfolioItem from "./PortfolioItem"; // Component to display each portfolio item
import "../assets/Portfolio.css";
import { Image } from "@chakra-ui/react";

// Directly use the Item interface from the portfolio data file
// If the Item interface is defined in portfolio.ts, consider exporting it from there and importing it here.
interface Item {
  title: string;
  imgUrl: string;
  desc: string;
  stack: string[];
  link: string;
  isImage?: boolean;
}

function Gallery() {
  // Initialize columns with the image item in one of them
  const columns: Item[][] = [[], [], []];

  // Adjust starting index for portfolio items to maintain the pattern
  portfolio.forEach((item, index) => {
    const columnIndex = (index + 1) % 3; // Adjust index to account for the image item
    columns[columnIndex].push(item); // No need for type assertion now
  });

  return (
    <div className="pb-20">
      <h1 className="pt-32 text-center underline justify-center text-4xl md:text-7x1 mb:mb-3 font-young">
        Gallery
      </h1>

      <h3 className="text-center justify-center text-2xl mb-5 font-young">
        Projects, Research, and Miscellaneous Creations
      </h3>

      <div className="px-20 justify-center grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 gap-3 items-start">
        {columns.map((column, index) => (
          <div key={index} className="grid gap-5">
            {column.map((item, itemIndex) =>
              item.isImage ? (
                <Image
                  key={itemIndex}
                  src={item.imgUrl}
                  alt={item.desc}
                  width="460"
                  height="460"
                />
              ) : (
                <PortfolioItem
                  key={itemIndex}
                  imgUrl={item.imgUrl}
                  title={item.title}
                  desc={item.desc}
                  stack={item.stack}
                  link={item.link}
                />
              ),
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
