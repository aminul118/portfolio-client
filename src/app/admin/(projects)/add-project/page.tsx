import ProjectForm from '@/app/admin/(projects)/_components/ProjectForm';
import { Button } from '@/components/ui/button';
import GradientTitle from '@/components/ui/gradientTitle';
import { Undo2 } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

const AddProjectPage = () => {
  return (
    <section className="mx-auto w-11/12 py-8">
      <div className="mb-12 flex justify-between">
        <GradientTitle title="Create Projects" className="text-left" />
        <Button asChild>
          <Link href={'/admin/projects'}>
            <Undo2 />
            Back to Projects
          </Link>
        </Button>
      </div>
      <ProjectForm />
    </section>
  );
};

export default AddProjectPage;

// SEO
export const metadata: Metadata = {
  title: 'Add Project | Aminul Islam',
};
