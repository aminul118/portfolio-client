import { Card } from '@/components/ui/card';
import SectionHeading from '@/components/ui/SectionHeading';
import AllProjects from '@/constants/AllProjects';
import { IProjects } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { FaLink } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';
import { FiArrowUpRight } from 'react-icons/fi';

const Projects = () => {
  return (
    <div
      className="container mx-auto flex-col justify-center px-4 py-12 text-white/60 lg:py-20 2xl:flex"
      id="projects"
      data-aos="fade-up"
    >
      <SectionHeading
        heading="Recent Projects"
        description="A showcase of my work blending creativity and functionality, featuring interactive designs, seamless development, and innovative solutions."
      />

      <div className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {AllProjects.map((project: IProjects) => {
          const { id, project_name, project_img, liveLink, github } = project;
          return (
            <Card
              key={id}
              className="group rounded-lg bg-slate-900 shadow-md"
              data-aos="fade-up"
            >
              <p className="py-2 text-center text-xl font-semibold">
                {project_name}
              </p>

              {/* Image Wrapper */}
              <div className="h-[150px] w-full overflow-hidden 2xl:h-[350px]">
                <Image
                  src={project_img}
                  width={600}
                  height={0}
                  alt={project_name}
                  className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  priority={true}
                />
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-3 gap-2 p-4">
                <Link
                  href={`/projects/${id}`}
                  className="btn-outline flex items-center justify-center gap-2 rounded-full border px-4 py-1"
                >
                  Details
                  <FiArrowUpRight />
                </Link>

                <Link
                  href={liveLink}
                  target="_blank"
                  className="btn-outline flex items-center justify-center gap-2 rounded-full border px-4 py-1"
                >
                  Preview
                  <FaLink />
                </Link>

                {github && (
                  <Link
                    href={github}
                    target="_blank"
                    className="btn-outline flex items-center justify-center gap-2 rounded-full border px-4 py-1"
                  >
                    Github
                    <FaGithub />
                  </Link>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
