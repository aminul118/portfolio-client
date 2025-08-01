import AllProjects from '@/constants/AllProjects';
import { IProjects, TParams } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLink } from 'react-icons/fa';

export async function generateMetadata({ params }: TParams) {
  const { id } = await params;
  const numericId = Number(id);
  const project = AllProjects.find((p: IProjects) => p.id === numericId);
}

const page = async ({ params }: TParams) => {
  const { id } = await params;
  const numericId = Number(id);

  const data = AllProjects.filter((project: IProjects) => project.id === numericId);
  console.log(data);

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
            priority={true}
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

export default page;
