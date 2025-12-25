import DateFormat from '@/components/common/formater/date-format';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { IProject } from '@/types';
import { Check } from 'lucide-react';
import Image from 'next/image';
import ProjectActions from './ProjectActions';

const ProjectTable = async ({ projects }: { projects: IProject[] }) => {
  return (
    <Table>
      <TableHeader className="bg-muted">
        <TableRow>
          <TableHead>SI</TableHead>
          <TableHead>Thumbnail</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Featured</TableHead>
          <TableHead>Date - Time</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {projects?.map((project, index) => (
          <TableRow key={project._id} className="hover:bg-primary/5">
            <TableCell>{index + 1}</TableCell>

            <TableCell>
              {project.thumbnail ? (
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  width={60}
                  height={40}
                  className="rounded-md object-cover"
                />
              ) : (
                <span className="text-gray-400 italic">No image</span>
              )}
            </TableCell>

            <TableCell>{project.title}</TableCell>

            <TableCell>
              {project.isFeatured ? (
                <Check size={20} className="text-green-600" />
              ) : (
                <span className="text-gray-500">No</span>
              )}
            </TableCell>
            <TableCell>
              <DateFormat date={project.createdAt} />
            </TableCell>
            <TableCell>
              <ProjectActions project={project} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ProjectTable;
