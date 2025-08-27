type HeadingType = {
  heading: string;
  description?: string;
  className?: string;
};

const SectionHeading = ({ heading, description, className }: HeadingType) => {
  return (
    <div
      className={`max-w-2xl mx-auto py-12 space-y-3 px-2 text-center text-white/60 ${className}`}
    >
      <h1 className="text-4xl font-bold text-center  ">{heading}</h1>
      <p>{description}</p>
    </div>
  );
};

export default SectionHeading;
