import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import BlogForm from '@/components/modules/Admin/blogs/BlogForm';

export default function CreateBlogPage() {
  return (
    <ClientTableWrapper tableTitle="Create new blog">
      <BlogForm />
    </ClientTableWrapper>
  );
}
