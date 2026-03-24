import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import BlogForm from '@/components/modules/Admin/Blogs/BlogForm';

export default function CreateBlogPage() {
  return (
    <ClientTableWrapper tableTitle="Create new blog">
      <BlogForm />
    </ClientTableWrapper>
  );
}
