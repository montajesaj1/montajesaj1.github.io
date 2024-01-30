import {
    Divider,
    Box,
    Image,
} from '@chakra-ui/react'

import { useInView } from 'react-intersection-observer';

function Intro() {
    const [ref, inView] = useInView({
        triggerOnce: false, // Only trigger this hook once
        threshold: 0.1,    // Percentage of the item that needs to be in view
    });

    return (
        <div 
            ref={ref}
            className={`flex flex-col pt-20 pb-5 transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
        >
            <Box className="max-w-screen-sm" display={{ md: 'flex' }}>
                <Box className="max-w-screen-fit" flexGrow={1}>
                    <h1 className="text-3xl md:text-7x1 mb- mb:mb-3 font-bold">Hey, my name is AJ 👨🏽‍💻</h1>
                    <p className="text-base mb:text-xl font-medium"> Operations Engineer @ {' '}
                        <a href='https://thecdm.ca/partners/industry/cedar-space'
                           target="_blank"
                           className="text-transparent bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text"
                           rel="noreffer noopener"
                        > CEDaR Space </a> {' '} | Data Science CoPilot @ {' '}
                        <a href='https://viscoglab.psych.ubc.ca/research/correlation/k'
                           target="_blank"
                           className="text-transparent bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text"
                           rel="noreffer noopener"
                        >  VCL </a> </p>
                    <p className="text-base mb:text-xl mb-3 font-medium">Bachelor of Arts, Cognitive Systems 🧠 and Data Science 📈 @ UBC</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow=""
                    >
                        <Image
                            src="https://plato.stanford.edu/entries/frege-logic/sec-3-1-Ga.svg"
                            alt="Profile image"
                            width="90"
                            height="90"
                        />
                    </Box>
                </Box>
            </Box>
            <Divider className="max-w-screen-sm" />

            <div className="max-w-screen-sm pt-5 items-center">
                <h3 className="underline underline-offset-4 text-xl md:text-7x1 mb:mb-3 font-bold"> bio </h3>
                <p className="indent-3 text-medium leading-6 pb-5"> Just a little bit about me, I am a University of British Columbia undergrad studying Cognitive Systems and Data Science,
                    with a strong foundation in software development and data analysis. I am also experienced in working on diverse teams, including startups, NGOs, and multinational corporations. </p>
                <h3 className="underline underline-offset-4 text-xl md:text-7x1 mb:mb-3 font-bold"> i ♥ </h3>
                <p className="indent-3 pb-2 text-medium leading-6"> Leveraging data for social advocacy, open source, reading philosophy (modal logics, decision theory), and exploring new skills (Rust, OCaml).
                    In my spare time I enjoy Olympic lifting, listening to Podcasts, and ricing Unix. If you are interested in my journey, I've laid it all out in my {' '}
                    <a href='https://drive.google.com/file/d/1A9vYYNbsvc2tFqXo6lXEIXWnNziYSAs2/view?usp=drive_link'
                       target="_blank"
                       className="text-transparent bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text"
                       rel="noreffer noopener"
                    >
                        resume

                    </a>{' '}
                    and {' '}
                    <a href='https://github.com/montajesaj1'
                       target="_blank"
                       className="text-transparent bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text"
                       rel="noreffer noopener"
                    >
                        GitHub
                    </a>{'.'}
                </p>
                <p className="indent-3 pt-2 text-medium leading-6"> If you'd like to reach me, my email is montajes@ubc.mail.ca. I'm always down to chat with new people! ☕️ </p>
            </div>
            <br />
            <Divider className="max-w-screen-sm" />
        </div>
    );
}

export default Intro;
