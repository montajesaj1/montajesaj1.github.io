interface Item {
  title: string;
  imgUrl: string;
  desc: string;
  tag: string;
  stack: string[];
  link: string;
}

export default [
  {
    title: "UBC Insights WebApp",
    imgUrl: "../assets/cpsc310.png",
    desc: "",
    tag: "project",
    stack: ["TypeScript", "Mocha (w/ Chai)", "Next.JS", "React", "ExpressJS"],
    link: "https://github.com/montajesaj1/ubc-flow.git",
  },

  {
    title: "UBC Flow",
    imgUrl: "../assets/flow.png",
    //desc: "UBC Flow is a generative AI advising service for students studying tech adjacent disciplines at UBC 🤗 This chatbot was made using AWS Bedrock, Anthropic Claude LLM, and data compiled from UBC SSC.",
    desc: "",
    tag: "project",
    stack: ["AWS Bedrock", "LangChain", "Python", "Streamlit", "BS4 and Regex"],
    link: "https://github.com/montajesaj1/ubc-flow.git",
  },

  {
    title: "Audit Risk kNN Classifier",
    imgUrl: "../assets/knn.png",
    //desc: "Utilized R and Tidyverse to enhance fraud detection, creating a KNN classifier that identified high-risk firms with an accuracy of approximately 0.87, precision of 0.86%, and recall of 0.95%. ",
    desc: "",
    tag: "project",

    stack: ["R", "Jupyter", "TidyVerse"],
    link: "",
  },

  {
    title: "Cloud-based YouTube Analytics Platform",
    imgUrl: "../assets/cpsc436.png",
    desc: "",
    tag: "project",
    stack: ["AWS Bedrock", "LangChain", "Python", "Streamlit", "BS4 and Regex"],
    link: "https://github.com/montajesaj1/ubc-flow.git",
  },

  {
    title: "Java Matrix Calculator",
    imgUrl: "../assets/matrix.png",
    desc: "",
    tag: "project",
    stack: ["Java", "Swing"],
    link: "https://github.com/montajesaj1/ubc-flow.git",
  },



] as Item[];
