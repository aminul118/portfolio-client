/* eslint-disable react/no-unescaped-entities */
'use client';
import DownloadResume from '@/components/common/DownloadResume';
import Logo from '@/components/common/Logo';
import { Typewriter } from 'react-simple-typewriter';

const BannerText = () => {
  return (
    <div className="flex flex-col h-full justify-center pb-12 gap-3 text-white/60">
      <p>I'm</p>
      <h1 className="text-3xl lg:text-4xl font-bold">
        <Typewriter
          words={['Aminul Islam', 'A Front-end Developer', 'A quicker thinker']}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <p>
        Creative front-end developer with Proficient in JavaScript, TypeScript,
        React, Next js, MongoDB, Node JS. Passionate about programming.
      </p>
      <Logo />
      <DownloadResume />
    </div>
  );
};

export default BannerText;
