import Footer from '@/components/layouts/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';

import { IChildren } from '@/types';

const RootLayout = ({ children }: IChildren) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
