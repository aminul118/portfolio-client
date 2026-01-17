import AddProjects from '@/components/modules/Admin/Projects/AddProject';
import { Metadata } from 'next';

const AddProjectPage = () => {
  return (
    <section className="mx-auto w-11/12">
      <AddProjects />
    </section>
  );
};

export default AddProjectPage;

// SEO
export const metadata: Metadata = {
  title: 'Add Project | Aminul Islam',
};
