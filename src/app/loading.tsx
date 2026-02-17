import CenterSpinner from '@/components/common/loader/CenterSpinner';

const GlobalLoading = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <CenterSpinner className="mt-0" />
    </div>
  );
};

export default GlobalLoading;
