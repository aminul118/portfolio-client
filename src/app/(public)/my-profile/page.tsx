import Profile from '@/components/modules/Public/profile/Profile';
import generateMetaTags from '@/seo/generateMetaTags';
import { getMe } from '@/services/user/users';

const MyProfilePage = async () => {
  const { data } = await getMe();

  return (
    <>
      <Profile user={data} />
    </>
  );
};

export default MyProfilePage;

//  SEO
export async function generateMetadata() {
  const { data } = await getMe();

  return generateMetaTags({
    title: `${data?.fullName} Profile | Aminul118`,
    description:
      'Aminul Islam is a skilled Software Developer specializing in MERN stack, Next.js, TypeScript and scalable web applications. Currently working at TabEdge, delivering high-performance solutions.',
    keywords:
      'Software Developer, MERN Stack Developer, Next.js Developer, React Developer, TypeScript Developer, Full-Stack Developer, Web Development, API Development, Payment Solutions, E-commerce Development,SEO Specialist, Scalable Web Apps, DevOps, Software Engineer, Aminul118, Hyper118',
    image: data?.picture || './user-placeholder.png',
    websitePath: '/my-profile',
  });
}
