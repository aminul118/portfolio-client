import ForgotPasswordForm from '@/components/modules/Authentication/ForgotPasswordForm';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';

const ForgotPasswordPage = () => {
  return (
    <div className="center">
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPasswordPage;

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Forgot Password | SHRL',
  description: 'Description for Forgot Password Page',
  keywords: 'keyword',
  websitePath: '/forgot-password',
});
// >> SEO End
