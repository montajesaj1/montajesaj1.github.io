import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';

import {
  Divider,
} from '@chakra-ui/react'

function Portfolio() {
  return (

    <div className="flex-1 pt-10 p-4">
      <div className="max-w-screen-fit pt-10 flex items-left justify-left flex-col text-left">
        <div className="flex flex-col md:flex-row items-center justify-center">
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
        <Divider className="pt-10" />
      </div>
    </div>
  )


}

export default Portfolio;
