import React from 'react';

type SectionBannerProps = {
  heading?: string;
  description?: string;
  className?: string;
  backgroundImagePath?: string;
};

const SectionBanner: React.FC<SectionBannerProps> = ({
  heading,
  description,
  className,
  backgroundImagePath,
}) => {
  return (
    <div
      className={`${className} relative w-full h-64 bg-cover bg-center  flex items-center justify-center `}
      style={{
        backgroundImage: backgroundImagePath
          ? `url('${backgroundImagePath}')`
          : 'none',
      }}
    >
      {backgroundImagePath && (
        <div className="absolute inset-0 bg-black opacity-50"></div>
      )}
      <div className="relative z-10 text-center max-w-2xl px-4">
        <h2 className="text-2xl lg:text-4xl font-bold mb-4">{heading}</h2>
        {description && <p className="text-lg">{description}</p>}
      </div>
    </div>
  );
};

export default SectionBanner;
