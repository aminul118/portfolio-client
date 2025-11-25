'use client';
import { Card } from '@/components/ui/card';
import SectionHeading from '@/components/ui/SectionHeading';
import { useGetAllProjectsQuery } from '@/redux/features/project/project.api';
import { IProject } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { FaLink } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const FeaturedProjects = () => {
  const params = {
    isFeatured: true,
  };
  const { data, isLoading } = useGetAllProjectsQuery(params);

  const projects = data?.data;

  return (
    <div className="text-center">
      <SectionHeading
        heading="Featured Projects"
        description="A showcase of my work blending creativity and functionality, featuring interactive designs, seamless development, and innovative solutions."
      />

      <div className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {projects?.map((project: IProject) => {
          const { _id, title, liveLink, thumbnail, createdAt, slug } = project;
          return (
            <Card
              key={_id}
              className="group rounded-lg bg-slate-900 shadow-md"
              data-aos="fade-up"
            >
              <p className="py-2 text-center text-xl font-semibold">{title}</p>

              {/* Image Wrapper */}
              <div className="h-[150px] w-full overflow-hidden 2xl:h-[350px]">
                <Image
                  src={thumbnail}
                  width={600}
                  height={0}
                  alt={title}
                  className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  priority={true}
                />
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-3 gap-2 p-4">
                <Link
                  href={`/projects/${slug}`}
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
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProjects;
