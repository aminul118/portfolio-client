import {
  FaReact,
  FaGithub,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
} from 'react-icons/fa';
import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPrisma,
  SiTailwindcss,
} from 'react-icons/si';
import {
  BiLogoJavascript,
  BiLogoPostgresql,
  BiLogoTypescript,
} from 'react-icons/bi';
import { RiFirebaseFill } from 'react-icons/ri';
import { TbBrandNextjs, TbBrandRedux } from 'react-icons/tb';
import { LiaGit } from 'react-icons/lia';

const skillsData = [
  {
    icon: <FaHtml5 className="text-red-500" />,
    name: 'HTML',
    gradient: 'from-red-600 via-orange-500 to-yellow-400',
  },
  {
    icon: <FaCss3Alt className="text-blue-600" />,
    name: 'CSS',
    gradient: 'from-blue-600 via-blue-500 to-indigo-500',
  },

  {
    icon: <BiLogoJavascript className="text-yellow-400" />,
    name: 'JavaScript',
    gradient: 'from-yellow-500 via-orange-500 to-red-500',
  },
  {
    icon: <BiLogoTypescript className="text-blue-700" />,
    name: 'TypeScript',
    gradient: 'from-blue-700 via-blue-600 to-indigo-500',
  },
  {
    icon: <FaReact className="text-blue-600" />,
    name: 'React.js',
    gradient: 'from-blue-500 via-cyan-400 to-teal-500',
  },
  {
    icon: <TbBrandNextjs className="text-white" />,
    name: 'Next.js',
    gradient: 'from-gray-800 via-gray-700 to-gray-600',
  },
  {
    icon: <TbBrandRedux className=" text-purple-400" />,
    name: 'Redux',
    gradient: 'from-purple-800 via-purple-700 to-purple-400',
  },
  {
    icon: <SiTailwindcss className="text-blue-500" />,
    name: 'Tailwind',
    gradient: 'from-blue-400 via-teal-400 to-cyan-400',
  },
  {
    icon: <FaNodeJs className="text-green-500" />,
    name: 'Node.js',
    gradient: 'from-green-700 via-green-600 to-green-500',
  },
  {
    icon: <SiExpress className="text-white" />,
    name: 'Express.js',
    gradient: 'from-gray-800 via-gray-700 to-gray-600',
  },
  {
    icon: <SiMongodb className="text-green-600" />,
    name: 'MongoDB',
    gradient: 'from-green-700 via-green-600 to-lime-500',
  },
  {
    icon: <SiMongoose className="text-red-600" />,
    name: 'Mongoose',
    gradient: 'from-red-700 via-red-600 to-orange-500',
  },
  {
    icon: <BiLogoPostgresql className="text-blue-500" />,
    name: 'PostgreSQL',
    gradient: 'from-blue-600 via-blue-500 to-indigo-500',
  },
  {
    icon: <SiPrisma className="text-white" />,
    name: 'Prisma',
    gradient: 'from-gray-800 via-gray-700 to-gray-600',
  },
  {
    icon: <RiFirebaseFill className="text-yellow-500" />,
    name: 'Firebase',
    gradient: 'from-yellow-500 via-orange-400 to-red-500',
  },
  {
    icon: <LiaGit className="text-red-500" />,
    name: 'Git',
    gradient: 'from-red-600 via-red-500 to-orange-500',
  },
  {
    icon: <FaGithub className="text-white" />,
    name: 'GitHub',
    gradient: 'from-gray-800 via-gray-700 to-gray-600',
  },
];

export default skillsData;
