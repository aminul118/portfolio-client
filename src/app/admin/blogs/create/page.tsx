import BlogForm from '@/app/admin/_components/Blogs/BlogForm';
import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';

export default function CreateBlogPage() {
  return (
    <ClientTableWrapper tableTitle="Create new blog">
      <BlogForm />
    </ClientTableWrapper>
  );
}
