import AddProject from '@/components/modules/Admin/Projects/AddProject';
import Container from '@/components/ui/Container';

const AddProjectPage = () => {
  return (
    <Container>
      <h2 className="mb-2 text-2xl font-semibold">Projects</h2>
      <AddProject />
    </Container>
  );
};

export default AddProjectPage;
