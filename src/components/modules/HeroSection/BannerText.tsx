/* eslint-disable react/no-unescaped-entities */
'use client';
import DownloadResume from '@/components/common/DownloadResume';
import Logo from '@/components/common/Logo';
import { Typewriter } from 'react-simple-typewriter';

const BannerText = () => {
  return (
    <div className="flex flex-col h-full justify-center pb-12 gap-6 text-white/60">
      <div>
        <p>I'm</p>
        <h1 className="text-3xl lg:text-4xl font-bold mt-1">
          <Typewriter
            words={['Md. Aminul Islam', 'Full Stack Developer', 'SEO Expert']}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
      </div>
      <p>
        Creative front-end & Backend developer with Proficient in JavaScript,
        TypeScript, React, Next js, MongoDB, Node JS. Passionate about
        programming and SEO.
      </p>
      <Logo />
      <DownloadResume />
    </div>
  );
};

export default BannerText;
