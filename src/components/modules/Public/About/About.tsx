import SectionHeading from '@/components/ui/SectionHeading';
import Link from 'next/link';
import AboutImage from './AboutImage';

const About = () => {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 lg:py-20" id="about">
      <SectionHeading heading="About Me" />
      <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
        <AboutImage />
        <div
          className="mt-6 max-w-2xl flex-1 text-white/60"
          data-aos="fade-right"
        >
          <p>
            I am Md. Aminul Islam, a professional web developer specializing in
            frontend and backend development.
          </p>
          <ul className="mt-3 list-inside list-disc">
            <li>
              Frontend: JavaScript, TypeScript, React JS, Next JS, Redux,
              Tailwind, Shadcn
            </li>
            <li>Backend: Node JS, Express</li>
            <li>Databases: MongoDB, MySQL, Postgresql</li>
            <li>ORM: Mongoose, Prisma</li>
          </ul>
          <p className="mt-3">
            I focus on creating intuitive user experiences and developing
            scalable, efficient web applications.
          </p>
          <div className="mt-4">
            <Link
              href="/about"
              className="btn-outline rounded-full border px-4 py-1"
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
