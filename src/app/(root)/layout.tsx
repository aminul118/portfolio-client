import Footer from '@/components/layouts/Footer/Footer';
import Navbar from '@/components/layouts/Navbar/Navbar';
import { IChildren } from '@/types';

const RootLayout = ({ children }: IChildren) => {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-grow">{children}</div>
      <Footer />
    </main>
  );
};

export default RootLayout;
