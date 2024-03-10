import { Divider, Box, Image } from "@chakra-ui/react";

import { useInView } from "react-intersection-observer";

function Intro() {
  const [ref, inView] = useInView({
    triggerOnce: false, // Only trigger this hook once
    threshold: 0.1, // Percentage of the item that needs to be in view
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col pt-20 transition-all duration-500 transform ${inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
    >
      <Box className="min-w-screen-lg" display={{ md: "flex" }}>
        <Image
          // src="https://plato.stanford.edu/entries/frege-logic/sec-3-1-Ga.svg"
          src="../assets/icon.svg"
          alt="Profile image"
          width="200"
          height="200"
        />
        <h1 className="pt-40 text-3xl md:text-7x1 mb- mb:mb-3 font-young">
          Hey, my name is AJ
        </h1>
      </Box>

      <p className="text-base mb:text-xl font-young">
        {" "}
        Operations Engineer @{" "}
        <a
          href="https://thecdm.ca/partners/industry/cedar-space"
          target="_blank"
          className="underline"
          rel="noreffer noopener"
        >
          {" "}
          CEDaR Space
        </a>{" "}
        | Data Science CoPilot @{" "}
        <a
          href="https://viscoglab.psych.ubc.ca/research/correlation/k"
          target="_blank"
          className="underline"
          rel="noreffer noopener"
        >
          {" "}
          VCL{" "}
        </a>{" "}
      </p>
      <p className="text-left font-young mb:text-xl mb-3">
        Bachelor of Arts, Cognitive Systems 🧠 and Computer Science 🧑🏽‍💻 @ UBC
      </p>

      <Divider className="max-w-screen-md" />

      <div className="max-w-screen-md pt-5 items-center font-poppins">
        <Box className="max-w-screen-md" display={{ md: "flex" }}>
          <p className="text-left text-medium font-display leading-6 pb-5">
            {" "}
            I am a University of British Columbia undergrad studying Cognitive
            Systems and Data Science, with a strong foundation in software
            development and data analysis. I am experienced in working on
            diverse teams, including startups, NGOs, and multinational
            corporations.{" "}
          </p>

          <Image
            // src="https://plato.stanford.edu/entries/frege-logic/sec-3-1-Ga.svg"
            src="../assets/passion.svg"
            alt="Profile image"
            width="300"
            height="200"
          />
        </Box>

        <Box alignItems="baseline">
          <h3 className="text-3xl md:text-7x1 mb- mb:mb-3 font-young">
            I care about...
          </h3>
          <p className="pb-2 text-medium leading-6">
            {" "}
            Leveraging data for social advocacy, open source, , reading
            philosophy (modal logics, decision theory), and exploring new skills
            (Rust, PyTorch). In my spare time I enjoy Olympic lifting, listening
            to Podcasts, and ricing Unix. If you are interested in my journey,
            I've laid it all out in my{" "}
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
          <p className="pt-2 text-medium leading-6">
            {" "}
            You can reach me at montajes@ubc.mail.ca. I'm always down to chat
            with new people! ☕️{" "}
          </p>

          <br />
        </Box>
      </div>

      <br />
      <Divider className="max-w-screen-md" />
    </div>
  );
}

export default Intro;
