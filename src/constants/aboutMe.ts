import { TAbout, THobby } from '@/types';
import { BiFootball } from 'react-icons/bi';
import { FaCameraRetro, FaPlaneDeparture } from 'react-icons/fa';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import { MdOutlineVideoLibrary } from 'react-icons/md';

const hobbies: THobby[] = [
  { icon: BiFootball, label: 'Football' },
  { icon: FaPlaneDeparture, label: 'Travelling' },
  { icon: FaCameraRetro, label: 'Photography' },
  { icon: GiFullMotorcycleHelmet, label: 'Riding' },
  { icon: MdOutlineVideoLibrary, label: 'Video Making' },
];

const aboutMe: TAbout[] = [
  {
    title: 'About Me',
    paragraphs: [
      "I'm Aminul, a MERN Stack Developer with a strong focus on building scalable, efficient, and visually compelling web applications. My expertise spans both frontend and backend technologies, ensuring seamless user experiences.",
      'I specialize in crafting intuitive UIs, optimizing performance, and developing full-stack solutions that align with modern web standards.',
    ],
    list: [
      'Frontend: JavaScript, TypeScript, React JS, Next JS, Redux, Tailwind, Shadcn',
      'Backend: Node.js, Express.js',
      'Database: MongoDB, Postgresql, MySQL',
      'ORM: Mongoose, Prisma',
    ],
  },
  {
    title: 'My Journey',
    paragraphs: [
      'My programming journey began after my HSC when I was searching for a direction in my career. I enrolled at Daffodil International University, choosing Computer Science and Engineering out of passion. Before discovering coding, I was uncertain about my future, often feeling lost. A friend introduced me to web development and recommended Programming Hero, and that moment changed everything for me.',
      'Under the guidance of Jhankar Mahbub, I immersed myself in web development, learning technologies like HTML, CSS, Tailwind CSS, JavaScript, React, Firebase, MongoDB, and Node.js. Over time, I built a strong foundation and started developing real-world applications.',
      'Today, as a skilled MERN Stack Developer, I’m passionate about building impactful projects that solve real-world problems. My goal is to contribute to innovative digital solutions, whether through freelancing or remote work, helping businesses and individuals achieve their vision.',
      'I love exploring and integrating modern tools, animations, and performance-optimized techniques to create seamless user experiences. Every project I take on is an opportunity to refine my skills and push creative boundaries.',
      'This journey has been transformative, and I’m excited to keep learning, growing, and making a difference in the tech industry.',
    ],
  },
  {
    title: 'My Hobbies and Interests',
    paragraphs: [],
  },
];

export { aboutMe, hobbies };
