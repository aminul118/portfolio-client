import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import BlogForm from '@/components/modules/Admin/blogs/BlogForm';
import { getSingleBlog } from '@/services/blogs/blogs';
import { Params } from '@/types';

const EditBlogPage = async ({ params }: Params) => {
  const { slug } = await params;
  const { data: blog } = await getSingleBlog(slug);

  if (!blog) {
    return <h1>Blog not found</h1>;
  }

  return (
    <ClientTableWrapper tableTitle={`Edit ${blog.title} `}>
      <BlogForm blog={blog} />
    </ClientTableWrapper>
  );
};

export default EditBlogPage;
