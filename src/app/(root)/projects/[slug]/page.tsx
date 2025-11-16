import { IParams } from '@/types';

const ProjectDetailsPage = async ({ params }: IParams) => {
  const { slug } = await params;
  console.log(slug);

  return <div></div>;
};

export default ProjectDetailsPage;
