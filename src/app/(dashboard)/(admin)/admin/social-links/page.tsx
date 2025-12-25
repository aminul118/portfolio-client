import SocialLinksForm from '@/components/modules/Admin/SocialLinks/social-links-form';
import Container from '@/components/ui/Container';
import { getLinks } from '@/services/social-links/links';
import { Metadata } from 'next';

const ResumePage = async () => {
  const { data } = await getLinks();

  return (
    <Container>
      <h1 className="mb-6 text-2xl font-semibold"> Social Links</h1>

      <SocialLinksForm initialData={data?.data} />
    </Container>
  );
};

export default ResumePage;

// >> SEO Start
export const metadata: Metadata = {
  title: 'Resume | Aminul Islam',
};
// >> SEO End
