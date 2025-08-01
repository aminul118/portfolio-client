import Image from 'next/image';
import React from 'react';

const AboutImage = () => {
  return (
    <div className="relative w-48 h-48" data-aos="fade-left">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-[20%] transform rotate-45"></div>
      <div className="relative w-full h-full flex justify-center items-center overflow-hidden rounded-[20%] transform rotate-45 bg-black">
        <div className="w-full h-full transform -rotate-45">
          <Image
            src="/assets/about/aminul.jpg"
            alt="Profile Picture"
            width={400}
            height={400}
            className="rounded-[20%] object-cover scale-150"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutImage;
