import React from 'react';

import Link from 'next/link';
import AboutImage from './AboutImage';
import SectionHeading from '@/components/ui/SectionHeading';

const About = () => {
  return (
    <section className="max-w-4xl px-4 mx-auto py-12 lg:py-20 " id="about">
      <SectionHeading heading="About Me" />
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 ">
        <AboutImage />
        <div className="mt-6 max-w-2xl flex-1 text-white/60" data-aos="fade-right">
          <p>
            I am Md. Aminul Islam, a professional web developer specializing in frontend and backend
            development.
          </p>
          <ul className="list-disc list-inside mt-3">
            <li>Frontend: HTML, CSS, Tailwind, JavaScript, TypeScript, React JS, Next JS</li>
            <li>Backend: Node JS, Express, Firebase</li>
            <li>Databases: MongoDB</li>
          </ul>
          <p className="mt-3">
            I focus on creating intuitive user experiences and developing scalable, efficient web
            applications.
          </p>
          <div className="mt-4">
            <Link
              href="/about"
              className="border  px-4 py-1 rounded-full btn-outline "
              aria-label="Learn more about me"
            >
              See More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
