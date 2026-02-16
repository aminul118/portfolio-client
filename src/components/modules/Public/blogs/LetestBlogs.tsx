import DateFormat from '@/components/common/formater/date-format';
import { getBlogs } from '@/services/blogs/blogs';

const LatestBlogs = async ({ currentSlug }: { currentSlug: string }) => {
  const { data: blogs } = await getBlogs({
    limit: '4', // Fetch 4 to have a buffer if current is in latest
    sort: '-createdAt',
  });

  const latestBlogs = blogs?.filter((b) => b.slug !== currentSlug).slice(0, 3);

  if (!latestBlogs?.length)
    return <p className="text-slate-400">No other blogs found.</p>;

  return (
    <>
      {latestBlogs.map((blog) => (
        <a
          key={blog._id}
          href={`/blogs/${blog.slug}`}
          className="group block space-y-3 rounded-lg border border-slate-800 bg-slate-900/50 p-4 transition-colors hover:border-slate-700 hover:bg-slate-900"
        >
          {blog.thumbnail && (
            <div className="aspect-video w-full overflow-hidden rounded-md bg-slate-800">
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}
          <div>
            <h4 className="line-clamp-2 font-medium text-slate-200 transition-colors group-hover:text-blue-400">
              {blog.title}
            </h4>
            <div className="mt-2 text-xs text-slate-500">
              <DateFormat date={blog.createdAt} />
            </div>
          </div>
        </a>
      ))}
    </>
  );
};

export default LatestBlogs;
