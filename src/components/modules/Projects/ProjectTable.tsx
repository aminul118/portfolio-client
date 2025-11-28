import DateFormat from '@/components/common/date-format';
import ClearAllFilter from '@/components/common/filtering/ClearAllFilter';
import FilteredViews from '@/components/common/filtering/FilteredViews';
import AppPagination from '@/components/common/pagination/AppPagination';
import PageLimit from '@/components/common/pagination/PageLimit';
import AppSearching from '@/components/common/searching/AppSearching';
import Sorting from '@/components/common/sorting/Sorting';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/Container';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getProjects } from '@/services/project/projects';
import { IProject } from '@/types';
import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ProjectActions from './ProjectActions';

const ProjectTable = async ({ props }: { props: Record<string, any> }) => {
  const params = { ...props };
  const { data, meta } = await getProjects(params);

  return (
    <Container>
      <h2 className="mb-2 text-2xl font-semibold">Projects</h2>
      <ProjectFilters />
      {data.length > 0 ? <ProjectsTable projects={data} /> : <></>}
      {meta && <AppPagination meta={meta} />}
    </Container>
  );
};

const ProjectsTable = ({ projects }: { projects: IProject[] }) => {
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

const ProjectFilters = () => {
  const sortOptions = [
    { name: 'Ascending', value: 'asc' },
    { name: 'Descending', value: 'dsc' },
    { name: 'Featured', value: 'featured' },
    { name: 'Title A-Z', value: 'title' },
  ];
  return (
    <div className="mb-4 flex items-center justify-between gap-4">
      <AppSearching />
      <div className="flex flex-wrap gap-4">
        <PageLimit />
        <Sorting sortOptions={sortOptions} />
        <FilteredViews defaultColumns={{ position: true, company: true }} />
        <ClearAllFilter />
        <Button asChild>
          <Link href="/admin/add-project">Add Project</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProjectTable;
