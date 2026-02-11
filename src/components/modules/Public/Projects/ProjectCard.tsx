'use client';

import Tooltip from '@/components/common/Tooltip';
import { IProject } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const MAX_VISIBLE_TECH = 3;

const ProjectCard = ({ project }: { project: IProject }) => {
  const visibleTech = project.technology?.slice(0, MAX_VISIBLE_TECH) || [];
  const hiddenTech = project.technology?.slice(MAX_VISIBLE_TECH) || [];
  const remainingCount = hiddenTech.length;

  return (
    <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br from-slate-900 to-slate-800 shadow-lg transition-all duration-300 hover:shadow-xl">
      {/* Image with hover overlay */}
      <div className="relative overflow-hidden rounded-lg">
        <div className="h-[200px] w-full overflow-hidden 2xl:h-[300px]">
          <Image
            src={project.thumbnail}
            width={600}
            height={350}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            priority
          />
        </div>
        {/* Title */}
        <div className="px-4 pt-4 pb-2">
          <h3 className="truncate text-left text-lg font-bold tracking-tight text-white">
            {project.title}
          </h3>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 flex h-[200px] items-center justify-center gap-4 bg-black/40 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 2xl:h-[300px]">
          <Tooltip content="View Details" side="bottom">
            <Link
              href={`/projects/${project.slug}`}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-200 hover:scale-110 hover:border-blue-400 hover:bg-blue-500/30 hover:text-blue-300"
            >
              <FiArrowUpRight className="text-xl" />
            </Link>
          </Tooltip>

          <Tooltip content="Live Preview" side="bottom">
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-200 hover:scale-110 hover:border-emerald-400 hover:bg-emerald-500/30 hover:text-emerald-300"
            >
              <FaExternalLinkAlt className="text-sm" />
            </Link>
          </Tooltip>
        </div>
      </div>

      {/* Tech stack */}
      <div className="mt-auto flex flex-wrap items-center gap-1.5 px-4 pt-3 pb-4">
        {visibleTech.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300 transition-colors duration-200 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-300"
          >
            {tech}
          </span>
        ))}
        {remainingCount > 0 && (
          <Tooltip content={hiddenTech.join(', ')} side="top">
            <span className="inline-flex cursor-default items-center rounded-md border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 text-xs font-semibold text-blue-400 transition-colors duration-200 hover:border-blue-400/40 hover:bg-blue-500/20">
              +{remainingCount}
            </span>
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
