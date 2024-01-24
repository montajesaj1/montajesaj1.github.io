interface Item {
  title: string;
  imgUrl: string;
  desc: string;
  stack: string[];
  link: string;
}

export default [
  {
    title: 'Personal-Profile',
    imgUrl: '../assets/proj1.png',
    desc: '',
    stack: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Node JS'],
    link: '',
  },

  {
    title: 'Audit Risk kNN Classifier',
    imgUrl: '../assets/knn.png',
    desc: 'This is a project',
    stack: ['R', 'Jupyer', 'TidyVerse'],
    link: '',
  },

  {
    title: 'Emacs dotfiles',
    imgUrl: '../assets/emacs.png',
    desc: 'my emacs config',
    stack: ['Emacs', 'Emacs Lisp', 'LaTex'],
    link: '',
  }
] as Item[];
