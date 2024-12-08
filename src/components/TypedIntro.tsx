import  { useState, useEffect } from 'react';
import {  Box } from "@chakra-ui/react";

interface TypedTextProps {
  text: string;
  speed?: number;
  className?: string;
}


function TypedText({ text, speed = 50, className = '' }: TypedTextProps) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [displayedText, text, speed]);

  return (
    <span className={className}>{displayedText}</span>
  );
}

function TypedIntro() {
  const [showNameBox, setShowNameBox] = useState(false);
  const [showWorkDetails, setShowWorkDetails] = useState(false);
  const [showEducationDetails, setShowEducationDetails] = useState(false);

  useEffect(() => {
    const nameBoxTimer = setTimeout(() => setShowNameBox(true), 500);
    const workDetailsTimer = setTimeout(() => setShowWorkDetails(true), 1500);
    const educationDetailsTimer = setTimeout(() => setShowEducationDetails(true), 2500);

    return () => {
      clearTimeout(nameBoxTimer);
      clearTimeout(workDetailsTimer);
      clearTimeout(educationDetailsTimer);
    };
  }, []);

  return (
    <div className="flex flex-col items-center relative">
      {/* Image Section (keep as is) */}
      
      {showNameBox && (
        <Box
          className="text-3xl md:text-7x1 mb:mb-3 font-young"
          borderRadius="lg"
          mb={5}
          p={2}
          textAlign="center"
          bg={'gray.100'}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          <TypedText 
            text="Hey, my name is AJ" 
            className="block"
          />
        </Box>
      )}

      {showWorkDetails && (
        <p className="text-center text-base mb:text-xl font-young">
          <TypedText 
            text="Data Science Intern @ " 
            className="inline"
          />
          <a
            href=""
            target="_blank"
            className="underline"
            rel="noreffer noopener"
          >
            <TypedText 
              text="EPAM Systems" 
              className="inline"
            />
          </a>
          <TypedText 
            text=" | Incoming UXR @ " 
            className="inline"
          />
          <a
            href="https://viscoglab.psych.ubc.ca/research/correlation/k"
            target="_blank"
            className="underline"
            rel="noreffer noopener"
          >
            <TypedText 
              text="Global Relay" 
              className="inline"
            />
          </a>
        </p>
      )}

      {showEducationDetails && (
        <p className="pb-5 text-center font-young mb:text-xl mb-3">
          <TypedText 
            text="Bachelor of Arts, Cognitive Systems 🧠 and Computer Science 🧑🏽‍💻 @ UBC" 
            className="block"
          />
        </p>
      )}
    </div>
  );
}

export default TypedIntro;
