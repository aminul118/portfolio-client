import Image from 'next/image';
import Logo from '../../common/Logo';
import icons from '@/constants/icons';

const Footer = () => {
  return (
    <footer className=" bg-slate-900 flex flex-col items-center gap-3 p-10 text-primary/80">
      <Image
        src={icons.logo}
        width={60}
        height={60}
        alt="Aminul Islam Developer Logo footer"
        priority={true}
      />

      <div className="text-center space-y-4">
        <p className="text-3xl font-semibold">Aminul</p>
        <Logo flexAlign="justify-center" />

        <p className="text-sm mt-8">
          Copyright © {new Date().getFullYear()} - All right reserved by Md.
          Aminul Islam
        </p>
      </div>
    </footer>
  );
};

export default Footer;
