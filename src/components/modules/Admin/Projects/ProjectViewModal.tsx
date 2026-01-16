'use client';

import DateFormat from '@/components/common/formater/date-format';
import HtmlContent from '@/components/common/formater/HtmlContent';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { IModal, IProject } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

interface Props extends IModal {
  project: IProject;
}

const ProjectViewModal = ({ open, setOpen, project }: Props) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-[90vh] w-full overflow-y-auto lg:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        {/* Thumbnail */}
        <div className="mt-3">
          <Image
            src={project.thumbnail}
            width={400}
            height={600}
            alt={project.title}
            className="w-full rounded-md object-cover"
          />
        </div>

        {/* Project Details */}
        <div className="mt-4 space-y-4">
          {/* Slug */}
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold">Slug:</p>
            <p className="text-sm opacity-80">{project.slug}</p>
          </div>

          {/* Live Link */}
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold">Live Link:</p>
            <Link
              href={project.liveLink}
              target="_blank"
              className="text-sm text-blue-500 underline"
            >
              {project.liveLink}
            </Link>
          </div>

          {/* Technologies */}
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold">Technologies:</p>
            <div className="mt-1 flex flex-wrap items-center gap-2">
              {project.technology?.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-slate-800 px-2 py-1 text-xs text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}

          <HtmlContent content={project.content} />

          {/* Photos Gallery */}
          {project.photos && project.photos.length > 0 && (
            <div>
              <p className="text-sm font-semibold">Gallery:</p>
              <div className="mt-2 grid grid-cols-2 gap-3">
                {project.photos.map((photo, index) => (
                  <Image
                    key={index}
                    src={photo}
                    width={400}
                    height={0}
                    alt="Project photo"
                    className="h-32 w-full rounded-md object-cover"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Meta Info */}
          <div className="text-xs opacity-70">
            <p>Featured: {project.isFeatured ? 'Yes' : 'No'}</p>
            <p>
              Created: <DateFormat date={project.createdAt} />
            </p>
            <p>
              Updated: <DateFormat date={project.updatedAt} />
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end">
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectViewModal;
