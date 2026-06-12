import BlogForm from '@/app/admin/blogs/_components/BlogForm';
import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';

export default function CreateBlogPage() {
  return (
    <ClientTableWrapper tableTitle="Create new blog">
      <BlogForm />
    </ClientTableWrapper>
  );
}
