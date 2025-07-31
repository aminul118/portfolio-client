import { IProjects } from '@/types';

const AllProjects: IProjects[] = [
  {
    id: 2,
    project_name: 'Percel Point',
    project_img: '/assets/projects/percel.png',
    liveLink: 'https://percel-point-client.vercel.app',
    github: 'https://github.com/aminul118/percel-point-client',
    about:
      'Parcel Point is a robust parcel booking and delivery management platform designed to streamline logistics operations. Built using the MERN stack, this web application supports three user roles—Admin, Delivery Men, and Users—providing a seamless experience for parcel booking, delivery tracking, and management. With real-time status updates, role-based access, and integrated payment solutions, Parcel Point ensures efficiency and convenience for all users.',
    features: [
      'Role-based access control for Admin, Delivery Men, and Users.',
      'Seamless parcel booking with automatic cost calculation.',
      'Real-time parcel status updates (Pending, On The Way, Delivered, etc.).',
      'Admin dashboard with statistical insights using React Apex Charts.',
      'Delivery Men dashboard for managing assigned deliveries and tracking progress.',
      'Interactive homepage with animations using AOS and Lottie React.',
      'Real-time notifications via SweetAlert2 and React Toastify.',
      'Integrated MapBox for precise delivery location tracking.',
      'Fully responsive design optimized for mobile, tablet, and desktop.',
      'Secure Stripe payment integration with visual feedback on transactions.',
      'Light & Dark mode toggle for better user experience.',
      'Authentication via Firebase and JWT for secure access control.',
      'Efficient data fetching and caching with React Query.',
    ],
    tech: ['Tailwind', 'React', 'Express', 'MongoDB'],
  },
  {
    id: 1,
    project_name: 'Foddie',
    project_img: '/assets/projects/foddie.png',
    liveLink: 'https://foddie-resturant.netlify.app',
    github: 'https://github.com/aminul118/foddie-client',
    about:
      'This Restaurant Management Website is designed to help restaurant owners efficiently manage their menu, streamline food ordering, and enhance customer satisfaction. It seamlessly integrates powerful backend technologies with an interactive and user-friendly frontend, ensuring a smooth experience for both administrators and customers.',
    features: [
      'Fully optimized for mobile, tablet, and desktop devices.',
      'Uses Firebase authentication and JWT token-based authorization.',
      'Navbar with conditional login/logout functionality.',
      'Admins can add, edit, and delete food items easily.',
      'User-specific order history with timestamps.',
      'Advanced search functionality for better menu browsing.',
      'Light & Dark mode switch for user convenience.',
      'Efficient backend-driven pagination for improved performance.',
      'nteractive image gallery with lightbox support.',
      'Proper alerts and error messages for a smooth experience.',
    ],
    tech: ['Tailwind', 'React', 'Express', 'MongoDB'],
  },

  {
    id: 3,
    project_name: 'Easy Doctors',
    project_img: '/assets/projects/easy-doc2.png',
    liveLink: 'https://easy-doctor.netlify.app',
    github: 'https://github.com/aminul118/EasyDoc-client',
    about:
      'EasyDoc is a user-friendly doctor appointment booking and management platform, built with the MERN stack. This web application offers an intuitive interface for users to easily book appointments with doctors, while also providing administrators with efficient tools to manage doctor profiles, availability, and appointments. With dynamic slot displays, role-based access control, and real-time notifications, EasyDoc enhances the overall healthcare scheduling experience for both patients and healthcare providers.',
    features: [
      'Role-based access control for Admin and User roles.',
      'Doctor slot booking with real-time availability and automatic cost calculation.',
      'Search and filter doctors by name, specialization, and availability.',
      'Admin dashboard for managing doctor profiles, slots, and user bookings.',
      'Dynamic real-time slot updates as appointments are booked.',
      'Appointment history for users to view past and upcoming appointments.',
      'Responsive design optimized for mobile, tablet, and desktop views.',
      'Secure role-based authentication using Firebase.',
      'Future enhancements for payment integration, notification system, and multi-language support.',
      'Backend built with Node.js and Express.js for scalable management.',
      'Database integration with MongoDB for secure and efficient data storage.',
      'RESTful API for seamless frontend-backend communication.',
      'User-friendly interface for easy navigation and booking.',
    ],
    tech: ['Next.js', 'Tailwind', 'Firebase', 'Node.js'],
  },
  // {
  //   id: 4,
  //   project_name: "Smart Healthcare and Research Ltd.",
  //   project_img: "/assets/projects/shrlbd.png",
  //   portal_img: "/assets/projects/shrlbd-portal.png",
  //   liveLink: "https://www.shrlbd.com",

  //   about:
  //     "Smart Healthcare and Research Ltd. (SHRL) is a healthcare technology company based in Bangladesh, dedicated to enhancing healthcare delivery through innovative digital solutions. Their platform, serves as a comprehensive portal for patients, doctors, and healthcare institutions, facilitating seamless interaction and service delivery.​",
  //   features: [
  //     "Admin: Add and delete Upcoming Events to manage health campaigns or awareness programs.",
  //     "Admin: Create and remove Event banners or featured content for the homepage.",
  //     "Admin: Add and update Scrolling Text (Marquee) for real-time announcements or alerts.",
  //   ],

  //   tech: [
  //     "Next.js",
  //     "React js",
  //     "Shadcn",
  //     "Tailwind",
  //     "Firebase",
  //     "Node.js",
  //     "Mongoose",
  //   ],
  // },
];

export default AllProjects;
