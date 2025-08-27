import AllProjects from '@/constants/AllProjects';
import generateMetaTags from '@/Seo/generateMetaTags';
import { IParams, IProjects } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLink } from 'react-icons/fa';

export async function generateMetadata({ params }: IParams) {
  const { slug } = await params;
  const numericId = Number(slug);
  const project = AllProjects.find((p: IProjects) => p.id === numericId);

  if (!project) {
    return generateMetaTags({
      title: 'Project Not Found - Aminul Portfolio',
      description: 'This project could not be found.',
      keywords: 'projects, portfolio, aminul',
      websitePath: `projects/${slug}`,
      image: '/ss/hero-bg.png',
    });
  }

  return generateMetaTags({
    title: `${project.project_name} - Aminul Portfolio`,
    description:
      project.about?.slice(0, 150) || 'Project details about Aminul portfolio.',
    keywords: project.tech?.join(', ') || '',
    websitePath: `projects/${slug}`,
    image: project.project_img
      ? `https://aminuldev.site${project.project_img}`
      : '/assets/banner/aminul.png',
  });
}

const ProjectDetailsPage = async ({ params }: IParams) => {
  const { slug } = await params;
  const numericId = Number(slug);

  const data = AllProjects.filter(
    (project: IProjects) => project.id === numericId,
  );

  return (
    <div className="container mx-auto py-8 px-2 pt-24" data-aos="fade-left">
      {data.length > 0 && (
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold">{data[0].project_name}</h1>
          <Image
            src={data[0].project_img}
            width={1900}
            height={400}
            alt={data[0].project_name}
            className="mx-auto container lg:h-[600px] object-cover rounded-md"
            priority
          />
          <p>{data[0].about}</p>

          <p className="text-2xl font-semibold">Features</p>
          <ul className="space-y-2">
            {data[0].features.map((feature, i: number) => (
              <li className="lg:list-disc lg:list-inside" key={i}>
                {feature}
              </li>
            ))}
          </ul>

          <Link
            href={data[0].liveLink}
            target="_blank"
            className="flex gap-2 items-center px-4 rounded-full py-1 border justify-center btn-outline w-32"
          >
            Preview <FaLink />
          </Link>

          <p className="text-2xl font-semibold">Technology</p>
          <div className="flex gap-3 flex-wrap">
            {data[0].tech.map((singleTech) => (
              <p
                key={singleTech}
                className="flex gap-2 items-center px-4 rounded-full py-1 border justify-center btn-outline"
              >
                {singleTech}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailsPage;
