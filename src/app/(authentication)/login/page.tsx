import LoginForm from '@/components/modules/Authentication/LoginForm';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';

const LoginPage = () => {
  return (
    <section className="center">
      <LoginForm className="w-full max-w-sm md:max-w-4xl" />
    </section>
  );
};

export default LoginPage;

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Login | Smart Healthcare and Research Limited',
  description:
    'Login to your Smart Healthcare and Research Limited account to access secure medical data, research tools, and personalized healthcare services.',
  keywords:
    'login, sign in, Smart Healthcare and Research Limited, SHRL, healthcare platform, medical research, secure access, patient portal, health data login',
  image: '/seo/shrl-hero-ss.png',
  websitePath: '/login',
});
// >> SEO End
