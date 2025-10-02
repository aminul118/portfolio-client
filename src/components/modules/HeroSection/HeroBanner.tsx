/* eslint-disable react/no-unescaped-entities */
import DownloadResume from '@/components/common/DownloadResume';
import Logo from '@/components/common/Logo';
import WriterEffect from '@/components/ui/writer-effect';
import images from '@/constants/images';
import Image from 'next/image';

const HeroBanner = () => {
  return (
    <section className="bg-slate-900 pt-12 lg:pt-32">
      <div className="container mx-auto flex flex-col justify-between px-2 lg:flex-row">
        <div className="max-w-2xl">
          <div className="flex h-full flex-col justify-center gap-6 pb-12 text-white/60">
            <div>
              <p>I'm</p>
              <h1 className="mt-1 text-3xl font-bold lg:text-4xl">
                <WriterEffect
                  words={[
                    'Md. Aminul Islam',
                    'Full Stack Developer',
                    'SEO Expert',
                  ]}
                />
              </h1>
            </div>
            <p>
              Creative front-end & Backend developer with Proficient in
              TypeScript, React, Next js, MongoDB, MySQL, Postgresql Node JS,
              Express js and SEO, Passionate about programming.
            </p>
            <Logo />
            <DownloadResume />
          </div>
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
