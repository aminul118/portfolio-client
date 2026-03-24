import DateFormat from '@/components/common/formater/date-format';
import { getProjects } from '@/services/Project/projects';

const LatestProjects = async ({ currentSlug }: { currentSlug: string }) => {
  const { data: projects } = await getProjects({
    limit: '4',
    sort: '-createdAt',
  });

  const latestProjects = projects
    ?.filter((p) => p.slug !== currentSlug)
    .slice(0, 3);

  if (!latestProjects?.length)
    return <p className="text-slate-400">No other projects found.</p>;

  return (
    <>
      {latestProjects.map((project) => (
        <a
          key={project._id}
          href={`/projects/${project.slug}`}
          className="group block space-y-3 rounded-lg border border-slate-800 bg-slate-900/50 p-4 transition-colors hover:border-slate-700 hover:bg-slate-900"
        >
          {project.thumbnail && (
            <div className="aspect-video w-full overflow-hidden rounded-md bg-slate-800">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}
          <div>
            <h4 className="line-clamp-2 font-medium text-slate-200 transition-colors group-hover:text-blue-400">
              {project.title}
            </h4>
            <div className="mt-2 text-xs text-slate-500">
              <DateFormat date={project.createdAt?.toString()} />
            </div>
          </div>
        </a>
      ))}
    </>
  );
};

export default LatestProjects;
