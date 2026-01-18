import SocialLinks from '@/components/modules/Public/Home/SocialLinks';
import icons from '@/constants/icons';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="text-primary/80 flex flex-col items-center gap-3 bg-slate-900 p-10">
      <Image
        src={icons.logo}
        width={60}
        height={60}
        alt="Aminul Islam Developer Logo footer"
        priority={true}
      />

      <div className="space-y-4 text-center">
        <p className="text-3xl font-semibold">Aminul</p>
        <SocialLinks flexAlign="justify-center" />

        <p className="mt-8 text-sm">
          Copyright © {new Date().getFullYear()} - All right reserved by Md.
          Aminul Islam
        </p>
      </div>
    </footer>
  );
};

export default Footer;
