import portfolio from "../data/portfolio"; // Assuming this is your portfolio data file
import PortfolioItem from "./PortfolioItem";
import "../assets/Portfolio.css";
import { Image } from "@chakra-ui/react";

function Gallery() {
  // Create an image item to include in the portfolio items
  const imageItem = {
    imgUrl: "../assets/working.gif",
    title: "", // Optional, if you want to give a title
    desc: "Profile image", // Description or alt text for the image
    stack: [], // Optional, if there's relevant info
    link: "", // Optional, if there's a relevant link
    isImage: true, // A flag to identify this is a special item (image)
  };

  // Initialize columns with the image item in one of them
  const columns = [[imageItem], [], [], []];

  // Adjust starting index for portfolio items to maintain the pattern
  portfolio.forEach((item, index) => {
    const columnIndex = (index + 1) % 4; // Adjust index to account for the image item
    columns[columnIndex].push(item);
  });

  return (
    <div>
      <h1 className="pt-32 text-center underline justify-center text-4xl md:text-7x1 mb:mb-3 font-young">
        Gallery
      </h1>

      <h3 className="text-center justify-center text-2xl mb-5 font-young">
        Projects, Research, and Miscellaneous Creations
      </h3>

      <div className="pt-5 px-20 items-center justify-center grid grid-cols-3 md:grid-cols-4 gap-4">
        {columns.map((column, index) => (
          <div key={index} className="grid gap-4">
            {column.map((item, itemIndex) =>
              item.isImage ? (
                <Image
                  key={itemIndex}
                  src={item.imgUrl}
                  alt={item.desc}
                  width="350"
                  height="350"
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
