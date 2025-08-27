import Image from 'next/image';
import BannerText from './BannerText';
import images from '@/constants/images';

const HeroBanner = () => {
  return (
    <section className=" pt-12 lg:pt-32 bg-slate-900">
      <div className="flex flex-col lg:flex-row justify-between container mx-auto px-2">
        <div className="max-w-2xl">
          <BannerText />
        </div>
        <Image
          src={images.banner.hero}
          width={500}
          height={300}
          alt="aminul islam web developer image"
          priority={true}
        />
      </div>
    </section>
  );
};

export default HeroBanner;
