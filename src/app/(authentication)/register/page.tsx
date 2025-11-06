import RegisterForm from '@/components/modules/Authentication/RegisterForm';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';

const RegisterPage = () => {
  return (
    <section className="center">
      <RegisterForm className="w-full max-w-sm md:max-w-5xl" />
    </section>
  );
};

export default RegisterPage;

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Register | Smart Healthcare and Research Limited',
  description:
    'Create your account at Smart Healthcare and Research Limited to access advanced medical research tools, healthcare services, and personalized support.',
  keywords:
    'register, create account, sign up, Smart Healthcare and Research Limited, medical research, healthcare innovation, SHRL registration, join healthcare platform, medical data access',
  websitePath: '/register',
});
// >> SEO End
