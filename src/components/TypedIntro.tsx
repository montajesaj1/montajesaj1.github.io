import  { useState, useEffect } from 'react';
import {  Box, Divider } from "@chakra-ui/react";

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
  const [showSub, setShowSub] = useState(false);
  const [showEducationDetails, setShowEducationDetails] = useState(false);

  useEffect(() => {
    const nameBoxTimer = setTimeout(() => setShowNameBox(true), 500);
    const subTimer = setTimeout(() => setShowSub(true), 1500);
    const educationDetailsTimer = setTimeout(() => setShowEducationDetails(true), 2500);

    return () => {
      clearTimeout(nameBoxTimer);
      clearTimeout(subTimer);
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
            text="Hey, my name is AJ." 
            className="block"
          />
          <TypedText 
            text="welcome to my site" 
            className="block font-poppins italic text-xl"
          />
        </Box>
      )}
      

      {showSub && (
        <p className="text-center text-base mb:text-xl font-poppins">
          <TypedText 
            text="Data Scientist and Quant UXR" 
            className="inline text-xl"
          />
        </p>
      )}

    <Divider/>

    {showEducationDetails && (
        <p className="pb-5 text-center font-poppins mb:text-xl mb-3">
          <TypedText 
            text="UBC COGS 🧠 and CPSC 🧑🏽‍💻  " 
            className="inline text-xl"
          />
        </p>
      )}



      </div>
  );
}

export default TypedIntro;
