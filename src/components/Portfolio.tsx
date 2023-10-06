import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

function Portfolio() {
    return (
        
        <div className="flex items-left justify-left flex-col text-left pb-10">
            <h2 className="text-3xl md:text-7x1 mb-1 mb:mb-3 font-semibold pb-5">Featured Projects</h2>
        <div className="flex flex-col md:flex-row items center justify-center">
            <br></br>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {portfolio.map(project => (
                    <PortfolioItem 
                        imgUrl={project.imgUrl}
                        title={project.title}
                        desc={project.desc}
                        stack={project.stack}
                        link={project.link}
                    />
                ))}
        </div>
    </div>
        </div>
   )


}

export default Portfolio;
