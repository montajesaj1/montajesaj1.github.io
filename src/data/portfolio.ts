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
    desc: 'The portfolio you are currently viewing is built using the following the stack above.',
    stack: ['React', 'Vite', 'TypeScript', 'Tailwind', 'Node', 'GitHub Actions'],
    link: '',
  },

  {
    title: 'Audit Risk kNN Classifier',
    imgUrl: '../assets/knn.png',
    desc: '',
    stack: ['R', 'Jupyter', 'TidyVerse'],
    link: '',
  },

  {
    title: 'Emacs dotfiles',
    imgUrl: '../assets/emacs.png',
    desc: 'my emacs config',
    stack: ['Emacs', 'Emacs Lisp', 'LaTex'],
    link: '../pages/emacs.jsx',
  },

  {
    title: 'Alacritty dotfiles',
    imgUrl: '../assets/alacritty.png',
    desc: 'my alacritty config',
    stack: ['.toml'],
    link: '../pages/emacs.jsx',
  }

] as Item[];
