import Image from 'next/image';
import { FaLink } from 'react-icons/fa';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa6';
import { FiArrowUpRight } from 'react-icons/fi';
import AllProjects from '@/constants/AllProjects';
import SectionHeading from '@/components/ui/SectionHeading';
import { IProjects } from '@/types';
import { Card } from '@/components/ui/card';

const Projects = () => {
  return (
    <div
      className="2xl:flex flex-col justify-center container mx-auto px-4 py-12 lg:py-20 text-white/60"
      id="projects"
      data-aos="fade-up"
    >
      <SectionHeading
        heading="Recent Projects"
        description="A showcase of my work blending creativity and functionality, featuring interactive designs, seamless development, and innovative solutions."
      />

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {AllProjects.map((project: IProjects) => {
          const { id, project_name, project_img, liveLink, github } = project;
          return (
            <Card
              key={id}
              className="rounded-lg  shadow-md group bg-slate-900"
              data-aos="fade-up"
            >
              <p className="text-xl font-semibold py-2 text-center">
                {project_name}
              </p>

              {/* Image Wrapper */}
              <div className="w-full h-[150px] 2xl:h-[350px] overflow-hidden ">
                <Image
                  src={project_img}
                  width={600}
                  height={0}
                  alt={project_name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  priority={true}
                />
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-3 gap-2 p-4">
                <Link
                  href={`/projects/${id}`}
                  className="flex gap-2 items-center px-4 rounded-full py-1 border justify-center btn-outline"
                >
                  Details
                  <FiArrowUpRight />
                </Link>

                <Link
                  href={liveLink}
                  target="_blank"
                  className="flex gap-2 items-center px-4 rounded-full py-1 border justify-center btn-outline"
                >
                  Preview
                  <FaLink />
                </Link>

                {github && (
                  <Link
                    href={github}
                    target="_blank"
                    className="flex gap-2 items-center px-4 rounded-full py-1 border justify-center btn-outline"
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
