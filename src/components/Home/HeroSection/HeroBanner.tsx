import Image from 'next/image';
import BannerText from './BannerText';

const HeroBanner = () => {
  return (
    <section className="bg-slate-900 pt-12 lg:pt-20">
      <div className="flex flex-col lg:flex-row justify-between container mx-auto px-2">
        <div className="max-w-2xl">
          <BannerText />
        </div>
        <Image
          src="/assets/banner/aminul.png"
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
