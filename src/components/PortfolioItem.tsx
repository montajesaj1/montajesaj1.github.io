import React from 'react';
import { useInView } from 'react-intersection-observer';

interface PortfolioItemProps {
    title: string;
    imgUrl: string;
    desc: string;
    stack: string[];
    link: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, imgUrl, desc, stack, link}) => {
    const [ref, inView] = useInView({
        triggerOnce: false, // Only trigger this hook once
        threshold: 0.1,    // Percentage of the item that needs to be in view
    });

    return (
        <a href={link}>
            <div 
                ref={ref}
                href={link}
                className={`border-2 border-stone-300 rounded-md overflow-hidden hover:bg-slate-100 hover:shadow-lg transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
            >
                <img src={imgUrl}
                     alt="portfolio"
                     className="w-full h-48 md:h-30 object-cover cursor-pointer"
                />
                <div className="w-full h-48 p-4">
                    <h5 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h5>
                    <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                        {stack && stack.length > 0 && stack.map((item, index) => {
                            return (
                                <div>
                                    <span className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 inline-block text-xs px-3 py-1 mb-1 font-semibold border-2 border-stone-900 rounded-md" key={index}> {item} </span>
                                </div>
                            );
                        })}
                    </p>
                    <p className="text-sm pt-10">{desc}</p>
                </div>
            </div>
        </a>
    );
}

export default PortfolioItem;
