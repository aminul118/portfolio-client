import { Loader } from 'lucide-react';

const GlobalLoading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex items-center gap-2 text-gray-600">
        <Loader size={40} className="animate-spin" />
      </div>
    </div>
  );
};

export default GlobalLoading;
