import LoginForm from '@/components/modules/authentication/LoginForm';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Login | SHRL',
  description: 'Write Description',
  keywords: 'write keyword not more than 60 words',
  image: '/seo/shrl-hero-ss.png',
});
// >> SEO End

const LoginPage = () => {
  return (
    <section className="center">
      <LoginForm className="w-full max-w-sm md:max-w-4xl" />
    </section>
  );
};

export default LoginPage;
