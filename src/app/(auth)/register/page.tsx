import RegisterForm from '@/components/modules/authentication/RegisterForm';
import generateMetaTags from '@/seo/generateMetaTags';

import { Metadata } from 'next';

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Register | SHRL',
  description: 'Write Description',
  keywords: 'write keyword not more than 60 words',
});
// >> SEO End

const RegisterPage = () => {
  return (
    <section className="center">
      <RegisterForm className="w-full max-w-sm md:max-w-5xl" />
    </section>
  );
};

export default RegisterPage;
