const TopLoader = () => {
  return (
    <div className="relative z-50">
      <div className="before:animate-loading-bar relative overflow-hidden before:absolute before:top-0 before:left-0 before:h-[3px] before:w-full before:bg-gradient-to-r before:from-pink-600 before:to-purple-600" />
    </div>
  );
};

export default TopLoader;
