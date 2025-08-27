import { MdOutlineSearch } from 'react-icons/md';
import { MdAnalytics } from 'react-icons/md';
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobepremierepro,
  SiAdobeaudition,
} from 'react-icons/si';

const othersSkillsData = [
  {
    icon: <MdOutlineSearch className="text-blue-500" />,
    name: 'SEO',
    gradient: 'from-blue-500 via-cyan-500 to-green-400',
  },
  {
    icon: <MdOutlineSearch className="text-purple-500" />,
    name: 'SEO Audit',
    gradient: 'from-purple-600 via-indigo-500 to-blue-400',
  },
  {
    icon: <MdAnalytics className="text-orange-500" />,
    name: 'Google Analytics',
    gradient: 'from-yellow-500 via-orange-500 to-red-500',
  },

  {
    icon: <SiAdobephotoshop className="text-blue-600" />,
    name: 'Photoshop',
    gradient: 'from-blue-600 via-indigo-600 to-purple-500',
  },
  {
    icon: <SiAdobeillustrator className="text-orange-600" />,
    name: 'Illustrator',
    gradient: 'from-yellow-600 via-orange-600 to-red-500',
  },
  {
    icon: <SiAdobeaudition className="text-green-500" />,
    name: 'Audition',
    gradient: 'from-green-500 via-teal-600 to-blue-500',
  },
  {
    icon: <SiAdobepremierepro className="text-purple-700" />,
    name: 'Premiere Pro',
    gradient: 'from-purple-700 via-indigo-700 to-blue-600',
  },
];

export default othersSkillsData;
