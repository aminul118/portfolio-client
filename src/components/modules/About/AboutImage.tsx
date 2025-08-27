import images from '@/constants/images';
import Image from 'next/image';

const AboutImage = () => {
  return (
    <div className="relative w-48 h-48">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-[20%] transform rotate-45"></div>
      <div className="relative w-full h-full flex justify-center items-center overflow-hidden rounded-[20%] transform rotate-45 bg-black">
        <div className="w-full h-full transform -rotate-45">
          <Image
            src={images.aminul2}
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
