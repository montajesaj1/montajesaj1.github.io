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
    title: "UBC Flow",
    imgUrl: "../assets/flow.png",
    desc: "UBC Flow is a generative AI advising service for students studying tech adjacent disciplines at UBC 🤗 This chatbot was made using AWS Bedrock, Anthropic Claude LLM, and data compiled from UBC Student Service Center.",
    tag: "project",
    stack: ["AWS Bedrock", "LangChain", "Python", "Streamlit", "BS4 and Regex"],
    link: "https://github.com/montajesaj1/ubc-flow.git",
  },

  {
    title: "Emacs dotfiles",
    imgUrl: "../assets/emacs.png",
    desc: "",
    tag: "tools",

    stack: ["Emacs", "Emacs Lisp", "LaTex", "Workflow"],
    link: "../pages/emacs.jsx",
  },

  {
    title: "Personal-Profile",
    imgUrl: "../assets/proj1.png",
    desc: "The portfolio you are currently viewing was built using the stack above.",
    tag: "project",

    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind",
      "Node",
      "GitHub Actions",
    ],
    link: "",
  },

  {
    title: "Audit Risk kNN Classifier",
    imgUrl: "../assets/knn.png",
    desc: "Utilized R and Tidyverse to enhance fraud detection, creating a KNN classifier that identified high-risk firms with an accuracy of approximately 0.87, precision of 0.86%, and recall of 0.95%. ",
    tag: "project",

    stack: ["R", "Jupyter", "TidyVerse"],
    link: "",
  },
  {
    title: "Neovim Config",
    imgUrl:
      "https://www.barbarianmeetscoding.com/static/51c339893c7c8e9191182e5596cf812f/b4972/lazyvim.png",
    desc: "",
    tag: "tools",

    stack: ["worflow"],
    link: "../pages/emacs.jsx",
  },

  {
    title: "Alacritty Config",
    imgUrl: "../assets/alacritty.png",
    desc: "",
    tag: "tools",

    stack: ["worflow"],
    link: "../pages/emacs.jsx",
  },

  {
    title: "Fish Shell Scripts",
    imgUrl: "https://spin.atomicobject.com/wp-content/uploads/fish-logo.png",
    desc: "",
    tag: "tools",

    stack: ["worflow"],
    link: "../pages/emacs.jsx",
  },
] as Item[];
