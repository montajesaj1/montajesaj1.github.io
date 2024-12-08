import { useRef, useState, useEffect } from 'react';
import { Divider, Box, Image } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import TypedIntro from "./TypedIntro"

function Intro() {
  // Ref for the "I care about" section
  const [careRef, careInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Ref to scroll to the "I care about" section
  const careSectionRef = useRef<HTMLDivElement>(null);

  // State to manage visibility of the scroll button
  const [showScrollButton, setShowScrollButton] = useState(true);

  // Scroll handler function
  const scrollToCareSection = () => {
    careSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Update button visibility based on "I care about" section visibility
  useEffect(() => {
    setShowScrollButton(!careInView);
  }, [careInView]);

  return (
    <div className="flex flex-col pt-40 transition-all duration-500 transform">
      <div className="flex flex-col items-center relative">
        {/* Image Section */}

        <div className="flex flex-col md:flex-row items-center justify-center space-x-10 pt-20 pb-40 max-w-screen-md">
          <Image
            src="../assets/working.gif"
            alt="working"
            height={350}
            width={400}
          />

          <TypedIntro />

        </div>

        {/* Circular Scroll Button */}
        {showScrollButton && (
          <button 
            onClick={scrollToCareSection}
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Scroll to more information"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-black" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
          </button>
        )}
      </div>


      <Divider className="pt-40 max-w-screen-md" />


      {/* "I care about" Section with Scroll and Animation Ref */}
      <div 
        ref={careSectionRef}
        className="max-w-screen-md pt-40 items-center font-poppins"
      >
        
        <Box 
          ref={careRef}
          className={`transition-all duration-700 transform ${careInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Box className="max-w-screen-md" display={{ md: "flex" }}>
            <p className="text-left text-medium font-display leading-6 pb-5">
              I am a University of British Columbia undergrad studying Cognitive
              Systems and Computer Science, with a strong foundation in software
              development and data analysis. I am experienced in working on
              diverse teams, including startups, NGOs, and multinational
              corporations.{" "}
            </p>

            <Image
              src="../assets/passion.svg"
              alt="Profile image"
              width="300"
              height="200"
            />
          </Box>

          <h3 className="text-3xl md:text-7x1 mb- mb:mb-3 font-young">
            I care about...
          </h3>
          <p className="pb-2 text-medium leading-6">
            {" "}
            Leveraging data for social advocacy, open source, reading philosophy
            (modal logics, decision theory), and exploring new skills (Rust,
            PyTorch). In my spare time I enjoy Olympic lifting, listening to
            Podcasts, and ricing Unix. If you are interested in my journey, I've
            laid it all out in my{" "}
            <a
              href="https://drive.google.com/file/d/1A9vYYNbsvc2tFqXo6lXEIXWnNziYSAs2/view?usp=drive_link"
              target="_blank"
              className="underline"
              rel="noreffer noopener"
            >
              resume
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/montajesaj1"
              target="_blank"
              className="underline"
              rel="noreffer noopener"
            >
              GitHub
            </a>
            {"."}
          </p>
        </Box>
      </div>

      <br />
      <Divider className="max-w-screen-md" />

      <Box className="pt-10 max-w-screen-sm" display={{ md: "flex" }}>
        <Box className="align-items-baseline">
          <h3 className="text-xl text-light mb:mb-3 font-young">
            I am currently looking for new opportunities!
          </h3>
          <p className="pt-2 text-medium leading-6">
            {" "}
            You can reach me at montajes@ubc.mail.ca. I'm always down to chat
            with new people! ☕️{" "}
          </p>
        </Box>

        <Image
          src="../assets/adventure.svg"
          alt="Adventure image"
          width="200"
          height="200"
        />
      </Box>
    </div>
  );
}

export default Intro;
