'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { IProject } from '@/types';
import {
  EllipsisIcon,
  Link as LinkIcon,
  Rows4,
  Trash2Icon,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const ProjectActions = ({ project }: Props) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex justify-end">
            <Button
              size="icon"
              variant="ghost"
              className="shadow-none"
              aria-label="Actions"
            >
              <EllipsisIcon size={16} aria-hidden="true" />
            </Button>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="min-w-48">
          <DropdownMenuItem asChild>
            <Link href={project.liveLink} target="_blank" rel="noreferrer">
              <LinkIcon className="mr-2 h-4 w-4" />
              <span>Live Link</span>
            </Link>
          </DropdownMenuItem>

          <Link href={`/admin/projects/${project.slug}`}>
            <DropdownMenuItem>
              <Rows4 className="mr-2 h-4 w-4" />
              <span>View Details</span>
            </DropdownMenuItem>
          </Link>

          <DropdownMenuItem className="text-destructive focus:text-destructive">
            <Trash2Icon className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ProjectActions;

interface Props {
  project: IProject;
}
