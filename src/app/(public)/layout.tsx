import Footer from '@/components/layouts/Footer/Footer';
import Navbar from '@/components/layouts/Navbar/Navbar';
import { getMe } from '@/services/user/users';
import { Children } from '@/types';

const RootLayout = async ({ children }: Children) => {
  const { data } = await getMe();
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar user={data} />
      <div className="flex-grow">{children}</div>
      <Footer />
    </main>
  );
};

export default RootLayout;
