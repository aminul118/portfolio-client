import { IProjects } from '@/types';

const AllProjects: IProjects[] = [
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
];

export default AllProjects;
