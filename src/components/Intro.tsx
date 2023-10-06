import React from 'react';
import { useInView } from 'react-intersection-observer';

function Intro() {
    const [ref, inView] = useInView({
        triggerOnce: false, // Only trigger this hook once
        threshold: 0.1,    // Percentage of the item that needs to be in view
    });

    return (
        <div 
            ref={ref}
            className={`flex items-left justify-left flex-col text-left pt-20 pb-20 transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
        >
            <h1 className="text-3xl md:text-7x1 mb-1 mb:mb-3 font-bold">Hey, my name is AJ.</h1>
            <p className="text-base mb:text-xl mb-3 font-medium"> Operations Assistant | Aspiring Data Scientist | Cognitive Systems (BA) </p>
            <p className="text-sm max-w-prose leading-6">Just a little bit about me, I am a A University of British Columbia undergrad studying Cognitive Systems and Data Science,
                with a strong foundation in software development and data analysis. Experienced in working on diverse teams, including startups, NGOs, and multinational corporations. Currently passionate about accessibility
                advocacy and the promotion of sustainable practices in tech.</p>

            <br />

            <p className="text-sm max-w-xl">If you are interested in my journey, I've laid it all out in my {' '}
                <a href='https://drive.google.com/file/d/1A9vYYNbsvc2tFqXo6lXEIXWnNziYSAs2/view?usp=drive_link'
                target="_blank"
                className="text-cyan-600 hover_underline underline-offset-2 decoration-2 decpration-grey-600"
                rel="noreffer noopener"
                >
                   resume
                </a>{' '}
                and {' '}
                <a href='https://github.com/montajesaj1'
                target="_blank"
                className="text-cyan-600 hover_underline underline-offset-2 decoration-2 decpration-grey-600"
                rel="noreffer noopener"
                >
                   GitHub
                </a>{'.'}
            </p>
        </div>
    );
}

export default Intro;
