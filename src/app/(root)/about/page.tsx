import AboutImage from '@/components/modules/About/AboutImage';
import { aboutMe, hobbies } from '@/constants/aboutMe';
import generateMetaTags from '@/Seo/generateMetaTags';

import { Metadata } from 'next';

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'About - Aminul Islam',
  description:
    'Aminul Islam is a skilled Software Developer specializing in MERN stack, Next.js, Firebase, TypeScript, MongoDB, and scalable web applications. Currently working at TabEdge, an American payment solution company, delivering high-performance solutions.',
  keywords:
    'Software Developer, MERN Stack Developer, Next.js Developer, React Developer, MongoDB Expert, Firebase Expert, Mongoose, TypeScript Developer, Full-Stack Developer, Web Development, JavaScript Developer, Frontend Engineer, Backend Developer, API Development, Cloud Computing, Payment Solutions, E-commerce Development, TabEdge, TabEdge Developer, Web Application Designer, Graphic Designer, UI/UX Developer, SEO Specialist, Scalable Web Apps, Progressive Web Apps, Startup Tech, SaaS Developer, DevOps, Software Engineer, Aminul118, Hyper118',
  websitePath: '/about',
});
// >> SEO End

const AboutPage = () => {
  return (
    <div className="container mx-auto mt-24 px-3" data-aos="fade-left">
      <div className="flex flex-col justify-between gap-12 lg:flex-row">
        <div className="mt-6 ml-6">
          <AboutImage />
        </div>

        <div className="flex-1 text-justify lg:mt-6">
          {/* About me section */}
          {aboutMe.map((about, index: number) => (
            <div key={index} className="mb-8">
              <h2 className="pb-4 text-2xl font-bold text-white/80 lg:text-4xl">
                {about.title}
              </h2>
              {about.paragraphs.map((para, index: number) => (
                <p key={index} className="mb-4">
                  {para}
                </p>
              ))}
              {about.list && (
                <ul className="mt-2 list-inside list-disc">
                  {about.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {/* Show hobbies only for "My Hobbies and Interests" */}
              {about.title === 'My Hobbies and Interests' && (
                <div className="mt-6 flex flex-wrap justify-center gap-8 rounded-2xl bg-gray-700/30 p-6 shadow-lg">
                  {hobbies.map((hobby, index: number) => {
                    const Icon = hobby.icon;
                    return (
                      <div key={index} className="flex flex-col items-center">
                        <div className="rounded-full bg-gray-900 p-4 text-4xl text-white shadow-md">
                          <Icon />
                        </div>
                        <span className="mt-2 text-lg font-medium text-white/80">
                          {hobby.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
